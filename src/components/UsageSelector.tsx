import React from 'react';

interface UsageSelectorProps {
  value: string | undefined;
  onChange: (value: string) => void;
}

export const UsageSelector: React.FC<UsageSelectorProps> = ({ value, onChange }) => {
  const options = [
    { id: 'NONE', label: 'No lo usamos', color: 'bg-gray-100 text-gray-500 hover:bg-gray-200', activeColor: 'bg-gray-600 text-white' },
    { id: 'FRONT', label: 'Frontend', color: 'bg-blue-50 text-blue-600 hover:bg-blue-100', activeColor: 'bg-blue-600 text-white' },
    { id: 'BACK', label: 'Backend', color: 'bg-green-50 text-green-600 hover:bg-green-100', activeColor: 'bg-green-600 text-white' },
    { id: 'BOTH', label: 'Ambos', color: 'bg-purple-50 text-purple-600 hover:bg-purple-100', activeColor: 'bg-purple-600 text-white' }
  ];

  return (
    <div className="flex flex-wrap gap-1 md:gap-2">
      {options.map(opt => {
        const isActive = value === opt.id || (value === undefined && opt.id === 'NONE');
        return (
          <button
            key={opt.id}
            type="button"
            onClick={() => onChange(opt.id)}
            className={`px-3 py-1 text-xs md:text-sm rounded-full transition-colors font-medium ${isActive ? opt.activeColor : opt.color}`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
};
