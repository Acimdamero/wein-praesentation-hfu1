# Deployment – Wein HFU1 Präsentation

## 🌐 Live-Link / Live URL

**https://acimdamero.github.io/wein-praesentation-hfu1/**

Öffentlich zugänglich – zum Lernen und Nachschlagen für alle.

---

## 🇮🇩 Bahasa Indonesia

### Apa yang di-deploy?

Situs statis (HTML, CSS, JavaScript) – presentasi interaktif tentang anggur untuk kelas HFU1.

### Keamanan

- Tidak ada database, login, atau formulir
- Tidak ada pengumpulan data pengguna
- HTTPS otomatis (GitHub Pages)
- Content Security Policy (CSP) di `index.html`
- Leaflet dari CDN dengan Subresource Integrity (SRI)
- Lihat `SECURITY.md` untuk detail lengkap

### Keterbatasan

- **Peta Jerman (tab DE-Gebiete)** membutuhkan koneksi internet (OpenStreetMap)
- **Font Google** membutuhkan internet saat pertama kali dimuat
- Gambar cadangan dari Wikimedia/Unsplash jika file lokal tidak ada

### Cara update konten nanti

1. Edit file di komputer lokal (`index.html`, `js/app.js`, `css/style.css`, gambar di `assets/`)
2. Commit dan push ke GitHub:
   ```bash
   cd /path/to/wein-praesentation-hfu1
   git add -A
   git commit -m "Update: deskripsi perubahan"
   git push
   ```
3. Tunggu 1–3 menit – GitHub Pages otomatis memperbarui situs

### GitHub Pages settings

- Repository: **public**
- Branch: **main**
- Folder: **/ (root)**
- File `.nojekyll` ada agar folder `_` tidak diabaikan Jekyll

---

## 🇩🇪 Deutsch

### Was wird gehostet?

Statische Website – interaktive Wein-Präsentation für HFU1 (Länder, Gebiete, Sorten, Inhaltsstoffe, Oechsle).

### Sicherheit

- Keine Datenbank, kein Login, keine Formulare
- Keine Nutzerdaten
- HTTPS standardmäßig
- CSP, SRI für Leaflet – Details in `SECURITY.md`

### Einschränkungen

- **DE-Karte** braucht Internet (OpenStreetMap-Kacheln)
- **Google Fonts** beim ersten Laden
- CDN-Bild-Fallbacks optional

### Inhalte später aktualisieren

1. Dateien lokal bearbeiten
2. `git add`, `git commit`, `git push`
3. Nach 1–3 Minuten ist die Live-Seite aktualisiert

---

## Manual setup (falls `gh` nicht funktioniert)

1. Auf [github.com/new](https://github.com/new) Repository `wein-praesentation-hfu1` erstellen (public)
2. Lokal:
   ```bash
   git remote add origin https://github.com/Acimdamero/wein-praesentation-hfu1.git
   git push -u origin main
   ```
3. GitHub → **Settings** → **Pages** → Source: branch **main**, folder **/** → Save
