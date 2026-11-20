// Pixel Card Clash – Webseite: Sprachumschaltung (EN/DE), Sternenhimmel,
// Screenshot-Karussell, Lightbox, rechtliche Dialoge, Menü fürs Handy.
// Keine externen Bibliotheken, keine Cookies. Texte stehen in js/i18n.js.
(() => {
  "use strict";

  const I18N = window.PCC_I18N;
  const MAIL = window.PCC_MAIL;

  // Steam-Knopf: seit 2026-11-19 an (Shopseite veröffentlicht, „Bald erhältlich“).
  const STEAM_STORE_LIVE = true;
  const STEAM_URL = "https://store.steampowered.com/app/5585760/";

  const SHOTS = ["01_clash", "02_worlds", "03_world_extra", "04_world_extras_overview", "05_rivals",
    "06_retro_moments", "07_low_wins_bonus", "08_one_of_three", "09_card_thief", "10_joker",
    "11_card_swap", "12_tempus_fugit", "13_category_lock", "14_collection", "15_daily_duel",
    "16_analysis", "17_tournament", "18_multiplayer", "19_card_backs", "20_retro_look", "21_retro_arcade",
    "22_mars_landing", "23_text_adventure"];

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lang = "en";
  const track = document.getElementById("car-track");
  const dots = document.getElementById("car-dots");
  const video = document.getElementById("trailer-video");
  const lightbox = document.getElementById("lightbox");
  const lbImg = document.getElementById("lb-img");
  const lbCap = document.getElementById("lb-cap");
  let current = 0;

  // ---------------------------------------------------------------- Steam
  document.querySelectorAll(".js-steam").forEach((a) => {
    if (STEAM_STORE_LIVE) { a.href = STEAM_URL; a.hidden = false; } else { a.remove(); }
  });

  // ---------------------------------------------------------------- Kopfzeile
  const topbar = document.querySelector(".topbar");
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  window.addEventListener("scroll", () => topbar.classList.toggle("scrolled", window.scrollY > 8), { passive: true });
  menuBtn.addEventListener("click", () => {
    const open = menuBtn.getAttribute("aria-expanded") !== "true";
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
    nav.classList.toggle("open", open);
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    menuBtn.setAttribute("aria-expanded", "false");
    nav.classList.remove("open");
  }));

  // ---------------------------------------------------------------- Sternenhimmel
  // Wie im Spiel: ruhiger Sternenhimmel, einzelne Sterne funkeln. Läuft nur,
  // solange die Seite sichtbar ist; mit „Bewegung reduzieren“ steht er still.
  const sky = document.getElementById("sky");
  const ctx = sky.getContext("2d");
  let stars = [];
  function buildSky() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    sky.width = Math.round(innerWidth * dpr);
    sky.height = Math.round(innerHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.round((innerWidth * innerHeight) / 5200);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * innerWidth, y: Math.random() * innerHeight,
      r: Math.random() < 0.12 ? 1.6 : Math.random() * 0.9 + 0.4,
      a: Math.random() * 0.6 + 0.25, s: Math.random() * 2 + 0.6, p: Math.random() * 6.3,
      warm: Math.random() < 0.18,
    }));
  }
  function drawSky(t) {
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for (const st of stars) {
      const tw = reduceMotion ? 1 : 0.65 + 0.35 * Math.sin(t / 1000 * st.s + st.p);
      ctx.globalAlpha = st.a * tw;
      ctx.fillStyle = st.warm ? "#ffd98a" : "#ffeecc";
      ctx.fillRect(st.x, st.y, st.r, st.r);
    }
  }
  let skyFrame = 0;
  let lastDraw = 0;
  function loop(t) {
    // 20 Bilder pro Sekunde genügen fürs Funkeln und schonen den Akku.
    if (t - lastDraw > 50) { drawSky(t); lastDraw = t; }
    skyFrame = requestAnimationFrame(loop);
  }
  buildSky();
  drawSky(0);
  if (!reduceMotion) skyFrame = requestAnimationFrame(loop);
  window.addEventListener("resize", () => { buildSky(); drawSky(performance.now()); });
  document.addEventListener("visibilitychange", () => {
    if (reduceMotion) return;
    cancelAnimationFrame(skyFrame);
    if (!document.hidden) skyFrame = requestAnimationFrame(loop);
  });

  // ---------------------------------------------------------------- Einblenden beim Scrollen
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); reveal.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));

  // ---------------------------------------------------------------- Karten neigen sich zur Maus
  if (!reduceMotion && window.matchMedia("(hover: hover)").matches) {
    document.querySelectorAll(".tilt").forEach((card) => {
      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        card.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
        card.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
        card.style.setProperty("--gx", `${((x + 0.5) * 100).toFixed(1)}%`);
        card.style.setProperty("--gy", `${((y + 0.5) * 100).toFixed(1)}%`);
      });
      card.addEventListener("pointerleave", () => {
        card.style.removeProperty("--rx");
        card.style.removeProperty("--ry");
      });
    });
  }

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
    track.scrollTo({ left: item.offsetLeft - (track.clientWidth - item.clientWidth) / 2, behavior: reduceMotion ? "auto" : "smooth" });
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
    [...track.children].forEach((li, i) => li.classList.toggle("active", i === a));
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

  // Bild in der Multiplayer-Karte: vergrößert wie im Karussell.
  const multiShot = document.querySelector(".multi-shot");
  multiShot.addEventListener("click", () => openLightbox(SHOTS.indexOf(multiShot.dataset.shot)));

  // ---------------------------------------------------------------- Sprache
  function setLang(next) {
    lang = I18N[next] ? next : "en";
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = I18N[lang][el.dataset.i18n]; });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => { el.innerHTML = I18N[lang][el.dataset.i18nHtml]; });
    document.querySelectorAll("[data-i18n-aria]").forEach((el) => el.setAttribute("aria-label", I18N[lang][el.dataset.i18nAria]));
    document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang ? "true" : "false"));
    document.querySelector(".lang").dataset.active = lang;
    // Trailer in der gewählten Sprache (nur wenn er gerade nicht läuft).
    const src = `assets/video/trailer_${lang}.mp4`;
    if (!video.currentSrc.endsWith(src) && video.paused) {
      video.poster = `assets/img/trailer-poster-${lang}.jpg`;
      video.querySelector("source").src = src;
      video.load();
    }
    buildCarousel();
    multiShot.src = `assets/img/thumbs/${lang}/18_multiplayer.jpg`;
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

  // Direkte Adressen für Impressum, Datenschutz und Nachweise (z. B. für Steam):
  // /#imprint, /#privacy, /#credits öffnen das Fenster in der gewählten Sprache,
  // /#impressum, /#datenschutz, /#nachweise erzwingen Deutsch.
  const HASH_DIALOGS = {
    imprint: ["imprint", null], privacy: ["privacy", null], credits: ["credits", null],
    impressum: ["imprint", "de"], datenschutz: ["privacy", "de"], nachweise: ["credits", "de"],
  };
  function openFromHash() {
    const entry = HASH_DIALOGS[(location.hash || "").replace(/^#/, "").toLowerCase()];
    if (!entry) return;
    if (entry[1] && lang !== entry[1]) setLang(entry[1]);
    const dlg = document.getElementById("dlg-" + entry[0]);
    if (dlg && !dlg.open) dlg.showModal();
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
