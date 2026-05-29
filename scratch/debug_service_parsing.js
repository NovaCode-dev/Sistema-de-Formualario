import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const hostToSystem = {
  "HOST_MAESTROS_SYNC": "MSync"
};

function parseServiceFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const classNameMatch = content.match(/export\s+class\s+([a-zA-Z0-9_]+)/);
  const className = classNameMatch ? classNameMatch[1] : '';
  
  const urlRegex = /(?:const|let|var|readonly)?\s*([a-zA-Z0-9_]*url[a-zA-Z0-9_]*)\s*=\s*(?:`\s*\${environment\.([A-Z0-9_]+)}([^\`]*)`|['"]\s*environment\.([A-Z0-9_]+)\s*\+\s*['"]([^'"]*)['"])/i;
  const urlMatch = content.match(urlRegex);
  console.log("urlMatch:", urlMatch);
  if (!urlMatch) {
    console.log("No urlMatch!");
    return [];
  }
  
  const urlVar = urlMatch[1];
  const hostVar = urlMatch[2] || urlMatch[4];
  const basePath = urlMatch[3] || urlMatch[5] || '';
  const system = hostToSystem[hostVar];
  console.log("system:", system, "hostVar:", hostVar);
  if (!system) {
    console.log("No system for hostVar:", hostVar);
    return [];
  }
  
  const endpoints = [];
  const httpRegex = /this\.(?:_)?http\s*\.\s*(get|post|put|delete|patch)\b/g;
  let match;
  while ((match = httpRegex.exec(content)) !== null) {
    console.log("Found HTTP call:", match[0]);
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
    console.log("argsContent:", argsContent);
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
    console.log("urlArg:", urlArg);
    
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
    normalized = normalized.replace(/\$\{\s*(?:String\()?([a-zA-Z0-9_]+)\)?\s*\}/g, '{$1}');
    normalized = normalized.replace(/\s*\+\s*(?:String\()?([a-zA-Z0-9_]+)\)?/g, '/{$1}');
    normalized = normalized.replace(/\/+/g, '/');
    console.log("normalized:", normalized);
    
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

const targetFile = path.join(__dirname, '../src/data/bruta/aduanas/maestros_sync/sadCargaEmbarqueIndicador.service.ts');
console.log("Parsed endpoints:", parseServiceFile(targetFile));
