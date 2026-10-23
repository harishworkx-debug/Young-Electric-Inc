import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        results = results.concat(walk(full));
      }
    } else {
      if (/\.(ts|tsx|js|mjs|html|json|md)$/.test(file)) {
        results.push(full);
      }
    }
  });
  return results;
}

const files = walk('.');
const phoneRegex = /(?:\+?1[-.\s]?)?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}/g;
const telRegex = /tel:[^"'\s<>]+/g;

console.log(`Scanning for phone numbers across ${files.length} files...`);

const foundNumbers = new Map();

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  let match;
  while ((match = phoneRegex.exec(content)) !== null) {
    const num = match[0].trim();
    if (/^\d{3}[-.\s]?\d{3}[-.\s]?\d{4}$/.test(num) || /^\(\d{3}\)\s?\d{3}[-.\s]?\d{4}$/.test(num)) {
      if (!foundNumbers.has(num)) foundNumbers.set(num, []);
      foundNumbers.get(num).push(file);
    }
  }
  while ((match = telRegex.exec(content)) !== null) {
    const tel = match[0].trim();
    if (!foundNumbers.has(tel)) foundNumbers.set(tel, []);
    foundNumbers.get(tel).push(file);
  }
});

for (const [num, fList] of foundNumbers.entries()) {
  console.log(`\nPhone/Tel: "${num}" found in ${fList.length} files:`);
  fList.slice(0, 5).forEach(f => console.log('  -', f));
  if (fList.length > 5) console.log(`  ...and ${fList.length - 5} more`);
}
