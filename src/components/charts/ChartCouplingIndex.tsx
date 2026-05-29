import React from 'react';
import { Network } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { validEndpoints, normalizeSystem, normalizeEndpointFull } from './chartUtils';

interface ChartCouplingIndexProps {
  results: SurveyResult[];
}

interface CouplingItem {
  system: string;
  totalTeams: number;
  frontTeams: number;
  backTeams: number;
  bothTeams: number;
  teamsList: string[];
}

export const ChartCouplingIndex: React.FC<ChartCouplingIndexProps> = ({ results }) => {
  const systemTeamsMap: Record<string, { front: Set<string>; back: Set<string>; both: Set<string> }> = {};

  results.forEach(r => {
    const team = r.developer.team.trim();
    if (!team) return;

    r.endpointMappings.forEach(mapping => {
      if (mapping.usage && mapping.usage !== 'NONE') {
        const normSys = normalizeSystem(mapping.system);
        const normEp = normalizeEndpointFull(mapping.endpoint);
        const matchKey = `${normSys}|${normEp}`;

        if (validEndpoints.has(matchKey)) {
          const sysName = mapping.system.trim();
          if (!systemTeamsMap[sysName]) {
            systemTeamsMap[sysName] = {
              front: new Set<string>(),
              back: new Set<string>(),
              both: new Set<string>()
            };
          }

          if (mapping.usage === 'FRONT') {
            systemTeamsMap[sysName].front.add(team);
          } else if (mapping.usage === 'BACK') {
            systemTeamsMap[sysName].back.add(team);
          } else if (mapping.usage === 'BOTH') {
            systemTeamsMap[sysName].both.add(team);
          }
        }
      }
    });
  });

  const couplingData: CouplingItem[] = Object.entries(systemTeamsMap).map(([system, sets]) => {
    const allTeams = new Set([...sets.front, ...sets.back, ...sets.both]);
    return {
      system,
      totalTeams: allTeams.size,
      frontTeams: sets.front.size,
      backTeams: sets.back.size,
      bothTeams: sets.both.size,
      teamsList: Array.from(allTeams)
    };
  }).sort((a, b) => b.totalTeams - a.totalTeams);

  const maxTotalTeams = couplingData.length > 0 ? Math.max(...couplingData.map(c => c.totalTeams)) : 1;

  const getRiskBadge = (total: number) => {
    if (total >= 5) {
      return { label: 'Crítico', style: 'bg-red-50 text-red-700 border-red-200' };
    } else if (total >= 3) {
      return { label: 'Alto', style: 'bg-amber-50 text-amber-700 border-amber-200' };
    } else if (total >= 2) {
      return { label: 'Medio', style: 'bg-blue-50 text-blue-700 border-blue-200' };
    }
    return { label: 'Bajo', style: 'bg-green-50 text-green-700 border-green-200' };
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          <Network className="w-5 h-5 mr-2 text-blue-600 animate-pulse" />
          Índice de Acoplamiento por Sistema
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Cantidad de equipos integrados a cada sistema. Niveles de dependencia y riesgos de acoplamiento.
        </p>

        <div className="space-y-5">
          {couplingData.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">No hay datos de consumo</p>
          ) : (
            couplingData.map((item, idx) => {
              const risk = getRiskBadge(item.totalTeams);
              const totalPct = Math.max(5, Math.round((item.totalTeams / maxTotalTeams) * 100));

              return (
                <div key={`${item.system}-${idx}`} className="space-y-1.5 group">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-bold text-gray-800">{item.system}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold border ${risk.style}`}>
                        {risk.label}
                      </span>
                      <span className="text-gray-900 font-extrabold">{item.totalTeams} {item.totalTeams === 1 ? 'equipo' : 'equipos'}</span>
                    </div>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden border border-gray-200/50 flex">
                    {item.frontTeams > 0 && (
                      <div 
                        className="bg-blue-500 h-full first:rounded-l-full last:rounded-r-full transition-all duration-700"
                        style={{ width: `${(item.frontTeams / item.totalTeams) * totalPct}%` }}
                        title={`Front: ${item.frontTeams}`}
                      />
                    )}
                    {item.backTeams > 0 && (
                      <div 
                        className="bg-emerald-500 h-full first:rounded-l-full last:rounded-r-full transition-all duration-700"
                        style={{ width: `${(item.backTeams / item.totalTeams) * totalPct}%` }}
                        title={`Back: ${item.backTeams}`}
                      />
                    )}
                    {item.bothTeams > 0 && (
                      <div 
                        className="bg-purple-500 h-full first:rounded-l-full last:rounded-r-full transition-all duration-700"
                        style={{ width: `${(item.bothTeams / item.totalTeams) * totalPct}%` }}
                        title={`Ambos: ${item.bothTeams}`}
                      />
                    )}
                  </div>

                  <div className="hidden group-hover:block transition-all duration-200 text-[10px] bg-gray-50 rounded-lg p-2 border border-gray-100 font-medium text-gray-500">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      <span><span className="inline-block w-2 h-2 rounded bg-blue-500 mr-1" />Front: {item.frontTeams}</span>
                      <span><span className="inline-block w-2 h-2 rounded bg-emerald-500 mr-1" />Back: {item.backTeams}</span>
                      <span><span className="inline-block w-2 h-2 rounded bg-purple-500 mr-1" />Ambos: {item.bothTeams}</span>
                    </div>
                    <div className="mt-1 font-bold">Equipos: {item.teamsList.join(', ')}</div>
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
