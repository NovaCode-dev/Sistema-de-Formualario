import React from 'react';
import { PieChart } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { validEndpoints, normalizeSystem, normalizeEndpointFull } from './chartUtils';

interface ChartUsageDistributionProps {
  results: SurveyResult[];
}

export const ChartUsageDistribution: React.FC<ChartUsageDistributionProps> = ({ results }) => {
  const endpointUsages: Record<string, Set<string>> = {};

  results.forEach(r => {
    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const normSys = normalizeSystem(mapping.system);
        const normEp = normalizeEndpointFull(mapping.endpoint);
        const matchKey = `${normSys}|${normEp}`;

        if (validEndpoints.has(matchKey)) {
          const epKey = `${mapping.system.trim()}|${normEp}`;

          if (!endpointUsages[epKey]) {
            endpointUsages[epKey] = new Set();
          }
          endpointUsages[epKey].add(mapping.usage);
        }
      }
    });
  });

  let onlyFrontCount = 0;
  let onlyBackCount = 0;
  let bothCount = 0;

  Object.values(endpointUsages).forEach(usagesSet => {
    if (usagesSet.has('BOTH') || (usagesSet.has('FRONT') && usagesSet.has('BACK'))) {
      bothCount++;
    } else if (usagesSet.has('FRONT')) {
      onlyFrontCount++;
    } else if (usagesSet.has('BACK')) {
      onlyBackCount++;
    }
  });

  const totalEndpoints = onlyFrontCount + onlyBackCount + bothCount || 1;
  const pctFront = Math.round((onlyFrontCount / totalEndpoints) * 100);
  const pctBack = Math.round((onlyBackCount / totalEndpoints) * 100);
  const pctBoth = Math.round((bothCount / totalEndpoints) * 100);

  const displayTotal = onlyFrontCount === 0 && onlyBackCount === 0 && bothCount === 0 ? 0 : totalEndpoints;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          <PieChart className="w-5 h-5 mr-2 text-blue-600 animate-spin" style={{ animationDuration: '6s' }} />
          Distribución por Tipo de Uso
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Clasificación de los {displayTotal} endpoints consumidos según la capa de integración.
        </p>

        {onlyFrontCount === 0 && onlyBackCount === 0 && bothCount === 0 ? (
          <p className="text-xs text-gray-400 italic text-center py-8">No hay datos de consumo</p>
        ) : (
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-700">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 mr-2 shrink-0 animate-pulse" />
                  <span>Solo Frontend (FRONT)</span>
                </span>
                <span>{onlyFrontCount} ({pctFront}%)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200/50">
                <div 
                  className="bg-blue-500 h-full transition-all duration-700" 
                  style={{ width: `${pctFront}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-700">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 mr-2 shrink-0 animate-pulse" />
                  <span>Solo Backend (BACK)</span>
                </span>
                <span>{onlyBackCount} ({pctBack}%)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200/50">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-700" 
                  style={{ width: `${pctBack}%` }}
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-700">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 mr-2 shrink-0 animate-pulse" />
                  <span>Ambos (BOTH)</span>
                </span>
                <span>{bothCount} ({pctBoth}%)</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200/50">
                <div 
                  className="bg-purple-500 h-full transition-all duration-700" 
                  style={{ width: `${pctBoth}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
