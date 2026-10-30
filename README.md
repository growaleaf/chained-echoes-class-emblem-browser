# Chained Echoes — Class Emblem Browser

Built at `Products/ChainedEchoesClassEmblemBrowser/`: `index.html`, `data.js`, `test.js`, this
README, `CHANGELOG.md`, `robots.txt`, `sitemap.xml`.

Who it's for: a Chained Echoes player standing at a Class Statue with one Sacred Water, deciding
which of their 12 party members should get which of the 12 Class Emblems before committing —
Sacred Water is scarce and the choice is not easily reversible mid-playthrough.

## What it does

- **Character picker** — all 12 party members (Glenn, Robb, Victor, Ba'Thraz, Sienna, Lenne,
  Amalia, Mikah, Tomke, Egyl, Raphael, Magnolia). No class restriction was found in any guide
  reached, so every character can equip any of the 12 emblems; the page says so explicitly rather
  than inventing a restriction. Shows a community-attributed recommended pairing per character.
- **Emblem detail** — for each of the 12 Class Emblems: its qualitative stat trend (direction and
  magnitude, never a fabricated number), the 4 skills it grants (2 active + 2 passive, named),
  and its Class Statue location.
- **Compare view** — two emblems side by side: stat trend, skills, statue location.

## Data honesty — read before trusting a number

**No numeric stat-bonus value exists in any source reached**, for any of the 12 emblems. This is
a stronger gap than the orchestrator's gate-2 read anticipated (which flagged 4 emblems — Gambler,
Warrior, Monk, Bandit — as having no stat-bonus text at all). Re-verifying directly against the
primary guides turned up qualitative stat-trend descriptions for **all 12** emblems from two
independently-authored sources (commonsensegamer.com and arrpeegeez.com), but **zero exact numbers
for any of them**, across every source reached (commonsensegamer.com, arrpeegeez.com, gameranx.com
×2 articles, gameplay.tips, a Steam Community thread, and a per-character build-recommendation
article series). Per the charter's own failure protocol for this exact scenario ("if the stat data
turns out unsourceable for nearly all 12 emblems... ship a partial product... rather than
fabricating"), this product ships as a partial product: **qualitative stat trend + skills +
location, no numeric deltas, no numeric compare math.**

Other honesty notes:
- **Summoner stat-trend conflict**: commonsensegamer.com and arrpeegeez.com disagree on Summoner's
  secondary stat boosts (HP vs. Magic). Shown flagged on the Summoner card with both sources'
  verbatim text, not resolved by guessing. This is a different conflict from the "Summoner text
  under a Monk heading" formatting issue the charter described pre-emptively — that specific
  artifact was not found in any source reached during this session's research pass.
- **Skill names** (Awaken Spirit, Heal All, etc.) are single-sourced to arrpeegeez.com's
  walkthrough — no second source reached names them, and the product labels this visibly on every
  emblem card. The *structure* — 2 active + 2 passive skills per emblem — is independently
  confirmed by a Steam Community post on app 1229240 ("12 classes with 2 skills and 2 passives
  each"), so only the names, not the count, are single-sourced.
- **Character roster correction**: the charter described "10 party members"; the game actually has
  12 (confirmed via gameranx.com's character-by-character emblem guide, which names all 12).
- **No base-stat numbers and no class-emblem restriction** were found for any character in any
  guide reached. The character picker says so rather than inferring either.
- **Character recommendations** are attributed community opinion (gameranx.com's pairing guide,
  corroborated for Sienna by a separate commonsensegamer.com article), labeled "Community guide
  says — not this product's claim" on every render.

## Verification run this session (2026-10-30)

```
$ node test.js
... (176 assertions)
ALL TESTS PASSED

$ python3 Tools/slop_lint.py Products/ChainedEchoesClassEmblemBrowser/
slop_lint: clean — 0 findings

$ python3 Tools/slop_lint.py --self-test
SELF-TEST PASSED
```

Rendered with headless Chrome (`--headless=new --dump-dom`) from inside this directory (so
`data.js` resolves) and the DOM output was inspected directly — confirmed "not found in any
reachable source" and "Single-sourced, unconfirmed." render as real DOM text (not just present in
the `<script>` source), and confirmed the Summoner conflict banner renders both sources' verbatim
quotes when Summoner is selected.

## Sources

- commonsensegamer.com — "How to Find All Class Emblems" + the per-character build-recommendation
  article series (Sienna's article corroborates her Gambler recommendation)
- arrpeegeez.com — Main Walkthrough, Class Emblem section (only source reached naming skills)
- gameranx.com — "How to Unlock All Classes / Class Emblem Locations Guide" + the class/emblem
  pairing "Class Emblems Equip Guide" article
- gameplay.tips — "All Class Emblems Guide"
- Steam Community, app 1229240 — "Skills/Passives from Class Emblems" discussion thread

Gate 2 (competition) re-verified 2026-10-30: no Fandom wiki, no wiki.gg page, and no dedicated
calculator/tool exists for Chained Echoes in any search reached — the orchestrator's original read
held.

No registry write, no git commit — left for the orchestrator per charter.
