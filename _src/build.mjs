// Builds the Lock My Profile website, one version per language module in _src/lang.
// Run: node _src/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { pages } from './content.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Switch to true once lockmyprofile.com points at GitHub Pages (DNS set up at GoDaddy).
// Until then the site lives at estezc.github.io/lock-my-profile and must not claim the domain.
const DOMAIN_READY = true;
const SITE = DOMAIN_READY ? 'https://lockmyprofile.com' : 'https://estezc.github.io/lock-my-profile';
const PREFIX = DOMAIN_READY ? '' : '/lock-my-profile';
// Chrome Web Store listing. Empty until the extension is published: buttons then say "coming soon".
const STORE_URL = 'https://chromewebstore.google.com/detail/lock-my-profile-browser-l/nliopkacenmbbcjmjnmjfmiccojgbfof';
const UPDATED = '2026-11-10';
// Google Form that asks why someone uninstalled. Empty: the goodbye page only offers help.
const FEEDBACK_URL = '';
// Order of the language menu. English is the default (x-default) version.
const LANG_ORDER = ['en', 'es', 'fr', 'de', 'it', 'pt'];

const ICONS = {
  lock: '<rect x="5" y="11" width="14" height="10" rx="2.5"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  mask: '<path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6z"/><path d="M4 4l16 16"/>',
  list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
  shield: '<path d="M12 3l7 3v5c0 5-3 8-7 10-4-2-7-5-7-10V6z"/><path d="M9 12l2 2 4-4"/>',
  key: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3"/>',
  cloud: '<path d="M7 18h10a4 4 0 0 0 .5-8A6 6 0 0 0 6 9.5 4.3 4.3 0 0 0 7 18z"/><path d="M4 4l16 16"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  chrome: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 8.5h8.2M9 13.8 4.9 6.6M15 13.8l-4.1 7.1"/>',
  langs: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'
};
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const storeButton = (ui, campaign, cls = 'btn btn-primary') => STORE_URL
  ? `<a class="${cls}" href="${STORE_URL}?utm_source=website&amp;utm_medium=${campaign}">${icon('chrome')}${ui.add}</a>`
  : `<span class="${cls}" aria-disabled="true">${icon('chrome')}${ui.soon}</span>`;

const frame = (src, alt, w, h, dark, eager) => `<div class="frame${dark ? ' dark' : ''}"><div class="bar"><i></i><i></i><i></i><span></span></div><img src="${src}" alt="${esc(alt)}" width="${w}" height="${h}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"></div>`;

// Screenshots and social cards exist per language; English stands in until one is made.
const asset = (name, code, ext) => (fs.existsSync(path.join(ROOT, `assets/${name}-${code}.${ext}`)) ? `${name}-${code}.${ext}` : `${name}-en.${ext}`);
const img = (name, code) => `${PREFIX}/assets/img/${asset('img/' + name, code, 'webp').slice(4)}`;

// ── Load the languages ──
const LANGS = [];
for (const code of LANG_ORDER) {
  const file = path.join(ROOT, '_src/lang', code + '.mjs');
  if (!fs.existsSync(file)) continue;
  const mod = await import(pathToFileURL(file).href);
  const helpers = {
    k: (s) => s.split('+').map((x) => `<kbd>${x}</kbd>`).join('+'),
    fig: (name, alt, w, h, dark, caption) => `<figure>${frame(img(name, code), alt, w, h, dark)}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`,
    guide: (i) => `{{guide:${i}}}`
  };
  LANGS.push(mod.default(helpers));
}
const byCode = Object.fromEntries(LANGS.map((L) => [L.code, L]));
const guideUrl = (L, i) => `${L.paths.guides}${L.guides[i].slug}/`;

