import React from 'react';
import { Layers } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { validEndpoints, normalizeSystem, normalizeEndpointFull, getSystemGradient } from './chartUtils';

interface ChartTopEndpointsProps {
  results: SurveyResult[];
}

interface TopEndpointItem {
  system: string;
  endpoint: string;
  method: string;
  path: string;
  teamCount: number;
  teams: string[];
}

export const ChartTopEndpoints: React.FC<ChartTopEndpointsProps> = ({ results }) => {
  const endpointTeamMap: Record<string, { system: string; rawEndpoint: string; teams: Set<string> }> = {};

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
          if (!endpointTeamMap[mapKey]) {
            endpointTeamMap[mapKey] = {
              system: mapping.system.trim(),
              rawEndpoint: mapping.endpoint,
              teams: new Set<string>()
            };
          }
          endpointTeamMap[mapKey].teams.add(team);
        }
      }
    });
  });

  const sortedEndpoints: TopEndpointItem[] = Object.entries(endpointTeamMap)
    .map(([_, data]) => {
      const parts = data.rawEndpoint.trim().split(' ');
      const method = parts[0] || 'GET';
      const path = parts.slice(1).join(' ') || data.rawEndpoint;
      return {
        system: data.system,
        endpoint: data.rawEndpoint,
        method: method,
        path: path,
        teamCount: data.teams.size,
        teams: Array.from(data.teams)
      };
    })
    .sort((a, b) => b.teamCount - a.teamCount)
    .slice(0, 10);

  const maxTeamCount = sortedEndpoints.length > 0 ? Math.max(...sortedEndpoints.map(e => e.teamCount)) : 1;

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
          <Layers className="w-5 h-5 mr-2 text-blue-600 animate-bounce" />
          Top 10 Endpoints más Populares
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Endpoints con mayor cantidad de equipos distintos que los consumen activamente.
        </p>

        <div className="space-y-4">
          {sortedEndpoints.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">No hay datos de integraciones activas</p>
          ) : (
            sortedEndpoints.map((item, idx) => {
              const widthPct = Math.max(5, Math.round((item.teamCount / maxTeamCount) * 100));
              const gradient = getSystemGradient(item.system);
              return (
                <div key={`${item.endpoint}-${idx}`} className="space-y-1 group">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs gap-1">
                    <div className="flex items-center space-x-1.5 min-w-0">
                      <span className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold border ${methodColors[item.method] || 'bg-gray-50 text-gray-700'}`}>
                        {item.method}
                      </span>
                      <span className="font-mono text-gray-600 truncate block font-medium" title={item.endpoint}>
                        {item.path}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 shrink-0">
                      <span className={`inline-flex px-1.5 py-0.5 text-[10px] font-extrabold text-white rounded bg-gradient-to-r ${gradient}`}>
                        {item.system}
                      </span>
                      <span className="text-gray-900 font-extrabold">
                        {item.teamCount} {item.teamCount === 1 ? 'equipo' : 'equipos'}
                      </span>
                    </div>
                  </div>
                  <div className="relative w-full bg-gray-100 rounded-full h-2.5 overflow-hidden border border-gray-200/50">
                    <div 
                      className={`bg-gradient-to-r ${gradient} h-full rounded-full transition-all duration-700`}
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                  <div className="hidden group-hover:block transition-all duration-200 text-[10px] text-gray-400 bg-gray-50 rounded-lg p-2 border border-gray-100 font-medium">
                    <span className="font-bold text-gray-500">Equipos:</span> {item.teams.join(', ')}
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
