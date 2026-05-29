import React from 'react';
import { Calendar } from 'lucide-react';
import { SurveyResult } from '../../types/results';

interface ChartResponseTimelineProps {
  results: SurveyResult[];
}

interface TimelineItem {
  dateKey: string;
  displayDate: string;
  count: number;
  entries: Array<{ developer: string; team: string }>;
}

export const ChartResponseTimeline: React.FC<ChartResponseTimelineProps> = ({ results }) => {
  const dateMap: Record<string, { display: string; entries: Array<{ developer: string; team: string }> }> = {};

  results.forEach(r => {
    if (!r.timestamp) return;

    const d = new Date(r.timestamp);
    if (Number.isNaN(d.getTime())) return;

    const dateKey = d.toISOString().split('T')[0];
    const displayDate = d.toLocaleDateString('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });

    if (!dateMap[dateKey]) {
      dateMap[dateKey] = { display: displayDate, entries: [] };
    }

    dateMap[dateKey].entries.push({
      developer: r.developer.name,
      team: r.developer.team
    });
  });

  const timelineData: TimelineItem[] = Object.entries(dateMap).map(([key, data]) => ({
    dateKey: key,
    displayDate: data.display,
    count: data.entries.length,
    entries: data.entries
  })).sort((a, b) => b.dateKey.localeCompare(a.dateKey));

  const maxCount = timelineData.length > 0 ? Math.max(...timelineData.map(t => t.count)) : 1;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          <Calendar className="w-5 h-5 mr-2 text-blue-600 animate-pulse" />
          Ritmo de Respuestas en el Tiempo
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Respuestas enviadas por día. Útil para monitorear el progreso del relevamiento de integraciones.
        </p>

        <div className="space-y-4 max-h-[300px] overflow-y-auto pr-1">
          {timelineData.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">No hay respuestas con fecha registrada</p>
          ) : (
            timelineData.map((item, idx) => {
              const widthPct = Math.max(5, Math.round((item.count / maxCount) * 100));
              return (
                <div key={`${item.dateKey}-${idx}`} className="space-y-1 group">
                  <div className="flex justify-between items-center text-xs">
                    <span className="font-semibold text-gray-700">{item.displayDate}</span>
                    <span className="font-extrabold text-gray-900">{item.count} {item.count === 1 ? 'respuesta' : 'respuestas'}</span>
                  </div>

                  <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden border border-gray-200/50">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-blue-600 h-full rounded-full transition-all duration-700"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>

                  <div className="hidden group-hover:block transition-all duration-200 text-[10px] text-gray-400 bg-gray-50 rounded-lg p-2 border border-gray-100 font-medium">
                    <div className="font-bold text-gray-500 mb-1">Participantes:</div>
                    <ul className="list-disc pl-3.5 space-y-0.5">
                      {item.entries.map((entry) => (
                        <li key={`${entry.developer}-${entry.team}`}>
                          <span className="text-gray-700 font-bold">{entry.developer}</span> ({entry.team})
                        </li>
                      ))}
                    </ul>
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
