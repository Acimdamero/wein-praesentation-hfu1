# PRD: Wein-Präsentation – Partnerarbeit HFU1

**Projekt:** Interaktive Wein-Präsentation  
**Autoren:** Acim und Erzal, Klasse HFU1  
**Dauer:** 40 Minuten  
**Sprache:** Einfaches Deutsch (für Ausländer)  
**Version:** 2.0 | Juni 2026  
**Primärquelle:** Lehrbuch „Alkoholische Getränke und Getränkeausschank", Kap. 6–7 (HFU Gastronomie/Kulinarik)

---

## 1. Projektübersicht

### 1.1 Ziel
Eine interaktive Web-Präsentation über Wein erstellen. Die Zuhörer bekommen einen **kurzen Überblick** über die wichtigsten Themen. Die Daten sind intern vollständig, aber auf dem Bildschirm nur das Wichtigste.

### 1.2 Aufgabe (laut Unterricht)
- **Thema:** Wein – Partnerarbeit, 40 Minuten
- **Ziel:** Überblick verschaffen
- **Aufgabe:** Kurze Präsentation mit 5 Hauptbereichen

### 1.3 Ergebnis
- Eine **veröffentlichbare Website** (HTML/CSS/JS, kein Build-Schritt)
- Ein **PRD-Dokument** (dieses Dokument)
- Tab-Navigation ohne Seitenwechsel
- Offizielle Quellenangaben

---

## 2. Zielgruppe & Präsentationsablauf (40 Min.)

### 2.1 Zielgruppe
- Klassenkameraden und Lehrer (HFU1)
- Einfaches Deutsch für Ausländer
- Kein Vorwissen über Wein nötig

### 2.2 Zeitplan (40 Minuten)

| Zeit | Abschnitt | Inhalt | Wer |
|------|-----------|--------|-----|
| 0–3 Min. | **Intro** | Begrüßung, Namen, Was ist Wein? | Acim |
| 3–10 Min. | **Tab 1** | Weinbauländer weltweit + Vergleich | Erzal |
| 10–17 Min. | **Tab 2** | 13 deutsche Weinbaugebiete | Acim |
| 17–23 Min. | **Tab 3** | Weiße & rote Rebsorten (Deutschland) | Erzal |
| 23–30 Min. | **Tab 4** | Inhaltsstoffe in Weintrauben | Acim |
| 30–36 Min. | **Tab 5** | Oechsle-Wert | Erzal |
| 36–40 Min. | **Abschluss** | Zusammenfassung + Fun Facts + Fragen | Beide |

### 2.3 Präsentationsstil
- Kurze Sätze sprechen
- Interaktive Elemente live zeigen (Karten klicken, Tabs wechseln)
- Nicht alles vorlesen – nur die wichtigsten Punkte
- Bei Fragen: Details in den aufklappbaren Bereichen

---

## 3. Seiten- & Tab-Struktur

```
┌─────────────────────────────────────────────┐
│  HEADER: Logo + Acim & Erzal, HFU1          │
├─────────────────────────────────────────────┤
│  NAV: Start | Länder | DE-Gebiete | Sorten  │
│       | Inhaltsstoffe | Oechsle | Quellen  │
├─────────────────────────────────────────────┤
│  INHALT (ein Tab sichtbar)                  │
├─────────────────────────────────────────────┤
│  FOOTER: Quellen + © 2026                 │
└─────────────────────────────────────────────┘
```

### Tabs
1. **Start** – Willkommen, Fun Facts, Navigation
2. **Weinbauländer** – Weltkarte, Vergleichstabelle, Flaschen-Mockups
3. **Deutsche Gebiete** – 13 Regionen, interaktive Karte
4. **Rebsorten** – Weiß & Rot, Karten, Mythen vs. Realität
5. **Inhaltsstoffe** – Trauben-Anatomie, interaktiv
6. **Oechsle** – Erklärung, Messung, Prädikate
7. **Quellen** – Bibliographie

---

## 4. Inhaltsanforderungen pro Tab

### Tab 1: Weinbauländer (weltweit)

**Ziel:** Die größten Weinländer vergleichen.

