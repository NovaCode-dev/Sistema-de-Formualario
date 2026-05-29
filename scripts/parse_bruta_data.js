import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { normalizePath } from './utils/pathNormalizer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getFiles(dir, filter) {
  let results = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(filePath, filter));
    } else if (file.endsWith(filter)) {
      results.push(filePath);
    }
  }
  return results;
}

function loadTsData(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const startIndex = content.indexOf('[');
  if (startIndex === -1) return [];
  let jsArray = content.substring(startIndex).trim();
  if (jsArray.endsWith(';')) {
    jsArray = jsArray.slice(0, -1);
  }
  return eval(`(${jsArray})`);
}

const systemsDb = {
  "Maestros": loadTsData(path.join(__dirname, '../src/data/maestros.ts')),
  "Control Cli": loadTsData(path.join(__dirname, '../src/data/controlCli.ts')),
  "Control Corp": loadTsData(path.join(__dirname, '../src/data/controlCorp.ts')),
  "MSync": loadTsData(path.join(__dirname, '../src/data/mSync.ts')),
  "Config": loadTsData(path.join(__dirname, '../src/data/config.ts')),
  "DMS": loadTsData(path.join(__dirname, '../src/data/dms.ts'))
};

const hostToSystem = {
  "HOST_MAESTROS": "Maestros",
  "HOST_CONTROL_CLIENTE": "Control Cli",
  "HOST_CONTROL_CLIENTES": "Control Cli",
  "HOST_CONTROL_CORP": "Control Corp",
  "HOST_MAESTROS_SYNC": "MSync",
  "HOST_MSYNC": "MSync",
  "HOST_MAESTROSYNC": "MSync",
  "HOST_CONFIG": "Config",
  "HOST_DMS": "DMS",
  "SUMAX_URL_MAESTROS": "Maestros",
  "SUMAX_URL_CONTROL_CLIENTE": "Control Cli",
  "SUMAX_URL_CONTROL_CLIENTES": "Control Cli",
  "SUMAX_URL_CONTROL_CORP": "Control Corp",
  "SUMAX_URL_MAESTROS_SYNC": "MSync",
  "SUMAX_URL_MSYNC": "MSync",
  "SUMAX_URL_CONFIG": "Config",
  "SUMAX_URL_DMS": "DMS"
};

const CONSTANT_OVERRIDES = {
  "SCC_RENTAL_VALIDATION": "/public"
};

function resolveProxyPathConstant(constName) {
  if (CONSTANT_OVERRIDES[constName]) {
    return CONSTANT_OVERRIDES[constName];
  }
  let name = constName.toLowerCase().replace(/_/g, '');
  if (name.endsWith('pais')) {
    return '/' + name + 'es';
  }
  const lastChar = name[name.length - 1];
  if (['a', 'e', 'i', 'o', 'u'].includes(lastChar)) {
    if (!name.endsWith('s')) {
      name += 's';
    }
  } else {
    if (!name.endsWith('es')) {
      name += 'es';
    }
  }
  return '/' + name;
}

function parseFeignUrl(feignAnnotationStr) {
  const pat1 = /url\s*=\s*HostProxy\.([A-Z0-9_]+)\s*\+\s*"([^"]+)"/i;
  let match = feignAnnotationStr.match(pat1);
  if (match) {
    return { hostVar: match[1], basePath: match[2] };
  }
  
  const pat2 = /url\s*=\s*["']\s*\${([A-Z0-9_]+)}\/?\s*["']\s*\+\s*(?:ProxyPath\.[A-Za-z0-9_]+\.)?([A-Z0-9_]+)/i;
  match = feignAnnotationStr.match(pat2);
  if (match) {
    return { hostVar: match[1], basePath: resolveProxyPathConstant(match[2]) };
  }
  
  const pat3 = /url\s*=\s*["']\s*\${([A-Z0-9_]+)}([^"']*)["']/i;
  match = feignAnnotationStr.match(pat3);
  if (match) {
    return { hostVar: match[1], basePath: match[2] };
  }
  
  return null;
}

const genericCache = {};

function loadGenericProxies(projectPath) {
  const genericFiles = getFiles(projectPath, '.java').filter(f => f.includes('genericos') || f.includes('Generic'));
  for (const file of genericFiles) {
    const content = fs.readFileSync(file, 'utf-8');
    const classNameMatch = content.match(/public\s+interface\s+([a-zA-Z0-9_]+)/);
    if (!classNameMatch) continue;
    const className = classNameMatch[1];
    
    const endpoints = [];
    const mappingRegex = /@(GetMapping|PostMapping|PutMapping|DeleteMapping)(?:\(\s*(?:path\s*=\s*)?"([^"]*)"[^)]*\)|\(\s*"([^"]*)"[^)]*\)|\s*\b)/g;
    let match;
    while ((match = mappingRegex.exec(content)) !== null) {
      const mappingType = match[1];
      let method = 'GET';
      if (mappingType === 'PostMapping') method = 'POST';
      else if (mappingType === 'PutMapping') method = 'PUT';
      else if (mappingType === 'DeleteMapping') method = 'DELETE';
      
      const subpath = match[2] || match[3] || '';
      endpoints.push({ method, subpath });
    }
    genericCache[className] = endpoints;
  }
}

function parseServiceFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const classNameMatch = content.match(/export\s+class\s+([a-zA-Z0-9_]+)/);
  const className = classNameMatch ? classNameMatch[1] : '';
  
  const urlRegex = /(?:const|let|var|readonly)?\s*([a-zA-Z0-9_]*url[a-zA-Z0-9_]*)\s*=\s*(?:`\s*\${environment\.([A-Z0-9_]+)}([^\`]*)`|['"]\s*environment\.([A-Z0-9_]+)\s*\+\s*['"]([^'"]*)['"])/i;
  const urlMatch = content.match(urlRegex);
  if (!urlMatch) return [];
  
  const urlVar = urlMatch[1];
  const hostVar = urlMatch[2] || urlMatch[4];
  const basePath = urlMatch[3] || urlMatch[5] || '';
  const system = hostToSystem[hostVar];
  if (!system) return [];
  
  const endpoints = [];
  const httpRegex = /this\.(?:_)?http\s*\.\s*(get|post|put|delete|patch)\b/g;
  let match;
  while ((match = httpRegex.exec(content)) !== null) {
    const method = match[1].toUpperCase();
    let index = httpRegex.lastIndex;
    
    if (content[index] === '<') {
      let angleDepth = 1;
      index++;
      while (angleDepth > 0 && index < content.length) {
        if (content[index] === '<') angleDepth++;
        else if (content[index] === '>') angleDepth--;
        index++;
      }
    }
    
    while (index < content.length && /\s/.test(content[index])) {
      index++;
    }
    
    if (content[index] !== '(') continue;
    index++;
    
    const startIndex = index;
    let openCount = 1;
    let endIndex = startIndex;
    while (openCount > 0 && endIndex < content.length) {
      const char = content[endIndex];
      if (char === '(') openCount++;
      else if (char === ')') openCount--;
      endIndex++;
    }
    const argsContent = content.substring(startIndex, endIndex - 1);
    let commaIndex = -1;
    let depth = 0;
    for (let i = 0; i < argsContent.length; i++) {
      const c = argsContent[i];
      if (c === '(' || c === '[' || c === '{') depth++;
      else if (c === ')' || c === ']' || c === '}') depth--;
      else if (c === ',' && depth === 0) {
        commaIndex = i;
        break;
      }
    }
    let urlArg = (commaIndex === -1 ? argsContent : argsContent.substring(0, commaIndex)).trim();
    
    let pathPart = '';
    if (urlArg.startsWith('`')) {
      const cleanRegex = new RegExp('\\$\\{\\s*(?:this\\.)?' + urlVar + '\\s*\\}', 'g');
      pathPart = urlArg.slice(1, -1).replace(cleanRegex, '').trim();
    } else {
      const cleanRegex = new RegExp('(?:this\\.)?' + urlVar + '\\s*\\+\\s*', 'g');
      pathPart = urlArg.replace(cleanRegex, '').trim();
    }
    if ((pathPart.startsWith("'") && pathPart.endsWith("'")) || (pathPart.startsWith('"') && pathPart.endsWith('"'))) {
      pathPart = pathPart.slice(1, -1);
    }
    let normalized = pathPart;
    normalized = normalized.replace(/\$\{[^}]+\}/g, '{param}');
    normalized = normalized.replace(/\s*\+\s*(?:[a-zA-Z0-9_]+\()?([a-zA-Z0-9_]+)\)?/g, '/{$1}');
    normalized = normalized.replace(/\/+/g, '/');
    
    let fullPath = (basePath + normalized).trim();
    if (!fullPath.startsWith('/')) fullPath = '/' + fullPath;
    fullPath = fullPath.replace(/\/+$/, '');
    
    endpoints.push({
      system,
      className,
      method,
      rawPath: fullPath
    });
  }
  return endpoints;
}

function parseKotlinFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const normalizedPath = filePath.replace(/\\/g, '/');
  let system = '';
  if (normalizedPath.includes('/control_cliente/')) system = 'Control Cli';
  else if (normalizedPath.includes('/maestros_sync/')) system = 'MSync';
  else if (normalizedPath.includes('/maestros/')) system = 'Maestros';
  else if (normalizedPath.includes('/dms/')) system = 'DMS';
  else if (normalizedPath.includes('/config/')) system = 'Config';
  
  if (!system) return [];
  
  const classNameMatch = content.match(/interface\s+([a-zA-Z0-9_]+)/);
  const className = classNameMatch ? classNameMatch[1] : '';
  
  const endpoints = [];
  const retrofitRegex = /@(GET|POST|PUT|DELETE)\(\s*"([^"]*)"\s*\)/g;
  let match;
  while ((match = retrofitRegex.exec(content)) !== null) {
    const method = match[1];
    let rawPath = match[2];
    if (!rawPath.startsWith('/')) {
      rawPath = '/' + rawPath;
    }
    endpoints.push({
      system,
      className,
      method,
      rawPath
    });
  }
  return endpoints;
}

function parseJavaFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const classNameMatch = content.match(/public\s+interface\s+([a-zA-Z0-9_]+)/);
  const className = classNameMatch ? classNameMatch[1] : '';
  
  const feignRegex = /@(?:Reactive)?FeignClient\(([^)]+)\)/i;
  const feignMatch = content.match(feignRegex);
  if (!feignMatch) return [];
  
  const parsedUrl = parseFeignUrl(feignMatch[1]);
  if (!parsedUrl) return [];
  
  const hostVar = parsedUrl.hostVar;
  const basePath = parsedUrl.basePath;
  const system = hostToSystem[hostVar];
  if (!system) return [];
  
  const endpoints = [];
  const mappingRegex = /@(GetMapping|PostMapping|PutMapping|DeleteMapping)(?:\(\s*(?:path\s*=\s*)?"([^"]*)"[^)]*\)|\(\s*"([^"]*)"[^)]*\)|\s*\b)/g;
  let match;
  while ((match = mappingRegex.exec(content)) !== null) {
    const mappingType = match[1];
    let method = 'GET';
    if (mappingType === 'PostMapping') method = 'POST';
    else if (mappingType === 'PutMapping') method = 'PUT';
    else if (mappingType === 'DeleteMapping') method = 'DELETE';
    
    const subpath = match[2] || match[3] || '';
    let fullPath = (basePath + subpath).trim();
    if (!fullPath.startsWith('/')) fullPath = '/' + fullPath;
    fullPath = fullPath.replace(/\/+$/, '');
    
    endpoints.push({
      system,
      className,
      method,
      rawPath: fullPath
    });
  }
  
  const extendsMatch = content.match(/extends\s+([a-zA-Z0-9_]+)/);
  if (extendsMatch) {
    const parentClass = extendsMatch[1];
    const parentEndpoints = genericCache[parentClass] || [];
    for (const pe of parentEndpoints) {
      let fullPath = (basePath + pe.subpath).trim();
      if (!fullPath.startsWith('/')) fullPath = '/' + fullPath;
      fullPath = fullPath.replace(/\/+$/, '');
      endpoints.push({
        system,
        className,
        method: pe.method,
        rawPath: fullPath
      });
    }
  }
  
  return endpoints;
}

function findMatchedEndpoint(system, method, rawPath) {
  const normExtracted = normalizePath(rawPath);
  const modules = systemsDb[system] || [];
  for (const mod of modules) {
    for (const ctrl of mod.controllers) {
      for (const ep of ctrl.endpoints) {
        const spaceIndex = ep.indexOf(' ');
        if (spaceIndex === -1) continue;
        const epMethod = ep.substring(0, spaceIndex).trim();
        const epPath = ep.substring(spaceIndex + 1).trim();
        if (epMethod === method && normalizePath(epPath) === normExtracted) {
          return {
            controller: ctrl.name,
            endpoint: ep
          };
        }
      }
    }
  }
  return null;
}

function findFallbackController(system, rawPath, className) {
  const normExtracted = normalizePath(rawPath);
  const pathSegments = normExtracted.split('/').filter(Boolean);
  const basePathSegment = pathSegments[0] || '';
  
  if (basePathSegment) {
    const modules = systemsDb[system] || [];
    for (const mod of modules) {
      for (const ctrl of mod.controllers) {
        for (const ep of ctrl.endpoints) {
          const spaceIndex = ep.indexOf(' ');
          if (spaceIndex === -1) continue;
          const epPath = ep.substring(spaceIndex + 1).trim();
          const normEp = normalizePath(epPath);
          const epSegments = normEp.split('/').filter(Boolean);
          if (epSegments[0] === basePathSegment) {
            return ctrl.name;
          }
        }
      }
    }
  }
  
  if (className) {
    let name = className;
    name = name.replace(/(Service|ReactiveProxy|Proxy)$/, '');
    name = name.replace(/([A-Z])/g, '-$1').toLowerCase();
    if (name.startsWith('-')) name = name.substring(1);
    return name + '-controller';
  }
  
  return 'generic-controller';
}

