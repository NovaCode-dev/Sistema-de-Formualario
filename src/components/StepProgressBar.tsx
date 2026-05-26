import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface StepProgressBarProps {
  step: number;
  onStepClick: (targetStep: number) => void;
  isStep1Valid: boolean;
  isStep2Valid: boolean;
}

export const StepProgressBar: React.FC<StepProgressBarProps> = ({
  step,
  onStepClick,
  isStep1Valid,
  isStep2Valid
}) => {
  const isStepEnabled = (s: number) => {
    if (s === 1) return true;
    if (s === 2) return isStep1Valid;
    if (s === 3) return isStep1Valid && isStep2Valid;
    if (s === 4) return isStep1Valid && isStep2Valid;
    return false;
  };

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Mapeo de Integraciones y APIs</h1>
      <div className="flex items-center justify-center space-x-2 md:space-x-4 max-w-2xl mx-auto">
        {[1, 2, 3, 4].map((s, i) => {
          const enabled = isStepEnabled(s);
          return (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center relative z-10">
                <button
                  type="button"
                  disabled={!enabled}
                  onClick={() => onStepClick(s)}
                  className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-sm md:text-base border-2 transition-all focus:outline-none ${
                    step === s
                      ? 'bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100'
                      : step > s
                        ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700 hover:border-blue-700'
                        : enabled
                          ? 'bg-white border-gray-400 text-gray-700 hover:border-blue-500 hover:text-blue-500'
                          : 'bg-white border-gray-200 text-gray-300 cursor-not-allowed'
                  }`}
                >
                  {step > s ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : s}
                </button>
              </div>
              {i < 3 && (
                <div className={`flex-1 h-1 transition-colors ${step > s ? 'bg-blue-600' : 'bg-gray-300'}`} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
