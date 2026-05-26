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

apply_patch() {
  local f="$1" search="$2" replace="$3" label="$4"
  if [[ ! -f "$f" ]]; then
    echo "skip $label (not found): $f"
    return
  fi
  if grep -qF "$replace" "$f"; then
    echo "already patched ($label): $f"
    return
  fi
  if ! grep -qF "$search" "$f"; then
    echo "WARNING: $label search pattern not found in $f - upstream may have changed" >&2
    exit 1
  fi
  perl -i -pe "s|\Q$search\E|$replace|g" "$f"
  echo "patched $label: $f"
}

for f in "${GRAPH_DIST_FILES[@]}"; do
  # 1) Decode percent-encoded URL pathnames so non-ASCII slugs resolve in the graph.
  apply_patch "$f" \
    'let u=window.location.pathname;' \
    'let u=decodeURIComponent(window.location.pathname);' \
    'url-decode'

  # 2) Make node labels visible by default (Obsidian-style) instead of only on hover.
  apply_patch "$f" \
    'au.anchor.set(.5,1.2),au.alpha=0' \
    'au.anchor.set(.5,1.2),au.alpha=1' \
    'labels-always-visible'
done
