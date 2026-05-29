# Plan: 5 Gráficos Analíticos para el Visor de Encuestas

## Justificación de selección

Se seleccionaron los 5 gráficos con **mayor valor analítico accionable** y factibilidad inmediata con la data existente:

| # | Gráfico | Criterio de selección |
|---|---------|----------------------|
| A | **Top Endpoints más Populares** | Revela APIs críticas compartidas entre equipos; impacto directo en decisiones de deprecación/versionado |
| B | **Índice de Acoplamiento por Sistema** | Cuantifica el riesgo arquitectónico: qué sistemas son "puntos de falla" si cambian |
| C | **Endpoints Huérfanos por Sistema** | Acción concreta: endpoints que nadie usa, candidatos a deprecar |
| D | **Tasa de Validez por Equipo** | Calidad del dato: equipos que declaran endpoints fuera del catálogo, señal de desactualización |
| E | **Complejidad de Integración por Equipo** | Gestión de riesgo: equipos que dependen de muchos sistemas simultáneamente son más frágiles |

---

## Arquitectura propuesta

### Estructura de carpetas

```
src/components/
├── charts/                          [NUEVA carpeta]
│   ├── ChartTopEndpoints.tsx        [NUEVO] Gráfico A
│   ├── ChartCouplingIndex.tsx       [NUEVO] Gráfico B
│   ├── ChartOrphanEndpoints.tsx     [NUEVO] Gráfico C
│   ├── ChartValidityRate.tsx        [NUEVO] Gráfico D
│   ├── ChartIntegrationComplexity.tsx [NUEVO] Gráfico E
│   └── chartUtils.ts               [NUEVO] Utilidades compartidas (normalización)
│
├── ResultsCharts.tsx               [MODIFICAR] Refactorizar como orquestador
├── ResultsViewer.tsx               [MODIFICAR] Posiblemente añadir sub-secciones
└── ... (resto sin cambios)
```

### Patrón de cada componente

Todos los componentes de chart siguen la misma interfaz:

```typescript
interface ChartXxxProps {
  results: SurveyResult[];
}

export const ChartXxx: React.FC<ChartXxxProps> = ({ results }) => { ... }
```

---

## Descripción detallada de cada gráfico

---

### A — `ChartTopEndpoints.tsx`
**"Top 10 Endpoints más Consumidos"**

**¿Qué muestra?**
Ranking horizontal de los 10 endpoints con más equipos distintos que los consumen. El eje X es el número de equipos consumidores. Cada barra incluye el sistema al que pertenece como badge de color.

**Lógica de datos:**
```
Para cada endpointMapping válido:
  clave = sistema + "|" + endpoint-path-normalizado
  contar cuántos team distintos aparecen con esa clave

Ordenar desc → tomar top 10
```

**Estructura de dato resultante:**
```typescript
interface TopEndpointItem {
  system: string;
  endpoint: string;       // ruta limpia sin método
  method: string;         // GET, POST, etc.
  teamCount: number;      // nº de equipos que lo consumen
  teams: string[];        // lista de equipos (para tooltip)
}
```

**Visualización:**
- Barras horizontales ordenadas de mayor a menor
- Badge de color por sistema en cada barra
- Tooltip al hover con lista de equipos consumidores
- Color del badge: mismo sistema → mismo color (paleta fija)

**Insight que entrega:**
> "El endpoint `GET /scioficinas/model-se-ro/findAll` lo usan 7 equipos → no se puede deprecar sin coordinación"

---

### B — `ChartCouplingIndex.tsx`
**"Índice de Acoplamiento por Sistema"**

**¿Qué muestra?**
Por cada sistema (Config, Maestros, MSync, etc.), muestra cuántos **equipos distintos** dependen de él. Además, dentro de cada barra, muestra el desglose de uso FRONT/BACK/BOTH como segmentos de color.

**Lógica de datos:**
```
Para cada sistema en SYSTEMS_DB:
  equipos_front = Set de teams con usage=FRONT para ese sistema
  equipos_back  = Set de teams con usage=BACK  para ese sistema
  equipos_both  = Set de teams con usage=BOTH  para ese sistema
  total_equipos = union de los tres sets
```

**Estructura de dato resultante:**
```typescript
interface CouplingItem {
  system: string;
  totalTeams: number;
  frontTeams: number;
  backTeams: number;
  bothTeams: number;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  // critical = ≥5 equipos, high = 3-4, medium = 2, low = 1
}
```

