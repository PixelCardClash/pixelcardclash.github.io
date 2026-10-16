# Pixel Card Clash – Website

Statische Webseite für GitHub Pages (kein Build-Schritt nötig).

## Hochladen
1. Neues GitHub-Repository anlegen (z. B. `pixelcardclash.github.io` für die Adresse `https://pixelcardclash.github.io`, oder beliebiger Name → `https://<benutzer>.github.io/<repo>/`).
2. **Den Inhalt dieses Ordners** (nicht den Ordner selbst) ins Repository hochladen – inklusive der versteckten Datei `.nojekyll`.
3. Repository → *Settings* → *Pages* → *Source: Deploy from a branch* → Branch `main`, Ordner `/ (root)` → *Save*. Nach 1–2 Minuten ist die Seite online.

## Vor der Veröffentlichung zwingend
- Impressum ist ausgefüllt (Anbieterangaben in `script.js`, deutsch und englisch).

## Inhalt
- `index.html`, `style.css`, `script.js` – Seite, Gestaltung, Sprachumschaltung/Karussell/Lightbox
- `assets/img/shots/<en|de>/` – Screenshots 1920×1080, `thumbs/` – Vorschaubilder
- `assets/video/trailer_<en|de>.mp4` – Trailer (720p, für das Web verkleinert)
- `assets/fonts/` – Spielschrift „Righteous“ (SIL OFL 1.1, Lizenz liegt bei)

## Stand 2026-10-16
- Screenshots 02 (neun Welten), 05 (Eine aus Drei als Stapel) und 10 (Lobby mit Schild „Multiplayer DLC“) aus `promo/steam_screenshots/` übernommen (Webfassung JPG-Qualität 80, Vorschaubilder 640 × 360).
- Welten-Bereich: „Inklusive“ (3 Welten) und zwei getrennte Themen-Pakete mit eigenem Schild wie im Spiel – gelb „Zukunftsmaschinen DLC“ (Retro-Futurismus, Retro Roboter, Alien Technologie), hellblau „Fantasiewesen DLC“ (Superhelden, B-Movie-Monster, Retro Fantasy); Symbole der drei neuen Welten in `assets/img/worlds/` (aus den Themen-Icons, 96 × 96).
- Mehrspieler-Karte mit hellgrünem Schild „Multiplayer DLC“, „Multiplayer“ statt „Online-Duelle“; Hinweis „jedes DLC wird einzeln gekauft“ in der Multiplayer-Karte. Den Preis nennt die Seite auf Nutzerwunsch (2026-10-16) nicht.
- Trailer (`assets/video/`) und Vorschaubilder (`assets/img/trailer-poster-*.jpg`) am 2026-10-16 neu (1280 × 720 aus der 16:9-Fassung).
