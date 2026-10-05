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
