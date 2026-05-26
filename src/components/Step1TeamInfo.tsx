import React from 'react';
import { User } from 'lucide-react';

interface UserInfo {
  name: string;
  team: string;
  role: string;
}

interface Step1TeamInfoProps {
  userInfo: UserInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNext: () => void;
}

export const Step1TeamInfo: React.FC<Step1TeamInfoProps> = ({ userInfo, onChange, onNext }) => {
  const isValid = userInfo.name.trim() !== '' && userInfo.team.trim() !== '';

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800">Información del Equipo</h2>
        <p className="text-gray-500 mt-2">Para comenzar, cuéntanos quién eres y a qué equipo perteneces.</p>
      </div>

      <div className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo *</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
            <input 
              type="text" 
              name="name" 
              value={userInfo.name} 
              onChange={onChange}
              className="pl-10 w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              placeholder="Ej. Juan Pérez"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Proyecto / Equipo Principal *</label>
          <input 
            type="text" 
            name="team" 
            value={userInfo.team} 
            onChange={onChange}
            className="w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all bg-white"
            placeholder="Ej. Carga Aduanas, Operaciones, etc."
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Rol en el equipo (Opcional)</label>
          <input 
            type="text" 
            name="role" 
            value={userInfo.role} 
            onChange={onChange}
            className="w-full rounded-lg border border-gray-300 p-2.5 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
            placeholder="Ej. Frontend Developer, Tech Lead"
          />
        </div>

        <button 
          type="button"
          onClick={onNext} 
          disabled={!isValid}
          className={`w-full py-3 rounded-lg font-bold mt-6 transition-all ${isValid ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
        >
          Continuar
        </button>
      </div>
    </div>
  );
};
