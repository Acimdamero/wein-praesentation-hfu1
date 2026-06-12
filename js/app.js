/* Wein-Präsentation HFU1 – Interaktivität */
/* Daten: Lehrbuch Kap. 6 (OIV 2014/15) + OIV State of the World 2024 */

const DATA_SOURCES_NOTE = 'Lehrbuch Kap. 6 (OIV 2014/15) für Rebfläche & Ernte · OIV World Report 2024 für Export & aktuelle Rankings';

const COUNTRY_ORDER_EUROPE = [
  'spanien', 'frankreich', 'italien', 'deutschland', 'portugal', 'tuerkei', 'griechenland', 'oesterreich'
];

const COUNTRY_ORDER_WORLD = [
  'usa', 'argentinien', 'chile', 'australien', 'suedafrika', 'china', 'neuseeland'
];

const COUNTRIES = {
  spanien: {
    name: 'Spanien', flag: '🇪🇸', region: 'europa', ha: 1021000, hl: 38,
    oivHa: 930000, oivHl: 31.0, oivYear: 2024,
    exportHl: 20.0, exportValueEuro: 3.0, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 9.9,
    weissPercent: 47, rotPercent: 53,
    worldRankArea: 1, worldRankProduction: 3, worldProdPercent: 13.7,
    note: 'Weltweit größte Rebfläche – aber niedriger Ertrag pro ha',
    besonderheit: 'Größte Rebfläche weltweit, Castilla-La Mancha',
    regionen: 'Rioja (DOCa), Navarra, Ribera del Duero, Rueda, Penedès, Priorato',
    hauptsorten: 'Weiß: Airén, Verdejo, Albariño · Rot: Tempranillo, Garnacha, Monastrell',
    produzenten: 'Bodegas Faustino, Miguel Torres, Álvaro Palacios',
    terroir: 'Terroir = Einfluss von Klima, Boden und Lage auf den Wein',
    sources: ['Lehrbuch Kap. 6', 'OIV 2024'],
    regionImage: 'assets/images/countries/spanien-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Spanien',
    regionImageCaption: 'Spanische Weinbaugebiete – Rioja, Katalonien, Andalusien, Galicien u.a.',
    color: '#C41E3A', label: 'Rioja'
  },
  frankreich: {
    name: 'Frankreich', flag: '🇫🇷', region: 'europa', ha: 792000, hl: 46,
    oivHa: 783000, oivHl: 36.1, oivYear: 2024,
    exportHl: 12.8, exportValueEuro: 11.7, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 23.0,
    weissPercent: 27, rotPercent: 73,
    worldRankArea: 2, worldRankProduction: 2, worldProdPercent: 20,
    note: '20 % der Weltproduktion (Lehrbuch) – höchster Exportwert weltweit',
    besonderheit: 'Exportwert Nr. 1 (~11,7 Mrd. €, OIV 2024)',
    regionen: 'Bordeaux, Burgund, Rhône, Loire, Elsass, Champagne',
    hauptsorten: 'Weiß: Chardonnay, Sémillon, Sauvignon blanc · Rot: Pinot noir, Merlot, Cabernet, Syrah',
    produzenten: 'Château Lafite-Rothschild, Moët & Chandon, Groupe Castel',
    sources: ['Lehrbuch Kap. 6', 'OIV 2024', 'FEVS 2024'],
    regionImage: 'assets/images/countries/frankreich-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Frankreich',
    regionImageCaption: 'Französische Weinregionen – Bordeaux, Burgund, Champagne, Loire, Rhône, Elsass',
    color: '#1E3A5F', label: 'Bordeaux'
  },
  italien: {
    name: 'Italien', flag: '🇮🇹', region: 'europa', ha: 705000, hl: 45,
    oivHa: 728000, oivHl: 44.1, oivYear: 2024,
    exportHl: 21.7, exportValueEuro: 8.1, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 22.3,
    weissPercent: 42, rotPercent: 58,
    worldRankArea: 4, worldRankProduction: 1, worldProdPercent: 19.5,
    note: 'Weltweit größte Ernte (OIV 2024: 44,1 Mio. hl)',
    besonderheit: 'Größter Weinexporteur nach Volumen (21,7 Mio. hl)',
    regionen: 'Toskana, Piemont, Venetien, Sizilien, Apulien',
    hauptsorten: 'Sangiovese, Primitivo, Nebbiolo, Pinot grigio, Prosecco (Glera)',
    produzenten: 'Antinori, Gaja, Ferrari (Sekt), Zonin',
    sources: ['Lehrbuch Kap. 6', 'OIV 2024'],
    regionImage: 'assets/images/countries/italien-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Italien',
    regionImageCaption: 'Italienische DOC-Weinregionen – Toskana, Piemont, Venetien, Sizilien',
    color: '#008C45', label: 'Chianti'
  },
  deutschland: {
    name: 'Deutschland', flag: '🇩🇪', region: 'europa', ha: 102000, hl: 9,
    oivHa: 103000, oivHl: 7.8, oivYear: 2024,
    exportHl: 3.1, exportValueEuro: 1.0, exportYear: 2024,
    marketValueEuro: 4.5, marketValueYear: 2023,
    consumptionHl: 17.8,
    weissPercent: 65, rotPercent: 35,
    worldRankArea: 14, worldRankProduction: 9, worldProdPercent: 3.4,
    note: '13 Qualitätsweinbaugebiete – größter Weinimporteur nach Volumen',
    besonderheit: 'Weinmarkt ~4,5 Mrd. € Umsatz (Statista 2023)',
    regionen: 'Mosel, Rheingau, Pfalz, Baden, Franken u.a.',
    hauptsorten: 'Riesling, Spätburgunder, Müller-Thurgau, Silvaner, Dornfelder',
    produzenten: 'Dr. Loosen, Robert Weil, Henkell Freixenet, Rotkäppchen-Mumm',
    sources: ['Lehrbuch Kap. 6', 'OIV 2024', 'Statista 2023'],
    color: '#4A3728', label: 'Riesling',
    regionImage: 'assets/images/countries/deutschland-regions.jpg',
    regionImageAlt: 'Deutsche Weinbaugebiete',
    regionImageCaption: '13 deutsche Qualitätsweinbaugebiete – Mosel, Rheingau, Pfalz, Baden u.a.'
  },
  portugal: {
    name: 'Portugal', flag: '🇵🇹', region: 'europa', ha: 229000, hl: 6.2,
    oivHa: 241000, oivHl: 6.9, oivYear: 2024,
    exportHl: 3.5, exportValueEuro: 1.0, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 5.6,
    weissPercent: 38, rotPercent: 62,
    worldRankArea: 11, worldRankProduction: 10, worldProdPercent: 3.1,
    note: 'Höchster Weinkonsum pro Kopf in Europa',
    besonderheit: 'Portwein aus dem Douro – weltberühmt',
    regionen: 'Douro, Alentejo, Vinho Verde, Dão, Bairrada',
    hauptsorten: 'Touriga Nacional, Tinta Roriz, Alvarinho, Trincadeira',
    produzenten: 'Cálem, Sandeman, Quinta do Noval, Sogrape',
    sources: ['Lehrbuch Kap. 6', 'OIV 2024'],
    color: '#006600', label: 'Porto',
    regionImage: 'assets/images/countries/portugal-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Portugal',
    regionImageCaption: 'Portugiesische Weinregionen – Douro, Alentejo, Vinho Verde, Dão'
  },
  griechenland: {
    name: 'Griechenland', flag: '🇬🇷', region: 'europa', ha: 110000, hl: 2.9,
    oivHa: 105000, oivHl: 1.4, oivYear: 2024,
    exportHl: 0.4, exportValueEuro: 0.08, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 2.0,
    weissPercent: 35, rotPercent: 65,
    worldRankArea: 16, worldRankProduction: 18, worldProdPercent: 0.6,
    note: 'Sehr alte Weinkultur – über 4.000 Jahre',
    besonderheit: 'Inselweine: Santorini (Assyrtiko), vulkanische Böden',
    regionen: 'Santorini, Nemea, Naoussa, Kreta, Makedonien',
    hauptsorten: 'Assyrtiko, Agiorgitiko, Xinomavro, Moschofilero',
    produzenten: 'Gaia Wines, Kir-Yianni, Boutari',
    sources: ['Lehrbuch Kap. 6', 'OIV 2024'],
    color: '#0D5EAF', label: 'Assyrtiko',
    regionImage: 'assets/images/countries/griechenland-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Griechenland',
    regionImageCaption: 'Griechische Weinregionen – Santorini, Nemea, Naoussa, Kreta'
  },
  oesterreich: {
    name: 'Österreich', flag: '🇦🇹', region: 'europa', ha: 46000, hl: 2,
    oivHa: 45000, oivHl: 2.2, oivYear: 2024,
    exportHl: 0.6, exportValueEuro: 0.15, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 2.2,
    weissPercent: 67, rotPercent: 33,
    worldRankArea: 20, worldRankProduction: 17, worldProdPercent: 1.0,
    note: 'Grüner Veltliner ist Nationalsorte',
    besonderheit: 'DAC-System (Districtus Austriae Controllatus)',
    regionen: 'Wachau, Burgenland, Steiermark, Niederösterreich',
    hauptsorten: 'Grüner Veltliner, Zweigelt, Blaufränkisch, Riesling',
    produzenten: 'F.X. Pichler, Loimer, Bründlmayer',
    sources: ['Lehrbuch Kap. 6', 'OIV 2024'],
    color: '#ED1C24', label: 'Grüner Veltliner',
    regionImage: 'assets/images/countries/oesterreich-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Österreich',
    regionImageCaption: 'Österreichische Weinbaugebiete – Wachau, Burgenland, Steiermark'
  },
  tuerkei: {
    name: 'Türkei', flag: '🇹🇷', region: 'europa', ha: 504000, hl: 0.3,
    oivHa: 402000, oivHl: 0.5, oivYear: 2024,
    exportHl: 0.05, exportValueEuro: 0.01, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 0.8,
    weissPercent: 30, rotPercent: 70,
    worldRankArea: 5, worldRankProduction: 25, worldProdPercent: 0.2,
    note: 'Große Fläche, wenig Weinertrag – viele Tafeltrauben',
    besonderheit: '5. größte Rebfläche weltweit, aber wenig Weinproduktion',
    regionen: 'Anatolien, Thrakien, Ägäis, Kapadokien',
    hauptsorten: 'Öküzgözü, Boğazkere, Emir, Narince',
    produzenten: 'Kavaklıdere, Doluca, Sevilen',
    sources: ['Lehrbuch Kap. 6', 'OIV 2024'],
    color: '#E30A17', label: 'Anatolien',
    regionImage: 'assets/images/countries/tuerkei-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Türkei',
    regionImageCaption: 'Türkische Weinregionen – Anatolien, Thrakien, Ägäis'
  },
  usa: {
    name: 'USA', flag: '🇺🇸', region: 'welt', ha: 412000, hl: 23.3,
    oivHa: 385000, oivHl: 21.1, oivYear: 2024,
    exportHl: 2.4, exportValueEuro: 1.2, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 33.3,
    weissPercent: 40, rotPercent: 60,
    worldRankArea: 6, worldRankProduction: 4, worldProdPercent: 9.4,
    note: 'Größter Weinkonsument weltweit (33,3 Mio. hl, OIV 2024)',
    besonderheit: 'Kalifornien = 80 %+ der US-Produktion (Napa, Sonoma)',
    regionen: 'Napa Valley, Sonoma, Central Coast, Oregon, Washington',
    hauptsorten: 'Cabernet Sauvignon, Chardonnay, Pinot noir, Zinfandel',
    produzenten: 'E & J Gallo, The Wine Group, Robert Mondavi',
    sources: ['OIV 2024'],
    color: '#3C3B6E', label: 'Napa Cabernet',
    regionImage: 'assets/images/countries/usa-regions.jpg',
    regionImageAlt: 'Weinbaugebiete USA',
    regionImageCaption: 'US-Weinregionen – Napa Valley, Sonoma, Oregon, Washington'
  },
  argentinien: {
    name: 'Argentinien', flag: '🇦🇷', region: 'welt', ha: 218000, hl: 11.8,
    oivHa: 200000, oivHl: 10.9, oivYear: 2024,
    exportHl: 2.1, exportValueEuro: 0.63, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 7.7,
    weissPercent: 20, rotPercent: 80,
    worldRankArea: 7, worldRankProduction: 5, worldProdPercent: 4.8,
    note: 'Mendoza – Hochlagenweine aus den Anden',
    besonderheit: 'Malbec ist die Nationalsorte (80 %+ Rotwein)',
    regionen: 'Mendoza, Salta, San Juan, Patagonien',
    hauptsorten: 'Malbec, Bonarda, Torrontés, Cabernet Sauvignon',
    produzenten: 'Catena Zapata, Bodega Norton, Trapiche',
    sources: ['OIV 2024'],
    color: '#75AADB', label: 'Malbec',
    regionImage: 'assets/images/countries/argentinien-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Argentinien',
    regionImageCaption: 'Argentinische Weinregionen – Mendoza, Salta, Patagonien'
  },
  chile: {
    name: 'Chile', flag: '🇨🇱', region: 'welt', ha: 190000, hl: 12.5,
    oivHa: 166000, oivHl: 9.3, oivYear: 2024,
    exportHl: 7.8, exportValueEuro: 1.5, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 2.5,
    weissPercent: 25, rotPercent: 75,
    worldRankArea: 8, worldRankProduction: 7, worldProdPercent: 4.1,
    note: '4. größter Weinexporteur weltweit (7,8 Mio. hl)',
    besonderheit: 'Natürlicher Schutz: Anden, Pazifik, Wüste',
    regionen: 'Maipo, Colchagua, Casablanca, Maule, Aconcagua',
    hauptsorten: 'Cabernet Sauvignon, Carmenère, Sauvignon blanc, Merlot',
    produzenten: 'Concha y Toro, Montes, Santa Rita',
    sources: ['OIV 2024'],
    color: '#D52B1E', label: 'Carmenère',
    regionImage: 'assets/images/countries/chile-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Chile',
    regionImageCaption: 'Chilenische Weinregionen – Maipo, Colchagua, Casablanca, Maule'
  },
  australien: {
    name: 'Australien', flag: '🇦🇺', region: 'welt', ha: 146000, hl: 12.5,
    oivHa: 159000, oivHl: 10.2, oivYear: 2024,
    exportHl: 6.5, exportValueEuro: 1.6, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 5.3,
    weissPercent: 45, rotPercent: 55,
    worldRankArea: 9, worldRankProduction: 6, worldProdPercent: 4.5,
    note: 'Exportorientiert – 60 %+ der Produktion geht ins Ausland',
    besonderheit: 'Shiraz (Syrah) und Barossa Valley weltberühmt',
    regionen: 'Barossa Valley, McLaren Vale, Margaret River, Hunter Valley',
    hauptsorten: 'Shiraz, Cabernet Sauvignon, Chardonnay, Riesling',
    produzenten: 'Penfolds, Treasury Wine Estates, Jacob\'s Creek, Hardys',
    sources: ['OIV 2024'],
    color: '#FFCD00', label: 'Barossa Shiraz',
    regionImage: 'assets/images/countries/australien-regions.jpg',
    regionImageAlt: 'Weinbaugebiete Australien',
    regionImageCaption: 'Australische Weinregionen – Barossa Valley, McLaren Vale, Margaret River'
  },
  suedafrika: {
    name: 'Südafrika', flag: '🇿🇦', region: 'welt', ha: 125000, hl: 10.4,
    oivHa: 120000, oivHl: 8.8, oivYear: 2024,
    exportHl: 3.6, exportValueEuro: 0.6, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 4.3,
    weissPercent: 55, rotPercent: 45,
    worldRankArea: 10, worldRankProduction: 8, worldProdPercent: 3.9,
    note: 'Wine of Origin (WO) – Qualitätssystem seit 1973',
    besonderheit: 'Chenin blanc (Steen) ist die meistgepflanzte Sorte',
    regionen: 'Stellenbosch, Paarl, Franschhoek, Swartland, Constantia',
    hauptsorten: 'Chenin blanc, Pinotage, Cabernet Sauvignon, Shiraz',
    produzenten: 'KWV, Nederburg, Kanonkop',
    sources: ['OIV 2024'],
    color: '#007A4D', label: 'Pinotage'
  },
  china: {
    name: 'China', flag: '🇨🇳', region: 'welt', ha: 785000, hl: 6.5,
    oivHa: 753000, oivHl: 2.6, oivYear: 2024,
    exportHl: 0.3, exportValueEuro: 0.05, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 5.5,
    weissPercent: 50, rotPercent: 50,
    worldRankArea: 3, worldRankProduction: 12, worldProdPercent: 1.2,
    note: '3. größte Rebfläche – aber wenig Weinproduktion',
    besonderheit: 'Ningxia & Shandong – aufstrebende Weinregionen',
    regionen: 'Ningxia, Shandong, Xinjiang, Yunnan, Hebei',
    hauptsorten: 'Cabernet Gernischt, Cabernet Sauvignon, Merlot, Chardonnay',
    produzenten: 'Changyu, Great Wall, Dynasty',
    sources: ['OIV 2024'],
    color: '#DE2910', label: 'Ningxia',
    regionImage: 'assets/images/countries/china-regions.jpg',
    regionImageAlt: 'Weinbaugebiete China',
    regionImageCaption: 'Chinesische Weinregionen – Ningxia, Shandong, Xinjiang, Yunnan'
  },
  neuseeland: {
    name: 'Neuseeland', flag: '🇳🇿', region: 'welt', ha: 40000, hl: 3.2,
    oivHa: 42000, oivHl: 2.8, oivYear: 2024,
    exportHl: 2.7, exportValueEuro: 1.1, exportYear: 2024,
    marketValueEuro: null, consumptionHl: 0.3,
    weissPercent: 75, rotPercent: 25,
    worldRankArea: 15, worldRankProduction: 13, worldProdPercent: 1.3,
    note: 'Premium-Exportland – Sauvignon blanc weltweit gefragt',
    besonderheit: 'Marlborough Sauvignon blanc = Exportschlager Nr. 1',
    regionen: 'Marlborough, Hawke\'s Bay, Central Otago, Martinborough',
    hauptsorten: 'Sauvignon blanc, Pinot noir, Chardonnay, Riesling',
    produzenten: 'Cloudy Bay, Villa Maria, Oyster Bay',
    sources: ['OIV 2024'],
    color: '#00247D', label: 'Marlborough SB'
  }
};

const COUNTRY_REGION_IMAGES = {
  spanien: {
    image: 'assets/images/countries/spanien-regions.jpg',
    alt: 'Weinbaugebiete Spanien',
    caption: 'Spanische Weinbaugebiete – Rioja, Katalonien, Andalusien, Galicien u.a.'
  },
  frankreich: {
    image: 'assets/images/countries/frankreich-regions.jpg',
    alt: 'Weinbaugebiete Frankreich',
    caption: 'Französische Weinregionen – Bordeaux, Burgund, Champagne, Loire, Rhône, Elsass'
  },
  italien: {
    image: 'assets/images/countries/italien-regions.jpg',
    alt: 'Weinbaugebiete Italien',
    caption: 'Italienische DOC-Weinregionen – Toskana, Piemont, Venetien, Sizilien'
  },
  deutschland: {
    image: 'assets/images/countries/deutschland-regions.jpg',
    alt: 'Deutsche Weinbaugebiete',
    caption: '13 deutsche Qualitätsweinbaugebiete – Mosel, Rheingau, Pfalz, Baden u.a.'
  },
  portugal: {
    image: 'assets/images/countries/portugal-regions.jpg',
    alt: 'Weinbaugebiete Portugal',
    caption: 'Portugiesische Weinregionen – Douro, Alentejo, Vinho Verde, Dão'
  },
  griechenland: {
    image: 'assets/images/countries/griechenland-regions.jpg',
    alt: 'Weinbaugebiete Griechenland',
    caption: 'Griechische Weinregionen – Santorini, Nemea, Naoussa, Kreta'
  },
  oesterreich: {
    image: 'assets/images/countries/oesterreich-regions.jpg',
    alt: 'Weinbaugebiete Österreich',
    caption: 'Österreichische Weinbaugebiete – Wachau, Burgenland, Steiermark'
  },
  tuerkei: {
    image: 'assets/images/countries/tuerkei-regions.jpg',
    alt: 'Weinbaugebiete Türkei',
    caption: 'Türkische Weinregionen – Anatolien, Thrakien, Ägäis'
  },
  usa: {
    image: 'assets/images/countries/usa-regions.jpg',
    alt: 'Weinbaugebiete USA',
    caption: 'US-Weinregionen – Napa Valley, Sonoma, Oregon, Washington'
  },
  argentinien: {
    image: 'assets/images/countries/argentinien-regions.jpg',
    alt: 'Weinbaugebiete Argentinien',
    caption: 'Argentinische Weinregionen – Mendoza, Salta, Patagonien'
  },
  chile: {
    image: 'assets/images/countries/chile-regions.jpg',
    alt: 'Weinbaugebiete Chile',
    caption: 'Chilenische Weinregionen – Maipo, Colchagua, Casablanca, Maule'
  },
  australien: {
    image: 'assets/images/countries/australien-regions.jpg',
    alt: 'Weinbaugebiete Australien',
    caption: 'Australische Weinregionen – Barossa Valley, McLaren Vale, Margaret River'
  },
  suedafrika: {
    image: 'assets/images/countries/suedafrika-regions.jpg',
    alt: 'Weinbaugebiete Südafrika',
    caption: 'Südafrikanische Weinregionen – Stellenbosch, Paarl, Franschhoek, Constantia'
  },
  china: {
    image: 'assets/images/countries/china-regions.jpg',
    alt: 'Weinbaugebiete China',
    caption: 'Chinesische Weinregionen – Ningxia, Shandong, Xinjiang, Yunnan'
  },
  neuseeland: {
    image: 'assets/images/countries/neuseeland-regions.jpg',
    alt: 'Weinbaugebiete Neuseeland',
    caption: 'Neuseeländische Weinregionen – Marlborough, Hawke\'s Bay, Central Otago'
  }
};

