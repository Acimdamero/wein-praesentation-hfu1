# Security – Wein HFU1 Präsentation

Static educational website. No backend, no database, no user accounts, no form submissions.

## What we collect

**Nothing.** The site does not use analytics, cookies, or tracking. No personal data is stored or transmitted to our servers (there are no servers — only GitHub Pages hosting static files).

## Threat model

| Risk | Mitigation |
|------|------------|
| SQL injection | No database |
| Authentication bypass | No login system |
| CSRF on our side | No forms or state-changing requests |
| XSS from user input | No user-generated content; `innerHTML` only renders curated app data |
| `eval()` / dynamic code | Not used |
| Mixed content | `upgrade-insecure-requests` in CSP |
| CDN supply-chain | Leaflet loaded with Subresource Integrity (SRI) from unpkg.com |
| Clickjacking | `frame-ancestors 'none'` in CSP |

## External dependencies (trust model)

| Resource | Provider | Purpose |
|----------|----------|---------|
| Leaflet 1.9.4 | unpkg.com (SRI-verified) | Interactive DE wine region map |
| Google Fonts | fonts.googleapis.com / fonts.gstatic.com | Typography (no SRI — Google serves dynamic CSS per browser) |
| OpenStreetMap tiles | tile.openstreetmap.org | Map background (requires internet) |
| Image CDN fallbacks | Wikimedia Commons, Unsplash | Backup images if local files missing |

GitHub Pages serves the site over **HTTPS** by default.

## Reporting issues

Open a GitHub issue on the repository if you find a security concern.
