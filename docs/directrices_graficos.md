# Directrices de Arquitectura para Gráficos y Análisis Consolidados

Este documento establece los estándares técnicos, estructurales y estéticos para la creación y mantenimiento de gráficos, métricas analíticas y visualizaciones de consumo de APIs dentro del sistema.

---

## 📂 1. Estructura de Archivos y Modularización

Para garantizar la mantenibilidad y escalabilidad del panel analítico, todo nuevo gráfico debe crearse en un archivo independiente dentro de la carpeta especializada `charts/`.

### Estructura de Directorios

```
src/components/
├── charts/
│   ├── chartUtils.ts                # Funciones de normalización y paletas compartidas
│   ├── ChartEndpointsBySystem.tsx   # Gráficos específicos, autocontenidos y puros
│   ├── ChartUsageDistribution.tsx
│   ├── ChartTopEndpoints.tsx
│   ├── ChartCouplingIndex.tsx
│   ├── ChartOrphanEndpoints.tsx
│   ├── ChartIntegrationComplexity.tsx
│   ├── ChartReadWriteRatio.tsx
│   ├── ChartResponseTimeline.tsx
│   ├── ChartMixedUsageEndpoints.tsx
│   └── ...
└── ResultsCharts.tsx                # Orquestador principal (JSX libre de lógica de cálculo)
```

---

## 🔒 2. Validación y Cruce Obligatorio con `SYSTEMS_DB`

Nunca se deben usar las entradas de archivos externos de forma directa para generar métricas canónicas, rankings o porcentajes. Toda información externa debe validarse y cruzarse con la base de datos maestra (`SYSTEMS_DB`).

*   **Razón:** Evita la aparición de datos falsos o corrompidos en las tarjetas de estadísticas o gráficos.
*   **Regla:** Solo aquellos endpoints del archivo que existen en el catálogo estático se cuentan como consumos activos y válidos.
*   **Gestión de errores:** Los endpoints no válidos deben separarse y mostrarse en el módulo de errores del visor, pero nunca deben sumarse a las barras de consumo de sistemas.

---

## ⚙️ 3. Normalización Consistente (Clave de Validación)

Para evitar discrepancias en la correspondencia de rutas y sistemas entre el JSON importado y la base de datos local:

### 3.1. Funciones Compartidas (`chartUtils.ts`)
Tanto el catálogo como la encuesta deben normalizarse usando exactamente el mismo juego de funciones puras:

```typescript
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
```

### 3.2. Regla Crítica de Comparación
*   **❌ NO utilizar el nombre del controlador de la BD:** En la base de datos, el controlador se registra como el nombre físico de la clase Java (ej: `sci-oficina-controller`), mientras que en la encuesta se reporta el recurso del endpoint (ej: `scioficinas`).
*   **✅ Comparación por Path Completo:** La clave de unicidad y validación debe ser:
    `sistema_normalizado + "|" + endpoint_path_normalizado`

---

## 🚀 4. Rendimiento y Cómputo Fuera del Ciclo de Render

El procesamiento del catálogo estático completo (`SYSTEMS_DB`) que contiene cientos de endpoints no debe ocurrir en cada render de React.

*   **Construcción de Índices Estáticos:** Precalcula los conjuntos e índices en el nivel del módulo (fuera de la declaración de los componentes) o dentro de un bloque IIFE ejecutado una sola vez al importar el archivo.
*   **Uso de `Set` para búsquedas en tiempo constante $O(1)$:** En lugar de buscar mediante `.find()` o `.includes()` dentro de listas en cada iteración del renderizado, usa `Set.has()`.

---

## 🎨 5. Estética Premium e Identidad de Marca

Los gráficos deben verse modernos, limpios y premium de acuerdo con la guía de desarrollo del producto.

### 5.1. Paletas de Colores de Sistemas Coherentes
Usa el mismo degradado o color de fondo para representar un sistema específico en todos los componentes del visor de gráficos. Evita generar colores aleatorios.

Definición canónica de degradados en Tailwind CSS:
*   **Config:** `from-blue-500 to-indigo-600`
*   **Maestros:** `from-emerald-500 to-teal-600`
*   **MSync:** `from-purple-500 to-indigo-600`
*   **Control Cli:** `from-amber-500 to-orange-600`
*   **Control Corp:** `from-rose-500 to-pink-600`
*   **DMS:** `from-gray-500 to-slate-600`

### 5.2. Reglas de Visualización
1.  **Barras Horizontales:** Úsalas para rankings y comparaciones ordenadas (ej: Top Endpoints, Sistemas, Equipos). Son responsivas por diseño y no cortan las etiquetas largas de texto.
2.  **Tooltips Contextuales:** Oculta listas muy detalladas (ej: listas de nombres de equipos o endpoints detallados) detrás de hovers o clases `group-hover:block` para mantener la interfaz despejada.
3.  **Transiciones y Micro-animaciones:** Aplica clases como `transition-all duration-700` y `animate-in fade-in` para crear movimientos suaves cuando se cargan los datos.
4.  **Bordes y Sombras Finas:** Usa esquinas muy redondeadas (`rounded-2xl`), bordes sutiles de color gris claro (`border-gray-200`) y sombras leves (`shadow-sm hover:shadow-md`) para lograr el estilo de "tarjetas flotantes premium".

---

## 📝 6. Plantilla para un Nuevo Componente de Gráfico

Para asegurar uniformidad en todo el sistema, cada nuevo componente de gráfico debe estructurarse sin comentarios y siguiendo esta base:

```typescript
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { SurveyResult } from '../../types/results';
import { validEndpoints, normalizeSystem, normalizeEndpointFull } from '../charts/chartUtils';

interface ChartNuevoProps {
  results: SurveyResult[];
}

export const ChartNuevo: React.FC<ChartNuevoProps> = ({ results }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
      <div>
        <h3 className="font-bold text-gray-800 flex items-center mb-1 text-sm md:text-base">
          Título del Gráfico
        </h3>
        <p className="text-xs text-gray-500 mb-6">
          Descripción clara e intuitiva de la métrica visualizada.
        </p>

        <div className="space-y-4">
          {results.length === 0 ? (
            <p className="text-xs text-gray-400 italic text-center py-8">No hay datos</p>
          ) : (
            null
          )}
        </div>
      </div>
    </div>
  );
};
```
