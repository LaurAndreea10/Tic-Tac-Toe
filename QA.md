# Verification — 3.1.0 (2026-10-05)

Automated command: `node test-game.cjs`.

- 554 winning segments across board sizes and winning lengths.
- Invalid board/rules/names/score structures/counters rejected before restore.
- AI immediate win and block on 6×6.
- 300 seeded puzzles: balanced marks, no existing winner, valid winning move, deterministic regeneration; hard puzzles have one solution.
- JavaScript syntax checked.

Live browser check on 3.0: daily puzzle launches and a winning move is accepted with winning cells highlighted. These observations do not certify 3.1 mobile or offline behavior.

Manual checks still required: physical mobile touch; screen reader announcement and modal navigation; offline service-worker installation/update and JSON file selection/export; full timer/Undo/series regression. No Lighthouse scores or real-device results are claimed.

Corrections in 3.1: puzzle scores isolated from matches, round ledger preserved in backups, reduced-motion confetti suppressed, winning-cell labels, old CodePen catalogue URL replaced.

Live 3.1 browser check: difficulty selector and daily progress displayed; championship started at 0–0; one X move was restored with O to move and round ledger retained. Undo history intentionally resets on restore.

## 3.2 verification

`node test-game.cjs` passes locally, including visual-hint line selection. `test-browser.cjs` and GitHub regression workflow cover 360px mobile emulation, touch, row-aware keyboard navigation, Undo/resume, dialog Tab/Escape, language, contrast, daily persistence and offline reload. Workflow outcome must be checked separately; no physical-device or screen-reader certification is claimed.