**Visualización:**
- Barras horizontales ordenadas por `totalTeams` desc
- Barra apilada con 3 segmentos: FRONT (azul) / BACK (verde) / BOTH (morado)
- Badge de riesgo: 🔴 Crítico / 🟡 Alto / 🟢 Bajo
- Tooltip con lista de equipos por tipo

**Insight que entrega:**
> "Config lo usan 8 equipos (5 back, 2 front, 1 ambos) → Riesgo CRÍTICO"

---

### C — `ChartOrphanEndpoints.tsx`
**"Endpoints Huérfanos por Sistema"**

**¿Qué muestra?**
Por cada sistema, la proporción de endpoints **que nadie consume** del total disponible en la BD. Visualizado como barras de progreso dobles: usados vs huérfanos.

**Lógica de datos:**
```
Para cada sistema:
  total_db    = contar todos los endpoints en SYSTEMS_DB para ese sistema
  consumidos  = contar endpoints con al menos 1 usage válido
  huérfanos   = total_db - consumidos
  cobertura   = consumidos / total_db * 100
```

**Estructura de dato resultante:**
```typescript
interface OrphanSystemItem {
  system: string;
  totalInDb: number;
  consumed: number;
  orphan: number;
  coveragePct: number;
}
```

**Visualización:**
- Lista de sistemas con barra de progreso bicolor (verde=usados, gris=huérfanos)
- % de cobertura visible en cada barra
- Ordenado de menor a mayor cobertura (los más huérfanos primero)
- Indicador numérico: "X de Y endpoints en uso"

**Insight que entrega:**
> "DMS: solo 3 de 22 endpoints tienen consumo (14%) → revisar si el módulo se está usando"

---

### D — `ChartValidityRate.tsx`
**"Tasa de Validez por Equipo"**

**¿Qué muestra?**
Por cada equipo/proyecto, el porcentaje de endpoints declarados que existen en el catálogo `SYSTEMS_DB` vs los "no reconocidos". Detecta equipos que trabajan con versiones desactualizadas de las APIs.

**Lógica de datos:**
```
Para cada archivo/encuesta cargado (o agrupado por team):
  válidos    = endpoints que pasan la validación contra SYSTEMS_DB
  inválidos  = endpoints que NO están en SYSTEMS_DB
  total      = válidos + inválidos
  tasa       = válidos / total * 100
```

**Estructura de dato resultante:**
```typescript
interface ValidityItem {
  team: string;
  valid: number;
  invalid: number;
  total: number;
  validityPct: number;
  status: 'ok' | 'warning' | 'critical';
  // ok = 95%+, warning = 80-94%, critical = <80%
}
```

**Visualización:**
- Barras horizontales: segmento verde (válidos) + segmento rojo (inválidos)
- % de validez visible en cada barra
- Ordenado de menor a mayor tasa (los más problemáticos primero)
- Íconos de estado: ✅ / ⚠️ / 🔴

**Insight que entrega:**
> "Equipo X: 68% validez → probablemente trabajan con una versión antigua de la API de Config"

---

### E — `ChartIntegrationComplexity.tsx`
**"Complejidad de Integración por Equipo"**

**¿Qué muestra?**
Por cada equipo, dos métricas combinadas en un gráfico de burbujas o barras agrupadas:
1. Nº de **sistemas distintos** que consume (breadth)
2. Nº de **endpoints únicos** totales (depth)

Equipos en la zona "muchos sistemas + muchos endpoints" = mayor complejidad y riesgo.

**Lógica de datos:**
```
Para cada team:
  sistemas_distintos = Set de system de sus endpointMappings válidos
  endpoints_únicos   = Set de endpoint-keys válidos de ese team
```

**Estructura de dato resultante:**
```typescript
interface ComplexityItem {
  team: string;
  systemCount: number;      // nº de sistemas distintos
  endpointCount: number;    // nº de endpoints únicos válidos
  complexityScore: number;  // systemCount * log(endpointCount + 1) → índice compuesto
  tier: 'simple' | 'moderate' | 'complex';
}
```