Object.values(COUNTRIES).forEach(c => {
  if (!c.weiss) c.weiss = `${c.weissPercent}%`;
  if (!c.rot) c.rot = `${c.rotPercent}%`;
  if (!c.sorten) c.sorten = c.hauptsorten;
});

function countryYieldHlPerHa(c) {
  if (!c?.ha || !c?.hl) return null;
  return (c.hl * 1_000_000) / c.ha;
}

function fmtEuroBillions(value, year) {
  if (value == null) return '–';
  const label = value >= 1
    ? `${value.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} Mrd. €`
    : `${Math.round(value * 1000).toLocaleString('de-DE')} Mio. €`;
  return year ? `${label} (${year})` : label;
}

function fmtExportCell(c) {
  if (c.exportHl == null) return '–';
  const vol = `${c.exportHl.toLocaleString('de-DE', { maximumFractionDigits: 1 })} Mio. hl`;
  if (c.exportValueEuro != null) {
    return `${vol}<br><small>${fmtEuroBillions(c.exportValueEuro, c.exportYear)}</small>`;
  }
  return vol;
}

function fmtWeissRot(c) {
  if (c.weissPercent == null) return '–';
  return `${c.weissPercent}% / ${c.rotPercent}%`;
}

function oivDiffNote(c) {
  if (!c.oivHa && !c.oivHl) return '';
  const parts = [];
  if (c.oivHa && Math.abs(c.oivHa - c.ha) > c.ha * 0.02) {
    parts.push(`Fläche OIV ${c.oivYear}: ${c.oivHa.toLocaleString('de-DE')} ha`);
  }
  if (c.oivHl && Math.abs(c.oivHl - c.hl) > c.hl * 0.05) {
    parts.push(`Ernte OIV ${c.oivYear}: ${c.oivHl.toLocaleString('de-DE')} Mio. hl`);
  }
  return parts.length ? parts.join(' · ') : '';
}

const DE_MAP = {
  viewBox: { w: 580, h: 700 },
  geo: { minLon: 5.8, maxLon: 15.1, minLat: 47.3, maxLat: 55.1 },
  padding: { x: 40, y: 35, w: 500, h: 630 }
};

function geoToMap(lat, lon) {
  const { minLon, maxLon, minLat, maxLat } = DE_MAP.geo;
  const { x, y, w, h } = DE_MAP.padding;
  return {
    cx: x + ((lon - minLon) / (maxLon - minLon)) * w,
    cy: y + ((maxLat - lat) / (maxLat - minLat)) * h
  };
}

const GERMANY_BORDER = [
  [53.6, 5.9], [54.2, 6.4], [54.9, 7.4], [54.85, 8.6], [54.7, 9.9],
  [54.5, 11.1], [54.3, 12.6], [54.0, 14.4], [53.0, 14.85], [51.6, 14.9],
  [50.2, 14.85], [49.1, 14.5], [48.4, 14.0], [47.9, 13.0], [47.55, 12.0],
  [47.35, 10.6], [47.45, 9.2], [47.55, 8.0], [47.9, 7.4], [48.4, 7.5],
  [49.1, 7.2], [49.5, 6.5], [50.2, 6.05], [51.5, 5.95], [52.5, 5.9],
  [53.6, 5.9]
];

function regionMarkerRadius(ha) {
  const minHa = 461;
  const maxHa = 26881;
  const minR = 8;
  const maxR = 24;
  const t = (ha - minHa) / (maxHa - minHa);
  return minR + Math.max(0, Math.min(1, t)) * (maxR - minR);
}

function svgToDataUri(svg) {
  return 'data:image/svg+xml,' + encodeURIComponent(svg.trim().replace(/\s+/g, ' '));
}

const GRAPE_PALETTES = {
  white: [
    { g1: '#8BC34A', g2: '#7CB342', g3: '#AED581', g4: '#689F38', leaf: '#558B2F', bg1: '#F5F0E8', bg2: '#E8F5E9' },
    { g1: '#C9A84C', g2: '#E8D5A3', g3: '#A8C256', g4: '#8DAF3F', leaf: '#6B8E23', bg1: '#FFF8E7', bg2: '#F0E6C8' },
    { g1: '#9CCC65', g2: '#7CB342', g3: '#C5E1A5', g4: '#558B2F', leaf: '#33691E', bg1: '#F1F8E9', bg2: '#DCEDC8' },
    { g1: '#AED581', g2: '#9CCC65', g3: '#C5E1A5', g4: '#7CB342', leaf: '#558B2F', bg1: '#E8F5E9', bg2: '#C8E6C9' },
    { g1: '#D4C478', g2: '#C9A84C', g3: '#E8D5A3', g4: '#A89850', leaf: '#6B8E23', bg1: '#FFFDE7', bg2: '#FFF9C4' },
    { g1: '#7CB342', g2: '#8BC34A', g3: '#AED581', g4: '#689F38', leaf: '#33691E', bg1: '#E8F5E9', bg2: '#A5D6A7' }
  ],
  red: [
    { g1: '#8B2942', g2: '#6B1D3A', g3: '#A03050', g4: '#4A0E2E', leaf: '#2D5A27', bg1: '#3d1520', bg2: '#5a2030' },
    { g1: '#6B1D3A', g2: '#8B2942', g3: '#5a1528', g4: '#4A0E2E', leaf: '#1B4332', bg1: '#2a1018', bg2: '#4a1828' },
    { g1: '#A03050', g2: '#6B1D3A', g3: '#8B2942', g4: '#3d0a1e', leaf: '#2D5A27', bg1: '#351018', bg2: '#552030' },
    { g1: '#7B2942', g2: '#5a1528', g3: '#9B3952', g4: '#4A0E2E', leaf: '#1B4332', bg1: '#2d1218', bg2: '#481828' },
    { g1: '#8B2942', g2: '#A04058', g3: '#6B1D3A', g4: '#4A0E2E', leaf: '#33691E', bg1: '#3a1520', bg2: '#5c2838' },
    { g1: '#6B1D3A', g2: '#4A0E2E', g3: '#8B2942', g4: '#5a1528', leaf: '#2D5A27', bg1: '#280a14', bg2: '#421820' }
  ]
};

function grapeSvgDataUri(type, variant) {
  const p = GRAPE_PALETTES[type][variant % GRAPE_PALETTES[type].length];
  const ox = (variant % 3) * 6 - 6;
  const oy = (variant % 4) * 3 - 4;
  const cx = 150 + ox;
  const cy = 78 + oy;
  const grapes = [
    [cx - 18, cy + 8, 11, p.g4], [cx - 6, cy + 12, 12, p.g1], [cx + 8, cy + 10, 11, p.g2],
    [cx - 24, cy - 4, 10, p.g3], [cx - 10, cy - 2, 12, p.g2], [cx + 4, cy - 4, 11, p.g1],
    [cx + 16, cy - 2, 10, p.g4], [cx - 16, cy - 18, 10, p.g3], [cx - 2, cy - 16, 12, p.g1],
    [cx + 12, cy - 14, 10, p.g2], [cx + 2, cy - 28, 9, p.g4]
  ];
  const grapeCircles = grapes.map(([x, y, r, fill]) =>
    `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${p.g4}" stroke-width="1" opacity="0.95"/>`
  ).join('');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 140">
    <defs><linearGradient id="gbg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${p.bg1}"/><stop offset="100%" stop-color="${p.bg2}"/></linearGradient></defs>
    <rect width="300" height="140" fill="url(#gbg)"/>
    <ellipse cx="230" cy="32" rx="30" ry="14" fill="${p.leaf}" transform="rotate(28 230 32)" opacity="0.85"/>
    <ellipse cx="208" cy="48" rx="24" ry="12" fill="${p.leaf}" transform="rotate(-18 208 48)" opacity="0.7"/>
    <path d="M ${cx} ${cy + 14} Q ${cx + 4} ${cy - 18} ${cx + 18} ${cy - 38}" stroke="#5C4033" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${grapeCircles}
    <ellipse cx="${cx}" cy="${cy + 16}" rx="28" ry="8" fill="rgba(0,0,0,0.08)"/>
  </svg>`;
  return svgToDataUri(svg);
}

const REGION_MAP_VIEW = { w: 600, h: 200, pad: { x: 45, y: 12, w: 510, h: 176 } };

function geoToRegionMap(lat, lon) {
  const { minLon, maxLon, minLat, maxLat } = DE_MAP.geo;
  const { x, y, w, h } = REGION_MAP_VIEW.pad;
  return {
    x: x + ((lon - minLon) / (maxLon - minLon)) * w,
    y: y + ((maxLat - lat) / (maxLat - minLat)) * h
  };
}

function latLonPath(points, project) {
  return points.map(([lat, lon], i) => {
    const p = project(lat, lon);
    return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
  }).join(' ') + ' Z';
}

function latLonPolyline(points, project) {
  return points.map(([lat, lon], i) => {
    const p = project(lat, lon);
    return `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
  }).join(' ');
}

/* Approximate Anbaugebiet-Umrisse (lat/lon) – vereinfacht, geografisch erkennbar */
const REGION_POLYGONS = {
  ahr: [
    [50.63, 6.84], [50.58, 6.90], [50.50, 6.98], [50.42, 7.06], [50.40, 7.12],
    [50.44, 7.14], [50.52, 7.08], [50.60, 7.00], [50.64, 6.92]
  ],
  baden: [
    [49.58, 7.48], [49.35, 7.52], [48.75, 7.55], [48.10, 7.58], [47.58, 7.62],
    [47.52, 7.85], [47.55, 8.15], [47.72, 8.42], [48.20, 8.38], [48.85, 8.22],
    [49.45, 8.05], [49.62, 7.82], [49.65, 7.58]
  ],
  franken: [
    [50.28, 9.55], [50.15, 9.85], [49.95, 10.25], [49.72, 10.65], [49.58, 11.05],
    [49.52, 11.35], [49.58, 11.55], [49.78, 11.42], [50.02, 10.95], [50.22, 10.35],
    [50.32, 9.85]
  ],
  wuerttemberg: [
    [49.28, 8.55], [49.05, 8.85], [48.78, 9.15], [48.52, 9.55], [48.38, 9.95],
    [48.42, 10.35], [48.62, 10.45], [48.92, 10.15], [49.18, 9.75], [49.35, 9.35],
    [49.38, 8.85]
  ],
  mosel: [
    [50.45, 6.35], [50.25, 6.55], [50.05, 6.78], [49.88, 6.95], [49.72, 7.08],
    [49.58, 7.18], [49.48, 7.28], [49.42, 7.38], [49.48, 7.42], [49.62, 7.32],
    [49.82, 7.12], [50.02, 6.88], [50.22, 6.62], [50.38, 6.48]
  ],
  rheingau: [
    [50.12, 7.78], [50.08, 7.88], [50.02, 8.02], [49.98, 8.12], [49.94, 8.18],
    [49.96, 8.22], [50.02, 8.18], [50.08, 8.08], [50.12, 7.95]
  ],
  rheinhessen: [
    [50.05, 8.02], [49.92, 8.08], [49.78, 8.18], [49.68, 8.32], [49.65, 8.48],
    [49.70, 8.55], [49.85, 8.52], [50.00, 8.42], [50.08, 8.28], [50.10, 8.12]
  ],
  pfalz: [
    [49.65, 7.88], [49.45, 7.95], [49.22, 8.02], [49.02, 8.10], [48.92, 8.18],
    [48.95, 8.32], [49.15, 8.35], [49.38, 8.30], [49.58, 8.22], [49.68, 8.08]
  ],
  nahe: [
    [49.95, 7.42], [49.88, 7.52], [49.78, 7.65], [49.72, 7.78], [49.68, 7.92],
    [49.72, 8.02], [49.82, 7.98], [49.92, 7.85], [49.98, 7.68], [50.00, 7.52]
  ],
  mittelrhein: [
    [50.52, 7.12], [50.42, 7.22], [50.28, 7.35], [50.15, 7.48], [50.05, 7.58],
    [49.98, 7.65], [50.02, 7.72], [50.15, 7.65], [50.30, 7.52], [50.45, 7.38],
    [50.55, 7.22]
  ],
  'hessische-bergstrasse': [
    [49.78, 8.52], [49.72, 8.58], [49.65, 8.68], [49.58, 8.78], [49.55, 8.88],
    [49.58, 8.94], [49.68, 8.90], [49.75, 8.82], [49.80, 8.68]
  ],
  'saale-unstrut': [
    [51.35, 11.35], [51.28, 11.55], [51.18, 11.78], [51.08, 11.95], [51.02, 12.05],
    [51.05, 12.12], [51.18, 12.02], [51.28, 11.82], [51.35, 11.58]
  ],
  sachsen: [
    [51.28, 13.05], [51.18, 13.25], [51.05, 13.55], [50.92, 13.85], [50.85, 14.05],
    [50.88, 14.15], [51.02, 14.05], [51.15, 13.75], [51.28, 13.42]
  ]
};

const RHINE_RIVER = [
  [47.58, 7.60], [47.75, 7.58], [48.10, 7.58], [48.55, 7.58], [49.00, 7.55],
  [49.35, 7.58], [49.65, 7.62], [49.95, 7.68], [50.15, 7.72], [50.35, 7.75],
  [50.55, 7.82], [50.75, 7.88], [50.95, 7.95], [51.15, 8.02]
];

const MOSEL_RIVER = [
  [49.42, 7.38], [49.55, 7.22], [49.72, 7.05], [49.88, 6.88], [50.05, 6.72],
  [50.22, 6.58], [50.38, 6.48]
];

const NAHE_RIVER = [
  [49.68, 7.92], [49.75, 7.78], [49.82, 7.62], [49.88, 7.48], [49.95, 7.38]
];

const MAIN_RIVER = [
  [49.58, 9.95], [49.72, 10.15], [49.88, 10.35], [50.02, 10.05], [50.12, 9.75]
];

const REGION_RIVER_HINTS = {
  mosel: ['mosel', 'rhine'],
  rheingau: ['rhine'],
  rheinhessen: ['rhine'],
  pfalz: ['rhine'],
  baden: ['rhine'],
  mittelrhein: ['rhine'],
  nahe: ['nahe', 'rhine'],
  franken: ['main'],
  ahr: ['rhine']
};

function vineyardSvgDataUri(accentColor, variant) {
  const v = variant % 5;
  const skies = ['#87CEEB', '#7EC8E3', '#98D4EA', '#6BB3D9', '#A8D8EA'];
  const hill1 = accentColor;
  const hill2 = '#2D5A27';
  const rowOffset = v * 12;
  const rows = Array.from({ length: 8 }, (_, i) => {
    const y = 118 + (i % 3) * 4;
    const x = 40 + i * 68 + rowOffset;
    return `<line x1="${x}" y1="${y}" x2="${x + 50}" y2="${y - 28}" stroke="${hill1}" stroke-width="3" opacity="0.7"/>`;
  }).join('');
  const terraces = `<path d="M 0 200 L 0 ${130 + v * 4} Q 150 ${90 + v * 2} 300 ${125 + v * 3} L 600 ${110 + v * 4} L 600 200 Z" fill="${hill2}" opacity="0.85"/>
    <path d="M 0 200 L 0 ${145 + v * 3} Q 200 ${105 + v * 2} 400 ${130 + v * 2} L 600 ${120 + v * 3} L 600 200 Z" fill="${hill1}" opacity="0.55"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 200">
    <rect width="600" height="200" fill="${skies[v]}"/>
    <circle cx="520" cy="42" r="22" fill="#FFE082" opacity="0.9"/>
    <circle cx="520" cy="42" r="30" fill="#FFE082" opacity="0.25"/>
    ${terraces}
    ${rows}
  </svg>`;
  return svgToDataUri(svg);
}

function bindImageFallback(img, ...fallbacks) {
  const chain = fallbacks.filter(Boolean);
  img.addEventListener('error', () => {
    const step = parseInt(img.dataset.fallbackApplied || '0', 10);
    if (step >= chain.length) {
      img.dataset.fallbackApplied = String(chain.length);
      img.classList.add('img-failed');
      img.removeAttribute('src');
      return;
    }
    const next = chain[step];
    if (!next || (next.startsWith('data:') && step === chain.length - 1)) {
      img.dataset.fallbackApplied = String(chain.length);
      img.classList.add('img-failed');
      img.removeAttribute('src');
      return;
    }
    img.dataset.fallbackApplied = String(step + 1);
    img.src = next;
    img.classList.add('fallback');
  });
}

const FALLBACK_GRAPE_IMG = grapeSvgDataUri('white', 0);

