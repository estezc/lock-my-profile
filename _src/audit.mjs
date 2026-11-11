// SEO check of the built pages: title and description lengths, one h1, alt texts.
// Run: node _src/audit.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
  if (e.name.startsWith('.') || e.name === '_src' || e.name === 'assets') return [];
  const p = path.join(d, e.name);
  return e.isDirectory() ? walk(p) : e.name === 'index.html' ? [p] : [];
});
const text = (s) => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"');
let problems = 0;
for (const f of walk(ROOT)) {
  const h = fs.readFileSync(f, 'utf8');
  if (h.includes('name="robots" content="noindex"')) continue;
  const title = text((h.match(/<title>([^<]*)/) || [])[1] || '');
  const desc = text((h.match(/name="description" content="([^"]*)/) || [])[1] || '');
  const h1s = (h.match(/<h1[\s>]/g) || []).length;
  const noAlt = (h.match(/<img(?![^>]*\balt=)[^>]*>/g) || []).length;
  const flags = [];
  if ([...title].length > 65) flags.push('title > 65');
  if ([...desc].length > 160) flags.push('description > 160');
  if ([...desc].length < 110) flags.push('description < 110');
  if (h1s !== 1) flags.push(`${h1s} h1`);
  if (noAlt) flags.push(`${noAlt} img without alt`);
  problems += flags.length;
  const rel = '/' + path.relative(ROOT, path.dirname(f)).split(path.sep).join('/');
  console.log(String([...title].length).padStart(3), String([...desc].length).padStart(4), rel.replace(/\/$/, '') + '/', flags.join(', '));
}
console.log(problems ? `${problems} problems` : 'no problems');
