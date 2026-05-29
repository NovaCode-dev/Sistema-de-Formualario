import React from 'react';
import { AlertOctagon } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { validEndpoints, normalizeSystem, normalizeEndpointFull, getSystemGradient } from './chartUtils';

interface ChartMixedUsageEndpointsProps {
  results: SurveyResult[];
}

interface MixedEndpointItem {
  system: string;
  endpoint: string;
  method: string;
  path: string;
  frontTeams: string[];
  backTeams: string[];
  bothTeams: string[];
}

export const ChartMixedUsageEndpoints: React.FC<ChartMixedUsageEndpointsProps> = ({ results }) => {
  const endpointUsagesMap: Record<string, { system: string; rawEndpoint: string; usages: Record<string, string> }> = {};

  results.forEach(r => {
    const team = r.developer.team.trim();
    if (!team) return;

    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const normSys = normalizeSystem(mapping.system);
        const normEp = normalizeEndpointFull(mapping.endpoint);
        const matchKey = `${normSys}|${normEp}`;

        if (validEndpoints.has(matchKey)) {
          const mapKey = `${mapping.system.trim()}|${normEp}`;
          if (!endpointUsagesMap[mapKey]) {
            endpointUsagesMap[mapKey] = {
              system: mapping.system.trim(),
              rawEndpoint: mapping.endpoint,
              usages: {}
            };
          }
          endpointUsagesMap[mapKey].usages[team] = mapping.usage;
        }
      }
    });
  });

  const mixedEndpoints: MixedEndpointItem[] = [];

  Object.entries(endpointUsagesMap).forEach(([_, data]) => {
    const frontTeams: string[] = [];
    const backTeams: string[] = [];
    const bothTeams: string[] = [];

    Object.entries(data.usages).forEach(([team, usage]) => {
      if (usage === 'FRONT') {
        frontTeams.push(team);
      } else if (usage === 'BACK') {
        backTeams.push(team);
      } else if (usage === 'BOTH') {
        bothTeams.push(team);
      }
    });

    const hasFront = frontTeams.length > 0;
    const hasBack = backTeams.length > 0;
    const hasBoth = bothTeams.length > 0;

    const isMixed = (hasFront && hasBack) || (hasBoth && (hasFront || hasBack));

    if (isMixed) {
      const parts = data.rawEndpoint.trim().split(' ');
      const method = parts[0] || 'GET';
      const path = parts.slice(1).join(' ') || data.rawEndpoint;

      mixedEndpoints.push({
        system: data.system,
        endpoint: data.rawEndpoint,
        method: method,
        path: path,
        frontTeams,
        backTeams,
        bothTeams
      });
    }
  });

  const methodColors: Record<string, string> = {
    'GET': 'bg-green-50 text-green-700 border-green-200',
    'POST': 'bg-blue-50 text-blue-700 border-blue-200',
    'PUT': 'bg-orange-50 text-orange-700 border-orange-200',
    'DELETE': 'bg-red-50 text-red-700 border-red-200',
    'PATCH': 'bg-purple-50 text-purple-700 border-purple-200'
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          <AlertOctagon className="w-5 h-5 mr-2 text-amber-500 animate-pulse" />
          Endpoints con Uso Mixto FRONT/BACK
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Endpoints declarados como FRONT por algunos equipos y BACK o BOTH por otros. Indica posible acoplamiento o integraciones complejas.
        </p>

        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
          {mixedEndpoints.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">No se detectaron consumos cruzados mixtos</p>
          ) : (
            mixedEndpoints.map((item, idx) => {
              const gradient = getSystemGradient(item.system);
              return (
                <div key={`${item.endpoint}-${idx}`} className="p-3 border border-amber-100 rounded-xl bg-amber-50/10 hover:bg-amber-50/30 transition-all duration-200">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2">
                    <div className="flex items-center space-x-1.5 min-w-0">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold border shrink-0 ${methodColors[item.method] || 'bg-gray-50'}`}>
                        {item.method}
                      </span>
                      <span className="font-mono text-xs text-gray-700 truncate font-semibold block" title={item.endpoint}>
                        {item.path}
                      </span>
                    </div>
                    <span className={`inline-flex px-1.5 py-0.5 text-[10px] font-extrabold text-white rounded bg-gradient-to-r ${gradient} shrink-0`}>
                      {item.system}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-[9px] font-medium mt-1 border-t border-gray-100/50 pt-1.5">
                    <div>
                      <span className="block font-bold text-blue-600 mb-0.5">FRONT ({item.frontTeams.length})</span>
                      <span className="text-gray-500 block truncate" title={item.frontTeams.join(', ')}>
                        {item.frontTeams.join(', ') || '-'}
                      </span>
                    </div>
                    <div>
                      <span className="block font-bold text-emerald-600 mb-0.5">BACK ({item.backTeams.length})</span>
                      <span className="text-gray-500 block truncate" title={item.backTeams.join(', ')}>
                        {item.backTeams.join(', ') || '-'}
                      </span>
                    </div>
                    <div>
                      <span className="block font-bold text-purple-600 mb-0.5">BOTH ({item.bothTeams.length})</span>
                      <span className="text-gray-500 block truncate" title={item.bothTeams.join(', ')}>
                        {item.bothTeams.join(', ') || '-'}
                      </span>
                    </div>
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
