// Italiano
export default ({ k, fig, guide }) => ({
  code: 'it', name: 'Italiano', locale: 'it_IT', date: '10 novembre 2026',
  paths: { home: '/it/', guides: '/it/guide/', bye: '/it/arrivederci/' },
  ui: {
    features: 'Funzioni', privacy: 'Privacy', guides: 'Guide', language: 'Lingua', skip: 'Vai al contenuto', nav: 'Principale',
    add: 'Aggiungi a Chrome, è gratis', soon: 'Presto sul Chrome Web Store', how: 'Guarda come funziona',
    policy: 'Informativa sulla privacy', tm: 'Google Chrome è un marchio di Google LLC. Lock My Profile non è affiliato a Google.',
    updated: 'Aggiornato', crumbsHome: 'Home', moreGuides: 'Altre guide',
    ctaText: 'Estensione gratuita: blocca il tuo profilo e i siti che scegli con una sola password.',
    notFound: 'Pagina non trovata', notFoundText: 'Questa pagina non esiste. Prova dalla home page o da una delle nostre guide.'
  },
  ids: { features: 'funzioni', privacy: 'privacy', how: 'come-funziona', guides: 'guide' },

  home: {
    title: 'Lock My Profile — Metti la password a Chrome e ai siti che scegli',
    description: 'Estensione gratuita per bloccare Chrome con password: il profilo e i siti che scegli. Blocco automatico, schede camuffate e registro intrusi. Senza account.',
    eyebrow: 'Estensione gratuita per il browser',
    h1: 'Blocca il browser con <em>una password</em>',
    lead: 'Lock My Profile mette la password al tuo profilo di Chrome e ai siti che scegli, e può travestire una scheda bloccata da pagina innocua. Nessun account. Niente lascia il tuo dispositivo.',
    trust: ['Gratis', 'Senza account', 'Funziona offline', '6 lingue'],
    heroAlt: 'La schermata di blocco di Lock My Profile che copre il browser',
    featuresTitle: 'Tutto ciò che serve per un browser davvero privato', featuresText: 'Per computer condivisi, l’ufficio o chiunque si sieda al tuo posto quando non ci sei.',
    features: [
      ['lock', 'Blocca l’intero profilo', `Tutte le schede aperte restano nascoste dietro una schermata di blocco finché non scrivi la password. Blocco immediato con ${k('Ctrl+Maiusc+L')}.`],
      ['globe', 'Proteggi solo alcuni siti', 'Email, chat o banca chiedono la password anche quando il browser è sbloccato.'],
      ['clock', 'Blocco automatico', 'Dopo qualche minuto di inattività, all’avvio di Chrome, quando blocchi il computer o riduci a icona la finestra.'],
      ['mask', 'Schede camuffate', 'Una scheda bloccata può sembrare un altro sito o essere sostituita da una pagina vera e innocua.'],
      ['list', 'Registro degli intrusi', 'Ogni password sbagliata viene registrata con data e ora. Puoi esportarlo in CSV.'],
      ['shield', 'Protezione anti forza bruta', 'Dopo 5 tentativi falliti (valore modificabile) scatta un’attesa che raddoppia ogni volta, fino a 15 minuti.']
    ],
    camoTag: 'Schede camuffate', camoTitle: 'Ti alzi. Vedranno solo Wikipedia.',
    camoText: 'Quando esci da una scheda protetta, viene sostituita da una pagina innocua: la barra degli indirizzi mostra l’indirizzo reale dell’altro sito. La tua scheda attende intatta in una finestra ridotta a icona e una piccola barra della password sulla pagina la riporta indietro.',
    camoChecks: ['Scegli la pagina: Wikipedia, YouTube, Google, notizie e altro', 'Oppure tieni la scheda e camuffa solo titolo e icona', `${k('Ctrl+Maiusc+U')} riporta la scheda vera`],
    camoAlt: 'Una scheda camuffata che mostra un sito di ricette con la barra della password di Lock My Profile',
    sitesTag: 'Siti protetti', sitesTitle: 'Blocca solo ciò che conta',
    sitesText: 'Aggiungi i siti che vuoi tenere privati. Chiedono la password ogni volta che si aprono, mentre il resto del browser si usa normalmente.',
    sitesChecks: ['Sottodomini inclusi', 'Resta aperto per il tempo che scegli, da 5 minuti a 4 ore', 'Si blocca di nuovo appena cambi scheda'],
    sitesAlt: 'Un sito protetto che chiede la password', popupAlt: 'Il pannello di Lock My Profile',
    logTag: 'Registro degli intrusi', logTitle: 'Scopri chi ha provato a entrare',
    logText: 'Lock My Profile registra ogni blocco, sblocco e tentativo fallito, così sai se qualcuno ha provato ad aprire il tuo browser mentre non c’eri.',
    logChecks: ['Data e ora di ogni tentativo', 'Esportazione in CSV', 'Un punteggio di sicurezza con consigli per rafforzare la configurazione'],
    logAlt: 'Il registro di sicurezza con i tentativi di password falliti',
    privacyTitle: 'Privato per davvero', privacyText: 'La tua password e la tua attività restano sul tuo dispositivo. Sempre.',
    privacy: [
      ['cloud', 'Niente account né server', 'Non serve registrarsi e non viene inviato nulla da nessuna parte. Niente statistiche, pubblicità o tracciamento.'],
      ['key', 'La password non viene mai salvata', 'Viene conservato solo un hash PBKDF2-SHA256 con salt (210.000 iterazioni), nella memoria locale del browser.'],
      ['info', 'Onesto sui propri limiti', 'Protegge il browser da chi usa il tuo computer. Per la massima sicurezza, usa anche la password del tuo account sul computer.']
    ],
    privacyLink: 'Leggi l’informativa sulla privacy',
    howTitle: 'Pronto in meno di un minuto',
    steps: [['Aggiungilo a Chrome', 'Installa Lock My Profile dal Chrome Web Store. È gratis.'], ['Crea la tua password', 'Aggiungi un suggerimento o una domanda di recupero, nel caso la dimentichi.'], ['Scegli cosa bloccare', 'L’intero profilo, alcuni siti o entrambi, e quando deve bloccarsi da solo.']],
    faqTitle: 'Domande frequenti', faq: [
      ['Lock My Profile è gratis?', 'Sì. Puoi installarlo e usare tutte le funzioni gratuitamente.'],
      ['Invia i miei dati da qualche parte?', 'No. Non ha server né account. Le impostazioni, l’hash della password e il registro delle attività restano nella memoria locale del browser.'],
      ['Qualcuno può semplicemente disattivarlo?', 'Mentre il profilo è bloccato, Lock My Profile blocca le pagine interne di Chrome, compresa quella delle estensioni, quindi non si può disattivare da lì. È pensato per fermare chi usa il tuo computer; chi ha il pieno controllo del computer potrebbe comunque rimuoverlo, quindi abbinalo alla password del tuo account sul computer per la massima sicurezza.'],
      ['E se dimentico la password?', 'Usa il suggerimento o la domanda di recupero dalla schermata di blocco. Se non hai impostato nessuno dei due, rimuovi e reinstalla l’estensione: i suoi dati vengono cancellati e puoi ricominciare.'],
      ['Funziona nelle finestre di navigazione in incognito?', 'Sì, se lo consenti: in chrome://extensions apri i dettagli di Lock My Profile e attiva «Consenti in modalità di navigazione in incognito».'],
      ['In quali lingue e su quali computer funziona?', 'Google Chrome su Windows, macOS, Linux e ChromeOS, in italiano, inglese, spagnolo, francese, tedesco e portoghese.']
    ],
    guidesTitle: 'Guide', guidesText: 'Risposte passo passo alle domande più comuni.',
    finalTitle: 'Il tuo browser, affari tuoi', finalText: 'Blocca il tuo profilo e i siti che scegli in meno di un minuto.'
  },

  guides: [
    {
      slug: 'mettere-password-a-chrome', tag: 'Chrome', title: 'Come mettere la password a Chrome',
      blurb: 'Chrome non ha una password propria. Ecco i due modi per aggiungerla e quale scegliere.',
      seoTitle: 'Come mettere la password a Chrome (guida 2026) — Lock My Profile',
      description: 'Chrome non chiede una password all’apertura. I due modi per mettere la password a Chrome, un account separato sul PC o un’estensione, e come configurarli.',
      tldr: '<strong>In breve:</strong> Chrome non chiede una password quando si apre. Il modo più rapido per aggiungerla è un’estensione di blocco come Lock My Profile; il più sicuro è dare a ogni persona il proprio account sul computer. Molti usano entrambi.',
      body: `
<h2>Chrome ha un’opzione per la password?</h2>
<p>Non per aprire il browser. Chrome permette di creare più <strong>profili</strong> e di accedere con un account Google, ma nessuno dei due chiede una password quando qualcuno apre Chrome sul tuo computer. Nemmeno uscire dall’account Google serve: le schede aperte, la cronologia e i siti in cui hai ancora l’accesso restano sul computer.</p>

<h2>Opzione 1: un account separato sul computer</h2>
<p>Se più persone condividono il computer, la soluzione più sicura è un account per ciascuno nel sistema operativo. Chrome tiene separati i dati di ogni account e nessuno può aprire il tuo senza la password del computer.</p>
<ul>
  <li><strong>Windows:</strong> Impostazioni › Account › Altri utenti › Aggiungi account.</li>
  <li><strong>macOS:</strong> Impostazioni di Sistema › Utenti e gruppi › Aggiungi utente.</li>
</ul>
<p>Lo svantaggio: tutti devono cambiare account, e non serve se qualcuno usa il computer mentre la tua sessione è ancora aperta.</p>

<h2>Opzione 2: un’estensione di blocco (la più rapida)</h2>
<p>Un’estensione di blocco mette una schermata con password davanti a Chrome. Ecco come fare con <strong>Lock My Profile</strong>, che è gratis e tiene tutto sul tuo dispositivo:</p>
<ol>
  <li>Installa Lock My Profile dal Chrome Web Store e fai clic sulla sua icona nella barra degli strumenti.</li>
  <li>Crea la tua password. Aggiungi un <strong>suggerimento</strong> o una <strong>domanda di recupero</strong>, nel caso la dimentichi.</li>
  <li>Fai clic su <strong>Blocca ora</strong> o premi ${k('Ctrl+Maiusc+L')}. Tutte le schede restano coperte finché non scrivi la password.</li>
  <li>In <strong>Automazione</strong>, attiva <strong>All’avvio di Chrome</strong> perché chieda la password ogni volta che Chrome si apre, e scegli un tempo per il <strong>Blocco per inattività</strong>.</li>
  <li>In <strong>Sicurezza</strong>, lascia attivo <strong>Blocca le pagine interne</strong>, così nessuno può disattivare l’estensione dalla pagina delle estensioni mentre è bloccato.</li>
</ol>
${fig('lock', 'La schermata di blocco di Lock My Profile', 1280, 800, true, 'La schermata di blocco copre tutte le schede finché non scrivi la password.')}

<h2>Vuoi proteggere solo alcuni siti?</h2>
<p>Non serve bloccare tutto il browser. In <strong>Siti protetti</strong>, aggiungi i siti che vuoi tenere privati, come l’email o la banca: chiederanno la password anche mentre il resto di Chrome si usa normalmente. Guarda <a href="${guide(1)}">come bloccare WhatsApp Web</a> per un esempio passo passo.</p>

<h2>Consigli per una configurazione sicura</h2>
<ul>
  <li>Usa una password che non usi da nessun’altra parte.</li>
  <li>Su un computer condiviso, disattiva <strong>Mostra il suggerimento nella schermata di blocco</strong>, così nessuno può indovinarla da lì.</li>
  <li>Controlla ogni tanto il <strong>Registro</strong>: mostra ogni tentativo fallito con data e ora.</li>
</ul>
<div class="note"><p>Un’estensione di blocco protegge il browser da chi usa il tuo computer. Non sostituisce la password del tuo account sul computer né la crittografia del disco: per la massima sicurezza, usa entrambe.</p></div>`
    },
    {
      slug: 'bloccare-whatsapp-web', tag: 'WhatsApp Web', title: 'Come bloccare WhatsApp Web con password',
      blurb: 'Tieni private le tue chat su un computer condiviso senza disconnetterti ogni volta.',
      seoTitle: 'Bloccare WhatsApp Web su PC con password — Lock My Profile',
      description: 'Metti la password a WhatsApp Web così nessuno legge le tue chat su un PC condiviso, senza disconnetterti. Guida passo passo, anche per nascondere la scheda.',
      tldr: '<strong>In breve:</strong> aggiungi <code>web.whatsapp.com</code> come sito protetto in Lock My Profile. WhatsApp Web chiederà la password ogni volta che si apre e si bloccherà di nuovo quando cambi scheda, senza disconnetterti.',
      body: `
<h2>Perché bloccare WhatsApp Web?</h2>
<p>WhatsApp Web resta connesso per settimane. Su un computer condiviso o di lavoro, chiunque apra la scheda può leggere le tue chat. Disconnettersi ogni volta funziona, ma poi devi scansionare il codice QR ancora e ancora.</p>
<p>WhatsApp Web include anche un blocco schermo di base nelle proprie impostazioni della privacy. Copre solo WhatsApp; il metodo qui sotto funziona allo stesso modo per WhatsApp e per qualsiasi altro sito, e in più si riblocca da solo, camuffa la scheda e registra i tentativi falliti.</p>

<h2>Passo passo</h2>
<ol>
  <li>Installa <strong>Lock My Profile</strong> e crea la tua password.</li>
  <li>Apri le sue impostazioni (l’icona a forma di ingranaggio nel pannello) e vai a <strong>Siti protetti</strong>.</li>
  <li>Scrivi <code>web.whatsapp.com</code> e fai clic su <strong>Proteggi sito</strong>.</li>
  <li>In <strong>Richiedi di nuovo dopo</strong>, scegli per quanto tempo WhatsApp resta aperto una volta sbloccato, da 5 minuti a 4 ore.</li>
  <li>Lascia attivo <strong>Blocca al cambio di scheda</strong>: appena passi a un’altra scheda, WhatsApp si blocca di nuovo.</li>
</ol>
${fig('site-locked', 'Un sito protetto che chiede la password', 1200, 760, true, 'Un sito protetto chiede la password prima di mostrare qualsiasi cosa.')}

<h2>Nascondi perfino che WhatsApp è aperto</h2>
<p>Attiva <strong>Camuffa le schede protette</strong> e scegli <strong>Altro sito (indirizzo reale)</strong>. Quando esci dalla scheda di WhatsApp, viene sostituita da una pagina innocua come Wikipedia e la barra degli indirizzi mostra l’indirizzo reale di quel sito. La scheda di WhatsApp attende in una finestra ridotta a icona; una piccola barra della password sulla pagina, oppure ${k('Ctrl+Maiusc+U')}, la riporta indietro.</p>
${fig('decoy', 'Una scheda camuffata con la barra della password', 1200, 760, false, 'La scheda camuffata mostra un altro sito, con la barra della password in basso a destra.')}

<h2>Temi che qualcuno abbia già letto le tue chat?</h2>
<ul>
  <li>Apri il <strong>Registro</strong> di Lock My Profile per vedere i tentativi di password falliti, con data e ora.</li>
  <li>Sul telefono, apri WhatsApp › <strong>Dispositivi collegati</strong> e disconnetti qualsiasi computer che non riconosci.</li>
</ul>`
    },
    {
      slug: 'password-profilo-chrome', tag: 'Profili', title: 'Come proteggere un profilo Chrome con password',
      blurb: 'Metti una password a un profilo, così chi condivide il computer con te non può aprirlo.',
      seoTitle: 'Proteggere un profilo Chrome con password — Lock My Profile',
      description: 'I profili di Chrome non hanno password. Scopri come mettere la password a un profilo Chrome perché nessun altro lo apra, cosa protegge e quali limiti ha.',
      tldr: '<strong>In breve:</strong> i profili di Chrome non hanno password, ma puoi aggiungerla installando Lock My Profile <strong>nel profilo che vuoi proteggere</strong> e attivando il blocco all’avvio di Chrome.',
      body: `
<h2>Cos’è un profilo di Chrome (e perché non ha password)</h2>
<p>Un profilo è un insieme separato di preferiti, cronologia, password, schede aperte ed estensioni. Chiunque usi il computer può passare a qualsiasi profilo dall’icona del profilo, perché Chrome li considera una comodità, non una misura di sicurezza.</p>

<h2>Come bloccare un profilo</h2>
<p>Le estensioni si installano per profilo. Per questo è facile bloccare solo il profilo che ti interessa:</p>
<ol>
  <li>Apri Chrome con il profilo che vuoi proteggere.</li>
  <li>Installa <strong>Lock My Profile</strong> in quel profilo e crea la tua password.</li>
  <li>In <strong>Automazione</strong>, attiva <strong>All’avvio di Chrome</strong> e scegli un tempo per il <strong>Blocco per inattività</strong>.</li>
  <li>In <strong>Sicurezza</strong>, lascia attivo <strong>Blocca le pagine interne</strong>, così l’estensione non si può disattivare dalla pagina delle estensioni mentre il profilo è bloccato.</li>
  <li>Per bloccare anche altri profili, ripeti i passaggi in ciascuno. Ogni profilo può avere la propria password.</li>
</ol>
${fig('opt-automation', 'Le impostazioni di automazione di Lock My Profile', 1200, 780, false, 'Scegli quando il profilo si blocca da solo.')}

<h2>Cosa protegge e quali limiti ha</h2>
<p>Con il profilo bloccato, le sue schede, la cronologia, le sessioni salvate e i siti in cui hai l’accesso restano nascosti dietro la schermata di blocco. Tieni presente che:</p>
<ul>
  <li>Qualcuno potrebbe comunque aprire una finestra <strong>Ospite</strong> o creare un nuovo profilo. Lì non vedrà nessuno dei tuoi dati, ma potrà navigare.</li>
  <li>Se vuoi impedire anche questo, dai a ogni persona il proprio account sul computer; sui computer gestiti da un’azienda o da una scuola, un amministratore può disattivare la modalità Ospite e l’aggiunta di profili con le policy di Chrome.</li>
  <li>Un’estensione di blocco protegge da chi usa il tuo computer. Non sostituisce la password del tuo account sul computer né la crittografia del disco.</li>
</ul>

<h2>Oppure blocca solo alcuni siti</h2>
<p>Se non vuoi bloccare l’intero profilo, proteggi solo alcuni siti, come l’email o <a href="${guide(1)}">WhatsApp Web</a>. Chiederanno la password mentre il resto del profilo funziona normalmente.</p>`
    }
  ],

  bye: {
    title: 'Lock My Profile è stato rimosso', h1: 'Lock My Profile è stato rimosso',
    lead: 'I suoi dati sono stati cancellati dal browser: password, impostazioni e registro non ci sono più.',
    ask: 'Ci dici perché? Bastano 30 secondi e ci aiuti a migliorarlo.', askBtn: 'Dicci perché',
    helpTitle: 'Se qualcosa è andato storto', help: [
      ['Hai dimenticato la password?', 'Reinstallandolo riparti da zero. La prossima volta, aggiungi un suggerimento o una domanda di recupero quando la crei.'],
      ['Si bloccava troppo spesso?', 'Nelle impostazioni puoi disattivare il blocco all’avvio o al cambio di scheda, e scegliere un tempo di blocco automatico più lungo.'],
      ['Non sapevi come usarlo?', `Le nostre <a href="${guide(0)}">guide passo passo</a> spiegano gli usi principali.`]
    ],
    again: 'Hai cambiato idea?'
  }
});
