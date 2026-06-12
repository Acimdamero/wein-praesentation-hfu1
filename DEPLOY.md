# Deployment – Wein-Präsentation HFU1

## LIVE URL

**https://acimdamero.github.io/wein-praesentation-hfu1/**

## Status

| Item | Value |
|------|-------|
| Deployed | 12. Juni 2026 |
| Platform | GitHub Pages (legacy, branch `main`, root `/`) |
| Repository | https://github.com/Acimdamero/wein-praesentation-hfu1 |
| Public | Ja |
| HTTPS | Ja (erzwungen) |

## Verifizierung

```bash
curl -I https://acimdamero.github.io/wein-praesentation-hfu1/
# HTTP/2 200
```

## Deployment-Schritte (bereits ausgeführt)

1. `.gitignore` und `.nojekyll` angelegt
2. Git-Repository initialisiert (`main`)
3. Öffentliches Repo erstellt: `gh repo create wein-praesentation-hfu1 --public`
4. GitHub Pages aktiviert:
   ```bash
   gh api repos/Acimdamero/wein-praesentation-hfu1/pages -X POST \
     -f build_type=legacy \
     -f 'source[branch]=main' \
     -f 'source[path]=/'
   ```
5. Live-URL mit `curl -I` bestätigt (HTTP 200)

## Updates deployen

```bash
cd /Users/acim.agwengmail.com/Projects/wein-praesentation-hfu1
git add .
git commit -m "Update presentation"
git push origin main
```

GitHub Pages aktualisiert sich automatisch innerhalb von 1–3 Minuten.

## Hinweise

- **Internet nötig** für Leaflet-Karte (OpenStreetMap) und Google Fonts
- Alle 75 Bilder sind lokal in `assets/images/` und funktionieren offline
- Relative Pfade (`css/`, `js/`, `assets/`) – keine Anpassung für Pages nötig
