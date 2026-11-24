# Inhalte pflegen – Projekte, Denkmodelle, Beiträge

Jedes Projekt, jedes Denkmodell und jeder Beitrag der Denkwerkstatt ist **eine eigene Datei**. Die Projektübersicht, die Projektkarten auf der Startseite, die Detailseiten, die Verlinkungen und die `sitemap.xml` entstehen automatisch aus diesen Dateien. An anderen Seiten muss nichts geändert werden.

| Inhalt | Ordner | Muster (Entwurf) |
| --- | --- | --- |
| Projekte | `src/content/projects/` | `muster-projekt.de.json` |
| Denkmodelle | `src/content/models/` | `muster-denkmodell.de.json` |
| Denkwerkstatt | `src/content/articles/` | `muster-beitrag.de.json` |

Der Dateiname ist `<adresse>.<sprache>.json`, z. B. `prozessanalyse-risikominimierung.de.json`. Der erste Teil wird zur Adresse der Seite: `/de/projects/prozessanalyse-risikominimierung/`. Nur Kleinbuchstaben, Ziffern und Bindestriche verwenden, keine Umlaute.

## Entwurf und Veröffentlichung

- `"published": true` – der Eintrag erscheint auf der Website.
- `"published": false` oder Feld fehlt – **Entwurf**. Der Eintrag erscheint nirgends: nicht in Listen, nicht auf der Startseite, nicht als Seite und auch nicht im Programmcode der Website.
- Ein veröffentlichter Eintrag ohne Titel oder Kurzbeschreibung wird automatisch wie ein Entwurf behandelt (keine leeren Karten).
- `"internalNote"` – interne Notiz. Wird **nie** veröffentlicht.
- Verlinkt ein Eintrag auf ein Denkmodell oder Projekt, das noch Entwurf ist, wird die Verlinkung einfach nicht angezeigt. Vor jeder Veröffentlichung prüft die Website außerdem alle internen Links; ist einer defekt, wird nicht veröffentlicht.

Hinweis: Das Repository auf GitHub ist öffentlich. Entwürfe sind auf der Website unsichtbar, die Datei selbst kann auf GitHub aber eingesehen werden. Vertrauliches gehört deshalb nicht in diese Dateien, auch nicht als Entwurf oder interne Notiz.

## Felder eines Projekts

| Feld | Bedeutung |
| --- | --- |
| `published` | Veröffentlichungsstatus (siehe oben) |
| `featured` | `true` = Karte auch auf der Startseite zeigen |
| `order` | Reihenfolge (1 = zuerst) |
| `title` | Projekttitel |
| `summary` | Kurzbeschreibung für Karte und Suchmaschinen |
| `category` | Kategorie, z. B. „Prozesse & Organisation“ |
| `status` | `conceptualAnalysis` (Konzeptionelle Analyse), `scenarioAnalysis` (Szenarioanalyse), `practicalCoordination` (Praktische Koordination), `implemented` (Umgesetztes Projekt – nur bei tatsächlicher Umsetzung) |
| `models` | zugehörige Denkmodelle, z. B. `["ist-soll-gap"]` (Dateiname ohne `.de.json`) |
| `sections.fragestellung` | Fragestellung |
| `sections.analyse` | analytischer Ansatz |
| `sections.modell` | Modell oder Methode |
| `sections.beitrag` | eigener konzeptioneller bzw. praktischer Beitrag |
| `sections.status` | Hinweis zum Status, z. B. Annahmen und Quellen (das Status-Label erscheint automatisch) |

Weitere optionale Abschnitte: `ausgangslage`, `ist`, `struktur`, `risiken`, `optionen`, `wirkung`, `weiterentwicklung`. Leere Abschnitte werden nicht angezeigt.

Jeder Abschnitt kann enthalten: `text` (Absätze), `items` (Aufzählung), `flow` (Ablauf A → B → C), `stages` (Stufen-Diagramm), `note` (Hinweis in kleiner Schrift).

Bei Zahlen und Berechnungen: Quellen und Annahmen nennen und Ergebnisse als Szenarien kennzeichnen.

## Neues Projekt über die GitHub-Weboberfläche

Es muss nichts installiert werden; ein Browser genügt.

1. Auf github.com anmelden und das Repository `luisiya/strukturklar` öffnen.
2. In den Ordner `src/content/projects/` wechseln und `muster-projekt.de.json` öffnen.
3. Oben rechts auf das Symbol **Copy raw file** klicken.
4. Zurück zum Ordner, **Add file → Create new file** wählen.
5. Als Dateinamen z. B. `mein-projekt.de.json` eingeben und den kopierten Inhalt einfügen.
6. Texte ausfüllen. Zunächst `"published": false` lassen.
7. Unten auf **Commit changes** klicken und **Commit directly to the main branch** wählen.

Der Entwurf ist damit gespeichert, aber nicht sichtbar.

**Veröffentlichen:** Datei öffnen, auf den Stift (**Edit this file**) klicken, `"published": false` in `"published": true` ändern, **Commit changes**. Nach etwa zwei Minuten ist das Projekt online.

**Bearbeiten:** Datei öffnen, Stift, ändern, **Commit changes**.

**Zurückziehen:** `"published": true` wieder auf `false` setzen. Die Seite verschwindet mit der nächsten Veröffentlichung. Zum endgültigen Entfernen die Datei löschen (Menü **…** → **Delete file**).

Achtung bei der Schreibweise: Texte stehen in Anführungszeichen, Einträge werden durch Kommas getrennt, nach dem letzten Eintrag einer Liste steht kein Komma. Ist die Datei fehlerhaft, wird die Website nicht aktualisiert, und die bisherige Version bleibt online. Unter dem Reiter **Actions** ist dann ein roter Eintrag zu sehen.

Denkmodelle und Beiträge funktionieren genauso, jeweils mit ihrem Muster.

## Übersetzungen

Für eine Übersetzung eine zweite Datei mit derselben Adresse und anderer Sprache anlegen, z. B. `mein-projekt.en.json`, ebenfalls mit `"published": true`. Fehlt sie, wird die deutsche Fassung gezeigt.

## Alternative: Verwaltungsoberfläche

Unter `/admin/` gibt es zusätzlich eine Bearbeitungsoberfläche mit Formularen (Sveltia CMS). Die Anmeldung erfolgt mit einem persönlichen GitHub-Zugangstoken („Sign In Using Access Token“). Jede Speicherung wird wie oben über GitHub veröffentlicht.

## Lokal mit Entwürfen ansehen (für Entwickler)

```bash
VITE_SHOW_DRAFTS=true npm run dev
```

Entwürfe erscheinen dann mit dem Hinweis „Entwurf“.
