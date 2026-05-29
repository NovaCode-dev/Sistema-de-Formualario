import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import XLSX from 'xlsx';
import { normalizePath } from './utils/pathNormalizer.js';

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

const systemsDb = {
  "Maestros": loadTsData(path.join(__dirname, '../src/data/maestros.ts')),
  "Control Cli": loadTsData(path.join(__dirname, '../src/data/controlCli.ts')),
  "Control Corp": loadTsData(path.join(__dirname, '../src/data/controlCorp.ts')),
  "MSync": loadTsData(path.join(__dirname, '../src/data/mSync.ts')),
  "Config": loadTsData(path.join(__dirname, '../src/data/config.ts')),
  "DMS": loadTsData(path.join(__dirname, '../src/data/dms.ts'))
};

const officialEndpoints = [];
for (const [systemName, modules] of Object.entries(systemsDb)) {
  for (const mod of modules) {
    if (!mod.controllers) continue;
    for (const ctrl of mod.controllers) {
      if (!ctrl.endpoints) continue;
      for (const ep of ctrl.endpoints) {
        const parts = ep.split(' ');
        const method = parts[0];
        const pathOnly = parts.slice(1).join(' ');
        officialEndpoints.push({
          system: systemName,
          controller: ctrl.name,
          endpoint: ep,
          normalizedMethod: method.toUpperCase(),
          normalizedPath: normalizePath(pathOnly)
        });
      }
    }
  }
}

const sheetToSystem = {
  'control clientes': 'Control Cli',
  'control clientes ': 'Control Cli',
  'control cliente': 'Control Cli',
  'control corporativo': 'Control Corp',
  'maestros': 'Maestros',
  'maestros sync': 'MSync',
  'config': 'Config',
  'dms': 'DMS'
};

const filesToProcess = [
  {
    inputPath: path.join(__dirname, '../src/data/bruta/bancos/PROXY-BANCOS.xlsx'),
    outputPath: path.join(__dirname, '../src/data/encuestados/encuesta_api_bancos.json'),
    devName: 'CARLOS UGAZ',
    devTeam: 'BANCOS'
  },
  {
    inputPath: path.join(__dirname, '../src/data/bruta/compras - gle/PROXY-COMPRAS-GLE.xlsx'),
    outputPath: path.join(__dirname, '../src/data/encuestados/encuesta_api_compras.json'),
    devName: 'SISTEMA COMPRAS',
    devTeam: 'COMPRAS'
  },
  {
    inputPath: path.join(__dirname, '../src/data/bruta/contabilidad/PROXY-CONTABLE.xlsx'),
    outputPath: path.join(__dirname, '../src/data/encuestados/encuesta_api_contabilidad.json'),
    devName: 'SISTEMA CONTABILIDAD',
    devTeam: 'CONTABILIDAD'
  }
];

