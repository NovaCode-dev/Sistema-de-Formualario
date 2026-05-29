import React from 'react';
import { Search, Filter, RefreshCw } from 'lucide-react';

interface ResultsFilterBarProps {
  searchTerm: string;
  onSearchChange: (val: string) => void;
  selectedProjects: string[];
  onProjectChange: (project: string) => void;
  availableProjects: string[];
  selectedSystems: string[];
  onSystemChange: (system: string) => void;
  availableSystems: string[];
  selectedUsages: string[];
  onUsageChange: (usage: string) => void;
  onClearFilters: () => void;
}

export const ResultsFilterBar: React.FC<ResultsFilterBarProps> = ({
  searchTerm,
  onSearchChange,
  selectedProjects,
  onProjectChange,
  availableProjects,
  selectedSystems,
  onSystemChange,
  availableSystems,
  selectedUsages,
  onUsageChange,
  onClearFilters
}) => {
  const usageOptions = [
    { id: 'FRONT', label: 'Frontend' },
    { id: 'BACK', label: 'Backend' },
    { id: 'BOTH', label: 'Ambos' }
  ];

  const hasActiveFilters = searchTerm !== '' || selectedProjects.length > 0 || selectedSystems.length > 0 || selectedUsages.length > 0;

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-gray-100 pb-3 flex-wrap gap-2">
        <h4 className="font-bold text-gray-800 flex items-center">
          <Filter className="w-5 h-5 mr-2 text-blue-600" />
          Filtros de Análisis
        </h4>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearFilters}
            className="text-xs font-semibold text-blue-600 hover:text-blue-700 hover:underline flex items-center space-x-1"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Limpiar filtros</span>
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
          <label 
            htmlFor="search-api-input"
            className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5"
          >
            Búsqueda de API / Controlador
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              id="search-api-input"
              type="text"
              className="block w-full pl-9 pr-3 py-2 border border-gray-300 rounded-xl bg-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
              placeholder="Buscar por ruta o nombre..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <div>
          <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            Filtrar por Proyecto (Equipos)
          </span>
          <div className="flex flex-wrap gap-1.5 max-h-[85px] overflow-y-auto pr-1">
            {availableProjects.length === 0 ? (
              <span className="text-xs text-gray-400 italic">No hay proyectos cargados</span>
            ) : (
              availableProjects.map(proj => {
                const isSelected = selectedProjects.includes(proj);
                return (
                  <button
                    key={proj}
                    type="button"
                    onClick={() => onProjectChange(proj)}
                    className={`px-2.5 py-1 text-xs rounded-full border transition-all font-medium ${
                      isSelected 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-sm'
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {proj}
                  </button>
                );
              })
            )}
          </div>
        </div>

        <div>
          <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            Filtrar por Sistema Destino
          </span>
          <div className="flex flex-wrap gap-1.5 max-h-[85px] overflow-y-auto pr-1">
            {availableSystems.length === 0 ? (
              <span className="text-xs text-gray-400 italic">No hay sistemas cargados</span>
            ) : (
              availableSystems.map(sys => {
                const isSelected = selectedSystems.includes(sys);
                return (
                  <button
                    key={sys}
                    type="button"
                    onClick={() => onSystemChange(sys)}
                    className={`px-2.5 py-1 text-xs rounded-full border transition-all font-medium ${
                      isSelected 
                        ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm'
                        : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {sys}
                  </button>
                );
              })
            )}
          </div>
        </div>

        <div>
          <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5">
            Tipo de Consumo
          </span>
          <div className="flex flex-wrap gap-1.5">
            {usageOptions.map(opt => {
              const isSelected = selectedUsages.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => onUsageChange(opt.id)}
                  className={`px-2.5 py-1 text-xs rounded-full border transition-all font-medium ${
                    isSelected 
                      ? 'bg-purple-600 border-purple-600 text-white shadow-sm'
                      : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  {opt.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