**Datenpunkte – Europa-Vergleich (OIV, Lehrbuch Kap. 6):**
| Land | Rebfläche (ha) | Ernte (Mio. hl) | Besonderheit |
|------|----------------|-----------------|--------------|
| Spanien | 1.021.000 | 38 | Weltweit größte Rebfläche |
| Frankreich | 792.000 | 46 | 20% Weltproduktion, Weinland Nr. 1 |
| Italien | 705.000 | 45 | Führend bei der Ernte (mit Frankreich) |
| Deutschland | 102.000 | 9 | 13 Qualitätsweinbaugebiete |
| Portugal | 229.000 | 6,2 | Höchster Konsum pro Kopf in Europa |
| Türkei | 504.000 | 0,3 | Große Fläche, wenig Ertrag |
| Griechenland | 110.000 | 2,9 | Sehr alte Weinkultur |
| Österreich | 46.000 | 2 | Grüner Veltliner als Nationalsorte |

**Frankreich (Detail, Lehrbuch):**
- 73% Rot/Rosé, 27% Weiß
- Regionen: Bordeaux, Burgund, Rhône, Loire, Elsass, Champagne
- Weiß: Chardonnay, Sémillon, Sauvignon blanc | Rot: Pinot noir, Merlot, Cabernet, Syrah
- Bekannt: Château Lafite-Rothschild, Moët & Chandon

**Spanien (Detail, Lehrbuch):**
- 17 Weinregionen, 47% Weiß, 53% Rot
- Regionen: Rioja (DOCa), Navarra, Ribera del Duero, Rueda, Penedès, Priorato
- Weiß: Airén, Verdejo, Albariño | Rot: Tempranillo, Garnacha, Monastrell
- Bekannt: Bodegas Faustino, Miguel Torres, Álvaro Palacios
- Terroir = Einfluss von Klima, Boden und Lage

