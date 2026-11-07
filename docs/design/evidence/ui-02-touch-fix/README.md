# PR #16 — focused mobile Search fix

Responds to the [blocking real iPhone review](https://github.com/quangnd/thenotes/pull/16#pullrequestreview-5811357665). These captures supersede the earlier reduced-height inference in the UI-02 QA report; the owner's native Safari failure is the authoritative device result.

## Fix

The upstream mobile `.search-layout[data-preview] > .results-container` selector overrode the original result sizing with `flex: 0 0 100%` and `max-height: 60vh`. The mobile override now matches that specificity, uses a zero flex basis, and allows every nested flex region to shrink. Only the bounded results list scrolls; Close, input and status retain their height. Touch panning and momentum scrolling are enabled on the list.

Cards use 10px/12px padding, 17px titles (1.35 line height), and 14px descriptions (1.45 line height) clamped to three lines, with a three-line height cap. Desktop rules and the current theme are preserved.

The existing VisualViewport resize/scroll listeners already apply `height` and `offsetTop` to the Search container. No JavaScript rewrite was needed: the conflicting child flex sizing was the confirmed CSS defect. A desktop viewport resize exercises height updates but does not reproduce native Safari's keyboard or its nonzero viewport offset.

## Focused evidence

Actual site content, query `ghi chú`, eight results; local Quartz development server. Unedited screenshots from the in-app browser:

- [375 × 400 dark, top](mobile-375x400-top.jpg)
- [375 × 400 dark, scrolled to result 8](mobile-375x400-bottom.jpg)
- [1440 × 900 light, desktop Search](desktop-1440-light.jpg)

[DOM measurements](measurements.json) show the list shrinking from 634px at 375 × 812 to 222px at 375 × 400. Native browser scroll input moved list `scrollTop` from 0 to 862.5px while page scroll remained 0. Close stayed at y=13–57 and input at y=69–113. All eight descriptions measured 61px high (three 20.3px lines). Computed `-webkit-line-clamp` was 3. The final result became visible inside the list. Desktop retained the existing results/preview split, 21.088px titles and hidden card descriptions.

This is responsive desktop-browser evidence, **not native iOS keyboard verification**. The owner will test independently scrolling all eight results with the keyboard open on iPhone 13 mini before merging. No full QA matrix was repeated. No merge or deployment was performed.

## Validation

Local `npm run check`, `npm test` (99 passed, 0 failed/skipped), and the actual-content build passed (482 inputs, 10 filtered, 1469 outputs). Exact final-commit CI results are linked in the PR conversation.