**Visualización:**
- Barras agrupadas: barra azul = sistemas, barra teal = endpoints (eje secundario)
- Badge de tier: 🟢 Simple / 🟡 Moderado / 🔴 Complejo
- Ordenado por `complexityScore` desc
- Tooltip con detalle de qué sistemas consume cada equipo

**Insight que entrega:**
> "Equipo Y consume 4 sistemas y 87 endpoints → integración compleja, candidato a tener un BFF o capa de orquestación"

---

## Refactorización de `ResultsCharts.tsx`

El archivo actual tiene lógica de datos mezclada con JSX y renderiza 2 gráficos directamente. Se propone convertirlo en un **orquestador puro** que importa y organiza todos los gráficos:

```typescript
// ResultsCharts.tsx NUEVO (orquestador)
import { ChartEndpointsBySystem } from './charts/ChartEndpointsBySystem';  // actual gráfico 1
import { ChartUsageDistribution }  from './charts/ChartUsageDistribution';  // actual gráfico 2
import { ChartTopEndpoints }       from './charts/ChartTopEndpoints';
import { ChartCouplingIndex }      from './charts/ChartCouplingIndex';
import { ChartOrphanEndpoints }    from './charts/ChartOrphanEndpoints';
import { ChartValidityRate }       from './charts/ChartValidityRate';
import { ChartIntegrationComplexity } from './charts/ChartIntegrationComplexity';

export const ResultsCharts: React.FC<{ results: SurveyResult[] }> = ({ results }) => (
  <div className="space-y-6">
    {/* Fila 1: los 2 actuales */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartEndpointsBySystem results={results} />
      <ChartUsageDistribution results={results} />
    </div>

    {/* Fila 2: Popularidad y Acoplamiento */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartTopEndpoints results={results} />
      <ChartCouplingIndex results={results} />
    </div>

    {/* Fila 3: Calidad de datos */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <ChartValidityRate results={results} />
      <ChartOrphanEndpoints results={results} />
    </div>

    {/* Fila 4: Complejidad — ocupa todo el ancho */}
    <ChartIntegrationComplexity results={results} />
  </div>
);
```

## `chartUtils.ts` — Utilidades compartidas

Para evitar duplicar las funciones de normalización en cada componente:

```typescript
// src/components/charts/chartUtils.ts
export const normalizeSystem = (sys: string): string => { ... };
export const normalizeEndpointFull = (ep: string): string => { ... };
export const buildValidEndpointsIndex = () => { ... };  // Set precalculado
export const SYSTEM_PALETTE: Record<string, string> = {
  'Config':       '#3B82F6',
  'Maestros':     '#10B981',
  'MSync':        '#8B5CF6',
  'Control Cli':  '#F59E0B',
  'Control Corp': '#EF4444',
  'DMS':          '#6B7280',
};
```

---

## Orden de implementación

> [!IMPORTANT]
> Se recomienda implementar en este orden para ir viendo resultados funcionales rápidamente y para que las utilidades compartidas estén listas antes de los componentes que las usan.

1. `chartUtils.ts` — base compartida
2. Extraer gráficos actuales → `ChartEndpointsBySystem.tsx` y `ChartUsageDistribution.tsx`
3. Refactorizar `ResultsCharts.tsx` como orquestador (solo importa, no tiene lógica)
4. `ChartTopEndpoints.tsx` — (A)
5. `ChartValidityRate.tsx` — (D) datos ya disponibles desde `uploadedFiles`
6. `ChartCouplingIndex.tsx` — (B)
7. `ChartOrphanEndpoints.tsx` — (C) requiere cruzar con `SYSTEMS_DB`
8. `ChartIntegrationComplexity.tsx` — (E)

---

## Open Questions

> [!NOTE]
> Estos puntos no bloquean el inicio pero sí afectan los detalles finales:

1. **¿`ChartValidityRate` toma los datos de `uploadedFiles` (desde `ResultsViewer`) o los recalcula desde `results`?** Si se necesita `uploadedFiles`, el componente debe recibirlo como prop adicional o se recalcula internamente (duplica lógica pero mantiene independencia).

2. **¿El gráfico E (Complejidad) debe mostrar todos los equipos o solo los top N?** Si hay muchos equipos, el gráfico se vuelve ilegible. Propongo top 10 con toggle "ver todos".

3. **¿Se actualiza `directrices_graficos.md`** con la nueva convención de `chartUtils.ts` como fuente única de normalización?