const REGIONS = {
  ahr: {
    name: 'Ahr', ha: 535, focus: 'Rotwein', color: '#8B2942',
    lat: 50.55, lon: 6.98, shortLabel: 'Ahr', labelDx: -42, labelDy: -6,
    desc: 'Kleinstes Gebiet im Norden. Vulkanischer Boden (Schiefer, Basalt). Berühmt für Spätburgunder.',
    details: 'Erste Genossenschaft 1868 in Mayschoß. Steilhänge über dem Fluss Ahr.',
    sorten: 'Spätburgunder (dominant), Portugieser, Riesling',
    weingüter: 'Adeneuer, Deutzerhof, Meyer-Näkel, Stodden',
    besonderheit: 'Eines der wenigen deutschen Rotwein-Gebiete'
  },
  baden: {
    name: 'Baden', ha: 15142, focus: 'Weiß + Rot', color: '#C9A84C',
    lat: 48.05, lon: 7.82, shortLabel: 'Baden', labelDx: -38, labelDy: 14,
    desc: 'Südlichstes Gebiet, 300 km am Rhein. „Burgunder-Hochburg". Weinzone B – wärmer als andere Regionen.',
    details: '85% Genossenschaftswein. Kaiserstuhl-Terrassen mit vulkanischem Boden.',
    sorten: 'Spätburgunder, Grauburgunder, Weißburgunder, Gutedel',
    weingüter: 'Dr. Heger, Huber, Ziereisen',
    besonderheit: 'Einziges Gebiet in Weinzone B'
  },
  franken: {
    name: 'Franken', ha: 6107, focus: 'Weißwein (81%)', color: '#2D5A27',
    lat: 49.78, lon: 10.1, shortLabel: 'Franken', labelDx: 18, labelDy: -4,
    desc: 'Herzhafte Weine am Main. Silvaner ist die edelste Sorte. Bocksbeutel-Flasche ist Markenzeichen.',
    details: '4 von 5 Flaschen werden lokal getrunken. „Fränkisch trocken" = weniger als 4 g/l Restzucker.',
    sorten: 'Silvaner, Müller-Thurgau, Bacchus, Domina',
    weingüter: 'Bürgerspital, Fürst, Juliusspital',
    besonderheit: 'Würzburger Stein – erste Einzellage (85 ha)'
  },
  wuerttemberg: {
    name: 'Württemberg', ha: 10694, focus: 'Rotwein (65%)', color: '#6B1D3A',
    lat: 48.78, lon: 9.18, shortLabel: 'Württemberg', labelDx: 20, labelDy: 6,
    desc: 'Viertgrößtes Gebiet. Hier dominieren rote Sorten – das ist in Deutschland selten.',
    details: 'Trollinger ist die typische Sorte. Lemberger (Blaufränkisch) wird immer wichtiger.',
    sorten: 'Trollinger, Lemberger, Schwarzriesling, Riesling',
    weingüter: 'Aldinger, Beurer, Dautel',
    besonderheit: '65% der Rebfläche ist Rotwein'
  },
  mosel: {
    name: 'Mosel', ha: 8717, focus: 'Weißwein', color: '#4A7C43',
    lat: 49.95, lon: 7.05, shortLabel: 'Mosel', labelDx: -44, labelDy: 4,
    desc: 'Älteste Weinregion Deutschlands. Steile Hänge an Mosel, Saar und Ruwer.',
    details: 'Die Römer brachten den Weinbau hierher. Berühmte Steillagen wie Bernkasteler Doctor.',
    sorten: 'Riesling (dominant), Elbling, Müller-Thurgau',
    weingüter: 'Dr. Loosen, Egon Müller, Van Volxem',
    besonderheit: 'Steilste Weinberge der Welt'
  },
  rheingau: {
    name: 'Rheingau', ha: 3117, focus: 'Weißwein', color: '#1E3A5F',
    lat: 50.02, lon: 8.08, shortLabel: 'Rheingau', labelDx: 16, labelDy: -10,
    desc: 'Renommiertes Gebiet am rechten Rheinufer. Von Wiesbaden bis Lorch.',
    details: 'Riesling-Hochburg mit berühmten Lagen wie Rüdesheimer Berg Schlossberg.',
    sorten: 'Riesling, Spätburgunder',
    weingüter: 'Robert Weil, Schloss Johannisberg, Georg Breuer',
    besonderheit: 'Viele Spitzenweingüter'
  },
  rheinhessen: {
    name: 'Rheinhessen', ha: 26881, focus: 'Weißwein', color: '#C4788A',
    lat: 49.78, lon: 8.25, shortLabel: 'Rheinhessen', labelDx: 22, labelDy: 10,
    desc: 'Größtes deutsches Weinbaugebiet. „Land der 1000 Hügel".',
    details: 'Tausend sanfte Hügel mit Reben. Nierstein und Oppenheim sind bekannt.',
    sorten: 'Riesling, Silvaner, Dornfelder, Grauburgunder',
    weingüter: 'Keller, Gunderloch, Wagner-Stempel',
    besonderheit: 'Größte Rebfläche Deutschlands'
  },
  pfalz: {
    name: 'Pfalz', ha: 23590, focus: 'Weiß + Rot', color: '#E8A838',
    lat: 49.35, lon: 8.15, shortLabel: 'Pfalz', labelDx: 18, labelDy: 14,
    desc: 'Zweitgrößtes Gebiet. Deutsche Weinstraße – älteste Weinroute der Welt.',
    details: 'Größtes Weinfest der Welt in Bad Dürkheim. Warmes Klima.',
    sorten: 'Riesling, Dornfelder, Spätburgunder, Grauburgunder',
    weingüter: 'Bürklin-Wolf, von Winning, Müller-Catoir',
    besonderheit: 'Deutsche Weinstraße'
  },
  nahe: {
    name: 'Nahe', ha: 4202, focus: 'Weiß + Rot', color: '#7B68A6',
    lat: 49.82, lon: 7.75, shortLabel: 'Nahe', labelDx: -38, labelDy: 12,
    desc: 'Romantische Flusstäler und dramatische Felsen an der Nahe.',
    details: 'Vielfältige Böden: Schiefer, Sandstein, Löss. Riesling und Spätburgunder.',
    sorten: 'Riesling, Müller-Thurgau, Dornfelder',
    weingüter: 'Dönnhoff, Emrich-Schönleber, Schäfer-Fröhlich',
    besonderheit: 'Vielfältige Bodentypen'
  },
  mittelrhein: {
    name: 'Mittelrhein', ha: 467, focus: 'Weißwein', color: '#5B7C99',
    lat: 50.15, lon: 7.55, shortLabel: 'Mittelrhein', labelDx: -52, labelDy: -14,
    desc: 'Malerisches Rheintal zwischen Bingen und Bonn. Burgen und Rebhänge.',
    details: 'Mittelalterliche Städtchen wie Bacharach und Oberwesel.',
    sorten: 'Riesling, Spätburgunder',
    weingüter: 'J.J. Adenehr, Toni Jost',
    besonderheit: 'UNESCO-Welterbe Oberes Mittelrheintal'
  },
  'hessische-bergstrasse': {
    name: 'Hessische Bergstraße', ha: 461, focus: 'Weißwein', color: '#FFB7C5',
    lat: 49.65, lon: 8.68, shortLabel: 'Bergstraße', labelDx: 20, labelDy: -12,
    desc: 'Kleinstes Gebiet. Frühling kommt hier zuerst – Mandelblüte im März.',
    details: 'Zwischen Darmstadt und Heidelberg. Riesling und Grauburgunder.',
    sorten: 'Riesling, Grauburgunder, Spätburgunder',
    weingüter: 'Hessische Staatsweingüter',
    besonderheit: 'Frühester Frühling in Deutschland'
  },
  'saale-unstrut': {
    name: 'Saale-Unstrut', ha: 765, focus: 'Weißwein', color: '#8FBC8F',
    lat: 51.18, lon: 11.82, shortLabel: 'Saale-Unstrut', labelDx: 18, labelDy: -14,
    desc: 'Nördlichstes Anbaugebiet. Terrassierte Weinberge an Saale und Unstrut.',
    details: 'Weinbau seit über 1000 Jahren. Freyburg ist das Zentrum.',
    sorten: 'Müller-Thurgau, Silvaner, Weißburgunder, Portugieser',
    weingüter: 'Winzerhof Gussek, Zahn',
    besonderheit: 'Nördlichstes Weinbaugebiet'
  },
  sachsen: {
    name: 'Sachsen', ha: 531, focus: 'Weißwein', color: '#B8860B',
    lat: 51.12, lon: 13.68, shortLabel: 'Sachsen', labelDx: 16, labelDy: 4,
    desc: 'Östlichstes Gebiet. Weinberge bei Dresden und Meißen.',
    details: 'Am 51. Grad nördlicher Breite. Goldriesling ist eine Spezialität.',
    sorten: 'Müller-Thurgau, Riesling, Goldriesling',
    weingüter: 'Schloss Proschwitz, Wackerbarth',
    besonderheit: 'Östlichstes Weinbaugebiet Europas'
  }
};

const REGION_CITIES = {
  ahr: [
    { name: 'Bad Neuenahr-Ahrweiler', lat: 50.5436, lon: 7.1181 },
    { name: 'Mayschoß', lat: 50.5170, lon: 7.1310 },
    { name: 'Altenahr', lat: 50.5172, lon: 7.0044 }
  ],
  mosel: [
    { name: 'Bernkastel-Kues', lat: 49.9158, lon: 7.0689 },
    { name: 'Trier', lat: 49.7596, lon: 6.6442 },
    { name: 'Piesport', lat: 49.8725, lon: 6.8928 }
  ],
  rheingau: [
    { name: 'Rüdesheim', lat: 50.0392, lon: 7.9206 },
    { name: 'Eltville', lat: 50.0286, lon: 8.1172 },
    { name: 'Johannisberg', lat: 50.0386, lon: 8.0269 }
  ],
  rheinhessen: [
    { name: 'Mainz', lat: 49.9929, lon: 8.2473 },
    { name: 'Nierstein', lat: 49.8697, lon: 8.3367 },
    { name: 'Worms', lat: 49.6341, lon: 8.3507 }
  ],
  pfalz: [
    { name: 'Bad Dürkheim', lat: 49.4617, lon: 8.1689 },
    { name: 'Deidesheim', lat: 49.4089, lon: 8.1850 },
    { name: 'Landau', lat: 49.1994, lon: 8.1069 }
  ],
  nahe: [
    { name: 'Bad Kreuznach', lat: 49.8475, lon: 7.8669 },
    { name: 'Norheim', lat: 49.8122, lon: 7.8225 },
    { name: 'Schlossböckelheim', lat: 49.7936, lon: 7.6789 }
  ],
  mittelrhein: [
    { name: 'Bacharach', lat: 50.0664, lon: 7.7678 },
    { name: 'Bingen', lat: 49.9669, lon: 7.8994 },
    { name: 'Koblenz', lat: 50.3569, lon: 7.5890 }
  ],
  baden: [
    { name: 'Freiburg', lat: 47.9990, lon: 7.8421 },
    { name: 'Baden-Baden', lat: 48.7606, lon: 8.2398 },
    { name: 'Ihringen', lat: 48.0400, lon: 7.6300 }
  ],
  franken: [
    { name: 'Würzburg', lat: 49.7913, lon: 9.9534 },
    { name: 'Iphofen', lat: 49.7022, lon: 10.2592 },
    { name: 'Volkach', lat: 49.8664, lon: 10.2278 }
  ],
  wuerttemberg: [
    { name: 'Stuttgart', lat: 48.7758, lon: 9.1829 },
    { name: 'Heilbronn', lat: 49.1427, lon: 9.2109 },
    { name: 'Metzingen', lat: 48.5370, lon: 9.2830 }
  ],
  'hessische-bergstrasse': [
    { name: 'Heppenheim', lat: 49.6414, lon: 8.6328 },
    { name: 'Bensheim', lat: 49.6833, lon: 8.6167 },
    { name: 'Zwingenberg', lat: 49.7242, lon: 8.6089 }
  ],
  'saale-unstrut': [
    { name: 'Freyburg', lat: 51.2142, lon: 11.7689 },
    { name: 'Naumburg', lat: 51.1522, lon: 11.8097 },
    { name: 'Bad Kösen', lat: 51.1333, lon: 11.6833 }
  ],
  sachsen: [
    { name: 'Dresden', lat: 51.0504, lon: 13.7373 },
    { name: 'Meißen', lat: 51.1632, lon: 13.4717 },
    { name: 'Radebeul', lat: 51.1067, lon: 13.6400 }
  ]
};

const WINE_CITIES = Object.entries(REGION_CITIES).flatMap(([region, cities]) =>
  cities.map(city => ({ ...city, region }))
);

let deWineMap = null;
let deRegionLayers = {};
let deSelectedRegionKey = null;
const regionMiniMaps = {};

function latLonToLeaflet(points) {
  return points.map(([lat, lon]) => [lat, lon]);
}

function defaultRegionLayerStyle(region) {
  return {
    color: '#4A0E2E',
    fillColor: region.color,
    fillOpacity: 0.45,
    weight: 2
  };
}

function selectedRegionLayerStyle(region) {
  return {
    color: '#4A0E2E',
    fillColor: region.color,
    fillOpacity: 0.68,
    weight: 4
  };
}

function highlightDeMapRegion(key) {
  deSelectedRegionKey = key || null;
  Object.entries(deRegionLayers).forEach(([regionKey, layer]) => {
    const region = REGIONS[regionKey];
    if (!region) return;
    const style = regionKey === key ? selectedRegionLayerStyle(region) : defaultRegionLayerStyle(region);
    layer.setStyle(style);
    if (regionKey === key) layer.bringToFront();
  });
  document.querySelectorAll('.legend-region').forEach(el => {
    el.classList.toggle('active', el.dataset.region === key);
  });
}

function renderDeMapLegend() {
  const legend = document.getElementById('de-map-legend');
  if (!legend) return;

  const items = Object.entries(REGIONS).map(([key, r]) => `
    <button type="button" class="legend-region" data-region="${key}" aria-label="${r.name} auf Karte wählen">
      <span class="legend-swatch" style="background:${r.color}"></span>
      <span>${r.shortLabel || r.name}</span>
    </button>`).join('');

  legend.innerHTML = `
    <span class="legend-title">Weinbaugebiete</span>
    <div class="legend-sizes">${items}</div>
    <p class="legend-cities-hint">Dunkle Punkte = wichtige Weinorte · Klick auf Fläche oder Legende</p>`;

  legend.querySelectorAll('.legend-region').forEach(btn => {
    btn.addEventListener('click', () => selectRegion(btn.dataset.region));
  });
}

function showDeMapOfflineMessage() {
  const offline = document.getElementById('de-map-offline');
  if (offline) offline.hidden = false;
}

function initDeWineMap() {
  const container = document.getElementById('de-wine-map');
  if (!container) return;

  if (typeof L === 'undefined') {
    showDeMapOfflineMessage();
    return;
  }

  deWineMap = L.map('de-wine-map', {
    center: [50.5, 10.5],
    zoom: 6,
    minZoom: 5,
    maxZoom: 12,
    maxBounds: [[47.2, 5.5], [55.2, 15.5]],
    scrollWheelZoom: true
  });

  const tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18
  });

  let tilesLoaded = 0;
  let offlineTimer = null;
  tileLayer.on('tileload', () => {
    tilesLoaded += 1;
    const offline = document.getElementById('de-map-offline');
    if (offline) offline.hidden = true;
    if (offlineTimer) {
      clearTimeout(offlineTimer);
      offlineTimer = null;
    }
  });
  tileLayer.on('tileerror', () => {
    if (tilesLoaded > 0) return;
    if (offlineTimer) return;
    offlineTimer = setTimeout(() => {
      if (tilesLoaded === 0) showDeMapOfflineMessage();
    }, 6000);
  });
  tileLayer.addTo(deWineMap);

  const overlayLayers = {};

  Object.entries(REGIONS).forEach(([key, region]) => {
    const polygon = REGION_POLYGONS[key];
    if (!polygon) return;

    const layer = L.polygon(latLonToLeaflet(polygon), defaultRegionLayerStyle(region));
    layer.bindPopup(
      `<b>${region.name}</b><br>${region.ha.toLocaleString('de-DE')} ha<br>${region.focus}<br><em>${region.besonderheit}</em>`
    );
    layer.on('click', () => selectRegion(key));
    layer.addTo(deWineMap);
    deRegionLayers[key] = layer;
    overlayLayers[region.name] = layer;
  });

  WINE_CITIES.forEach(city => {
    const region = REGIONS[city.region];
    L.marker([city.lat, city.lon], {
      icon: L.divIcon({
        className: 'de-city-marker',
        html: '<span></span>',
        iconSize: [10, 10],
        iconAnchor: [5, 5]
      }),
      zIndexOffset: 400
    })
      .addTo(deWineMap)
      .bindPopup(`<b>${city.name}</b>${region ? `<br><small>${region.name}</small>` : ''}`);
  });

  Object.entries(REGIONS).forEach(([key, region]) => {
    L.marker([region.lat, region.lon], {
      icon: L.divIcon({
        className: 'de-region-label',
        html: `<span>${region.shortLabel || region.name}</span>`,
        iconSize: [0, 0]
      }),
      interactive: false,
      zIndexOffset: 300
    }).addTo(deWineMap);
  });

  L.control.layers(null, overlayLayers, { collapsed: true, position: 'topright' }).addTo(deWineMap);
  renderDeMapLegend();

  setTimeout(() => deWineMap.invalidateSize(), 150);
}

function refreshDeWineMapSize() {
  if (deWineMap) {
    setTimeout(() => deWineMap.invalidateSize(), 100);
  }
}

function getRegionKeyFromAccordionItem(item) {
  return item?.dataset.region || item?.id?.replace(/^region-/, '') || '';
}

function miniCityMarkerIcon(name) {
  return L.divIcon({
    className: 'mini-city-marker',
    html: `<span class="mini-city-dot"></span><span class="mini-city-label">${name}</span>`,
    iconSize: [0, 0],
    iconAnchor: [5, 5]
  });
}

function initRegionMiniMap(regionKey) {
  const container = document.getElementById(`mini-map-${regionKey}`);
  if (!container || regionMiniMaps[regionKey]) return;

  const region = REGIONS[regionKey];
  const polygon = REGION_POLYGONS[regionKey];
  if (!region || !polygon) return;

  if (typeof L === 'undefined') {
    container.innerHTML = '<p class="mini-map-offline">Karte braucht Internet (Leaflet).</p>';
    regionMiniMaps[regionKey] = 'offline';
    return;
  }

  const map = L.map(container, {
    center: [region.lat, region.lon],
    zoom: 10,
    scrollWheelZoom: false,
    attributionControl: true,
    zoomControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OSM</a>',
    maxZoom: 18
  }).addTo(map);

  L.polygon(latLonToLeaflet(polygon), {
    color: '#4A0E2E',
    fillColor: region.color,
    fillOpacity: 0.5,
    weight: 3
  }).addTo(map);

  (REGION_CITIES[regionKey] || []).forEach(city => {
    L.marker([city.lat, city.lon], { icon: miniCityMarkerIcon(city.name), zIndexOffset: 500 })
      .addTo(map)
      .bindPopup(`<b>${city.name}</b><br><small>${region.name}</small>`);
  });

  map.fitBounds(L.latLngBounds(latLonToLeaflet(polygon)), { padding: [24, 24], maxZoom: 11 });
  regionMiniMaps[regionKey] = map;

  setTimeout(() => map.invalidateSize(), 450);
}

function refreshRegionMiniMap(regionKey) {
  const map = regionMiniMaps[regionKey];
  if (map && typeof map.invalidateSize === 'function') {
    setTimeout(() => map.invalidateSize(), 450);
  }
}

