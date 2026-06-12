# Wein-Präsentation – Acim & Erzal, HFU1

Interaktive Wein-Präsentation für die Partnerarbeit (40 Minuten).

**Status: READY** (Juni 2026 – Final Polish)

## Schnellstart

```bash
cd /Users/acim.agwengmail.com/Projects/wein-praesentation-hfu1
python3 -m http.server 8765
# Browser: http://localhost:8765
```

Offline-Backup: `index.html` direkt öffnen (ohne OSM-Karte, sonst voll funktionsfähig).

## Hilfsdateien

| Datei | Inhalt |
|-------|--------|
| `PRESENTATION-SKRIPT.md` | 40-Min-Skript (Indonesisch + einfaches Deutsch) |
| `CHECKLIST-HARI-H.md` | Checkliste Präsentationstag, Smoke-Test, Internet-Hinweise |
| `PRD.md` | Product Requirements Document |

## Dateien

| Datei | Beschreibung |
|-------|--------------|
| `index.html` | Hauptseite mit 7 Tabs |
| `css/style.css` | Design (Burgund, Gold, Creme) |
| `js/app.js` | Interaktivität, Daten, Bilder |
| `assets/images/` | 75 lokale Fotos (offline-fähig) |

## Bilder (`assets/images/`)

| Ordner | Anzahl | Inhalt | Quellen |
|--------|--------|--------|---------|
| `grapes/` | 36 | 12 Sorten × Traube + Blatt + Rebstock | Wikimedia Commons (CC BY-SA) |
| `regions/` | 13 | Alle deutschen Weinbaugebiete | Wikimedia Commons |
| `wines/` | 13 | 9 Flaschen in „Flaschen der Weinländer" + Reserve | Wikimedia Commons |
| `general/` | 13 | Anatomie, Maische, Barrique, Oechsle, Hero | Wikimedia + lokal |

### Flaschen der Weinländer (9 Länder)

Echte Weinflaschen-Fotos mit Markennamen:

| Land | Marke | Datei |
|------|-------|-------|
| Frankreich | Château Pontet-Canet | `bordeaux.jpg` |
| Spanien | Viña Ardanza | `rioja.jpg` |
| Italien | Chianti di Montespertoli | `chianti.jpg` |
| Deutschland | Selbach-Oster | `riesling-de.jpg` |
| Portugal | Niepoort | `porto.jpg` |
| USA | Dominus Estate | `napa-cabernet.jpg` |
| Chile | Viña Errázuriz | `carmenere.jpg` |
| Australien | Charles Cimicky | `barossa-shiraz.jpg` |
| Argentinien | La Finca | `malbec.jpg` |

## Features (verifiziert)

- 15 Länder mit Export-/Wirtschaftstabellen + 5 Charts
- 13 Top-Produzenten (Tabelle, Karten, Filter, Chart)
- 9 Weinflaschen mit echten Fotos + Marken
- 12 Rebsorten mit Modal (Botanik, Aromen, Gastronomie, Mythen)
- 13 DE-Gebiete mit Leaflet/OSM-Karte (Internet nötig)
- Mythos vs. Realität auf allen Inhalts-Tabs (inkl. PRD: billige Weine, Bocksbeutel, DE Top 10)
- Oechsle-Simulator, sortierbare Tabellen

## Tabs

1. **Start** – Intro, Fun Facts, Navigation
2. **Länder** – OIV-Vergleich, Charts, Flaschen, Produzenten
3. **DE-Gebiete** – 13 Regionen, Leaflet-Karte
4. **Sorten** – 6 weiße + 6 rote Sorten, Modal
5. **Inhaltsstoffe** – Trauben-Anatomie, Maischegärung
6. **Oechsle** – Qualitätsklassen, Simulator
7. **Quellen** – Bibliographie

## Primärquelle

**Lehrbuch:** Alkoholische Getränke und Getränkeausschank, Kap. 6–7 (HFU Gastronomie/Kulinarik)

Ergänzend: DWI, OIV State of the World 2024, BMEL-Statistik, Vinetur (2025)

## GitHub Pages

1. Repository auf GitHub erstellen
2. Dateien pushen
3. Settings → Pages → Branch `main`, Ordner `/ (root)`
4. URL: `https://<username>.github.io/wein-praesentation-hfu1/`

---

© 2026 Acim & Erzal, Klasse HFU1
