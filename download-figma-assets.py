#!/usr/bin/env python3
"""
Download all Figma MCP assets referenced in the src/ directory and
update the source files to use local imports instead.

Usage: python3 download-figma-assets.py
"""

import re
import sys
import urllib.request
import urllib.error
from pathlib import Path

# ── Config ────────────────────────────────────────────────────────────────────

SRC_DIR   = Path(__file__).parent / "src"
ASSET_DIR = SRC_DIR / "assets"
FIGMA_URL_PATTERN = re.compile(
    r'(const\s+(\w+)\s*=\s*)"(https://www\.figma\.com/api/mcp/asset/[^"]+)"'
)

CONTENT_TYPE_TO_EXT = {
    "image/png":  ".png",
    "image/jpeg": ".jpg",
    "image/jpg":  ".jpg",
    "image/svg+xml": ".svg",
    "image/webp": ".webp",
    "image/gif":  ".gif",
}

# ── Helpers ───────────────────────────────────────────────────────────────────

def camel_to_kebab(name: str) -> str:
    """imgNganNguyen → ngan-nguyen  (strips leading 'img' or 'CONTENT_')"""
    name = re.sub(r"^(img|CONTENT_)", "", name)
    name = re.sub(r"([A-Z])", r"-\1", name).strip("-").lower()
    return name


def download(url: str, dest: Path) -> Path | None:
    """Download url to dest (auto-detects extension). Returns final path or None."""
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=15) as resp:
            content_type = resp.headers.get("Content-Type", "").split(";")[0].strip()
            ext = CONTENT_TYPE_TO_EXT.get(content_type, "")
            if not ext:
                # Fall back: try to guess from URL or content
                if url.endswith(".svg"): ext = ".svg"
                elif url.endswith(".png"): ext = ".png"
                else: ext = ".bin"
            final = dest.with_suffix(ext)
            final.write_bytes(resp.read())
            return final
    except urllib.error.HTTPError as e:
        print(f"  HTTP {e.code}: {url}")
    except Exception as e:
        print(f"  Error: {e}")
    return None


def var_to_import_name(var_name: str) -> str:
    """Return a safe import identifier from the variable name."""
    return var_name  # keep original name, just change the value


# ── Main ──────────────────────────────────────────────────────────────────────

def main():
    ASSET_DIR.mkdir(exist_ok=True)

    tsx_files = list(SRC_DIR.rglob("*.tsx")) + list(SRC_DIR.rglob("*.ts"))
    if not tsx_files:
        print("No .tsx/.ts files found in src/")
        sys.exit(1)

    # Pass 1: collect all assets across all files
    # { var_name: (url, [file, ...]) }
    registry: dict[str, tuple[str, list[Path]]] = {}

    for f in tsx_files:
        text = f.read_text()
        for _full, var_name, url in FIGMA_URL_PATTERN.findall(text):
            if var_name not in registry:
                registry[var_name] = (url, [])
            registry[var_name][1].append(f)

    if not registry:
        print("No Figma MCP asset URLs found.")
        sys.exit(0)

    print(f"Found {len(registry)} asset(s) across {len(tsx_files)} file(s).\n")

    # Pass 2: download each unique asset
    downloaded: dict[str, Path] = {}  # var_name → local path

    for var_name, (url, files) in registry.items():
        stem = camel_to_kebab(var_name)
        dest_stem = ASSET_DIR / stem          # extension added after download
        print(f"Downloading  {var_name}  →  assets/{stem}.*")
        local = download(url, dest_stem)
        if local:
            print(f"  Saved as {local.name}")
            downloaded[var_name] = local
        else:
            print(f"  FAILED — keeping original URL for {var_name}")

    print()

    # Pass 3: rewrite source files
    for f in tsx_files:
        text = f.read_text()
        original = text

        # Build import statements to prepend (one per asset used in this file)
        new_imports: list[str] = []

        def replace_match(m: re.Match) -> str:
            prefix, var_name, url = m.group(1), m.group(2), m.group(3)
            if var_name not in downloaded:
                return m.group(0)  # download failed, leave as-is

            local_path = downloaded[var_name]
            rel = local_path.relative_to(f.parent)          # relative to the .tsx file
            import_id = f"_asset_{var_name}"
            import_stmt = f'import {import_id} from "./{rel}";'
            if import_stmt not in new_imports:
                new_imports.append(import_stmt)

            return f'{prefix}{import_id}'

        text = FIGMA_URL_PATTERN.sub(replace_match, text)

        if new_imports:
            # Insert imports after the last existing import line
            lines = text.splitlines(keepends=True)
            last_import_idx = 0
            for i, line in enumerate(lines):
                if line.startswith("import "):
                    last_import_idx = i
            insert_at = last_import_idx + 1
            import_block = "".join(s + "\n" for s in new_imports)
            lines.insert(insert_at, import_block)
            text = "".join(lines)

        if text != original:
            f.write_text(text)
            print(f"Updated {f.relative_to(SRC_DIR.parent)}")

    print("\nDone.")
    skipped = [v for v in registry if v not in downloaded]
    if skipped:
        print(f"\nWarning: {len(skipped)} asset(s) could not be downloaded and were left unchanged:")
        for v in skipped:
            print(f"  {v}  {registry[v][0]}")


if __name__ == "__main__":
    main()
