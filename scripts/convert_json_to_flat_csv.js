import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta donde se colocarán los archivos JSON a migrar (puede ser creada en el workspace)
const sourceDir = path.join(__dirname, '../encuestas_json');
const outputPath = path.join(__dirname, '../encuestas_planas_migracion.csv');

if (!fs.existsSync(sourceDir)) {
  fs.mkdirSync(sourceDir, { recursive: true });
  console.log(`⚠️ Se creó la carpeta: ${sourceDir}`);
  console.log(`Por favor, copia allí todos tus archivos JSON de encuestas antiguas (como encuesta_api_anthony_plataforma_maestros.json) y vuelve a ejecutar este script.`);
  process.exit(0);
}

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.json'));

if (files.length === 0) {
  console.log(`No se encontraron archivos JSON en la carpeta: ${sourceDir}`);
  console.log('Por favor, coloca tus archivos JSON allí e intenta nuevamente.');
  process.exit(0);
}

// Conjunto para garantizar la unicidad de los IDs de tarea de ClickUp generados
const usedTaskIds = new Set();

/**
 * Genera un ID de tarea ClickUp único de 10 caracteres alfanuméricos.
 */
function generateUniqueTaskId() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let id;
  do {
    id = '';
    for (let i = 0; i < 10; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  } while (usedTaskIds.has(id));
  usedTaskIds.add(id);
  return id;
}

const csvRows = [];
// Cabecera exacta que coincide con tu tabla de Supabase (tasks)
csvRows.push('system,controller,endpoint,usage,clickup_task_id,developer');

let totalRecords = 0;

for (const file of files) {
  const filePath = path.join(sourceDir, file);
  try {
    const rawContent = fs.readFileSync(filePath, 'utf-8');
    const survey = JSON.parse(rawContent);
    
    // Validar estructura básica
    const developerObj = survey.developer || {};
    const developerName = developerObj.name || 'Desarrollador Desconocido';
    const developerTeam = developerObj.team || 'Sin Equipo';
    const developerRole = developerObj.role || 'automated parser';
    
    // Crear el objeto de developer para la columna jsonb de Supabase
    const developerJsonStr = JSON.stringify({
      name: developerName,
      team: developerTeam,
      role: developerRole
    });

    const mappings = survey.endpointMappings || [];
    
    for (const mapping of mappings) {
      const system = mapping.system || '';
      const controller = mapping.controller || '';
      const endpoint = mapping.endpoint || '';
      const usage = mapping.usage || 'NONE';
      
      // Obtener o generar un clickup_task_id de 10 caracteres alfanuméricos único
      let clickupTaskId = mapping.clickup_task_id || '';
      if (typeof clickupTaskId !== 'string' || clickupTaskId.length !== 10 || usedTaskIds.has(clickupTaskId)) {
        clickupTaskId = generateUniqueTaskId();
      } else {
        usedTaskIds.add(clickupTaskId);
      }
      
      // Escapar caracteres para formato CSV estándar
      const cleanSystem = system.replace(/"/g, '""');
      const cleanController = controller.replace(/"/g, '""');
      const cleanEndpoint = endpoint.replace(/"/g, '""');
      const cleanUsage = usage.replace(/"/g, '""');
      const cleanClickupTaskId = clickupTaskId.replace(/"/g, '""');
      const cleanDeveloper = developerJsonStr.replace(/"/g, '""');
      
      csvRows.push(`"${cleanSystem}","${cleanController}","${cleanEndpoint}","${cleanUsage}","${cleanClickupTaskId}","${cleanDeveloper}"`);
      totalRecords++;
    }
  } catch (err) {
    console.error(`Error al procesar el archivo ${file}:`, err.message);
  }
}

fs.writeFileSync(outputPath, '\uFEFF' + csvRows.join('\n'), 'utf-8');
console.log(`\n🎉 ¡Migración completada con éxito!`);
console.log(`Se procesaron ${files.length} archivos JSON.`);
console.log(`Se generaron ${totalRecords} filas de endpoints planos.`);
console.log(`Archivo CSV de migración guardado en: ${outputPath}`);
