// Pixel Card Clash – Webseite: Sprachumschaltung (EN/DE), Screenshot-Karussell,
// Lightbox und rechtliche Dialoge. Keine externen Bibliotheken, keine Cookies.
(() => {
  "use strict";

  const SHOTS = ["01_clash", "02_worlds", "03_rivals", "04_low_wins_bonus", "05_one_of_three",
    "06_card_thief", "07_collection", "08_daily_duel", "09_analysis", "10_multiplayer",
    "11_tournament", "12_joker", "13_card_backs"];

  // E-Mail-Adresse steht nicht im HTML-Quelltext, sondern wird erst im Browser
  // zusammengesetzt — erschwert das automatische Einsammeln durch Spam-Bots.
  const MAIL = ["pixelcardclash", "icloud.com"].join("@");
  const MAIL_LINK = () => `<a class="js-mail" href="#">${MAIL.replace("@", "&#64;")}</a>`;

  const I18N = {
    en: {
      "skip": "Skip to content",
      "nav.trailer": "Trailer", "nav.screens": "Screenshots", "nav.features": "Features", "nav.contact": "Contact",
      "hero.tagline": "Pick. Compare. CLASH!",
      "hero.lead": "The classic card duel in loving pixel art – with retro worlds to collect, four rivals with attitude and special rules that turn every round upside down.",
      "hero.soon": "Coming soon", "hero.watch": "Watch the trailer", "hero.follow": "Follow on Bluesky",
      "trailer.title": "Trailer",
      "shots.title": "Screenshots", "shots.hint": "Tap a screenshot to enlarge it.",
      "shots.prev": "Previous screenshot", "shots.next": "Next screenshot", "lb.close": "Close",
      "shots.caps": ["Pick. Compare. CLASH!", "Retro worlds to collect – 3 included, 3 more as an expansion",
        "Four rivals with personality", "Low wins – with a bonus", "One of Three", "Card Thief with a fuse",
        "Discover every card", "A new duel every day", "Understand every match",
        "Multiplayer: online via Steam or on your local network (expansion)",
        "New: the Rival Tournament", "Jokers – each one wins once", "Card backs to unlock"],
      "features.title": "What awaits you",
      "f1.t": "Pick. Compare. CLASH!", "f1.d": "Tap your strongest category – the higher value takes both cards. Lightning, knockouts and slow-motion finales make every comparison count.",
      "f2.t": "3 retro worlds to collect", "f2.d": "The base game is free and already includes three complete worlds with 32 cards each:",
      "f8.t": "3 more retro worlds", "f8.d": "Optional expansion with three more invented worlds, each with 32 cards:",
      "free.badge": "Free to play", "free.note": "Free to play – optional expansions (DLC) add more worlds and online duels.",
      "w.retro_home_computer.n": "Home Computer", "w.retro_home_computer.d": "Legendary home computers from the 70s, 80s and early 90s",
      "w.retro_game_consoles.n": "Retro Game Consoles", "w.retro_game_consoles.d": "Great video game consoles from the 70s and 80s",
      "w.arcade_classics.n": "Arcade Classics", "w.arcade_classics.d": "From pixel pioneers to 3D giants – the golden age of arcades",
      "w.retro_futurism.n": "Retro Futurism", "w.retro_futurism.d": "Imaginative spaceships, as earlier generations dreamed up the future",
      "w.retro_superheroes.n": "Superheroes", "w.retro_superheroes.d": "Masked protectors with incredible powers from four comic eras",
      "w.retro_bmovie_monsters.n": "B-Movie Monsters", "w.retro_bmovie_monsters.d": "Spine-chilling creatures and cult icons from the golden age of B-movie horror",
      
      "f3.t": "Four rivals with personality", "f3.d": "From cheerful Kiki to card-counting MAX-9000: every rival plays differently – and has something to say about it.",
      "f4.t": "Special rules shake things up", "f4.d": "Low wins, bonus system, One of Three, card thief with a fuse, card swap, jokers, critical hit and more – switch them on individually and make every match different.",
      "f5.t": "Daily Duel, challenges & collection", "f5.d": "A new duel every day with the same cards for everyone, six handcrafted challenges and a collection with cards still to discover. Earn up to three stars per card and unlock ten card backs.",
      "f9.t": "New: the Rival Tournament", "f9.d": "Beat Kiki, Rudi, Platine and boss MAX-9000 in a row with your own deck. After every win, swap a card and pick a perk – and every rival you beat gives you an extra life.",
      "f6.t": "Easy to learn", "f6.d": "A short practice duel with Kiki explains the basics; special rules are introduced the moment they first appear.",
      "f7.t": "Duel your friends", "f7.d": "Play against real people: online via Steam – create a lobby and invite a friend from your friends list – or directly over your local network, even without Steam. Your choice of rules, the opponent confirms the card split. Available as an expansion (DLC).",
      "contact.title": "Stay in touch", "contact.lead": "Questions, feedback or press inquiries? We'd love to hear from you.",
      "contact.mail": "Send an email", "dlc": "Expansion (DLC)", "mode.lan": "Local network", "contact.bsky": "Bluesky",
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
        <h3>Your rights</h3><p>You have the right to access, rectification, erasure, restriction of processing, data portability and objection, and the right to lodge a complaint with a data protection supervisory authority.</p>`,
      credits: `<h2>Credits</h2>
        <p>Trailer music: "Blue Ska" Kevin MacLeod (incompetech.com), licensed under Creative Commons: By Attribution 4.0 – <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">creativecommons.org/licenses/by/4.0</a></p>
        <p>Font: "Righteous" by Astigmatic, SIL Open Font License 1.1 (<a href="assets/fonts/OFL.txt">license</a>).</p>
        <p>All product and company names are trademarks of their respective owners; their mention implies no affiliation or endorsement.</p>`,
    },
    de: {
      "skip": "Zum Inhalt springen",
      "nav.trailer": "Trailer", "nav.screens": "Screenshots", "nav.features": "Funktionen", "nav.contact": "Kontakt",
      "hero.tagline": "Wähle. Vergleiche. CLASH!",
      "hero.lead": "Das klassische Quartett-Duell in liebevoller Pixel-Art – mit Retro-Welten zum Sammeln, vier Rivalen mit Charakter und Sonderregeln, die jede Runde auf den Kopf stellen.",
      "hero.soon": "Bald erhältlich", "hero.watch": "Trailer ansehen", "hero.follow": "Auf Bluesky folgen",
      "trailer.title": "Trailer",
      "shots.title": "Screenshots", "shots.hint": "Screenshot antippen zum Vergrößern.",
      "shots.prev": "Vorheriger Screenshot", "shots.next": "Nächster Screenshot", "lb.close": "Schließen",
      "shots.caps": ["Wähle. Vergleiche. CLASH!", "Retro-Welten zum Sammeln – 3 inklusive, 3 weitere als Erweiterung",
        "Vier Rivalen mit Persönlichkeit", "Niedrig gewinnt – mit Bonus", "Eine aus Drei", "Karten-Dieb mit Zeitzünder",
        "Entdecke jede Karte", "Jeden Tag ein neues Duell", "Verstehe jede Partie",
        "Mehrspieler: online über Steam oder im lokalen Netzwerk (Erweiterung)",
        "Neu: das Rivalen-Turnier", "Joker – jeder gewinnt einmal", "Kartenrücken zum Freispielen"],
      "features.title": "Das erwartet dich",
      "f1.t": "Wähle. Vergleiche. CLASH!", "f1.d": "Tippe deine stärkste Kategorie – der höhere Wert gewinnt beide Karten. Blitze, Schubser und Zeitlupen-Finale machen jeden Vergleich zum Ereignis.",
      "f2.t": "3 Retro-Welten zum Sammeln", "f2.d": "Das Grundspiel ist kostenlos und enthält bereits drei komplette Welten mit je 32 Karten:",
      "f8.t": "3 weitere Retro-Welten", "f8.d": "Optionale Erweiterung mit drei weiteren erfundenen Welten mit je 32 Karten:",
      "free.badge": "Kostenlos spielbar", "free.note": "Kostenlos spielbar – optionale Erweiterungen (DLC) bringen weitere Welten und Online-Duelle.",
      "w.retro_home_computer.n": "Home Computer", "w.retro_home_computer.d": "Legendäre Heimcomputer der 70er, 80er und frühen 90er",
      "w.retro_game_consoles.n": "Retro-Spielkonsolen", "w.retro_game_consoles.d": "Großartige Videospielkonsolen der 70er und 80er",
      "w.arcade_classics.n": "Arcade Classics", "w.arcade_classics.d": "Von Pixel-Pionieren bis zu 3D-Giganten – die goldene Ära der Spielhallen",
      "w.retro_futurism.n": "Retro-Futurismus", "w.retro_futurism.d": "Fantasievolle Raumschiffe, wie sich frühere Generationen die Zukunft erträumten",
      "w.retro_superheroes.n": "Superhelden", "w.retro_superheroes.d": "Maskierte Beschützer mit unglaublichen Kräften aus vier Comic-Epochen",
      "w.retro_bmovie_monsters.n": "B-Movie-Monster", "w.retro_bmovie_monsters.d": "Schaurige Kreaturen und Kultklassiker aus der goldenen B-Movie-Ära",
      
      "f3.t": "Vier Rivalen mit Persönlichkeit", "f3.d": "Von der gut gelaunten Kiki bis zu MAX-9000 mit Kartengedächtnis: Jeder Rivale spielt anders – und hat etwas dazu zu sagen.",
      "f4.t": "Sonderregeln mischen alles auf", "f4.d": "Niedrig gewinnt, Bonus-System, Eine aus Drei, Karten-Dieb mit Zeitzünder, Kartentausch, Joker, Kritischer Treffer und mehr – einzeln zuschaltbar, damit jede Partie anders wird.",
      "f5.t": "Tages-Duell, Herausforderungen & Sammelalbum", "f5.d": "Jeden Tag ein neues Duell mit denselben Karten für alle, sechs knifflige Herausforderungen und ein Sammelalbum mit Karten zum Entdecken. Hole bis zu drei Sterne pro Karte und schalte zehn Kartenrücken frei.",
      "f9.t": "Neu: das Rivalen-Turnier", "f9.d": "Besiege Kiki, Rudi, Platine und Boss MAX-9000 nacheinander mit deinem eigenen Stapel. Nach jedem Sieg tauschst du eine Karte und wählst einen Vorteil – und jeder besiegte Rivale schenkt dir ein Extraleben.",
      "f6.t": "Schnell gelernt", "f6.d": "Ein kurzes Übungsduell mit Kiki erklärt die Grundlagen; Sonderregeln werden erklärt, sobald sie zum ersten Mal auftauchen.",
      "f7.t": "Duelliere deine Freunde", "f7.d": "Spiele gegen echte Menschen: online über Steam – Lobby erstellen und einen Freund aus der Freundesliste einladen – oder direkt im lokalen Netzwerk, sogar ohne Steam. Du wählst die Regeln, der Gegner bestätigt die Kartenverteilung. Als Erweiterung (DLC) erhältlich.",
      "contact.title": "Bleib in Kontakt", "contact.lead": "Fragen, Feedback oder Presseanfragen? Wir freuen uns auf deine Nachricht.",
      "contact.mail": "E-Mail schreiben", "dlc": "Erweiterung (DLC)", "mode.lan": "Lokales Netzwerk", "contact.bsky": "Bluesky",
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
        <h3>Deine Rechte</h3><p>Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch sowie das Recht, dich bei einer Datenschutz-Aufsichtsbehörde zu beschweren.</p>`,
      credits: `<h2>Nachweise</h2>
        <p>Trailer-Musik: "Blue Ska" Kevin MacLeod (incompetech.com), Licensed under Creative Commons: By Attribution 4.0 – <a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">creativecommons.org/licenses/by/4.0</a></p>
        <p>Schrift: „Righteous“ von Astigmatic, SIL Open Font License 1.1 (<a href="assets/fonts/OFL.txt">Lizenz</a>).</p>
        <p>Alle genannten Produkt- und Firmennamen sind Marken ihrer jeweiligen Inhaber; ihre Nennung bedeutet keine Verbindung oder Empfehlung.</p>`,
    },
  };

  let lang = "en";
  const track = document.getElementById("car-track");
  const dots = document.getElementById("car-dots");
  const video = document.getElementById("trailer-video");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCap = document.getElementById("lb-cap");
  let current = 0;

  // ---------------------------------------------------------------- Karussell
  function buildCarousel() {
    track.innerHTML = "";
    dots.innerHTML = "";
    const caps = I18N[lang]["shots.caps"];
    SHOTS.forEach((name, i) => {
      const li = document.createElement("li");
      li.innerHTML = `<button class="shot" type="button" aria-label="${caps[i]}">
          <img src="assets/img/thumbs/${lang}/${name}.jpg" alt="${caps[i]}" width="640" height="360" loading="${i < 2 ? "eager" : "lazy"}">
        </button><figcaption>${caps[i]}</figcaption>`;
      li.querySelector(".shot").addEventListener("click", () => openLightbox(i));
      track.appendChild(li);
      const dot = document.createElement("button");
      dot.type = "button";
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `${i + 1} / ${SHOTS.length}`);
      dot.addEventListener("click", () => scrollToSlide(i));
      dots.appendChild(dot);
    });
    updateDots();
  }

  function scrollToSlide(i) {
    const item = track.children[Math.max(0, Math.min(i, SHOTS.length - 1))];
    track.scrollTo({ left: item.offsetLeft - (track.clientWidth - item.clientWidth) / 2, behavior: "smooth" });
  }

  function activeIndex() {
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0, dist = Infinity;
    [...track.children].forEach((li, i) => {
      const d = Math.abs(li.offsetLeft + li.clientWidth / 2 - center);
      if (d < dist) { dist = d; best = i; }
    });
    return best;
  }

  function updateDots() {
    const a = activeIndex();
    [...dots.children].forEach((d, i) => d.setAttribute("aria-selected", i === a ? "true" : "false"));
  }

  track.addEventListener("scroll", () => requestAnimationFrame(updateDots), { passive: true });
  document.querySelector(".car-btn.prev").addEventListener("click", () => scrollToSlide(activeIndex() - 1));
  document.querySelector(".car-btn.next").addEventListener("click", () => scrollToSlide(activeIndex() + 1));

  // ---------------------------------------------------------------- Lightbox
  function showLightbox(i) {
    current = (i + SHOTS.length) % SHOTS.length;
    const cap = I18N[lang]["shots.caps"][current];
    lbImg.src = `assets/img/shots/${lang}/${SHOTS[current]}.jpg`;
    lbImg.alt = cap;
    lbCap.textContent = `${cap}  (${current + 1} / ${SHOTS.length})`;
  }
  function openLightbox(i) {
    showLightbox(i);
    if (!lightbox.open) lightbox.showModal();
  }
  lightbox.querySelector(".prev").addEventListener("click", () => showLightbox(current - 1));
  lightbox.querySelector(".next").addEventListener("click", () => showLightbox(current + 1));
  lightbox.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") showLightbox(current - 1);
    if (e.key === "ArrowRight") showLightbox(current + 1);
  });
  // Wischen auf dem Handy
  let touchX = null;
  lightbox.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  lightbox.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) showLightbox(current + (dx < 0 ? 1 : -1));
    touchX = null;
  });

  // Dialoge: Schließen-Knopf und Klick auf den Hintergrund
  document.querySelectorAll("dialog").forEach((dlg) => {
    dlg.querySelector(".lb-close").addEventListener("click", () => dlg.close());
    dlg.addEventListener("click", (e) => { if (e.target === dlg || e.target.tagName === "FIGURE") dlg.close(); });
  });
  document.querySelectorAll("[data-open]").forEach((btn) => {
    btn.addEventListener("click", () => document.getElementById("dlg-" + btn.dataset.open).showModal());
  });

  // ---------------------------------------------------------------- Sprache
  function setLang(next) {
    lang = I18N[next] ? next : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = I18N[lang][el.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = I18N[lang][el.dataset.i18nHtml]; });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", I18N[lang][el.dataset.i18nAria]));
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"));
    // Trailer in der gewählten Sprache (nur wenn er gerade nicht läuft).
    const src = `assets/video/trailer_${lang}.mp4`;
    if (!video.currentSrc.endsWith(src) && video.paused) {
      video.poster = `assets/img/trailer-poster-${lang}.jpg`;
      video.querySelector("source").src = src;
      video.load();
    }
    buildCarousel();
    if (lightbox.open) showLightbox(current);
    try { localStorage.setItem("pcc-lang", lang); } catch (e) { /* privater Modus */ }
  }

  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));

  // Klick auf einen E-Mail-Link öffnet das Mailprogramm (Adresse erst jetzt).
  document.addEventListener("click", (e) => {
    const a = e.target.closest(".js-mail");
    if (!a) return;
    e.preventDefault();
    window.location.href = `mailto:${MAIL}?subject=Pixel%20Card%20Clash`;
  });

  let initial = null;
  try { initial = localStorage.getItem("pcc-lang"); } catch (e) { /* privater Modus */ }
  if (!initial) initial = (navigator.language || "en").toLowerCase().startsWith("de") ? "de" : "en";
  setLang(initial);
})();
