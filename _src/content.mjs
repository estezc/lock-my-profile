// Page templates for the Lock My Profile website. The texts live in _src/lang/<code>.mjs;
// each page has a key so the same page in other languages can be linked (hreflang).

export function pages({ icon, frame, img, storeButton, esc, PREFIX, SITE, UPDATED, STORE_URL, FEEDBACK_URL, guideUrl }, L) {
  const code = L.code;
  const app = (description) => ({
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Lock My Profile',
    applicationCategory: 'SecurityApplication', operatingSystem: 'Google Chrome (Windows, macOS, Linux, ChromeOS)',
    inLanguage: ['en', 'es', 'fr', 'de', 'it', 'pt'], description, url: SITE + L.paths.home,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    image: `${SITE}/assets/icon-512.png`,
    screenshot: [`${SITE}${img('lock', code)}`, `${SITE}${img('decoy', code)}`, `${SITE}${img('opt-log', code)}`],
    publisher: { '@id': `${SITE}/#org` },
    ...(STORE_URL ? { installUrl: STORE_URL, downloadUrl: STORE_URL } : {})
  });
  const org = { '@context': 'https://schema.org', '@type': 'Organization', '@id': `${SITE}/#org`, name: 'Lock My Profile', url: SITE + '/',
    logo: `${SITE}/assets/icon-512.png`, ...(STORE_URL ? { sameAs: [STORE_URL] } : {}) };
  const site = { '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE}/#site`, name: 'Lock My Profile', url: SITE + L.paths.home,
    inLanguage: code, publisher: { '@id': `${SITE}/#org` } };
  const crumbsLd = (path, title) => ({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
    { '@type': 'ListItem', position: 1, name: L.ui.crumbsHome, item: SITE + L.paths.home },
    { '@type': 'ListItem', position: 2, name: L.ui.guides, item: `${SITE}${L.paths.home}#${L.ids.guides}` },
    { '@type': 'ListItem', position: 3, name: title, item: SITE + path }] });
  // Animated demo of the camouflage; people who prefer less motion get a still frame
  const demo = (alt) => `<picture class="demo"><source media="(prefers-reduced-motion: reduce)" srcset="${img('demo-still', code)}"><img src="${img('demo', code)}" alt="${esc(alt)}" width="960" height="600" loading="lazy" decoding="async"></picture>`;
  const faqLd = (items) => ({ '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) });
  const articleLd = (path, title, description) => ({ '@context': 'https://schema.org', '@type': 'Article', headline: title, description,
    inLanguage: code, datePublished: UPDATED, dateModified: UPDATED, mainEntityOfPage: SITE + path,
    author: { '@type': 'Organization', name: 'Lock My Profile' }, publisher: { '@type': 'Organization', name: 'Lock My Profile' } });
  const checks = (items) => `<ul class="checks">${items.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul>`;
  const faq = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
  const ctaBox = (ui, title) => `<div class="cta-box"><img src="${PREFIX}/assets/logo.svg" alt="" width="56" height="56"><div><b>${title || 'Lock My Profile'}</b><span>${ui.ctaText}</span></div>${storeButton(ui, 'guide')}</div>`;
  const guideCards = () => `<div class="guides">${L.guides.map((g, i) => `<a class="guide" href="${PREFIX}${guideUrl(L, i)}"><small>${g.tag}</small><b>${g.title}</b><span>${g.blurb}</span></a>`).join('')}</div>`;
  const privacyHref = `${PREFIX}/privacy/${code === 'es' ? '#es' : ''}`;
  const c = L.home, ids = L.ids;

  const home = {
    key: 'home', L, path: L.paths.home, title: c.title, description: c.description, preload: img('lock', code),
    ld: [org, site, app(c.description), faqLd(c.faq)],
    body: (ui) => `
<section class="hero"><div class="wrap">
  <div>
    <span class="eyebrow">${c.eyebrow}</span>
    <h1>${c.h1}</h1>
    <p class="lead">${c.lead}</p>
    <div class="cta">${storeButton(ui, 'hero')}<a class="btn btn-ghost" href="#${ids.how}">${ui.how}</a></div>
    <ul class="trust">${c.trust.map((t) => `<li>${icon('check')}${t}</li>`).join('')}</ul>
  </div>
  ${frame(img('lock', code), c.heroAlt, 1280, 800, true, true)}
</div></section>

<section class="block alt" id="${ids.features}"><div class="wrap">
  <div class="head"><h2>${c.featuresTitle}</h2><p>${c.featuresText}</p></div>
  <div class="grid">${c.features.map(([i, t, d]) => `<div class="card"><span class="ico">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section class="block"><div class="wrap split">
  <div><span class="eyebrow">${c.camoTag}</span><h2>${c.camoTitle}</h2><p>${c.camoText}</p>${checks(c.camoChecks)}</div>
  ${demo(c.camoAlt)}
</div></section>

<section class="block"><div class="wrap split rev">
  <div><span class="eyebrow">${c.sitesTag}</span><h2>${c.sitesTitle}</h2><p>${c.sitesText}</p>${checks(c.sitesChecks)}</div>
  <div class="duo">${frame(img('site-locked', code), c.sitesAlt, 1200, 760, true)}<div class="popup"><img src="${img('popup', code)}" alt="${esc(c.popupAlt)}" width="720" height="1180" loading="lazy" decoding="async"></div></div>
</div></section>

<section class="block"><div class="wrap split">
  <div><span class="eyebrow">${c.logTag}</span><h2>${c.logTitle}</h2><p>${c.logText}</p>${checks(c.logChecks)}</div>
  ${frame(img('opt-log', code), c.logAlt, 1200, 780)}
</div></section>

<section class="block alt" id="${ids.privacy}"><div class="wrap">
  <div class="head"><h2>${c.privacyTitle}</h2><p>${c.privacyText}</p></div>
  <div class="grid">${c.privacy.map(([i, t, d]) => `<div class="card"><span class="ico">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
  <p style="text-align:center;margin:28px 0 0"><a href="${privacyHref}">${c.privacyLink}</a></p>
</div></section>

<section class="block" id="${ids.how}"><div class="wrap">
  <div class="head"><h2>${c.howTitle}</h2></div>
  <div class="steps">${c.steps.map(([t, d]) => `<div class="card"><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section class="block alt"><div class="wrap">
  <div class="head"><h2>${c.faqTitle}</h2></div>
  ${faq(c.faq)}
</div></section>

<section class="block" id="${ids.guides}"><div class="wrap">
  <div class="head"><h2>${c.guidesTitle}</h2><p>${c.guidesText}</p></div>
  ${guideCards()}
</div></section>

<section class="final"><div class="wrap"><div class="box">
  <h2>${c.finalTitle}</h2><p>${c.finalText}</p>${storeButton(ui, 'footer')}
</div></div></section>`
  };

  const guides = L.guides.map((g, i) => {
    const path = guideUrl(L, i);
    return {
      key: 'guide' + i, L, path, type: 'article', title: g.seoTitle, ogTitle: g.title, description: g.description,
      ld: [articleLd(path, g.title, g.description), crumbsLd(path, g.title)],
      body: (ui) => `
<article class="article"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="${PREFIX}${L.paths.home}">${ui.crumbsHome}</a> › <a href="${PREFIX}${L.paths.home}#${ids.guides}">${ui.guides}</a> › ${esc(g.title)}</nav>
  <h1>${g.title}</h1>
  <p class="meta">${ui.updated}: ${L.date}</p>
  <div class="tldr"><p>${g.tldr}</p></div>
  ${g.body}
  ${ctaBox(ui)}
  <h2>${ui.moreGuides}</h2>
  ${guideCards()}
</div></article>`
    };
  });

  const b = L.bye;
  const bye = {
    key: 'bye', L, path: L.paths.bye, noindex: true, title: b.title + ' — Lock My Profile', description: b.lead,
    body: (ui) => `
<section class="block"><div class="wrap" style="max-width:760px">
  <div style="text-align:center">
    <img src="${PREFIX}/assets/logo.svg" alt="" width="64" height="64" style="margin:0 auto 18px">
    <h1 style="font-size:clamp(30px,4vw,42px);margin-bottom:12px">${b.h1}</h1>
    <p class="lead" style="margin-inline:auto">${b.lead}</p>
    ${FEEDBACK_URL ? `<p style="color:var(--text);font-weight:600;margin:0 0 16px">${b.ask}</p><div class="cta" style="justify-content:center"><a class="btn btn-primary" href="${FEEDBACK_URL}" target="_blank" rel="noopener">${b.askBtn}</a></div>` : ''}
  </div>
  <h2 style="font-size:24px;margin:48px 0 16px">${b.helpTitle}</h2>
  <div class="faq">${b.help.map(([q, a]) => `<details open><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>
  ${ctaBox(ui, b.again)}
</div></section>`
  };

  const out = [home, ...guides, bye];
  if (code === 'en') {
    out.push({
      key: '404', L, path: '/404.html', noindex: true, title: L.ui.notFound + ' — Lock My Profile', description: L.ui.notFoundText,
      body: (ui) => `<section class="block"><div class="wrap" style="text-align:center;max-width:620px">
  <h1 style="font-size:40px;margin-bottom:12px">${ui.notFound}</h1><p class="lead" style="margin-inline:auto">${ui.notFoundText}</p>
  <div class="cta" style="justify-content:center"><a class="btn btn-primary" href="${PREFIX}/">Lock My Profile</a></div>
</div></section>`
    });
  }
  return out;
}
