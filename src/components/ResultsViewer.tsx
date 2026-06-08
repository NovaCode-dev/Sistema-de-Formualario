import React, { useState, useEffect } from 'react';
import { ResultsUploader } from './ResultsUploader';
import { ResultsSummaryCards } from './ResultsSummaryCards';
import { ResultsCharts } from './ResultsCharts';
import { ResultsFilterBar } from './ResultsFilterBar';
import { ResultsTable } from './ResultsTable';
import { SurveyResult } from '../types/results';
import { BarChart3, UploadCloud, Info, Database, Eye, ShieldAlert, CheckCircle2, AlertTriangle, Loader2 } from 'lucide-react';
import { SYSTEMS_DB } from '../data/systemsDb';
import { fetchFromSupabase, SUPABASE_CATALOG_TABLE, SUPABASE_SURVEYS_TABLE } from '../config/supabase';

interface UploadedFileDetail {
  name: string;
  developer: string;
  team: string;
  totalCount: number;
  validCount: number;
  invalidCount: number;
  invalidEndpoints: Array<{ system: string; controller: string; endpoint: string }>;
}

const normalizeSystem = (sys: string): string => {
  return sys.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
};

const normalizeEndpointFull = (ep: string): string => {
  let cleaned = ep.trim().toLowerCase();
  cleaned = cleaned.replace(/^(get|post|put|delete|patch|options|head)\s+/, '');
  cleaned = cleaned.replace(/^\/+|\/+$/g, '');
  if (cleaned.startsWith('api/')) {
    cleaned = cleaned.substring(4);
  }
  return cleaned;
};

// Set exportable y dinámico de endpoints oficiales
export const VALID_ENDPOINTS = new Set<string>();

// Poblar desde el catálogo local SYSTEMS_DB (.ts)
export function populateValidEndpointsLocal() {
  VALID_ENDPOINTS.clear();
  for (const [sysName, modules] of Object.entries(SYSTEMS_DB)) {
    const normSys = normalizeSystem(sysName);
    for (const mod of modules) {
      if (!mod.controllers) continue;
      for (const ctrl of mod.controllers) {
        if (!ctrl.endpoints) continue;
        for (const ep of ctrl.endpoints) {
          VALID_ENDPOINTS.add(`${normSys}|${normalizeEndpointFull(ep)}`);
        }
      }
    }
  }
}

// Poblar dinámicamente desde la base de datos de Supabase (Tabla A)
export function populateValidEndpointsFromSupabase(catalogData: any[]) {
  VALID_ENDPOINTS.clear();
  catalogData.forEach(row => {
    const normSys = normalizeSystem(row.system_name || '');
    const controllers = row.controllers || [];
    controllers.forEach((ctrl: any) => {
      const endpoints = ctrl.endpoints || [];
      endpoints.forEach((ep: string) => {
        VALID_ENDPOINTS.add(`${normSys}|${normalizeEndpointFull(ep)}`);
      });
    });
  });
}

// Inicializar por defecto con los datos locales
// populateValidEndpointsLocal();

