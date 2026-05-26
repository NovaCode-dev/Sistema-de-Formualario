import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Save, Search, Server } from 'lucide-react';
import { SYSTEMS_DB } from '../data/systemsDb';
import { UsageSelector } from './UsageSelector';

interface Step3EndpointMappingProps {
  selectedSystems: string[];
  usageData: Record<string, string>;
  onEndpointUsage: (system: string, controller: string, endpoint: string, value: string) => void;
  onBulkSetController: (system: string, controllerName: string, endpoints: string[], value: string) => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Step3EndpointMapping: React.FC<Step3EndpointMappingProps> = ({
  selectedSystems,
  usageData,
  onEndpointUsage,
  onBulkSetController,
  onPrev,
  onNext
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSystems, setExpandedSystems] = useState<Record<string, boolean>>({});
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [expandedControllers, setExpandedControllers] = useState<Record<string, boolean>>({});

  const toggleSystem = (systemName: string) => {
    setExpandedSystems(prev => ({ ...prev, [systemName]: !prev[systemName] }));
  };

  const toggleModule = (modName: string) => {
    setExpandedModules(prev => ({ ...prev, [modName]: !prev[modName] }));
  };

  const toggleController = (ctrlName: string) => {
    setExpandedControllers(prev => ({ ...prev, [ctrlName]: !prev[ctrlName] }));
  };

  const methodColors: Record<string, string> = {
    'GET': 'bg-green-100 text-green-700',
    'POST': 'bg-blue-100 text-blue-700',
    'PUT': 'bg-orange-100 text-orange-700',
    'DELETE': 'bg-red-100 text-red-700'
  };

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4">
      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Mapeo de Endpoints</h2>
          <p className="text-gray-500 mt-1">Indica cómo consume tu equipo cada API.</p>
        </div>
        
        <div className="relative w-full md:w-64">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Buscar controlador o ruta..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
        </div>
      </div>

      <div className="space-y-8">
        {selectedSystems.map(system => {
          const modules = SYSTEMS_DB[system] || [];
          const isSystemExpanded = expandedSystems[system] !== false;

          return (
            <div key={system} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div 
                className="bg-gray-800 p-4 flex justify-between items-center cursor-pointer select-none hover:bg-gray-700 transition-colors"
                onClick={() => toggleSystem(system)}
              >
                <h3 className="text-lg font-bold text-white flex items-center">
                  <Server className="w-5 h-5 mr-2"/> Sistema: {system}
                </h3>
                {isSystemExpanded ? (
                  <ChevronDown className="w-5 h-5 text-white" />
                ) : (
                  <ChevronRight className="w-5 h-5 text-white" />
                )}
              </div>
              
              {isSystemExpanded && (
                <div className="p-2 md:p-4 space-y-4">
                  {modules.map((mod) => {
                    const modKey = `${system}-${mod.module}`;
                    const isModExpanded = expandedModules[modKey] !== false;
                    
                    const filteredControllers = mod.controllers.filter(ctrl => 
                      ctrl.name.toLowerCase().includes(searchTerm) || 
                      ctrl.endpoints.some(ep => ep.toLowerCase().includes(searchTerm))
                    );

                    if (filteredControllers.length === 0 && searchTerm) return null;

                    return (
                      <div key={modKey} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div 
                          className="bg-gray-50 px-4 py-3 flex justify-between items-center cursor-pointer hover:bg-gray-100 transition-colors"
                          onClick={() => toggleModule(modKey)}
                        >
                          <h4 className="font-semibold text-gray-800">{mod.module}</h4>
                          {isModExpanded ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />}
                        </div>

                        {isModExpanded && (
                          <div className="p-3 md:p-4 space-y-4 bg-white">
                            {filteredControllers.map(ctrl => {
                              const ctrlKey = `${system}-${ctrl.name}`;
                              const isCtrlExpanded = expandedControllers[ctrlKey] === true;
                              
                              const filteredEndpoints = searchTerm 
                                ? ctrl.endpoints.filter(ep => ep.toLowerCase().includes(searchTerm) || ctrl.name.toLowerCase().includes(searchTerm))
                                : ctrl.endpoints;

                              return (
                                <div key={ctrlKey} className="border border-gray-100 rounded-lg shadow-sm">
                                  <div 
                                    className="px-4 py-3 bg-blue-50 border-b border-blue-100 flex justify-between items-center cursor-pointer"
                                    onClick={() => toggleController(ctrlKey)}
                                  >
                                    <div>
                                      <span className="font-mono text-sm text-blue-800 font-semibold">{ctrl.name}</span>
                                      <span className="ml-2 text-xs text-blue-500 bg-blue-100 px-2 py-0.5 rounded-full">{filteredEndpoints.length} rutas</span>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                      {isCtrlExpanded ? <ChevronDown className="w-5 h-5 text-blue-600" /> : <ChevronRight className="w-5 h-5 text-blue-600" />}
                                    </div>
                                  </div>

                                  {isCtrlExpanded && (
                                    <div className="p-4 bg-white">
                                      <div className="mb-4 pb-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-2">
                                        <span className="text-sm font-medium text-gray-600">Acción masiva para el controlador:</span>
                                        <UsageSelector 
                                          value={undefined}
                                          onChange={(val) => onBulkSetController(system, ctrl.name, ctrl.endpoints, val)} 
                                        />
                                      </div>

                                      <ul className="space-y-3">
                                        {filteredEndpoints.map(endpoint => {
                                          const epKey = `${system}|${ctrl.name}|${endpoint}`;
                                          const epValue = usageData[epKey] || 'NONE';
                                          
                                          const [method, ...rest] = endpoint.split(' ');
                                          const path = rest.join(' ');

                                          return (
                                            <li key={epKey} className="flex flex-col xl:flex-row xl:items-center justify-between p-3 hover:bg-gray-50 rounded-lg border border-transparent hover:border-gray-100 gap-3 transition-colors">
                                              <div className="flex items-start space-x-3 overflow-hidden">
                                                <span className={`px-2 py-1 text-xs font-bold rounded w-16 text-center shrink-0 ${methodColors[method] || 'bg-gray-100 text-gray-700'}`}>
                                                  {method}
                                                </span>
                                                <span className="font-mono text-sm text-gray-600 break-all pt-0.5">
                                                  {path}
                                                </span>
                                              </div>
                                              <div className="shrink-0">
                                                <UsageSelector 
                                                  value={epValue} 
                                                  onChange={(val) => onEndpointUsage(system, ctrl.name, endpoint, val)} 
                                                />
                                              </div>
                                            </li>
                                          );
                                        })}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex space-x-4 max-w-2xl mx-auto pt-6 border-t border-gray-200 mt-8">
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
          className="w-2/3 py-3 rounded-lg font-bold bg-green-600 text-white hover:bg-green-700 shadow-md flex justify-center items-center"
        >
          <Save className="w-5 h-5 mr-2" /> Finalizar y Revisar
        </button>
      </div>
    </div>
  );
};
