#!/usr/bin/env python3
"""
Build mapping from English filenames to Vietnamese filenames.

Reads every .md file in content/, extracts aliases[0] from frontmatter,
writes a TSV mapping to /tmp/sisyphus_mapping.tsv.

Columns: english_filename<TAB>vietnamese_filename<TAB>note

The "note" column flags rows requiring manual review.
"""

from __future__ import annotations

import os
import re
import sys
from pathlib import Path

CONTENT_DIR = Path("/Users/mun/Data/sisyphus/content")
OUTPUT_TSV = Path("/tmp/sisyphus_mapping.tsv")

PROPER_NOUNS = {
    "Anki", "Andy Matuschak", "Benjamin S. Bloom",
    "Quantum Country",
}

DATE_PREFIX_RE = re.compile(r"^(\d{4}-\d{2}-\d{2} - )(.+)$")
FS_FORBIDDEN = set('/\\:?*<>|"')


def parse_aliases(text: str) -> list[str]:
    """Extract aliases list from YAML frontmatter (limited parser)."""
    if not text.startswith("---"):
        return []
    end = text.find("\n---", 3)
    if end == -1:
        return []
    front = text[3:end]
    in_aliases = False
    out: list[str] = []
    for line in front.splitlines():
        stripped = line.strip()
        if stripped.startswith("aliases:"):
            in_aliases = True
            continue
        if in_aliases:
            if stripped.startswith("- "):
                out.append(stripped[2:].strip().strip('"').strip("'"))
            elif stripped and not stripped.startswith("-"):
                break
    return out


def sanitize_filename(name: str) -> tuple[str, list[str]]:
    """Return (sanitized, warnings)."""
    warnings = []
    bad = [c for c in name if c in FS_FORBIDDEN]
    if bad:
        warnings.append(f"forbidden_chars:{''.join(sorted(set(bad)))}")
        for c in FS_FORBIDDEN:
            name = name.replace(c, "_")
    return name.strip(), warnings


def build_vietnamese_filename(english_stem: str, alias: str) -> tuple[str, list[str]]:
    """Build the new Vietnamese filename stem with warnings."""
    warnings = []

    if english_stem in PROPER_NOUNS:
        warnings.append("proper_noun_keep_english")
        return english_stem, warnings

    date_match = DATE_PREFIX_RE.match(english_stem)
    if date_match:
        date_prefix, english_title = date_match.groups()
        if not alias:
            warnings.append("no_alias_keep_english")
            return english_stem, warnings
        alias_clean = alias
        if alias_clean.startswith(date_prefix.strip().rstrip(" -")):
            cleaned, w = sanitize_filename(alias_clean)
            warnings.extend(w)
            return cleaned, warnings
        cleaned, w = sanitize_filename(f"{date_prefix}{alias_clean}")
        warnings.extend(w)
        return cleaned, warnings

    if not alias:
        warnings.append("no_alias_keep_english")
        return english_stem, warnings

    if alias.strip().lower() == english_stem.strip().lower():
        warnings.append("alias_equals_english")
        return english_stem, warnings

    cleaned, w = sanitize_filename(alias)
    warnings.extend(w)
    return cleaned, warnings


def main() -> int:
    rows: list[tuple[str, str, str]] = []
    seen_vietnamese: dict[str, list[str]] = {}

    files = sorted(p for p in CONTENT_DIR.iterdir() if p.suffix == ".md")
    for path in files:
        english_stem = path.stem
        text = path.read_text(encoding="utf-8")
        aliases = parse_aliases(text)
        alias = aliases[0] if aliases else ""
        vn, warnings = build_vietnamese_filename(english_stem, alias)
        seen_vietnamese.setdefault(vn, []).append(english_stem)
        rows.append((english_stem, vn, ";".join(warnings)))

    # detect collisions
    for vn, sources in seen_vietnamese.items():
        if len(sources) > 1:
            for i, r in enumerate(rows):
                if r[1] == vn:
                    new_note = (r[2] + ";" if r[2] else "") + f"collision_with:{','.join(s for s in sources if s != r[0])}"
                    rows[i] = (r[0], r[1], new_note)

    OUTPUT_TSV.parent.mkdir(parents=True, exist_ok=True)
    with OUTPUT_TSV.open("w", encoding="utf-8") as fp:
        fp.write("english_filename\tvietnamese_filename\tnote\n")
        for r in rows:
            fp.write("\t".join(r) + "\n")

    flagged = sum(1 for r in rows if r[2])
    print(f"Wrote {len(rows)} rows to {OUTPUT_TSV}")
    print(f"Flagged for review: {flagged}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
