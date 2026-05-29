import XLSX from 'xlsx';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const files = [
  { name: 'PROXY-BANCOS.xlsx', path: path.join(__dirname, '../src/data/bruta/bancos/PROXY-BANCOS.xlsx') },
  { name: 'PROXY-COMPRAS-GLE.xlsx', path: path.join(__dirname, '../src/data/bruta/compras - gle/PROXY-COMPRAS-GLE.xlsx') },
  { name: 'PROXY-CONTABLE.xlsx', path: path.join(__dirname, '../src/data/bruta/contabilidad/PROXY-CONTABLE.xlsx') }
];

for (const { name, path: filePath } of files) {
  console.log(`\n=================== FILE: ${name} ===================`);
  const workbook = XLSX.readFile(filePath);
  for (const sheetName of workbook.SheetNames) {
    const sheet = workbook.Sheets[sheetName];
    const rawRows = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    console.log(`Sheet [${sheetName}]: Total Rows: ${rawRows.length}`);
    
    // Find headers and list non-empty lines
    console.log("Headers (first non-empty row):", rawRows[0]);
    // Print first 3 rows of actual content
    let printed = 0;
    for (let i = 1; i < rawRows.length && printed < 3; i++) {
      if (rawRows[i] && rawRows[i].some(cell => cell !== null && cell !== '')) {
        console.log(`Row ${i}:`, rawRows[i]);
        printed++;
      }
    }
  }
}
