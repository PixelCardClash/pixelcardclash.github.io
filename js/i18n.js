// Pixel Card Clash – Webseite: alle Texte (Englisch und Deutsch).
// Neue Texte immer in beiden Sprachen unter demselben Schlüssel eintragen;
// im HTML verweist data-i18n="schlüssel" (Text), data-i18n-html (HTML) oder
// data-i18n-aria (Bildschirmleser-Beschriftung) darauf.
"use strict";

// E-Mail-Adresse steht nicht im HTML-Quelltext, sondern wird erst im Browser
// zusammengesetzt — erschwert das automatische Einsammeln durch Spam-Bots.
const MAIL = ["pixelcardclash", "icloud.com"].join("@");
const MAIL_LINK = () => `<a class="js-mail" href="#">${MAIL.replace("@", "&#64;")}</a>`;

const I18N = {
  en: {
    "skip": "Skip to content",
    "nav.how": "How to play", "nav.worlds": "Worlds", "nav.rivals": "Rivals",
    "hero.steam": "Wishlist on Steam",
    "all.title": "Every feature at a glance", "all.lead": "Everything Pixel Card Clash has to offer – tap an area to open it.",
    "all.open": "Open all", "all.close": "Close all", "all.link": "See every feature ↓",
    "how.title": "How it works",
    "how.1.t": "Pick", "how.1.d": "Tap the strongest category on your top card.",
    "how.2.t": "Compare", "how.2.d": "Both cards go head to head with their values.",
    "how.3.t": "CLASH!", "how.3.d": "The higher value wins both cards – whoever ends up with all of them wins.",
    "rivals.title": "Your rivals",
    "rival.kiki.lvl": "Easy", "rival.rudi.lvl": "Medium", "rival.platine.lvl": "Hard", "rival.max.lvl": "Expert",
    "rival.kiki.t": "Plays from the gut – and has fun doing it.", "rival.rudi.t": "Solid tinkerer – knows his best cards.",
    "rival.platine.t": "Professor Platine watches your every move.", "rival.max.t": "Counts every card. Forgets nothing.",
    "worlds.title": "Nine retro worlds", "multi.title": "Play together",
    "worlds.cards": "32 cards per world",
    "nav.trailer": "Trailer", "nav.screens": "Screenshots", "nav.features": "Features", "nav.contact": "Contact",
    "hero.tagline": "Pick. Compare. CLASH!",
    "hero.lead": "The schoolyard top-trumps game as a retro pixel duel – with rivals who talk back and arcade games in the middle of a match. Free, offline and ad-free.",
    "hero.soon": "Coming soon", "hero.watch": "Watch the trailer", "hero.follow": "Follow on Bluesky",
    "trailer.title": "Trailer",
    "shots.title": "Screenshots", "shots.hint": "Tap a screenshot to enlarge it.",
    "shots.prev": "Previous screenshot", "shots.next": "Next screenshot", "lb.close": "Close",
    "shots.caps": ["Pick. Compare. CLASH!", "Nine retro worlds – 3 included, 6 more in two theme packs (DLC)",
      "Every world has its own extra – here Padi plugs in a second controller", "Nine world extras to unlock",
      "Four rivals with personality", "Retro moments – sorcery, fairy, goblin, text adventure, retro arcade and more",
      "Low wins – with a bonus", "One of Three – flip through your top three cards", "Card Thief with a fuse",
      "Jokers – each one wins once", "Card swap – repeat your category at your own risk",
      "Tempus Fugit – race the clock", "Category lock – block a category for several rounds",
      "Discover every card – holo cards and a notch for every win", "A new duel every day", "Understand every match",
      "The Rival Tournament", "Multiplayer: online via Steam or on your local network – invited friends play for free",
      "Card backs to unlock", "Retro look – pixel level, “Retro monitor” screen filter, colour palettes and a table that changes its mood",
      "Retro arcade – six mini-games in the middle of a match, the winner's bonus jumps to 100%",
      "Mars landing – fire the thrusters and touch down gently", "Text adventure – north or south, safe or risky?",
      "Alien attack – the raiders close in and speed up, you press fire", "Asteroid hail – big rocks break apart, black fireballs can't be shot down"],
    "features.title": "What awaits you",
    "f1.t": "Pick. Compare. CLASH!", "f1.d": "Tap your strongest category – the higher value takes both cards. Lightning, knockouts and slow-motion finales make every comparison count.",
    "f2.t": "3 retro worlds to collect", "f2.d": "The base game is free and already includes three complete worlds with 32 cards each:",
    "f8.t": "Future Machines: 3 more worlds", "f8.d": "Optional theme pack with three invented worlds, each with 32 cards:",
    "f10.t": "Fantastic Creatures: 3 more worlds", "f10.d": "Optional theme pack with three invented worlds, each with 32 cards:",
    "free.badge": "Free to play", "free.note": "Free to play – three optional DLCs add six more worlds and multiplayer.",
    "dlc.tech": "Future Machines DLC", "dlc.creature": "Fantastic Creatures DLC", "dlc.multi": "Multiplayer DLC",
    "price.note": "Each DLC is bought separately – get only what you want. Multiplayer with a theme-pack world also needs that pack.",
    "w.retro_home_computer.n": "Home Computer", "w.retro_home_computer.d": "Legendary home computers from the 70s, 80s and early 90s",
    "w.retro_game_consoles.n": "Retro Game Consoles", "w.retro_game_consoles.d": "Great video game consoles from the 70s and 80s",
    "w.arcade_classics.n": "Arcade Classics", "w.arcade_classics.d": "From pixel pioneers to 3D giants – the golden age of arcades",
    "w.retro_futurism.n": "Retro Futurism", "w.retro_futurism.d": "Imaginative spaceships, as earlier generations dreamed up the future",
    "w.retro_superheroes.n": "Superheroes", "w.retro_superheroes.d": "Masked protectors with incredible powers from four comic eras",
    "w.retro_bmovie_monsters.n": "B-Movie Monsters", "w.retro_bmovie_monsters.d": "Spine-chilling creatures and cult icons from the golden age of B-movie horror",
    "w.retro_robots.n": "Retro Robots", "w.retro_robots.d": "Tin servants, pulp giants and household marvels from the clockwork era to the microchip",
    "w.alien_tech.n": "Alien Technology", "w.alien_tech.d": "Glowing crystals, hovering spheres and bronze star maps – mysterious relics, unearthed 1900–1980",
    "w.retro_fantasy.n": "Retro Fantasy", "w.retro_fantasy.d": "Barbarians, sorceresses and dragons – from 30s pulp magazines to 80s game boxes",
    
    "f3.t": "Four rivals with personality", "f3.d": "From cheerful Kiki to card-counting MAX-9000: every rival plays differently – and has something to say about it.",
    "f4.t": "Surprises, as many as you like", "f4.d": "Retro moments such as a text adventure on an old terminal and the Retro Arcade with six mini-games, from ping-pong to an asteroid hail, pop up mid-match – the winner's bonus jumps to 100%. Add special rules like low wins, a card thief with a fuse or jokers. Switch on as much as you like – or press “Classic” and play it just like back then.",
    "f5.t": "Daily Duel, challenges & collection", "f5.d": "A new duel every day with the same cards for everyone – share your result as a grid of squares, Wordle-style. Plus six handcrafted challenges and a collection with cards still to discover: earn up to three stars per card, collect shimmering holo cards from free booster packs and unlock ten card backs.",
    "f9.t": "The Rival Tournament", "f9.d": "Beat Kiki, Rudi, Platine and boss MAX-9000 in a row with your own deck. After every win, swap a card and pick a perk – and every rival you beat gives you an extra life.",
    "f6.t": "Learned in a minute", "f6.d": "No deckbuilding, no long tutorial: a match takes just a few minutes. A short practice duel with Kiki explains the basics; special rules are introduced the moment they first appear.",
    "f7.t": "Multiplayer: duel your friends", "f7.d": "Play against real people: online via Steam – create a lobby and invite a friend from your friends list – or directly over your local network, even without Steam. Your choice of rules, the opponent confirms the card split. Available as the Multiplayer DLC – only the host needs it, invited friends play for free.",
    "contact.title": "Stay in touch", "contact.lead": "Questions, feedback or press inquiries? We'd love to hear from you.",
    "contact.mail": "Send an email", "mode.lan": "Local network", "contact.bsky": "Bluesky",
    "footer.imprint": "Imprint", "footer.privacy": "Privacy", "footer.credits": "Credits",
    imprint: `<h2>Imprint</h2>
      <h3>Provider</h3>
      <p>Karl Henes<br>Cra 40 #4B-06<br>760043 Cali<br>Colombia</p>
      <p>Email: ${MAIL_LINK()}</p>
      <h3>Responsible for content</h3>
      <p>Karl Henes, Cra 40 #4B-06, 760043 Cali, Colombia</p>`,
    privacy: `<h2>Privacy</h2>
      <h3>Controller</h3><p>See imprint. Contact: ${MAIL_LINK()}</p>
      <h3>Hosting</h3><p>This website is hosted by GitHub Pages (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). When you visit it, GitHub processes technical access data such as your IP address in server log files to deliver the site and keep it secure (Art. 6(1)(f) GDPR). GitHub is certified under the EU–US Data Privacy Framework. Details: <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub Privacy Statement</a>.</p>
      <h3>No cookies, no tracking</h3><p>We use no cookies, no analytics and no third-party content. Fonts, images and videos are loaded from this site itself. Your language choice is stored only in your browser's local storage so the page remembers it.</p>
      <h3>Email</h3><p>If you write to us, we use your email address and message only to answer your request (Art. 6(1)(b) and (f) GDPR) and delete them when they are no longer needed.</p>
      <h3>Bluesky</h3><p>The Bluesky link takes you to an external site; its own privacy policy applies there. No data is transferred to Bluesky before you click.</p>
      <h3>The game “Pixel Card Clash”</h3><p>The following applies to the game itself (for example on Steam). The game stores game progress, settings, achievements and statistics on your device. Pixel Card Clash does not operate any servers of its own, uses no third-party tracking, analytics or advertising services, and we do not create user profiles.</p>
      <h3>Steam Cloud</h3><p>If you play via Steam and Steam Cloud is enabled for the game, Steam synchronises your save data (profile with statistics, achievements and card album, rule and personal settings such as player name, language and text size, running tournaments and interrupted matches, and stored Steam profile pictures, including the details of online opponents in your statistics) with Valve's servers. This data is processed by Valve Corporation (USA) under its own privacy policy. You can turn Steam Cloud off in Steam for this game or entirely; then all data stays on your device only.</p>
      <h3>Steam status and leaderboards</h3><p>Via Steam, your friends see what you are currently playing; you can turn this off in the game settings with “Show status to friends”. Results on the Steam leaderboards (Daily Duel, duel score) are stored at Valve together with your Steam name and are visible to other players.</p>
      <h3>Multiplayer via Steam</h3><p>When you play online, the game stores your opponent's Steam name, Steam ID and Steam profile picture as well as your own Steam profile picture on your device (and, with Steam Cloud, there as well) for the statistics. Steam provides this information; we do not pass it on. “Delete all statistics” in the game removes the stored opponent details and pictures.</p>
      <h3>Bug reports</h3><p>“Report a bug” in the game opens a prepared email in your email app or copies a report to your clipboard. It only contains technical details (game version, operating system, processor, graphics card, screen size, language, display settings, unlocked content, theme and round of the last match) and, when copied, the last lines of the log, without player name, Steam name or Steam ID. It is only sent if you send the email yourself.</p>
      <h3>Your rights</h3><p>You have the right to access, rectification, erasure, restriction of processing, data portability and objection, and the right to lodge a complaint with a data protection supervisory authority.</p>`,
    credits: `<h2>Credits</h2>
      <p>Trailer music: "Blue Ska" Kevin MacLeod (incompetech.com), licensed under Creative Commons: By Attribution 4.0 – <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">creativecommons.org/licenses/by/4.0</a></p>
      <p>Font: "Righteous" by Astigmatic, SIL Open Font License 1.1 (<a href="assets/fonts/OFL.txt">license</a>).</p>
      <p>All product and company names are trademarks of their respective owners; their mention implies no affiliation or endorsement.</p>`,
  },
  de: {
    "all.title": "Alle Funktionen im Überblick", "all.lead": "Alles, was Pixel Card Clash zu bieten hat – tippe auf einen Bereich, um ihn aufzuklappen.",
    "all.open": "Alle aufklappen", "all.close": "Alle zuklappen", "all.link": "Alle Funktionen ansehen ↓",
    "skip": "Zum Inhalt springen",
    "nav.how": "So geht’s", "nav.worlds": "Welten", "nav.rivals": "Rivalen",
    "hero.steam": "Auf die Steam-Wunschliste",
    "how.title": "So wird gespielt",
    "how.1.t": "Wähle", "how.1.d": "Tippe die stärkste Kategorie deiner obersten Karte.",
    "how.2.t": "Vergleiche", "how.2.d": "Beide Karten treten mit ihrem Wert gegeneinander an.",
    "how.3.t": "CLASH!", "how.3.d": "Der höhere Wert gewinnt beide Karten – wer am Ende alle hat, siegt.",
    "rivals.title": "Deine Rivalen",
    "rival.kiki.lvl": "Leicht", "rival.rudi.lvl": "Mittel", "rival.platine.lvl": "Schwer", "rival.max.lvl": "Experte",
    "rival.kiki.t": "Spielt aus dem Bauch – und hat Spaß dabei.", "rival.rudi.t": "Solider Bastler – kennt seine besten Karten.",
    "rival.platine.t": "Professorin Platine beobachtet jeden deiner Züge.", "rival.max.t": "Zählt jede Karte. Vergisst nichts.",
    "worlds.title": "Neun Retro-Welten", "multi.title": "Gemeinsam spielen",
    "worlds.cards": "32 Karten pro Welt",
    "nav.trailer": "Trailer", "nav.screens": "Screenshots", "nav.features": "Funktionen", "nav.contact": "Kontakt",
    "hero.tagline": "Wähle. Vergleiche. CLASH!",
    "hero.lead": "Das Quartett vom Schulhof als Retro-Pixel-Duell – mit Rivalen, die frech werden, und Arcade-Spielen mitten in der Partie. Kostenlos, offline und ohne Werbung.",
    "hero.soon": "Bald erhältlich", "hero.watch": "Trailer ansehen", "hero.follow": "Auf Bluesky folgen",
    "trailer.title": "Trailer",
    "shots.title": "Screenshots", "shots.hint": "Screenshot antippen zum Vergrößern.",
    "shots.prev": "Vorheriger Screenshot", "shots.next": "Nächster Screenshot", "lb.close": "Schließen",
    "shots.caps": ["Wähle. Vergleiche. CLASH!", "Neun Retro-Welten – 3 inklusive, 6 weitere in zwei Themen-Paketen (DLC)",
      "Jede Welt hat ihr Extra – hier steckt Padi einen zweiten Controller ein", "Neun Welt-Extras zum Freispielen",
      "Vier Rivalen mit Persönlichkeit", "Retro-Momente – Zauberei, Fee, Kobold, Textabenteuer, Retro-Arcade und mehr",
      "Niedrig gewinnt – mit Bonus", "Eine aus Drei – blättere durch deine drei obersten Karten", "Karten-Dieb mit Zeitzünder",
      "Joker – jeder gewinnt einmal", "Kartentausch – wer die Kategorie wiederholt, riskiert etwas",
      "Tempus Fugit – gegen die Uhr", "Kategoriesperre – eine Kategorie für mehrere Runden sperren",
      "Entdecke jede Karte – mit Holo-Karten und einer Scharte für jeden Sieg", "Jeden Tag ein neues Duell", "Verstehe jede Partie",
      "Das Rivalen-Turnier", "Multiplayer: online über Steam oder im lokalen Netzwerk – eingeladene Freunde spielen kostenlos mit",
      "Kartenrücken zum Freispielen", "Retro-Look – Pixelstufe, Bildschirmfilter „Retro-Monitor“, Farbpaletten und ein Spieltisch mit Stimmung",
      "Retro-Arcade – sechs Minispiele mitten in der Partie, der Gewinner bekommt 100 % Bonus",
      "Marslandung – Schub geben und sanft aufsetzen", "Textabenteuer – Nord oder Süd, sicher oder riskant?",
      "Alien Angriff – die Angreifer rücken näher und werden schneller, du drückst auf Feuer", "Asteroidenhagel – große Brocken zerfallen, schwarze Feuerkugeln lassen sich nicht abschießen"],
    "features.title": "Das erwartet dich",
    "f1.t": "Wähle. Vergleiche. CLASH!", "f1.d": "Tippe deine stärkste Kategorie – der höhere Wert gewinnt beide Karten. Blitze, Schubser und Zeitlupen-Finale machen jeden Vergleich zum Ereignis.",
    "f2.t": "3 Retro-Welten zum Sammeln", "f2.d": "Das Grundspiel ist kostenlos und enthält bereits drei komplette Welten mit je 32 Karten:",
    "f8.t": "Zukunftsmaschinen: 3 weitere Welten", "f8.d": "Optionales Themen-Paket mit drei erfundenen Welten mit je 32 Karten:",
    "f10.t": "Fantasiewesen: 3 weitere Welten", "f10.d": "Optionales Themen-Paket mit drei erfundenen Welten mit je 32 Karten:",
    "free.badge": "Kostenlos spielbar", "free.note": "Kostenlos spielbar – drei optionale DLCs bringen sechs weitere Welten und den Multiplayer.",
    "dlc.tech": "Zukunftsmaschinen DLC", "dlc.creature": "Fantasiewesen DLC", "dlc.multi": "Multiplayer DLC",
    "price.note": "Jedes DLC wird einzeln gekauft – nimm nur, was du möchtest. Multiplayer mit einer Welt aus einem Themen-Paket braucht zusätzlich dieses Paket.",
    "w.retro_home_computer.n": "Home Computer", "w.retro_home_computer.d": "Legendäre Heimcomputer der 70er, 80er und frühen 90er",
    "w.retro_game_consoles.n": "Retro-Spielkonsolen", "w.retro_game_consoles.d": "Großartige Videospielkonsolen der 70er und 80er",
    "w.arcade_classics.n": "Arcade Classics", "w.arcade_classics.d": "Von Pixel-Pionieren bis zu 3D-Giganten – die goldene Ära der Spielhallen",
    "w.retro_futurism.n": "Retro-Futurismus", "w.retro_futurism.d": "Fantasievolle Raumschiffe, wie sich frühere Generationen die Zukunft erträumten",
    "w.retro_superheroes.n": "Superhelden", "w.retro_superheroes.d": "Maskierte Beschützer mit unglaublichen Kräften aus vier Comic-Epochen",
    "w.retro_bmovie_monsters.n": "B-Movie-Monster", "w.retro_bmovie_monsters.d": "Schaurige Kreaturen und Kultklassiker aus der goldenen B-Movie-Ära",
    "w.retro_robots.n": "Retro Roboter", "w.retro_robots.d": "Blechdiener, Pulp-Kolosse und Haushaltswunder – vom Uhrwerk bis zum Mikrochip",
    "w.alien_tech.n": "Alien Technologie", "w.alien_tech.d": "Glühende Kristalle, schwebende Kugeln, Sternkarten aus Bronze – rätselhafte Fundstücke von 1900 bis 1980",
    "w.retro_fantasy.n": "Retro Fantasy", "w.retro_fantasy.d": "Barbaren, Zauberinnen und Drachen – von den Groschenheften der 30er bis zu den Spielepackungen der 80er",
    
    "f3.t": "Vier Rivalen mit Persönlichkeit", "f3.d": "Von der gut gelaunten Kiki bis zu MAX-9000 mit Kartengedächtnis: Jeder Rivale spielt anders – und hat etwas dazu zu sagen.",
    "f4.t": "Überraschungen, so viele du willst", "f4.d": "Retro-Momente wie ein Textabenteuer im alten Terminal und die Retro-Arcade mit sechs Minispielen vom Ping-Pong bis zum Asteroidenhagel tauchen mitten in der Partie auf – der Gewinner bekommt 100 % Bonus. Dazu Sonderregeln wie Niedrig gewinnt, Karten-Dieb mit Zeitzünder oder Joker. Schalte so viel dazu, wie du magst – oder drück auf „Klassisch“ und spiel wie früher.",
    "f5.t": "Tages-Duell, Herausforderungen & Sammelalbum", "f5.d": "Jeden Tag ein neues Duell mit denselben Karten für alle – teile dein Ergebnis als Kästchen-Raster wie bei Wordle. Dazu sechs knifflige Herausforderungen und ein Sammelalbum mit Karten zum Entdecken: Hole bis zu drei Sterne pro Karte, sammle schimmernde Holo-Karten aus kostenlosen Booster-Packs und schalte zehn Kartenrücken frei.",
    "f9.t": "Das Rivalen-Turnier", "f9.d": "Besiege Kiki, Rudi, Platine und Boss MAX-9000 nacheinander mit deinem eigenen Stapel. Nach jedem Sieg tauschst du eine Karte und wählst einen Vorteil – und jeder besiegte Rivale schenkt dir ein Extraleben.",
    "f6.t": "In einer Minute gelernt", "f6.d": "Kein Deckbau, keine lange Einführung: Eine Partie dauert nur ein paar Minuten. Ein kurzes Übungsduell mit Kiki erklärt die Grundlagen; Sonderregeln werden erklärt, sobald sie zum ersten Mal auftauchen.",
    "f7.t": "Multiplayer: Duelliere deine Freunde", "f7.d": "Spiele gegen echte Menschen: online über Steam – Lobby erstellen und einen Freund aus der Freundesliste einladen – oder direkt im lokalen Netzwerk, sogar ohne Steam. Du wählst die Regeln, der Gegner bestätigt die Kartenverteilung. Erhältlich als Multiplayer DLC – den braucht nur, wer einlädt; eingeladene Freunde spielen kostenlos mit.",
    "contact.title": "Bleib in Kontakt", "contact.lead": "Fragen, Feedback oder Presseanfragen? Wir freuen uns auf deine Nachricht.",
    "contact.mail": "E-Mail schreiben", "mode.lan": "Lokales Netzwerk", "contact.bsky": "Bluesky",
    "footer.imprint": "Impressum", "footer.privacy": "Datenschutz", "footer.credits": "Nachweise",
    imprint: `<h2>Impressum</h2>
      <h3>Anbieter</h3>
      <p>Karl Henes<br>Cra 40 #4B-06<br>760043 Cali<br>Kolumbien</p>
      <p>E-Mail: ${MAIL_LINK()}</p>
      <h3>Verantwortlich für den Inhalt</h3>
      <p>Karl Henes, Cra 40 #4B-06, 760043 Cali, Kolumbien</p>`,
    privacy: `<h2>Datenschutz</h2>
      <h3>Verantwortlicher</h3><p>Siehe Impressum. Kontakt: ${MAIL_LINK()}</p>
      <h3>Hosting</h3><p>Diese Webseite wird über GitHub Pages bereitgestellt (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA). Beim Aufruf verarbeitet GitHub technische Zugriffsdaten wie deine IP-Adresse in Server-Logdateien, um die Seite auszuliefern und abzusichern (Art. 6 Abs. 1 lit. f DSGVO). GitHub ist nach dem EU-US Data Privacy Framework zertifiziert. Details: <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener">GitHub-Datenschutzerklärung</a>.</p>
      <h3>Keine Cookies, kein Tracking</h3><p>Wir verwenden keine Cookies, keine Analyse-Werkzeuge und keine Inhalte von Drittanbietern. Schrift, Bilder und Videos werden von dieser Seite selbst geladen. Deine Sprachwahl wird nur im lokalen Speicher deines Browsers abgelegt, damit die Seite sie sich merkt.</p>
      <h3>E-Mail</h3><p>Wenn du uns schreibst, verwenden wir deine E-Mail-Adresse und Nachricht ausschließlich zur Beantwortung deiner Anfrage (Art. 6 Abs. 1 lit. b und f DSGVO) und löschen sie, sobald sie nicht mehr benötigt werden.</p>
      <h3>Bluesky</h3><p>Der Bluesky-Link führt zu einer externen Seite; dort gilt deren Datenschutzerklärung. Vor dem Anklicken werden keine Daten an Bluesky übertragen.</p>
      <h3>Das Spiel „Pixel Card Clash“</h3><p>Das Folgende gilt für das Spiel selbst (zum Beispiel auf Steam). Das Spiel speichert Spielfortschritt, Einstellungen, Erfolge und Statistiken auf deinem Gerät. Pixel Card Clash betreibt keine eigenen Server, verwendet keine Tracking-, Analyse- oder Werbedienste von Drittanbietern und wir erstellen keine Nutzerprofile.</p>
      <h3>Steam Cloud</h3><p>Spielst du über Steam und ist Steam Cloud für das Spiel eingeschaltet, gleicht Steam deinen Spielstand (Profil mit Statistik, Erfolgen und Sammelalbum, Regel- und persönliche Einstellungen wie Spielername, Sprache und Textgröße, laufende Turniere und unterbrochene Partien sowie gespeicherte Steam-Profilbilder, auch die Angaben zu Online-Gegnern in deiner Statistik) mit den Servern von Valve ab. Die Daten verarbeitet Valve Corporation (USA) nach seiner eigenen Datenschutzerklärung. Steam Cloud lässt sich in Steam für dieses Spiel oder ganz abschalten; dann bleiben alle Daten nur auf deinem Gerät.</p>
      <h3>Steam-Status und Bestenlisten</h3><p>Über Steam sehen deine Freunde, was du gerade spielst; das kannst du in den Spieleinstellungen mit „Status für Freunde zeigen“ abschalten. Ergebnisse in den Steam-Bestenlisten (Tages-Duell, Duell-Wertung) werden mit deinem Steam-Namen bei Valve gespeichert und sind für andere Spieler sichtbar.</p>
      <h3>Multiplayer über Steam</h3><p>Spielst du online, speichert das Spiel für die Statistik auf deinem Gerät (und mit Steam Cloud auch dort) den Steam-Namen, die Steam-ID und das Steam-Profilbild deines Gegners sowie dein eigenes Steam-Profilbild. Diese Angaben stellt Steam bereit; wir geben sie nicht weiter. „Alle Statistiken löschen“ im Spiel entfernt die gespeicherten Gegner-Angaben und -Bilder.</p>
      <h3>Fehlerberichte</h3><p>„Fehler melden“ im Spiel öffnet eine vorbereitete E-Mail in deinem E-Mail-Programm bzw. kopiert einen Bericht in die Zwischenablage. Er enthält nur technische Angaben (Spielversion, Betriebssystem, Prozessor, Grafikkarte, Bildschirmgröße, Sprache, Anzeige-Einstellungen, freigeschaltete Inhalte, Thema und Runde der letzten Partie) und beim Kopieren die letzten Zeilen des Protokolls, ohne Spielernamen, Steam-Namen und Steam-ID. Gesendet wird nur, wenn du die E-Mail selbst abschickst.</p>
      <h3>Deine Rechte</h3><p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</p>`,
    credits: `<h2>Nachweise</h2>
      <p>Trailer-Musik: "Blue Ska" Kevin MacLeod (incompetech.com), Licensed under Creative Commons: By Attribution 4.0 – <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">creativecommons.org/licenses/by/4.0</a></p>
      <p>Schrift: „Righteous“ von Astigmatic, SIL Open Font License 1.1 (<a href="assets/fonts/OFL.txt">Lizenz</a>).</p>
      <p>Alle genannten Produkt- und Firmennamen sind Marken ihrer jeweiligen Inhaber; ihre Nennung bedeutet keine Verbindung oder Empfehlung.</p>`,
  },
};

window.PCC_I18N = I18N;
window.PCC_MAIL = MAIL;
