const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const inputFileName = args[0] || 'mSync.json';
const outputFileName = args[1] || 'mSync.ts';
const moduleName = args[2] || 'Maestros Sincronizados';
const varName = args[3] || 'MSYNC_DATA';

const jsonPath = path.isAbsolute(inputFileName) ? inputFileName : path.join(__dirname, 'src', 'data', inputFileName);
const outputPath = path.isAbsolute(outputFileName) ? outputFileName : path.join(__dirname, 'src', 'data', outputFileName);

if (!fs.existsSync(jsonPath)) {
  console.error(`Error: File ${jsonPath} does not exist.`);
  process.exit(1);
}

const swagger = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));
const paths = swagger.paths || {};

const controllerMap = new Map();

for (const [route, methods] of Object.entries(paths)) {
  for (const [method, detail] of Object.entries(methods)) {
    const rawMethod = method.toUpperCase();
    if (['GET', 'POST', 'PUT', 'DELETE', 'PATCH'].includes(rawMethod)) {
      const tags = detail.tags || [];
      const controllerName = tags[0] || 'generic-controller';
      
      if (!controllerMap.has(controllerName)) {
        controllerMap.set(controllerName, new Set());
      }
      
      controllerMap.get(controllerName).add(`${rawMethod} ${route}`);
    }
  }
}

const controllers = [];
for (const [name, endpointsSet] of controllerMap.entries()) {
  controllers.push({
    name: name,
    endpoints: Array.from(endpointsSet).sort()
  });
}

controllers.sort((a, b) => a.name.localeCompare(b.name));

const systemModule = {
  module: moduleName,
  controllers: controllers
};

const outputCode = `import { SystemModule } from './types';

export const ${varName}: SystemModule[] = ${JSON.stringify([systemModule], null, 2)};
`;

fs.writeFileSync(outputPath, outputCode, 'utf-8');
console.log(`Successfully generated ${path.basename(outputPath)} from ${path.basename(jsonPath)}!`);
