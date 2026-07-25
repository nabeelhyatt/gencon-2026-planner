#!/usr/bin/env python3
"""Fast-path: paste a Gen Con order-confirmation block (or several back to
back) and this marks the matching event(s) in data.js as booked, then
rebuilds gencon-artifact.html. Designed so one Bash call does the whole job.

Usage:
    python3 book_event.py <<'EOF'
    Gen Con Indy 2026 - Ask Me Anything - Publishers	Thursday, 3:00 PM EDT
    Nabeel Hyatt (2 tickets)	$0.00
    Kaden Hyatt (1 ticket)	$0.00
    Liam Hyatt (1 ticket)	$0.00
    EOF

Multiple bookings can be pasted in one go — just paste them one after another,
each starting with its own "Gen Con Indy 2026 - ..." header line.

What it does per booking block:
  - Parses the event title and the attendee/ticket lines.
  - Finds the matching event object in data.js by title (case-insensitive,
    substring-tolerant match).
  - Sets booked:true on it (idempotent — safe to re-run).
  - Sets seats:"Booked ✓".
  - Rewrites the trailing "Booked: N tickets (...)." clause in desc (adds it
    if missing, replaces it if this is a re-run with updated ticket counts).

Known limitation: this assumes data.js's existing convention of one event per
line (`{ type:..., ... }`,  all on a single line). If that convention changes,
the regex-based line matching below will need updating.
"""
import re
import sys
import subprocess
import os

HERE = os.path.dirname(os.path.abspath(__file__))
DATA_JS = os.path.join(HERE, "data.js")

TICKET_RE = re.compile(r"^(.+?)\s*\((\d+)\s*tickets?\)\s*\$?[\d.]*\s*$", re.IGNORECASE)
HEADER_RE = re.compile(r"^Gen Con Indy 2026\s*-\s*(.+?)\t", re.IGNORECASE)

def parse_blocks(text):
    lines = [l for l in text.splitlines() if l.strip()]
    blocks = []
    current = None
    for line in lines:
        if HEADER_RE.match(line):
            if current:
                blocks.append(current)
            current = {"header": line, "tickets": []}
        elif current is not None:
            m = TICKET_RE.match(line.strip())
            if m:
                current["tickets"].append((m.group(1).strip(), int(m.group(2))))
    if current:
        blocks.append(current)
    return blocks

def format_names(tickets):
    parts = []
    for name, count in tickets:
        first = name.split()[0]
        parts.append(f"{first} ×{count}" if count > 1 else first)
    return ", ".join(parts)

def normalize(s):
    s = s.lower().strip()
    s = re.sub(r"[‒–—―]", "-", s)  # en/em dash -> hyphen
    s = re.sub(r"[^a-z0-9]+", " ", s)  # punctuation-insensitive
    return re.sub(r"\s+", " ", s).strip()

def find_event_line(data, title):
    title_n = normalize(title)
    for m in re.finditer(r'^(.*\{\s*type:.*title:"([^"]+)".*\}[,]?)\s*$', data, re.MULTILINE):
        line_n = normalize(m.group(2))
        if title_n == line_n or title_n in line_n or line_n in title_n:
            return m.start(), m.end(), m.group(1), m.group(2)
    return None

def apply_booking(data, title, total_tickets, names_str):
    found = find_event_line(data, title)
    if not found:
        return data, False, None
    start, end, line, matched_title = found
    new_line = line

    booked_note = f"Booked: {total_tickets} ticket{'s' if total_tickets != 1 else ''} ({names_str})."

    # desc: replace existing "Booked: ...." clause or append a new one.
    def desc_sub(m):
        prefix, body, suffix = m.group(1), m.group(2), m.group(3)
        body = re.sub(r"\s*Booked:.*?\.\s*$", "", body).rstrip()
        sep = " " if body and not body.endswith((".", "!", "?")) else (" " if body else "")
        if body and not body.endswith((".", "!", "?", ":")):
            body += "."
        new_body = f"{body} {booked_note}".strip() if body else booked_note
        return f'{prefix}{new_body}{suffix}'

    new_line2, n = re.subn(r'(desc:")(.*?)(")', desc_sub, new_line, count=1)
    if n:
        new_line = new_line2

    # seats: set to "Booked ✓" (replace if present, else insert after status:"...").
    if re.search(r'seats:"', new_line):
        new_line = re.sub(r'seats:"[^"]*"', 'seats:"Booked ✓"', new_line, count=1)
    else:
        new_line = re.sub(r'(status:"[^"]*")', r'\1, seats:"Booked ✓"', new_line, count=1)

    # booked:true — insert before the final closing brace, if not already present.
    if not re.search(r'\bbooked:true\b', new_line):
        new_line = re.sub(r'\s*\}(,?)\s*$', r', booked:true }\1', new_line, count=1)

    data = data[:start] + new_line + data[end:]
    return data, True, matched_title

def main():
    text = sys.stdin.read()
    blocks = parse_blocks(text)
    if not blocks:
        print("No booking blocks found in input — expected lines starting with "
              "'Gen Con Indy 2026 - <Title>\\t<Day>, <Time> EDT'.")
        sys.exit(1)

    with open(DATA_JS, encoding="utf-8") as f:
        data = f.read()

    results = []
    for b in blocks:
        title = HEADER_RE.match(b["header"]).group(1).strip()
        total = sum(c for _, c in b["tickets"])
        names_str = format_names(b["tickets"]) if b["tickets"] else "?"
        data, ok, matched_title = apply_booking(data, title, total, names_str)
        results.append((title, ok, matched_title, total, names_str))

    with open(DATA_JS, "w", encoding="utf-8") as f:
        f.write(data)

    for title, ok, matched_title, total, names_str in results:
        if ok:
            print(f"✓ Booked \"{matched_title}\" — {total} ticket(s): {names_str}")
        else:
            print(f"✗ No matching event found for \"{title}\" — check the title against data.js manually.")

    subprocess.run([sys.executable, os.path.join(HERE, "build.py")], check=True)

if __name__ == "__main__":
    main()
