#!/usr/bin/env python3
"""Add created/modified frontmatter to all content .md files using filesystem timestamps."""

import os
import re
import sys
from datetime import datetime, timezone
from pathlib import Path

CONTENT_DIR = Path(__file__).parent.parent / "content"
DRY_RUN = "--dry-run" in sys.argv

def get_file_dates(path: Path):
    stat = path.stat()
    # macOS has st_birthtime; fallback to mtime if not available
    created_ts = getattr(stat, "st_birthtime", stat.st_mtime)
    modified_ts = stat.st_mtime
    created = datetime.fromtimestamp(created_ts).strftime("%Y-%m-%d")
    modified = datetime.fromtimestamp(modified_ts).strftime("%Y-%m-%d")
    return created, modified

def inject_frontmatter(content: str, created: str, modified: str) -> str | None:
    """Return updated content, or None if no change needed."""
    fm_pattern = re.compile(r"^---\r?\n(.*?)\r?\n---\r?\n", re.DOTALL)
    match = fm_pattern.match(content)

    if match:
        fm_body = match.group(1)
        has_created = re.search(r"^created:", fm_body, re.MULTILINE)
        has_modified = re.search(r"^modified:", fm_body, re.MULTILINE)
        if has_created and has_modified:
            return None  # already stamped

        lines = fm_body.splitlines()
        if not has_created:
            lines.append(f"created: {created}")
        if not has_modified:
            lines.append(f"modified: {modified}")

        new_fm = "---\n" + "\n".join(lines) + "\n---\n"
        return new_fm + content[match.end():]
    else:
        # No frontmatter — prepend it
        new_fm = f"---\ncreated: {created}\nmodified: {modified}\n---\n"
        return new_fm + content

def main():
    files = sorted(CONTENT_DIR.rglob("*.md"))
    # Skip files in Attachments subdirectory
    files = [f for f in files if "Attachments" not in f.parts]

    updated = 0
    skipped = 0

    for path in files:
        created, modified = get_file_dates(path)
        content = path.read_text(encoding="utf-8")
        new_content = inject_frontmatter(content, created, modified)

        if new_content is None:
            skipped += 1
            continue

        if DRY_RUN:
            print(f"[dry-run] would update: {path.name}")
        else:
            # Preserve original mtime after writing
            original_mtime = path.stat().st_mtime
            path.write_text(new_content, encoding="utf-8")
            os.utime(path, (original_mtime, original_mtime))

        updated += 1

    print(f"{'[dry-run] ' if DRY_RUN else ''}Updated: {updated}, Already stamped: {skipped}, Total: {updated + skipped}")

if __name__ == "__main__":
    main()
