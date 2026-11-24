# Pixel Card Clash – Website

Statische Webseite für GitHub Pages (kein Build-Schritt nötig).

## Hochladen
1. Neues GitHub-Repository anlegen (z. B. `pixelcardclash.github.io` für die Adresse `https://pixelcardclash.github.io`, oder beliebiger Name → `https://<benutzer>.github.io/<repo>/`).
2. **Den Inhalt dieses Ordners** (nicht den Ordner selbst) ins Repository hochladen – inklusive der versteckten Datei `.nojekyll`.
3. Repository → *Settings* → *Pages* → *Source: Deploy from a branch* → Branch `main`, Ordner `/ (root)` → *Save*. Nach 1–2 Minuten ist die Seite online.

## Vor der Veröffentlichung zwingend
- Impressum ist ausgefüllt (Anbieterangaben in `js/i18n.js`, deutsch und englisch; bis 2026-11-17 in `script.js`).

## Inhalt
- `index.html` – Seite (Abschnitte: Hero, So wird gespielt, Trailer, Screenshots, Funktionen, Rivalen, Welten, Multiplayer, Kontakt, Rechtliches)
- `css/style.css` – Gestaltung (Spielfarben als CSS-Variablen in `:root`, Schrift Righteous aus `assets/fonts/`)
- `js/i18n.js` – **alle Texte** Englisch und Deutsch (gleiche Schlüssel in beiden Sprachen; im HTML `data-i18n`, `data-i18n-html`, `data-i18n-aria`), dazu Impressum, Datenschutz, Nachweise
- `js/main.js` – Sprachumschaltung, Sternenhimmel, Karussell, Lightbox, Dialoge, Handy-Menü; oben `STEAM_STORE_LIVE` (Steam-Knopf)
- `assets/img/shots/<en|de>/` – Screenshots 1920×1080, `thumbs/` – Vorschaubilder
- `assets/video/trailer_<en|de>.mp4` – Trailer (720p, für das Web verkleinert)
- `assets/fonts/` – Spielschrift „Righteous“ (SIL OFL 1.1, Lizenz liegt bei)

