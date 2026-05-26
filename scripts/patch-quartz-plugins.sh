#!/usr/bin/env bash
# Re-applies local patches to vendored Quartz plugins after `quartz plugin install`.
# Idempotent: safe to run any number of times.
#
# Patches:
#   - graph: getFullSlugFromUrl() doesn't decode percent-encoded paths, breaking
#     graph view for non-ASCII slugs (e.g. Vietnamese with diacritics).

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
GRAPH_DIST_FILES=(
  "$ROOT/.quartz/plugins/graph/dist/index.js"
  "$ROOT/.quartz/plugins/graph/dist/components/index.js"
)

SEARCH='let u=window.location.pathname;'
REPLACE='let u=decodeURIComponent(window.location.pathname);'

for f in "${GRAPH_DIST_FILES[@]}"; do
  if [[ ! -f "$f" ]]; then
    echo "skip (not found): $f"
    continue
  fi
  if grep -qF "$REPLACE" "$f"; then
    echo "already patched: $f"
    continue
  fi
  if ! grep -qF "$SEARCH" "$f"; then
    echo "WARNING: search pattern not found in $f - upstream may have changed; review needed" >&2
    exit 1
  fi
  # Use Perl to avoid sed escaping quirks across BSD/GNU
  perl -i -pe "s|\Q$SEARCH\E|$REPLACE|g" "$f"
  echo "patched: $f"
done
