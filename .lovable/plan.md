## Goal
Make the Biography page fully multilingual so its content switches with the language selector (currently only the title/subtitle translate; the body is hardcoded English).

## Changes

1. **`src/contexts/LanguageContext.tsx`** — add new keys for every biography section in all three languages (en, it, bg):
   - `bio.earlyLife.heading` / `bio.earlyLife.body`
   - `bio.education.heading` / `bio.education.body1` / `bio.education.body2`
   - `bio.books.heading` / `bio.books.body`
   - `bio.legacy.heading` / `bio.legacy.body`
   - `bio.intro` (the opening paragraph)
   - `bio.photoPlaceholder`

   English keeps the existing wording. Italian and Bulgarian are faithful translations of the same content (Elena's life: birth in Lokorsko 1952, PhD in theoretical physics at Sofia University, marriage to Vladimir in 1984, daughter Irena, Chernobyl 1986 and thyroid carcinoma, divorce 1993, turn to occult/spiritual study, Silva Method, Blavatsky/Steiner/Osho/Danov influences, DEIR certification, co-authorship with John Whale on the assemblage point article, unexpected passing in 2024).

2. **`src/pages/Bio.tsx`** — replace each hardcoded English paragraph and heading with `t('bio.…')` calls. No structural/visual changes.

## Out of scope
- No design changes, no new pages, no DB. Photo placeholder stays as-is.
- Other pages (Home, Research, Spiritual, Sayings) are not touched in this pass — let me know if you want their body copy translated too.
