# Checklist Hari H – Presentasi Wein HFU1

**Acim & Erzal · 40 menit · Buka 15 menit sebelum kelas**

---

## Yang dibawa

- [ ] Laptop + charger
- [ ] Kabel HDMI / USB-C ke proyektor (cek di ruangan)
- [ ] Mouse (opsional, untuk klik lebih presisi)
- [ ] Backup: flashdisk dengan folder proyek ATAU buka `index.html` offline

---

## Internet diperlukan untuk

| Fitur | Tanpa internet |
|-------|----------------|
| Google Fonts (Playfair, Source Sans) | Fallback font sistem – masih OK |
| Leaflet + OpenStreetMap (tab DE-Gebiete) | Pesan „Karte braucht Internet" – pakai accordion 13 region |
| Unsplash CDN fallback (jarang) | Gambar lokal di `assets/images/` sudah lengkap |

**Semua foto utama (anggur, botol, region) = lokal, tidak butuh internet.**

---

## Start server (disarankan)

```bash
cd /Users/acim.agwengmail.com/Projects/wein-praesentation-hfu1
python3 -m http.server 8765
```

Browser: **http://localhost:8765**

Alternatif tanpa server:
```bash
open /Users/acim.agwengmail.com/Projects/wein-praesentation-hfu1/index.html
```

---

## Urutan tab presentasi

1. **Start** (3 min) – Acim
2. **Länder** (7 min) – Erzal
3. **DE-Gebiete** (7 min) – Acim
4. **Sorten** (6 min) – Erzal
5. **Inhaltsstoffe** (7 min) – Acim
6. **Oechsle** (6 min) – Erzal
7. **Quellen** (4 min) – keduanya + tanya jawab

---

## Smoke test 2 menit (sebelum masuk kelas)

1. [ ] http://localhost:8765 terbuka, tab **Start** tampil
2. [ ] Tab **Länder** → klik **Spanien** → detail muncul kanan
3. [ ] Scroll **Flaschen** → 9 botol dengan nama merek terlihat
4. [ ] Tab **DE-Gebiete** → peta load (atau accordion jika offline)
5. [ ] Tab **Sorten** → klik **Riesling** → modal terbuka, tutup dengan ✕
6. [ ] Tab **Oechsle** → geser slider → label berubah
7. [ ] Fullscreen browser: **F11** (Win) atau klik hijau (Mac)

---

## Jika ada masalah

| Masalah | Solusi cepat |
|---------|----------------|
| Port 8765 sudah dipakai | `python3 -m http.server 8766` → buka :8766 |
| Peta kosong | Baca accordion region, tunjuk tabel ha |
| Modal tidak buka | Refresh halaman (Cmd+R) |
| Font aneh | Sambungkan WiFi untuk Google Fonts |
| Proyektor tidak connect | Zoom share screen dari laptop |

---

## Setelah presentasi

- [ ] Stop server: `Ctrl+C` di terminal
- [ ] Simpan pertanyaan kelas untuk Quellen-tab jika perlu

**Semoga sukses! 🍷**