## Stand 2026-10-16
- Screenshots 02 (neun Welten), 05 (Eine aus Drei als Stapel) und 10 (Lobby mit Schild „Multiplayer DLC“) aus `promo/steam_screenshots/` übernommen (Webfassung JPG-Qualität 80, Vorschaubilder 640 × 360).
- Welten-Bereich: „Inklusive“ (3 Welten) und zwei getrennte Themen-Pakete mit eigenem Schild wie im Spiel – gelb „Zukunftsmaschinen DLC“ (Retro-Futurismus, Retro Roboter, Alien Technologie), hellblau „Fantasiewesen DLC“ (Superhelden, B-Movie-Monster, Retro Fantasy); Symbole der drei neuen Welten in `assets/img/worlds/` (aus den Themen-Icons, 96 × 96).
- Mehrspieler-Karte mit hellgrünem Schild „Multiplayer DLC“, „Multiplayer“ statt „Online-Duelle“; Hinweis „jedes DLC wird einzeln gekauft“ in der Multiplayer-Karte. Den Preis nennt die Seite auf Nutzerwunsch (2026-10-16) nicht.
- Trailer (`assets/video/`) und Vorschaubilder (`assets/img/trailer-poster-*.jpg`) am 2026-10-16 neu (1280 × 720 aus der 16:9-Fassung).
- 2026-10-19: Screenshots 01, 04, 05, 06, 07, 12 (Webfassung JPG-Qualität 80, Vorschaubilder 640 × 360), Trailer (`assets/video/`, 1280 × 720, 60 fps) und Vorschaubilder `trailer-poster-*.jpg` neu — eigene Kategorie-Symbole, Glitzer im Strahlenkranz, Supporter-Orden in Gold, neue Töne.
- 2026-10-19 (2): 20 statt 13 Screenshots, neu geordnet (neu: Welt-Extra Padi, Übersicht der Welt-Extras, Retro-Momente/Spion, Kartentausch, Tempus Fugit, Kategoriesperre, Retro-Look); `script.js` `SHOTS` und Bildtexte `shots.caps` (DE/EN) angepasst, alte Dateinamen entfernt.
- 2026-10-25: alle 20 Screenshots und Vorschaubilder neu (Album als Kartenstapel mit Holo-Karte, dunkle Spielanalyse, geführte Mehrspieler-Seite, Kartenrücken „8-Bit“, neue Blitze und Porträts), Bildtext 14 und Text „f5“ (DE/EN) nennen die Holo-Karten aus kostenlosen Booster-Packs; Trailer und Vorschaubilder neu („Klarer Sieg!“ bei Sekunde 12,5).
- 2026-10-26: alle 20 Screenshots und Vorschaubilder im neuen Karten-Look (Welt-Rahmen, Münzen, Scharten, Gegenlicht, neue Spielknöpfe), Bildtext 14 (DE/EN) nennt die Scharten; Trailer und Vorschaubilder neu („Klarer Sieg!“ bei Sekunde 12,5).
- 2026-11-05: 21 statt 20 Screenshots (neu `21_retro_arcade`, `script.js` `SHOTS`, Bildtexte DE/EN, Text 06 und „f4“ nennen die Retro-Arcade), alle Bilder, Vorschaubilder, Trailer (`assets/video/`, 1280 × 720) und Vorschaubilder `trailer-poster-*.jpg` neu.
- 2026-11-08: Direkte Adressen für die Rechtstexte (für Steam): `https://pixelcardclash.github.io/#imprint`, `#privacy`, `#credits` (öffnen das Fenster in der gewählten Sprache) sowie `#impressum`, `#datenschutz`, `#nachweise` (erzwingen Deutsch) — `script.js` `HASH_DIALOGS`. Die Datenschutzerklärung der Seite hat einen neuen Teil „Das Spiel“ (Steam Cloud, Steam-Status und Bestenlisten, Mehrspieler, Fehlerberichte; DE/EN), sinngemäß aus `pixel-card-clash/legal/Datenschutzerklärung*.txt`. Nach Änderungen an den Spieltexten dort beide Stellen angleichen. Neu hochladen nötig (siehe „Hochladen“).
- 2026-11-19 (2): **Steam-Knopf eingeschaltet** (`js/main.js` `STEAM_STORE_LIVE = true`): Die Shopseite (App 5585760) ist seit heute öffentlich und als „Bald erhältlich“ gekennzeichnet; der Knopf „Auf die Steam-Wunschliste“ / „Wishlist on Steam“ führt dorthin. Lokal geprüft. Neu hochladen nötig.
- 2026-11-19: 23 statt 21 Screenshots (neu `22_mars_landing`, `23_text_adventure`), alle Bilder und Vorschaubilder mit Pixelstufe „Mittel“ neu, Bildtexte DE/EN angepasst, Texte „f4“, „f7“ (Gäste spielen kostenlos), „f9“; Trailer (`assets/video/`) und `trailer-poster-*.jpg` neu. Neu hochladen nötig.
- 2026-11-17: **Neu gestaltet** (Nutzerwunsch): dunkles Design im Stil des Spiels — animierter Sternenhimmel (20 Bilder/s, steht bei „Bewegung reduzieren“ und im Hintergrund-Tab still), Strahlenkranz hinter dem Logo, Knöpfe mit Sockelkante wie im Spiel (`TwoToneBox`), Funktionen als Spielkarten mit Weltrahmen und Wert-Münzen (neigen sich zur Maus), neue Abschnitte „So wird gespielt“ (3 Schritte), „Deine Rivalen“ (Porträts, Stufe, Spruch aus dem Spiel), „Neun Retro-Welten“ (Grundspiel und zwei Pakete mit den Schildfarben aus dem Spiel), eigene Multiplayer-Karte; Sprachumschalter als Schieber, Handy-Menü. Fließtext in der Systemschrift (besser lesbar), Righteous für Überschriften und Knöpfe. Weiterhin ohne externe Inhalte (kein CDN) — die Datenschutzerklärung bleibt so gültig. Alle bisherigen Texte, Links, Rechtstexte und die direkten Adressen (`#imprint`, `#impressum` …) unverändert übernommen. Dateien neu geordnet: `style.css` → `css/style.css`, `script.js` → `js/i18n.js` + `js/main.js`. **Steam-Knopf** „Auf die Steam-Wunschliste“ (App 5585760) ist vorbereitet, aber ausgeblendet: in `js/main.js` `STEAM_STORE_LIVE = true` setzen, sobald die Shopseite öffentlich ist. Lokal prüfen: im Ordner `promo` `python3 -m http.server 8765 --bind 127.0.0.1` und `http://localhost:8765/website/` öffnen (wie der Unterpfad auf GitHub Pages).

