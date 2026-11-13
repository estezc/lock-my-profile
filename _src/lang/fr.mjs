// Français
export default ({ k, fig, guide }) => ({
  code: 'fr', name: 'Français', locale: 'fr_FR', date: '10 novembre 2026',
  paths: { home: '/fr/', guides: '/fr/guides/', bye: '/fr/au-revoir/' },
  ui: {
    features: 'Fonctionnalités', privacy: 'Confidentialité', guides: 'Guides', language: 'Langue', skip: 'Aller au contenu', nav: 'Menu principal',
    add: 'Ajouter à Chrome — c’est gratuit', soon: 'Bientôt sur le Chrome Web Store', how: 'Voir comment ça marche',
    policy: 'Politique de confidentialité', tm: 'Google Chrome est une marque de Google LLC. Lock My Profile n’est pas affilié à Google.',
    updated: 'Mise à jour ', crumbsHome: 'Accueil', moreGuides: 'Plus de guides',
    ctaText: 'Extension gratuite : verrouillez votre profil et les sites de votre choix avec un seul mot de passe.',
    notFound: 'Page introuvable', notFoundText: 'Cette page n’existe pas. Essayez la page d’accueil ou l’un de nos guides.'
  },
  ids: { features: 'fonctionnalites', privacy: 'confidentialite', how: 'fonctionnement', guides: 'guides' },

  home: {
    title: 'Lock My Profile — Un mot de passe pour Chrome et vos sites',
    description: 'Extension gratuite qui verrouille votre profil Chrome et vos sites par mot de passe. Verrouillage auto, onglets camouflés, journal des intrus, sans compte.',
    eyebrow: 'Extension gratuite pour le navigateur',
    h1: 'Verrouillez votre navigateur avec <em>un seul mot de passe</em>',
    lead: 'Lock My Profile met un mot de passe sur votre profil Chrome et sur les sites de votre choix, et peut déguiser un onglet verrouillé en page anodine. Sans compte. Rien ne quitte votre appareil.',
    trust: ['Gratuit', 'Sans compte', 'Fonctionne hors ligne', '6 langues'],
    heroAlt: 'L’écran de verrouillage de Lock My Profile qui masque le navigateur',
    featuresTitle: 'Tout ce qu’il faut pour garder votre navigateur privé', featuresText: 'Pour les ordinateurs partagés, le bureau, ou quiconque s’installe à votre place en votre absence.',
    features: [
      ['lock', 'Verrouillez tout le profil', `Tous les onglets ouverts disparaissent derrière un écran de verrouillage jusqu’à ce que vous saisissiez votre mot de passe. Verrouillage immédiat avec ${k('Ctrl+Maj+L')}.`],
      ['globe', 'Protégez seulement certains sites', 'Messagerie, discussions ou banque demandent le mot de passe même quand le navigateur est déverrouillé.'],
      ['clock', 'Verrouillage automatique', 'Après quelques minutes d’inactivité, au démarrage de Chrome, quand l’ordinateur se verrouille ou quand la fenêtre est réduite.'],
      ['mask', 'Onglets camouflés', 'Un onglet verrouillé peut imiter un autre site, ou céder la place à une vraie page anodine.'],
      ['list', 'Journal des intrus', 'Chaque mot de passe erroné est enregistré avec la date et l’heure. Exportable en CSV.'],
      ['shield', 'Protection contre la force brute', 'Après 5 tentatives échouées (modifiable), un blocage temporaire démarre et double à chaque série, jusqu’à 15 minutes.']
    ],
    camoTag: 'Onglets camouflés', camoTitle: 'Vous vous absentez ? On ne verra que Wikipédia.',
    camoText: 'Quittez un onglet protégé et il cède la place à une page anodine : la barre d’adresse affiche la vraie adresse de l’autre site. Votre onglet attend intact dans une fenêtre réduite, et une petite barre de mot de passe sur la page le fait revenir.',
    camoChecks: ['Choisissez la page : Wikipédia, YouTube, Google, l’actualité et bien d’autres', 'Ou gardez l’onglet et déguisez seulement son titre et son icône', `${k('Ctrl+Maj+U')} fait revenir le vrai onglet`],
    camoAlt: 'Un onglet camouflé qui affiche un site de recettes, avec la barre de mot de passe de Lock My Profile',
    sitesTag: 'Sites protégés', sitesTitle: 'Verrouillez seulement l’essentiel',
    sitesText: 'Ajoutez les sites que vous voulez garder privés. Ils demandent le mot de passe à chaque ouverture, même quand le reste du navigateur est libre d’accès.',
    sitesChecks: ['Sous-domaines inclus', 'Reste ouvert le temps choisi, de 5 minutes à 4 heures', 'Se reverrouille dès que vous changez d’onglet'],
    sitesAlt: 'Un site protégé qui demande le mot de passe', popupAlt: 'Le panneau de Lock My Profile',
    logTag: 'Journal des intrus', logTitle: 'Découvrez qui a essayé d’entrer',
    logText: 'Lock My Profile consigne chaque verrouillage, déverrouillage et tentative échouée : vous savez si quelqu’un a essayé d’ouvrir votre navigateur pendant votre absence.',
    logChecks: ['Date et heure de chaque tentative', 'Export en CSV', 'Un score de sécurité, avec des conseils pour renforcer votre configuration'],
    logAlt: 'Le journal de sécurité avec des tentatives de mot de passe échouées',
    privacyTitle: 'Confidentiel dès la conception', privacyText: 'Votre mot de passe et votre activité restent sur votre appareil. Toujours.',
    privacy: [
      ['cloud', 'Ni compte, ni serveur', 'Aucune inscription, et rien n’est envoyé nulle part. Pas de statistiques, pas de pub, pas de pistage.'],
      ['key', 'Votre mot de passe n’est jamais stocké', 'Seule une empreinte PBKDF2-SHA256 salée (600 000 itérations) est conservée, dans le stockage local de votre navigateur.'],
      ['info', 'Honnête sur ses limites', 'Il protège votre navigateur des personnes qui utilisent votre ordinateur. Pour une sécurité complète, utilisez aussi le mot de passe de votre compte sur l’ordinateur.']
    ],
    privacyLink: 'Lire la politique de confidentialité',
    howTitle: 'Prêt en moins d’une minute',
    steps: [['Ajoutez-le à Chrome', 'Installez Lock My Profile depuis le Chrome Web Store. C’est gratuit.'], ['Créez votre mot de passe', 'Ajoutez un indice ou une question de récupération en cas d’oubli.'], ['Choisissez quoi verrouiller', 'Tout le profil, quelques sites ou les deux, et quand le verrouillage doit se déclencher tout seul.']],
    faqTitle: 'Questions fréquentes', faq: [
      ['Lock My Profile est-il gratuit ?', 'Oui. Vous pouvez l’installer et utiliser toutes ses fonctionnalités gratuitement.'],
      ['Envoie-t-il mes données quelque part ?', 'Non. Il n’a ni serveur ni compte. Vos paramètres, l’empreinte de votre mot de passe et le journal d’activité restent dans le stockage local de votre navigateur.'],
      ['Peut-on simplement le désactiver ?', 'Quand le profil est verrouillé, Lock My Profile bloque les pages internes de Chrome, y compris la page des extensions : impossible de le désactiver depuis là. Il est conçu pour arrêter les personnes qui utilisent votre ordinateur ; quelqu’un qui a le contrôle total de la machine pourrait tout de même le supprimer. Pour une sécurité maximale, associez-le au mot de passe de votre compte sur l’ordinateur.'],
      ['Et si j’oublie mon mot de passe ?', 'Utilisez l’indice ou la question de récupération depuis l’écran de verrouillage. Si vous n’avez défini ni l’un ni l’autre, supprimez puis réinstallez l’extension : ses données sont effacées et vous pouvez repartir de zéro.'],
      ['Fonctionne-t-il en navigation privée ?', 'Oui, si vous l’autorisez : dans chrome://extensions, ouvrez les détails de Lock My Profile et activez « Autoriser en navigation privée ».'],
      ['Sur quels ordinateurs et dans quelles langues ?', 'Google Chrome sous Windows, macOS, Linux et ChromeOS, en français, anglais, espagnol, allemand, italien et portugais.']
    ],
    guidesTitle: 'Guides', guidesText: 'Des réponses pas à pas aux questions les plus fréquentes.',
    finalTitle: 'Votre navigateur, votre jardin secret', finalText: 'Verrouillez votre profil et les sites de votre choix en moins d’une minute.'
  },

  guides: [
    {
      slug: 'mot-de-passe-chrome', tag: 'Chrome', title: 'Comment mettre un mot de passe sur Chrome',
      blurb: 'Chrome ne demande aucun mot de passe à l’ouverture. Voici les deux façons d’en ajouter un, et laquelle choisir.',
      seoTitle: 'Mettre un mot de passe sur Chrome (guide 2026) — Lock My Profile',
      description: 'Chrome n’a pas de mot de passe intégré. Deux façons de verrouiller Chrome par mot de passe : un compte Windows ou Mac, ou une extension, et comment faire.',
      tldr: '<strong>En bref :</strong> Chrome ne demande pas de mot de passe à l’ouverture. Le moyen le plus rapide d’en ajouter un est une extension de verrouillage comme Lock My Profile ; le plus sûr, donner à chaque personne son propre compte sur l’ordinateur. Beaucoup utilisent les deux.',
      body: `
<h2>Chrome propose-t-il un mot de passe à l’ouverture ?</h2>
<p>Non, pas pour ouvrir le navigateur. Chrome permet de créer plusieurs <strong>profils</strong> et de se connecter avec un compte Google, mais aucun des deux ne demande de mot de passe quand quelqu’un ouvre Chrome sur votre ordinateur. Se déconnecter de son compte Google n’aide pas non plus : vos onglets ouverts, votre historique et les sites où vous êtes encore connecté restent sur l’ordinateur.</p>

<h2>Option 1 : un compte à part sur l’ordinateur</h2>
<p>Si plusieurs personnes partagent l’ordinateur, le plus sûr est que chacune ait son propre compte dans le système. Chrome sépare les données de chaque compte, et personne ne peut ouvrir le vôtre sans le mot de passe de l’ordinateur.</p>
<ul>
  <li><strong>Windows :</strong> Paramètres › Comptes › Autres utilisateurs › Ajouter un compte.</li>
  <li><strong>macOS :</strong> Réglages Système › Utilisateurs et groupes › Ajouter un utilisateur.</li>
</ul>
<p>L’inconvénient : chacun doit changer de compte, et cela ne sert à rien si quelqu’un utilise l’ordinateur alors que votre session est encore ouverte.</p>

<h2>Option 2 : une extension de verrouillage (la plus rapide)</h2>
<p>Une extension de verrouillage place un écran à mot de passe devant Chrome. Voici comment faire avec <strong>Lock My Profile</strong>, gratuite et qui garde tout sur votre appareil :</p>
<ol>
  <li>Installez Lock My Profile depuis le Chrome Web Store et cliquez sur son icône dans la barre d’outils.</li>
  <li>Créez votre mot de passe. Ajoutez un <strong>indice</strong> ou une <strong>question de récupération</strong> en cas d’oubli.</li>
  <li>Cliquez sur <strong>Verrouiller maintenant</strong> ou appuyez sur ${k('Ctrl+Maj+L')}. Tous les onglets sont masqués jusqu’à ce que vous saisissiez le mot de passe.</li>
  <li>Dans <strong>Automatisation</strong>, activez <strong>Au démarrage de Chrome</strong> pour que le mot de passe soit demandé à chaque ouverture, et choisissez un délai pour <strong>Verrouiller après inactivité</strong>.</li>
  <li>Dans <strong>Sécurité</strong>, laissez <strong>Bloquer les pages internes</strong> activé : personne ne pourra désactiver l’extension depuis la page des extensions pendant le verrouillage.</li>
</ol>
${fig('lock', 'L’écran de verrouillage de Lock My Profile', 1280, 800, true, 'L’écran de verrouillage masque tous les onglets jusqu’à ce que vous saisissiez votre mot de passe.')}

<h2>Vous voulez protéger seulement certains sites ?</h2>
<p>Inutile de verrouiller tout le navigateur. Dans <strong>Sites protégés</strong>, ajoutez les sites que vous voulez garder privés, comme votre messagerie ou votre banque : ils demanderont le mot de passe même quand le reste de Chrome est libre d’accès. Pour un exemple pas à pas, voyez <a href="${guide(1)}">comment verrouiller WhatsApp Web</a>.</p>

<h2>Conseils pour une configuration solide</h2>
<ul>
  <li>Choisissez un mot de passe que vous n’utilisez nulle part ailleurs.</li>
  <li>Sur un ordinateur partagé, désactivez <strong>Afficher l’indice sur l’écran de verrouillage</strong>, pour que personne ne s’en serve pour deviner.</li>
  <li>Consultez le <strong>Journal</strong> de temps en temps : il liste chaque tentative échouée avec la date et l’heure.</li>
</ul>
<div class="note"><p>Une extension de verrouillage protège votre navigateur des personnes qui utilisent votre ordinateur. Elle ne remplace ni le mot de passe de votre compte sur l’ordinateur ni le chiffrement du disque : pour une sécurité maximale, utilisez les deux.</p></div>`
    },
    {
      slug: 'verrouiller-whatsapp-web', tag: 'WhatsApp Web', title: 'Comment verrouiller WhatsApp Web avec un mot de passe',
      blurb: 'Gardez vos discussions privées sur un ordinateur partagé, sans vous déconnecter à chaque fois.',
      seoTitle: 'Verrouiller WhatsApp Web avec un mot de passe — Lock My Profile',
      description: 'Mettez un mot de passe sur WhatsApp Web : personne ne lit vos discussions sur un PC partagé, et vous restez connecté. Guide pas à pas, onglet caché en option.',
      tldr: '<strong>En bref :</strong> ajoutez <code>web.whatsapp.com</code> comme site protégé dans Lock My Profile. WhatsApp Web demandera votre mot de passe à chaque ouverture et se reverrouillera quand vous changez d’onglet, sans vous déconnecter.',
      body: `
<h2>Pourquoi verrouiller WhatsApp Web ?</h2>
<p>WhatsApp Web reste connecté pendant des semaines. Sur un ordinateur partagé ou au bureau, n’importe qui peut ouvrir l’onglet et lire vos discussions. Se déconnecter à chaque fois fonctionne, mais il faut alors scanner le code QR encore et encore.</p>
<p>WhatsApp Web propose aussi un verrouillage d’écran basique dans ses propres paramètres de confidentialité. Il ne couvre que WhatsApp ; la méthode ci-dessous fonctionne de la même façon pour WhatsApp et pour n’importe quel autre site, et ajoute le reverrouillage automatique, le camouflage de l’onglet et un journal des tentatives échouées.</p>

<h2>Pas à pas</h2>
<ol>
  <li>Installez <strong>Lock My Profile</strong> et créez votre mot de passe.</li>
  <li>Ouvrez ses paramètres (l’icône en forme d’engrenage dans le panneau de l’extension) et allez dans <strong>Sites protégés</strong>.</li>
  <li>Saisissez <code>web.whatsapp.com</code> et cliquez sur <strong>Protéger le site</strong>.</li>
  <li>Sous <strong>Redemander après</strong>, choisissez combien de temps WhatsApp reste ouvert une fois déverrouillé, de 5 minutes à 4 heures.</li>
  <li>Laissez <strong>Verrouiller en changeant d’onglet</strong> activé : dès que vous passez à un autre onglet, WhatsApp se reverrouille.</li>
</ol>
${fig('site-locked', 'Un site protégé qui demande le mot de passe', 1200, 760, true, 'Un site protégé demande le mot de passe avant d’afficher quoi que ce soit.')}

<h2>Cacher que WhatsApp est ouvert</h2>
<p>Activez <strong>Camoufler les onglets protégés</strong> et choisissez <strong>Autre site (vraie adresse)</strong>. Quand vous quittez l’onglet WhatsApp, il cède la place à une page anodine comme Wikipédia, et la barre d’adresse affiche la vraie adresse de ce site. Votre onglet WhatsApp attend dans une fenêtre réduite ; une petite barre de mot de passe sur la page, ou ${k('Ctrl+Maj+U')}, le fait revenir.</p>
${fig('decoy', 'Un onglet camouflé avec la barre de mot de passe', 1200, 760, false, 'L’onglet camouflé affiche un autre site, avec la barre de mot de passe en bas à droite.')}

<h2>Vous pensez que quelqu’un a déjà lu vos discussions ?</h2>
<ul>
  <li>Ouvrez le <strong>Journal</strong> de Lock My Profile pour voir les tentatives de mot de passe échouées, avec la date et l’heure.</li>
  <li>Sur votre téléphone, ouvrez WhatsApp › <strong>Appareils connectés</strong> et déconnectez tout ordinateur que vous ne reconnaissez pas.</li>
</ul>`
    },
    {
      slug: 'verrouiller-profil-chrome', tag: 'Profils', title: 'Comment verrouiller un profil Chrome avec un mot de passe',
      blurb: 'Mettez un mot de passe sur un profil pour que les personnes qui partagent votre ordinateur ne puissent pas l’ouvrir.',
      seoTitle: 'Verrouiller un profil Chrome par mot de passe — Lock My Profile',
      description: 'Les profils Chrome n’ont pas de mot de passe. Voici comment verrouiller un profil Chrome pour que personne d’autre ne l’ouvre, ce qu’il protège et ses limites.',
      tldr: '<strong>En bref :</strong> les profils Chrome n’ont pas de mot de passe, mais vous pouvez en ajouter un en installant Lock My Profile <strong>dans le profil à protéger</strong> et en activant le verrouillage au démarrage de Chrome.',
      body: `
<h2>Qu’est-ce qu’un profil Chrome (et pourquoi n’a-t-il pas de mot de passe) ?</h2>
<p>Un profil est un ensemble distinct de favoris, d’historique, de mots de passe, d’onglets ouverts et d’extensions. Toute personne qui utilise l’ordinateur peut passer à n’importe quel profil depuis l’icône de profil, car Chrome les conçoit comme une commodité, pas comme une mesure de sécurité.</p>

<h2>Comment verrouiller un profil</h2>
<p>Les extensions s’installent profil par profil. Il est donc facile de verrouiller uniquement le profil qui compte pour vous :</p>
<ol>
  <li>Ouvrez Chrome avec le profil à protéger.</li>
  <li>Installez <strong>Lock My Profile</strong> dans ce profil et créez votre mot de passe.</li>
  <li>Dans <strong>Automatisation</strong>, activez <strong>Au démarrage de Chrome</strong> et choisissez un délai pour <strong>Verrouiller après inactivité</strong>.</li>
  <li>Dans <strong>Sécurité</strong>, laissez <strong>Bloquer les pages internes</strong> activé : l’extension ne pourra pas être désactivée depuis la page des extensions tant que le profil est verrouillé.</li>
  <li>Pour verrouiller d’autres profils, répétez ces étapes dans chacun d’eux. Chaque profil peut avoir son propre mot de passe.</li>
</ol>
${fig('opt-automation', 'Les paramètres d’automatisation de Lock My Profile', 1200, 780, false, 'Choisissez quand le profil se verrouille tout seul.')}

<h2>Ce qu’il protège, et ses limites</h2>
<p>Quand le profil est verrouillé, ses onglets, son historique, ses sessions enregistrées et les sites où vous êtes connecté sont masqués derrière l’écran de verrouillage. À savoir :</p>
<ul>
  <li>Quelqu’un pourrait encore ouvrir une fenêtre <strong>Invité</strong> ou créer un nouveau profil. Il n’y verra aucune de vos données, mais pourra naviguer.</li>
  <li>Pour empêcher cela aussi, donnez à chacun son propre compte sur l’ordinateur ; sur les ordinateurs gérés par une entreprise ou un établissement scolaire, un administrateur peut désactiver le mode Invité et l’ajout de profils grâce aux règles Chrome.</li>
  <li>Une extension de verrouillage protège des personnes qui utilisent votre ordinateur. Elle ne remplace ni le mot de passe de votre compte sur l’ordinateur ni le chiffrement du disque.</li>
</ul>

<h2>Ou verrouillez seulement certains sites</h2>
<p>Si vous ne voulez pas verrouiller tout le profil, protégez seulement quelques sites, comme votre messagerie ou <a href="${guide(1)}">WhatsApp Web</a>. Ils demanderont le mot de passe pendant que le reste du profil fonctionne normalement.</p>`
    }
  ],

  bye: {
    title: 'Lock My Profile a été désinstallé', h1: 'Lock My Profile a été désinstallé',
    lead: 'Ses données ont été supprimées de votre navigateur : mot de passe, paramètres et journal ont disparu.',
    ask: 'Pouvez-vous nous dire pourquoi ? Cela prend 30 secondes et nous aide à l’améliorer.', askBtn: 'Nous dire pourquoi',
    helpTitle: 'Si quelque chose n’a pas fonctionné', help: [
      ['Mot de passe oublié ?', 'Une réinstallation repart de zéro. La prochaine fois, ajoutez un indice ou une question de récupération en créant votre mot de passe.'],
      ['Il se verrouillait trop souvent ?', 'Dans les paramètres, vous pouvez désactiver le verrouillage au démarrage ou au changement d’onglet, et choisir un délai de verrouillage automatique plus long.'],
      ['Vous ne saviez pas comment l’utiliser ?', `Nos <a href="${guide(0)}">guides pas à pas</a> expliquent les principaux usages.`]
    ],
    again: 'Vous avez changé d’avis ?'
  }
});
