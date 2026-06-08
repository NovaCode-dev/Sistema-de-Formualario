import React, { useState, useEffect, useMemo } from 'react';
import { Download, ShieldAlert, Info, ChevronLeft, ChevronRight } from 'lucide-react';
import { SurveyResult } from '../types/results';
import { SYSTEMS_DB } from '../data/systemsDb';

interface ResultsTableProps {
  results: SurveyResult[];
  searchTerm: string;
  selectedProjects: string[];
  selectedSystems: string[];
  selectedUsages: string[];
  catalogData?: any[];
}

interface TableRowData {
  system: string;
  controller: string;
  endpoint: string;
  method: string;
  path: string;
  usages: Array<{ developer: string; team: string; usage: string }>;
  isDynamic?: boolean;
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

const extractMethod = (ep: string): string => {
  const match = ep.trim().match(/^(get|post|put|delete|patch|options|head)/i);
  return match ? match[0].toLowerCase() : '';
};

const buildConsolidatedCatalog = (results: SurveyResult[], catalogData?: any[]): TableRowData[] => {
  const catalog: TableRowData[] = [];
  const catalogMap = new Map<string, TableRowData>();

  if (catalogData && catalogData.length > 0) {
    catalogData.forEach(row => {
      const sysName = row.system_name || '';
      const controllers = row.controllers || [];
      
      controllers.forEach((ctrl: any) => {
        const ctrlName = ctrl.name || '';
        const endpoints = ctrl.endpoints || [];
        
        endpoints.forEach((ep: string) => {
          const [method, ...rest] = ep.trim().split(' ');
          const path = rest.join(' ');
          
          const rowData: TableRowData = {
            system: sysName,
            controller: ctrlName,
            endpoint: ep,
            method: method || 'GET',
            path: path || ep,
            usages: []
          };
          catalog.push(rowData);
          
          const key = `${normalizeSystem(sysName)}|${extractMethod(ep)}|${normalizeEndpointFull(ep)}`;
          catalogMap.set(key, rowData);
        });
      });
    });
  } else {
    for (const [sysName, modules] of Object.entries(SYSTEMS_DB)) {
      for (const mod of modules) {
        for (const ctrl of mod.controllers) {
          for (const ep of ctrl.endpoints) {
            const [method, ...rest] = ep.split(' ');
            const path = rest.join(' ');
            
            const rowData: TableRowData = {
              system: sysName,
              controller: ctrl.name,
              endpoint: ep,
              method: method || 'GET',
              path: path || ep,
              usages: []
            };
            catalog.push(rowData);

            const key = `${normalizeSystem(sysName)}|${extractMethod(ep)}|${normalizeEndpointFull(ep)}`;
            catalogMap.set(key, rowData);
          }
        }
      }
    }
  }

  // CONFIGURACIÓN TEMPORAL: Permitir mapear endpoints que no están en el catálogo oficial
  const ALLOW_DYNAMIC_ENDPOINTS = true;

  results.forEach(r => {
    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const key = `${normalizeSystem(mapping.system)}|${extractMethod(mapping.endpoint)}|${normalizeEndpointFull(mapping.endpoint)}`;
        let matchingRow = catalogMap.get(key);
        
        // --- INICIO CREACIÓN DINÁMICA TEMPORAL (Removible) ---
        if (!matchingRow && ALLOW_DYNAMIC_ENDPOINTS) {
          const [method, ...rest] = mapping.endpoint.trim().split(' ');
          const path = rest.join(' ');
          
          matchingRow = {
            system: mapping.system,
            controller: mapping.controller || 'Controlador Nuevo (ClickUp)',
            endpoint: mapping.endpoint,
            method: method || 'GET',
            path: path || mapping.endpoint,
            usages: [],
            isDynamic: true
          };
          
          catalog.push(matchingRow);
          catalogMap.set(key, matchingRow);
        }
        // --- FIN CREACIÓN DINÁMICA TEMPORAL ---

        if (matchingRow) {
          const exists = matchingRow.usages.some(u => 
            u.developer.trim().toLowerCase() === r.developer.name.trim().toLowerCase() &&
            u.team.trim().toLowerCase() === r.developer.team.trim().toLowerCase()
          );
          if (!exists) {
            matchingRow.usages.push({
              developer: r.developer.name,
              team: r.developer.team,
              usage: mapping.usage
            });
          }
        }
      }
    });
  });

  return catalog;
};

