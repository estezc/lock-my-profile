// Builds the Lock My Profile website (English + Spanish) into the repo root.
// Run: node _src/build.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { pages } from './content.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
// Switch to true once lockmyprofile.com points at GitHub Pages (DNS set up at GoDaddy).
// Until then the site lives at estezc.github.io/lock-my-profile and must not claim the domain.
const DOMAIN_READY = true;
const SITE = DOMAIN_READY ? 'https://lockmyprofile.com' : 'https://estezc.github.io/lock-my-profile';
const PREFIX = DOMAIN_READY ? '' : '/lock-my-profile';
// Chrome Web Store listing. Empty until the extension is published: buttons then say "coming soon".
const STORE_URL = '';
const UPDATED = '2026-11-10';

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
  chrome: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M12 8.5h8.2M9 13.8 4.9 6.6M15 13.8l-4.1 7.1"/>'
};
const icon = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const UI = {
  en: { lang: 'en', locale: 'en_US', home: '/', other: 'Español', features: 'Features', privacy: 'Privacy', guides: 'Guides', guidesHome: '/#guides',
    add: 'Add to Chrome — it’s free', soon: 'Coming soon to the Chrome Web Store', how: 'See how it works',
    policy: 'Privacy policy', tm: 'Google Chrome is a trademark of Google LLC. Lock My Profile is not affiliated with Google.',
    updated: 'Updated', crumbsHome: 'Home', ctaTitle: 'Lock My Profile', ctaText: 'Free browser extension: lock your profile and the sites you choose with one password.',
    notFound: 'Page not found', notFoundText: 'This page doesn’t exist. Try the home page or one of our guides.' },
  es: { lang: 'es', locale: 'es_ES', home: '/es/', other: 'English', features: 'Funciones', privacy: 'Privacidad', guides: 'Guías', guidesHome: '/es/#guias',
    add: 'Añadir a Chrome — es gratis', soon: 'Muy pronto en Chrome Web Store', how: 'Ver cómo funciona',
    policy: 'Política de privacidad', tm: 'Google Chrome es una marca de Google LLC. Lock My Profile no está afiliado a Google.',
    updated: 'Actualizado', crumbsHome: 'Inicio', ctaTitle: 'Lock My Profile', ctaText: 'Extensión gratuita: bloquea tu perfil y las webs que elijas con una sola contraseña.',
    notFound: 'Página no encontrada', notFoundText: 'Esta página no existe. Prueba con la página de inicio o con una de nuestras guías.' }
};

const storeButton = (ui, campaign, cls = 'btn btn-primary') => STORE_URL
  ? `<a class="${cls}" href="${STORE_URL}?utm_source=website&amp;utm_medium=${campaign}">${icon('chrome')}${ui.add}</a>`
  : `<span class="${cls}" aria-disabled="true">${icon('chrome')}${ui.soon}</span>`;

const frame = (src, alt, w, h, dark, eager) => `<div class="frame${dark ? ' dark' : ''}"><div class="bar"><i></i><i></i><i></i><span></span></div><img src="${src}" alt="${esc(alt)}" width="${w}" height="${h}"${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async"></div>`;

function layout(p) {
  const ui = UI[p.lang];
  const url = SITE + p.path;
  const alts = p.alt ? [[p.lang, p.path], [p.lang === 'en' ? 'es' : 'en', p.alt]] : [[p.lang, p.path]];
  const hreflang = alts.map(([l, h]) => `<link rel="alternate" hreflang="${l}" href="${SITE + h}">`).join('\n') +
    (p.alt ? `\n<link rel="alternate" hreflang="x-default" href="${SITE + (p.lang === 'en' ? p.path : p.alt)}">` : '');
  const ld = p.ld ? p.ld.map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join('\n') : '';
  return `<!doctype html>
<html lang="${ui.lang}">
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
<meta property="og:image" content="${SITE}/assets/og-${p.lang}.png">
<meta property="og:locale" content="${ui.locale}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#6544f0">
<link rel="icon" href="${PREFIX}/assets/logo.svg" type="image/svg+xml">
<link rel="icon" href="${PREFIX}/assets/favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="${PREFIX}/assets/apple-touch-icon.png">
<link rel="stylesheet" href="${PREFIX}/assets/site.css">
${ld}
</head>
<body>
<a class="skip" href="#main">${p.lang === 'en' ? 'Skip to content' : 'Saltar al contenido'}</a>
<header class="top"><div class="wrap">
  <a class="brand" href="${PREFIX}${ui.home}"><img src="${PREFIX}/assets/logo.svg" alt="" width="32" height="32">Lock My Profile</a>
  <nav aria-label="${p.lang === 'en' ? 'Main' : 'Principal'}">
    <a class="hide-sm" href="${PREFIX}${ui.home}#${p.lang === 'en' ? 'features' : 'funciones'}">${ui.features}</a>
    <a class="hide-sm" href="${PREFIX}${ui.guidesHome}">${ui.guides}</a>
    <a class="hide-sm" href="${PREFIX}${ui.home}#${p.lang === 'en' ? 'privacy' : 'privacidad'}">${ui.privacy}</a>
    ${p.alt ? `<a class="lang" href="${PREFIX}${p.alt}" hreflang="${p.lang === 'en' ? 'es' : 'en'}" lang="${p.lang === 'en' ? 'es' : 'en'}">${ui.other}</a>` : ''}
  </nav>
</div></header>
<main id="main">
${p.body(ui)}
</main>
<footer><div class="wrap">
  <nav aria-label="Footer">
    <a href="${PREFIX}${ui.home}">Lock My Profile</a>
    <a href="${PREFIX}${ui.guidesHome}">${ui.guides}</a>
    <a href="${PREFIX}/privacy/${p.lang === 'es' ? '#es' : ''}">${ui.policy}</a>
    ${p.alt ? `<a href="${PREFIX}${p.alt}" hreflang="${p.lang === 'en' ? 'es' : 'en'}">${ui.other}</a>` : ''}
  </nav>
  <span>© 2026 Lock My Profile</span>
  <span class="tm">${ui.tm}</span>
</div></footer>
</body>
</html>
`;
}

const ctx = { icon, frame, storeButton, esc, UI, SITE, PREFIX, UPDATED };
const built = [];
for (const p of pages(ctx)) {
  const file = p.path.endsWith('/') ? path.join(ROOT, p.path, 'index.html') : path.join(ROOT, p.path);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, layout(p));
  if (!p.noindex) built.push(p);
  console.log('wrote', p.path);
}
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${built.map((p) => `  <url>
    <loc>${SITE + p.path}</loc>
    <lastmod>${UPDATED}</lastmod>
${p.alt ? `    <xhtml:link rel="alternate" hreflang="${p.lang}" href="${SITE + p.path}"/>
    <xhtml:link rel="alternate" hreflang="${p.lang === 'en' ? 'es' : 'en'}" href="${SITE + p.alt}"/>
` : ''}  </url>`).join('\n')}
  <url>
    <loc>${SITE}/privacy/</loc>
    <lastmod>2026-11-04</lastmod>
  </url>
</urlset>
`;
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
if (DOMAIN_READY) fs.writeFileSync(path.join(ROOT, 'CNAME'), 'lockmyprofile.com' + String.fromCharCode(10));
else fs.rmSync(path.join(ROOT, 'CNAME'), { force: true });
console.log('wrote sitemap.xml, robots.txt' + (DOMAIN_READY ? ', CNAME' : ''));
