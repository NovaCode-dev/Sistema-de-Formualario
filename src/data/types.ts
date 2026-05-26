export interface EndpointController {
  name: string;
  endpoints: string[];
}

export interface SystemModule {
  module: string;
  controllers: EndpointController[];
}

export interface SystemsDatabase {
  [key: string]: SystemModule[];
}