## Alle Funktionen (2026-11-21)

Abschnitt `#all-features` vor dem Kontakt: je Bereich ein aufklappbarer Kasten (`<details>`), Knopf „Alle aufklappen“, Link „Alle Funktionen ansehen ↓“ unter den Funktionskarten. Der Inhalt steht in `js/feature_list.js` und wird **nicht von Hand** gepflegt: Quelle ist `promo/FUNKTIONSLISTE.md`, danach im Ordner `promo/` `python3 tools/feature_list_js.py` ausführen. Aufgebaut wird die Liste in `main.js` (`buildFeatureList()`, auch beim Sprachwechsel; offene Bereiche bleiben offen), Darstellung am Ende von `css/style.css`.

## Stand 2026-11-23

Sechs Minispiele statt fünf: Bilder 21 (Retro-Arcade) und 22 (Marslandung, nur noch der eigene Lander) neu, **neu 24 Alien Angriff** und **25 Asteroidenhagel** (`shots/`, `thumbs/`, DE/EN; `js/main.js` `SHOTS`, Bildunterschriften in `js/i18n.js`). Funktionskarte „Retro-Arcade“ (`f4.d`) und die Funktionsliste (`js/feature_list.js`, neu erzeugt mit `tools/feature_list_js.py`) nennen sechs Minispiele, ohne „zu zweit an einem Gerät“. Trailer der Webseite (`assets/video/trailer_<lang>.mp4`, 1280 × 720, CRF 30) und Vorschaubilder (`trailer-poster-<lang>.jpg`) neu aus dem Trailer vom 2026-11-23. Lokal geprüft (alle Dateien laden, 25 Bildunterschriften je Sprache, keine Fehler in der Konsole); **noch nicht hochgeladen** — macht der Nutzer selbst.

## Stand 2026-11-24

Texte nach `promo/MARKETING_LEITFADEN.md` überarbeitet (DE/EN): Einleitung unter dem Logo (`hero.lead`) mit der Kernbotschaft „Das Quartett vom Schulhof als Retro-Pixel-Duell – mit Rivalen, die frech werden, und Arcade-Spielen mitten in der Partie“; Funktionskarten neu geordnet (Überraschungen → Tages-Duell → „In einer Minute gelernt“ → Rivalen-Turnier), „Überraschungen, so viele du willst“ (`f4`) endet mit „drück auf ‚Klassisch‘“, das Tages-Duell (`f5`) nennt das Teilen als Kästchen-Raster, `f6` sagt „kein Deckbau, keine lange Einführung“; Meta-Beschreibungen (`description`, `og:description`) und die englischen Ersatztexte im HTML angeglichen. Lokal geprüft (beide Sprachen, keine Fehler in der Konsole); **noch nicht hochgeladen** — macht der Nutzer selbst.
