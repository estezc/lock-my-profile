// Español
export default ({ k, fig, guide }) => ({
  code: 'es', name: 'Español', locale: 'es_ES', date: '10 de noviembre de 2026',
  paths: { home: '/es/', guides: '/es/guias/', bye: '/es/adios/' },
  ui: {
    features: 'Funciones', privacy: 'Privacidad', guides: 'Guías', language: 'Idioma', skip: 'Saltar al contenido', nav: 'Principal',
    add: 'Añadir a Chrome — es gratis', soon: 'Muy pronto en Chrome Web Store', how: 'Ver cómo funciona',
    policy: 'Política de privacidad', tm: 'Google Chrome es una marca de Google LLC. Lock My Profile no está afiliado a Google.',
    updated: 'Actualizado', crumbsHome: 'Inicio', moreGuides: 'Más guías',
    ctaText: 'Extensión gratuita: bloquea tu perfil y las webs que elijas con una sola contraseña.',
    notFound: 'Página no encontrada', notFoundText: 'Esta página no existe. Prueba con la página de inicio o con una de nuestras guías.'
  },
  ids: { features: 'funciones', privacy: 'privacidad', how: 'como-funciona', guides: 'guias' },

  home: {
    title: 'Lock My Profile — Pon contraseña a Chrome y a las webs que elijas',
    description: 'Extensión gratuita que bloquea tu perfil de Chrome y las webs que elijas con contraseña. Bloqueo automático, pestañas camufladas y registro de intrusos.',
    eyebrow: 'Extensión gratuita para el navegador',
    h1: 'Bloquea tu navegador con <em>una contraseña</em>',
    lead: 'Lock My Profile pone contraseña a tu perfil de Chrome y a las webs que elijas, y puede disfrazar una pestaña bloqueada de página inofensiva. Sin cuentas. Nada sale de tu equipo.',
    trust: ['Gratis', 'Sin cuentas', 'Funciona sin conexión', '6 idiomas'],
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
      ['¿En qué idiomas y ordenadores funciona?', 'Google Chrome en Windows, macOS, Linux y ChromeOS, en español, inglés, francés, alemán, italiano y portugués.']
    ],
    guidesTitle: 'Guías', guidesText: 'Respuestas paso a paso a las dudas más habituales.',
    finalTitle: 'Tu navegador, tus cosas', finalText: 'Bloquea tu perfil y las webs que elijas en menos de un minuto.'
  },

  guides: [
    {
      slug: 'poner-contrasena-a-chrome', tag: 'Chrome', title: 'Cómo poner contraseña a Chrome',
      blurb: 'Chrome no trae contraseña propia. Estas son las dos formas de añadirla y cuál elegir.',
      seoTitle: 'Cómo poner contraseña a Chrome (guía 2026) — Lock My Profile',
      description: 'Chrome no trae contraseña. Las dos formas de ponérsela, una cuenta propia en el ordenador o una extensión de bloqueo, y cómo configurar cada una.',
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
${fig('lock', 'La pantalla de bloqueo de Lock My Profile', 1280, 800, true, 'La pantalla de bloqueo tapa todas las pestañas hasta que escribes tu contraseña.')}

<h2>¿Solo quieres proteger algunas webs?</h2>
<p>No hace falta bloquear todo el navegador. En <strong>Sitios protegidos</strong>, añade las webs que quieres mantener en privado, como tu correo o tu banco, y pedirán la contraseña aunque el resto de Chrome se use con normalidad. Mira <a href="${guide(1)}">cómo bloquear WhatsApp Web</a> para ver un ejemplo paso a paso.</p>

<h2>Consejos para una configuración segura</h2>
<ul>
  <li>Usa una contraseña que no uses en ningún otro sitio.</li>
  <li>En un ordenador compartido, desactiva <strong>Mostrar la pista en la pantalla de bloqueo</strong>, para que nadie la adivine.</li>
  <li>Revisa el <strong>Registro</strong> de vez en cuando: muestra cada intento fallido con fecha y hora.</li>
</ul>
<div class="note"><p>Una extensión de bloqueo protege tu navegador de quien usa tu ordenador. No sustituye a la contraseña de tu cuenta del sistema ni al cifrado del disco; para la máxima seguridad, usa las dos cosas.</p></div>`
    },
    {
      slug: 'bloquear-whatsapp-web', tag: 'WhatsApp Web', title: 'Cómo bloquear WhatsApp Web con contraseña',
      blurb: 'Mantén tus chats privados en un ordenador compartido sin cerrar sesión cada vez.',
      seoTitle: 'Cómo bloquear WhatsApp Web con contraseña — Lock My Profile',
      description: 'Pon contraseña a WhatsApp Web para que nadie lea tus chats en un ordenador compartido, sin cerrar sesión. Guía paso a paso y cómo ocultar la pestaña.',
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
${fig('site-locked', 'Una web protegida pidiendo la contraseña', 1200, 760, true, 'Una web protegida pide la contraseña antes de mostrar nada.')}

<h2>Que ni se note que WhatsApp está abierto</h2>
<p>Activa <strong>Camuflar pestañas protegidas</strong> y elige <strong>Otra web (dirección real)</strong>. Al salir de la pestaña de WhatsApp, se cambia por una página inofensiva como Wikipedia, y la barra de direcciones muestra la dirección real de esa web. Tu pestaña de WhatsApp espera en una ventana minimizada; una pequeña barra de contraseña en la página, o ${k('Ctrl+Mayús+U')}, la devuelve.</p>
${fig('decoy', 'Una pestaña camuflada con la barra de contraseña', 1200, 760, false, 'La pestaña camuflada muestra otra web, con la barra de contraseña abajo a la derecha.')}

<h2>¿Crees que alguien ya leyó tus chats?</h2>
<ul>
  <li>Abre el <strong>Registro</strong> de Lock My Profile para ver los intentos de contraseña fallidos, con fecha y hora.</li>
  <li>En tu móvil, abre WhatsApp › <strong>Dispositivos vinculados</strong> y cierra la sesión de cualquier ordenador que no reconozcas.</li>
</ul>`
    },
    {
      slug: 'bloquear-perfil-de-chrome', tag: 'Perfiles', title: 'Cómo bloquear un perfil de Chrome con contraseña',
      blurb: 'Pon contraseña a un perfil para que quien comparte tu ordenador no pueda abrirlo.',
      seoTitle: 'Bloquear un perfil de Chrome con contraseña — Lock My Profile',
      description: 'Los perfiles de Chrome no tienen contraseña. Cómo bloquear un perfil de Chrome para que nadie lo abra, qué protege y qué límites conviene conocer.',
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
${fig('opt-automation', 'Ajustes de automatización de Lock My Profile', 1200, 780, false, 'Elige cuándo se bloquea el perfil solo.')}

<h2>Qué protege y qué límites tiene</h2>
<p>Con el perfil bloqueado, sus pestañas, su historial, las sesiones guardadas y las webs donde estás conectado quedan ocultos tras la pantalla de bloqueo. Ten en cuenta:</p>
<ul>
  <li>Alguien podría abrir una ventana de <strong>Invitado</strong> o crear un perfil nuevo. Ahí no verá ninguno de tus datos, pero podrá navegar.</li>
  <li>Si también quieres impedir eso, da a cada persona su propia cuenta en el ordenador; en equipos gestionados por una empresa o un centro educativo, un administrador puede desactivar el modo Invitado y la creación de perfiles con las políticas de Chrome.</li>
  <li>Una extensión de bloqueo protege de quien usa tu ordenador. No sustituye a la contraseña de tu cuenta del sistema ni al cifrado del disco.</li>
</ul>

<h2>O bloquea solo algunas webs</h2>
<p>Si no quieres bloquear todo el perfil, protege solo algunas webs, como tu correo o <a href="${guide(1)}">WhatsApp Web</a>. Pedirán la contraseña mientras el resto del perfil funciona con normalidad.</p>`
    }
  ],

  bye: {
    title: 'Lock My Profile se ha desinstalado', h1: 'Lock My Profile se ha desinstalado',
    lead: 'Sus datos se han borrado de tu navegador: la contraseña, los ajustes y el registro ya no están.',
    ask: '¿Nos cuentas por qué? Son 30 segundos y nos ayuda a mejorarlo.', askBtn: 'Contar por qué',
    helpTitle: 'Si algo no fue bien', help: [
      ['¿Olvidaste la contraseña?', 'Al reinstalarlo empiezas de cero. La próxima vez, añade una pista o una pregunta de recuperación al crearla.'],
      ['¿Se bloqueaba demasiado?', 'En los ajustes puedes desactivar el bloqueo al iniciar Chrome o al cambiar de pestaña, y elegir más tiempo de bloqueo automático.'],
      ['¿No sabías cómo usarlo?', `Nuestras <a href="${guide(0)}">guías paso a paso</a> explican los usos principales.`]
    ],
    again: '¿Has cambiado de idea?'
  }
});
