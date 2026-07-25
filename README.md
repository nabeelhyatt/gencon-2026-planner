# Gen Con 2026 Planner

A single-page schedule/booth/games planner for Gen Con 2026, built around two
threads: pitching **Race to Kepler** (a mid-weight deckbuilder, Kickstarter
already funded) to publishers/distributors, and retail-learning for
**Tabletop Library** (opening in Berkeley within the month).

Live copy: published as a Claude Artifact (ask Claude for the current link —
it redeploys to the same URL each time these files change).

## Files

- `index.html`, `style.css`, `app.js`, `data.js` — the app itself. `data.js`
  holds all schedule/booth/games/mission-board content; `app.js` renders it.
- `fonts/` — Sora + Inter, downloaded once and inlined as base64 so the built
  artifact has zero external dependencies (the Claude Artifact CSP blocks
  font CDNs).
- `build.py` — combines the above into one self-contained `gencon-artifact.html`
  (inlines fonts + CSS + JS, strips the `<head>`/`<body>` wrapper since the
  Artifact publish step supplies its own).
- `book_event.py` — fast path for marking an event "Booked" instead of
  "Primary pick". See below.

## Marking an event as booked

Paste a Gen Con order-confirmation block (or several back to back) into
`book_event.py` over stdin:

```bash
python3 book_event.py <<'EOF'
Gen Con Indy 2026 - Ask Me Anything - Publishers	Thursday, 3:00 PM EDT
Nabeel Hyatt (2 tickets)	$0.00
Kaden Hyatt (1 ticket)	$0.00
Liam Hyatt (1 ticket)	$0.00
EOF
```

It will:

1. Match the event by title (case/punctuation/dash-insensitive) in `data.js`.
2. Set `booked:true`, `seats:"Booked ✓"`, and append a `Booked: N tickets
   (...)` clause to `desc`.
3. Rebuild `gencon-artifact.html` automatically.

It's idempotent — re-running the same confirmation (e.g. to fix a ticket
count) updates in place rather than duplicating text. Once it's rebuilt,
publish `gencon-artifact.html` as a Claude Artifact to push the update live.

**Known limitation:** the matcher assumes `data.js`'s current convention of
one event object per line. If that convention ever changes, the regex-based
line matching in `find_event_line()` will need updating.

## Booth walk zones

The Booths tab groups booths into "walk zones" by booth-number range (not by
confirmed hall — Gen Con's own numbering doesn't map cleanly to halls in the
source data we have). Treat it as a heuristic for minimizing backtracking,
not a verified hall assignment; confirm hall letters at the directory board.
