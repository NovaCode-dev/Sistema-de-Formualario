import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const systemsFiles = [
  { name: 'Maestros', file: 'maestros.ts' },
  { name: 'Control Cli', file: 'controlCli.ts' },
  { name: 'Control Corp', file: 'controlCorp.ts' },
  { name: 'MSync', file: 'mSync.ts' },
  { name: 'Config', file: 'config.ts' },
  { name: 'DMS', file: 'dms.ts' }
];

const csvRows = [];
// Cabecera del CSV adaptada a tu tabla de Supabase
csvRows.push('system_name,team_name,controllers');

for (const sys of systemsFiles) {
  const filePath = path.join(__dirname, '../src/data', sys.file);
  if (!fs.existsSync(filePath)) {
    console.warn(`Archivo no encontrado: ${filePath}`);
    continue;
  }
  
  const modules = loadTsData(filePath);
  
  for (const mod of modules) {
    const systemName = sys.name;
    const teamName = mod.module || '';
    const controllersArray = mod.controllers || [];
    
    // Convertimos a JSON string el array de controladores
    const controllersJsonStr = JSON.stringify(controllersArray);
    
    // Escapar comillas dobles para el CSV (se reemplaza " por "")
    const cleanSystemName = systemName.replace(/"/g, '""');
    const cleanTeamName = teamName.replace(/"/g, '""');
    const cleanControllers = controllersJsonStr.replace(/"/g, '""');
    
    csvRows.push(`"${cleanSystemName}","${cleanTeamName}","${cleanControllers}"`);
  }
}

const outputPath = path.join(__dirname, '../catalogo_endpoints_maestro.csv');
fs.writeFileSync(outputPath, '\uFEFF' + csvRows.join('\n'), 'utf-8');
console.log(`¡Éxito! Catálogo unificado generado para Supabase en: ${outputPath}`);