export const ResultsViewer: React.FC = () => {
  const [results, setResults] = useState<SurveyResult[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFileDetail[]>([]);
  const [subTab, setSubTab] = useState<'upload' | 'charts' | 'list'>('upload');
  const [inspectingFileIndex, setInspectingFileIndex] = useState<number | null>(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProjects, setSelectedProjects] = useState<string[]>([]);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [selectedUsages, setSelectedUsages] = useState<string[]>([]);

  // CONTROL DE ESTADO DE CARGA Y API DE SUPABASE
  const [isLoading, setIsLoading] = useState(false);
  const [supabaseError, setSupabaseError] = useState<string | null>(null);
  const [catalogData, setCatalogData] = useState<any[]>([]);

  useEffect(() => {
    const fetchCatalogAndSurveys = async () => {
      try {
        setIsLoading(true);
        setSupabaseError(null);

        // 1. CARGA DE LA BASE OFICIAL (Tabla A en Supabase)
        // Consultamos la tabla del catálogo consolidado que creamos
        const data = await fetchFromSupabase(SUPABASE_CATALOG_TABLE);
        if (data && data.length > 0) {
          populateValidEndpointsFromSupabase(data);
          setCatalogData(data);
          console.log(`[Supabase] Cargados ${data.length} módulos del catálogo correctamente.`);
        }

        // 2. CARGA DE LAS ENCUESTAS RECOPILADAS (Tabla B en Supabase)
        const surveyData = await fetchFromSupabase(SUPABASE_SURVEYS_TABLE, 'select=*', true);
        if (surveyData && surveyData.length > 0) {
          // La data viene en formato plano (cada registro es un endpoint individual asignado a un dev).
          // La agrupamos por desarrollador/equipo para que el frontend lo reconozca como SurveyResult[].
          const groupedMap = new Map<string, SurveyResult>();

          surveyData.forEach((row: any) => {
            const dev = row.developer || {};
            const devName = typeof dev.name === 'string' && dev.name.trim() ? dev.name.trim() : 'Desarrollador Desconocido';
            const devTeam = typeof dev.team === 'string' && dev.team.trim() ? dev.team.trim() : 'Sin Equipo';
            const devRole = typeof dev.role === 'string' && dev.role.trim() ? dev.role.trim() : 'automated parser';
            
            const groupKey = `${devName}||${devTeam}`;
            
            const system = row.system || '';
            const controller = row.controller || '';
            const endpoint = row.endpoint || '';
            const usage = row.usage || 'NONE';
            
            const mappingEntry = {
              system,
              controller,
              endpoint,
              usage: (['FRONT', 'BACK', 'BOTH', 'NONE'].includes(usage) ? usage : 'NONE') as 'FRONT' | 'BACK' | 'BOTH' | 'NONE'
            };

            if (!groupedMap.has(groupKey)) {
              groupedMap.set(groupKey, {
                developer: {
                  name: devName,
                  team: devTeam,
                  role: devRole
                },
                timestamp: row.created_at || new Date().toISOString(),
                systemsConsumed: [system].filter(Boolean),
                endpointMappings: [mappingEntry]
              });
            } else {
              const group = groupedMap.get(groupKey)!;
              group.endpointMappings.push(mappingEntry);
              if (system && !group.systemsConsumed.includes(system)) {
                group.systemsConsumed.push(system);
              }
            }
          });

          const normalizedSurveys = Array.from(groupedMap.values());
          setResults(normalizedSurveys);
        }
        

      } catch (err: any) {
        console.error('Error al consultar Supabase:', err);
        setSupabaseError(err.message || 'Error al conectar con Supabase');
      } finally {
        setIsLoading(false);
      }
    };

    fetchCatalogAndSurveys();
  }, []);

  const handleAddResults = (newResults: SurveyResult[], fileName: string) => {
    setResults(prev => [...prev, ...newResults]);
    
    const fileDetails = newResults.map(r => {
      const declaredMappings = r.endpointMappings.filter(em => em.usage && em.usage !== 'NONE');
      
      const validEndpoints: typeof declaredMappings = [];
      const invalidEndpoints: typeof declaredMappings = [];

      declaredMappings.forEach(em => {
        const normSys = normalizeSystem(em.system);
        const normEp = normalizeEndpointFull(em.endpoint);
        
        if (VALID_ENDPOINTS.has(`${normSys}|${normEp}`)) {
          validEndpoints.push(em);
        } else {
          invalidEndpoints.push(em);
        }
      });

      return {
        name: fileName,
        developer: r.developer.name,
        team: r.developer.team,
        totalCount: declaredMappings.length,
        validCount: validEndpoints.length,
        invalidCount: invalidEndpoints.length,
        invalidEndpoints: invalidEndpoints.map(em => ({
          system: em.system,
          controller: em.controller,
          endpoint: em.endpoint
        }))
      };
    });
    
    setUploadedFiles(prev => [...prev, ...fileDetails]);
  };

  const handleRemoveFile = (index: number) => {
    const fileToRemove = uploadedFiles[index];
    
    setUploadedFiles(prev => prev.filter((_, idx) => idx !== index));
    setResults(prev => prev.filter(r => 
      !(r.developer.name === fileToRemove.developer && r.developer.team === fileToRemove.team)
    ));
    setInspectingFileIndex(null);
  };

  const availableProjects = Array.from(new Set(results.map(r => r.developer.team.trim()).filter(Boolean)));
  
  const availableSystems = results.length > 0
    ? Array.from(new Set(results.flatMap(r => r.endpointMappings.map(m => m.system).filter(Boolean))))
    : Object.keys(SYSTEMS_DB);


  const handleProjectToggle = (project: string) => {
    setSelectedProjects(prev =>
      prev.includes(project) ? prev.filter(p => p !== project) : [...prev, project]
    );
  };

  const handleSystemToggle = (system: string) => {
    setSelectedSystems(prev =>
      prev.includes(system) ? prev.filter(s => s !== system) : [...prev, system]
    );
  };

  const handleUsageToggle = (usage: string) => {
    setSelectedUsages(prev =>
      prev.includes(usage) ? prev.filter(u => u !== usage) : [...prev, usage]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedProjects([]);
    setSelectedSystems([]);
    setSelectedUsages([]);
  };

  const showEmptyState = () => (
    <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm flex flex-col items-center justify-center min-h-[400px] w-full">
      <div className="p-4 bg-blue-50 text-blue-600 rounded-full shadow-inner mb-4">
        <UploadCloud className="w-10 h-10 animate-bounce" />
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-1">
        No hay datos para mostrar
      </h3>
      <p className="text-gray-500 text-sm max-w-sm mb-6">
        Por favor, primero carga al menos un archivo JSON desde la sección "Cargar Datos" para habilitar las visualizaciones y reportes.
      </p>
      <button
        type="button"
        onClick={() => setSubTab('upload')}
        className="px-6 py-2.5 rounded-xl font-bold text-sm bg-blue-600 text-white shadow-lg shadow-blue-100 hover:bg-blue-700 transition-all"
      >
        Ir a Cargar Datos
      </button>
    </div>
  );

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 w-full">
      {supabaseError && (
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-4 py-3 rounded-2xl flex items-center space-x-3 text-xs md:text-sm animate-in fade-in duration-300">
          <AlertTriangle className="w-5 h-5 shrink-0 text-amber-600" />
          <div className="flex-1">
            <span className="font-bold">Aviso de Supabase:</span> {supabaseError}. Usando la base de datos estática local como respaldo.
          </div>
        </div>
      )}

      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-900/60 backdrop-blur-md transition-all duration-300 animate-in fade-in">
          <div className="bg-white/95 p-8 rounded-3xl shadow-2xl border border-white/20 flex flex-col items-center max-w-sm mx-auto text-center space-y-4">
            <div className="relative flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
              <Loader2 className="w-8 h-8 text-blue-600 animate-spin absolute" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800">Cargando Datos</h3>
              <p className="text-sm text-slate-500 mt-1">
                Sincronizando encuestas y catálogo con Supabase. Por favor, espere...
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 flex items-center">
            <BarChart3 className="w-6 h-6 mr-2 text-blue-600" />
            Visor Consolidado de Resultados
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            Carga y analiza las respuestas enviadas por los encuestados de los proyectos.
          </p>
        </div>
      </div>

      <div className="flex border-b border-gray-200 w-full overflow-x-auto shrink-0">
        <button
          type="button"
          onClick={() => setSubTab('upload')}
          className={`flex items-center space-x-2 px-6 py-3 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${
            subTab === 'upload'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
          }`}
        >
          <UploadCloud className="w-4 h-4" />
          <span>Resultados de la Encuesta</span>
        </button>

        <button
          type="button"
          onClick={() => setSubTab('charts')}
          className={`flex items-center space-x-2 px-6 py-3 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${
            subTab === 'charts'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Ver Panel (Gráficos)</span>
        </button>

        <button
          type="button"
          onClick={() => setSubTab('list')}
          className={`flex items-center space-x-2 px-6 py-3 font-bold text-sm border-b-2 transition-all whitespace-nowrap ${
            subTab === 'list'
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-500 hover:text-gray-800 hover:border-gray-300'
          }`}
        >
          <Database className="w-4 h-4" />
          <span>Listado de APIs</span>
        </button>
      </div>

      <div className="w-full pt-2">
        {subTab === 'upload' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
            <div className="hidden lg:col-span-1 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4 h-fit">
              <h3 className="font-bold text-gray-800 flex items-center text-sm md:text-base">
                <UploadCloud className="w-5 h-5 mr-2 text-blue-600" />
                Cargar Respuestas JSON
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Sube uno o varios archivos JSON generados por la encuesta de los desarrolladores para consolidar sus datos.
              </p>
              <ResultsUploader 
                uploadedFiles={uploadedFiles}
                onRemoveFile={handleRemoveFile}
                onAddResults={handleAddResults}
              />
            </div>

            <div className="lg:col-span-2 space-y-6 w-full">
              {results.length === 0 ? (
                <div className="bg-white border border-gray-200 rounded-2xl p-12 text-center shadow-sm flex flex-col items-center justify-center min-h-[350px] w-full">
                  <div className="p-4 bg-blue-50 text-blue-600 rounded-full shadow-inner mb-4">
                    <UploadCloud className="w-10 h-10" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    Listo para recibir encuestas
                  </h3>
                  <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
                    Utiliza el panel izquierdo para arrastrar o hacer clic y cargar las respuestas de los equipos de desarrollo.
                  </p>
                </div>
              ) : (
                <div className="space-y-6 w-full">
                  <ResultsSummaryCards results={results} />
                  
                  <div className="hidden bg-white border border-gray-200 rounded-2xl p-6 shadow-sm w-full">
                    <h3 className="font-bold text-gray-800 mb-4 flex items-center text-sm md:text-base">
                      <Info className="w-5 h-5 mr-2 text-blue-600" />
                      Resumen de Archivos Cargados
                    </h3>
                    <div className="overflow-x-auto w-full">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Archivo</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Desarrollador</th>
                            <th className="px-4 py-3 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Equipo</th>
                            <th className="px-4 py-3 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Declarados</th>
                            <th className="px-4 py-3 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Válidos</th>
                            <th className="px-4 py-3 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">No Reconocidos</th>
                            <th className="px-4 py-3 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Acciones</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
                          {uploadedFiles.map((file, idx) => (
                            <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                              <td className="px-4 py-3 font-semibold text-gray-900">{file.name}</td>
                              <td className="px-4 py-3">{file.developer}</td>
                              <td className="px-4 py-3">{file.team}</td>
                              <td className="px-4 py-3 text-right font-bold text-gray-500">{file.totalCount}</td>
                              <td className="px-4 py-3 text-right">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-lg bg-green-50 text-green-700 border border-green-200 font-bold">
                                  {file.validCount}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-right">
                                <span className={`inline-flex items-center px-2 py-0.5 rounded-lg font-bold ${
                                  file.invalidCount > 0 
                                    ? 'bg-amber-50 text-amber-700 border border-amber-200' 
                                    : 'bg-gray-50 text-gray-400 border border-gray-100'
                                }`}>
                                  {file.invalidCount}
                                </span>
                              </td>
                              <td className="px-4 py-3 text-center">
                                {file.invalidCount > 0 ? (
                                  <button
                                    type="button"
                                    onClick={() => setInspectingFileIndex(inspectingFileIndex === idx ? null : idx)}
                                    className={`p-1.5 rounded-lg border transition-all ${
                                      inspectingFileIndex === idx
                                        ? 'bg-amber-600 text-white border-amber-600'
                                        : 'bg-white hover:bg-amber-50 text-amber-600 border-gray-200 hover:border-amber-200'
                                    }`}
                                    title="Inspeccionar endpoints no reconocidos"
                                  >
                                    <Eye className="w-4 h-4" />
                                  </button>
                                ) : (
                                  <span className="inline-flex items-center text-green-500" title="Todo válido">
                                    <CheckCircle2 className="w-4 h-4" />
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {inspectingFileIndex !== null && uploadedFiles[inspectingFileIndex] && (
                    <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6 shadow-sm space-y-4 animate-in fade-in slide-in-from-top-2 w-full">
                      <div className="flex justify-between items-center gap-4">
                        <div>
                          <h4 className="font-bold text-gray-800 flex items-center text-sm md:text-base">
                            <ShieldAlert className="w-5 h-5 mr-2 text-amber-600" />
                            Detalle de validación: {uploadedFiles[inspectingFileIndex].name}
                          </h4>
                          <p className="text-xs text-gray-500 mt-1">
                            Mostrando {uploadedFiles[inspectingFileIndex].invalidEndpoints.length} endpoints cargados que no se encuentran catalogados en SYSTEMS_DB.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setInspectingFileIndex(null)}
                          className="text-xs font-bold text-gray-500 hover:text-gray-800 bg-white border border-gray-200 hover:border-gray-300 rounded-xl px-3 py-1.5 shadow-sm transition-all shrink-0"
                        >
                          Cerrar
                        </button>
                      </div>

                      <div className="max-h-60 overflow-y-auto border border-amber-200 rounded-xl divide-y divide-amber-100 bg-white shadow-inner">
                        {uploadedFiles[inspectingFileIndex].invalidEndpoints.map((ep, epIdx) => (
                          <div key={epIdx} className="p-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-amber-50/30 transition-colors">
                            <div className="font-mono text-gray-700 leading-relaxed">
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 mr-2 border border-amber-200">
                                {ep.system}
                              </span>
                              <span className="text-gray-400 font-semibold mr-2">[{ep.controller}]</span>
                              <span className="font-medium">{ep.endpoint}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {subTab === 'charts' && (
          <div className="space-y-6 w-full">
            {results.length === 0 ? (
              showEmptyState()
            ) : (
              <>
                <ResultsSummaryCards results={results} />
                <ResultsCharts results={results} />
              </>
            )}
          </div>
        )}

        <div className={subTab === 'list' ? 'space-y-6 w-full animate-in fade-in duration-200' : 'hidden'}>
          <ResultsFilterBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            selectedProjects={selectedProjects}
            onProjectChange={handleProjectToggle}
            availableProjects={availableProjects}
            selectedSystems={selectedSystems}
            onSystemChange={handleSystemToggle}
            availableSystems={availableSystems}
            selectedUsages={selectedUsages}
            onUsageChange={handleUsageToggle}
            onClearFilters={handleClearFilters}
          />
          
          <ResultsTable 
            results={results}
            searchTerm={searchTerm}
            selectedProjects={selectedProjects}
            selectedSystems={selectedSystems}
            selectedUsages={selectedUsages}
            catalogData={catalogData}
          />
        </div>
      </div>
    </div>
  );
};
