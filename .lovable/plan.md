## Problem

The Vite dev server is failing with a syntax error and cannot render the preview:

```
x Expected ',', got 'assegno'
/dev-server/src/contexts/LanguageContext.tsx:131
'sayings.1.context': 'Lo diceva quando ... mio padre non pagava l'assegno di mantenimento. ...'
```

The Italian translations on lines around 131–133 use single-quoted JS strings but contain unescaped apostrophes (`l'assegno`, `l'ultimo`, `l'inquilino`, `l'è`, `l'arredamento`). Line 133 also has a stray double apostrophe: `''Lo diceva quando Windows...`. This breaks the whole module, so nothing renders.

## Fix

1. Open `src/contexts/LanguageContext.tsx`.
2. Audit every Italian (and Bulgarian/English) string for unescaped apostrophes and stray quotes — not just lines 130–134.
3. Convert problem strings from single quotes to double quotes (preferred — apostrophes are common in Italian) so e.g.:
   - `'sayings.1.context': "Lo diceva quando le lampadine si fulminavano inaspettatamente. Quando mio padre non pagava l'assegno di mantenimento. Quando il gatto riusciva ad aprire il frigo rubando l'ultimo pezzo di salame. Quando l'inquilino se l'è data a gambe con tutto l'arredamento, lasciando bollette arretrate e mesi di affitto da pagare."`
   - `'sayings.2.context': "Lo diceva quando Windows ci metteva troppo ad avviarsi."` (also removes the stray leading `'`).
4. Save and confirm the dev server recompiles cleanly (no more `vite:react-swc` errors in the log) and the preview loads.

No other files need changes.
