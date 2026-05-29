import React, { useState, useEffect } from 'react';
import { StepProgressBar } from './components/StepProgressBar';
import { Step1TeamInfo } from './components/Step1TeamInfo';
import { Step2SystemSelection } from './components/Step2SystemSelection';
import { Step3EndpointMapping } from './components/Step3EndpointMapping';
import { Step4Summary } from './components/Step4Summary';
import { ResultsViewer } from './components/ResultsViewer';
import { ClipboardList, BarChart3 } from 'lucide-react';

export default function App() {
  const [currentPath, setCurrentPath] = useState(() => {
    const path = globalThis.location.pathname;
    if (path === '/resultados') return '/resultados';
    return '/encuesta';
  });

  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({ name: '', team: '', role: '' });
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [usageData, setUsageData] = useState<Record<string, string>>({});

  useEffect(() => {
    if (globalThis.location.pathname !== '/resultados' && globalThis.location.pathname !== '/encuesta') {
      globalThis.history.replaceState({}, '', '/encuesta');
    }
  }, []);

  const navigate = (path: string) => {
    globalThis.history.pushState({}, '', path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      const path = globalThis.location.pathname;
      if (path === '/resultados') {
        setCurrentPath('/resultados');
      } else {
        setCurrentPath('/encuesta');
      }
    };
    globalThis.addEventListener('popstate', handlePopState);
    return () => globalThis.removeEventListener('popstate', handlePopState);
  }, []);

  const isStep1Valid = userInfo.name.trim() !== '' && userInfo.team.trim() !== '';
  const isStep2Valid = selectedSystems.length > 0;

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  const toggleSystem = (system: string) => {
    setSelectedSystems(prev => 
      prev.includes(system) ? prev.filter(s => s !== system) : [...prev, system]
    );
  };

  const handleEndpointUsage = (system: string, controller: string, endpoint: string, value: string) => {
    const key = `${system}|${controller}|${endpoint}`;
    setUsageData(prev => ({ ...prev, [key]: value }));
  };

  const handleBulkSetController = (system: string, controllerName: string, endpoints: string[], value: string) => {
    const newData = { ...usageData };
    endpoints.forEach(ep => {
      newData[`${system}|${controllerName}|${ep}`] = value;
    });
    setUsageData(newData);
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const containerClass = currentPath === '/resultados' 
    ? 'w-full px-2 sm:px-4'
    : 'max-w-5xl mx-auto';

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className={containerClass}>
        <div className="flex justify-center mb-8">
          <div className="bg-white/80 backdrop-blur-md p-1 rounded-2xl shadow-md border border-white flex space-x-1">
            <button
              type="button"
              onClick={() => navigate('/encuesta')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                currentPath === '/encuesta'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <ClipboardList className="w-4 h-4" />
              <span>Realizar Encuesta</span>
            </button>
            
            <button
              type="button"
              onClick={() => navigate('/resultados')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                currentPath === '/resultados'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-100'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              <span>Visualizar Resultados</span>
            </button>
          </div>
        </div>

        {currentPath === '/encuesta' ? (
          <>
            <StepProgressBar 
              step={step} 
              onStepClick={setStep}
              isStep1Valid={isStep1Valid}
              isStep2Valid={isStep2Valid}
            />
            
            <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-8 border border-white animate-in fade-in duration-300">
              {step === 1 && (
                <Step1TeamInfo 
                  userInfo={userInfo} 
                  onChange={handleUserChange} 
                  onNext={nextStep} 
                />
              )}
              {step === 2 && (
                <Step2SystemSelection 
                  selectedSystems={selectedSystems} 
                  onToggleSystem={toggleSystem} 
                  onPrev={prevStep} 
                  onNext={nextStep} 
                />
              )}
              {step === 3 && (
                <Step3EndpointMapping 
                  selectedSystems={selectedSystems} 
                  usageData={usageData} 
                  onEndpointUsage={handleEndpointUsage} 
                  onBulkSetController={handleBulkSetController} 
                  onPrev={prevStep} 
                  onNext={nextStep} 
                />
              )}
              {step === 4 && (
                <Step4Summary 
                  userInfo={userInfo} 
                  selectedSystems={selectedSystems} 
                  usageData={usageData} 
                  onPrev={prevStep} 
                />
              )}
            </div>
          </>
        ) : (
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-2 md:p-6 border border-white animate-in fade-in duration-300 w-full">
            <ResultsViewer />
          </div>
        )}
      </div>
    </div>
  );
}

