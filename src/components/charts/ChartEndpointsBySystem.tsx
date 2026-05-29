import React from 'react';
import { BarChart3 } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { systemNameMap, validEndpoints, normalizeSystem, normalizeEndpointFull, getSystemGradient } from './chartUtils';

interface ChartEndpointsBySystemProps {
  results: SurveyResult[];
}

export const ChartEndpointsBySystem: React.FC<ChartEndpointsBySystemProps> = ({ results }) => {
  const systemCounts: Record<string, Set<string>> = {};

  results.forEach(r => {
    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const normSys = normalizeSystem(mapping.system);
        const normEp = normalizeEndpointFull(mapping.endpoint);
        const matchKey = `${normSys}|${normEp}`;

        if (validEndpoints.has(matchKey)) {
          const canonicalSystem = systemNameMap[normSys] || mapping.system.trim();
          const epKey = `${canonicalSystem}|${normEp}`;

          if (!systemCounts[canonicalSystem]) {
            systemCounts[canonicalSystem] = new Set();
          }
          systemCounts[canonicalSystem].add(epKey);
        }
      }
    });
  });

  const systemsData = Object.entries(systemCounts).map(([system, eps]) => ({
    system,
    count: eps.size
  })).sort((a, b) => b.count - a.count);

  const maxSystemCount = systemsData.length > 0 ? Math.max(...systemsData.map(d => d.count)) : 1;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          <BarChart3 className="w-5 h-5 mr-2 text-blue-600 animate-pulse" />
          Endpoints Consumidos por Sistema
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Cantidad de endpoints únicos mapeados con integraciones activas en cada sistema de origen.
        </p>
        
        <div className="space-y-4">
          {systemsData.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">No hay datos de consumo</p>
          ) : (
            systemsData.map(item => {
              const widthPct = Math.max(5, Math.round((item.count / maxSystemCount) * 100));
              const gradient = getSystemGradient(item.system);
              return (
                <div key={item.system} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold text-gray-700">
                    <span>{item.system}</span>
                    <span className="text-gray-900 font-bold">{item.count} {item.count === 1 ? 'endpoint' : 'endpoints'}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200/50">
                    <div 
                      className={`bg-gradient-to-r ${gradient} h-full rounded-full transition-all duration-700`}
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
