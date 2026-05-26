#!/usr/bin/env python3
"""
Apply one translation batch.

Usage: apply_batch.py <start_idx> <end_idx>
- start_idx, end_idx: 1-based, inclusive, into the alphabetically-sorted file list.
- The set of "batch files" = mapping rows [start_idx-1 : end_idx]
- For each batch file:
  * Rename file: english_stem -> vietnamese_stem (skip if same)
  * Update frontmatter: aliases = [english_stem]  (if same, leave alone)
- For all 470 files (the whole vault), rewrite [[X|Y]] / [[X]] / [[X#anchor|Y]]:
  * Lookup X in mapping. If found and X != mapped, replace with [[mapped]] (drop |Y).
  * If X is unchanged in mapping, drop the |Y to leave a clean [[X]].
  * Anchors are preserved: [[X#anchor|Y]] -> [[mapped#anchor]].

This is idempotent: running again after a successful run is a no-op except for any
file whose mapping changed.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path

CONTENT_DIR = Path("/Users/mun/Data/sisyphus/content")
MAPPING_TSV = Path("/tmp/sisyphus_mapping.tsv")

FS_FORBIDDEN = set('/\\:?*<>|"')


def normalize_link_target(target: str) -> str:
    """Normalize a link target string the same way filenames are sanitized."""
    # Straight apostrophe -> curly (filenames use curly)
    normalized = target.replace("'", "’")
    # FS-forbidden chars -> underscore
    for c in FS_FORBIDDEN:
        normalized = normalized.replace(c, "_")
    return normalized.strip()

# Matches [[target|display]] or [[target]] with optional #anchor in target.
# Group 1: target (everything before # or |); Group 2: anchor (with #) or ''; Group 3: display (with |) or ''.
LINK_RE = re.compile(r"\[\[([^\[\]|#]+)(#[^\[\]|]+)?(\|[^\[\]]+)?\]\]")


def load_mapping() -> dict[str, str]:
    out: dict[str, str] = {}
    with MAPPING_TSV.open(encoding="utf-8") as fp:
        next(fp)  # header
        for line in fp:
            parts = line.rstrip("\n").split("\t")
            if len(parts) < 2:
                continue
            english, vietnamese = parts[0], parts[1]
            out[english] = vietnamese
    return out


def rewrite_links(body: str, mapping: dict[str, str]) -> tuple[str, int]:
    """Rewrite all wiki links in body using mapping. Returns (new_body, num_changes)."""
    n = 0

    def replace(m: re.Match) -> str:
        nonlocal n
        target = m.group(1).strip()
        anchor = m.group(2) or ""
        # Look up (try exact, then normalized for FS-sanitized variants)
        mapped = mapping.get(target)
        if mapped is None:
            normalized = normalize_link_target(target)
            mapped = mapping.get(normalized)
        if mapped is None:
            return m.group(0)
        new = f"[[{mapped}{anchor}]]"
        if new != m.group(0):
            n += 1
        return new

    new_body = LINK_RE.sub(replace, body)
    return new_body, n


def update_frontmatter(text: str, new_aliases: list[str]) -> str:
    """Rewrite the aliases list in frontmatter, preserving everything else."""
    if not text.startswith("---"):
        # no frontmatter - add one
        alias_block = "aliases:\n" + "\n".join(f"  - {a}" for a in new_aliases)
        return f"---\n{alias_block}\n---\n\n{text}"

    end = text.find("\n---", 3)
    if end == -1:
        return text  # malformed
    front = text[3:end]
    rest = text[end + 4:]
    # Reparse: remove existing aliases block (if any), keep other lines, then prepend new aliases
    new_lines: list[str] = []
    in_aliases = False
    for line in front.splitlines():
        stripped = line.strip()
        if stripped.startswith("aliases:"):
            in_aliases = True
            continue
        if in_aliases:
            if stripped.startswith("- ") or not stripped:
                continue
            in_aliases = False
        new_lines.append(line)
    # Build new aliases block
    alias_block = ["aliases:"]
    for a in new_aliases:
        alias_block.append(f"  - {a}")
    # Combine: aliases first, then other frontmatter lines
    new_front = "\n".join(alias_block + new_lines).strip("\n")
    return f"---\n{new_front}\n---{rest}"


def split_frontmatter(text: str) -> tuple[str, str]:
    """Return (frontmatter_block_including_delimiters, body)."""
    if not text.startswith("---"):
        return "", text
    end = text.find("\n---", 3)
    if end == -1:
        return "", text
    return text[:end + 4], text[end + 4:]


def main() -> int:
    if len(sys.argv) != 3:
        print("Usage: apply_batch.py <start_idx> <end_idx>", file=sys.stderr)
        return 2

    start = int(sys.argv[1])
    end = int(sys.argv[2])

    mapping = load_mapping()
    items = list(mapping.items())  # already in TSV order (alpha)
    if start < 1 or end > len(items) or start > end:
        print(f"Invalid range; mapping has {len(items)} entries.", file=sys.stderr)
        return 2

    batch = items[start - 1:end]
    batch_set = {eng for eng, _ in batch}

    # 1) Rename files + update frontmatter on batch files
    rename_count = 0
    for english, vietnamese in batch:
        old_path = CONTENT_DIR / f"{english}.md"
        if not old_path.exists():
            print(f"  SKIP missing: {english}.md", file=sys.stderr)
            continue
        text = old_path.read_text(encoding="utf-8")

        if english == vietnamese:
            # Keep filename; just normalize frontmatter aliases? Aliases already contain Vietnamese
            # but for proper-noun files alias_equals_english, the alias is the English itself.
            # In that case, no-op needed.
            continue

        # Rewrite frontmatter: aliases now = [english]
        new_text = update_frontmatter(text, [english])
        new_path = CONTENT_DIR / f"{vietnamese}.md"
        if new_path.exists() and new_path != old_path:
            print(f"  CONFLICT: target exists {new_path.name}", file=sys.stderr)
            continue
        new_path.write_text(new_text, encoding="utf-8")
        if new_path != old_path:
            old_path.unlink()
            rename_count += 1

    # 2) Update links across ALL files in vault (idempotent)
    link_changes_total = 0
    files_touched = 0
    for path in sorted(CONTENT_DIR.iterdir()):
        if path.suffix != ".md":
            continue
        text = path.read_text(encoding="utf-8")
        front, body = split_frontmatter(text)
        new_body, n = rewrite_links(body, mapping)
        if n > 0:
            path.write_text(front + new_body, encoding="utf-8")
            link_changes_total += n
            files_touched += 1

    print(f"Batch [{start}..{end}]: renamed {rename_count} files, "
          f"updated {link_changes_total} links across {files_touched} files.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
