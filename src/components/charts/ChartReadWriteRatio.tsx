import React from 'react';
import { RefreshCw } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { validEndpoints, normalizeSystem, normalizeEndpointFull } from './chartUtils';

interface ChartReadWriteRatioProps {
  results: SurveyResult[];
}

interface RatioItem {
  system: string;
  readCount: number;
  writeCount: number;
  total: number;
  readPct: number;
  writePct: number;
}

export const ChartReadWriteRatio: React.FC<ChartReadWriteRatioProps> = ({ results }) => {
  const systemCounts: Record<string, { read: Set<string>; write: Set<string> }> = {};

  results.forEach(r => {
    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const normSys = normalizeSystem(mapping.system);
        const normEp = normalizeEndpointFull(mapping.endpoint);
        const matchKey = `${normSys}|${normEp}`;

        if (validEndpoints.has(matchKey)) {
          const sysName = mapping.system.trim();
          if (!systemCounts[sysName]) {
            systemCounts[sysName] = { read: new Set(), write: new Set() };
          }

          const parts = mapping.endpoint.trim().split(' ');
          const method = (parts[0] || 'GET').toUpperCase();

          if (method === 'GET') {
            systemCounts[sysName].read.add(normEp);
          } else {
            systemCounts[sysName].write.add(normEp);
          }
        }
      }
    });
  });

  const ratioData: RatioItem[] = Object.entries(systemCounts).map(([system, sets]) => {
    const readCount = sets.read.size;
    const writeCount = sets.write.size;
    const total = readCount + writeCount;
    const readPct = total > 0 ? Math.round((readCount / total) * 100) : 0;
    const writePct = total > 0 ? Math.round((writeCount / total) * 100) : 0;

    return {
      system,
      readCount,
      writeCount,
      total,
      readPct,
      writePct
    };
  }).sort((a, b) => b.total - a.total);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          <RefreshCw className="w-5 h-5 mr-2 text-blue-600 animate-spin" style={{ animationDuration: '8s' }} />
          Ratio Lectura/Escritura por Sistema
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Distribución de endpoints consumidos clasificados en Lectura (GET) y Escritura (POST, PUT, DELETE, PATCH).
        </p>

        <div className="space-y-4">
          {ratioData.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">No hay datos de consumo</p>
          ) : (
            ratioData.map((item, idx) => {
              return (
                <div key={`${item.system}-${idx}`} className="space-y-1.5 group">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-800">{item.system}</span>
                    <div className="flex items-center space-x-3 font-semibold text-gray-500">
                      <span>Lectura: {item.readCount} ({item.readPct}%)</span>
                      <span>|</span>
                      <span>Escritura: {item.writeCount} ({item.writePct}%)</span>
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200/50 flex">
                    {item.readCount > 0 && (
                      <div 
                        className="bg-blue-500 h-full rounded-l-full transition-all duration-700"
                        style={{ width: `${item.readPct}%` }}
                        title={`Lectura (GET): ${item.readPct}%`}
                      />
                    )}
                    {item.writeCount > 0 && (
                      <div 
                        className="bg-orange-500 h-full rounded-r-full transition-all duration-700"
                        style={{ width: `${item.writePct}%` }}
                        title={`Escritura: ${item.writePct}%`}
                      />
                    )}
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
