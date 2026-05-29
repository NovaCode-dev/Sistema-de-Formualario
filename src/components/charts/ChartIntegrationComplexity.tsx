import React from 'react';
import { Layers } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { validEndpoints, normalizeSystem, normalizeEndpointFull } from './chartUtils';

interface ChartIntegrationComplexityProps {
  results: SurveyResult[];
}

interface ComplexityItem {
  team: string;
  systemCount: number;
  endpointCount: number;
  systems: string[];
  complexityScore: number;
  tier: 'simple' | 'moderate' | 'complex';
}

export const ChartIntegrationComplexity: React.FC<ChartIntegrationComplexityProps> = ({ results }) => {
  const teamComplexityMap: Record<string, { systems: Set<string>; endpoints: Set<string> }> = {};

  results.forEach(r => {
    const team = r.developer.team.trim();
    if (!team) return;

    if (!teamComplexityMap[team]) {
      teamComplexityMap[team] = {
        systems: new Set<string>(),
        endpoints: new Set<string>()
      };
    }

    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const normSys = normalizeSystem(mapping.system);
        const normEp = normalizeEndpointFull(mapping.endpoint);
        const matchKey = `${normSys}|${normEp}`;

        if (validEndpoints.has(matchKey)) {
          teamComplexityMap[team].systems.add(mapping.system.trim());
          teamComplexityMap[team].endpoints.add(`${normSys}|${normEp}`);
        }
      }
    });
  });

  const complexityData: ComplexityItem[] = Object.entries(teamComplexityMap).map(([team, sets]) => {
    const systemCount = sets.systems.size;
    const endpointCount = sets.endpoints.size;
    
    const complexityScore = systemCount * Math.log2(endpointCount + 2);
    
    let tier: 'simple' | 'moderate' | 'complex' = 'simple';
    if (complexityScore >= 8) {
      tier = 'complex';
    } else if (complexityScore >= 3) {
      tier = 'moderate';
    }

    return {
      team,
      systemCount,
      endpointCount,
      systems: Array.from(sets.systems),
      complexityScore,
      tier
    };
  }).sort((a, b) => b.complexityScore - a.complexityScore);

  const getTierBadge = (tier: 'simple' | 'moderate' | 'complex') => {
    if (tier === 'complex') {
      return { label: 'Complejo', style: 'bg-red-50 text-red-700 border-red-200' };
    } else if (tier === 'moderate') {
      return { label: 'Moderado', style: 'bg-amber-50 text-amber-700 border-amber-200' };
    }
    return { label: 'Simple', style: 'bg-green-50 text-green-700 border-green-200' };
  };

  const maxScore = complexityData.length > 0 ? Math.max(...complexityData.map(c => c.complexityScore)) : 1;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          <Layers className="w-5 h-5 mr-2 text-blue-600 animate-pulse" />
          Complejidad de Integración por Equipo
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Complejidad calculada combinando amplitud (sistemas consumidos) y profundidad (cantidad de endpoints consumidos).
        </p>

        <div className="space-y-4">
          {complexityData.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">No hay datos de consumo</p>
          ) : (
            complexityData.map((item, idx) => {
              const widthPct = Math.max(5, Math.round((item.complexityScore / maxScore) * 100));
              const badge = getTierBadge(item.tier);
              return (
                <div key={`${item.team}-${idx}`} className="space-y-1.5 group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                    <span className="font-bold text-gray-800">{item.team}</span>
                    <div className="flex items-center space-x-3 text-xs shrink-0">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold border ${badge.style}`}>
                        {badge.label}
                      </span>
                      <span className="text-gray-500 font-semibold">
                        {item.systemCount} {item.systemCount === 1 ? 'sistema' : 'sistemas'} | {item.endpointCount} {item.endpointCount === 1 ? 'endpoint' : 'endpoints'}
                      </span>
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden border border-gray-200/50">
                    <div 
                      className={`h-full rounded-full transition-all duration-700 bg-gradient-to-r ${
                        item.tier === 'complex'
                          ? 'from-red-500 to-rose-600'
                          : item.tier === 'moderate'
                          ? 'from-amber-500 to-orange-600'
                          : 'from-green-500 to-emerald-600'
                      }`}
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>

                  <div className="hidden group-hover:block transition-all duration-200 text-[10px] text-gray-400 bg-gray-50 rounded-lg p-2 border border-gray-100 font-medium">
                    <span className="font-bold text-gray-500">Sistemas integrados:</span> {item.systems.join(', ')}
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
