import React from 'react';
import { Database } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { SYSTEMS_DB } from '../../data/systemsDb';
import { validEndpoints, normalizeSystem, normalizeEndpointFull, getSystemGradient } from './chartUtils';

interface ChartOrphanEndpointsProps {
  results: SurveyResult[];
}

interface OrphanSystemItem {
  system: string;
  totalInDb: number;
  consumed: number;
  orphan: number;
  coveragePct: number;
}

export const ChartOrphanEndpoints: React.FC<ChartOrphanEndpointsProps> = ({ results }) => {
  const consumedEndpointsMap: Record<string, Set<string>> = {};

  results.forEach(r => {
    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const normSys = normalizeSystem(mapping.system);
        const normEp = normalizeEndpointFull(mapping.endpoint);
        const matchKey = `${normSys}|${normEp}`;

        if (validEndpoints.has(matchKey)) {
          const sysName = mapping.system.trim();
          if (!consumedEndpointsMap[sysName]) {
            consumedEndpointsMap[sysName] = new Set<string>();
          }
          consumedEndpointsMap[sysName].add(normEp);
        }
      }
    });
  });

  const orphanData: OrphanSystemItem[] = Object.entries(SYSTEMS_DB).map(([sysName, modules]) => {
    const allEndpoints = new Set<string>();
    
    modules.forEach(mod => {
      mod.controllers.forEach(ctrl => {
        ctrl.endpoints.forEach(ep => {
          allEndpoints.add(normalizeEndpointFull(ep));
        });
      });
    });

    const totalInDb = allEndpoints.size;
    const consumed = (consumedEndpointsMap[sysName]?.size) || 0;
    const orphan = totalInDb - consumed;
    const coveragePct = totalInDb > 0 ? Math.round((consumed / totalInDb) * 100) : 0;

    return {
      system: sysName,
      totalInDb,
      consumed,
      orphan,
      coveragePct
    };
  }).sort((a, b) => a.coveragePct - b.coveragePct);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          <Database className="w-5 h-5 mr-2 text-blue-600 animate-pulse" />
          Cobertura de Catálogo de Endpoints
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Endpoints en uso vs endpoints huérfanos (catalogados en la base de datos pero no consumidos).
        </p>

        <div className="space-y-4">
          {orphanData.map((item, idx) => {
            const gradient = getSystemGradient(item.system);
            return (
              <div key={`${item.system}-${idx}`} className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-gray-800">{item.system}</span>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500 font-semibold">
                      {item.consumed} de {item.totalInDb} en uso
                    </span>
                    <span className="text-gray-950 font-extrabold">{item.coveragePct}% cobertura</span>
                  </div>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200/50 flex">
                  {item.consumed > 0 && (
                    <div 
                      className={`bg-gradient-to-r ${gradient} h-full rounded-l-full transition-all duration-700`}
                      style={{ width: `${item.coveragePct}%` }}
                    />
                  )}
                  {item.orphan > 0 && (
                    <div 
                      className="bg-gray-200 h-full rounded-r-full transition-all duration-700"
                      style={{ width: `${100 - item.coveragePct}%` }}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
