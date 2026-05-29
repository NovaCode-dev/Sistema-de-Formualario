# Estructura de Datos del Sistema de Encuestas

## Estructura del JSON de Encuesta (Input)

Cada respuesta de encuesta es un archivo JSON con la siguiente estructura:

```json
{
  "developer": {
    "name": "NOMBRE COMPLETO DEL DESARROLLADOR",
    "team": "NOMBRE DEL EQUIPO / PROYECTO",
    "role": ""
  },
  "timestamp": "2026-05-27T01:01:07.798Z",
  "systemsConsumed": ["Config", "MSync", "Maestros"],
  "endpointMappings": [
    {
      "system": "Config",
      "controller": "scioficinas",
      "endpoint": "GET /scioficinas/model-se-ro/findAllByEstado/{estado}",
      "usage": "BACK"
    }
  ]
}
```

### Campos clave de `endpointMappings`

| Campo        | Descripción                                                                 | Ejemplo                                               |
|--------------|-----------------------------------------------------------------------------|-------------------------------------------------------|
| `system`     | Sistema al que pertenece el endpoint. Debe coincidir con clave en SYSTEMS_DB | `"Config"`, `"Maestros"`, `"MSync"`                   |
| `controller` | Identificador del recurso API (primer segmento del path)                    | `"scioficinas"`, `"sciusuarios"`                      |
| `endpoint`   | Método HTTP + ruta completa **sin prefijo `/api/`**                         | `"GET /scioficinas/model-se-ro/findAllByEstado/{estado}"` |
| `usage`      | Tipo de uso: `"FRONT"`, `"BACK"`, `"BOTH"`, `"NONE"`                       | `"BACK"`                                              |

> **Importante:** El campo `endpoint` en los JSONs de encuesta **no incluye** el prefijo `/api/` que sí existe en la BD (`SYSTEMS_DB`). La normalización maneja esta diferencia automáticamente.

---

## Estructura de SYSTEMS_DB (`src/data/systemsDb.ts`)

La base de datos maestra de endpoints reconocidos. Importa y combina todos los módulos de sistemas:

```typescript
export const SYSTEMS_DB: SystemsDatabase = {
  "Maestros":     MAESTROS_DATA,
  "Control Cli":  CONTROL_CLI_DATA,
  "Control Corp": CONTROL_CORP_DATA,
  "MSync":        MSYNC_DATA,
  "Config":       CONFIG_DATA,
  "DMS":          DMS_DATA
};
```

### Estructura de cada módulo de sistema (ej: `config.ts`)

```typescript
export const CONFIG_DATA: SystemModule[] = [
  {
    "module": "Configuración",
    "controllers": [
      {
        "name": "sci-oficina-controller",
        "endpoints": [
          "GET /api/scioficinas/model-se-ro/findAll",
          "GET /api/scioficinas/model-se-ro/findAllByEstado/{estado}",
          "GET /api/scioficinas/model-se-ro/findByCodigo/{codigo}",
          "GET /api/scioficinas/model-se-ro/findOficinaPredeterminada",
          "GET /api/scioficinas/model-se-ro/{id}",
          "POST /api/scioficinas/model-se-ro/findAllByIdList",
          "POST /api/scioficinas/model-se-ro/findAllByCodigoList"
        ]
      }
    ]
  }
];
```

> **Nota:** Los endpoints en la BD tienen el prefijo `/api/`. El campo `name` del controller (`sci-oficina-controller`) NO coincide con el campo `controller` del JSON de encuesta (`scioficinas`). Por esta razón, la validación **no usa el nombre del controller** de la BD.

---

## Lógica de Validación de Endpoints (`ResultsViewer.tsx`)

### Problema resuelto (Mayo 2026)

**Causa raíz:** La clave de validación original era `sistema|controllerNombre|endpoint-path`. El nombre del controller en la BD (`sci-oficina-controller` → normalizado: `scioficina`) no coincidía con el campo `controller` del JSON (`scioficinas`), causando que endpoints válidos fueran marcados como "no reconocidos".

### Solución implementada

La clave de validación ahora es **solo `sistema|endpoint-path-normalizado`**, descartando el nombre del controller de la BD (que es un nombre Java/Spring, no el path de la API).

```typescript
const normalizeSystem = (sys: string): string => {
  return sys.trim().toLowerCase().replace(/[^a-z0-9]/g, '');
};

const normalizeEndpointFull = (ep: string): string => {
  let cleaned = ep.trim().toLowerCase();
  cleaned = cleaned.replace(/^(get|post|put|delete|patch|options|head)\s+/, '');
  cleaned = cleaned.replace(/^\/+|\/+$/g, '');
  if (cleaned.startsWith('api/')) {
    cleaned = cleaned.substring(4);
  }
  return cleaned;
};
```

**Construcción del Set de endpoints válidos (desde la BD):**
```
clave = normalizeSystem("Config") + "|" + normalizeEndpointFull("GET /api/scioficinas/model-se-ro/findAllByEstado/{estado}")
      = "config" + "|" + "scioficinas/model-se-ro/findallbyestado/{estado}"
```

**Lookup al cargar el JSON de encuesta:**
```
clave = normalizeSystem("Config") + "|" + normalizeEndpointFull("GET /scioficinas/model-se-ro/findAllByEstado/{estado}")
      = "config" + "|" + "scioficinas/model-se-ro/findallbyestado/{estado}"  ✓ MATCH
```

### Diferencias eliminadas por la normalización

| Aspecto                    | BD (config.ts)                    | JSON Encuesta                      |
|----------------------------|-----------------------------------|------------------------------------|
| Prefijo `/api/`            | `GET /api/scioficinas/...`        | `GET /scioficinas/...`             |
| Mayúsculas/minúsculas      | Mixto                             | Mixto                              |
| Nombre del controller      | `sci-oficina-controller` (Java)   | `scioficinas` (path del recurso)   |

El campo `controller` del JSON es útil para mostrar en la UI, pero **no se usa en la validación contra la BD**.

---

## Tipos TypeScript (`src/data/types.ts`)

```typescript
interface EndpointController {
  name: string;
  endpoints: string[];
}

interface SystemModule {
  module: string;
  controllers: EndpointController[];
}

interface SystemsDatabase {
  [key: string]: SystemModule[];
}
```

---

## Archivos del sistema

| Archivo                              | Rol                                                    |
|--------------------------------------|--------------------------------------------------------|
| `src/data/systemsDb.ts`              | Agrega todos los módulos en `SYSTEMS_DB`               |
| `src/data/config.ts`                 | Endpoints del sistema Config                           |
| `src/data/maestros.ts`               | Endpoints del sistema Maestros                         |
| `src/data/mSync.ts`                  | Endpoints del sistema MSync                            |
| `src/data/controlCli.ts`             | Endpoints del sistema Control Cli                      |
| `src/data/controlCorp.ts`            | Endpoints del sistema Control Corp                     |
| `src/data/dms.ts`                    | Endpoints del sistema DMS                              |
| `src/components/ResultsViewer.tsx`   | Carga, valida y visualiza los JSONs de encuesta        |
| `src/types/results.ts`               | Tipos TypeScript para los datos de la encuesta         |