export const ResultsTable: React.FC<ResultsTableProps> = ({
  results,
  searchTerm,
  selectedProjects,
  selectedSystems,
  selectedUsages,
  catalogData
}) => {
  const [showOnlyConsumed, setShowOnlyConsumed] = useState(results.length > 0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(15);

  useEffect(() => {
    setShowOnlyConsumed(results.length > 0);
  }, [results.length]);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedProjects, selectedSystems, selectedUsages, showOnlyConsumed]);

  const fullCatalog = useMemo(() => buildConsolidatedCatalog(results, catalogData), [results, catalogData]);


  const filteredRows = fullCatalog.filter(row => {
    // Si no estamos en modo "Solo Consumidos", no mostrar las agregadas dinámicamente
    // para no alterar el catálogo oficial de base_endpoints.
    if (!showOnlyConsumed && row.isDynamic) {
      return false;
    }

    if (showOnlyConsumed && row.usages.length === 0) {
      return false;
    }

    if (selectedSystems.length > 0 && !selectedSystems.includes(row.system)) {
      return false;
    }

    if (searchTerm) {
      const matchSearch = 
        row.system.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.controller.toLowerCase().includes(searchTerm.toLowerCase()) ||
        row.path.toLowerCase().includes(searchTerm.toLowerCase());
      if (!matchSearch) return false;
    }

    if (selectedProjects.length > 0) {
      const hasMatchingProject = row.usages.some(u => selectedProjects.includes(u.team));
      if (!hasMatchingProject) return false;
    }

    if (selectedUsages.length > 0) {
      const hasMatchingUsage = row.usages.some(u => selectedUsages.includes(u.usage));
      if (!hasMatchingUsage) return false;
    }

    return true;
  });

  const totalPages = Math.ceil(filteredRows.length / pageSize) || 1;
  const clampedPage = Math.min(currentPage, totalPages);
  
  const startIndex = (clampedPage - 1) * pageSize;
  const paginatedRows = filteredRows.slice(startIndex, startIndex + pageSize);

  const getPageNumbers = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    const pages: (number | string)[] = [];
    pages.push(1);
    if (clampedPage > 3) {
      pages.push('...');
    }
    const start = Math.max(2, clampedPage - 1);
    const end = Math.min(totalPages - 1, clampedPage + 1);
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    if (clampedPage < totalPages - 2) {
      pages.push('...');
    }
    pages.push(totalPages);
    return pages;
  };

  const handleExportCSV = () => {
    const csvHeader = 'Sistema,Controlador,Metodo,Ruta,Uso por Proyectos,Tipo de Consumo,Numero de Consumidores\n';
    const csvRows = filteredRows.map(row => {
      const projectsString = row.usages.map(u => `${u.team} (${u.usage})`).join('; ');
      const uniqueUsageTypes = Array.from(new Set(row.usages.map(u => u.usage)));
      const usageTypesString = uniqueUsageTypes.join('; ');
      
      const cleanSystem = row.system.split('"').join('""');
      const cleanController = row.controller.split('"').join('""');
      const cleanMethod = row.method.split('"').join('""');
      const cleanPath = row.path.split('"').join('""');
      const cleanProjects = projectsString.split('"').join('""');
      const cleanUsageTypes = usageTypesString.split('"').join('""');
      
      return `"${cleanSystem}","${cleanController}","${cleanMethod}","${cleanPath}","${cleanProjects}","${cleanUsageTypes}",${row.usages.length}`;
    });

    const csvContent = '\uFEFF' + csvHeader + csvRows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', url);
    downloadLink.setAttribute('download', `reporte_consolidado_apis_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(downloadLink);
    downloadLink.click();
    downloadLink.remove();
  };

  const methodColors: Record<string, string> = {
    'GET': 'bg-green-100 text-green-700 border border-green-200',
    'POST': 'bg-blue-100 text-blue-700 border border-blue-200',
    'PUT': 'bg-orange-100 text-orange-700 border border-orange-200',
    'DELETE': 'bg-red-100 text-red-700 border border-red-200',
    'PATCH': 'bg-purple-100 text-purple-700 border border-purple-200'
  };

  const usageColors: Record<string, string> = {
    'FRONT': 'bg-blue-50 text-blue-600 border border-blue-100',
    'BACK': 'bg-green-50 text-green-600 border border-green-100',
    'BOTH': 'bg-purple-50 text-purple-600 border border-purple-100'
  };

  const usageLabels: Record<string, string> = {
    'FRONT': 'Front',
    'BACK': 'Back',
    'BOTH': 'Ambos'
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <button
            type="button"
            onClick={() => setShowOnlyConsumed(true)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              showOnlyConsumed 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            Solo Consumidos ({fullCatalog.filter(row => row.usages.length > 0).length})
          </button>
          <button
            type="button"
            onClick={() => setShowOnlyConsumed(false)}
            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold transition-all ${
              showOnlyConsumed 
                ? 'bg-gray-50 text-gray-600 hover:bg-gray-100' 
                : 'bg-blue-600 text-white shadow-md'
            }`}
          >
            Catálogo Completo ({fullCatalog.filter(row => !row.isDynamic).length})
          </button>
        </div>

        <button
          type="button"
          onClick={handleExportCSV}
          disabled={filteredRows.length === 0}
          className={`inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs md:text-sm font-bold shadow-sm transition-all space-x-2 ${
            filteredRows.length === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
              : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md'
          }`}
        >
          <Download className="w-4 h-4" />
          <span>Exportar a Excel (CSV)</span>
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Sistema
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Controlador
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Método / Ruta
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Proyectos Consumidores
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Tipo de Consumo
                </th>
                <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">
                  Popularidad
                </th>
              </tr>
            </thead>
            
            <tbody className="bg-white divide-y divide-gray-100 text-sm">
              {filteredRows.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-400 italic">
                    <div className="flex flex-col items-center justify-center space-y-2">
                      <ShieldAlert className="w-8 h-8 text-gray-300" />
                      <p className="font-semibold text-gray-500">No se encontraron integraciones</p>
                      <p className="text-xs max-w-sm">Prueba ajustando los filtros de búsqueda o asegurando que cargaste respuestas válidas.</p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedRows.map((row, idx) => {
                  const popularity = results.length > 0 
                    ? Math.round((row.usages.length / results.length) * 100) 
                    : 0;

                  let popularityColor = 'bg-amber-500';
                  if (popularity > 60) {
                    popularityColor = 'bg-emerald-500';
                  } else if (popularity > 25) {
                    popularityColor = 'bg-blue-500';
                  }

                  const uniqueUsageTypes = new Set(row.usages.map(u => u.usage));

                  return (
                    <tr key={`${row.system}-${row.controller}-${row.endpoint}-${idx}`} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-bold bg-gray-100 text-gray-800 border border-gray-200">
                          {row.system}
                        </span>
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap">
                        <p className="font-mono text-xs font-semibold text-blue-800">
                          {row.controller}
                        </p>
                      </td>
                      
                      <td className="px-6 py-4 max-w-[200px] md:max-w-[300px]">
                        <div className="flex items-center space-x-2 overflow-hidden">
                          <span className={`px-2 py-0.5 text-2xs font-extrabold rounded-md shrink-0 ${methodColors[row.method] || 'bg-gray-100 text-gray-800 border border-gray-200'}`}>
                            {row.method}
                          </span>
                          <span 
                            title={row.endpoint} 
                            className="font-mono text-xs text-gray-600 truncate block"
                          >
                            {row.path}
                          </span>
                        </div>
                      </td>
                      
                      <td className="px-6 py-4">
                        {row.usages.length === 0 ? (
                          <span className="text-xs text-gray-400 italic flex items-center">
                            <Info className="w-3.5 h-3.5 mr-1" /> Sin consumo activo
                          </span>
                        ) : (
                          <div className="flex flex-wrap gap-1.5 max-w-xs">
                            {row.usages.map((u, uIdx) => (
                              <span 
                                key={`${row.system}-${row.controller}-${row.endpoint}-${u.team}-${u.developer}-${uIdx}`} 
                                title={`Desarrollador: ${u.developer}`}
                                className={`inline-flex items-center px-2 py-0.5 rounded-full text-2xs font-semibold ${usageColors[u.usage] || 'bg-gray-100 text-gray-700'}`}
                              >
                                {u.team}: {usageLabels[u.usage]}
                              </span>
                            ))}
                          </div>
                        )}
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        {row.usages.length === 0 ? (
                          <span className="text-xs text-gray-400 italic">Sin consumo</span>
                        ) : (
                          <div className="flex space-x-1">
                            {uniqueUsageTypes.has('FRONT') && (
                              <span className="px-2.5 py-0.5 rounded-lg text-2xs font-bold bg-blue-100 text-blue-700 border border-blue-200 shadow-sm">
                                FRONT
                              </span>
                            )}
                            {uniqueUsageTypes.has('BACK') && (
                              <span className="px-2.5 py-0.5 rounded-lg text-2xs font-bold bg-green-100 text-green-700 border border-green-200 shadow-sm">
                                BACK
                              </span>
                            )}
                            {uniqueUsageTypes.has('BOTH') && (
                              <span className="px-2.5 py-0.5 rounded-lg text-2xs font-bold bg-purple-100 text-purple-700 border border-purple-200 shadow-sm">
                                AMBOS
                              </span>
                            )}
                          </div>
                        )}
                      </td>
                      
                      <td className="px-6 py-4 whitespace-nowrap text-center">
                        <div className="flex items-center justify-center space-x-2">
                          <div className="w-16 bg-gray-100 rounded-full h-1.5 overflow-hidden border border-gray-200 shrink-0">
                            <div 
                              className={`h-full rounded-full transition-all duration-500 ${popularityColor}`} 
                              style={{ width: `${popularity}%` }}
                            />
                          </div>
                          <span className="text-xs font-bold text-gray-700 min-w-[28px] text-right">
                            {popularity}%
                          </span>
                        </div>
                        <span className="text-2xs text-gray-400">
                          {row.usages.length} de {results.length}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {filteredRows.length > 0 && (
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
          <div className="flex items-center space-x-3 text-xs md:text-sm text-gray-500">
            <span>
              Mostrando <span className="font-semibold text-gray-800">{startIndex + 1}</span> a{' '}
              <span className="font-semibold text-gray-800">
                {Math.min(startIndex + pageSize, filteredRows.length)}
              </span>{' '}
              de <span className="font-semibold text-gray-800">{filteredRows.length}</span> registros
            </span>
            <span className="text-gray-300">|</span>
            <div className="flex items-center space-x-2">
              <span>Mostrar:</span>
              <select
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="border border-gray-300 rounded-lg px-2 py-1 bg-white text-xs font-semibold text-gray-700 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 cursor-pointer"
              >
                <option value={15}>15</option>
                <option value={30}>30</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
                <option value={999999}>Todos</option>
              </select>
            </div>
          </div>

          <div className="flex items-center space-x-1">
            <button
              type="button"
              disabled={clampedPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              className={`p-2 rounded-lg border transition-all ${
                clampedPage === 1
                  ? 'border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {getPageNumbers().map((num, i) => {
              const isEllipsis = num === '...';
              const isCurrent = clampedPage === num;
              
              let btnClass = 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800';
              if (isEllipsis) {
                btnClass = 'border-transparent bg-transparent text-gray-400 cursor-default';
              } else if (isCurrent) {
                btnClass = 'border-blue-600 bg-blue-600 text-white shadow-md';
              }

              return (
                <button
                  key={`page-btn-${num}-${i}`}
                  type="button"
                  disabled={isEllipsis}
                  onClick={() => typeof num === 'number' && setCurrentPage(num)}
                  className={`px-3 py-1 rounded-lg border text-xs md:text-sm font-semibold transition-all ${btnClass}`}
                >
                  {num}
                </button>
              );
            })}

            <button
              type="button"
              disabled={clampedPage === totalPages}
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              className={`p-2 rounded-lg border transition-all ${
                clampedPage === totalPages
                  ? 'border-gray-200 bg-gray-50 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-800'
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

