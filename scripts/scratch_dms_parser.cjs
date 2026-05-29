const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const inputFileName = args[0] || 'dms.json';
const outputFileName = args[1] || 'dms.ts';
const moduleName = args[2] || 'DMS';
const varName = args[3] || 'DMS_DATA';

const jsonPath = path.isAbsolute(inputFileName) ? inputFileName : path.join(__dirname, 'src', 'data', inputFileName);
const outputPath = path.isAbsolute(outputFileName) ? outputFileName : path.join(__dirname, 'src', 'data', outputFileName);

if (!fs.existsSync(jsonPath)) {
  console.error(`Error: File ${jsonPath} does not exist.`);
  process.exit(1);
}

const rawData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

const controllerMap = new Map();

for (const controller of rawData) {
  const name = controller.controller_class || 'generic-controller';
  const endpoints = controller.endpoints || [];
  
  if (!controllerMap.has(name)) {
    controllerMap.set(name, new Set());
  }
  
  const set = controllerMap.get(name);
  for (const ep of endpoints) {
    if (ep.http_method && ep.full_path) {
      set.add(`${ep.http_method.toUpperCase()} ${ep.full_path}`);
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