function processProject(projectPath, projectName, devName, teamName) {
  loadGenericProxies(projectPath);
  const serviceFiles = getFiles(projectPath, '.ts');
  const kotlinFiles = getFiles(projectPath, '.kt');
  const javaFiles = getFiles(projectPath, '.java').filter(f => !f.includes('genericos') && !f.includes('Generic'));
  
  const extractedMap = new Map();
  
  for (const file of serviceFiles) {
    const eps = parseServiceFile(file);
    for (const ep of eps) {
      const key = `${ep.system}||${ep.method}||${ep.rawPath}`;
      if (!extractedMap.has(key)) {
        extractedMap.set(key, { ...ep, front: true, back: false });
      } else {
        extractedMap.get(key).front = true;
      }
    }
  }
  
  for (const file of kotlinFiles) {
    const eps = parseKotlinFile(file);
    for (const ep of eps) {
      const key = `${ep.system}||${ep.method}||${ep.rawPath}`;
      if (!extractedMap.has(key)) {
        extractedMap.set(key, { ...ep, front: true, back: false });
      } else {
        extractedMap.get(key).front = true;
      }
    }
  }
  
  for (const file of javaFiles) {
    const eps = parseJavaFile(file);
    for (const ep of eps) {
      const key = `${ep.system}||${ep.method}||${ep.rawPath}`;
      if (!extractedMap.has(key)) {
        extractedMap.set(key, { ...ep, front: false, back: true });
      } else {
        extractedMap.get(key).back = true;
      }
    }
  }
  
  const mappings = [];
  const systemsSet = new Set();
  
  for (const ep of extractedMap.values()) {
    let usage = 'NONE';
    if (ep.front && ep.back) usage = 'BOTH';
    else if (ep.front) usage = 'FRONT';
    else if (ep.back) usage = 'BACK';
    
    systemsSet.add(ep.system);
    
    const matched = findMatchedEndpoint(ep.system, ep.method, ep.rawPath);
    if (matched) {
      mappings.push({
        system: ep.system,
        controller: matched.controller,
        endpoint: matched.endpoint,
        usage
      });
    } else {
      const fallbackCtrl = findFallbackController(ep.system, ep.rawPath, ep.className);
      let endpointStr = `${ep.method} ${ep.rawPath}`;
      endpointStr = endpointStr.replace(/\/+/g, '/');
      mappings.push({
        system: ep.system,
        controller: fallbackCtrl,
        endpoint: endpointStr,
        usage
      });
    }
  }
  
  mappings.sort((a, b) => {
    if (a.system !== b.system) return a.system.localeCompare(b.system);
    if (a.controller !== b.controller) return a.controller.localeCompare(b.controller);
    return a.endpoint.localeCompare(b.endpoint);
  });
  
  const surveyResult = {
    developer: {
      name: devName,
      team: teamName,
      role: "automated parser"
    },
    timestamp: new Date().toISOString(),
    systemsConsumed: Array.from(systemsSet).sort(),
    endpointMappings: mappings
  };
  
  const cleanProjectName = projectName.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/_+/g, '_');
  const outputName = `encuesta_api_${cleanProjectName}.json`;
  const outputPath = path.join(__dirname, '../src/data/encuestados', outputName);
  
  fs.writeFileSync(outputPath, JSON.stringify(surveyResult, null, 2), 'utf-8');
  console.log(`[${projectName}] Generated survey JSON with ${mappings.length} mappings at: ${outputPath}`);
}

const bruteDir = path.join(__dirname, '../src/data/bruta');
processProject(path.join(bruteDir, 'emision-electronica'), "Emisión Electrónica", "CARLOS LABAN", "EMISIÓN ELECTRÓNICA");
processProject(path.join(bruteDir, 'carga'), "Carga", "CARLOS LABAN", "CARGA");
processProject(path.join(bruteDir, 'transporte'), "Transporte", "JUAN CARLOS ROMANI", "TRANSPORTE");
processProject(path.join(bruteDir, 'Guia'), "Guia", "JUAN CARLOS ROMANI", "GRE");
processProject(path.join(bruteDir, 'app-movile'), "App Movile", "JUAN CARLOS ROMANI", "APP");
processProject(path.join(bruteDir, 'aduanas'), "Aduanas", "SISTEMA ADUANAS", "ADUANAS");
processProject(path.join(bruteDir, 'maestros-sync'), "Maestros Sync", "SISTEMA MAESTROS SYNC", "MAESTROS SYNC");
