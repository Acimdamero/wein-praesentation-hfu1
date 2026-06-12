#!/usr/bin/env python3
"""Download Weinbaugebiete maps from Wikimedia Commons with rate-limit respect."""
import json
import time
import urllib.parse
import urllib.request
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "assets" / "images" / "countries"
OUT.mkdir(parents=True, exist_ok=True)

# filename -> Wikimedia Commons file title (verified or best match)
FILES = {
    "frankreich-regions.jpg": "File:Map of France's wines-regions and appelations-fr.svg",
    "spanien-regions.jpg": "File:Vinos DO de España.png",
    "italien-regions.jpg": "File:Italian DOC wine regions map.svg",
    "deutschland-regions.jpg": "File:Weinbaugebiete 2019 ohne dac mit wachau.jpg",
    "portugal-regions.jpg": "File:Vinos DOC de Portugal.png",
    "griechenland-regions.jpg": "File:Greece wine regions de.png",
    "oesterreich-regions.jpg": "File:Weinbaugebiete Österreich 2019.jpg",
    "tuerkei-regions.jpg": "File:Turkish wine regions map.png",
    "usa-regions.jpg": "File:USA wine regions map.svg",
    "chile-regions.jpg": "File:Wine regions of Chile map-en.svg",
    "argentinien-regions.jpg": "File:Wine regions in Argentina map-en.svg",
    "australien-regions.jpg": "File:Map of wine production in Australia-en.svg",
    "suedafrika-regions.jpg": "File:South African wine regions map-en.svg",
    "china-regions.jpg": "File:China wine regions map-en.svg",
    "neuseeland-regions.jpg": "File:New Zealand wine regions map-en.svg",
}

FALLBACK_SEARCH = {
    "italien-regions.jpg": "Italian wine regions map",
    "oesterreich-regions.jpg": "Austria wine regions map",
    "usa-regions.jpg": "American Viticultural Areas map",
    "chile-regions.jpg": "Chile wine regions map",
    "argentinien-regions.jpg": "Argentina wine regions map",
    "australien-regions.jpg": "Australia wine regions map",
    "suedafrika-regions.jpg": "South Africa wine regions map",
    "china-regions.jpg": "China wine regions map",
    "neuseeland-regions.jpg": "New Zealand wine regions map",
}

UA = "WeinPraesentationHFU1/1.0 (educational; contact: student)"


def api(params):
    time.sleep(4)
    q = urllib.parse.urlencode(params)
    req = urllib.request.Request(
        f"https://commons.wikimedia.org/w/api.php?{q}",
        headers={"User-Agent": UA},
    )
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.load(r)


def resolve_title(title):
    data = api({
        "action": "query",
        "titles": title,
        "prop": "imageinfo",
        "iiprop": "url|size|mime|thumburl",
        "iiurlwidth": 2400,
        "format": "json",
    })
    pages = data.get("query", {}).get("pages", {})
    for p in pages.values():
        if "missing" in p:
            return None
        ii = p.get("imageinfo", [{}])[0]
        url = ii.get("thumburl") or ii.get("url")
        return url, ii.get("size", 0), p["title"]
    return None


def search_file(term):
    data = api({
        "action": "query",
        "list": "search",
        "srsearch": term,
        "srnamespace": 6,
        "srlimit": 8,
        "format": "json",
    })
    for hit in data.get("query", {}).get("search", []):
        t = hit["title"]
        if any(x in t.lower() for x in (".pdf", ".djvu", ".svg", ".png", ".jpg", ".jpeg", ".tif")):
            if "map" in t.lower() or "wine" in t.lower() or "wein" in t.lower() or "region" in t.lower():
                res = resolve_title(t)
                if res and res[1] > 50000:
                    return res
    return None


def download(url, dest, retries=5):
    for attempt in range(retries):
        try:
            time.sleep(5 + attempt * 3)
            req = urllib.request.Request(url, headers={"User-Agent": UA})
            with urllib.request.urlopen(req, timeout=120) as r:
                data = r.read()
            if len(data) < 1000 and b"<html" in data[:200].lower():
                raise ValueError("HTML error page received")
            dest.write_bytes(data)
            return len(data)
        except Exception as e:
            print(f"  Attempt {attempt + 1} failed: {e}")
            if attempt == retries - 1:
                raise


def main():
    results = []
    for fname, title in FILES.items():
        dest = OUT / fname
        if dest.exists() and dest.stat().st_size >= 50000:
            print(f"\n=== {fname} === SKIP (already {dest.stat().st_size} bytes)")
            results.append((fname, dest.stat().st_size, "(cached)", title))
            continue
        print(f"\n=== {fname} ===")
        res = resolve_title(title)
        if not res or res[1] < 50000:
            fb = FALLBACK_SEARCH.get(fname)
            if fb:
                print(f"  Primary miss, searching: {fb}")
                res = search_file(fb)
        if not res:
            print(f"  FAILED: no source for {title}")
            results.append((fname, 0, "", "FAILED"))
            continue
        url, api_size, resolved_title = res
        print(f"  Source: {resolved_title}")
        print(f"  URL: {url}")
        size = download(url, dest)
        print(f"  Downloaded: {size} bytes")
        if size < 50000:
            print("  WARNING: file < 50KB")
        results.append((fname, size, url, resolved_title))

    print("\n\n=== SUMMARY ===")
    for fname, size, url, title in results:
        status = "OK" if size >= 50000 else "SMALL/FAIL"
        print(f"{fname}\t{size}\t{status}\t{url}")


if __name__ == "__main__":
    main()
