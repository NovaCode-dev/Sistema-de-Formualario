import React from 'react';
import { CheckCircle2, Server } from 'lucide-react';
import { SYSTEMS_DB } from '../data/systemsDb';

interface Step2SystemSelectionProps {
  selectedSystems: string[];
  onToggleSystem: (system: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Step2SystemSelection: React.FC<Step2SystemSelectionProps> = ({
  selectedSystems,
  onToggleSystem,
  onPrev,
  onNext
}) => {
  const isValid = selectedSystems.length > 0;

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Sistemas que Consumen</h2>
        <p className="text-gray-500 mt-2">Selecciona los sistemas de los cuales tu equipo requiere interactuar con sus endpoints (APIs).</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {Object.keys(SYSTEMS_DB).map(system => {
          const isSelected = selectedSystems.includes(system);
          return (
            <div 
              key={system}
              onClick={() => onToggleSystem(system)}
              className={`cursor-pointer border-2 rounded-xl p-4 flex items-center space-x-3 transition-all ${isSelected ? 'border-blue-500 bg-blue-50 shadow-sm' : 'border-gray-200 hover:border-blue-300 bg-white'}`}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center border-2 flex-shrink-0 ${isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-300'}`}>
                {isSelected && <CheckCircle2 className="w-4 h-4 text-white" />}
              </div>
              <div className="flex-1">
                <p className={`font-semibold ${isSelected ? 'text-blue-800' : 'text-gray-700'}`}>{system}</p>
              </div>
              <Server className={`w-5 h-5 ${isSelected ? 'text-blue-500' : 'text-gray-400'}`} />
            </div>
          );
        })}
      </div>

      <div className="flex space-x-4 max-w-md mx-auto pt-6">
        <button 
          type="button"
          onClick={onPrev} 
          className="w-1/3 py-3 rounded-lg font-bold border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Volver
        </button>
        <button 
          type="button"
          onClick={onNext} 
          disabled={!isValid}
          className={`w-2/3 py-3 rounded-lg font-bold transition-all ${isValid ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        >
          Ir a Endpoints
        </button>
      </div>
    </div>
  );
};
