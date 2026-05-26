import { SystemModule } from './types';

export const DMS_DATA: SystemModule[] = [
  {
    module: "Documentos",
    controllers: [
      {
        name: "document-controller",
        endpoints: ["GET /api/docs"]
      }
    ]
  }
];
