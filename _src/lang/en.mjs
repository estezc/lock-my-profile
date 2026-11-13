// English. Each language module has exactly this shape; texts may contain HTML.
// Helpers: k('Ctrl+Shift+L') draws keys, fig(image, alt, w, h, dark, caption) shows a
// screenshot in this language, guide(i) links to guide i in this language.
export default ({ k, fig, guide }) => ({
  code: 'en', name: 'English', locale: 'en_US', date: 'November 10, 2026',
  paths: { home: '/', guides: '/guides/', bye: '/goodbye/' },
  ui: {
    features: 'Features', privacy: 'Privacy', guides: 'Guides', language: 'Language', skip: 'Skip to content', nav: 'Main',
    add: 'Add to Chrome — it’s free', soon: 'Coming soon to the Chrome Web Store', how: 'See how it works',
    policy: 'Privacy policy', tm: 'Google Chrome is a trademark of Google LLC. Lock My Profile is not affiliated with Google.',
    updated: 'Updated', crumbsHome: 'Home', moreGuides: 'More guides',
    ctaText: 'Free browser extension: lock your profile and the sites you choose with one password.',
    notFound: 'Page not found', notFoundText: 'This page doesn’t exist. Try the home page or one of our guides.'
  },
  ids: { features: 'features', privacy: 'privacy', how: 'how', guides: 'guides' },

  home: {
    title: 'Lock My Profile — Password protect Chrome and your sites',
    description: 'Free extension that locks your Chrome profile and chosen sites with one password. Auto-lock, tab camouflage and an intruder log. No account needed.',
    eyebrow: 'Free browser extension',
    h1: 'Lock your browser with <em>one password</em>',
    lead: 'Lock My Profile puts a password on your Chrome profile and on the sites you choose, and can disguise a locked tab as a harmless page. No account. Nothing leaves your device.',
    trust: ['Free', 'No account', 'Works offline', '6 languages'],
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
      ['key', 'Your password is never stored', 'Only a salted PBKDF2-SHA256 hash (600,000 iterations) is kept, in your browser’s local storage.'],
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
      ['Which languages and computers does it work on?', 'Google Chrome on Windows, macOS, Linux and ChromeOS, in English, Spanish, French, German, Italian and Portuguese.']
    ],
    guidesTitle: 'Guides', guidesText: 'Step-by-step answers to the most common questions.',
    finalTitle: 'Your browser, your business', finalText: 'Lock your profile and the sites you choose in under a minute.'
  },

  guides: [
    {
      slug: 'password-protect-chrome', tag: 'Chrome', title: 'How to password protect Chrome',
      blurb: 'Chrome has no password of its own. Here are the two ways to add one, and which to pick.',
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
${fig('lock', 'The Lock My Profile lock screen', 1280, 800, true, 'The lock screen covers every tab until you type your password.')}

<h2>Only want to protect some sites?</h2>
<p>You don’t have to lock the whole browser. In <strong>Protected sites</strong>, add the sites you want to keep private, such as your email or your bank, and they’ll ask for the password even while the rest of Chrome is free to use. See <a href="${guide(1)}">how to lock WhatsApp Web</a> for a step-by-step example.</p>

<h2>Tips for a strong setup</h2>
<ul>
  <li>Use a password you don’t use anywhere else.</li>
  <li>On a shared computer, turn off <strong>Show the hint on the lock screen</strong>, so others can’t guess from it.</li>
  <li>Check the <strong>Log</strong> from time to time: it lists every failed attempt with date and time.</li>
</ul>
<div class="note"><p>A lock extension keeps your browser safe from people who use your computer. It doesn’t replace your computer’s account password or disk encryption, so for maximum security use both.</p></div>`
    },
    {
      slug: 'lock-whatsapp-web', tag: 'WhatsApp Web', title: 'How to lock WhatsApp Web with a password',
      blurb: 'Keep your chats private on a shared computer without logging out every time.',
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
${fig('site-locked', 'A protected site asking for the password', 1200, 760, true, 'A protected site asks for the password before showing anything.')}

<h2>Hide that WhatsApp is even open</h2>
<p>Turn on <strong>Camouflage protected tabs</strong> and choose <strong>Other site (real address)</strong>. When you leave the WhatsApp tab, it’s swapped for a harmless page such as Wikipedia, and the address bar shows that site’s real address. Your WhatsApp tab waits in a minimized window; a small password bar on the page, or ${k('Ctrl+Shift+U')}, brings it back.</p>
${fig('decoy', 'A camouflaged tab with the password bar', 1200, 760, false, 'The camouflaged tab shows another site, with the password bar at the bottom right.')}

<h2>Think someone already read your chats?</h2>
<ul>
  <li>Open the <strong>Log</strong> in Lock My Profile to see failed password attempts with date and time.</li>
  <li>On your phone, open WhatsApp › <strong>Linked devices</strong> and log out of any computer you don’t recognise.</li>
</ul>`
    },
    {
      slug: 'lock-chrome-profile', tag: 'Profiles', title: 'How to lock a Chrome profile',
      blurb: 'Put a password on one profile so the people you share the computer with can’t open it.',
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
${fig('opt-automation', 'Lock My Profile automation settings', 1200, 780, false, 'Choose when the profile locks by itself.')}

<h2>What it protects, and its limits</h2>
<p>When the profile is locked, its tabs, history, saved sessions and the sites where you’re logged in are hidden behind the lock screen. Keep in mind:</p>
<ul>
  <li>Someone could still open a <strong>Guest</strong> window or create a new profile. They won’t see any of your data there, but they can browse.</li>
  <li>If you need to stop that too, give each person their own account on the computer, or, on computers managed by a company or school, an administrator can turn off Guest mode and adding profiles with Chrome policies.</li>
  <li>A lock extension protects against people who use your computer. It doesn’t replace your computer’s account password or disk encryption.</li>
</ul>

<h2>Lock only some sites instead</h2>
<p>If you don’t want to lock the whole profile, protect just a few sites, like your email or <a href="${guide(1)}">WhatsApp Web</a>. They’ll ask for the password while the rest of the profile works normally.</p>`
    }
  ],

  bye: {
    title: 'Lock My Profile was removed', h1: 'Lock My Profile has been removed',
    lead: 'Its data has been deleted from your browser: your password, settings and log are gone.',
    ask: 'Could you tell us why? It takes 30 seconds and helps us improve it.', askBtn: 'Tell us why',
    helpTitle: 'If something went wrong', help: [
      ['Forgot your password?', 'Reinstalling starts from scratch. Next time, add a hint or a recovery question when you create it.'],
      ['It locked too often?', 'In the settings you can turn off locking on startup or when switching tabs, and choose a longer auto-lock time.'],
      ['Not sure how to use it?', `Our <a href="${guide(0)}">step-by-step guides</a> explain the main uses.`]
    ],
    again: 'Changed your mind?'
  }
});
