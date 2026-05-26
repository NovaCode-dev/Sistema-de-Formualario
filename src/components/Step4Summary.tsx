import React from 'react';
import { CheckCircle2, Download } from 'lucide-react';

interface UserInfo {
  name: string;
  team: string;
  role: string;
}

interface Step4SummaryProps {
  userInfo: UserInfo;
  selectedSystems: string[];
  usageData: Record<string, string>;
  onPrev: () => void;
}

export const Step4Summary: React.FC<Step4SummaryProps> = ({
  userInfo,
  selectedSystems,
  usageData,
  onPrev
}) => {
  const mappedEndpoints = Object.entries(usageData)
    .filter(([_, usage]) => usage !== 'NONE')
    .map(([key, usage]) => {
      const [system, controller, endpoint] = key.split('|');
      return { system, controller, endpoint, usage };
    });

  const payload = {
    developer: userInfo,
    timestamp: new Date().toISOString(),
    systemsConsumed: selectedSystems,
    endpointMappings: mappedEndpoints
  };

  const handleDownload = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(payload, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    
    const formattedName = userInfo.name.toLowerCase().trim().replace(/[^a-z0-9]/g, '_');
    const formattedTeam = userInfo.team.toLowerCase().trim().replace(/[^a-z0-9]/g, '_');
    const filename = `encuesta_api_${formattedName}_${formattedTeam}.json`;
    
    downloadAnchor.setAttribute("download", filename);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 max-w-2xl mx-auto">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner animate-bounce">
          <CheckCircle2 className="w-12 h-12 text-green-600" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900">¡Encuesta Completada!</h2>
        <p className="text-gray-500 mt-3 text-lg">
          Has completado el mapeo de consumo de APIs correctamente.
        </p>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
        <h3 className="text-lg font-bold text-gray-800 border-b border-gray-100 pb-3">Resumen de Respuestas</h3>
        
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-400 block font-medium">Desarrollador:</span>
            <span className="text-gray-700 font-semibold text-base">{userInfo.name}</span>
          </div>
          <div>
            <span className="text-gray-400 block font-medium">Equipo/Proyecto:</span>
            <span className="text-gray-700 font-semibold text-base">{userInfo.team}</span>
          </div>
          <div>
            <span className="text-gray-400 block font-medium">Sistemas Evaluados:</span>
            <span className="text-gray-700 font-semibold text-base">{selectedSystems.join(', ')}</span>
          </div>
          <div>
            <span className="text-gray-400 block font-medium">APIs Consumidas:</span>
            <span className="text-green-600 font-semibold text-base">{mappedEndpoints.length} endpoints</span>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 text-center space-y-4">
        <p className="text-blue-800 font-medium text-base">
          Descarga el archivo generado y envíaselo al administrador para registrar tus integraciones.
        </p>
        
        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex items-center justify-center px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg shadow-md hover:shadow-lg transition-all space-x-2 w-full sm:w-auto"
        >
          <Download className="w-6 h-6" />
          <span>Descargar Encuesta (JSON)</span>
        </button>
      </div>

      <div className="flex justify-center pt-4">
        <button 
          type="button"
          onClick={onPrev} 
          className="px-6 py-3 rounded-lg font-bold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors text-sm"
        >
          Volver a Editar
        </button>
      </div>
    </div>
  );
};
