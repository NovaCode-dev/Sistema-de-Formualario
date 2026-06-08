export const SUPABASE_URL = ((import.meta as any).env.VITE_SUPABASE_URL || 'https://tu-proyecto-id.supabase.co').replace(/\/$/, '');
export const SUPABASE_ANON_KEY = (import.meta as any).env.VITE_SUPABASE_ANON_KEY || 'TU_ANON_KEY_DE_SUPABASE';

export const SUPABASE_CATALOG_TABLE = 'base_endpoints';
export const SUPABASE_SURVEYS_TABLE = 'tasks';


export async function fetchFromSupabase(tableName: string, query: string = 'select=*', paginate: boolean = false) {
  if (SUPABASE_URL.includes('tu-proyecto-id') || SUPABASE_ANON_KEY.includes('TU_ANON_KEY')) {
    console.warn('⚠️ Supabase no está configurado con claves reales. Por favor configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en tu archivo .env');
    return [];
  }

  if (!paginate) {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${tableName}?${query}`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`Error en petición a Supabase (${tableName}): ${response.statusText}`);
    }

    return response.json();
  }

  let allRows: any[] = [];
  let from = 0;
  const pageSize = 1000;
  let total: number | null = null;

  do {
    const to = from + pageSize - 1;
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${tableName}?${query}`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'count=exact',
        'Range': `${from}-${to}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error en petición a Supabase (${tableName}): ${response.statusText}`);
    }

    const data = await response.json();
    if (Array.isArray(data)) {
      allRows = allRows.concat(data);
    }

    // Obtener total desde Content-Range header: e.g. "0-999/3890" o "0-999/*"
    const contentRange = response.headers.get('content-range');
    if (contentRange) {
      const parts = contentRange.split('/');
      if (parts.length === 2) {
        const totalStr = parts[1];
        if (totalStr && totalStr !== '*') {
          total = parseInt(totalStr, 10);
        }
      }
    }

    if (total !== null) {
      if (allRows.length >= total) {
        break;
      }
    } else {
      // Respaldo por si no viene el Content-Range header
      if (!data || data.length < pageSize) {
        break;
      }
    }

    from += pageSize;
  } while (true);

  return allRows;
}
