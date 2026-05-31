#!/usr/bin/env node
// Re-applies the slug transliteration patch to every bundled copy of Quartz's
// `slugifyPath`. Without it, Vietnamese diacritics (and ; : , etc.) pass straight
// into the URL, so browsers percent-encode them into unreadable %E1%BB... links.
//
// The patch:
//   - normalizes + strips combining diacritic marks (ố -> o, ư -> u, ...)
//   - maps đ/Đ -> d/D (đ does NOT decompose under NFKD)
//   - drops URL-unfriendly punctuation (; : , ! ? # quotes brackets ...)
//   - collapses and trims stray dashes
//
// Idempotent: only the ORIGINAL chain matches the regex, so re-running is a no-op.
// Run automatically via the `prebuild` npm script (after plugins are installed).

import fs from "node:fs"
import path from "node:path"

const ROOT = path.resolve(import.meta.dirname, "..")

// The original slugifyPath replace-chain, tolerant of minified vs pretty-printed
// whitespace. Matches every bundled copy regardless of variable names.
const ORIGINAL_CHAIN =
  /\.replace\(\/\\s\/g,\s*"-"\)\s*\.replace\(\/&\/g,\s*"-and-"\)\s*\.replace\(\/%\/g,\s*"-percent"\)\s*\.replace\(\/\\\?\/g,\s*""\)\s*\.replace\(\/#\/g,\s*""\)\s*\.toLowerCase\(\)/g

const PATCHED_CHAIN =
  '.normalize("NFKD")' +
  '.replace(/đ/g,"d").replace(/Đ/g,"D")' +
  '.replace(/[\\u0300-\\u036f]/g,"")' +
  '.replace(/\\s/g,"-")' +
  '.replace(/&/g,"-and-")' +
  '.replace(/%/g,"-percent")' +
  '.replace(/[?#;:,!\'"`()\\[\\]{}<>]/g,"")' +
  ".toLowerCase()" +
  '.replace(/-+/g,"-").replace(/^-+|-+$/g,"")'

function collectTargets() {
  const targets = []
  const utilsDist = path.join(ROOT, "node_modules/@quartz-community/utils/dist")
  if (fs.existsSync(utilsDist)) {
    for (const f of ["index.js", "path.js"]) {
      const p = path.join(utilsDist, f)
      if (fs.existsSync(p)) targets.push(p)
    }
  }
  const pluginsDir = path.join(ROOT, ".quartz/plugins")
  if (fs.existsSync(pluginsDir)) {
    const walk = (dir) => {
      for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name)
        if (entry.isDirectory()) walk(full)
        else if (entry.isFile() && entry.name.endsWith(".js")) targets.push(full)
      }
    }
    walk(pluginsDir)
  }
  return targets
}

let patched = 0
let alreadyOk = 0
for (const file of collectTargets()) {
  const src = fs.readFileSync(file, "utf8")
  if (!/function slugifyPath\(/.test(src)) continue
  if (!ORIGINAL_CHAIN.test(src)) {
    if (src.includes('.normalize("NFKD")')) alreadyOk++
    continue
  }
  fs.writeFileSync(file, src.replace(ORIGINAL_CHAIN, () => PATCHED_CHAIN))
  console.log("patched slugify:", path.relative(ROOT, file))
  patched++
}

console.log(`slugify patch: ${patched} file(s) patched, ${alreadyOk} already patched`)
