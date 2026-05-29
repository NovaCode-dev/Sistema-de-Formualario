# Guía de Extracción Automatizada de Endpoints y Mapeo de APIs

Este documento detalla el proceso técnico, las decisiones de arquitectura y el flujo de trabajo para extraer endpoints a partir de código fuente bruto (frontend en Angular y backend en Java) y mapearlos automáticamente al esquema del sistema de encuestas del catálogo maestro.

---

## 1. Introducción al Proceso de Extracción

Cuando se migran, analizan o auditan sistemas legados o en paralelo, el volumen de controladores y servicios es masivo. Analizar manualmente cientos de archivos `.service.ts` (Angular) e interfaces `*Proxy.java` / `*ReactiveProxy.java` (Java Feign Clients) introduce un alto margen de error humano y requiere un esfuerzo prohibitivo.

Para solucionar esto, se diseñó e implementó un extractor automatizado avanzado en Node.js (`scripts/parse_new_bruta_data.js`). Este script recorre de forma recursiva los directorios de código fuente (admitiendo estructuras con separación técnica o carpetas de módulos funcionales mezclados), analiza sintácticamente las definiciones de ruta base y métodos HTTP, y cruza los resultados directamente con el catálogo maestro de sistemas (`SYSTEMS_DB`).

---

## 2. Decisiones de Diseño y Arquitectura del Script

El extractor está construido sobre cuatro pilares algorítmicos robustos:

### A. Carga Dinámica de Catálogos TypeScript sin Dependencias Pesadas
Para evitar compilar TypeScript o requerir dependencias pesadas como `ts-node` o `webpack`, el script lee los archivos de base de datos `.ts` (como `maestros.ts`, `config.ts`, etc.) como texto plano, extrae la declaración del arreglo literal mediante un analizador de corchetes, y utiliza una evaluación segura en memoria para instanciar los catálogos nativos de JavaScript instantáneamente.

### B. Analizador Adaptativo de Angular (Soporte Multi-Patrón)
Las implementaciones de Angular varían entre proyectos:
- Algunas declaran su url base como miembro de clase (`private _url = ...`) y otras como constantes globales (`const url = ...`). El script rastrea dinámicamente el nombre de la variable de host asignada y la sustituye automáticamente en las firmas de métodos HTTP.
- Resuelve llamadas a métodos HTTP mediante `this._http` o `this.http` indiferentemente.
- Implementa un tokenizador manual: encuentra la llamada al método HTTP, detecta si se abre un bloque genérico (`<`), realiza un seguimiento exacto de la profundidad de los corchetes angulares para saltarlos, y luego localiza el paréntesis de inicio `(` de los argumentos. De este modo, se garantiza un análisis 100% libre de fallos independientemente del nivel de tipado.

### C. Mapeador Inteligente de Feign Clients en Java (Soporte de Constantes de ProxyPath)
En proyectos complejos de backend, los Feign Clients no siempre usan URLs estáticas; a menudo interpolan propiedades del sistema o constantes complejas como `@ReactiveFeignClient(name = ProxyPath.Config.SCI_OFICINA, url = "${SUMAX_URL_CONFIG}/" + ProxyPath.Config.SCI_OFICINA)`.
El script resuelve estas referencias de manera analítica:
1. Extrae el host inyectado mediante variables de entorno (por ejemplo, `SUMAX_URL_CONFIG`).
2. Mapea la constante de ruta (`SCI_OFICINA` o `TB_VIA_TRANSPORTE`) resolviéndola dinámicamente mediante un algoritmo de pluralización en minúsculas y remoción de guiones bajos (`/scioficinas` o `/tbviatransportes`). Esto asegura un acoplamiento perfecto de firmas con el backend.

---

## 3. Algoritmo de Mapeo e Identificación Inteligente

Una vez extraídos los endpoints, el script ejecuta un pipeline de normalización y emparejamiento inteligente para alinearse con `Step4Summary.tsx`:

1. **Normalización Homogénea**: Convierte los endpoints y las firmas del catálogo a minúsculas, remueve prefijos `/api` redundantes, y estandariza todas las variables dinámicas de ruta (por ejemplo `{id}`, `{estado}`, `{ruc}`) al comodín unificado `{param}`. Esto permite comparar firmas funcionales exactas sin importar el nombre interno asignado al parámetro por el desarrollador.
2. **Clasificación de Consumo (`FRONT` / `BACK` / `BOTH`)**:
   - Si un endpoint es detectado únicamente en archivos de servicios de Angular, se clasifica como `"FRONT"`.
   - Si es detectado únicamente en Feign Clients de Java, se clasifica como `"BACK"`.
   - Si es detectado en ambos entornos, se fusiona automáticamente y se marca como `"BOTH"`.
3. **Mantenimiento de Información No Registrada (Fallbacks)**:
   Si un endpoint extraído de la data bruta no coincide con ninguna firma del catálogo maestro (`SYSTEMS_DB`), se retiene como información de inventario de acuerdo con las especificaciones del negocio. Para asegurar que tenga una estructura correcta:
   - **Prefijo Común**: Se analiza el primer segmento de la ruta (por ejemplo, `/tbclientes`) y se busca en `SYSTEMS_DB` si ya existe algún controlador asociado a ese prefijo. Si se encuentra, se le asigna ese controlador automáticamente.
   - **Inferencia de Clase**: Si es un prefijo completamente nuevo, el script traduce el nombre de la clase (por ejemplo, `SadOrdenAduanaProxy` o `SeeConexionSunatService`) a formato de controlador (`sad-orden-aduana-controller` o `see-conexion-sunat-controller`) y genera la firma formateada con prefijo `/api` homologado.

---

## 4. Instrucciones para Procesar Nuevos Proyectos

Para analizar nuevos directorios de código fuente bruto, siga estos sencillos pasos:

### Paso 1: Colocar la Data Bruta
Cree una subcarpeta descriptiva dentro del directorio de entrada:
`src/data/bruta/<nombre-proyecto>`

Organice los archivos dentro de esa carpeta. La estructura puede ser:
- Mezclada por módulos (subcarpetas de funcionalidad conteniendo tanto `.ts` como `.java`).
- Separada por capas técnicas (`services/`, `proxy/`, `reactiveproxy/`).
El extractor es 100% agnóstico y analizará todos los archivos recursivamente.

### Paso 2: Configurar Mapeo de Hosts (Si Aplica)
Si el nuevo proyecto utiliza constantes de host no registradas, abra `scripts/parse_new_bruta_data.js` y agregue la constante al mapa `hostToSystem`:
```javascript
const hostToSystem = {
  "HOST_NUEVO_SISTEMA": "Maestros"
};
```

### Paso 3: Registrar el Proyecto en el Flujo de Ejecución
Al final de `scripts/parse_new_bruta_data.js`, agregue una nueva llamada a `processProject` especificando la ruta, nombre descriptivo, nombre del autor/sistema y equipo responsable:
```javascript
processProject(
  path.join(bruteDir, 'nuevo-proyecto'),
  "Nuevo Proyecto",
  "SISTEMA NUEVO",
  "NUEVO EQUIPO"
);
```

### Paso 4: Ejecutar el Extractor
Abra su terminal de PowerShell y ejecute:
```powershell
node scripts/parse_new_bruta_data.js
```

El script analizará todos los archivos en milisegundos y generará un archivo JSON compatible en:
`src/data/encuestados/encuesta_api_nuevo_proyecto.json`

Este archivo será integrado y renderizado inmediatamente por el panel de analíticas y vistas de encuestas en el Dashboard del frontend.