for (const fileConfig of filesToProcess) {
  if (!fs.existsSync(fileConfig.inputPath)) {
    console.error(`File not found: ${fileConfig.inputPath}`);
    continue;
  }
  const workbook = XLSX.readFile(fileConfig.inputPath);
  const consolidated = {};
  const systemsConsumedSet = new Set();
  
  for (const sheetName of workbook.SheetNames) {
    const key = sheetName.toLowerCase().trim();
    const systemName = sheetToSystem[key];
    if (!systemName) continue;
    
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: '' });
    
    let headerRowIdx = -1;
    let colIndices = { modulo: -1, proyecto: -1, tabla: -1, metodo: -1, recurso: -1, endpoint: -1 };
    
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      if (!row || !Array.isArray(row)) continue;
      
      let hasMetodo = false;
      let hasRecurso = false;
      let hasEndpoint = false;
      
      row.forEach((cell) => {
        const val = String(cell).toLowerCase().trim();
        if (val.includes('metodo') || val.includes('método') || val.includes('http')) hasMetodo = true;
        if (val.includes('recurso')) hasRecurso = true;
        if (val.includes('endpoint')) hasEndpoint = true;
      });
      
      if (hasMetodo || (hasRecurso && hasEndpoint)) {
        headerRowIdx = i;
        row.forEach((cell, cellIdx) => {
          const val = String(cell).toLowerCase().trim();
          if (val === 'modulo' || val === 'módulo') colIndices.modulo = cellIdx;
          else if (val === 'proyecto' || val === 'proyectos') colIndices.proyecto = cellIdx;
          else if (val === 'tabla' || val === 'tabla ') colIndices.tabla = cellIdx;
          else if (val.includes('metodo') || val.includes('método') || val.includes('http')) colIndices.metodo = cellIdx;
          else if (val.includes('recurso')) colIndices.recurso = cellIdx;
          else if (val.includes('endpoint')) colIndices.endpoint = cellIdx;
        });
        break;
      }
    }
    
    if (headerRowIdx === -1) continue;
    
    let lastModulo = '';
    let lastTabla = '';
    
    for (let r = headerRowIdx + 1; r < rows.length; r++) {
      const row = rows[r];
      if (!row) continue;
      
      const rawModulo = colIndices.modulo === -1 ? '' : String(row[colIndices.modulo] || '').trim();
      const rawTabla = colIndices.tabla === -1 ? '' : String(row[colIndices.tabla] || '').trim();
      
      if (rawModulo) lastModulo = rawModulo;
      if (rawTabla) lastTabla = rawTabla;
      
      const rawMetodo = colIndices.metodo === -1 ? '' : String(row[colIndices.metodo] || '').trim();
      const rawRecurso = colIndices.recurso === -1 ? '' : String(row[colIndices.recurso] || '').trim();
      const rawEndpoint = colIndices.endpoint === -1 ? '' : String(row[colIndices.endpoint] || '').trim();
      
      if (!rawMetodo || rawMetodo === '-' || !rawRecurso || rawRecurso === '-' || !rawEndpoint || rawEndpoint === '-') {
        continue;
      }
      
      const method = rawMetodo.toUpperCase();
      if (!['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(method)) {
        continue;
      }
      
      let pathOnly = (rawRecurso + '/' + rawEndpoint).replace(/\/+/g, '/').trim();
      if (!pathOnly.startsWith('/')) {
        pathOnly = '/' + pathOnly;
      }
      if (pathOnly.endsWith('/')) {
        pathOnly = pathOnly.slice(0, -1);
      }
      
      let usage = 'FRONT';
      const moduloLower = lastModulo.toLowerCase();
      if (moduloLower.includes('back')) {
        usage = 'BACK';
      }
      
      const normPath = normalizePath(pathOnly);
      const match = officialEndpoints.find(oe => oe.system === systemName && oe.normalizedMethod === method && oe.normalizedPath === normPath);
      
      let finalEndpoint = '';
      let finalController = '';
      
      if (match) {
        finalEndpoint = match.endpoint;
        finalController = match.controller;
      } else {
        finalEndpoint = `${method} ${pathOnly}`;
        if (lastTabla && lastTabla !== '-') {
          finalController = lastTabla.toLowerCase().replaceAll('_', '-') + '-controller';
        } else {
          finalController = 'unknown-controller';
        }
      }
      
      systemsConsumedSet.add(systemName);
      const uniqueKey = `${systemName}::${finalController}::${finalEndpoint}`;
      
      if (consolidated[uniqueKey]) {
        if (consolidated[uniqueKey].usage !== usage) {
          consolidated[uniqueKey].usage = 'BOTH';
        }
      } else {
        consolidated[uniqueKey] = {
          system: systemName,
          controller: finalController,
          endpoint: finalEndpoint,
          usage: usage
        };
      }
    }
  }
  
  const mappingsArray = Object.values(consolidated);
  const surveyResult = {
    developer: {
      name: fileConfig.devName,
      team: fileConfig.devTeam,
      role: 'automated parser'
    },
    timestamp: new Date().toISOString(),
    systemsConsumed: Array.from(systemsConsumedSet),
    endpointMappings: mappingsArray
  };
  
  fs.writeFileSync(fileConfig.outputPath, JSON.stringify(surveyResult, null, 2), 'utf-8');
  console.log(`Generated survey JSON with ${mappingsArray.length} mappings at: ${fileConfig.outputPath}`);
}
