# StrukturKlar

Website von StrukturKlar: eine wachsende Wissens- und Projektplattform mit Projekten, Denkmodellen und Denkwerkstatt.

## Technik

- Vite, React 18, TypeScript, Tailwind CSS, React Router
- Mehrsprachige URLs: `/de/`, `/en/`, `/ru/`, `/uk/` (Hauptsprache Deutsch)
- Jede Seite wird beim Build als statisches HTML vorgerendert (`scripts/prerender.js`) und im Browser hydriert: Meta-Tags, Canonical, hreflang, Open Graph und JSON-LD stehen direkt im HTML.
- Der Build erzeugt außerdem `sitemap.xml`, `robots.txt` und `404.html`.
- Schrift Inter wird lokal ausgeliefert (keine Google Fonts).

## Befehle

```bash
npm install
npm run dev       # Entwicklungsserver
npm run build     # Build + Prerendering nach dist/
npm run preview   # gebaute Seite lokal ansehen
npm run deploy    # Build und Veröffentlichung auf GitHub Pages
```

## Konfiguration

| Variable | Zweck | Standard |
| --- | --- | --- |
| `BASE_PATH` | Pfad, unter dem die Seite liegt | `/` (Domain strukturklar.com, siehe `public/CNAME`) |
| `VITE_SITE_URL` | Öffentliche Adresse für Canonical, Sitemap, Open Graph | `https://strukturklar.com` |
| `VITE_WEB3FORMS_KEY` | Schlüssel für das Kontaktformular | leer = Formular öffnet das E-Mail-Programm |

Kontaktdaten, Social-Media-Links und veröffentlichte Sprachen: `src/config/site.ts`.

## Struktur

```
src/
  config/site.ts        Kontakt, Social Media, Sprachen
  content/              Projekte, Denkmodelle, Beiträge als JSON (siehe CONTENT.md)
  i18n/                 Seitentexte je Sprache
  pages/                Seiten
  components/home/      Abschnitte der Startseite
  components/ui/        Bausteine und Templates
  components/layout/    Navigation, Footer, Layout
  lib/                  URLs, SEO, Breadcrumbs
  entry-server.tsx      Rendering für das Prerendering
scripts/prerender.js    statische Seiten, Sitemap, robots.txt
```

## Inhalte und Deployment

- Inhalte bearbeiten: Verwaltung unter `/admin/` (Sveltia CMS, Anmeldung mit GitHub-Token) oder direkt die JSON-Dateien, siehe [CONTENT.md](CONTENT.md).
- Jeder Push auf `main` (auch Speichern im CMS) baut die Seite und veröffentlicht sie über `.github/workflows/deploy.yml` auf dem Branch `gh-pages`. `npm run deploy` geht weiterhin manuell.
