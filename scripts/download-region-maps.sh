#!/bin/bash
# Download HD wine region maps from Wikimedia Commons
set -e
DIR="$(cd "$(dirname "$0")/.." && pwd)/assets/images/countries"
UA="Mozilla/5.0 (Macintosh; WeinPraesentation/1.0)"
mkdir -p "$DIR"
cd "$DIR"

# Remove invalid prior downloads
rm -f frankreich-regions.jpg portugal-regions.png tuerkei-regions.png oesterreich-regions.jpg 2>/dev/null || true

download() {
  local out="$1" url="$2"
  echo "→ $out"
  curl -fsSL -A "$UA" --retry 3 --retry-delay 5 -o "$out" "$url"
  sleep 2
}

# France – German labels (Pitichinaccio series)
download frankreich-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/French_vineyards_de.svg/1280px-French_vineyards_de.svg.png"

# Spain – color-coded DO regions (de.wikipedia Weinbau in Spanien)
download spanien-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/5/52/Vinos_DO_de_Espa%C3%B1a.png"

# Italy – labeled wine regions
download italien-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/5/52/Italian_Wine_Regions.jpg"

# Germany – Weinbaugebiete DAC map (German)
download deutschland-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/1/14/Weinbaugebiete_okt_2019_nur_dac.jpg"

# Portugal – DOC regions map
download portugal-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/8/87/Vinos_DOC_de_Portugal.png"

# Greece – German labels
download griechenland-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/f/f8/Greece_wine_regions_de.png"

# Austria – DAC Weinbaugebiete (German)
download oesterreich-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/1/14/Weinbaugebiete_okt_2019_nur_dac.jpg"

# Turkey – labeled regions
download tuerkei-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/8/8d/Turkish_wine_regions_map.png"

# USA – Oregon AVAs (labeled; CA/Napa in caption)
download usa-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/8/8c/Oregon_AVAs.png"

# Chile – national wine regions highlighted
download chile-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Chile_map2_with_wine_regions_highlighted.JPG"

# Argentina – wine regions
download argentinien-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/d/da/Argentine_wine_regions.jpg"

# Australia – wine zones
download australien-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/e/e7/Australian_wine_zones2.png"

# South Africa – wine regions
download suedafrika-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/2/22/South_African_wine_regions.jpg"

# China – Weinanbaugebiete (de.wikipedia)
download china-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/China_grapevine.png"

# New Zealand – wine regions
download neuseeland-regions.jpg \
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/New_zealand_wine_map.svg/1280px-New_zealand_wine_map.svg.png"

echo "Done. Verifying..."
for f in *.jpg; do
  w=$(sips -g pixelWidth "$f" 2>/dev/null | awk '/pixelWidth/{print $2}')
  h=$(sips -g pixelHeight "$f" 2>/dev/null | awk '/pixelHeight/{print $2}')
  echo "  $f: ${w}x${h}"
done
