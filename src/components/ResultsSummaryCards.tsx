import React from 'react';
import { Users, FolderGit, Database, Layers } from 'lucide-react';
import { SurveyResult } from '../types/results';
import { SYSTEMS_DB } from '../data/systemsDb';

interface ResultsSummaryCardsProps {
  results: SurveyResult[];
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

const VALID_ENDPOINTS = new Set<string>();

for (const [sysName, modules] of Object.entries(SYSTEMS_DB)) {
  const normSys = normalizeSystem(sysName);
  for (const mod of modules) {
    for (const ctrl of mod.controllers) {
      for (const ep of ctrl.endpoints) {
        VALID_ENDPOINTS.add(`${normSys}|${normalizeEndpointFull(ep)}`);
      }
    }
  }
}

export const ResultsSummaryCards: React.FC<ResultsSummaryCardsProps> = ({ results }) => {
  const totalDevelopers = results.length;
  
  const projects = Array.from(new Set(results.map(r => r.developer.team.trim()).filter(Boolean)));
  const totalProjects = projects.length;

  const systemsSet = new Set<string>();
  const activeEndpointsSet = new Set<string>();

  results.forEach(r => {
    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const normSys = normalizeSystem(mapping.system);
        const normEp = normalizeEndpointFull(mapping.endpoint);
        
        if (VALID_ENDPOINTS.has(`${normSys}|${normEp}`)) {
          systemsSet.add(mapping.system);
          activeEndpointsSet.add(`${normSys}|${normEp}`);
        }
      }
    });
  });

  const totalSystems = systemsSet.size;
  const totalActiveEndpoints = activeEndpointsSet.size;

  const stats = [
    {
      label: 'Desarrolladores',
      value: totalDevelopers,
      icon: Users,
      color: 'from-blue-500 to-indigo-600',
      shadow: 'shadow-blue-100',
      description: 'Encuestas cargadas'
    },
    {
      label: 'Proyectos / Equipos',
      value: totalProjects,
      icon: FolderGit,
      color: 'from-purple-500 to-pink-600',
      shadow: 'shadow-purple-100',
      description: 'Integraciones activas'
    },
    {
      label: 'Sistemas Integrados',
      value: totalSystems,
      icon: Database,
      color: 'from-emerald-500 to-teal-600',
      shadow: 'shadow-emerald-100',
      description: 'Sistemas con consumo'
    },
    {
      label: 'Endpoints Consumidos',
      value: totalActiveEndpoints,
      icon: Layers,
      color: 'from-amber-500 to-orange-600',
      shadow: 'shadow-amber-100',
      description: 'Rutas únicas mapeadas'
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stats.map((stat) => (
        <div 
          key={stat.label} 
          className={`bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-lg ${stat.shadow} transition-all hover:translate-y-[-2px] duration-200 flex flex-col justify-between`}
        >
          <div className="flex justify-between items-start mb-4">
            <div className="min-w-0 flex-1">
              <p 
                className="text-gray-400 text-xs font-bold tracking-wider uppercase truncate mb-1"
                title={stat.label}
              >
                {stat.label}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                {stat.value}
              </h3>
            </div>
            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md shrink-0 ml-3`}>
              <stat.icon className="w-5 h-5 sm:w-6 h-6" />
            </div>
          </div>
          <div className="text-xs text-gray-500 font-medium">
            {stat.description}
          </div>
        </div>
      ))}
    </div>
  );
};
