#!/usr/bin/env python3
"""Combine index.html + style.css + data.js + app.js + inlined fonts into one
self-contained HTML file, ready to publish as a Claude Artifact.

Usage: python3 build.py [output_path]
Default output: ./gencon-artifact.html
"""
import re
import sys
import os

HERE = os.path.dirname(os.path.abspath(__file__))

def read(name):
    with open(os.path.join(HERE, name), encoding="utf-8") as f:
        return f.read()

def main():
    out_path = sys.argv[1] if len(sys.argv) > 1 else os.path.join(HERE, "gencon-artifact.html")

    fontfaces = read("fonts/fontfaces.css")
    style = read("style.css")
    data_js = read("data.js")
    app_js = read("app.js")
    html = read("index.html")

    m = re.search(r'<body>(.*?)<script src="data\.js">', html, re.S)
    body_markup = m.group(1).strip()

    out = f"""<meta charset="UTF-8">
<title>Gen Con 2026 Planner — Race to Kepler × Tabletop Library</title>
<style>
{fontfaces}
{style}
</style>
{body_markup}
<script>
{data_js}
</script>
<script>
{app_js}
</script>
"""
    with open(out_path, "w", encoding="utf-8") as f:
        f.write(out)
    print(f"Built {out_path} ({len(out.encode('utf-8'))} bytes)")

if __name__ == "__main__":
    main()
