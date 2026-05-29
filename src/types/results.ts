export interface DeveloperInfo {
  name: string;
  team: string;
  role: string;
}

export interface EndpointMapping {
  system: string;
  controller: string;
  endpoint: string;
  usage: 'FRONT' | 'BACK' | 'BOTH' | 'NONE';
}

export interface SurveyResult {
  developer: DeveloperInfo;
  timestamp: string;
  systemsConsumed: string[];
  endpointMappings: EndpointMapping[];
}
