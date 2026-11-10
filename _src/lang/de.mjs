// Deutsch
export default ({ k, fig, guide }) => ({
  code: 'de', name: 'Deutsch', locale: 'de_DE', date: '10. November 2026',
  paths: { home: '/de/', guides: '/de/anleitungen/', bye: '/de/auf-wiedersehen/' },
  ui: {
    features: 'Funktionen', privacy: 'Datenschutz', guides: 'Anleitungen', language: 'Sprache', skip: 'Zum Inhalt springen', nav: 'Hauptmenü',
    add: 'Zu Chrome hinzufügen – kostenlos', soon: 'Bald im Chrome Web Store', how: 'So funktioniert’s',
    policy: 'Datenschutzerklärung', tm: 'Google Chrome ist eine Marke von Google LLC. Lock My Profile steht in keiner Verbindung zu Google.',
    updated: 'Aktualisiert', crumbsHome: 'Startseite', moreGuides: 'Weitere Anleitungen',
    ctaText: 'Kostenlose Browser-Erweiterung: Sperren Sie Ihr Profil und ausgewählte Websites mit einem Passwort.',
    notFound: 'Seite nicht gefunden', notFoundText: 'Diese Seite gibt es nicht. Versuchen Sie es mit der Startseite oder einer unserer Anleitungen.'
  },
  ids: { features: 'funktionen', privacy: 'datenschutz', how: 'so-gehts', guides: 'anleitungen' },

  home: {
    title: 'Lock My Profile — Chrome und Websites mit Passwort schützen',
    description: 'Kostenlose Erweiterung: Chrome-Profil und ausgewählte Websites mit Passwort schützen. Auto-Sperre, getarnte Tabs, Einbruchsprotokoll. Ohne Konto, alles lokal.',
    eyebrow: 'Kostenlose Browser-Erweiterung',
    h1: 'Sperren Sie Ihren Browser mit <em>einem Passwort</em>',
    lead: 'Lock My Profile schützt Ihr Chrome-Profil und ausgewählte Websites mit einem Passwort und kann einen gesperrten Tab als harmlose Seite tarnen. Ohne Konto. Nichts verlässt Ihr Gerät.',
    trust: ['Kostenlos', 'Ohne Konto', 'Funktioniert offline', '6 Sprachen'],
    heroAlt: 'Der Sperrbildschirm von Lock My Profile verdeckt den Browser',
    featuresTitle: 'Alles, was Ihren Browser privat hält', featuresText: 'Für gemeinsam genutzte Computer, das Büro oder alle, die sich an Ihren Platz setzen, während Sie weg sind.',
    features: [
      ['lock', 'Ganzes Profil sperren', `Alle offenen Tabs verschwinden hinter einem Sperrbildschirm, bis Sie Ihr Passwort eingeben. Sofort sperren mit ${k('Strg+Umschalt+L')}.`],
      ['globe', 'Nur einzelne Websites schützen', 'E-Mail, Chats oder Online-Banking fragen nach dem Passwort, auch wenn der Browser entsperrt ist.'],
      ['clock', 'Automatische Sperre', 'Nach ein paar Minuten Inaktivität, beim Start von Chrome, bei gesperrtem Computer oder minimiertem Fenster.'],
      ['mask', 'Getarnte Tabs', 'Ein gesperrter Tab kann wie eine andere Website aussehen oder gegen eine echte, harmlose Seite getauscht werden.'],
      ['list', 'Einbruchsprotokoll', 'Jedes falsche Passwort wird mit Datum und Uhrzeit festgehalten. Export als CSV möglich.'],
      ['shield', 'Schutz vor Brute-Force', 'Nach 5 Fehlversuchen (einstellbar) folgt eine Zeitsperre, die sich jedes Mal verdoppelt, bis zu 15 Minuten.']
    ],
    camoTag: 'Getarnte Tabs', camoTitle: 'Kurz weg? Andere sehen nur Wikipedia.',
    camoText: 'Verlassen Sie einen geschützten Tab, wird er gegen eine harmlose Seite getauscht: Die Adressleiste zeigt die echte Adresse dieser Website. Ihr eigener Tab wartet unverändert in einem minimierten Fenster, und eine kleine Passwortleiste auf der Seite holt ihn zurück.',
    camoChecks: ['Seite wählen: Wikipedia, YouTube, Google, Nachrichten und mehr', 'Oder den Tab behalten und nur Titel und Symbol tarnen', `${k('Strg+Umschalt+U')} holt den echten Tab zurück`],
    camoAlt: 'Ein getarnter Tab zeigt eine Rezeptseite mit der Passwortleiste von Lock My Profile',
    sitesTag: 'Geschützte Websites', sitesTitle: 'Nur sperren, was wichtig ist',
    sitesText: 'Fügen Sie die Websites hinzu, die privat bleiben sollen. Sie fragen bei jedem Öffnen nach dem Passwort, während der Rest des Browsers frei nutzbar bleibt.',
    sitesChecks: ['Inklusive Subdomains', 'Bleibt so lange offen, wie Sie wählen: 5 Minuten bis 4 Stunden', 'Sperrt sich wieder, sobald Sie den Tab wechseln'],
    sitesAlt: 'Eine geschützte Website fragt nach dem Passwort', popupAlt: 'Das Pop-up von Lock My Profile',
    logTag: 'Einbruchsprotokoll', logTitle: 'Sehen, wer es versucht hat',
    logText: 'Lock My Profile protokolliert jedes Sperren, Entsperren und jeden Fehlversuch. So wissen Sie, ob jemand Ihren Browser öffnen wollte, während Sie weg waren.',
    logChecks: ['Datum und Uhrzeit jedes Versuchs', 'Export als CSV', 'Sicherheitswert mit Tipps für einen stärkeren Schutz'],
    logAlt: 'Das Sicherheitsprotokoll mit fehlgeschlagenen Passworteingaben',
    privacyTitle: 'Privat von Grund auf', privacyText: 'Ihr Passwort und Ihre Aktivität bleiben auf Ihrem Gerät. Immer.',
    privacy: [
      ['cloud', 'Kein Konto, keine Server', 'Keine Registrierung, keine Datenübertragung. Keine Analyse, keine Werbung, kein Tracking.'],
      ['key', 'Ihr Passwort wird nie gespeichert', 'Gespeichert wird nur ein gesalzener PBKDF2-SHA256-Hash (210.000 Iterationen) im lokalen Speicher Ihres Browsers.'],
      ['info', 'Ehrlich zu den Grenzen', 'Die Erweiterung schützt Ihren Browser vor Menschen, die Ihren Computer benutzen. Für vollen Schutz nutzen Sie zusätzlich das Passwort Ihres Benutzerkontos.']
    ],
    privacyLink: 'Datenschutzerklärung lesen',
    howTitle: 'In weniger als einer Minute startklar',
    steps: [['Zu Chrome hinzufügen', 'Installieren Sie Lock My Profile kostenlos aus dem Chrome Web Store.'], ['Passwort erstellen', 'Legen Sie einen Hinweis oder eine Sicherheitsfrage fest, falls Sie es vergessen.'], ['Festlegen, was gesperrt wird', 'Das ganze Profil, einzelne Websites oder beides – und wann die Sperre automatisch greift.']],
    faqTitle: 'Häufige Fragen', faq: [
      ['Ist Lock My Profile kostenlos?', 'Ja. Sie können die Erweiterung kostenlos installieren und alle Funktionen nutzen.'],
      ['Werden meine Daten irgendwohin gesendet?', 'Nein. Es gibt weder Server noch Konto. Ihre Einstellungen, der Hash Ihres Passworts und das Aktivitätsprotokoll bleiben im lokalen Speicher Ihres Browsers.'],
      ['Kann man die Erweiterung einfach deaktivieren?', 'Solange das Profil gesperrt ist, blockiert Lock My Profile die internen Seiten von Chrome, auch die Erweiterungsseite. Dort lässt sie sich also nicht abschalten. Sie soll Menschen aufhalten, die Ihren Computer benutzen; wer volle Kontrolle über den Computer hat, könnte sie dennoch entfernen. Kombinieren Sie sie für maximale Sicherheit mit dem Passwort Ihres Benutzerkontos.'],
      ['Was, wenn ich mein Passwort vergesse?', 'Nutzen Sie den Hinweis oder die Sicherheitsfrage auf dem Sperrbildschirm. Haben Sie beides nicht eingerichtet, entfernen Sie die Erweiterung und installieren Sie sie neu: Dabei werden ihre Daten gelöscht und Sie können neu beginnen.'],
      ['Funktioniert sie auch im Inkognitomodus?', 'Ja, wenn Sie es erlauben: Öffnen Sie unter chrome://extensions die Details von Lock My Profile und aktivieren Sie „Im Inkognitomodus zulassen“.'],
      ['Für welche Sprachen und Computer ist sie verfügbar?', 'Google Chrome unter Windows, macOS, Linux und ChromeOS, auf Deutsch, Englisch, Spanisch, Französisch, Italienisch und Portugiesisch.']
    ],
    guidesTitle: 'Anleitungen', guidesText: 'Schritt-für-Schritt-Antworten auf die häufigsten Fragen.',
    finalTitle: 'Ihr Browser, Ihre Sache', finalText: 'Sperren Sie Ihr Profil und ausgewählte Websites in weniger als einer Minute.'
  },

  guides: [
    {
      slug: 'chrome-mit-passwort-schuetzen', tag: 'Chrome', title: 'Chrome mit Passwort schützen: So geht’s',
      blurb: 'Chrome hat kein eigenes Passwort. Hier sind die zwei Wege, eines einzurichten, und welcher sich wofür eignet.',
      seoTitle: 'Chrome mit Passwort schützen (Anleitung 2026) — Lock My Profile',
      description: 'Chrome hat keinen eingebauten Passwortschutz. So schützen Sie Chrome mit Passwort: per eigenem Benutzerkonto oder Sperr-Erweiterung, Schritt für Schritt.',
      tldr: '<strong>Kurz gesagt:</strong> Chrome fragt beim Start nach keinem Passwort. Am schnellsten richten Sie eines mit einer Sperr-Erweiterung wie Lock My Profile ein; am sichersten ist ein eigenes Benutzerkonto auf dem Computer für jede Person. Viele nutzen beides.',
      body: `
<h2>Hat Chrome eine Passwort-Option?</h2>
<p>Nicht für das Öffnen des Browsers. In Chrome können Sie mehrere <strong>Profile</strong> anlegen und sich mit einem Google-Konto anmelden, aber beides verlangt kein Passwort, wenn jemand Chrome auf Ihrem Computer öffnet. Auch das Abmelden vom Google-Konto hilft nicht: Offene Tabs, Verlauf und Websites, bei denen Sie noch angemeldet sind, bleiben auf dem Computer.</p>

<h2>Weg 1: ein eigenes Benutzerkonto auf dem Computer</h2>
<p>Teilen sich mehrere Personen einen Computer, ist ein eigenes Konto im Betriebssystem für jede Person die sicherste Lösung. Chrome hält die Daten jedes Kontos getrennt, und ohne das Computer-Passwort kann niemand Ihres öffnen.</p>
<ul>
  <li><strong>Windows:</strong> Einstellungen › Konten › Andere Benutzer › Konto hinzufügen.</li>
  <li><strong>macOS:</strong> Systemeinstellungen › Benutzer:innen &amp; Gruppen › Benutzer:in hinzufügen.</li>
</ul>
<p>Der Nachteil: Alle müssen das Konto wechseln, und es hilft nicht, wenn jemand den Computer benutzt, während Sie noch angemeldet sind.</p>

<h2>Weg 2: eine Sperr-Erweiterung (am schnellsten)</h2>
<p>Eine Sperr-Erweiterung legt einen Passwort-Bildschirm vor Chrome. So geht es mit <strong>Lock My Profile</strong>, das kostenlos ist und alles auf Ihrem Gerät speichert:</p>
<ol>
  <li>Installieren Sie Lock My Profile aus dem Chrome Web Store und klicken Sie auf das Symbol in der Symbolleiste.</li>
  <li>Erstellen Sie Ihr Passwort. Legen Sie einen <strong>Hinweis</strong> oder eine <strong>Sicherheitsfrage</strong> fest, falls Sie es vergessen.</li>
  <li>Klicken Sie auf <strong>Jetzt sperren</strong> oder drücken Sie ${k('Strg+Umschalt+L')}. Alle Tabs bleiben verdeckt, bis Sie das Passwort eingeben.</li>
  <li>Aktivieren Sie unter <strong>Automatisierung</strong> die Option <strong>Beim Start von Chrome</strong>, damit bei jedem Öffnen nach dem Passwort gefragt wird, und wählen Sie eine Zeit für <strong>Bei Inaktivität sperren</strong>.</li>
  <li>Lassen Sie unter <strong>Sicherheit</strong> die Option <strong>Interne Seiten blockieren</strong> aktiviert, damit niemand die Erweiterung im gesperrten Zustand über die Erweiterungsseite abschalten kann.</li>
</ol>
${fig('lock', 'Der Sperrbildschirm von Lock My Profile', 1280, 800, true, 'Der Sperrbildschirm verdeckt alle Tabs, bis Sie Ihr Passwort eingeben.')}

<h2>Nur bestimmte Websites schützen?</h2>
<p>Sie müssen nicht den ganzen Browser sperren. Fügen Sie unter <strong>Geschützte Websites</strong> die Seiten hinzu, die privat bleiben sollen, etwa Ihr E-Mail-Postfach oder Online-Banking. Sie fragen dann nach dem Passwort, während der Rest von Chrome frei nutzbar bleibt. Ein Beispiel Schritt für Schritt: <a href="${guide(1)}">WhatsApp Web sperren</a>.</p>

<h2>Tipps für einen starken Schutz</h2>
<ul>
  <li>Verwenden Sie ein Passwort, das Sie nirgendwo sonst nutzen.</li>
  <li>Deaktivieren Sie auf einem gemeinsam genutzten Computer <strong>Hinweis auf dem Sperrbildschirm zeigen</strong>, damit niemand daraus Ihr Passwort errät.</li>
  <li>Werfen Sie ab und zu einen Blick ins <strong>Protokoll</strong>: Es listet jeden Fehlversuch mit Datum und Uhrzeit auf.</li>
</ul>
<div class="note"><p>Eine Sperr-Erweiterung schützt Ihren Browser vor Menschen, die Ihren Computer benutzen. Sie ersetzt weder das Passwort Ihres Benutzerkontos noch die Festplattenverschlüsselung. Für maximale Sicherheit nutzen Sie beides.</p></div>`
    },
    {
      slug: 'whatsapp-web-sperren', tag: 'WhatsApp Web', title: 'WhatsApp Web mit Passwort schützen',
      blurb: 'Halten Sie Ihre Chats auf einem gemeinsam genutzten Computer privat, ohne sich jedes Mal abzumelden.',
      seoTitle: 'WhatsApp Web mit Passwort schützen und sperren — Lock My Profile',
      description: 'WhatsApp Web mit Passwort sperren, damit am geteilten PC niemand Ihre Chats liest – ohne Abmelden. Schritt-für-Schritt-Anleitung, auch zum Verbergen des Tabs.',
      tldr: '<strong>Kurz gesagt:</strong> Fügen Sie <code>web.whatsapp.com</code> in Lock My Profile als geschützte Website hinzu. WhatsApp Web fragt dann bei jedem Öffnen nach Ihrem Passwort und sperrt sich beim Tabwechsel erneut, ohne Sie abzumelden.',
      body: `
<h2>Warum WhatsApp Web sperren?</h2>
<p>WhatsApp Web bleibt wochenlang angemeldet. Auf einem gemeinsam genutzten oder dienstlichen Computer kann jeder, der den Tab öffnet, Ihre Chats lesen. Sich jedes Mal abzumelden funktioniert, aber dann müssen Sie den QR-Code immer wieder scannen.</p>
<p>WhatsApp Web bietet in den eigenen Datenschutzeinstellungen auch eine einfache Bildschirmsperre. Die gilt aber nur für WhatsApp. Die Methode unten funktioniert für WhatsApp und jede andere Website gleich und bringt zusätzlich automatisches Wiedersperren, getarnte Tabs und ein Protokoll der Fehlversuche mit.</p>

<h2>Schritt für Schritt</h2>
<ol>
  <li>Installieren Sie <strong>Lock My Profile</strong> und erstellen Sie Ihr Passwort.</li>
  <li>Öffnen Sie die Einstellungen (das Zahnrad im Pop-up) und gehen Sie zu <strong>Geschützte Websites</strong>.</li>
  <li>Geben Sie <code>web.whatsapp.com</code> ein und klicken Sie auf <strong>Website schützen</strong>.</li>
  <li>Wählen Sie unter <strong>Erneut fragen nach</strong>, wie lange WhatsApp nach dem Entsperren offen bleibt: 5 Minuten bis 4 Stunden.</li>
  <li>Lassen Sie <strong>Beim Tabwechsel sperren</strong> aktiviert: Sobald Sie zu einem anderen Tab wechseln, ist WhatsApp wieder gesperrt.</li>
</ol>
${fig('site-locked', 'Eine geschützte Website fragt nach dem Passwort', 1200, 760, true, 'Eine geschützte Website fragt nach dem Passwort, bevor sie etwas anzeigt.')}

<h2>Verbergen, dass WhatsApp überhaupt offen ist</h2>
<p>Aktivieren Sie <strong>Geschützte Tabs tarnen</strong> und wählen Sie <strong>Andere Website (echte Adresse)</strong>. Verlassen Sie den WhatsApp-Tab, wird er gegen eine harmlose Seite wie Wikipedia getauscht, und die Adressleiste zeigt deren echte Adresse. Ihr WhatsApp-Tab wartet in einem minimierten Fenster; eine kleine Passwortleiste auf der Seite oder ${k('Strg+Umschalt+U')} holt ihn zurück.</p>
${fig('decoy', 'Ein getarnter Tab mit der Passwortleiste', 1200, 760, false, 'Der getarnte Tab zeigt eine andere Website, unten rechts die Passwortleiste.')}

<h2>Hat schon jemand Ihre Chats gelesen?</h2>
<ul>
  <li>Öffnen Sie in Lock My Profile das <strong>Protokoll</strong>, um Fehlversuche mit Datum und Uhrzeit zu sehen.</li>
  <li>Öffnen Sie auf dem Smartphone WhatsApp › <strong>Verknüpfte Geräte</strong> und melden Sie jeden Computer ab, den Sie nicht kennen.</li>
</ul>`
    },
    {
      slug: 'chrome-profil-mit-passwort-schuetzen', tag: 'Profile', title: 'Chrome-Profil mit Passwort schützen',
      blurb: 'Sperren Sie ein Profil mit einem Passwort, damit andere am selben Computer es nicht öffnen können.',
      seoTitle: 'Chrome-Profil mit Passwort schützen und sperren — Lock My Profile',
      description: 'Chrome-Profile haben kein Passwort. So schützen Sie ein Chrome-Profil mit Passwort, damit andere es nicht öffnen – was es schützt und wo die Grenzen liegen.',
      tldr: '<strong>Kurz gesagt:</strong> Chrome-Profile haben kein Passwort. Sie können aber eines hinzufügen, indem Sie Lock My Profile <strong>im Profil installieren, das Sie schützen möchten</strong>, und die Sperre beim Start von Chrome aktivieren.',
      body: `
<h2>Was ein Chrome-Profil ist (und warum es kein Passwort hat)</h2>
<p>Ein Profil ist ein eigener Satz aus Lesezeichen, Verlauf, Passwörtern, offenen Tabs und Erweiterungen. Wer den Computer benutzt, kann über das Profilsymbol zu jedem Profil wechseln, denn Chrome versteht Profile als Komfortfunktion, nicht als Sicherheitsmaßnahme.</p>

<h2>So sperren Sie ein Profil</h2>
<p>Erweiterungen werden pro Profil installiert. Deshalb lässt sich ganz einfach nur das Profil sperren, auf das es Ihnen ankommt:</p>
<ol>
  <li>Öffnen Sie Chrome mit dem Profil, das Sie schützen möchten.</li>
  <li>Installieren Sie <strong>Lock My Profile</strong> in diesem Profil und erstellen Sie Ihr Passwort.</li>
  <li>Aktivieren Sie unter <strong>Automatisierung</strong> die Option <strong>Beim Start von Chrome</strong> und wählen Sie eine Zeit für <strong>Bei Inaktivität sperren</strong>.</li>
  <li>Lassen Sie unter <strong>Sicherheit</strong> die Option <strong>Interne Seiten blockieren</strong> aktiviert, damit sich die Erweiterung bei gesperrtem Profil nicht über die Erweiterungsseite abschalten lässt.</li>
  <li>Für weitere Profile wiederholen Sie die Schritte im jeweiligen Profil. Jedes Profil kann ein eigenes Passwort haben.</li>
</ol>
${fig('opt-automation', 'Automatisierungs-Einstellungen von Lock My Profile', 1200, 780, false, 'Legen Sie fest, wann sich das Profil von selbst sperrt.')}

<h2>Was geschützt ist – und wo die Grenzen liegen</h2>
<p>Ist das Profil gesperrt, liegen seine Tabs, der Verlauf, gespeicherte Sitzungen und die Websites, bei denen Sie angemeldet sind, hinter dem Sperrbildschirm. Beachten Sie:</p>
<ul>
  <li>Jemand könnte trotzdem ein Fenster im <strong>Gastmodus</strong> öffnen oder ein neues Profil anlegen. Dort sieht er keine Ihrer Daten, kann aber surfen.</li>
  <li>Wenn Sie auch das verhindern möchten, geben Sie jeder Person ein eigenes Benutzerkonto auf dem Computer. Auf Computern, die von einem Unternehmen oder einer Schule verwaltet werden, können Administratoren den Gastmodus und das Hinzufügen von Profilen per Chrome-Richtlinien abschalten.</li>
  <li>Eine Sperr-Erweiterung schützt vor Menschen, die Ihren Computer benutzen. Sie ersetzt weder das Passwort Ihres Benutzerkontos noch die Festplattenverschlüsselung.</li>
</ul>

<h2>Oder nur einzelne Websites sperren</h2>
<p>Wenn Sie nicht das ganze Profil sperren möchten, schützen Sie nur einzelne Websites, etwa Ihr E-Mail-Postfach oder <a href="${guide(1)}">WhatsApp Web</a>. Sie fragen nach dem Passwort, während der Rest des Profils normal funktioniert.</p>`
    }
  ],

  bye: {
    title: 'Lock My Profile wurde entfernt', h1: 'Lock My Profile wurde entfernt',
    lead: 'Die Daten der Erweiterung wurden aus Ihrem Browser gelöscht: Passwort, Einstellungen und Protokoll sind weg.',
    ask: 'Verraten Sie uns, warum? Das dauert 30 Sekunden und hilft uns, besser zu werden.', askBtn: 'Grund nennen',
    helpTitle: 'Falls etwas schiefgelaufen ist', help: [
      ['Passwort vergessen?', 'Nach einer Neuinstallation beginnen Sie von vorn. Legen Sie beim nächsten Mal einen Hinweis oder eine Sicherheitsfrage fest.'],
      ['Zu oft gesperrt?', 'In den Einstellungen können Sie die Sperre beim Start oder beim Tabwechsel abschalten und eine längere Zeit für die automatische Sperre wählen.'],
      ['Nicht sicher, wie es funktioniert?', `Unsere <a href="${guide(0)}">Schritt-für-Schritt-Anleitungen</a> erklären die wichtigsten Einsatzzwecke.`]
    ],
    again: 'Doch anders entschieden?'
  }
});
