#!/usr/bin/env python3
"""
AbiSentry DTI Engine - Threat Feed Sync Script
Fetches OSINT indicators from Abuse.ch, URLhaus, and PhishStats
every 6 hours and writes a sanitised abisentry_threats.json to public/

Usage:
  python3 dti_sync.py            # Run once
  python3 dti_sync.py --watch    # Run in loop every 6h

Cron (every 6h):
  0 */6 * * * /usr/bin/python3 /path/to/dti_sync.py >> /var/log/dti_sync.log 2>&1
"""

import json
import ssl
import csv
import hashlib
import time
import urllib.request
from datetime import datetime, timezone
from pathlib import Path
import argparse

OUTPUT_FILE = Path(__file__).parent / "public" / "abisentry_threats.json"
INTERVAL_HOURS = 6
MAX_ITEMS_PER_FEED = 200  # Keep file slim


def verified_fetch(url: str, timeout: int = 30) -> bytes:
    """Fetch with SSL certificate verification enforced (no feed poisoning)."""
    ctx = ssl.create_default_context()
    ctx.verify_mode = ssl.CERT_REQUIRED
    req = urllib.request.Request(url, headers={"User-Agent": "AbiSentry-DTI-Sync/1.0"})
    with urllib.request.urlopen(req, context=ctx, timeout=timeout) as resp:
        return resp.read()


def fetch_malwarebazaar_hashes() -> list[str]:
    """Pull recent malware file hashes from Abuse.ch MalwareBazaar."""
    print("[DTI] Fetching MalwareBazaar hashes...")
    body = verified_fetch("https://bazaar.abuse.ch/export/json/recent/")
    data = json.loads(body)
    hashes = []
    for item in data.get("data", [])[:MAX_ITEMS_PER_FEED]:
        if h := item.get("sha256_hash"):
            hashes.append(h.lower())
    return list(set(hashes))


def fetch_urlhaus() -> list[str]:
    """Pull recent malicious URLs from URLhaus."""
    print("[DTI] Fetching URLhaus feed...")
    body = verified_fetch("https://urlhaus-api.abuse.ch/v1/urls/recent/limit/100/")
    data = json.loads(body)
    urls = []
    for u in data.get("urls", [])[:MAX_ITEMS_PER_FEED]:
        if url := u.get("url"):
            urls.append(url)
    return list(set(urls))


def extract_domains_from_urls(urls: list[str]) -> list[str]:
    """Extract unique domains from a list of URLs."""
    domains = set()
    for url in urls:
        try:
            # Simple extraction: strip scheme and path
            stripped = url.split("//")[-1].split("/")[0].split(":")[0].lower()
            if "." in stripped and len(stripped) > 4:
                domains.add(stripped)
        except Exception:
            continue
    return list(domains)


def fetch_phishstats() -> list[str]:
    """Pull phishing URLs from PhishStats CSV."""
    print("[DTI] Fetching PhishStats feed...")
    try:
        body = verified_fetch("https://phishstats.info/phish_score.csv")
        lines = body.decode("utf-8", errors="ignore").splitlines()
        urls = []
        reader = csv.reader(lines)
        for i, row in enumerate(reader):
            if i == 0:
                continue  # Skip header
            if len(row) >= 2:
                url = row[1].strip().strip('"')
                if url.startswith("http"):
                    urls.append(url)
            if len(urls) >= MAX_ITEMS_PER_FEED:
                break
        return list(set(urls))
    except Exception as e:
        print(f"[DTI] PhishStats fetch failed: {e}")
        return []


def sanitise(items: list[str]) -> list[str]:
    """Strip comments, blanks, duplicates."""
    seen = set()
    out = []
    for item in items:
        item = item.strip()
        if not item or item.startswith("#") or item in seen:
            continue
        seen.add(item)
        out.append(item)
    return out


def sync():
    print(f"\n{'='*50}")
    print(f"[DTI] Sync started at {datetime.now(timezone.utc).isoformat()}")
    print(f"{'='*50}")

    hashes = sanitise(fetch_malwarebazaar_hashes())
    urlhaus_urls = sanitise(fetch_urlhaus())
    phish_urls = sanitise(fetch_phishstats())

    all_malicious_urls = list(set(urlhaus_urls + phish_urls))
    all_domains = sanitise(extract_domains_from_urls(all_malicious_urls))

    output = {
        "generated": datetime.now(timezone.utc).isoformat(),
        "version": "2.0.0",
        "description": "AbiSentry DTI Engine — auto-synced indicators from Abuse.ch, URLhaus, PhishStats",
        "malicious_domains": all_domains[:MAX_ITEMS_PER_FEED],
        "malicious_urls": all_malicious_urls[:MAX_ITEMS_PER_FEED],
        "malicious_hashes": hashes[:MAX_ITEMS_PER_FEED],
        "phishing_indicators": [],  # Extended by future ML module
        "sources": [
            {"name": "Abuse.ch MalwareBazaar", "url": "https://bazaar.abuse.ch", "last_synced": datetime.now(timezone.utc).isoformat()},
            {"name": "URLhaus", "url": "https://urlhaus.abuse.ch", "last_synced": datetime.now(timezone.utc).isoformat()},
            {"name": "PhishStats", "url": "https://phishstats.info", "last_synced": datetime.now(timezone.utc).isoformat()},
        ],
        "stats": {
            "total_domains": len(all_domains),
            "total_urls": len(all_malicious_urls),
            "total_hashes": len(hashes),
        }
    }

    OUTPUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(output, f, indent=2)

    print(f"[DTI] Written → {OUTPUT_FILE}")
    print(f"[DTI] Stats: {output['stats']}")


def main():
    parser = argparse.ArgumentParser(description="AbiSentry DTI Sync")
    parser.add_argument("--watch", action="store_true", help="Run every 6 hours")
    args = parser.parse_args()

    sync()
    if args.watch:
        print(f"\n[DTI] Watch mode — syncing every {INTERVAL_HOURS}h. Press Ctrl+C to stop.")
        while True:
            time.sleep(INTERVAL_HOURS * 3600)
            sync()


if __name__ == "__main__":
    main()
