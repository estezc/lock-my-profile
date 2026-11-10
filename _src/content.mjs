// Page content for the Lock My Profile website. Each page has an English and a Spanish version.

export function pages({ icon, frame, storeButton, esc, PREFIX, SITE, UPDATED, STORE_URL }) {
  const img = (name) => `${PREFIX}/assets/img/${name}.webp`;
  const app = (lang, description) => ({
    '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: 'Lock My Profile',
    applicationCategory: 'SecurityApplication', operatingSystem: 'Google Chrome (Windows, macOS, Linux, ChromeOS)',
    inLanguage: ['en', 'es'], description, url: SITE + (lang === 'en' ? '/' : '/es/'),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    ...(STORE_URL ? { installUrl: STORE_URL, downloadUrl: STORE_URL } : {})
  });
  const faqLd = (items) => ({ '@context': 'https://schema.org', '@type': 'FAQPage',
    mainEntity: items.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '') } })) });
  const articleLd = (lang, path, title, description) => ({ '@context': 'https://schema.org', '@type': 'Article', headline: title, description,
    inLanguage: lang, datePublished: UPDATED, dateModified: UPDATED, mainEntityOfPage: SITE + path,
    author: { '@type': 'Organization', name: 'Lock My Profile' }, publisher: { '@type': 'Organization', name: 'Lock My Profile' } });
  const checks = (items) => `<ul class="checks">${items.map((t) => `<li>${icon('check')}<span>${t}</span></li>`).join('')}</ul>`;
  const faq = (items) => `<div class="faq">${items.map(([q, a]) => `<details><summary>${q}</summary><p>${a}</p></details>`).join('')}</div>`;
  const ctaBox = (ui) => `<div class="cta-box"><img src="${PREFIX}/assets/logo.svg" alt="" width="56" height="56"><div><b>${ui.ctaTitle}</b><span>${ui.ctaText}</span></div>${storeButton(ui, 'guide')}</div>`;
  const crumbs = (ui, title) => `<nav class="crumbs" aria-label="Breadcrumb"><a href="${PREFIX}${ui.home}">${ui.crumbsHome}</a> › <a href="${PREFIX}${ui.guidesHome}">${ui.guides}</a> › ${esc(title)}</nav>`;
  const k = (s) => s.split('+').map((x) => `<kbd>${x}</kbd>`).join('+');

  // ── Guides (slugs and titles, used by the home pages too) ──
  const G = {
    en: [
      { path: '/guides/password-protect-chrome/', alt: '/es/guias/poner-contrasena-a-chrome/', tag: 'Chrome', title: 'How to password protect Chrome', blurb: 'Chrome has no password of its own. Here are the two ways to add one, and which to pick.' },
      { path: '/guides/lock-whatsapp-web/', alt: '/es/guias/bloquear-whatsapp-web/', tag: 'WhatsApp Web', title: 'How to lock WhatsApp Web with a password', blurb: 'Keep your chats private on a shared computer without logging out every time.' },
      { path: '/guides/lock-chrome-profile/', alt: '/es/guias/bloquear-perfil-de-chrome/', tag: 'Profiles', title: 'How to lock a Chrome profile', blurb: 'Put a password on one profile so the people you share the computer with can’t open it.' }
    ],
    es: [
      { path: '/es/guias/poner-contrasena-a-chrome/', alt: '/guides/password-protect-chrome/', tag: 'Chrome', title: 'Cómo poner contraseña a Chrome', blurb: 'Chrome no trae contraseña propia. Estas son las dos formas de añadirla y cuál elegir.' },
      { path: '/es/guias/bloquear-whatsapp-web/', alt: '/guides/lock-whatsapp-web/', tag: 'WhatsApp Web', title: 'Cómo bloquear WhatsApp Web con contraseña', blurb: 'Mantén tus chats privados en un ordenador compartido sin cerrar sesión cada vez.' },
      { path: '/es/guias/bloquear-perfil-de-chrome/', alt: '/guides/lock-chrome-profile/', tag: 'Perfiles', title: 'Cómo bloquear un perfil de Chrome con contraseña', blurb: 'Pon contraseña a un perfil para que quien comparte tu ordenador no pueda abrirlo.' }
    ]
  };
  const guideCards = (lang) => `<div class="guides">${G[lang].map((g) => `<a class="guide" href="${PREFIX}${g.path}"><small>${g.tag}</small><b>${g.title}</b><span>${g.blurb}</span></a>`).join('')}</div>`;

  // ── Home ──
  const HOME = {
    en: {
      title: 'Lock My Profile — Password protect Chrome and the sites you choose',
      description: 'Free extension that locks your Chrome profile and chosen sites with one password. Auto-lock, tab camouflage and an intruder log. No account, nothing leaves your device.',
      eyebrow: 'Free browser extension',
      h1: 'Lock your browser with <em>one password</em>',
      lead: 'Lock My Profile puts a password on your Chrome profile and on the sites you choose, and can disguise a locked tab as a harmless page. No account. Nothing leaves your device.',
      trust: ['Free', 'No account', 'Works offline', 'English & Spanish'],
      heroAlt: 'Lock My Profile lock screen covering the browser',
      featuresTitle: 'Everything you need to keep your browser private', featuresText: 'For shared computers, the office, or anyone who sits down while you’re away.',
      features: [
        ['lock', 'Lock the whole profile', `Every open tab hides behind a lock screen until you type your password. Lock instantly with ${k('Ctrl+Shift+L')}.`],
        ['globe', 'Protect only some sites', 'Email, chats or your bank ask for the password even while the browser is unlocked.'],
        ['clock', 'Auto-lock', 'After a few idle minutes, when Chrome starts, when your computer locks or when the window is minimized.'],
        ['mask', 'Tab camouflage', 'A locked tab can look like another site, or be swapped for a real, harmless page.'],
        ['list', 'Intruder log', 'Every wrong password is recorded with date and time. Export it as CSV.'],
        ['shield', 'Brute-force protection', 'After 5 wrong attempts (you can change it) a timed lockout starts, doubling each round up to 15 minutes.']
      ],
      camoTag: 'Tab camouflage', camoTitle: 'Step away. They’ll only see Wikipedia.',
      camoText: 'Leave a protected tab and it’s swapped for a harmless page: the address bar shows the other site’s real address. Your own tab waits untouched in a minimized window, and a small password bar on the page brings it back.',
      camoChecks: ['Choose the page: Wikipedia, YouTube, Google, news and more', 'Or keep the tab and disguise only its title and icon', `${k('Ctrl+Shift+U')} brings the real tab back`],
      camoAlt: 'A camouflaged tab showing a recipe site with the Lock My Profile password bar',
      sitesTag: 'Protected sites', sitesTitle: 'Lock only what matters',
      sitesText: 'Add the sites you want to keep private. They ask for the password every time they open, even while the rest of the browser is free to use.',
      sitesChecks: ['Subdomains included', 'Stays open for the time you choose, from 5 minutes to 4 hours', 'Locks again as soon as you switch tabs'],
      sitesAlt: 'A protected site asking for the password', popupAlt: 'The Lock My Profile popup',
      logTag: 'Intruder log', logTitle: 'See who tried to get in',
      logText: 'Lock My Profile keeps a log of every lock, unlock and failed attempt, so you know if someone tried to open your browser while you were away.',
      logChecks: ['Date and time of every attempt', 'Export to CSV', 'A security score with tips to make your setup stronger'],
      logAlt: 'The security log with failed password attempts',
      privacyTitle: 'Private by design', privacyText: 'Your password and your activity stay on your device. Always.',
      privacy: [
        ['cloud', 'No account, no servers', 'There is nothing to sign up for and nothing is sent anywhere. No analytics, no ads, no tracking.'],
        ['key', 'Your password is never stored', 'Only a salted PBKDF2-SHA256 hash (210,000 iterations) is kept, in your browser’s local storage.'],
        ['info', 'Honest about its limits', 'It keeps your browser safe from people who use your computer. For full security, also use your computer’s own account password.']
      ],
      privacyLink: 'Read the privacy policy',
      howTitle: 'Ready in under a minute',
      steps: [['Add it to Chrome', 'Install Lock My Profile from the Chrome Web Store. It’s free.'], ['Create your password', 'Add a hint or a recovery question in case you forget it.'], ['Choose what to lock', 'The whole profile, a few sites, or both, and when it should lock by itself.']],
      faqTitle: 'Questions', faq: [
        ['Is Lock My Profile free?', 'Yes. You can install it and use every feature for free.'],
        ['Does it send my data anywhere?', 'No. It has no servers and no account. Your settings, the hash of your password and the activity log stay in your browser’s local storage.'],
        ['Can someone just turn it off?', 'While the profile is locked, Lock My Profile blocks Chrome’s internal pages, including the extensions page, so it can’t be switched off from there. It is built to stop people who use your computer; someone with full control of the computer could still remove it, so combine it with your computer’s account password for maximum security.'],
        ['What if I forget my password?', 'Use the hint or the recovery question from the lock screen. If you set neither, remove and reinstall the extension: that deletes its data and lets you start again.'],
        ['Does it work in incognito windows?', 'Yes, if you allow it: in chrome://extensions, open Lock My Profile’s details and turn on “Allow in Incognito”.'],
        ['Which computers does it work on?', 'Google Chrome on Windows, macOS, Linux and ChromeOS.']
      ],
      guidesTitle: 'Guides', guidesText: 'Step-by-step answers to the most common questions.',
      finalTitle: 'Your browser, your business', finalText: 'Lock your profile and the sites you choose in under a minute.'
    },
    es: {
      title: 'Lock My Profile — Pon contraseña a Chrome y a las webs que elijas',
      description: 'Extensión gratuita que bloquea tu perfil de Chrome y las webs que elijas con una contraseña. Bloqueo automático, pestañas camufladas y registro de intrusos. Sin cuentas.',
      eyebrow: 'Extensión gratuita para el navegador',
      h1: 'Bloquea tu navegador con <em>una contraseña</em>',
      lead: 'Lock My Profile pone contraseña a tu perfil de Chrome y a las webs que elijas, y puede disfrazar una pestaña bloqueada de página inofensiva. Sin cuentas. Nada sale de tu equipo.',
      trust: ['Gratis', 'Sin cuentas', 'Funciona sin conexión', 'Español e inglés'],
      heroAlt: 'Pantalla de bloqueo de Lock My Profile tapando el navegador',
      featuresTitle: 'Todo lo que necesitas para que tu navegador sea privado', featuresText: 'Para ordenadores compartidos, la oficina o cualquiera que se siente mientras no estás.',
      features: [
        ['lock', 'Bloquea todo el perfil', `Todas las pestañas quedan ocultas tras una pantalla de bloqueo hasta que escribes tu contraseña. Bloqueo al instante con ${k('Ctrl+Mayús+L')}.`],
        ['globe', 'Protege solo algunas webs', 'El correo, los chats o tu banco piden la contraseña aunque el navegador esté desbloqueado.'],
        ['clock', 'Bloqueo automático', 'Tras unos minutos sin uso, al abrir Chrome, al bloquear el equipo o al minimizar la ventana.'],
        ['mask', 'Pestañas camufladas', 'Una pestaña bloqueada puede parecer otra web o cambiarse por una página real e inofensiva.'],
        ['list', 'Registro de intrusos', 'Cada contraseña incorrecta queda registrada con fecha y hora. Puedes exportarlo a CSV.'],
        ['shield', 'Protección contra fuerza bruta', 'Tras 5 intentos fallidos (lo puedes cambiar) empieza una espera que se duplica cada vez, hasta 15 minutos.']
      ],
      camoTag: 'Pestañas camufladas', camoTitle: 'Te levantas. Solo verán Wikipedia.',
      camoText: 'Al salir de una pestaña protegida, se cambia por una página inofensiva: la barra de direcciones muestra la dirección real de la otra web. Tu pestaña espera intacta en una ventana minimizada, y una pequeña barra de contraseña en la página la devuelve.',
      camoChecks: ['Elige la página: Wikipedia, YouTube, Google, noticias y más', 'O mantén la pestaña y disfraza solo su título y su icono', `${k('Ctrl+Mayús+U')} devuelve la pestaña real`],
      camoAlt: 'Una pestaña camuflada que muestra una web de recetas con la barra de contraseña de Lock My Profile',
      sitesTag: 'Sitios protegidos', sitesTitle: 'Bloquea solo lo importante',
      sitesText: 'Añade las webs que quieres mantener en privado. Piden la contraseña cada vez que se abren, aunque el resto del navegador se pueda usar con normalidad.',
      sitesChecks: ['Incluye los subdominios', 'Sigue abierta el tiempo que elijas, de 5 minutos a 4 horas', 'Se vuelve a bloquear en cuanto cambias de pestaña'],
      sitesAlt: 'Una web protegida pidiendo la contraseña', popupAlt: 'El panel de Lock My Profile',
      logTag: 'Registro de intrusos', logTitle: 'Descubre quién intentó entrar',
      logText: 'Lock My Profile guarda un registro de cada bloqueo, desbloqueo e intento fallido, para que sepas si alguien intentó abrir tu navegador mientras no estabas.',
      logChecks: ['Fecha y hora de cada intento', 'Exportación a CSV', 'Puntuación de seguridad con consejos para reforzar tu configuración'],
      logAlt: 'El registro de seguridad con intentos de contraseña fallidos',
      privacyTitle: 'Privado de verdad', privacyText: 'Tu contraseña y tu actividad se quedan en tu equipo. Siempre.',
      privacy: [
        ['cloud', 'Sin cuentas ni servidores', 'No hay que registrarse y no se envía nada a ningún sitio. Sin analítica, sin anuncios, sin rastreo.'],
        ['key', 'Tu contraseña nunca se guarda', 'Solo se guarda un hash PBKDF2-SHA256 con sal (210.000 iteraciones), en el almacenamiento local de tu navegador.'],
        ['info', 'Claro con sus límites', 'Protege tu navegador de quien usa tu ordenador. Para la máxima seguridad, usa también la contraseña de tu cuenta del sistema.']
      ],
      privacyLink: 'Leer la política de privacidad',
      howTitle: 'Listo en menos de un minuto',
      steps: [['Añádelo a Chrome', 'Instala Lock My Profile desde Chrome Web Store. Es gratis.'], ['Crea tu contraseña', 'Añade una pista o una pregunta de recuperación por si la olvidas.'], ['Elige qué bloquear', 'Todo el perfil, algunas webs o ambas cosas, y cuándo debe bloquearse solo.']],
      faqTitle: 'Preguntas frecuentes', faq: [
        ['¿Lock My Profile es gratis?', 'Sí. Puedes instalarlo y usar todas sus funciones gratis.'],
        ['¿Envía mis datos a algún sitio?', 'No. No tiene servidores ni cuentas. Tus ajustes, el hash de tu contraseña y el registro de actividad se quedan en el almacenamiento local de tu navegador.'],
        ['¿Alguien puede desactivarlo sin más?', 'Mientras el perfil está bloqueado, Lock My Profile bloquea las páginas internas de Chrome, también la de extensiones, así que no se puede desactivar desde ahí. Está pensado para frenar a quien usa tu ordenador; alguien con control total del equipo podría quitarlo, así que combínalo con la contraseña de tu cuenta del sistema para la máxima seguridad.'],
        ['¿Y si olvido la contraseña?', 'Usa la pista o la pregunta de recuperación desde la pantalla de bloqueo. Si no configuraste ninguna, quita y vuelve a instalar la extensión: se borran sus datos y puedes empezar de nuevo.'],
        ['¿Funciona en las ventanas de incógnito?', 'Sí, si lo permites: en chrome://extensions abre los detalles de Lock My Profile y activa «Permitir en modo incógnito».'],
        ['¿En qué ordenadores funciona?', 'Google Chrome en Windows, macOS, Linux y ChromeOS.']
      ],
      guidesTitle: 'Guías', guidesText: 'Respuestas paso a paso a las dudas más habituales.',
      finalTitle: 'Tu navegador, tus cosas', finalText: 'Bloquea tu perfil y las webs que elijas en menos de un minuto.'
    }
  };

  const home = (lang) => {
    const c = HOME[lang];
    const ids = lang === 'en' ? { features: 'features', privacy: 'privacy', how: 'how', guides: 'guides' } : { features: 'funciones', privacy: 'privacidad', how: 'como-funciona', guides: 'guias' };
    return {
      lang, path: lang === 'en' ? '/' : '/es/', alt: lang === 'en' ? '/es/' : '/', title: c.title, description: c.description,
      ld: [app(lang, c.description), faqLd(c.faq)],
      body: (ui) => `
<section class="hero"><div class="wrap">
  <div>
    <span class="eyebrow">${c.eyebrow}</span>
    <h1>${c.h1}</h1>
    <p class="lead">${c.lead}</p>
    <div class="cta">${storeButton(ui, 'hero')}<a class="btn btn-ghost" href="#${ids.how}">${ui.how}</a></div>
    <ul class="trust">${c.trust.map((t) => `<li>${icon('check')}${t}</li>`).join('')}</ul>
  </div>
  ${frame(img('lock-' + lang), c.heroAlt, 1280, 800, true, true)}
</div></section>

<section class="block alt" id="${ids.features}"><div class="wrap">
  <div class="head"><h2>${c.featuresTitle}</h2><p>${c.featuresText}</p></div>
  <div class="grid">${c.features.map(([i, t, d]) => `<div class="card"><span class="ico">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
</div></section>

<section class="block"><div class="wrap split">
  <div><span class="eyebrow">${c.camoTag}</span><h2>${c.camoTitle}</h2><p>${c.camoText}</p>${checks(c.camoChecks)}</div>
  ${frame(img('decoy-' + lang), c.camoAlt, 1200, 760)}
</div></section>

<section class="block"><div class="wrap split rev">
  <div><span class="eyebrow">${c.sitesTag}</span><h2>${c.sitesTitle}</h2><p>${c.sitesText}</p>${checks(c.sitesChecks)}</div>
  <div class="duo">${frame(img('site-locked-' + lang), c.sitesAlt, 1200, 760, true)}<div class="popup"><img src="${img('popup-' + lang)}" alt="${esc(c.popupAlt)}" width="720" height="1180" loading="lazy" decoding="async"></div></div>
</div></section>

<section class="block"><div class="wrap split">
  <div><span class="eyebrow">${c.logTag}</span><h2>${c.logTitle}</h2><p>${c.logText}</p>${checks(c.logChecks)}</div>
  ${frame(img('opt-log-' + lang), c.logAlt, 1200, 780)}
</div></section>

<section class="block alt" id="${ids.privacy}"><div class="wrap">
  <div class="head"><h2>${c.privacyTitle}</h2><p>${c.privacyText}</p></div>
  <div class="grid">${c.privacy.map(([i, t, d]) => `<div class="card"><span class="ico">${icon(i)}</span><h3>${t}</h3><p>${d}</p></div>`).join('')}</div>
  <p style="text-align:center;margin:28px 0 0"><a href="${PREFIX}/privacy/${lang === 'es' ? '#es' : ''}">${c.privacyLink}</a></p>
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
  ${guideCards(lang)}
</div></section>

<section class="final"><div class="wrap"><div class="box">
  <h2>${c.finalTitle}</h2><p>${c.finalText}</p>${storeButton(ui, 'footer')}
</div></div></section>`
    };
  };

  // ── Guides ──
  const guide = (lang, i, { title, seoTitle, description, tldr, body }) => {
    const g = G[lang][i];
    return {
      lang, path: g.path, alt: g.alt, type: 'article', title: seoTitle, ogTitle: title, description,
      ld: [articleLd(lang, g.path, title, description)],
      body: (ui) => `
<article class="article"><div class="wrap">
  ${crumbs(ui, title)}
  <h1>${title}</h1>
  <p class="meta">${ui.updated}: ${lang === 'en' ? 'November 10, 2026' : '10 de noviembre de 2026'}</p>
  <div class="tldr"><p>${tldr}</p></div>
  ${body}
  ${ctaBox(ui)}
  <h2>${lang === 'en' ? 'More guides' : 'Más guías'}</h2>
  ${guideCards(lang)}
</div></article>`
    };
  };
  const fig = (name, alt, w, h, dark, caption) => `<figure>${frame(img(name), alt, w, h, dark)}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`;

  const guides = [
    guide('en', 0, {
      title: 'How to password protect Chrome',
      seoTitle: 'How to Password Protect Chrome (2026 Guide) — Lock My Profile',
      description: 'Chrome has no built-in password. Learn the two ways to password protect Chrome, a separate computer account or a lock extension, and how to set each up.',
      tldr: '<strong>Short answer:</strong> Chrome doesn’t ask for a password when it opens. The quickest way to add one is a lock extension such as Lock My Profile; the strongest is giving each person their own account on the computer. Many people use both.',
      body: `
<h2>Does Chrome have a password option?</h2>
<p>Not for opening the browser. Chrome lets you create several <strong>profiles</strong> and sign in with a Google account, but neither asks for a password when someone opens Chrome on your computer. Signing out of your Google account doesn’t help either: your open tabs, history and sites where you’re still logged in stay on the computer.</p>

<h2>Option 1: a separate account on your computer</h2>
<p>If several people share the computer, the most secure setup is one account each in the operating system. Chrome keeps each account’s data apart, and nobody can open yours without the computer password.</p>
<ul>
  <li><strong>Windows:</strong> Settings › Accounts › Other users › Add account.</li>
  <li><strong>macOS:</strong> System Settings › Users &amp; Groups › Add User.</li>
</ul>
<p>The downside: everyone has to switch accounts, and it doesn’t help when someone uses the computer while you’re still logged in.</p>

<h2>Option 2: a lock extension (the quickest)</h2>
<p>A lock extension puts a password screen in front of Chrome. This is how to do it with <strong>Lock My Profile</strong>, which is free and keeps everything on your device:</p>
<ol>
  <li>Install Lock My Profile from the Chrome Web Store and click its icon in the toolbar.</li>
  <li>Create your password. Add a <strong>hint</strong> or a <strong>recovery question</strong> in case you forget it.</li>
  <li>Click <strong>Lock now</strong> or press ${k('Ctrl+Shift+L')}. Every tab is covered until you type the password.</li>
  <li>In <strong>Automation</strong>, turn on <strong>When Chrome starts</strong> so it asks for the password every time Chrome opens, and choose a time for <strong>Lock after inactivity</strong>.</li>
  <li>In <strong>Security</strong>, keep <strong>Block internal pages</strong> on, so nobody can turn the extension off from the extensions page while it’s locked.</li>
</ol>
${fig('lock-en', 'The Lock My Profile lock screen', 1280, 800, true, 'The lock screen covers every tab until you type your password.')}

<h2>Only want to protect some sites?</h2>
<p>You don’t have to lock the whole browser. In <strong>Protected sites</strong>, add the sites you want to keep private, such as your email or your bank, and they’ll ask for the password even while the rest of Chrome is free to use. See <a href="${PREFIX}/guides/lock-whatsapp-web/">how to lock WhatsApp Web</a> for a step-by-step example.</p>

<h2>Tips for a strong setup</h2>
<ul>
  <li>Use a password you don’t use anywhere else.</li>
  <li>On a shared computer, turn off <strong>Show the hint on the lock screen</strong>, so others can’t guess from it.</li>
  <li>Check the <strong>Log</strong> from time to time: it lists every failed attempt with date and time.</li>
</ul>
<div class="note"><p>A lock extension keeps your browser safe from people who use your computer. It doesn’t replace your computer’s account password or disk encryption, so for maximum security use both.</p></div>`
    }),
    guide('en', 1, {
      title: 'How to lock WhatsApp Web with a password',
      seoTitle: 'How to Lock WhatsApp Web with a Password — Lock My Profile',
      description: 'Lock WhatsApp Web with a password so nobody reads your chats on a shared computer, without logging out. Step-by-step guide, with an option to hide the tab too.',
      tldr: '<strong>Short answer:</strong> add <code>web.whatsapp.com</code> as a protected site in Lock My Profile. WhatsApp Web will ask for your password every time it opens, and lock again when you switch tabs, without logging you out.',
      body: `
<h2>Why lock WhatsApp Web?</h2>
<p>WhatsApp Web stays logged in for weeks. On a shared or work computer, anyone who opens the tab can read your chats. Logging out every time works, but then you have to scan the QR code again and again.</p>
<p>WhatsApp Web also includes a basic screen lock in its own privacy settings. It only covers WhatsApp; the method below works the same for WhatsApp and any other site, and adds automatic re-locking, tab camouflage and a log of failed attempts.</p>

<h2>Step by step</h2>
<ol>
  <li>Install <strong>Lock My Profile</strong> and create your password.</li>
  <li>Open its settings (the gear icon in the popup) and go to <strong>Protected sites</strong>.</li>
  <li>Type <code>web.whatsapp.com</code> and click <strong>Protect site</strong>.</li>
  <li>Under <strong>Ask again after</strong>, choose how long WhatsApp stays open once unlocked, from 5 minutes to 4 hours.</li>
  <li>Keep <strong>Lock when switching tabs</strong> on: as soon as you go to another tab, WhatsApp locks again.</li>
</ol>
${fig('site-locked-en', 'A protected site asking for the password', 1200, 760, true, 'A protected site asks for the password before showing anything.')}

<h2>Hide that WhatsApp is even open</h2>
<p>Turn on <strong>Camouflage protected tabs</strong> and choose <strong>Other site (real address)</strong>. When you leave the WhatsApp tab, it’s swapped for a harmless page such as Wikipedia, and the address bar shows that site’s real address. Your WhatsApp tab waits in a minimized window; a small password bar on the page, or ${k('Ctrl+Shift+U')}, brings it back.</p>
${fig('decoy-en', 'A camouflaged tab with the password bar', 1200, 760, false, 'The camouflaged tab shows another site, with the password bar at the bottom right.')}

<h2>Think someone already read your chats?</h2>
<ul>
  <li>Open the <strong>Log</strong> in Lock My Profile to see failed password attempts with date and time.</li>
  <li>On your phone, open WhatsApp › <strong>Linked devices</strong> and log out of any computer you don’t recognise.</li>
</ul>`
    }),
    guide('en', 2, {
      title: 'How to lock a Chrome profile',
      seoTitle: 'How to Lock a Chrome Profile with a Password — Lock My Profile',
      description: 'Chrome profiles have no password. Learn how to lock a Chrome profile so others can’t open it, what each profile protects, and the limits to know about.',
      tldr: '<strong>Short answer:</strong> Chrome profiles don’t have passwords, but you can add one by installing Lock My Profile <strong>inside the profile you want to protect</strong> and turning on locking when Chrome starts.',
      body: `
<h2>What a Chrome profile is (and why it has no password)</h2>
<p>A profile is a separate set of bookmarks, history, passwords, open tabs and extensions. Anyone using the computer can switch to any profile from the profile icon, because Chrome treats them as a convenience, not as security.</p>

<h2>How to lock one profile</h2>
<p>Extensions are installed per profile. That makes it easy to lock just the profile you care about:</p>
<ol>
  <li>Open Chrome in the profile you want to protect.</li>
  <li>Install <strong>Lock My Profile</strong> in that profile and create your password.</li>
  <li>In <strong>Automation</strong>, turn on <strong>When Chrome starts</strong> and choose a time for <strong>Lock after inactivity</strong>.</li>
  <li>In <strong>Security</strong>, keep <strong>Block internal pages</strong> on, so the extension can’t be turned off from the extensions page while the profile is locked.</li>
  <li>To lock other profiles too, repeat the steps in each one. Each profile can have its own password.</li>
</ol>
${fig('opt-automation-en', 'Lock My Profile automation settings', 1200, 780, false, 'Choose when the profile locks by itself.')}

<h2>What it protects, and its limits</h2>
<p>When the profile is locked, its tabs, history, saved sessions and the sites where you’re logged in are hidden behind the lock screen. Keep in mind:</p>
<ul>
  <li>Someone could still open a <strong>Guest</strong> window or create a new profile. They won’t see any of your data there, but they can browse.</li>
  <li>If you need to stop that too, give each person their own account on the computer, or, on computers managed by a company or school, an administrator can turn off Guest mode and adding profiles with Chrome policies.</li>
  <li>A lock extension protects against people who use your computer. It doesn’t replace your computer’s account password or disk encryption.</li>
</ul>

<h2>Lock only some sites instead</h2>
<p>If you don’t want to lock the whole profile, protect just a few sites, like your email or <a href="${PREFIX}/guides/lock-whatsapp-web/">WhatsApp Web</a>. They’ll ask for the password while the rest of the profile works normally.</p>`
    }),
    guide('es', 0, {
      title: 'Cómo poner contraseña a Chrome',
      seoTitle: 'Cómo poner contraseña a Chrome (guía 2026) — Lock My Profile',
      description: 'Chrome no trae contraseña. Aprende las dos formas de poner contraseña a Chrome, una cuenta propia en el ordenador o una extensión de bloqueo, y cómo configurarlas.',
      tldr: '<strong>Respuesta corta:</strong> Chrome no pide contraseña al abrirse. La forma más rápida de añadirla es una extensión de bloqueo como Lock My Profile; la más segura, que cada persona tenga su propia cuenta en el ordenador. Mucha gente usa las dos.',
      body: `
<h2>¿Chrome tiene opción de contraseña?</h2>
<p>No para abrir el navegador. Chrome permite crear varios <strong>perfiles</strong> e iniciar sesión con una cuenta de Google, pero ninguno pide contraseña cuando alguien abre Chrome en tu ordenador. Cerrar la sesión de Google tampoco sirve: tus pestañas, tu historial y las webs donde sigues conectado se quedan en el equipo.</p>

<h2>Opción 1: una cuenta propia en el ordenador</h2>
<p>Si varias personas comparten el ordenador, lo más seguro es que cada una tenga su cuenta en el sistema. Chrome separa los datos de cada cuenta y nadie puede abrir la tuya sin la contraseña del ordenador.</p>
<ul>
  <li><strong>Windows:</strong> Configuración › Cuentas › Otros usuarios › Agregar cuenta.</li>
  <li><strong>macOS:</strong> Ajustes del Sistema › Usuarios y grupos › Añadir usuario.</li>
</ul>
<p>El inconveniente: todos tienen que cambiar de cuenta, y no sirve si alguien usa el ordenador mientras tu sesión sigue abierta.</p>

<h2>Opción 2: una extensión de bloqueo (la más rápida)</h2>
<p>Una extensión de bloqueo pone una pantalla con contraseña delante de Chrome. Así se hace con <strong>Lock My Profile</strong>, que es gratis y lo guarda todo en tu equipo:</p>
<ol>
  <li>Instala Lock My Profile desde Chrome Web Store y pulsa su icono en la barra de herramientas.</li>
  <li>Crea tu contraseña. Añade una <strong>pista</strong> o una <strong>pregunta de recuperación</strong> por si la olvidas.</li>
  <li>Pulsa <strong>Bloquear ahora</strong> o ${k('Ctrl+Mayús+L')}. Todas las pestañas quedan tapadas hasta que escribes la contraseña.</li>
  <li>En <strong>Automatización</strong>, activa <strong>Al iniciar Chrome</strong> para que pida la contraseña cada vez que se abre, y elige un tiempo de <strong>Bloqueo por inactividad</strong>.</li>
  <li>En <strong>Seguridad</strong>, deja activado <strong>Bloquear páginas internas</strong>, para que nadie pueda desactivar la extensión desde la página de extensiones mientras está bloqueado.</li>
</ol>
${fig('lock-es', 'La pantalla de bloqueo de Lock My Profile', 1280, 800, true, 'La pantalla de bloqueo tapa todas las pestañas hasta que escribes tu contraseña.')}

<h2>¿Solo quieres proteger algunas webs?</h2>
<p>No hace falta bloquear todo el navegador. En <strong>Sitios protegidos</strong>, añade las webs que quieres mantener en privado, como tu correo o tu banco, y pedirán la contraseña aunque el resto de Chrome se use con normalidad. Mira <a href="${PREFIX}/es/guias/bloquear-whatsapp-web/">cómo bloquear WhatsApp Web</a> para ver un ejemplo paso a paso.</p>

<h2>Consejos para una configuración segura</h2>
<ul>
  <li>Usa una contraseña que no uses en ningún otro sitio.</li>
  <li>En un ordenador compartido, desactiva <strong>Mostrar la pista en la pantalla de bloqueo</strong>, para que nadie la adivine.</li>
  <li>Revisa el <strong>Registro</strong> de vez en cuando: muestra cada intento fallido con fecha y hora.</li>
</ul>
<div class="note"><p>Una extensión de bloqueo protege tu navegador de quien usa tu ordenador. No sustituye a la contraseña de tu cuenta del sistema ni al cifrado del disco; para la máxima seguridad, usa las dos cosas.</p></div>`
    }),
    guide('es', 1, {
      title: 'Cómo bloquear WhatsApp Web con contraseña',
      seoTitle: 'Cómo bloquear WhatsApp Web con contraseña — Lock My Profile',
      description: 'Pon contraseña a WhatsApp Web para que nadie lea tus chats en un ordenador compartido, sin cerrar sesión. Guía paso a paso, con opción de ocultar también la pestaña.',
      tldr: '<strong>Respuesta corta:</strong> añade <code>web.whatsapp.com</code> como sitio protegido en Lock My Profile. WhatsApp Web pedirá tu contraseña cada vez que se abra y se volverá a bloquear al cambiar de pestaña, sin cerrar la sesión.',
      body: `
<h2>¿Por qué bloquear WhatsApp Web?</h2>
<p>WhatsApp Web se queda conectado durante semanas. En un ordenador compartido o del trabajo, cualquiera que abra la pestaña puede leer tus chats. Cerrar sesión cada vez funciona, pero entonces tienes que escanear el código QR una y otra vez.</p>
<p>WhatsApp Web también incluye un bloqueo de pantalla básico en sus propios ajustes de privacidad. Solo cubre WhatsApp; el método de abajo funciona igual para WhatsApp y para cualquier otra web, y además vuelve a bloquear solo, camufla la pestaña y registra los intentos fallidos.</p>

<h2>Paso a paso</h2>
<ol>
  <li>Instala <strong>Lock My Profile</strong> y crea tu contraseña.</li>
  <li>Abre sus ajustes (el engranaje del panel) y ve a <strong>Sitios protegidos</strong>.</li>
  <li>Escribe <code>web.whatsapp.com</code> y pulsa <strong>Proteger sitio</strong>.</li>
  <li>En <strong>Volver a pedir la contraseña tras</strong>, elige cuánto tiempo sigue abierto WhatsApp una vez desbloqueado, de 5 minutos a 4 horas.</li>
  <li>Deja activado <strong>Bloquear al cambiar de pestaña</strong>: en cuanto pasas a otra pestaña, WhatsApp se vuelve a bloquear.</li>
</ol>
${fig('site-locked-es', 'Una web protegida pidiendo la contraseña', 1200, 760, true, 'Una web protegida pide la contraseña antes de mostrar nada.')}

<h2>Que ni se note que WhatsApp está abierto</h2>
<p>Activa <strong>Camuflar pestañas protegidas</strong> y elige <strong>Otra web (dirección real)</strong>. Al salir de la pestaña de WhatsApp, se cambia por una página inofensiva como Wikipedia, y la barra de direcciones muestra la dirección real de esa web. Tu pestaña de WhatsApp espera en una ventana minimizada; una pequeña barra de contraseña en la página, o ${k('Ctrl+Mayús+U')}, la devuelve.</p>
${fig('decoy-es', 'Una pestaña camuflada con la barra de contraseña', 1200, 760, false, 'La pestaña camuflada muestra otra web, con la barra de contraseña abajo a la derecha.')}

<h2>¿Crees que alguien ya leyó tus chats?</h2>
<ul>
  <li>Abre el <strong>Registro</strong> de Lock My Profile para ver los intentos de contraseña fallidos, con fecha y hora.</li>
  <li>En tu móvil, abre WhatsApp › <strong>Dispositivos vinculados</strong> y cierra la sesión de cualquier ordenador que no reconozcas.</li>
</ul>`
    }),
    guide('es', 2, {
      title: 'Cómo bloquear un perfil de Chrome con contraseña',
      seoTitle: 'Cómo bloquear un perfil de Chrome con contraseña — Lock My Profile',
      description: 'Los perfiles de Chrome no tienen contraseña. Aprende a bloquear un perfil de Chrome para que nadie lo abra, qué protege cada perfil y qué límites conviene conocer.',
      tldr: '<strong>Respuesta corta:</strong> los perfiles de Chrome no tienen contraseña, pero puedes añadirla instalando Lock My Profile <strong>dentro del perfil que quieres proteger</strong> y activando el bloqueo al iniciar Chrome.',
      body: `
<h2>Qué es un perfil de Chrome (y por qué no tiene contraseña)</h2>
<p>Un perfil es un conjunto propio de marcadores, historial, contraseñas, pestañas abiertas y extensiones. Cualquiera que use el ordenador puede cambiar de perfil desde el icono de perfil, porque Chrome los trata como una comodidad, no como una medida de seguridad.</p>

<h2>Cómo bloquear un perfil</h2>
<p>Las extensiones se instalan por perfil. Eso hace fácil bloquear solo el perfil que te importa:</p>
<ol>
  <li>Abre Chrome con el perfil que quieres proteger.</li>
  <li>Instala <strong>Lock My Profile</strong> en ese perfil y crea tu contraseña.</li>
  <li>En <strong>Automatización</strong>, activa <strong>Al iniciar Chrome</strong> y elige un tiempo de <strong>Bloqueo por inactividad</strong>.</li>
  <li>En <strong>Seguridad</strong>, deja activado <strong>Bloquear páginas internas</strong>, para que la extensión no se pueda desactivar desde la página de extensiones mientras el perfil está bloqueado.</li>
  <li>Para bloquear otros perfiles, repite los pasos en cada uno. Cada perfil puede tener su propia contraseña.</li>
</ol>
${fig('opt-automation-es', 'Ajustes de automatización de Lock My Profile', 1200, 780, false, 'Elige cuándo se bloquea el perfil solo.')}

<h2>Qué protege y qué límites tiene</h2>
<p>Con el perfil bloqueado, sus pestañas, su historial, las sesiones guardadas y las webs donde estás conectado quedan ocultos tras la pantalla de bloqueo. Ten en cuenta:</p>
<ul>
  <li>Alguien podría abrir una ventana de <strong>Invitado</strong> o crear un perfil nuevo. Ahí no verá ninguno de tus datos, pero podrá navegar.</li>
  <li>Si también quieres impedir eso, da a cada persona su propia cuenta en el ordenador; en equipos gestionados por una empresa o un centro educativo, un administrador puede desactivar el modo Invitado y la creación de perfiles con las políticas de Chrome.</li>
  <li>Una extensión de bloqueo protege de quien usa tu ordenador. No sustituye a la contraseña de tu cuenta del sistema ni al cifrado del disco.</li>
</ul>

<h2>O bloquea solo algunas webs</h2>
<p>Si no quieres bloquear todo el perfil, protege solo algunas webs, como tu correo o <a href="${PREFIX}/es/guias/bloquear-whatsapp-web/">WhatsApp Web</a>. Pedirán la contraseña mientras el resto del perfil funciona con normalidad.</p>`
    })
  ];

  const notFound = {
    lang: 'en', path: '/404.html', noindex: true, title: 'Page not found — Lock My Profile', description: 'This page doesn’t exist.',
    body: (ui) => `<section class="block"><div class="wrap" style="text-align:center;max-width:620px">
  <h1 style="font-size:40px;margin-bottom:12px">${ui.notFound}</h1><p class="lead" style="margin-inline:auto">${ui.notFoundText}</p>
  <div class="cta" style="justify-content:center"><a class="btn btn-primary" href="${PREFIX}/">Lock My Profile</a><a class="btn btn-ghost" href="${PREFIX}/es/">Español</a></div>
</div></section>`
  };

  return [home('en'), home('es'), ...guides, notFound];
}