function layout(p, all) {
  const L = p.L, ui = L.ui;
  const url = SITE + p.path;
  const alts = all.filter((q) => q.key === p.key);
  const hreflang = alts.map((q) => `<link rel="alternate" hreflang="${q.L.code}" href="${SITE + q.path}">`).join('\n') +
    (alts.length > 1 ? `\n<link rel="alternate" hreflang="x-default" href="${SITE + alts.find((q) => q.L.code === 'en').path}">` : '');
  const ld = p.ld ? p.ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n') : '';
  const langMenu = alts.length > 1 ? `<details class="langmenu"><summary aria-label="${esc(ui.language)}">${icon('langs')}<span>${L.code.toUpperCase()}</span></summary><ul>${alts.map((q) => `<li><a href="${PREFIX}${q.path}" hreflang="${q.L.code}" lang="${q.L.code}"${q.L.code === L.code ? ' aria-current="true"' : ''}>${q.L.name}</a></li>`).join('')}</ul></details>` : '';
  const html = `<!doctype html>
<html lang="${L.code}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}">${p.noindex ? '<meta name="robots" content="noindex">' : ''}
<link rel="canonical" href="${url}">
${hreflang}
<meta property="og:type" content="${p.type || 'website'}">
<meta property="og:site_name" content="Lock My Profile">
<meta property="og:title" content="${esc(p.ogTitle || p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${SITE}/assets/${asset('og', L.code, 'png')}">
<meta property="og:locale" content="${L.locale}">
${alts.filter((q) => q.L.code !== L.code).map((q) => `<meta property="og:locale:alternate" content="${q.L.locale}">`).join('\n')}
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#6544f0">
<link rel="icon" href="${PREFIX}/assets/logo.svg" type="image/svg+xml">
<link rel="icon" href="${PREFIX}/assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="${PREFIX}/assets/apple-touch-icon.png">
<link rel="stylesheet" href="${PREFIX}/assets/site.css">
${ld}
</head>
<body>
<a class="skip" href="#main">${ui.skip}</a>
<header class="top"><div class="wrap">
  <a class="brand" href="${PREFIX}${L.paths.home}"><img src="${PREFIX}/assets/logo.svg" alt="" width="32" height="32">Lock My Profile</a>
  <nav aria-label="${esc(ui.nav)}">
    <a class="hide-sm" href="${PREFIX}${L.paths.home}#${L.ids.features}">${ui.features}</a>
    <a class="hide-sm" href="${PREFIX}${L.paths.home}#${L.ids.guides}">${ui.guides}</a>
    <a class="hide-sm" href="${PREFIX}${L.paths.home}#${L.ids.privacy}">${ui.privacy}</a>
    ${langMenu}
  </nav>
</div></header>
<main id="main">
${p.body(ui)}
</main>
<footer><div class="wrap">
  <nav aria-label="Footer">
    <a href="${PREFIX}${L.paths.home}">Lock My Profile</a>
    <a href="${PREFIX}${L.paths.home}#${L.ids.guides}">${ui.guides}</a>
    <a href="${PREFIX}/privacy/${L.code === 'es' ? '#es' : ''}">${ui.policy}</a>
  </nav>
  <nav class="langs" aria-label="${esc(ui.language)}">${LANGS.map((M) => `<a href="${PREFIX}${M.paths.home}" hreflang="${M.code}" lang="${M.code}">${M.name}</a>`).join('')}</nav>
  <span>© 2026 Lock My Profile</span>
  <span class="tm">${ui.tm}</span>
</div></footer>
</body>
</html>
`;
  return html.replace(/\{\{guide:(\d+)\}\}/g, (_, i) => PREFIX + guideUrl(L, +i));
}

const ctx = { icon, frame, img, storeButton, esc, SITE, PREFIX, UPDATED, STORE_URL, FEEDBACK_URL, guideUrl };
const all = LANGS.flatMap((L) => pages(ctx, L, byCode));
for (const p of all) {
  const file = p.path.endsWith('/') ? path.join(ROOT, p.path, 'index.html') : path.join(ROOT, p.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, layout(p, all));
}
console.log(`wrote ${all.length} pages in ${LANGS.map((L) => L.code).join(', ')}`);

const listed = all.filter((p) => !p.noindex);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${listed.map((p) => {
  const alts = listed.filter((q) => q.key === p.key);
  return `  <url>
    <loc>${SITE + p.path}</loc>
    <lastmod>${UPDATED}</lastmod>
${alts.length > 1 ? alts.map((q) => `    <xhtml:link rel="alternate" hreflang="${q.L.code}" href="${SITE + q.path}"/>\n`).join('') : ''}  </url>`;
}).join('\n')}
  <url>
    <loc>${SITE}/privacy/</loc>
    <lastmod>${UPDATED}</lastmod>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
if (DOMAIN_READY) fs.writeFileSync(path.join(ROOT, 'CNAME'), 'lockmyprofile.com' + String.fromCharCode(10));
else fs.rmSync(path.join(ROOT, 'CNAME'), { force: true });
console.log('wrote sitemap.xml, robots.txt' + (DOMAIN_READY ? ', CNAME' : ''));
