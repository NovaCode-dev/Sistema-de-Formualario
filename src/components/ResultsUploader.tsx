import React, { useRef, useState } from 'react';
import { Upload, FileJson, Trash2, AlertCircle, Check } from 'lucide-react';
import { SurveyResult } from '../types/results';

interface ResultsUploaderProps {
  uploadedFiles: Array<{
    name: string;
    developer: string;
    team: string;
    validCount: number;
    invalidCount: number;
    totalCount: number;
  }>;
  onRemoveFile: (index: number) => void;
  onAddResults: (newResults: SurveyResult[], fileName: string) => void;
}

export const ResultsUploader: React.FC<ResultsUploaderProps> = ({
  uploadedFiles,
  onRemoveFile,
  onAddResults
}) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndParseJSON = (text: string, fileName: string) => {
    try {
      const data = JSON.parse(text);
      if (!data.developer || typeof data.developer.name !== 'string' || typeof data.developer.team !== 'string') {
        throw new TypeError('Estructura de desarrollador inválida en el JSON.');
      }
      if (!Array.isArray(data.endpointMappings)) {
        throw new TypeError('El campo endpointMappings debe ser una lista.');
      }
      onAddResults([data as SurveyResult], fileName);
      setError(null);
      setSuccessMsg(`Archivo "${fileName}" cargado correctamente.`);
      setTimeout(() => setSuccessMsg(null), 3000);
    } catch (e: any) {
      setError(`Error en "${fileName}": ${e.message || 'JSON inválido'}`);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      for (const file of Array.from(e.dataTransfer.files)) {
        if (file.type === 'application/json' || file.name.endsWith('.json')) {
          try {
            const text = await file.text();
            validateAndParseJSON(text, file.name);
          } catch (err: any) {
            setError(`Error al leer archivo "${file.name}": ${err.message}`);
          }
        } else {
          setError('Solo se admiten archivos en formato JSON.');
        }
      }
    }
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      for (const file of Array.from(e.target.files)) {
        try {
          const text = await file.text();
          validateAndParseJSON(text, file.name);
        } catch (err: any) {
          setError(`Error al leer archivo "${file.name}": ${err.message}`);
        }
      }
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-6">
      <button 
        type="button"
        onDragEnter={handleDrag}
        onDragOver={handleDrag}
        onDragLeave={handleDrag}
        onDrop={handleDrop}
        onClick={triggerFileInput}
        className={`w-full border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all flex flex-col items-center justify-center min-h-[200px] focus:outline-none focus:ring-2 focus:ring-blue-500/20 ${
          dragActive 
            ? 'border-blue-500 bg-blue-50/50 scale-[0.99]' 
            : 'border-gray-300 hover:border-blue-400 bg-gray-50/50'
        }`}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={handleFileInput}
          multiple 
          accept=".json"
          className="hidden" 
        />
        
        <div className="p-4 bg-white rounded-full shadow-md mb-4 text-blue-600">
          <Upload className="w-8 h-8 mx-auto" />
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-1">
          Cargar respuestas de encuestas
        </h3>
        <p className="text-gray-500 text-sm max-w-md mx-auto">
          Arrastra y suelta aquí los archivos <span className="font-semibold text-blue-600">.json</span> descargados por los desarrolladores, o haz clic para buscarlos. Puede seleccionar múltiples archivos a la vez.
        </p>
      </button>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl flex items-center space-x-3 text-sm animate-in fade-in slide-in-from-top-1">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {successMsg && (
        <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center space-x-3 text-sm animate-in fade-in slide-in-from-top-1">
          <Check className="w-5 h-5 shrink-0" />
          <span>{successMsg}</span>
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
          <h4 className="font-bold text-gray-800 mb-4 flex items-center justify-between">
            <span>Archivos cargados ({uploadedFiles.length})</span>
          </h4>
          
          <div className="divide-y divide-gray-100 max-h-[300px] overflow-y-auto pr-2">
            {uploadedFiles.map((file, idx) => (
              <div 
                key={`${file.developer}-${file.team}-${file.name}-${idx}`} 
                className="py-3 flex items-center justify-between first:pt-0 last:pb-0"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <FileJson className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-semibold text-gray-800 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      Desarrollador: <span className="font-medium text-gray-700">{file.developer}</span> | Proyecto: <span className="font-medium text-gray-700">{file.team}</span> | {file.validCount} de {file.totalCount} válidos
                    </p>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFile(idx);
                  }}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors shrink-0"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

