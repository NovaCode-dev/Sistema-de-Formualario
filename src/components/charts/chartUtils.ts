import { SYSTEMS_DB } from '../../data/systemsDb';

export const normalizeSystem = (sys: string): string => {
  return sys.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
};

export const normalizeEndpointFull = (ep: string): string => {
  let cleaned = ep.trim().toLowerCase();
  cleaned = cleaned.replace(/^(get|post|put|delete|patch|options|head)\s+/, '');
  cleaned = cleaned.replace(/^\/+|\/+$/g, '');
  if (cleaned.startsWith('api/')) {
    cleaned = cleaned.substring(4);
  }
  return cleaned;
};

export const SYSTEM_PALETTE: Record<string, string> = {
  'Config': 'from-blue-500 to-indigo-600',
  'Maestros': 'from-emerald-500 to-teal-600',
  'MSync': 'from-purple-500 to-indigo-600',
  'Control Cli': 'from-amber-500 to-orange-600',
  'Control Corp': 'from-rose-500 to-pink-600',
  'DMS': 'from-gray-500 to-slate-600',
};

export const SYSTEM_COLORS: Record<string, string> = {
  'Config': '#3B82F6',
  'Maestros': '#10B981',
  'MSync': '#8B5CF6',
  'Control Cli': '#F59E0B',
  'Control Corp': '#EF4444',
  'DMS': '#6B7280',
};

export const getSystemColor = (sys: string): string => {
  return SYSTEM_COLORS[sys] || '#6B7280';
};

export const getSystemGradient = (sys: string): string => {
  return SYSTEM_PALETTE[sys] || 'from-gray-500 to-slate-600';
};

export const { systemNameMap, validEndpoints } = (() => {
  const nameMap: Record<string, string> = {};
  const endpoints = new Set<string>();

  for (const [sysName, modules] of Object.entries(SYSTEMS_DB)) {
    const normSys = normalizeSystem(sysName);
    nameMap[normSys] = sysName;
    for (const mod of modules) {
      for (const ctrl of mod.controllers) {
        for (const ep of ctrl.endpoints) {
          const key = `${normSys}|${normalizeEndpointFull(ep)}`;
          endpoints.add(key);
        }
      }
    }
  }

  return { systemNameMap: nameMap, validEndpoints: endpoints };
})();