function regionMapSvgDataUri(regionKey) {
  const r = REGIONS[regionKey];
  const polygon = REGION_POLYGONS[regionKey];
  if (!r || !polygon) return vineyardSvgDataUri('#4A7C43', 0);

  const project = geoToRegionMap;
  const { w, h } = REGION_MAP_VIEW;
  const germanyD = latLonPath(GERMANY_BORDER, project);
  const regionD = latLonPath(polygon, project);
  const center = project(r.lat, r.lon);
  const rivers = REGION_RIVER_HINTS[regionKey] || [];
  const riverPaths = rivers.map(kind => {
    const pts = kind === 'mosel' ? MOSEL_RIVER : kind === 'nahe' ? NAHE_RIVER : kind === 'main' ? MAIN_RIVER : RHINE_RIVER;
    return `<path d="${latLonPolyline(pts, project)}" fill="none" stroke="#7EB8DA" stroke-width="2.5" stroke-linecap="round" opacity="0.55"/>`;
  }).join('');

  const gridLines = Array.from({ length: 7 }, (_, i) => {
    const y = 12 + (i + 1) * (176 / 8);
    return `<line x1="45" y1="${y.toFixed(0)}" x2="555" y2="${y.toFixed(0)}" stroke="#C8D4BC" stroke-width="0.5" opacity="0.35"/>`;
  }).join('') + Array.from({ length: 9 }, (_, i) => {
    const x = 45 + (i + 1) * (510 / 10);
    return `<line x1="${x.toFixed(0)}" y1="12" x2="${x.toFixed(0)}" y2="188" stroke="#C8D4BC" stroke-width="0.5" opacity="0.35"/>`;
  }).join('');

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-label="Karte: ${r.name} in Deutschland">
    <defs>
      <linearGradient id="rmBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#EEF4E6"/><stop offset="100%" stop-color="#F5F0E8"/></linearGradient>
      <filter id="rmSh" x="-8%" y="-8%" width="116%" height="116%"><feDropShadow dx="0" dy="1" stdDeviation="1.5" flood-color="#2D5A27" flood-opacity="0.18"/></filter>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#rmBg)"/>
    ${gridLines}
    ${riverPaths}
    <path d="${germanyD}" fill="#E8F0E0" stroke="#8FA878" stroke-width="1.2" stroke-linejoin="round"/>
    <path d="${regionD}" fill="${r.color}" fill-opacity="0.62" stroke="#722F37" stroke-width="2" stroke-linejoin="round" filter="url(#rmSh)"/>
    <circle cx="${center.x.toFixed(1)}" cy="${center.y.toFixed(1)}" r="4" fill="#722F37" stroke="#fff" stroke-width="1.5"/>
    <g transform="translate(522,18)">
      <path d="M 0 -10 L 4 6 L -4 6 Z" fill="#5C6B52"/>
      <text x="0" y="18" text-anchor="middle" font-family="Georgia,serif" font-size="9" fill="#5C6B52">N</text>
    </g>
    <g transform="translate(48,178)">
      <line x1="0" y1="0" x2="72" y2="0" stroke="#5C6B52" stroke-width="1.5"/>
      <line x1="0" y1="-3" x2="0" y2="3" stroke="#5C6B52" stroke-width="1.5"/>
      <line x1="72" y1="-3" x2="72" y2="3" stroke="#5C6B52" stroke-width="1.5"/>
      <text x="36" y="12" text-anchor="middle" font-family="system-ui,sans-serif" font-size="8" fill="#5C6B52">200 km</text>
    </g>
    <rect x="${(w / 2 - 72).toFixed(0)}" y="168" width="144" height="22" rx="4" fill="rgba(114,47,55,0.88)"/>
    <text x="${(w / 2).toFixed(0)}" y="183" text-anchor="middle" font-family="Georgia,serif" font-size="12" font-weight="600" fill="#F5F0E8">${r.name}</text>
  </svg>`;
  return svgToDataUri(svg);
}

const FALLBACK_REGION_MAP_IMG = regionMapSvgDataUri('mosel');

const GRAPES = {
  riesling: {
    key: 'riesling',
    name: 'Riesling',
    synonyms: ['Rheinriesling', 'Weißer Riesling'],
    type: 'white',
    charakteristik: 'Hellgelb, trocken, fruchtig, elegant, spritzige Säure. Steinobst und Zitrus dominieren. In allen deutschen Weinbaugebieten zu Hause – von der Mosel bis Baden.',
    hauptaromen: ['Pfirsich', 'Aprikose', 'Zitrone', 'Schiefer', 'Mineralik'],
    anbaugebiete: ['Alle deutschen Weinbaugebiete'],
    flaeche: '23 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Mittelgroß, fünflappig, tief eingeschnitten',
      reife: 'Spätreifend'
    },
    gastronomie: {
      stil: 'Trocken bis edelsüß (Prädikatswein)',
      passtZu: 'Fisch, asiatische Küche, Ziegenkäse, helles Fleisch',
      serviertemp: '8–10 °C'
    },
    mythos: 'Riesling ist immer süß.',
    realitaet: 'Die meisten deutschen Rieslinge sind heute trocken. Süße gibt es nur bei Prädikaten wie Spätlese oder Auslese.',
    funFact: 'Riesling ist mit ca. 23 % die meistgepflanzte Rebsorte in Deutschland (BMEL).',
    images: {
      cluster: 'assets/images/grapes/riesling.jpg',
      leaf: 'assets/images/grapes/riesling-leaf.jpg',
      vine: 'assets/images/grapes/riesling-vine.jpg'
    }
  },
  grauburgunder: {
    key: 'grauburgunder',
    name: 'Grauburgunder',
    synonyms: ['Pinot gris', 'Ruländer', 'Grauer Burgunder'],
    type: 'white',
    charakteristik: 'Kupfern schimmernd, voll, weich und rund. Mandel- und Honigaromen prägen den Charakter. Wächst besonders gut in wärmeren Lagen.',
    hauptaromen: ['Mandel', 'Honig', 'Birne', 'Butter', 'Nuss'],
    anbaugebiete: ['Baden', 'Rheinhessen', 'Pfalz'],
    flaeche: 'ca. 7 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Mittelgroß, fünflappig, graubewachsen',
      reife: 'Mittelspät bis spät'
    },
    gastronomie: {
      stil: 'Trocken, vollmundig, oft im Barrique',
      passtZu: 'Geflügel, Schwein, Pilzgerichte, weicher Käse',
      serviertemp: '10–12 °C'
    },
    mythos: 'Grauburgunder ist eine eigene Wildrebe.',
    realitaet: 'Grauburgunder = Pinot gris = Grauer Burgunder. Er gehört zur Burgunder-Familie wie Spät- und Weißburgunder.',
    funFact: 'In Baden nennt man ihn oft „Ruländer" – besonders wenn der Wein etwas Farbe hat.',
    images: {
      cluster: 'assets/images/grapes/grauburgunder.jpg',
      leaf: 'assets/images/grapes/grauburgunder-leaf.jpg',
      vine: 'assets/images/grapes/grauburgunder-vine.jpg'
    }
  },
  'mueller-thurgau': {
    key: 'mueller-thurgau',
    name: 'Müller-Thurgau',
    synonyms: ['Rivaner'],
    type: 'white',
    charakteristik: 'Hell, leicht, duftend mit muskatartigen Noten. Früher die häufigste deutsche Sorte – heute noch wichtig in Rheinhessen, Pfalz und Franken.',
    hauptaromen: ['Muskat', 'Blüten', 'Nuss', 'leichte Frucht'],
    anbaugebiete: ['Rheinhessen', 'Pfalz', 'Franken'],
    flaeche: 'ca. 12 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Mittelgroß, fünflappig, wenig gelappt',
      reife: 'Frühreifend'
    },
    gastronomie: {
      stil: 'Leicht, frisch, meist trocken',
      passtZu: 'Salate, leichte Vorspeisen, Sommerküche',
      serviertemp: '8–10 °C'
    },
    mythos: 'Müller-Thurgau ist eine alte deutsche Sorte.',
    realitaet: 'Er wurde 1882 von Hermann Müller aus Thurgau gezüchtet: Riesling × Madeleine royale.',
    funFact: 'War lange Nr. 1 in Deutschland, wurde aber vom Riesling überholt.',
    images: {
      cluster: 'assets/images/grapes/mueller-thurgau.jpg',
      leaf: 'assets/images/grapes/mueller-thurgau-leaf.jpg',
      vine: 'assets/images/grapes/mueller-thurgau-vine.jpg'
    }
  },
  silvaner: {
    key: 'silvaner',
    name: 'Silvaner',
    synonyms: ['Grüner Silvaner', 'Österreicher'],
    type: 'white',
    charakteristik: 'Gelb-grün, fruchtig-würzig mit eher niedriger Säure. In Franken die edelste Sorte – passt zu herzhafter Küche.',
    hauptaromen: ['Kräuter', 'Gemüse', 'Würze', 'leichte Frucht'],
    anbaugebiete: ['Franken', 'Rheinhessen', 'Pfalz'],
    flaeche: 'ca. 5 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Groß, fünflappig, glattrandig',
      reife: 'Mittelspät'
    },
    gastronomie: {
      stil: 'Trocken, kräftig, bodenständig',
      passtZu: 'Spargel, Gemüse, Wurst, fränkische Küche',
      serviertemp: '9–11 °C'
    },
    mythos: 'Silvaner gibt es nur in Franken.',
    realitaet: 'Franken ist das Zentrum – aber Silvaner wächst auch in Rheinhessen und der Pfalz.',
    funFact: 'Der Würzburger Stein ist eine der ältesten Einzellagen Deutschlands – berühmt für Silvaner.',
    images: {
      cluster: 'assets/images/grapes/silvaner.jpg',
      leaf: 'assets/images/grapes/silvaner-leaf.jpg',
      vine: 'assets/images/grapes/silvaner-vine.jpg'
    }
  },
  weissburgunder: {
    key: 'weissburgunder',
    name: 'Weißburgunder',
    synonyms: ['Pinot blanc', 'Weißer Burgunder', 'Klevner'],
    type: 'white',
    charakteristik: 'Gelb-grün, elegant und fein. Aromen von Ananas, Quitte und Birne. Wird immer beliebter in Baden und der Pfalz.',
    hauptaromen: ['Ananas', 'Quitte', 'Birne', 'Nuss', 'Butter'],
    anbaugebiete: ['Baden', 'Rheinhessen', 'Pfalz'],
    flaeche: 'ca. 6 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Mittelgroß, fünflappig, hellgrün',
      reife: 'Mittelspät'
    },
    gastronomie: {
      stil: 'Trocken, elegant, oft im Holzfass',
      passtZu: 'Fisch, Meeresfrüchte, helle Saucen, Ziegenkäse',
      serviertemp: '10–12 °C'
    },
    mythos: 'Weißburgunder ist nur ein billiger Ersatz für Chardonnay.',
    realitaet: 'In Baden und der Pfalz liefert er hochwertige, elegante Weine – oft auf Burgund-Niveau.',
    funFact: 'Baden wird „Burgunder-Hochburg" genannt – Weiß-, Grau- und Spätburgunder dominieren dort.',
    images: {
      cluster: 'assets/images/grapes/weissburgunder.jpg',
      leaf: 'assets/images/grapes/weissburgunder-leaf.jpg',
      vine: 'assets/images/grapes/weissburgunder-vine.jpg'
    }
  },
  kerner: {
    key: 'kerner',
    name: 'Kerner',
    synonyms: [],
    type: 'white',
    charakteristik: 'Hellgrün, frisch und aromatisch. Grüner Apfel und eine leichte „Bonbon"-Note machen ihn erkennbar.',
    hauptaromen: ['Grüner Apfel', 'Zitrus', 'Bonbon', 'Kräuter'],
    anbaugebiete: ['Rheinhessen', 'Pfalz', 'Franken'],
    flaeche: 'ca. 2 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Mittelgroß, fünflappig, tief gelappt',
      reife: 'Mittelspät'
    },
    gastronomie: {
      stil: 'Frisch, aromatisch, meist trocken',
      passtZu: 'Salate, asiatische Gerichte, leichte Vorspeisen',
      serviertemp: '8–10 °C'
    },
    mythos: 'Kerner ist eine alte Traditionssorte.',
    realitaet: 'Er wurde 1969 in Würzburg gezüchtet: Riesling × Trollinger (Roter Trollinger).',
    funFact: 'Benannt nach dem Dichter Justinus Kerner – bekannt für seine Weinlieder.',
    images: {
      cluster: 'assets/images/grapes/kerner.jpg',
      leaf: 'assets/images/grapes/kerner-leaf.jpg',
      vine: 'assets/images/grapes/kerner-vine.jpg'
    }
  },
  spaetburgunder: {
    key: 'spaetburgunder',
    name: 'Spätburgunder',
    synonyms: ['Pinot noir', 'Blauer Burgunder', 'Pinot nero'],
    type: 'red',
    charakteristik: 'Rubinrot, elegant mit feinen Tanninen. Himbeere und Erdbeere prägen das Aroma. Deutschlands wichtigster Qualitäts-Rotwein.',
    hauptaromen: ['Himbeere', 'Erdbeere', 'Kirsche', 'Unterholz', 'Gewürz'],
    anbaugebiete: ['Ahr', 'Baden', 'Pfalz', 'Rheingau'],
    flaeche: 'ca. 11 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Klein bis mittel, fünflappig, oft mit roten Blattadern',
      reife: 'Früh bis mittelspät'
    },
    gastronomie: {
      stil: 'Leicht bis mittelkräftig, elegant',
      passtZu: 'Geflügel, Lamm, Wild, Pilze, weicher Käse',
      serviertemp: '14–16 °C'
    },
    mythos: 'Spätburgunder ist nicht französisch.',
    realitaet: 'Spätburgunder = Pinot noir – dieselbe Sorte wie in Burgund. Nur der deutsche Name ist anders.',
    funFact: 'Die Ahr ist eines der nördlichsten Rotwein-Gebiete Europas – fast nur Spätburgunder.',
    images: {
      cluster: 'assets/images/grapes/spaetburgunder.jpg',
      leaf: 'assets/images/grapes/spaetburgunder-leaf.jpg',
      vine: 'assets/images/grapes/spaetburgunder-vine.jpg'
    }
  },
  dornfelder: {
    key: 'dornfelder',
    name: 'Dornfelder',
    synonyms: [],
    type: 'red',
    charakteristik: 'Dunkelrot, weiche Tannine, kirschige Frucht. Sehr beliebt in Rheinhessen und der Pfalz – oft als junger, fruchtiger Wein.',
    hauptaromen: ['Kirsche', 'Pflaume', 'Beeren', 'weiche Tannine'],
    anbaugebiete: ['Rheinhessen', 'Pfalz', 'Nahe'],
    flaeche: 'ca. 8 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Groß, fünflappig, tief gelappt',
      reife: 'Mittelspät'
    },
    gastronomie: {
      stil: 'Fruchtig, weich, oft jung getrunken',
      passtZu: 'Pizza, Pasta, Grillfleisch, Wurst',
      serviertemp: '14–16 °C'
    },
    mythos: 'Dornfelder ist eine alte deutsche Sorte.',
    realitaet: 'Er wurde erst 1955 gezüchtet – Kreuzung aus Helfensteiner × Heroldrebe.',
    funFact: 'Dornfelder liefert tiefdunkle Weine – auch in kühleren Lagen.',
    images: {
      cluster: 'assets/images/grapes/dornfelder.jpg',
      leaf: 'assets/images/grapes/dornfelder-leaf.jpg',
      vine: 'assets/images/grapes/dornfelder-vine.jpg'
    }
  },
  lemberger: {
    key: 'lemberger',
    name: 'Lemberger',
    synonyms: ['Blaufränkisch', 'Kékfrankos'],
    type: 'red',
    charakteristik: 'Dunkel, würzig mit kräftigen Tanninen. Typisch für Württemberg – kräftige, lagerfähige Rotweine.',
    hauptaromen: ['Pfeffer', 'Kirsche', 'Würze', 'Dunkelbeeren'],
    anbaugebiete: ['Württemberg', 'Pfalz'],
    flaeche: 'ca. 3 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Mittelgroß, fünflappig, glänzend',
      reife: 'Spät'
    },
    gastronomie: {
      stil: 'Kräftig, würzig, lagerfähig',
      passtZu: 'Wild, Lamm, kräftige Saucen, Hartkäse',
      serviertemp: '16–18 °C'
    },
    mythos: 'Lemberger kommt aus Ungarn.',
    realitaet: 'In Österreich heißt dieselbe Sorte Blaufränkisch. In Württemberg ist Lemberger die Premium-Rotsorte.',
    funFact: 'Der Name „Lemberger" stammt von der früheren Marktgemeinde Lemberg in der Pfalz.',
    images: {
      cluster: 'assets/images/grapes/lemberger.jpg',
      leaf: 'assets/images/grapes/lemberger-leaf.jpg',
      vine: 'assets/images/grapes/lemberger-vine.jpg'
    }
  },
  portugieser: {
    key: 'portugieser',
    name: 'Portugieser',
    synonyms: ['Blauer Portugieser'],
    type: 'red',
    charakteristik: 'Hellrot, leicht, wenig Tannine. Oft als junger, fruchtiger Wein – ideal für den Alltag.',
    hauptaromen: ['rote Beeren', 'Kirsche', 'leichte Frucht'],
    anbaugebiete: ['Rheinhessen', 'Pfalz', 'Württemberg'],
    flaeche: 'ca. 5 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Mittelgroß, fünflappig',
      reife: 'Frühreifend'
    },
    gastronomie: {
      stil: 'Leicht, fruchtig, meist jung',
      passtZu: 'Wurst, Snacks, leichte Gerichte, Grillen',
      serviertemp: '12–14 °C'
    },
    mythos: 'Portugieser kommt aus Portugal.',
    realitaet: 'Die Herkunft ist unklar – er ist in Österreich und Deutschland seit langem verbreitet, nicht aus Portugal.',
    funFact: 'Portugieser ist eine der frühesten reifenden Rotweinsorten – ideal für kühle Lagen.',
    images: {
      cluster: 'assets/images/grapes/portugieser.jpg',
      leaf: 'assets/images/grapes/portugieser-leaf.jpg',
      vine: 'assets/images/grapes/portugieser-vine.jpg'
    }
  },
  trollinger: {
    key: 'trollinger',
    name: 'Trollinger',
    synonyms: ['Blauer Trollinger', 'Schiava', 'Vernatsch'],
    type: 'red',
    charakteristik: 'Hellrot, frisch, hohe Säure. Der typische Württemberger-Wein – leicht und trinkfreudig.',
    hauptaromen: ['Kirsche', 'Veilchen', 'leichte Frucht', 'Säure'],
    anbaugebiete: ['Württemberg', 'Baden'],
    flaeche: 'ca. 6 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Groß, fünflappig, hellgrün',
      reife: 'Spät'
    },
    gastronomie: {
      stil: 'Leicht, frisch, kühl serviert',
      passtZu: 'Schwäbische Küche, Maultaschen, Wurst, Vesper',
      serviertemp: '12–14 °C'
    },
    mythos: 'Trollinger ist ein Export-Hit.',
    realitaet: 'Die meisten Trollinger-Weine trinken die Württemberger selbst – kaum Export.',
    funFact: 'Trollinger ist die meistgepflanzte Rotrebe in Württemberg – das „Volksgetränk" der Region.',
    images: {
      cluster: 'assets/images/grapes/trollinger.jpg',
      leaf: 'assets/images/grapes/trollinger-leaf.jpg',
      vine: 'assets/images/grapes/trollinger-vine.jpg'
    }
  },
  schwarzriesling: {
    key: 'schwarzriesling',
    name: 'Schwarzriesling',
    synonyms: ['Pinot Meunier', 'Müllerrebe', 'Morillon noir'],
    type: 'red',
    charakteristik: 'Dunkel, samtig und weich. Wenig Tannine, volle Frucht. In Württemberg verbreitet – weltweit bekannt als Champagne-Rebe.',
    hauptaromen: ['Beeren', 'Kirsche', 'samtige Textur', 'weiche Frucht'],
    anbaugebiete: ['Württemberg'],
    flaeche: 'ca. 2 %',
    botanik: {
      familie: 'Vitaceae',
      art: 'Vitis vinifera',
      blattform: 'Mittelgroß, bemehlt (weißlicher Belag), fünflappig',
      reife: 'Früh bis mittelspät'
    },
    gastronomie: {
      stil: 'Weich, fruchtig, auch als Rosé',
      passtZu: 'Leichte Gerichte, Vesper, kalte Platten',
      serviertemp: '12–14 °C'
    },
    mythos: 'Schwarzriesling ist ein dunkler Riesling.',
    realitaet: 'Schwarzriesling = Pinot Meunier – eine eigene Burgunder-Sorte, nicht mit Riesling verwandt.',
    funFact: 'Pinot Meunier ist eine der drei Hauptrebsorten für Champagne – neben Chardonnay und Pinot noir.',
    images: {
      cluster: 'assets/images/grapes/schwarzriesling.jpg',
      leaf: 'assets/images/grapes/schwarzriesling-leaf.jpg',
      vine: 'assets/images/grapes/schwarzriesling-vine.jpg'
    }
  }
};

const GRAPE_KEYS_WHITE = ['riesling', 'grauburgunder', 'mueller-thurgau', 'silvaner', 'weissburgunder', 'kerner'];
const GRAPE_KEYS_RED = ['spaetburgunder', 'dornfelder', 'lemberger', 'portugieser', 'trollinger', 'schwarzriesling'];

function grapeCardSummary(g) {
  const parts = g.charakteristik.split('.');
  const short = parts[0] || g.charakteristik;
  const regions = g.anbaugebiete.join(', ');
  return {
    name: g.name,
    color: short.split(',')[0].toLowerCase(),
    taste: short.split(',').slice(1, 3).join(',').trim() || 'charaktervoll',
    aroma: g.hauptaromen.slice(0, 3).join(', '),
    regions
  };
}

const GRAPES_WHITE = GRAPE_KEYS_WHITE.map(k => ({ ...grapeCardSummary(GRAPES[k]), key: k, photoKey: k }));
const GRAPES_RED = GRAPE_KEYS_RED.map(k => ({ ...grapeCardSummary(GRAPES[k]), key: k, photoKey: k }));

function assetSrc(asset) {
  return asset?.local || asset?.cdn || '';
}

const GRAPE_PHOTOS = {
  riesling: {
    local: 'assets/images/grapes/riesling.jpg',
    alt: 'Grüngelbe Riesling-Trauben am Rebstock mit Blättern',
    source: 'Wikimedia Commons – File:Riesling grapes leaves.jpg (CC BY-SA)'
  },
  grauburgunder: {
    local: 'assets/images/grapes/grauburgunder.jpg',
    alt: 'Grauburgunder-Trauben (Ruländer) mit grau-rosa Schimmer am Rebstock',
    source: 'Wikimedia Commons – File:Rulaender Lehrensteinsfeld 20080928.jpg (CC BY-SA)'
  },
  'mueller-thurgau': {
    local: 'assets/images/grapes/mueller-thurgau.jpg',
    alt: 'Helle Müller-Thurgau-Trauben in der Traube',
    source: 'Wikimedia Commons – File:Müller-Thurgau 2 Ausschnitt.jpg (CC BY-SA)'
  },
  silvaner: {
    local: 'assets/images/grapes/silvaner.jpg',
    alt: 'Silvaner-Trauben – gelb-grüne Beeren am Rebstock',
    source: 'Wikimedia Commons – File:Schwarzer Silvaner Weinsberg 20080927.jpg (CC BY-SA)'
  },
  weissburgunder: {
    local: 'assets/images/grapes/weissburgunder.jpg',
    alt: 'Weißburgunder-Trauben – hellgelbe Beeren in der Rebe',
    source: 'Wikimedia Commons – File:Weißburgunder Traube P1120164.jpg (CC BY-SA)'
  },
  kerner: {
    local: 'assets/images/grapes/kerner.jpg',
    alt: 'Kerner-Trauben – grünliche Beeren am Rebstock',
    source: 'Wikimedia Commons – File:Kerner Weinsberg 20060908.jpg (CC BY-SA)'
  },
  spaetburgunder: {
    local: 'assets/images/grapes/spaetburgunder.jpg',
    alt: 'Dunkelblaue Spätburgunder-Trauben (Pinot noir) am Rebstock',
    source: 'Wikimedia Commons – File:Traube des blauen Spätburgunders.jpg (CC BY-SA)'
  },
  dornfelder: {
    local: 'assets/images/grapes/dornfelder.jpg',
    alt: 'Dunkle Dornfelder-Trauben in der Rebe',
    source: 'Wikimedia Commons – File:Dornfelder Weinsberg 20080927.jpg (CC BY-SA)'
  },
  lemberger: {
    local: 'assets/images/grapes/lemberger.jpg',
    alt: 'Lemberger-Trauben (Blaufränkisch) – sehr dunkle Beeren',
    source: 'Wikimedia Commons – File:Lemberger Lehrensteinsfeld 20080928.jpg (CC BY-SA)'
  },
  portugieser: {
    local: 'assets/images/grapes/portugieser.jpg',
    alt: 'Blauer Portugieser – hellrote Trauben am Rebstock',
    source: 'Wikimedia Commons – File:Blauer Portugieser Weinsberg 20080921.jpg (CC BY-SA)'
  },
  trollinger: {
    local: 'assets/images/grapes/trollinger.jpg',
    alt: 'Trollinger-Trauben – hellrote Beeren in Württemberg',
    source: 'Wikimedia Commons – File:Trollinger Lehrensteinsfeld 20080928.jpg (CC BY-SA)'
  },
  schwarzriesling: {
    local: 'assets/images/grapes/schwarzriesling.jpg',
    alt: 'Schwarzriesling-Trauben (Pinot Meunier) am Rebstock',
    source: 'Wikimedia Commons – File:Meunier - vines.jpg (CC BY-SA)'
  }
};

const GRAPE_IMAGE_SOURCES = {
  riesling: {
    leaf: 'Wikimedia: Rieling - leaves.jpg (CC BY-SA)',
    vine: 'Wikimedia: Riesling - vines.jpg (CC BY-SA)'
  },
  grauburgunder: {
    leaf: 'Wikimedia: Pinot gris - leaves.jpg (CC BY-SA)',
    vine: 'Wikimedia: Pinot gris - vines.jpg (CC BY-SA)'
  },
  'mueller-thurgau': {
    leaf: 'Wikimedia: Müller-Thurgau - leaf.jpg (CC BY-SA)',
    vine: 'Wikimedia: HBLA Klosterneuburg Müller Thurgau 2.jpg (CC BY-SA)'
  },
  silvaner: {
    leaf: 'Wikimedia: Sylvaner - leaf.jpg (CC BY-SA)',
    vine: 'Wikimedia: Sylvaner - vines.jpg (CC BY-SA)'
  },
  weissburgunder: {
    leaf: 'Wikimedia: Pinot blanc - leaf.jpg (CC BY-SA)',
    vine: 'Wikimedia: Pinot blanc - vines.jpg (CC BY-SA)'
  },
  kerner: {
    leaf: 'Wikimedia: Kerner - leaf.jpg (CC BY-SA)',
    vine: 'Wikimedia: Kerner - vines.jpg (CC BY-SA)'
  },
  spaetburgunder: {
    leaf: 'Wikimedia: Vine leaf - Pinot noir.jpg (CC BY-SA)',
    vine: 'Wikimedia: Pinot noir - vine.jpg (CC BY-SA)'
  },
  dornfelder: {
    leaf: 'Wikimedia: Dornfelder P1240238.jpg (CC BY-SA)',
    vine: 'Wikimedia: Dornfelder Weinsberg 20080927.jpg (CC BY-SA)'
  },
  lemberger: {
    leaf: 'Wikimedia: Blaufrankisch lemberger leaf at Red Willow.jpg (CC BY-SA)',
    vine: 'Wikimedia: Lemberger Lehrensteinsfeld 20080928.jpg (CC BY-SA)'
  },
  portugieser: {
    leaf: 'Wikimedia: HBLA Klosterneuburg Blauer Portugieser 1.jpg (CC BY-SA)',
    vine: 'Wikimedia: Blauer Portugieser Weinsberg 20080921.jpg (CC BY-SA)'
  },
  trollinger: {
    leaf: 'Wikimedia: VIVC10823 SCHIAVA GROSSA Mature leaf 9304.jpg (CC BY-SA)',
    vine: 'Wikimedia: Trollinger Lehrensteinsfeld 20080928.jpg (CC BY-SA)'
  },
  schwarzriesling: {
    leaf: 'Wikimedia: Meunier - leaf.jpg (CC BY-SA)',
    vine: 'Wikimedia: Meunier - vines.jpg (CC BY-SA)'
  }
};

const REGION_PHOTOS = {
  ahr: {
    local: 'assets/images/regions/ahr.jpg',
    alt: 'Steile Weinberge im Ahrtal bei Mayschoß mit Spätburgunder-Reben',
    source: 'Wikimedia Commons – File:Ahrtal Weinberge Mayschoss.jpg (CC BY-SA)'
  },
  baden: {
    local: 'assets/images/regions/baden.jpg',
    alt: 'Sonnige Weinberge am Kaiserstuhl in Baden',
    source: 'Wikimedia Commons – File:Weinberg Kaiserstuhl Ihringen Vineyard.jpg (CC BY-SA)'
  },
  franken: {
    local: 'assets/images/regions/franken.jpg',
    alt: 'Weinberge in Franken am Main mit Silvaner-Reben',
    source: 'Wikimedia Commons – File:Weinberge bei Volkach.jpg (CC BY-SA)'
  },
  wuerttemberg: {
    local: 'assets/images/regions/wuerttemberg.jpg',
    alt: 'Weinberge in Württemberg bei Metzingen',
    source: 'Wikimedia Commons – File:Weinberg in Metzingen - panoramio.jpg (CC BY-SA)'
  },
  mosel: {
    local: 'assets/images/regions/mosel.jpg',
    alt: 'Steile Riesling-Weinberge an der Mosel',
    source: 'Wikimedia Commons – File:Wine grapes Mosel 2018 (1).jpg (CC BY-SA)'
  },
  rheingau: {
    local: 'assets/images/regions/rheingau.jpg',
    alt: 'Riesling-Weinberge im Rheingau bei Rüdesheim am Rhein',
    source: 'Wikimedia Commons – File:Deutz-Schlepper im Weinberg bei Rüdesheim.jpg (CC BY-SA)'
  },
  rheinhessen: {
    local: 'assets/images/regions/rheinhessen.jpg',
    alt: 'Hügelige Weinlandschaft in Rheinhessen – Land der 1000 Hügel',
    source: 'Wikimedia Commons – File:Weinberge bei Nierstein.jpg (CC BY-SA)'
  },
  pfalz: {
    local: 'assets/images/regions/pfalz.jpg',
    alt: 'Weinberge an der Deutschen Weinstraße in der Pfalz',
    source: 'Wikimedia Commons – File:Weinberge bei Deidesheim.jpg (CC BY-SA)'
  },
  nahe: {
    local: 'assets/images/regions/nahe.jpg',
    alt: 'Weinberge im Nahetal mit dramatischer Landschaft',
    source: 'Wikimedia Commons – File:Weinberge an der Nahe bei Bad Kreuznach.jpg (CC BY-SA)'
  },
  mittelrhein: {
    local: 'assets/images/regions/mittelrhein.jpg',
    alt: 'Rebhänge und Burgen am Mittelrhein bei Bacharach, UNESCO-Welterbe',
    source: 'Wikimedia Commons – File:Bacharach am Rhein - Flickr - abbilder.jpg (CC BY-SA)'
  },
  'hessische-bergstrasse': {
    local: 'assets/images/regions/hessische-bergstrasse.jpg',
    alt: 'Frühlingsweinberge an der Hessischen Bergstraße',
    source: 'Wikimedia Commons – File:Weinberge Heppenheim.jpg (CC BY-SA)'
  },
  'saale-unstrut': {
    local: 'assets/images/regions/saale-unstrut.jpg',
    alt: 'Terrassierte Weinberge an Saale und Unstrut',
    source: 'Wikimedia Commons – File:Weinberge an der Saale bei Freyburg.jpg (CC BY-SA)'
  },
  sachsen: {
    local: 'assets/images/regions/sachsen.jpg',
    alt: 'Weinberge bei Dresden und Meißen in Sachsen',
    source: 'Wikimedia Commons – File:Weinberge bei Meißen.jpg (CC BY-SA)'
  }
};

const BOTTLE_COUNTRY_ORDER = [
  'frankreich', 'spanien', 'italien', 'deutschland', 'portugal',
  'usa', 'chile', 'australien', 'argentinien'
];

const WINE_IMAGE_VERSION = '20260612';

const WINE_PHOTOS = {
  frankreich: {
    local: 'assets/images/wines/bordeaux.jpg',
    label: 'Bordeaux',
    brand: 'Château Pontet-Canet',
    alt: 'Bordeaux-Flasche Frankreich – Pauillac',
    source: 'Wikimedia Commons – File:1995 Chateau Pontet-Canet dusty bottle.jpg (CC BY-SA 2.0)'
  },
  spanien: {
    local: 'assets/images/wines/rioja.jpg',
    label: 'Rioja',
    brand: 'Viña Ardanza',
    alt: 'Rioja-Flasche Spanien – DOCa Rioja',
    source: 'Wikimedia Commons – File:Vino tinto Viña Ardanza (Labastida, Rioja DOCa) 1.jpg (CC BY-SA)'
  },
  italien: {
    local: 'assets/images/wines/chianti.jpg',
    label: 'Chianti',
    brand: 'Chianti di Montespertoli',
    alt: 'Chianti-Flasche Italien – Toskana',
    source: 'Wikimedia Commons – File:Bottiglia vino Chianti di Montespertoli 1983.jpg (CC BY-SA 4.0)'
  },
  deutschland: {
    local: 'assets/images/wines/riesling-de.jpg',
    label: 'Riesling',
    brand: 'Selbach-Oster',
    alt: 'Deutsche Riesling-Flasche – Mosel-Schlegelflasche',
    source: 'Wikimedia Commons – File:2007 Selbach-Oster Graacher Domprobst Riesling Spätlese Halbrtocken from Mosel (5360436866).jpg (CC BY-SA 2.0)'
  },
  portugal: {
    local: 'assets/images/wines/porto.jpg',
    label: 'Porto',
    brand: 'Niepoort',
    alt: 'Portwein-Flasche Portugal – Tawny Port',
    source: 'Wikimedia Commons – File:Niepoort 10 Year Old Tawny Port Wine (14997329301).jpg (CC BY 2.0)'
  },
  usa: {
    local: 'assets/images/wines/napa-cabernet.jpg',
    label: 'Napa Cabernet',
    brand: 'Dominus Estate',
    alt: 'Napa Valley Cabernet Sauvignon – Kalifornien',
    source: 'Wikimedia Commons – File:Dominus 2002.jpg (CC BY-SA 3.0)'
  },
  chile: {
    local: 'assets/images/wines/carmenere.jpg',
    label: 'Carmenère',
    brand: 'Viña Errázuriz',
    alt: 'Chilenische Carmenère-Flasche',
    source: 'Wikimedia Commons – File:Errazuriz Carmenere.jpg (CC BY-SA)'
  },
  australien: {
    local: 'assets/images/wines/barossa-shiraz.jpg',
    label: 'Barossa Shiraz',
    brand: 'Charles Cimicky',
    alt: 'Australischer Rotwein – Barossa Valley',
    source: 'Wikimedia Commons – File:Charles Cimicky Barossa wine.jpg (CC BY 2.0)'
  },
  argentinien: {
    local: 'assets/images/wines/malbec.jpg',
    label: 'Malbec',
    brand: 'La Finca',
    alt: 'Argentinische Malbec-Flasche',
    source: 'Wikimedia Commons – File:La Finca Malbec.jpg (CC BY 2.0)'
  },
  oesterreich: {
    local: 'assets/images/wines/gruener-veltliner.jpg',
    label: 'Grüner Veltliner',
    brand: 'Österreich',
    alt: 'Grüner Veltliner – typischer österreichischer Weißwein',
    source: 'Wikimedia Commons'
  },
  griechenland: {
    local: 'assets/images/wines/assyrtiko.jpg',
    label: 'Assyrtiko',
    brand: 'Santorini',
    alt: 'Assyrtiko-Weinflasche aus Griechenland',
    source: 'Wikimedia Commons'
  },
  tuerkei: {
    local: 'assets/images/wines/tuerkei.jpg',
    label: 'Anatolien',
    brand: 'Türkischer Wein',
    alt: 'Türkischer Wein aus Anatolien',
    source: 'Wikimedia Commons'
  }
};

const GENERAL_PHOTOS = {
  hero: {
    local: 'assets/images/general/hero-vineyard.jpg',
    cdn: 'https://images.unsplash.com/photo-1506377585622-bedcbb027afc?w=1600&q=85&auto=format&fit=crop',
    alt: 'Panorama eines deutschen Weinbergs mit Rebhängen',
    source: 'Unsplash (Unsplash License)'
  },
  grapeAnatomy: {
    local: 'assets/images/general/grape-cross-section.jpg',
    cdn: 'https://commons.wikimedia.org/wiki/Special:FilePath/Crimson_Seedless_berry_and_seed_section_05.jpg?width=1200',
    alt: 'Weinbeere im Längsschnitt – Schale, Fruchtfleisch und Kern',
    source: 'Wikimedia Commons – V.Boldychev, CC BY-SA 4.0'
  },
  wineColors: {
    local: 'assets/images/general/wine-colors.jpg',
    cdn: 'https://commons.wikimedia.org/wiki/Special:FilePath/Red_and_white_wine_12-2015.jpg?width=900',
    alt: 'Rotwein und Weißwein im Glas – Farbvergleich',
    source: 'Wikimedia Commons – A.Savin, CC BY-SA 3.0'
  },
  refractometer: {
    local: 'assets/images/general/refractometer.jpg',
    cdn: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=85&auto=format&fit=crop',
    alt: 'Refraktometer zur Messung des Mostgewichts (Oechsle)',
    source: 'Wikimedia Commons – File:Refractometer.jpg (CC BY-SA)'
  },
  oechsleLabel: {
    local: 'assets/images/general/oechsle-label.jpg',
    cdn: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&q=85&auto=format&fit=crop',
    alt: 'Deutsches Weinetikett mit Qualitätsangabe',
    source: 'Unsplash (Unsplash License)'
  }
};

const INHALT_PHOTOS = {
  crossSection: GENERAL_PHOTOS.grapeAnatomy,
  diagram: {
    local: 'assets/images/general/grape-anatomy-labeled.svg',
    cdn: 'https://commons.wikimedia.org/wiki/Special:FilePath/Wine_grape_diagram_en.svg',
    alt: 'Botanisches Diagramm der Weinbeere – Exocarp, Mesocarp, Samen',
    source: 'Wikimedia Commons – LadyofHats, Public Domain'
  },
  cluster: {
    local: 'assets/images/general/grape-cluster.jpg',
    cdn: 'https://commons.wikimedia.org/wiki/Special:FilePath/Weintrauben.jpg?width=900',
    alt: 'Reife Weintrauben am Rebstock',
    source: 'Wikimedia Commons – CC'
  },
  maische: {
    local: 'assets/images/general/maischegaerung-tank.jpg',
    cdn: 'https://commons.wikimedia.org/wiki/Special:FilePath/Fermentation_tank_and_cap_management_Smith-Madrone.jpg?width=1000',
    alt: 'Maischegärung – Schalen werden im Gärtank untergedrückt',
    source: 'Wikimedia Commons – Ian Brown, CC BY 2.0'
  },
  barrique: {
    local: 'assets/images/general/barrique-barrel.jpg',
    cdn: 'https://commons.wikimedia.org/wiki/Special:FilePath/Barrique_Fass_aus_Eiche,_Versuchsgut_Agneshof_des_LFZ_Klosterneuburg.jpg?width=900',
    alt: 'Barrique-Fass aus Eiche (225 Liter)',
    source: 'Wikimedia Commons – Naturpuur, CC BY-SA 4.0'
  },
  toasting: {
    local: 'assets/images/general/barrel-toasting.jpg',
    cdn: 'https://commons.wikimedia.org/wiki/Special:FilePath/Oak-wine-barrel-parts-description-toasting-toneleria-nacional-chile.jpg?width=1000',
    alt: 'Eichenfass – Aufbau und Toastungsstufen',
    source: 'Wikimedia Commons – CC'
  }
};

Object.entries(REGIONS).forEach(([key, r]) => {
  const photo = REGION_PHOTOS[key];
  r.mapImg = regionMapSvgDataUri(key);
  r.landscapeImg = photo ? assetSrc(photo) : '';
  r.landscapeCdn = photo?.cdn || '';
  r.imgFallback = r.mapImg;
  r.imgAlt = photo?.alt || `Weinberge in ${r.name}`;
  r.mapAlt = `Lage des Anbaugebiets ${r.name} in Deutschland`;
});

function enrichGrapeCard(g, type, index) {
  const key = g.key || g.photoKey;
  const photo = GRAPE_PHOTOS[key];
  const detail = GRAPES[key];
  g.photoKey = key;
  g.imgFallback = grapeSvgDataUri(type, index);
  g.img = detail?.images?.cluster || (photo ? assetSrc(photo) : g.imgFallback);
  g.imgCdn = photo?.cdn || '';
  g.imgAlt = photo?.alt || `${g.name}-Trauben am Rebstock`;
}

GRAPES_WHITE.forEach((g, i) => enrichGrapeCard(g, 'white', i));
GRAPES_RED.forEach((g, i) => enrichGrapeCard(g, 'red', i));

const ANATOMY = {
  schale: {
    title: 'Schale (Exocarp)',
    text: 'Dünne Haut der Beere. Enthält Anthocyane (Farbe), Tannine und Aromastoffe. Bei Rotwein bleibt die Schale mit dem Most zusammen – durch Maischegärung gelangen Farbe und Gerbstoffe in den Wein.'
  },
  fruchtfleisch: {
    title: 'Fruchtfleisch (Mesocarp)',
    text: 'Größter Teil der Beere (70–80 % Wasser). Enthält Zucker (Glucose, Fructose) und Säuren (Weinsäure, Apfelsäure). Der Most für die Gärung kommt hauptsächlich aus dem Fruchtfleisch.'
  },
  kerne: {
    title: 'Kerne (Samen)',
    text: 'Zwei bis vier Kerne pro Beere. Enthalten Tannine und Traubenkernöl. Beides wird in der Regel nicht gewollt im Wein – Kerne werden beim Pressen entfernt.'
  },
  strunk: {
    title: 'Strunk (Rachis)',
    text: 'Der Traubenstiel verbindet die Beeren. Enthält viel bitteres Tannin. Wird vor der Gärung entfernt (Entrappen), damit der Wein nicht herb schmeckt.'
  },
  zucker: {
    title: 'Zucker',
    text: 'Hauptsächlich Glucose und Fructose. Hefen wandeln Zucker bei der Gärung in Alkohol und CO₂ um. Mehr Zucker = höherer Mostgewicht (Oechsle-Wert).'
  },
  saeure: {
    title: 'Säuren',
    text: 'Weinsäure und Apfelsäure geben Frische und Haltbarkeit. Der Gesamtsäuregehalt beeinflusst den Geschmack – von frisch-säuerlich bis weich.'
  },
  tannine: {
    title: 'Tannine (Gerbstoffe)',
    text: 'Polyphenole vor allem in Schale und Kernen. Geben Rotwein Struktur, Adstringenz und Haltbarkeit. Bei Maischegärung werden mehr Tannine aus der Schale extrahiert.'
  },
  aromastoffe: {
    title: 'Aromastoffe',
    text: 'Hunderte flüchtiger Verbindungen in Schale und Fruchtfleisch. Bestimmen Geruch und Geschmack (fruchtig, blumig, würzig). Reife und Vinifikation verändern das Aroma.'
  },
  pektin: {
    title: 'Pektin',
    text: 'Natürliches Geliermittel in den Zellwänden. Kann bei der Klärung Probleme machen – Winzer nutzen Pektinase oder klären schonend.'
  },
  mineralstoffe: {
    title: 'Mineralstoffe',
    text: 'Kalium, Magnesium, Phosphor u. a. in geringen Mengen. Der Boden (Terroir) beeinflusst Mineralgehalt und Geschmacksprofil der Traube.'
  },
  maische: {
    title: 'Maischegärung',
    text: 'Bei Rotwein gärt der Most mit Schalen mit – oft bis zu 2 Wochen. Anthocyane und Tannine gehen aus der Schale in den Wein. So bekommt Rotwein Farbe und Struktur. Bei Weißwein wird nur der Most gepresst.'
  },
  bsa: {
    title: 'BSA – Biologischer Säureabbau',
    text: 'Milchsäurebakterien wandeln scharfe Apfelsäure in mildere Milchsäure um. Der Wein wird weicher und runder. Typisch bei vielen Rotweinen und einigen Weißweinen.'
  },
  barrique: {
    title: 'Barrique & Toastung',
    text: 'Eichenfass mit 225 Liter (= ca. 300 Flaschen à 0,75 L). Das Holz gibt Aroma und Sauerstoffkontakt. Toastung: leicht = Vanille, mittel = Karamell, stark = bittere Schokolade.'
  }
};

const PRODUCERS = [
  {
    rank: 1,
    name: 'E & J Gallo',
    country: 'USA',
    countryKey: 'usa',
    flag: '🇺🇸',
    hq: 'Modesto, Kalifornien',
    brands: 'Barefoot, Apothic, La Marca Prosecco, Gallo Family',
    volume: 'ca. 94 Mio. 9-l-Kisten/Jahr',
    volumeNum: 94,
    type: 'Wein (Massenmarkt + Premium)',
    note: 'Größter Weinproduzent der Welt nach Volumen. Familienunternehmen seit 1933. Verkauft in über 100 Ländern.'
  },
  {
    rank: 2,
    name: 'Groupe Castel (Castel Frères)',
    country: 'Frankreich',
    countryKey: 'frankreich',
    flag: '🇫🇷',
    hq: 'Bordeaux',
    brands: 'Baron de Lestac, Roche Mazet, Vieux Papes, Château Beychevelle',
    volume: 'ca. 53 Mio. 9-l-Kisten/Jahr',
    volumeNum: 53,
    type: 'Wein (Volumen + Châteaux)',
    note: 'Drittgrößter Weinproduzent weltweit. Gründung 1949. Stark in Frankreich und Afrika.'
  },
  {
    rank: 3,
    name: 'The Wine Group',
    country: 'USA',
    countryKey: 'usa',
    flag: '🇺🇸',
    hq: 'Livermore, Kalifornien',
    brands: 'Franzia, Cupcake, Woodbridge, Meiomi, SIMI',
    volume: 'über 52 Mio. 9-l-Kisten/Jahr',
    volumeNum: 52,
    type: 'Wein (Volumen + Premium)',
    note: 'Zweitgrößter Weinlieferant weltweit. Franzia ist seit über 20 Jahren die größte Weinmarke nach Volumen.'
  },
  {
    rank: 4,
    name: 'Vinarchy (ehem. Accolade Wines)',
    country: 'Australien',
    countryKey: 'australien',
    flag: '🇦🇺',
    hq: 'Adelaide / Melbourne',
    brands: 'Hardys, Banrock Station, Jacob\'s Creek, Campo Viejo',
    volume: 'über 32 Mio. 9-l-Kisten/Jahr',
    volumeNum: 32,
    type: 'Wein (global)',
    note: 'Neues Unternehmen seit 2025: Fusion von Accolade Wines mit Pernod-Ricard-Weinmarken. Größte Kellerei der Südhalbkugel: Berri Estates.'
  },
  {
    rank: 5,
    name: 'Treasury Wine Estates',
    country: 'Australien',
    countryKey: 'australien',
    flag: '🇦🇺',
    hq: 'Melbourne',
    brands: 'Penfolds, 19 Crimes, Wolf Blass, Stags\' Leap',
    volume: 'ca. 22 Mio. 9-l-Kisten/Jahr',
    volumeNum: 22,
    type: 'Wein (Luxus + Premium)',
    note: 'Börsennotiert (ASX). Penfolds ist eine der bekanntesten Luxusmarken. Fokus auf Premium und Luxusweine.'
  },
  {
    rank: 6,
    name: 'Henkell Freixenet (Dr. Oetker)',
    country: 'Deutschland',
    countryKey: 'deutschland',
    flag: '🇩🇪',
    hq: 'Wiesbaden',
    brands: 'Henkell, Freixenet, Mionetto, Segura Viudas',
    volume: 'über 200 Mio. Flaschen Schaumwein/Jahr',
    volumeNum: 22,
    type: 'Schaumwein (weltweit Nr. 1)',
    note: 'Teil der Geschwister-Oetker-Gruppe (Dr. Oetker-Familie). Weltmarktführer bei Schaumwein nach Volumen. Umsatz ca. 1,25 Mrd. € (2025).'
  },
  {
    rank: 7,
    name: 'Constellation Brands',
    country: 'USA',
    countryKey: 'usa',
    flag: '🇺🇸',
    hq: 'Victor, New York',
    brands: 'Robert Mondavi, The Prisoner, Kim Crawford, Meiomi (verkauft)',
    volume: 'ca. 5 Mio. 9-l-Kisten Wein (nach Verkauf)',
    volumeNum: 5,
    type: 'Wein + Bier + Spirituosen',
    note: 'Verkaufte 2025 große Teile des Weinportfolios an The Wine Group. Fokus jetzt auf Premium-Weine und Bier (Corona).'
  },
  {
    rank: 8,
    name: 'Rotkäppchen-Mumm',
    country: 'Deutschland',
    countryKey: 'deutschland',
    flag: '🇩🇪',
    hq: 'Freyburg (Unstrut)',
    brands: 'Rotkäppchen, Mumm, Geldermann, Ruggeri Prosecco',
    volume: 'ca. 330 Mio. Flaschen gesamt/Jahr',
    volumeNum: 18,
    type: 'Sekt + Wein + Spirituosen',
    note: 'Marktführer für deutschen Sekt (ca. 50 % Marktanteil). Familienunternehmen mit über 190 Jahren Tradition.'
  },
  {
    rank: 9,
    name: 'LVMH / Moët Hennessy',
    country: 'Frankreich',
    countryKey: 'frankreich',
    flag: '🇫🇷',
    hq: 'Paris',
    brands: 'Moët & Chandon, Veuve Clicquot, Dom Pérignon, Krug',
    volume: 'Luxus-Champagner (Volumen geringer)',
    volumeNum: 8,
    type: 'Champagner + Luxuswein',
    note: 'Weltweit führend bei Luxus-Champagner. Moët Hennessy ist der Weinschirm von LVMH. Fokus auf Premium, nicht auf Masse.'
  },
  {
    rank: 10,
    name: 'Pernod Ricard',
    country: 'Frankreich',
    countryKey: 'frankreich',
    flag: '🇫🇷',
    hq: 'Paris',
    brands: 'Mumm, Perrier-Jouët (Champagner); Weinmarken an Vinarchy verkauft',
    volume: 'Weinportfolio verkauft (2025)',
    volumeNum: 7,
    type: 'Spirituosen + Champagner',
    note: 'Verkaufte 2025 internationale Weinmarken (Jacob\'s Creek, Campo Viejo u.a.) an Vinarchy. Fokus auf Spirituosen und Champagner.'
  },
  {
    rank: 11,
    name: 'Zonin 1821',
    country: 'Italien',
    countryKey: 'italien',
    flag: '🇮🇹',
    hq: 'Gambellara (Venetien)',
    brands: 'Castello del Poggio, Tenuta Ca\' Bolani, Rocca di Montemassi',
    volume: 'über 50 Mio. Flaschen/Jahr',
    volumeNum: 4.2,
    type: 'Wein (7 Weingüter in Italien)',
    note: 'Eines der größten Familienunternehmen Italiens. Aktiv in 140 Ländern. Ca. 1.500 ha Rebfläche.'
  },
  {
    rank: 12,
    name: 'Familia Torres',
    country: 'Spanien',
    countryKey: 'spanien',
    flag: '🇪🇸',
    hq: 'Penedès (Katalonien)',
    brands: 'Sangre de Toro, Viña Sol, Mas La Plana, Coronas',
    volume: 'ca. 4 Mio. 9-l-Kisten/Jahr',
    volumeNum: 4,
    type: 'Wein (Familienunternehmen)',
    note: 'Über 150 Jahre Weinbau. Fünf Generationen. Nachhaltigkeit und Innovation (z. B. widerstandsfähige Rebsorten).'
  },
  {
    rank: 13,
    name: 'Marchesi Antinori',
    country: 'Italien',
    countryKey: 'italien',
    flag: '🇮🇹',
    hq: 'Florenz (Toskana)',
    brands: 'Tignanello, Villa Antinori, Solaia, Peppoli',
    volume: 'ca. 2 Mio. 9-l-Kisten/Jahr',
    volumeNum: 2,
    type: 'Wein (Premium-Familienweingut)',
    note: 'Weingut seit 1385 – 26 Generationen. Über 5.000 ha Rebfläche. Oft als „meistbewunderteste Weinmarke" bezeichnet.'
  }
];

const MYTHS_FACTS = {
  'tab-laender': {
    myths: [
      { myth: '„Spanien produziert am meisten Wein."', reality: 'Spanien hat die größte Rebfläche (1.021.000 ha, Lehrbuch). Bei der Ernte führen Italien (OIV 2024: 44,1 Mio. hl) und Frankreich (36,1 Mio. hl) – Spanien nur 38 Mio. hl (Lehrbuch) bzw. 31 Mio. hl (OIV 2024).' },
      { myth: '„Türkei ist kein Weinland."', reality: 'Türkei hat 504.000 ha Rebfläche (Lehrbuch) – 5. größte weltweit (OIV 2024: 402.000 ha). Nur der Weinertrag ist niedrig (0,3 Mio. hl), weil viele Trauben als Tafeltrauben genutzt werden.' },
      { myth: '„Deutschland spielt weltweit keine Rolle."', reality: 'Deutschland ist der größte Weinimporteur nach Volumen (12,7 Mio. hl, OIV 2024) und hat einen Weinmarkt von ca. 4,5 Mrd. €. Bei Qualitätswein (Riesling) ist DE weltweit gefragt.' },
      { myth: '„Champagner kann überall hergestellt werden."', reality: 'Nur Wein aus der Region Champagne in Frankreich darf „Champagne" heißen. Andere Länder nennen ihren Schaumwein z. B. Sekt, Cava oder Prosecco.' }
    ],
    factsTitle: 'Weinbauländer & Wirtschaft',
    facts: [
      { emoji: '🇪🇸', text: '<strong>Spanien:</strong> Größte Rebfläche (1,02 Mio. ha), aber Ertrag nur ~37 hl/ha – Frankreich erreicht ~58 hl/ha (Lehrbuch).' },
      { emoji: '🇫🇷', text: '<strong>Frankreich:</strong> Exportwert ~11,7 Mrd. € (OIV 2024) – weltweit Nr. 1. 73 % Rotwein (inkl. Rosé).' },
      { emoji: '🇮🇹', text: '<strong>Italien:</strong> Größter Weinexporteur nach Volumen: 21,7 Mio. hl, Wert 8,1 Mrd. € (OIV 2024). Prosecco boomt.' },
      { emoji: '🇩🇪', text: '<strong>Deutschland:</strong> Platz 9 bei der Weltproduktion (~7,8 Mio. hl, OIV 2024) – Lehrbuch nennt oft Top 8. Weinmarkt ~4,5 Mrd. € (Statista 2023).' },
      { emoji: '🇺🇸', text: '<strong>USA:</strong> Größter Weinkonsument (33,3 Mio. hl). Größte Weinunternehmen der Welt: Gallo & The Wine Group.' },
      { emoji: '🇨🇱', text: '<strong>Chile:</strong> 4. Exporteur weltweit (7,8 Mio. hl). Carmenère ist die typische Sorte.' },
      { emoji: '🇳🇿', text: '<strong>Neuseeland:</strong> Nur 2,8 Mio. hl Produktion – aber 1,1 Mrd. € Exportwert dank Premium-Sauvignon blanc.' },
      { emoji: '🌍', text: '<strong>Weltweit:</strong> 225,8 Mio. hl Produktion, 35,9 Mrd. € Exportwert (OIV 2024) – niedrigste Ernte seit 1961.' }
    ]
  },
  'tab-gebiete': {
    myths: [
      { myth: '„Alle deutschen Regionen sind gleich kühl."', reality: 'Baden liegt in Weinzone B – wärmer als alle anderen Gebiete (Zone A). Dort braucht Qualitätswein min. 50°Oe statt 44°Oe (Lehrbuch Kap. 7).' },
      { myth: '„Die Mosel ist das größte deutsche Gebiet."', reality: 'Rheinhessen ist das größte Gebiet mit 26.881 ha. Die Mosel hat nur 8.717 ha – aber die steilsten Hänge der Welt.' },
      { myth: '„Die Ahr macht nur Weißwein."', reality: 'Die Ahr ist Rotwein-Spezialist! Spätburgunder dominiert auf nur 535 ha. Vulkanischer Boden aus Schiefer und Basalt.' },
      { myth: '„Franken exportiert viel Wein."', reality: '4 von 5 Franken-Flaschen werden lokal getrunken. Franken ist ein typisches Binnenland-Markt-Gebiet (6.107 ha).' },
      { myth: '„Der Bocksbeutel gibt es überall in Deutschland."', reality: 'Die typische Bocksbeutelflasche ist ein Markenzeichen Frankens – für bestimmte Qualitätsweine (vor allem Silvaner) gesetzlich geschützt und außerhalb Frankens nicht erlaubt (DWI).' }
    ],
    factsTitle: 'DE-Gebiete',
    facts: [
      { emoji: '🍾', text: '<strong>Bocksbeutel:</strong> Die flache Flasche ist typisch für Franken – nur dort für Qualitätswein erlaubt. Silvaner im Bocksbeutel ist Klassiker.' },
      { emoji: '🏛️', text: '<strong>Ahr 1868:</strong> Erste deutsche Winzergenossenschaft in Mayschoß – noch heute aktiv.' },
      { emoji: '📍', text: '<strong>Würzburger Stein:</strong> Erste benannte Einzellage Deutschlands (85 ha) – seit dem Mittelalter bekannt.' },
      { emoji: '⛰️', text: '<strong>Mosel:</strong> Steilste Weinberge der Welt – bis 65° Neigung. Handarbeit statt Maschinen.' },
      { emoji: '⚖️', text: '<strong>65 : 35:</strong> Verhältnis Weißwein zu Rotwein in Deutschland. Rot wird aber immer wichtiger (Württemberg: 65 % Rot!).' },
      { emoji: '🗺️', text: '<strong>13 Gebiete:</strong> Von Ahr (535 ha) bis Rheinhessen (26.881 ha). Jedes hat eigene Sorten und Böden (DWI).' }
    ]
  },
  'tab-sorten': {
    myths: [
      { myth: '„Riesling ist immer süß."', reality: 'Falsch! Die meisten deutschen Rieslinge sind heute trocken. Süße gibt es nur bei Prädikaten wie Spätlese oder Auslese – der Winzer entscheidet.' },
      { myth: '„Dornfelder ist eine alte Sorte."', reality: 'Dornfelder wurde erst 1955 gezüchtet – relativ jung! Kreuzung aus Helfensteiner × Heroldrebe. Heute wichtigster Rotwein in Rheinhessen.' },
      { myth: '„Spätburgunder ist nicht französisch."', reality: 'Spätburgunder = Pinot noir = gleiche Sorte! Nur der deutsche Name ist anders. Wichtig in Ahr, Baden und Pfalz.' },
      { myth: '„Silvaner gibt es nur in Franken."', reality: 'Silvaner ist Frankens edelste Sorte – aber auch in Rheinhessen und Pfalz verbreitet. Insgesamt ca. 5 % der deutschen Rebfläche.' },
      { myth: '„Alle deutschen Weine sind billig."', reality: 'Falsch! Es gibt Premium-Weine: VDP.GG-Riesling (Großes Gewächs), Spätburgunder aus Ahr/Baden oder Trockenbeerenauslese – oft 30–100 € und mehr pro Flasche.' },
      { myth: '„Deutschland macht nur süßen Wein."', reality: 'Die meisten deutschen Weine sind heute trocken. Süße gibt es vor allem bei Prädikaten (Spätlese, Auslese) – der Winzer entscheidet über Restzucker.' }
    ],
    factsTitle: 'Rebsorten',
    facts: [
      { emoji: '🇩🇪', text: '<strong>Deutschland:</strong> Weltweit unter den Top 10 bei der Weinproduktion (~7,8 Mio. hl, OIV 2024). Riesling-Heimat mit weltweitem Ruf.' },
      { emoji: '🍇', text: '<strong>Riesling:</strong> Ca. 23 % aller deutschen Rebflächen – klar Nr. 1 unter den Sorten (BMEL-Statistik). Ursprung vermutlich Rheingebiet.' },
      { emoji: '🍷', text: '<strong>Trollinger:</strong> Typisch für Württemberg. Die meisten Trollinger-Weine trinken die Württemberger selbst – kaum Export.' },
      { emoji: '🇦🇹', text: '<strong>Lemberger:</strong> In Österreich heißt dieselbe Sorte Blaufränkisch. Würzig, mit Tanninen – ideal für kräftige Gerichte.' },
      { emoji: '🧬', text: '<strong>Kerner:</strong> Kreuzung aus Riesling × Trollinger (1969). Frisch, aromatisch – wächst in Rheinhessen, Pfalz und Franken.' },
      { emoji: '📊', text: '<strong>Müller-Thurgau:</strong> Früher Nr. 1, heute Nr. 2. Leicht, duftend – oft in Rheinhessen und Pfalz angebaut.' }
    ]
  },
  'tab-inhalt': {
    myths: [
      { myth: '„Traubenkern macht den Wein bitter."', reality: 'Kerne enthalten Tannine und Öl – aber sie werden meist nicht gepresst. Der Strunk (Stiel) hat mehr Tannin und wird vor der Gärung entfernt.' },
      { myth: '„Mehr Zucker = immer süßerer Wein."', reality: 'Viel Zucker im Most bedeutet nur Potenzial. Der Winzer kann den Wein trocken fermentieren lassen – dann wird fast alles zu Alkohol.' },
      { myth: '„Rotwein hat mehr Zucker als Weißwein."', reality: 'Nein! Die Farbe kommt von der Schale, nicht vom Zucker. Bei Rotwein bleibt Most + Schale zusammen (Maischegärung).' }
    ],
    factsTitle: 'Inhaltsstoffe',
    facts: [
      { emoji: '💧', text: '<strong>Wasser:</strong> 70–80 % der Traube ist Wasser. Zucker macht 15–25 %, Säuren ca. 0,5–1 % (Lehrbuch Kap. 6).' },
      { emoji: '🛢️', text: '<strong>Barrique:</strong> 225 Liter = ca. 300 Flaschen à 0,75 l. Französisches Eichenholz ist Standard für Premium-Weine.' },
      { emoji: '🥛', text: '<strong>BSA:</strong> Biologischer Säureabbau wandelt harte Weinsäure in milde Milchsäure – der Wein wird weicher und runder.' },
      { emoji: '🔥', text: '<strong>Toastung:</strong> Leichte Röstung im Fass = Vanille. Mittel = Karamell. Starke Toastung = bittere Schokolade und Röstaromen.' },
      { emoji: '🎨', text: '<strong>Schale:</strong> Enthält Farbstoffe (Anthocyane) und Tannine. Bei Weißwein wird nur der Most gepresst – die Schale bleibt draußen.' }
    ]
  },
  'tab-oechsle': {
    myths: [
      { myth: '„Hoher Oechsle = süßer Wein."', reality: 'Oechsle misst nur den Zucker im Most vor der Gärung. Der Winzer entscheidet: alle Zucker zu Alkohol fermentieren (trocken) oder Restzucker lassen (süß). Spätlese kann trocken sein!' },
      { myth: '„Oechsle gibt es überall auf der Welt."', reality: 'Oechsle nutzen vor allem Deutschland, Österreich und die Schweiz. USA misst Brix, Frankreich Baumé, Österreich auch KMW.' },
      { myth: '„57°Oe ist sehr hoch."', reality: '57°Oe ist nur das Minimum für Qualitätswein. Spätlese braucht ab 76°Oe, Trockenbeerenauslese ab 150°Oe – das ist wirklich hoch!' },
      { myth: '„Teurer Wein = immer besser."', reality: 'Höhere Prädikate brauchen reifere Trauben und mehr Arbeit – deshalb oft teurer. Aber Geschmack ist subjektiv: Kabinett kann genauso gut schmecken wie Auslese.' }
    ],
    factsTitle: 'Oechsle',
    facts: [
      { emoji: '🔬', text: '<strong>Erfinder:</strong> Christian Ferdinand Oechsle erfand das Mostgewicht ca. 1836 in Fellbach (Württemberg).' },
      { emoji: '🌡️', text: '<strong>Weinzone B:</strong> Nur Baden. Dort braucht Wein aus Deutschland min. 50°Oe – in Zone A nur 44°Oe (Lehrbuch Kap. 7).' },
      { emoji: '🍷', text: '<strong>Nach Anreicherung:</strong> Qualitätswein braucht min. 8,5 % Vol. Alkohol und min. 3,5 g/l Gesamtsäure (Lehrbuch Kap. 7).' },
      { emoji: '❄️', text: '<strong>Eiswein:</strong> Trauben werden bei mindestens −7 °C geerntet – oft in der Nacht. Mindestens 110°Oe, sehr selten und teuer.' },
      { emoji: '🍇', text: '<strong>TBA:</strong> Trockenbeerenauslese ab 150°Oe. Trauben schrumpeln wie Rosinen – extrem süß und konzentriert.' },
      { emoji: '📏', text: '<strong>1 °Oe =</strong> 1 Gramm mehr als 1 Liter Wasser wiegt. Ca. 2,5 g Zucker pro 1 °Oe.' }
    ]
  }
};

function renderMythsFacts(tabId) {
  const container = document.querySelector(`[data-myths-facts="${tabId}"]`);
  const data = MYTHS_FACTS[tabId];
  if (!container || !data) return;

  let html = '';
  if (data.myths?.length) {
    html += '<h3 class="myths-section-title">🔍 Mythos vs. Realität</h3><div class="myth-grid">';
    data.myths.forEach(pair => {
      html += `<div class="myth-card myth"><h4>❌ Mythos</h4><p>${pair.myth}</p></div>`;
      html += `<div class="myth-card reality"><h4>✅ Realität</h4><p>${pair.reality}</p></div>`;
    });
    html += '</div>';
  }
  if (data.facts?.length) {
    html += `<div class="fun-facts"><h3>✨ Fun Facts – ${data.factsTitle}</h3><ul class="fact-list">`;
    data.facts.forEach(f => {
      html += `<li><span class="fact-emoji">${f.emoji}</span><span>${f.text}</span></li>`;
    });
    html += '</ul></div>';
  }
  container.innerHTML = html;
}

function initMythsFacts() {
  Object.keys(MYTHS_FACTS).forEach(renderMythsFacts);
}

const OECHSLE_LEVELS = [
  { id: 'wein', name: 'Wein aus D.', min: 44, zoneB: 50 },
  { id: 'landwein', name: 'Landwein', min: 47 },
  { id: 'qba', name: 'Qualitätswein', min: 57 },
  { id: 'kabinett', name: 'Kabinett', min: 67, max: 82 },
  { id: 'spaetlese', name: 'Spätlese', min: 76, max: 90 },
  { id: 'auslese', name: 'Auslese', min: 83, max: 100 },
  { id: 'ba', name: 'Beerenauslese', min: 110, max: 128 },
  { id: 'tba', name: 'TBA', min: 150, max: 154 },
  { id: 'eiswein', name: 'Eiswein', min: 110 }
];

const OECHSLE_CASE_STUDIES = [
  { oe: 70, product: 'Mosel Kabinett Riesling', note: 'Leicht, frisch, oft trocken' },
  { oe: 85, product: 'Rheingau Spätlese', note: 'Reifer, voller, oft halbtrocken' },
  { oe: 95, product: 'Pfalz Auslese', note: 'Selektiert, edel, oft süß' },
  { oe: 115, product: 'Eiswein', note: 'Gefrorene Trauben, sehr süß und selten' }
];

function calculateAlcohol(oe) {
  const pct = Math.max(0, (oe - 50) * 0.1 + 5);
  return pct.toFixed(1).replace('.', ',') + ' %';
}

function calculateSugar(oe) {
  const grams = Math.round(oe * 2.5);
  return '~' + grams + ' g/l';
}

function getOechsleClass(oe) {
  if (oe >= 150) return 'Trockenbeerenauslese';
  if (oe >= 110) return 'Beerenauslese / Eiswein';
  if (oe >= 83) return 'Auslese';
  if (oe >= 76) return 'Spätlese';
  if (oe >= 67) return 'Kabinett';
  if (oe >= 57) return 'Qualitätswein';
  if (oe >= 47) return 'Landwein';
  return 'Wein aus Deutschland';
}

const OECHSLE_CLASS_TO_ID = {
  'Wein aus Deutschland': 'wein',
  Landwein: 'landwein',
  Qualitätswein: 'qba',
  Kabinett: 'kabinett',
  Spätlese: 'spaetlese',
  Auslese: 'auslese',
  'Beerenauslese / Eiswein': 'ba',
  Trockenbeerenauslese: 'tba'
};

function getOechsleZoneText(oe) {
  const zoneA = oe >= 44 ? 'Zone A ✓' : 'Zone A ✗';
  const zoneB = oe >= 50 ? 'Zone B ✓' : 'Zone B ✗';
  return `${zoneA} · ${zoneB}`;
}

function getOechsleExample(oe) {
  const match = OECHSLE_CASE_STUDIES.reduce((best, c) =>
    Math.abs(c.oe - oe) < Math.abs(best.oe - oe) ? c : best
  );
  return `Bei ${oe}°Oe: typisch ${match.product} – ${match.note}`;
}

function oeToHydrometerPct(oe) {
  return Math.min(100, Math.max(4, ((oe - 40) / 120) * 100));
}

// Tab Navigation
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initAccordion();
  initCountryMap();
  initBottles();
  initDeWineMap();
  initGrapes();
  initGrapeModal();
  initRegionImages();
  initGrapeFilter();
  initAnatomy();
  initSectionPhotos();
  initOechsleSlider();
  initSortableTable();
  initCharts();
  initProducers();
  initHero();
  initMythsFacts();
});

function initTabs() {
  const btns = document.querySelectorAll('.nav-btn');
  const panels = document.querySelectorAll('.tab-panel');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(tab)?.classList.add('active');
      nav?.classList.remove('open');
      if (tab === 'tab-gebiete') refreshDeWineMapSize();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => {
      const tab = el.dataset.goto;
      document.querySelector(`.nav-btn[data-tab="${tab}"]`)?.click();
      if (el.dataset.scroll) {
        setTimeout(() => {
          document.getElementById(el.dataset.scroll)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    });
  });

  menuToggle?.addEventListener('click', () => nav?.classList.toggle('open'));
}

function initAccordion() {
  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const wasOpen = item.classList.contains('open');
      const regionKey = getRegionKeyFromAccordionItem(item);
      document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('open'));
      if (!wasOpen) {
        item.classList.add('open');
        if (regionKey && REGIONS[regionKey]) {
          initRegionMiniMap(regionKey);
          refreshRegionMiniMap(regionKey);
          document.querySelector(`.legend-region[data-region="${regionKey}"]`)?.click();
        }
      }
    });
  });
}

function renderCountryDetail(key) {
  const info = document.getElementById('country-info');
  const c = COUNTRIES[key];
  if (!info || !c) return;

  const yieldVal = countryYieldHlPerHa(c);
  const oivNote = oivDiffNote(c);
  const exportShare = c.exportHl && c.hl ? Math.round((c.exportHl / c.hl) * 100) : null;

  const regionMap = COUNTRY_REGION_IMAGES[key];
  const regionMapHtml = regionMap ? `
    <div class="country-region-visual img-frame">
      <img src="${regionMap.image}" alt="${regionMap.alt}" class="img-perfect country-region-map" loading="lazy">
      <p class="country-region-caption">${regionMap.caption}</p>
    </div>` : '';

  info.innerHTML = `
    <h4>${c.flag} ${c.name}</h4>
    ${regionMapHtml}
    <p style="margin-bottom:1rem;color:var(--text-light)">${c.note}</p>
    <div class="info-grid country-detail-grid">
      <div class="info-item"><div class="label">Rebfläche (Lehrbuch)</div><div class="value">${c.ha.toLocaleString('de-DE')} ha</div></div>
      <div class="info-item"><div class="label">Ernte (Lehrbuch)</div><div class="value">${c.hl.toLocaleString('de-DE')} Mio. hl</div></div>
      <div class="info-item"><div class="label">Ertrag (hl/ha)</div><div class="value">${yieldVal ? yieldVal.toFixed(1).replace('.', ',') : '–'}</div></div>
      ${c.worldRankProduction ? `<div class="info-item"><div class="label">Rang Produktion</div><div class="value">#${c.worldRankProduction} weltweit</div></div>` : ''}
      ${c.worldProdPercent ? `<div class="info-item"><div class="label">Weltanteil</div><div class="value">${c.worldProdPercent}%</div></div>` : ''}
      <div class="info-item"><div class="label">Weiß / Rot</div><div class="value">${fmtWeissRot(c)}</div></div>
      ${c.exportHl != null ? `<div class="info-item"><div class="label">Export</div><div class="value">${c.exportHl.toLocaleString('de-DE')} Mio. hl${exportShare ? ` (${exportShare}%)` : ''}</div></div>` : ''}
      ${c.exportValueEuro != null ? `<div class="info-item"><div class="label">Exportwert</div><div class="value">${fmtEuroBillions(c.exportValueEuro, c.exportYear)}</div></div>` : ''}
      ${c.marketValueEuro != null ? `<div class="info-item"><div class="label">Weinmarkt Umsatz</div><div class="value">${fmtEuroBillions(c.marketValueEuro, c.marketValueYear)}</div></div>` : ''}
      ${c.consumptionHl != null ? `<div class="info-item"><div class="label">Konsum (ca.)</div><div class="value">${c.consumptionHl.toLocaleString('de-DE')} Mio. hl</div></div>` : ''}
    </div>
    ${oivNote ? `<p class="oiv-note">📊 <strong>OIV aktuell:</strong> ${oivNote}</p>` : ''}
    <p style="margin-top:1rem"><strong>Regionen:</strong> ${c.regionen || '–'}</p>
    <p><strong>Hauptrebsorten:</strong> ${c.hauptsorten || c.sorten || '–'}</p>
    ${c.produzenten ? `<p><strong>Bekannte Weine / Produzenten:</strong> ${c.produzenten}</p>` : ''}
    ${c.besonderheit ? `<p style="margin-top:0.5rem;color:var(--burgundy);font-weight:600">⭐ ${c.besonderheit}</p>` : ''}
    ${c.terroir ? `<p style="margin-top:0.5rem;font-style:italic;color:var(--gold)">${c.terroir}</p>` : ''}
    <p style="margin-top:0.75rem;font-size:0.85rem;color:var(--text-light)">Quellen: ${(c.sources || ['Lehrbuch Kap. 6']).join(', ')}</p>
  `;

  const regionImg = info.querySelector('.country-region-map');
  if (regionImg) bindCountryRegionImageFallback(regionImg, key);
}

function bindCountryRegionImageFallback(img, countryKey) {
  const country = COUNTRIES[countryKey];
  if (!country) return;
  img.addEventListener('error', () => {
    const visual = img.closest('.country-region-visual');
    if (!visual) return;
    visual.innerHTML = `<p class="country-region-fallback">${country.flag} Weinregionen-Karte nicht verfügbar – siehe Regionenliste unten.</p>`;
  }, { once: true });
}

function renderCountryTableBody(tbodyId, keys) {
  const tbody = document.getElementById(tbodyId);
  if (!tbody) return;

  tbody.innerHTML = keys.map(key => {
    const c = COUNTRIES[key];
    if (!c) return '';
    const yieldVal = countryYieldHlPerHa(c);
    return `
      <tr data-country="${key}" style="cursor:pointer" class="country-row">
        <td class="highlight">${c.flag} ${c.name}</td>
        <td data-value="${c.ha}">${c.ha.toLocaleString('de-DE')}</td>
        <td data-value="${c.hl}">${c.hl.toLocaleString('de-DE')}</td>
        <td data-value="${yieldVal || 0}">${yieldVal ? yieldVal.toFixed(0) : '–'}</td>
        <td data-value="${c.exportHl || 0}">${fmtExportCell(c)}</td>
        <td>${fmtWeissRot(c)}</td>
        <td>${c.besonderheit || c.note || '–'}</td>
      </tr>`;
  }).join('');
}

function renderCountryEconomyTable() {
  const tbody = document.getElementById('country-economy-body');
  if (!tbody) return;

  const keys = [...COUNTRY_ORDER_EUROPE, ...COUNTRY_ORDER_WORLD]
    .filter(k => COUNTRIES[k]?.exportValueEuro != null || COUNTRIES[k]?.marketValueEuro != null);

  tbody.innerHTML = keys.map(key => {
    const c = COUNTRIES[key];
    const yieldVal = countryYieldHlPerHa(c);
    const exportPct = c.exportHl && c.hl ? Math.round((c.exportHl / c.hl) * 100) : null;
    return `
      <tr data-country="${key}" style="cursor:pointer">
        <td class="highlight">${c.flag} ${c.name}</td>
        <td data-value="${yieldVal || 0}">${yieldVal ? yieldVal.toFixed(1).replace('.', ',') : '–'}</td>
        <td data-value="${c.exportHl || 0}">${c.exportHl != null ? c.exportHl.toLocaleString('de-DE') : '–'}</td>
        <td data-value="${exportPct || 0}">${exportPct != null ? `${exportPct}%` : '–'}</td>
        <td data-value="${c.exportValueEuro || 0}">${c.exportValueEuro != null ? fmtEuroBillions(c.exportValueEuro, c.exportYear) : '–'}</td>
        <td data-value="${c.marketValueEuro || c.consumptionHl || 0}">${c.marketValueEuro != null ? fmtEuroBillions(c.marketValueEuro, c.marketValueYear) : (c.consumptionHl ? `${c.consumptionHl} Mio. hl Konsum` : '–')}</td>
      </tr>`;
  }).join('');
}

function renderCountryInsight() {
  const box = document.getElementById('country-insight');
  if (!box) return;

  const spain = COUNTRIES.spanien;
  const france = COUNTRIES.frankreich;
  const spYield = countryYieldHlPerHa(spain);
  const frYield = countryYieldHlPerHa(france);

  box.innerHTML = `
    <h3>💡 Vergleich: Ertrag pro Hektar</h3>
    <p><strong>Spanien</strong> hat mit ${spain.ha.toLocaleString('de-DE')} ha die größte Rebfläche, erntet aber nur <strong>${spain.hl} Mio. hl</strong> (Ertrag: ~${spYield.toFixed(0)} hl/ha, Lehrbuch).</p>
    <p><strong>Frankreich</strong> nutzt ${france.ha.toLocaleString('de-DE')} ha und erntet <strong>${france.hl} Mio. hl</strong> (Ertrag: ~${frYield.toFixed(0)} hl/ha) – deutlich produktiver pro Hektar.</p>
    <p style="margin-top:0.75rem;color:var(--text-light)">Formel: Ertrag = Ernte (hl) ÷ Rebfläche (ha). OIV 2024: Italien ist Produktionsführer (44,1 Mio. hl), Frankreich Exportwertführer (11,7 Mrd. €).</p>
  `;
}

function renderCountryMapButtons() {
  const europeGrid = document.getElementById('country-buttons-europe');
  const worldGrid = document.getElementById('country-buttons-world');
  if (europeGrid) {
    europeGrid.innerHTML = COUNTRY_ORDER_EUROPE.map(key => {
      const c = COUNTRIES[key];
      return `<button type="button" class="btn btn-secondary country-select-btn" data-country="${key}">${c.flag} ${c.name}</button>`;
    }).join('');
  }
  if (worldGrid) {
    worldGrid.innerHTML = COUNTRY_ORDER_WORLD.map(key => {
      const c = COUNTRIES[key];
      return `<button type="button" class="btn btn-secondary country-select-btn" data-country="${key}">${c.flag} ${c.name}</button>`;
    }).join('');
  }
}

function selectCountry(key) {
  const c = COUNTRIES[key];
  if (!c) return;
  document.querySelectorAll('[data-country]').forEach(e => e.classList.remove('active'));
  document.querySelectorAll(`[data-country="${key}"]`).forEach(e => e.classList.add('active'));
  document.querySelectorAll('#country-table tbody tr, #country-table-world tbody tr, #country-economy-table tbody tr').forEach(row => {
    row.classList.toggle('active', row.dataset.country === key);
  });
  renderCountryDetail(key);
}

function initCountryMap() {
  const info = document.getElementById('country-info');
  if (!info) return;

  renderCountryTableBody('country-table-body', COUNTRY_ORDER_EUROPE);
  renderCountryTableBody('country-table-world-body', COUNTRY_ORDER_WORLD);
  renderCountryEconomyTable();
  renderCountryInsight();
  renderCountryMapButtons();

  document.getElementById('tab-laender')?.addEventListener('click', e => {
    const el = e.target.closest('[data-country]');
    if (!el || el.closest('#producer-table') || el.classList.contains('bottle-card')) return;
    if (!COUNTRIES[el.dataset.country]) return;
    selectCountry(el.dataset.country);
  });

  selectCountry('spanien');
}

function renderBottlesGrid() {
  const grid = document.getElementById('bottles-grid');
  if (!grid) return;

  grid.innerHTML = BOTTLE_COUNTRY_ORDER.map(key => {
    const country = COUNTRIES[key];
    const photo = WINE_PHOTOS[key];
    if (!country || !photo) return '';

    return `
      <div class="bottle-card" data-country="${key}">
        <div class="bottle-photo-wrap">
          <img src="${photo.local}?v=${WINE_IMAGE_VERSION}" alt="${photo.alt}" class="bottle-product-img img-perfect" loading="lazy" width="120" height="200">
          <div class="bottle-fallback" hidden aria-hidden="true">
            <span class="bottle-fallback-flag">${country.flag}</span>
            <span class="bottle-fallback-label">${photo.label}</span>
          </div>
        </div>
        <span>${country.name} – ${photo.label}</span>
        <small>${photo.brand}</small>
      </div>`;
  }).join('');
}

function bindBottleImageFallback(img, photo, countryKey) {
  const card = img.closest('.bottle-card');
  const fallback = card?.querySelector('.bottle-fallback');
  const country = COUNTRIES[countryKey];

  img.addEventListener('error', () => {
    img.hidden = true;
    img.classList.add('img-failed');
    if (fallback && country) {
      fallback.hidden = false;
      fallback.setAttribute('aria-hidden', 'false');
    }
  });
}

function initBottles() {
  renderBottlesGrid();

  document.querySelectorAll('.bottle-card').forEach(card => {
    const key = card.dataset.country;
    const photo = WINE_PHOTOS[key];
    const img = card.querySelector('.bottle-product-img');
    if (photo && img) bindBottleImageFallback(img, photo, key);

    card.addEventListener('click', () => {
      document.querySelectorAll('.bottle-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      selectCountry(key);
    });
  });
}

function showRegionInfo(key) {
  const info = document.getElementById('region-info');
  const r = REGIONS[key];
  if (!info || !r) return;

  highlightDeMapRegion(key);

  info.innerHTML = `
    <h4>${r.name}</h4>
    <div class="region-stats" style="margin:1rem 0">
      <div class="stat-box"><div class="num">${r.ha.toLocaleString('de-DE')}</div><div class="lbl">Hektar</div></div>
      <div class="stat-box"><div class="num">${r.focus}</div><div class="lbl">Schwerpunkt</div></div>
    </div>
    <p>${r.desc}</p>
    <p style="margin-top:0.75rem">${r.details}</p>
    <p style="margin-top:0.75rem"><strong>Sorten:</strong> ${r.sorten}</p>
    <p><strong>Weingüter:</strong> ${r.weingüter}</p>
    <p style="margin-top:0.5rem;color:var(--burgundy);font-weight:600">⭐ ${r.besonderheit}</p>
  `;
}

function openRegionAccordion(key) {
  const item = document.getElementById(`region-${key}`);
  if (!item) return;

  document.querySelectorAll('#tab-gebiete .region-accordion-item').forEach(i => i.classList.remove('open'));
  item.classList.add('open');
  initRegionMiniMap(key);
  refreshRegionMiniMap(key);
  item.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function selectRegion(key) {
  if (!REGIONS[key]) return;
  showRegionInfo(key);
  openRegionAccordion(key);
}

function renderGrapeCard(grape, type) {
  const typeLabel = type === 'white' ? 'Weiß' : 'Rot';
  const desc = `${grape.color.charAt(0).toUpperCase() + grape.color.slice(1)}, ${grape.taste}. Aroma: ${grape.aroma}.`;
  const key = grape.key || grape.photoKey;
  return `
    <div class="grape-card ${type}" data-type="${type}" data-grape-key="${key}" tabindex="0" role="button" aria-label="${grape.name} – Details anzeigen">
      <div class="img-frame grape-img-wrap">
        <img class="grape-img img-perfect" src="${grape.img}" alt="${grape.imgAlt || grape.name}" loading="lazy" width="400" height="300">
      </div>
      <div class="grape-info">
        <span class="grape-type ${type}">${typeLabel}</span>
        <h4>${grape.name}</h4>
        <p>${desc}</p>
        <span class="grape-click-hint">Mehr erfahren →</span>
      </div>
    </div>`;
}

function initGrapes() {
  const whiteGrid = document.getElementById('grape-grid-white');
  const redGrid = document.getElementById('grape-grid-red');
  if (!whiteGrid || !redGrid) return;

  whiteGrid.innerHTML = GRAPES_WHITE.map(g => renderGrapeCard(g, 'white')).join('');
  redGrid.innerHTML = GRAPES_RED.map(g => renderGrapeCard(g, 'red')).join('');

  document.querySelectorAll('.grape-img').forEach(img => {
    const card = img.closest('.grape-card');
    const type = card?.dataset.type;
    const index = type === 'white'
      ? [...document.querySelectorAll('#grape-grid-white .grape-card')].indexOf(card)
      : [...document.querySelectorAll('#grape-grid-red .grape-card')].indexOf(card);
    const grapes = type === 'red' ? GRAPES_RED : GRAPES_WHITE;
    const grape = grapes[index];
    const fallback = grape?.imgFallback || (type === 'red' ? grapeSvgDataUri('red', 0) : FALLBACK_GRAPE_IMG);
    bindImageFallback(img, grape?.imgCdn, fallback);
  });

  document.querySelectorAll('.grape-card[data-grape-key]').forEach(card => {
    const open = () => openGrapeDetail(card.dataset.grapeKey);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        open();
      }
    });
  });
}

function getGrapeByKey(key) {
  return GRAPES[key] || null;
}

function renderGrapeDetailContent(grape) {
  const typeLabel = grape.type === 'white' ? 'Weißwein' : 'Rotwein';
  const synonyms = grape.synonyms?.length
    ? `<p class="grape-detail-synonyms">Auch: ${grape.synonyms.join(', ')}</p>`
    : '';
  const aromaTags = grape.hauptaromen.map(a => `<span class="grape-aroma-tag">${a}</span>`).join('');
  const regions = grape.anbaugebiete.join(', ');

  const galleryCaptions = {
    cluster: `Traube – reife ${grape.name}-Beeren`,
    leaf: `Blatt (faktisch: ${grape.name})`,
    vine: `Rebstock – ${grape.name} am Spalier`
  };
  const gallery = ['cluster', 'leaf', 'vine'].map(kind => {
    const labels = { cluster: 'Traube', leaf: 'Blatt', vine: 'Rebstock' };
    const src = grape.images?.[kind];
    if (!src) return '';
    const caption = galleryCaptions[kind] || labels[kind];
    return `<figure><div class="grape-gallery-item"><img src="${src}" alt="${grape.name} – ${labels[kind]}" loading="lazy"></div><figcaption>${caption}</figcaption></figure>`;
  }).join('');

  const sources = GRAPE_IMAGE_SOURCES[grape.key] || {};
  const attribution = [sources.leaf, sources.vine].filter(Boolean).join(' · ');
  const attributionHtml = attribution
    ? `<p class="grape-image-attribution">Bildquellen (Blatt &amp; Rebstock): ${attribution}</p>`
    : '';

  const mythSection = (grape.mythos || grape.realitaet || grape.funFact) ? `
    <div class="grape-myth-box myth"><h5>❌ Mythos</h5><p>${grape.mythos || '–'}</p></div>
    <div class="grape-myth-box reality"><h5>✅ Realität</h5><p>${grape.realitaet || '–'}</p></div>
    ${grape.funFact ? `<div class="grape-myth-box fun"><h5>✨ Fun Fact</h5><p>${grape.funFact}</p></div>` : ''}
  ` : '<p>Keine Mythen-Informationen verfügbar.</p>';

  return `
    <header class="grape-detail-header">
      <span class="grape-type ${grape.type}">${typeLabel}</span>
      <h2 id="grape-modal-title">${grape.name}</h2>
      ${synonyms}
      ${grape.flaeche ? `<span class="grape-percent">Rebfläche DE: ${grape.flaeche}</span>` : ''}
    </header>
    <div class="grape-detail-body">
      <div class="grape-detail-gallery">${gallery}</div>
      <div class="grape-detail-tabs" role="tablist">
        <button type="button" class="grape-tab-btn active" data-grape-tab="ueberblick" role="tab">Überblick</button>
        <button type="button" class="grape-tab-btn" data-grape-tab="botanik" role="tab">Botanik</button>
        <button type="button" class="grape-tab-btn" data-grape-tab="aromen" role="tab">Aromen</button>
        <button type="button" class="grape-tab-btn" data-grape-tab="gastronomie" role="tab">Gastronomie</button>
        <button type="button" class="grape-tab-btn" data-grape-tab="mythen" role="tab">Mythen</button>
      </div>
      <div class="grape-tab-panel active" data-grape-panel="ueberblick" role="tabpanel">
        <h4>Charakteristik</h4>
        <p>${grape.charakteristik}</p>
        <div class="grape-detail-grid" style="margin-top:1rem">
          <div class="grape-detail-item"><div class="label">Anbaugebiete</div><div class="value">${regions}</div></div>
          <div class="grape-detail-item"><div class="label">Rebfläche</div><div class="value">${grape.flaeche || '–'}</div></div>
        </div>
      </div>
      <div class="grape-tab-panel" data-grape-panel="botanik" role="tabpanel">
        <h4>Botanische Einordnung</h4>
        <div class="grape-detail-grid">
          <div class="grape-detail-item"><div class="label">Familie</div><div class="value">${grape.botanik.familie}</div></div>
          <div class="grape-detail-item"><div class="label">Art</div><div class="value">${grape.botanik.art}</div></div>
          <div class="grape-detail-item"><div class="label">Blattform</div><div class="value">${grape.botanik.blattform}</div></div>
          <div class="grape-detail-item"><div class="label">Reife</div><div class="value">${grape.botanik.reife}</div></div>
        </div>
      </div>
      <div class="grape-tab-panel" data-grape-panel="aromen" role="tabpanel">
        <h4>Hauptaromen</h4>
        <div class="grape-aroma-tags">${aromaTags}</div>
      </div>
      <div class="grape-tab-panel" data-grape-panel="gastronomie" role="tabpanel">
        <h4>Gastronomische Einordnung</h4>
        <div class="grape-detail-grid">
          <div class="grape-detail-item"><div class="label">Weinstil</div><div class="value">${grape.gastronomie.stil}</div></div>
          <div class="grape-detail-item"><div class="label">Passt zu</div><div class="value">${grape.gastronomie.passtZu}</div></div>
          <div class="grape-detail-item"><div class="label">Serviertemperatur</div><div class="value">${grape.gastronomie.serviertemp}</div></div>
        </div>
      </div>
      <div class="grape-tab-panel" data-grape-panel="mythen" role="tabpanel">
        <h4>Mythos vs. Realität</h4>
        ${mythSection}
      </div>
      ${attributionHtml}
    </div>`;
}

function bindGrapeModalTabs(container) {
  container.querySelectorAll('.grape-tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.grapeTab;
      container.querySelectorAll('.grape-tab-btn').forEach(b => b.classList.toggle('active', b === btn));
      container.querySelectorAll('.grape-tab-panel').forEach(p => {
        p.classList.toggle('active', p.dataset.grapePanel === tab);
      });
    });
  });
}

function bindGrapeModalImages(container, grape) {
  container.querySelectorAll('.grape-detail-gallery img').forEach((img, i) => {
    const kinds = ['cluster', 'leaf', 'vine'];
    const kind = kinds[i];
    const fallback = grape.images?.cluster || grape.imgFallback || FALLBACK_GRAPE_IMG;
    bindImageFallback(img, '', fallback);
    img.alt = img.alt || `${grape.name} – ${kind}`;
  });
}

function openGrapeDetail(key) {
  const grape = getGrapeByKey(key);
  const modal = document.getElementById('grape-modal');
  const content = document.getElementById('grape-modal-content');
  if (!grape || !modal || !content) return;

  content.innerHTML = renderGrapeDetailContent(grape);
  bindGrapeModalTabs(content);
  bindGrapeModalImages(content, grape);

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('grape-modal-open');
  modal.querySelector('.grape-modal-close')?.focus();
}

function closeGrapeDetail() {
  const modal = document.getElementById('grape-modal');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('grape-modal-open');
}

function initGrapeModal() {
  const modal = document.getElementById('grape-modal');
  if (!modal) return;

  modal.querySelectorAll('[data-close-grape]').forEach(el => {
    el.addEventListener('click', closeGrapeDetail);
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeGrapeDetail();
    }
  });
}

function initRegionImages() {
  Object.entries(REGIONS).forEach(([key, r]) => {
    const item = document.getElementById(`region-${key}`);
    const content = item?.querySelector('.accordion-content');
    if (!content) return;

    if (item) item.dataset.region = key;

    let landscapeWrap = content.querySelector('.region-img-wrap:not(.region-map-wrap)');
    if (!landscapeWrap) {
      landscapeWrap = document.createElement('div');
      landscapeWrap.className = 'region-img-wrap';
      const img = document.createElement('img');
      img.className = 'region-img region-landscape-img img-perfect';
      img.loading = 'lazy';
      img.width = 600;
      img.height = 280;
      landscapeWrap.appendChild(img);
      content.insertBefore(landscapeWrap, content.firstChild);
    }

    const landscapeImg = landscapeWrap.querySelector('.region-img');
    landscapeImg.className = 'region-img region-landscape-img img-perfect';
    landscapeImg.src = r.landscapeImg || r.mapImg || regionMapSvgDataUri(key);
    landscapeImg.alt = r.imgAlt;
    bindImageFallback(landscapeImg, r.landscapeCdn, r.mapImg, r.imgFallback || FALLBACK_REGION_MAP_IMG);

    let mapWrap = content.querySelector('.region-map-wrap');
    if (!mapWrap) {
      mapWrap = document.createElement('div');
      mapWrap.className = 'region-map-wrap';
      const miniMap = document.createElement('div');
      miniMap.className = 'region-mini-map';
      miniMap.id = `mini-map-${key}`;
      miniMap.dataset.region = key;
      miniMap.setAttribute('role', 'img');
      miniMap.setAttribute('aria-label', r.mapAlt);
      mapWrap.appendChild(miniMap);
      landscapeWrap.insertAdjacentElement('afterend', mapWrap);
    } else {
      const legacyImg = mapWrap.querySelector('.region-map-img');
      if (legacyImg) legacyImg.remove();
      if (!mapWrap.querySelector('.region-mini-map')) {
        const miniMap = document.createElement('div');
        miniMap.className = 'region-mini-map';
        miniMap.id = `mini-map-${key}`;
        miniMap.dataset.region = key;
        miniMap.setAttribute('role', 'img');
        miniMap.setAttribute('aria-label', r.mapAlt);
        mapWrap.appendChild(miniMap);
      }
    }
  });
}

function initGrapeFilter() {
  const btns = document.querySelectorAll('#tab-sorten .filter-btn');
  const cards = document.querySelectorAll('.grape-card');
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        card.style.display = (filter === 'all' || card.dataset.type === filter) ? '' : 'none';
      });
    });
  });
}

function initHero() {
  const hero = document.querySelector('.hero');
  const photo = GENERAL_PHOTOS.hero;
  if (!hero || !photo) return;

  function applyHeroBg(url) {
    hero.classList.add('hero--photo');
    hero.style.setProperty('--hero-bg', `url('${url}')`);
  }

  const probe = new Image();
  probe.onload = () => applyHeroBg(assetSrc(photo));
  probe.onerror = () => {
    if (photo.cdn) {
      const cdnProbe = new Image();
      cdnProbe.onload = () => applyHeroBg(photo.cdn);
      cdnProbe.src = photo.cdn;
    }
  };
  probe.src = assetSrc(photo);
}

function wirePhoto(img, photo) {
  if (!img || !photo) return;
  img.src = assetSrc(photo);
  img.alt = photo.alt || '';
  bindImageFallback(img, photo.cdn);
}

function initSectionPhotos() {
  wirePhoto(document.getElementById('anatomy-hero-img'), INHALT_PHOTOS.crossSection);
  wirePhoto(document.getElementById('anatomy-diagram-img'), INHALT_PHOTOS.diagram);
  wirePhoto(document.getElementById('prod-maische-img'), INHALT_PHOTOS.maische);
  wirePhoto(document.getElementById('prod-barrique-img'), INHALT_PHOTOS.barrique);
  wirePhoto(document.getElementById('wine-colors-photo'), GENERAL_PHOTOS.wineColors);
  wirePhoto(document.getElementById('refractometer-photo'), GENERAL_PHOTOS.refractometer);
  wirePhoto(document.getElementById('oechsle-label-photo'), GENERAL_PHOTOS.oechsleLabel);
}

function initAnatomy() {
  const panel = document.getElementById('anatomy-detail');
  if (!panel) return;

  function show(key) {
    const a = ANATOMY[key];
    if (!a) return;
    document.querySelectorAll('.anatomy-zone, .component-list li, .chem-row, .production-card').forEach(e => e.classList.remove('active'));
    document.querySelectorAll(`[data-part="${key}"]`).forEach(e => e.classList.add('active'));
    panel.innerHTML = `<h4>${a.title}</h4><p>${a.text}</p>`;
  }

  document.querySelectorAll('#tab-inhalt [data-part]').forEach(el => {
    el.addEventListener('click', () => show(el.dataset.part));
  });
  show('schale');
}

function updateOechsleDisplay(oe) {
  const v = parseInt(oe, 10);
  const pct = oeToHydrometerPct(v);
  const qual = getOechsleClass(v);

  const valueEl = document.getElementById('oechsle-value');
  const badgeEl = document.getElementById('oechsle-class-badge');
  const alcoholEl = document.getElementById('oechsle-alcohol');
  const sugarEl = document.getElementById('oechsle-sugar');
  const zoneEl = document.getElementById('oechsle-zone');
  const tasteEl = document.getElementById('oechsle-taste');
  const exampleEl = document.getElementById('oechsle-example');
  const liquidEl = document.getElementById('hydrometer-liquid');
  const bulbEl = document.getElementById('hydrometer-bulb');

  if (valueEl) valueEl.textContent = v + ' °Oe';
  if (badgeEl) badgeEl.textContent = qual;
  if (alcoholEl) alcoholEl.textContent = '~' + calculateAlcohol(v);
  if (sugarEl) sugarEl.textContent = calculateSugar(v);
  if (zoneEl) zoneEl.textContent = getOechsleZoneText(v);
  if (tasteEl) tasteEl.innerHTML = 'Geschmack: kann trocken <strong>ODER</strong> süß sein – der Winzer entscheidet!';
  if (exampleEl) exampleEl.textContent = getOechsleExample(v);

  if (liquidEl) liquidEl.style.height = pct + '%';
  if (bulbEl) bulbEl.style.bottom = `calc(${pct}% - 12px)`;

  const activeClassId = OECHSLE_CLASS_TO_ID[getOechsleClass(v)] || 'wein';
  document.querySelectorAll('.oechsle-class-badge-item').forEach(b => {
    b.classList.toggle('active', b.dataset.id === activeClassId);
  });

  let bestCard = null;
  let bestDist = Infinity;
  document.querySelectorAll('.praedikat-card').forEach(card => {
    const min = parseInt(card.dataset.min, 10);
    const set = parseInt(card.dataset.set, 10);
    if (v >= min) {
      const dist = Math.abs(v - set);
      if (dist < bestDist) { bestDist = dist; bestCard = card; }
    }
  });
  document.querySelectorAll('.praedikat-card').forEach(card => {
    card.classList.toggle('active', card === bestCard);
  });

  document.querySelectorAll('.oechsle-case-row').forEach(row => {
    row.classList.toggle('active', parseInt(row.dataset.oe, 10) === v);
  });
}

function setOechsleValue(oe) {
  const slider = document.getElementById('oechsle-slider');
  if (!slider) return;
  slider.value = oe;
  updateOechsleDisplay(oe);
}

function initOechsleSlider() {
  const slider = document.getElementById('oechsle-slider');
  const badgesContainer = document.getElementById('oechsle-class-badges');
  if (!slider) return;

  if (badgesContainer) {
    badgesContainer.innerHTML = OECHSLE_LEVELS.map(l =>
      `<span class="oechsle-class-badge-item" data-id="${l.id}" data-min="${l.min}">${l.name}</span>`
    ).join('');
  }

  slider.addEventListener('input', () => updateOechsleDisplay(slider.value));

  document.querySelectorAll('.praedikat-card').forEach(card => {
    card.addEventListener('click', () => {
      const val = parseInt(card.dataset.set || card.dataset.min, 10);
      setOechsleValue(val);
      document.getElementById('oechsle-simulator')?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  document.querySelectorAll('.oechsle-case-btn, .oechsle-case-row').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.oechsle-case-btn') || el.classList.contains('oechsle-case-row')) {
        const row = el.closest('.oechsle-case-row') || el;
        const val = parseInt(row.dataset.oe, 10);
        if (!isNaN(val)) setOechsleValue(val);
      }
    });
  });

  updateOechsleDisplay(slider.value);
}

function initSortableTable() {
  document.querySelectorAll('.data-table[data-sortable]').forEach(table => {
    const headers = table.querySelectorAll('th[data-sort]');
    let asc = true;
    let col = 1;

    headers.forEach(th => {
      th.addEventListener('click', () => {
        const idx = parseInt(th.dataset.sort, 10);
        if (col === idx) asc = !asc;
        else { col = idx; asc = true; }
        const tbody = table.querySelector('tbody');
        const rows = [...tbody.querySelectorAll('tr')];
        rows.sort((a, b) => {
          const av = a.cells[idx]?.dataset.value || a.cells[idx]?.textContent || '';
          const bv = b.cells[idx]?.dataset.value || b.cells[idx]?.textContent || '';
          const an = parseFloat(String(av).replace(/\./g, '').replace(',', '.'));
          const bn = parseFloat(String(bv).replace(/\./g, '').replace(',', '.'));
          if (!isNaN(an) && !isNaN(bn)) return asc ? an - bn : bn - an;
          return asc ? String(av).localeCompare(String(bv), 'de') : String(bv).localeCompare(String(av), 'de');
        });
        rows.forEach(r => tbody.appendChild(r));
      });
    });
  });
}

function initProducers() {
  const tableBody = document.getElementById('producer-table-body');
  const cardGrid = document.getElementById('producer-cards');
  const chartEl = document.getElementById('chart-producers');
  const detailPanel = document.getElementById('producer-detail');
  if (!tableBody || !cardGrid) return;

  let activeFilter = 'all';
  let activeProducer = null;

  function renderProducerDetail(p) {
    if (!detailPanel || !p) return;
    detailPanel.innerHTML = `
      <h4>${p.flag} ${p.name}</h4>
      <p style="margin-bottom:1rem;color:var(--text-light)">${p.note}</p>
      <div class="info-grid">
        <div class="info-item"><div class="label">Rang</div><div class="value">#${p.rank}</div></div>
        <div class="info-item"><div class="label">Hauptsitz</div><div class="value">${p.hq}</div></div>
        <div class="info-item"><div class="label">Volumen</div><div class="value">${p.volume}</div></div>
        <div class="info-item"><div class="label">Typ</div><div class="value">${p.type}</div></div>
      </div>
      <p style="margin-top:1rem"><strong>Marken:</strong> ${p.brands}</p>
      <p style="margin-top:0.5rem;font-size:0.85rem;color:var(--text-light)">Quelle: Vinetur (2025), Unternehmensberichte</p>
    `;
  }

  function getFiltered() {
    return activeFilter === 'all'
      ? [...PRODUCERS]
      : PRODUCERS.filter(p => p.countryKey === activeFilter);
  }

  function renderTable(list) {
    tableBody.innerHTML = list.map(p => `
      <tr data-producer="${p.rank}" style="cursor:pointer" class="${activeProducer === p.rank ? 'active-row' : ''}">
        <td data-value="${p.rank}">${p.rank}</td>
        <td class="highlight">${p.flag} ${p.name}</td>
        <td>${p.flag} ${p.country}</td>
        <td>${p.hq}</td>
        <td data-value="${p.volumeNum}">${p.volume}</td>
        <td>${p.brands}</td>
      </tr>
    `).join('');

    tableBody.querySelectorAll('tr[data-producer]').forEach(row => {
      row.addEventListener('click', () => {
        const p = PRODUCERS.find(x => x.rank === parseInt(row.dataset.producer));
        if (!p) return;
        activeProducer = p.rank;
        renderProducerDetail(p);
        document.querySelectorAll('.producer-card').forEach(c => {
          c.classList.toggle('active', parseInt(c.dataset.rank) === p.rank);
        });
        tableBody.querySelectorAll('tr').forEach(r => r.classList.remove('active-row'));
        row.classList.add('active-row');
      });
    });
  }

  function renderCards(list) {
    cardGrid.innerHTML = list.map(p => `
      <div class="card producer-card ${activeProducer === p.rank ? 'active' : ''}" data-rank="${p.rank}" tabindex="0" role="button">
        <div class="producer-rank">#${p.rank}</div>
        <div class="card-icon">${p.flag}</div>
        <h3>${p.name}</h3>
        <p class="producer-type">${p.type}</p>
        <p><strong>${p.volume}</strong></p>
        <p style="font-size:0.85rem;color:var(--text-light);margin-top:0.5rem">${p.hq}</p>
      </div>
    `).join('');

    cardGrid.querySelectorAll('.producer-card').forEach(card => {
      const show = () => {
        const p = PRODUCERS.find(x => x.rank === parseInt(card.dataset.rank));
        if (!p) return;
        activeProducer = p.rank;
        renderProducerDetail(p);
        cardGrid.querySelectorAll('.producer-card').forEach(c => c.classList.remove('active'));
        card.classList.add('active');
        tableBody.querySelectorAll('tr').forEach(r => {
          r.classList.toggle('active-row', parseInt(r.dataset.producer) === p.rank);
        });
      };
      card.addEventListener('click', show);
      card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(); } });
    });
  }

  function renderChart(list) {
    if (!chartEl) return;
    const chartList = [...list].filter(p => p.volumeNum > 0).sort((a, b) => b.volumeNum - a.volumeNum).slice(0, 8);
    const maxVol = Math.max(...chartList.map(p => p.volumeNum));
    chartEl.innerHTML = chartList.map(p => `
      <div class="bar-row">
        <div class="bar-label">${p.flag} ${p.name.split(' ')[0]}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${(p.volumeNum / maxVol * 100).toFixed(0)}%">${p.volumeNum}</div></div>
        <div class="bar-value">Mio.</div>
      </div>
    `).join('');
  }

  function renderAll() {
    const list = getFiltered();
    renderTable(list);
    renderCards(list);
    renderChart(list);
    if (list.length && !list.find(p => p.rank === activeProducer)) {
      activeProducer = list[0].rank;
    }
    const current = PRODUCERS.find(p => p.rank === activeProducer);
    if (current) renderProducerDetail(current);
  }

  document.querySelectorAll('.producer-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.producer-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.producerFilter;
      renderAll();
    });
  });

  const producerTable = document.getElementById('producer-table');
  if (producerTable) {
    const headers = producerTable.querySelectorAll('th[data-sort]');
    let asc = true;
    let col = 0;
    headers.forEach(th => {
      th.addEventListener('click', () => {
        const idx = parseInt(th.dataset.sort);
        if (col === idx) asc = !asc; else { col = idx; asc = true; }
        const list = getFiltered();
        list.sort((a, b) => {
          const keys = ['rank', 'name', 'country', 'hq', 'volumeNum', 'brands'];
          const key = keys[idx];
          const av = a[key];
          const bv = b[key];
          if (typeof av === 'number') return asc ? av - bv : bv - av;
          return asc ? String(av).localeCompare(String(bv), 'de') : String(bv).localeCompare(String(av), 'de');
        });
        renderTable(list);
        renderCards(list);
      });
    });
  }

  renderAll();
}

function renderBarChart(containerId, items, getValue, formatValue, barStyle) {
  const el = document.getElementById(containerId);
  if (!el || !items.length) return;
  const max = Math.max(...items.map(getValue));
  el.innerHTML = items.map(c => {
    const val = getValue(c);
    const width = max > 0 ? (val / max * 100).toFixed(0) : 0;
    return `
      <div class="bar-row">
        <div class="bar-label">${c.flag} ${c.name}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${width}%;${barStyle || ''}">${formatValue(c, val)}</div></div>
        <div class="bar-value">${formatValue(c, val, true)}</div>
      </div>`;
  }).join('');
}

function initCharts() {
  const europe = COUNTRY_ORDER_EUROPE.map(k => COUNTRIES[k]);
  const worldTop = [...Object.values(COUNTRIES)]
    .filter(c => c.worldRankProduction)
    .sort((a, b) => a.worldRankProduction - b.worldRankProduction)
    .slice(0, 10);

  renderBarChart('chart-ha', europe, c => c.ha, (c, v, full) =>
    full ? `${c.ha.toLocaleString('de-DE')} ha` : `${Math.round(v / 1000)}k`
  );

  renderBarChart('chart-hl', europe, c => c.hl, (c, v, full) =>
    full ? `${c.hl} Mio. hl` : String(c.hl)
  , 'background:linear-gradient(90deg,#C9A84C,#8B2942)');

  renderBarChart('chart-world-hl', worldTop, c => c.hl, (c, v, full) =>
    full ? `${c.hl} Mio. hl` : String(c.hl)
  , 'background:linear-gradient(90deg,#1E3A5F,#6B1D3A)');

  const exportItems = [...Object.values(COUNTRIES)]
    .filter(c => c.exportHl != null)
    .sort((a, b) => b.exportHl - a.exportHl)
    .slice(0, 10);

  renderBarChart('chart-export', exportItems, c => c.exportHl, (c, v, full) =>
    full ? `${c.exportHl} Mio. hl` : String(c.exportHl)
  , 'background:linear-gradient(90deg,#2D5A27,#4A7C43)');

  const valueItems = [...Object.values(COUNTRIES)]
    .filter(c => c.exportValueEuro != null)
    .sort((a, b) => b.exportValueEuro - a.exportValueEuro)
    .slice(0, 8);

  renderBarChart('chart-export-value', valueItems, c => c.exportValueEuro, (c, v, full) => {
    const label = v >= 1 ? `${v.toFixed(1).replace('.', ',')} Mrd.` : `${Math.round(v * 1000)} Mio.`;
    return full ? `${label} €` : label;
  }, 'background:linear-gradient(90deg,#C9A84C,#C4788A)');
}
