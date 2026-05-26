import React, { useState } from 'react';
import { StepProgressBar } from './components/StepProgressBar';
import { Step1TeamInfo } from './components/Step1TeamInfo';
import { Step2SystemSelection } from './components/Step2SystemSelection';
import { Step3EndpointMapping } from './components/Step3EndpointMapping';
import { Step4Summary } from './components/Step4Summary';

export default function App() {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState({ name: '', team: '', role: '' });
  const [selectedSystems, setSelectedSystems] = useState<string[]>([]);
  const [usageData, setUsageData] = useState<Record<string, string>>({});

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

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        <StepProgressBar 
          step={step} 
          onStepClick={setStep}
          isStep1Valid={isStep1Valid}
          isStep2Valid={isStep2Valid}
        />
        
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-xl p-4 md:p-8 border border-white">
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
      </div>
    </div>
  );
}
