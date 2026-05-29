import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const file1 = path.join(__dirname, '../src/data/bruta/app-movile/control_cliente/ControlClienteApiClient.kt');
const file2 = path.join(__dirname, '../src/data/bruta/app-movile/maestros/TbEntidadLocalApiClient.kt');

console.log("File 1 parsed:", parseKotlinFile(file1));
console.log("File 2 parsed:", parseKotlinFile(file2));