**Top Weinproduzenten weltweit (neu):**
- 13 große Weinunternehmen nach Volumen/Marktbedeutung
- USA: E & J Gallo (#1), The Wine Group, Constellation Brands
- Frankreich: Castel Group, LVMH/Moët Hennessy, Pernod Ricard
- Australien: Treasury Wine Estates (Penfolds), Vinarchy (ehem. Accolade Wines)
- Italien: Antinori, Zonin | Spanien: Familia Torres
- Deutschland: Rotkäppchen-Mumm, Henkell Freixenet (Dr. Oetker)
- Sortierbare Tabelle, Karten mit Länderfilter, Balkendiagramm, Klick-Details

**UI-Elemente:**
- SVG-Weltkarte mit klickbaren Ländern
- Vergleichstabelle (sortierbar)
- Balkendiagramm: Fläche vs. Produktion
- CSS-3D-Flaschen pro Land (Farbcode pro Nation)
- Aufklappbare Detailkarten
- **Top Produzenten:** Tabelle + Karten + Volumen-Chart (filterbar nach Land)

**Quellen:** Lehrbuch Kap. 6 (OIV-Daten, primär), DWI, Vinum.eu (ergänzend), Vinetur (2025), Unternehmensberichte

---

### Tab 2: Deutsche Weinbaugebiete (13 Regionen)

**Ziel:** Alle 13 deutschen Qualitätsweinbaugebiete kurz vorstellen.

**Allgemein (Lehrbuch Kap. 7):**
- Südwest-Deutschland, nördlichste Weinregionen der Welt, kühles Klima
- Verhältnis Weiß:Rot = 65:35 (Rot wird wichtiger)
- Aufbau: Gebiet → Bereich → Großlage → Einzellage
- International: Italien/Frankreich/Spanien unterscheiden zuerst nach Herkunft

| Region | Rebfläche (ha) | Schwerpunkt | Besonderheit (Lehrbuch) | Weingüter |
|--------|----------------|-------------|-------------------------|-----------|
| Ahr | 535 | Spätburgunder | Vulkanischer Boden (Schiefer, Basalt), Genossenschaft 1868 Mayschoß | Adeneuer, Deutzerhof, Meyer-Näkel, Stodden |
| Baden | 15.142 | Burgunder | Südlichstes Gebiet, 300 km, Weinzone B, 85% Genossenschaft, Kaiserstuhl | Dr. Heger, Huber, Ziereisen |
| Franken | 6.107 | Silvaner (81% Weiß) | Bocksbeutel, „fränkisch trocken" <4 g/l, Würzburger Stein (85 ha) | Bürgerspital, Fürst, Juliusspital |
| Württemberg | 10.694 | Trollinger, Lemberger | 65% Rotwein, Schwarzriesling | Aldinger, Beurer, Dautel |
| Mosel | 8.717 | Riesling | Steilhänge, älteste Region | Dr. Loosen, Egon Müller |
| Rheingau | 3.117 | Riesling | Renommiert, rechtes Rheinufer | Robert Weil, Schloss Johannisberg |
| Rheinhessen | 26.881 | Weißwein | Größtes Gebiet, „1000 Hügel" | Keller, Gunderloch |
| Pfalz | 23.590 | Weiß + Rot | Deutsche Weinstraße, größtes Weinfest | Bürklin-Wolf, von Winning |
| Nahe | 4.202 | Riesling | Vielfältige Böden | Dönnhoff, Emrich-Schönleber |
| Mittelrhein | 467 | Riesling | Burgen, UNESCO-Welterbe | J.J. Adenehr |
| Hessische Bergstraße | 461 | Weiß | Frühester Frühling | Hessische Staatsweingüter |
| Saale-Unstrut | 765 | Weiß | Nördlichstes Gebiet | Winzerhof Gussek |
| Sachsen | 531 | Weiß | Östlichstes Gebiet, Dresden/Meißen | Schloss Proschwitz |

**UI-Elemente:**
- Interaktive Deutschland-Karte (inspiriert von deutscheweine.de)
- Region-Karten mit Aufklapp-Details
- Bilder: Weinberge, Trauben (Unsplash)
- Filter: Weiß-dominiert / Rot-dominiert

**Quellen:** Lehrbuch Kap. 7 (primär), DWI (deutscheweine.de), BMEL-Statistik 2025

---

### Tab 3: Weiße und rote Rebsorten (nur Deutschland)

**Ziel:** Die wichtigsten deutschen Sorten kennenlernen.

**Weiße Sorten (Lehrbuch Kap. 7):**
| Sorte | Farbe | Geschmack/Aroma | Regionen |
|-------|-------|-----------------|----------|
| Riesling | hellgelb | trocken, fruchtig, Steinobst | alle Gebiete |
| Grauburgunder | kupfern | Mandel, Honig | Baden, Rheinhessen, Pfalz |
| Müller-Thurgau | hell | leicht, duftend | Rheinhessen, Pfalz, Franken |
| Silvaner | gelb-grün | fruchtig-würzig, wenig Säure | Franken, Rheinhessen, Pfalz |
| Weißburgunder | gelb-grün | elegant, fein | Baden, Rheinhessen, Pfalz |
| Kerner | hellgrün | grüner Apfel | Rheinhessen, Pfalz, Franken |

**Rote Sorten (Lehrbuch Kap. 7):**
| Sorte | Farbe | Geschmack/Aroma | Regionen |
|-------|-------|-----------------|----------|
| Spätburgunder | rubinrot | Himbeere, Erdbeere | Ahr, Baden, Pfalz |
| Dornfelder | dunkelrot | weiche Tannine | Rheinhessen, Pfalz, Nahe |
| Lemberger | dunkel | würzig, Tannine (= Blaufränkisch) | Württemberg, Pfalz |
| Portugieser | hellrot | leicht, wenig Tannine | Rheinhessen, Pfalz, Württemberg |
| Trollinger | hellrot | hohe Säure, frisch | Württemberg, Baden |
| Schwarzriesling | dunkel | samtig | Württemberg |

**Fun Facts / Mythen vs. Realität:**
- Mythos: „Deutschland macht nur süßen Wein" → Realität: Die meisten Weine sind trocken
- Mythos: „Alle deutschen Weine sind billig" → Realität: Es gibt auch Premium-Weine (GG-Riesling)
- Fakt: Deutschland ist weltweit Nr. 8 bei der Weinproduktion
- Fakt: Riesling kommt ursprünglich aus Deutschland
- Fakt: Der Bocksbeutel ist nur in Franken erlaubt

**Quellen:** Lehrbuch Kap. 7 (primär), BMEL-Statistik 2025, DWI

---

### Tab 4: Inhaltsstoffe in Weintrauben

**Ziel:** Aufbau einer Weintraube verstehen.

**Anatomie (interaktiv klickbar):**
1. **Schale (Haut)** – Farbe, Tannine, Aromastoffe
2. **Fruchtfleisch (Pulp)** – Wasser (~75%), Zucker, Säure
3. **Kerne** – Tannine, Öl (meist nicht im Wein)
4. **Strunk** – viel Tannin (wird entfernt)
5. **Beeren** – eine Traube hat viele kleine Beeren

**Chemische Inhaltsstoffe:**
| Stoff | Funktion | Anteil (ca.) |
|-------|----------|--------------|
| Wasser | Basis | 70–80% |
| Zucker (Glucose, Fructose) | Gärung → Alkohol | 15–25% |
| Säuren (Weinsäure, Apfelsäure) | Frische, Haltbarkeit | 0,5–1% |
| Tannine | Struktur, Farbe (Rotwein) | in der Schale |
| Aromastoffe | Geruch und Geschmack | sehr wenig |
| Mineralstoffe | Boden-Geschmack | Spuren |
| Pektin | Struktur im Fruchtfleisch | wenig |

**Zusätzlich aus Lehrbuch Kap. 6–7:**
- **Maischegärung:** Bei Rotwein bleiben Schale und Most zusammen → rote Farbe
- **BSA (biologischer Säureabbau):** Milchsäuregärung, Apfelsäure → Milchsäure, Wein wird weicher
- **Barrique:** 225 Liter = ca. 300 Flaschen à 0,75 l
- **Toastung:** leicht = Vanille, mittel = Karamell, stark = bittere Schokolade

**UI:** SVG-Traube mit klickbaren Zonen, Info-Panel rechts

**Quellen:** Lehrbuch Kap. 6–7 (primär), DWI, Delinat

---

### Tab 5: Oechsle-Wert

**Ziel:** Was ist Oechsle? Einfach erklärt.

**Kerninhalte:**
- **Definition:** Oechsle (°Oe) misst das Mostgewicht – wie schwer der Traubensaft ist
- **Erfinder:** Christian Ferdinand Oechsle, ca. 1836
- **Prinzip:** 1 °Oe = 1 Gramm mehr als 1 Liter Wasser (1000 g)
- **Bedeutung:** Mehr Zucker = höherer Oechsle-Wert = reifere Trauben
- **Messung:** Refraktometer oder Oechsle-Waage

**Deutsche Weingüteklassen (Lehrbuch Kap. 7):**
| Klasse | Mindest-°Oe | Details |
|--------|-------------|---------|
| Wein aus Deutschland | 44 (Zone A) / 50 (Zone B Baden) | Einfachste Klasse |
| Landwein | 47 | 85% aus Region, nur trocken/halbtrocken, 26 Landweinregionen |
| Qualitätswein | 57 | Höchste Klasse mit Prädikaten |

**Weinzonen:**
- Zone A: natürlicher Alkohol min. 5% Vol. (44°Oe)
- Zone B (nur Baden): natürlicher Alkohol min. 6% Vol. (50°Oe)
- Nach Anreicherung: min. 8,5% Vol. | Gesamtsäure: min. 3,5 g/l

**Prädikatsstufen:**
| Stufe | Mindest-°Oe | Bedeutung |
|-------|-------------|-----------|
| Kabinett | 67 | leicht, frisch |
| Spätlese | 76 | später geerntet |
| Auslese | 83 | sehr reif |
| Beerenauslese | 110 | einzelne Beeren |
| Trockenbeerenauslese | 150 | getrocknete Beeren |
| Eiswein | 110 | gefrorene Trauben |

**Wichtig:** Hoher Oechsle = nicht automatisch süß! International: Brix (USA), Baumé (FR/ES), KMW (AT/IT).

**Quellen:** Lehrbuch Kap. 7 (primär), Weinfreunde.de, Weinverordnung

---

## 5. UI/UX-Spezifikationen

### 5.1 Farbpalette
| Farbe | Hex | Verwendung |
|-------|-----|------------|
| Burgund | `#6B1D3A` | Header, Akzente |
| Dunkelrot | `#4A0E2E` | Hintergrund-Gradient |
| Gold | `#C9A84C` | Buttons, Highlights |
| Creme | `#F5F0E8` | Hintergrund |
| Weinrot | `#8B2942` | Karten, Hover |
| Grün | `#2D5A27` | Weinberg-Akzente |

### 5.2 Typografie
- **Überschriften:** Playfair Display (Google Fonts) – elegant
- **Text:** Source Sans 3 – gut lesbar, einfach
- **Größe:** Mindestens 16px für Fließtext

### 5.3 Navigation
- Horizontale Tab-Leiste (Desktop)
- Hamburger-Menü (Mobile)
- Kein Seiten-Reload (JavaScript)
- Aktiver Tab: Gold-Unterstrich
- Smooth Scroll bei Anker-Links

### 5.4 Interaktive Elemente
- Klickbare Weltkarte (Länder-Highlights)
- Deutschland-Regionen-Karte (Hover + Klick)
- Aufklappbare Akkordeon-Karten
- SVG-Trauben-Anatomie (klickbare Zonen)
- Oechsle-Simulator (Slider)
- Sortierbare Vergleichstabelle
- Animierte Flaschen-Mockups (CSS 3D)

### 5.5 Responsive Design
- Desktop: 1200px max-width
- Tablet: 2-Spalten-Grid
- Mobile: 1-Spalte, gestapelte Tabs

---

## 6. Datenquellen & Zitate

| Nr. | Quelle | URL / Referenz | Daten |
|-----|--------|----------------|-------|
| **0** | **Lehrbuch HFU (primär)** | Alkoholische Getränke und Getränkeausschank, Kap. 6–7 | OIV-Länderdaten, 13 Gebiete, Sorten, Oechsle, Inhaltsstoffe, Schaumwein |
| 1 | Deutsches Weininstitut (DWI) | https://www.deutscheweine.de | Regionen, Statistiken |
| 2 | BMEL-Statistik | https://www.bmel-statistik.de | Rebflächen, Sorten |
| 3 | Statistisches Bundesamt | https://www.destatis.de | Weinproduktion DE |
| 4 | OIV | https://www.oiv.int | Weltproduktion (bestätigt Lehrbuch) |
| 5 | Weinfreunde.de | https://www.weinfreunde.de | Oechsle-Erklärung |
| 6 | Delinat | https://www.delinat.com | Trauben-Inhaltsstoffe |
| 7 | Vinum.eu | https://www.vinum.eu | Ländervergleich (ergänzend) |
| 8 | Vinetur | https://www.vinetur.com | Top-Weinunternehmen weltweit (2025) |
| 9 | Rotkäppchen-Mumm / Henkell Freixenet | Unternehmenswebsites | Deutsche Sekt-Produzenten |
| 10 | Pernod Ricard | https://www.pernod-ricard.com | Vinarchy-Fusion, Champagner |

### Bonus-Inhalte (Fun Facts, Lehrbuch)
- **Schaumwein:** min. 3 bar CO₂; Champagne: 9 Monate Hefe, 15 Monate Lagerung
- **Süße EU-Skala:** naturherb/brut nature (bis 3 g/l) bis mild/doux (über 50 g/l)
- **Alkoholfrei:** max. 0,5% Vol.; weniger Alkohol = weniger Kalorien
- **Flaschen:** 0,25 l, 0,375 l, 0,75 l, 1,5 l Magnum
- **Transportruhe:** 2–3 Wochen nach Lieferung

---

## 7. Asset-Anforderungen

### 7.1 Bilder (lokal + CDN-Fallback)
- **`assets/images/grapes/`** – 12 deutsche Rebsorten, sortenspezifische Fotos (Wikimedia Commons)
- **`assets/images/regions/`** – 13 Weinbaugebiete, Landschaftsfotos (Wikimedia + Unsplash)
- **`assets/images/wines/`** – Weinflaschen pro Land (Unsplash)
- **`assets/images/general/`** – Hero-Weinberg, Trauben-Anatomie, Rot/Weiß im Glas, Refraktometer
- Fallback-Kette in `js/app.js`: lokal → CDN → SVG-Platzhalter

### 7.2 SVG-Grafiken (selbst erstellt)
- Weltkarte mit Weinländern
- Deutschland-Karte mit 13 Regionen
- Trauben-Anatomie
- Trauben-Silhouetten pro Sorte

### 7.3 CSS 3D-Flaschen-Mockups
- Frankreich: Bordeaux-Form, dunkles Glas
- Italien: Chianti-Form, grüne Kapsel
- Spanien: Rioja-Form
- Deutschland: Rheinflasche (braun)
- USA: Napa-Cabernet-Form
- Chile, Australien, Argentinien: je eigene Farbe

### 7.4 Icons
- Emoji + SVG-Icons für Navigation
- Weinblatt-Symbol als Logo

---

## 8. Technischer Stack

| Komponente | Technologie | Begründung |
|------------|-------------|------------|
| HTML | HTML5 semantisch | Einfach, barrierefrei |
| CSS | CSS3 + Custom Properties | Kein Build nötig |
| JavaScript | Vanilla ES6+ | Keine Abhängigkeiten |
| Schriften | Google Fonts CDN | Schnell, kostenlos |
| Bilder | Unsplash CDN | Kostenlose Platzhalter |
| Hosting | GitHub Pages / lokal | Einfach veröffentlichen |

**Kein Build-Schritt nötig.** Dateien direkt öffnen oder auf GitHub Pages deployen.

### Dateistruktur
```
wein-praesentation-hfu1/
├── index.html
├── PRD.md
├── README.md
├── assets/images/
│   ├── grapes/      (12 Sorten)
│   ├── regions/     (13 Gebiete)
│   ├── wines/       (8 Länder)
│   └── general/     (Hero, Anatomie, Oechsle)
├── css/
│   └── style.css
└── js/
    └── app.js
```

---

## 9. Präsentations-Skript (40 Minuten)

### Intro (3 Min.) – Acim
> „Guten Tag! Wir sind Acim und Erzal aus der Klasse HFU1. Heute sprechen wir über Wein. Wein ist ein altes Getränk aus Trauben. Menschen machen Wein seit über 6.000 Jahren. Wir zeigen euch heute 5 Themen: Weinländer, deutsche Gebiete, Rebsorten, Inhaltsstoffe und den Oechsle-Wert."

### Tab 1 (7 Min.) – Erzal
> „Spanien hat mit 1,02 Millionen Hektar die größte Rebfläche der Welt. Frankreich produziert 20 Prozent des Weltweins – Weinland Nummer eins. Italien und Frankreich führen bei der Ernte. Deutschland hat 102.000 Hektar. Schaut auf die Karte – wir können jedes Land anklicken."

*[Weltkarte zeigen, Tabelle erklären, Flaschen zeigen]*

### Tab 2 (7 Min.) – Acim
> „Deutschland hat 13 Weinbaugebiete. Das größte ist Rheinhessen mit fast 27.000 Hektar. Die bekannteste Region für Riesling ist die Mosel mit ihren steilen Hängen. In der Ahr wächst fast nur Rotwein – das ist besonders, weil Deutschland meist Weißwein macht."

*[Karte klicken, 2–3 Regionen aufklappen]*

### Tab 3 (6 Min.) – Erzal
> „Der wichtigste deutsche Wein ist Riesling – er wächst auf 23 Prozent aller Rebflächen. Bei Rotwein ist Spätburgunder Nummer 1. Viele denken, deutscher Wein ist immer süß. Das stimmt nicht! Heute sind die meisten Weine trocken."

*[Sorten-Karten zeigen, Fun Facts vorlesen]*

### Tab 4 (7 Min.) – Acim
> „Eine Weintraube hat drei Hauptteile: Schale, Fruchtfleisch und Kerne. In der Schale sind Farbe und Tannine. Im Fruchtfleisch ist Zucker und Wasser. Der Zucker wird später zu Alkohol. Klickt auf die Traube auf dem Bildschirm!"

*[Interaktive Traube demonstrieren]*

### Tab 5 (6 Min.) – Erzal
> „Oechsle ist eine deutsche Maßeinheit. Wein aus Deutschland braucht mindestens 44 Grad Oechsle. Qualitätswein mindestens 57. Kabinett ab 67, Spätlese ab 76. Baden ist in Weinzone B – dort braucht man 50 Grad. Aber: hoher Oechsle heißt nicht automatisch süßer Wein!"

*[Slider zeigen, Prädikatstabelle erklären]*

### Abschluss (4 Min.) – Beide
> **Acim:** „Wir haben gelernt: Die Welt hat viele Weinländer, Deutschland hat 13 Regionen, Riesling ist König, Trauben haben Zucker und Säure, und Oechsle misst die Reife."
> **Erzal:** „Habt ihr Fragen? Unsere Quellen findet ihr im letzten Tab. Danke fürs Zuhören!"

---

## 10. Erfolgskriterien

- [ ] Alle 5 Pflicht-Themen abgedeckt
- [ ] Einfaches Deutsch durchgängig
- [ ] Tab-Navigation funktioniert ohne Reload
- [ ] Mindestens 3 interaktive Elemente pro Tab
- [ ] Alle Quellen zitiert
- [ ] Responsive auf Handy und Laptop
- [ ] Lokal öffenbar (Doppelklick auf index.html)
- [ ] GitHub Pages deploybar
- [ ] Präsentation in 40 Minuten durchführbar

---

*Erstellt: Juni 2026 | Acim & Erzal, Klasse HFU1*
