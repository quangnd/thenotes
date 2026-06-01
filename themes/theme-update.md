# Switchable Theme System for Quartz v5

## What this is

Two interchangeable themes for this site, plus the mechanism to switch between them:

- **default** — the configured look: warm off-white `#faf8f8`, teal accent `#284b63`, Be Vietnam Pro body, Schibsted Grotesk headers.
- **typewriter** — iA Writer Quattro S, warm parchment `#fcf5e4`, purple accent.

Both render correctly in light and dark mode.

## The key constraint (read this first)

This repo is the **quartz-community v5 fork**, not vanilla Quartz v4. Two things follow:

1. **Config is YAML** (`quartz.config.yaml`), not `quartz.config.ts`. There is no TS theme object to import.
2. **The YAML `theme:` block does not drive the rendered theme.** All Quartz CSS is wrapped in `@layer quartz-base`; the community theme lives in a higher `@layer obsidian-theme` that redefines every palette/font variable (`--light`, `--dark`, `--secondary`, `--bodyFont`, …) in terms of Obsidian variables that cycle back and cancel the config values. So colors/fonts set in YAML never reach the page on their own.

The lever that works: **`!important` custom-property declarations in SCSS.** CSS reverses `@layer` precedence for `!important`, so an `!important` variable set in `quartz-base` beats the `obsidian-theme` layer. Every real theming value is therefore set with `!important` in the theme SCSS files, not in YAML.

## How switching works

**One line** in `quartz/styles/custom.scss`:

```scss
@use "./themes/default.scss";      // or "./themes/typewriter.scss"
```

The YAML `theme:` block does **not** need to change when switching. It is kept on the default values because:
- it still feeds the **og-image** social-card generator (which fetches fonts from Google Fonts — iA Writer is not on Google Fonts, so cards stay on the default fonts), and
- it acts as a harmless fallback.

## File layout

| File | Role |
|------|------|
| `quartz/styles/custom.scss` | Holds the one-line `@use` switch + site-wide custom CSS |
| `quartz/styles/themes/default.scss` | Forces the configured palette + fonts (teal / Be Vietnam Pro / Schibsted) via `!important` vars |
| `quartz/styles/themes/typewriter.scss` | Forces the Typewriter palette + fonts + `@font-face` via `!important` vars |
| `quartz/static/fonts/` | Self-hosted woff2/ttf (iA Writer Quattro S ×4, JetBrains Mono ×1, EB Garamond Initials ×2) |
| `quartz.config.yaml` `theme:` | Default values; feeds og-image + fallback only |
| `content/Theme Test.md` | `draft: true` coverage note for local visual testing (does not publish) |

## What each theme SCSS file must set (and why)

Because the obsidian-theme layer overrides everything, a theme file has to force, all with `!important`:

1. **Core palette** — `--light --lightgray --gray --darkgray --dark --secondary --tertiary --highlight --textHighlight`.
2. **Painted surfaces** — `--color-base-00 --background-primary --background-primary-alt --background-secondary --background-secondary-alt`. The body and sidebars paint from these (`body{background:var(--background-primary)}` → `var(--color-base-00)`), bypassing `--light`. Forcing only `--light` leaves the page white.
3. **Fonts** — `--titleFont --headerFont --bodyFont --codeFont` set directly (bypasses the obsidian fallback chain).
4. **Accent HSL** — `--accent-h --accent-s --accent-l`. Some components (links, tags, interactive accents) derive from these instead of `--secondary`.
5. **Per-element font enforcement** — `body :is(p,li,ul,ol,blockquote,td,th,…) { font-family: var(--bodyFont) !important }` and the same for `h1–h6` → `var(--headerFont)`. The obsidian-theme layer sets per-element fonts that otherwise win.

Light values go in `:root`, dark values in `:root[saved-theme="dark"]`.

## Fonts

Self-hosted in `quartz/static/fonts/` (Quartz copies `quartz/static/` → output `static/`, so `@font-face` `url()` paths are written relative to the served root, e.g. `url("static/fonts/…")`).

- **iA Writer Quattro S** — Regular, Italic, Bold, BoldItalic (4 ttf), extracted from `themes/publish.css`.
- **JetBrains Mono** — Regular only (woff2); bold/italic are browser-synthesized for code.
- iA Writer Mono V — skipped (Obsidian editor only).
- Default theme fonts (Be Vietnam Pro, Schibsted Grotesk, IBM Plex Mono, EB Garamond) load via Google Fonts per the YAML `fontOrigin: googleFonts`.

## Adding a new theme later

1. Create `quartz/styles/themes/<name>.scss` following the structure above (palette + surfaces + fonts + accent HSL + per-element enforcement, all `!important`, light + dark).
2. If it needs non-Google fonts, add woff2/ttf to `quartz/static/fonts/` and declare `@font-face` in the theme file.
3. Switch by changing the one `@use` line in `custom.scss`.

## Known limitations

- **og-image + non-Google fonts:** the social-card generator fetches the header/body fonts from Google Fonts by name. iA Writer Quattro S is not on Google Fonts, so with `fontOrigin: local` the og-image build fails. Keeping the YAML `theme:` block on the default (Google) fonts sidesteps this — cards render in the default fonts while the page renders the active SCSS theme.
- **Dark-mode accent contrast:** the Typewriter plan's dark accent `#483699` is unreadable as link text on `#262626`; it was brightened to `#9d8cf0` for links (the dark `--highlight` still uses the deep purple as a tint).

## Verifying

```
npx quartz build --serve
```

Then check `/theme-test` (set `draft: false` temporarily, or view locally) in light and dark, at desktop and mobile widths. Confirm: background color, body font, heading font, link/accent color, code block, callouts. Screenshotting headless Chrome via `puppeteer-core` (present in node_modules) works for automated checks — emulate `prefers-color-scheme` and set `document.documentElement.setAttribute('saved-theme', …)` to force light/dark.
