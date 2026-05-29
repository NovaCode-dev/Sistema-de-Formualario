export function normalizePath(rawPath) {
  let p = rawPath.toLowerCase().trim();
  
  while (true) {
    let next = p.replace(/^\/(api|sce|public)\b/i, '');
    if (next === p) break;
    p = next;
  }
  
  p = p.replace(/\/model-se-ro\b/gi, '');
  
  if (!p.startsWith('/')) {
    p = '/' + p;
  }
  p = p.replace(/\/+/g, '/');
  p = p.replace(/\/+$/, '');
  p = p.replace(/\{[^}]+\}/g, '{param}');
  
  const segments = p.split('/').map(segment => {
    if (segment.startsWith('{') && segment.endsWith('}')) return segment;
    
    if (segment === 'true' || segment === 'false') {
      return '{param}';
    }
    
    if (segment.length <= 3) return segment;
    
    if (/^\d+$/.test(segment)) {
      return '{param}';
    }
    
    if (segment.endsWith('files') || segment.endsWith('menus')) {
      return segment.slice(0, -1);
    }
    
    const consonantalEndings = ['locales', 'roles', 'choferes', 'indicadores', 'actividades', 'aranceles', 'paises', 'canales', 'almacenes'];
    if (consonantalEndings.some(ending => segment.endsWith(ending))) {
      return segment.slice(0, -2);
    }
    
    if (segment.endsWith('s') && !segment.endsWith('us') && !segment.endsWith('is')) {
      return segment.slice(0, -1);
    }
    
    return segment;
  });
  
  return segments.join('/');
}
