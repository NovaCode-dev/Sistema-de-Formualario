function normalizePath(rawPath) {
  let p = rawPath.toLowerCase().trim();
  
  // Clean all leading deployment prefixes sequentially
  while (true) {
    let next = p.replace(/^\/(api|sce|public)\b/i, '');
    if (next === p) break;
    p = next;
  }
  
  // Clean infrastructure segments like model-se-ro
  p = p.replace(/\/model-se-ro\b/gi, '');
  
  if (!p.startsWith('/')) {
    p = '/' + p;
  }
  p = p.replace(/\/+/g, '/');
  p = p.replace(/\/+$/, '');
  p = p.replace(/\{[^}]+\}/g, '{param}');
  
  const segments = p.split('/').map(segment => {
    if (segment.startsWith('{') && segment.endsWith('}')) return segment;
    
    // Normalize literal booleans (true/false) to {param}
    if (segment === 'true' || segment === 'false') {
      return '{param}';
    }
    
    if (segment.length <= 3) return segment;
    
    // Normalize literal numbers to {param}
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

const testCases = [
  ["/api/tbdepositos/model-se-ro/findAllByEstado/{estado}", "/tbdepositos/findAllByEstado/true"],
  ["/api/tbclientes/model-se-ro/findAllByEstado/{estado}", "/tbclientes/findAllByEstado/false"],
  ["/api/tbchoferes/model-se-ro/findAllById/{id}", "/tbchofer/findAllById/12345"]
];

testCases.forEach(([p1, p2]) => {
  const norm1 = normalizePath(p1);
  const norm2 = normalizePath(p2);
  console.log(`Path 1: ${p1} => ${norm1}`);
  console.log(`Path 2: ${p2} => ${norm2}`);
  console.log(`Matches: ${norm1 === norm2}\n`);
});
