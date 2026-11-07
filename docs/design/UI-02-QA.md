# UI-02 — Mobile Search and navigation QA

Issue: [#14](https://github.com/quangnd/thenotes/issues/14). Design/baseline: [PR #12](https://github.com/quangnd/thenotes/pull/12). Based on latest `v5` at `043bd0e` (includes UI-00 and CI-00); implementation commit `1cdcc35`.

## Change and boundary

Search uses the existing Quartz Search component, index, ranking, previews and result renderer. Its layout display changes from desktop-only to all. A small global browser enhancement, attached through the existing Head resource hook, handles mobile dialogs, focus, inert background, Escape/Close, menu/search exclusivity, theme labels and SPA heading focus. CSS is restricted to the existing 800px mobile breakpoint, with hidden helper controls on desktop. No plugin bundle, lockfile or dependency is forked or patched for this change.

The mobile header retains menu, home title, Search and theme, with 44px button hit areas. The theme's masked icon is preserved and centered inside its larger target. Search has visible empty/loading/no-result/error guidance; Close/input remain above a scrollable result region sized to the visual viewport. Enter selects the attached result on mobile so Quartz's router receives the click; the inherited handler otherwise removes it before clicking and causes a full reload. Desktop handlers are unchanged.

The full flat Explorer remains available. Curated MOC navigation is deferred to UI-01/content approval. Homepage prose, note paths, article typography/images, graph/backlinks and palette remain unchanged. No workflow/deployment settings change.

## Real screenshot evidence

See the [screenshot index](evidence/ui-02/README.md), [capture manifest](evidence/ui-02/manifest.json).

These are unedited in-app-browser screenshots of actual `content/` builds on localhost, not mockups or Quartz's `docs/` sample. Before captures use the latest unmodified `v5` build; after captures use the implementation. Main widths/heights: 375 × 812, 390 × 844, 1440 × 900, all in light/dark modes. The matrix includes closed header, open menu, empty Search and results on mobile; before mobile Search is absent, so no fabricated before Search state is supplied. Home, MOC and the long Chapman article are inspected after the change at all three widths/modes. Desktop home/Search/results provide regression comparisons.

The baseline static output uses its existing production basepath for generated Explorer/search-result links; the implementation is served through Quartz's `--serve` development mode so interactive navigation and previews resolve locally. This local routing difference is not a deployed URL change. Dynamic graph settling, image/GIF frames and asynchronously fetched search previews can differ between captures.

## Interaction verification

Browser actions and read-only DOM/focus inspection verified the following. These are manual browser observations, not an automated regression suite:

- One tap opens Search with the input focused from home, MOC and long article at both mobile widths and themes.
- Menu switches to Search without stacked overlays; Escape releases inert background and returns trigger focus.
- Shift+Tab reaches Close; Tab returns to the input. Close and menu dismissal remain available while results scroll. Menu dismissal preserves reader scroll; the header stays at the top while reading.
- Query edits produce results and no-result guidance without reopening. Search result selection is exercised with pointer and keyboard; repeated SPA transitions are checked for heading focus, a single Search container/Close control, released background and retained theme.
- Home navigation, Back, desktop Search/Explorer and breakpoint transitions are checked without changing desktop handlers.
- A 375 × 400 reduced-height viewport checks that Close/input remain visible and results scroll independently. This is a constrained-layout test, not a claim of native keyboard testing.
- A separate localhost fixture returns HTTP 503 for the real content-index request to exercise the visible error/reload path without altering the application or a remote service.

Earlier failed interaction attempts during development are excluded from the final pass log; the mobile Enter/full-reload focus defect found during QA was corrected before the final navigation checks.

## Validation and limitations

`npm run check`, `npm test`, the actual-content Quartz build and the docs build/PR CI results are reported in the PR with exact run links. A skipped release/preview job does not substitute for the three executed validation jobs. Existing tests are supplemented by these browser interaction checks; no new browser framework or dependency is installed.

This browser provides responsive desktop-engine testing. Native iOS/Android touch keyboards, VoiceOver/TalkBack and other browser engines are not certified by these captures. The VisualViewport path is implemented and reduced-height layout is checked, but should still receive native-device review. Hover previews and reading/image redesign are outside this change. Hosted PR preview remains unavailable per CI-00; no merge, production push or deployment was performed.

## Deferred follow-ups

Per the updated scope, native screen-reader/device review, advanced modal/SPA edge cases and a larger visual regression suite are deferred. Existing working accessibility behavior is retained; no additional refactoring or test-matrix expansion is included.
