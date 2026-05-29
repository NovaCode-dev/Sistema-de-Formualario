import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

// Helper to modify path segments realistically for singular/plural/prefix testing
function generateRealVariations(endpointStr) {
  const parts = endpointStr.trim().split(' ');
  const rawPath = parts.length > 1 ? parts[1] : parts[0];
  
  const variations = [];
  
  // 1. Prefix variations (none, /api, /sce, /public)
  const base = rawPath.replace(/^\/(api|sce|public)\b/gi, '');
  variations.push(base);
  variations.push('/api' + base);
  variations.push('/sce' + base);
  variations.push('/public' + base);
  
  // 2. Singular/plural transitions of key segments
  const segments = base.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSeg = segments[0];
    if (firstSeg.length > 3 && !firstSeg.startsWith('{')) {
      let modifiedSegs = [...segments];
      
      if (firstSeg.endsWith('locales')) modifiedSegs[0] = firstSeg.replace('locales', 'local');
      else if (firstSeg.endsWith('local')) modifiedSegs[0] = firstSeg.replace('local', 'locales');
      
      else if (firstSeg.endsWith('roles')) modifiedSegs[0] = firstSeg.replace('roles', 'rol');
      else if (firstSeg.endsWith('rol')) modifiedSegs[0] = firstSeg.replace('rol', 'roles');
      
      else if (firstSeg.endsWith('choferes')) modifiedSegs[0] = firstSeg.replace('choferes', 'chofer');
      else if (firstSeg.endsWith('chofer')) modifiedSegs[0] = firstSeg.replace('chofer', 'choferes');
      
      else if (firstSeg.endsWith('indicadores')) modifiedSegs[0] = firstSeg.replace('indicadores', 'indicador');
      else if (firstSeg.endsWith('indicador')) modifiedSegs[0] = firstSeg.replace('indicador', 'indicadores');
      
      else if (firstSeg.endsWith('actividades')) modifiedSegs[0] = firstSeg.replace('actividades', 'actividad');
      else if (firstSeg.endsWith('actividad')) modifiedSegs[0] = firstSeg.replace('actividad', 'actividades');
      
      else if (firstSeg.endsWith('aranceles')) modifiedSegs[0] = firstSeg.replace('aranceles', 'arancel');
      else if (firstSeg.endsWith('arancel')) modifiedSegs[0] = firstSeg.replace('arancel', 'aranceles');
      
      else if (firstSeg.endsWith('paises')) modifiedSegs[0] = firstSeg.replace('paises', 'pais');
      else if (firstSeg.endsWith('pais')) modifiedSegs[0] = firstSeg.replace('pais', 'paises');
      
      else if (firstSeg.endsWith('files')) modifiedSegs[0] = firstSeg.slice(0, -1);
      else if (firstSeg.endsWith('file')) modifiedSegs[0] = firstSeg + 's';
      
      else if (firstSeg.endsWith('menus')) modifiedSegs[0] = firstSeg.slice(0, -1);
      else if (firstSeg.endsWith('menu')) modifiedSegs[0] = firstSeg + 's';
      
      else if (firstSeg.endsWith('s')) modifiedSegs[0] = firstSeg.slice(0, -1);
      else modifiedSegs[0] = firstSeg + 's';
      
      variations.push('/' + modifiedSegs.join('/'));
      variations.push('/api/' + modifiedSegs.join('/'));
      variations.push('/sce/' + modifiedSegs.join('/'));
      variations.push('/public/' + modifiedSegs.join('/'));
    }
  }
  
  return variations;
}

const surveyDir = path.join(__dirname, '../src/data/encuestados');
const files = fs.readdirSync(surveyDir).filter(f => f.endsWith('.json'));

let totalTests = 0;
let passedTests = 0;
const failures = [];

files.forEach(file => {
  const filePath = path.join(surveyDir, file);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const mappings = data.endpointMappings || [];
  
  mappings.forEach(m => {
    const original = m.endpoint;
    const variations = generateRealVariations(original);
    
    variations.forEach(variation => {
      totalTests++;
      const normOriginal = normalizePath(original.split(' ')[1] || original);
      const normVariation = normalizePath(variation);
      
      if (normOriginal === normVariation) {
        passedTests++;
      } else {
        failures.push({
          file,
          original,
          variation,
          normOriginal,
          normVariation
        });
      }
    });
  });
});

console.log(`\n================ TEST SUMMARY ================`);
console.log(`Total Assertions Run: ${totalTests}`);
console.log(`Passed: ${passedTests} (${((passedTests/totalTests)*100).toFixed(2)}%)`);
console.log(`Failed: ${failures.length}`);
console.log(`==============================================\n`);

if (failures.length > 0) {
  console.log("--- SAMPLE FAILURES ---");
  failures.slice(0, 10).forEach((f, index) => {
    console.log(`[${index + 1}] File: ${f.file}`);
    console.log(`    Original:  ${f.original} => normalized: ${f.normOriginal}`);
    console.log(`    Variation: ${f.variation} => normalized: ${f.normVariation}`);
  });
} else {
  console.log("🎉 ALL TESTS PASSED! Prefix and Singularization normalization is 100% robust across all projects!");
}
