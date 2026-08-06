# CLAUDE.md

Classroom lesson decks for Cambridge Lower Secondary Year 7, taught from a
projector to Vietnamese ESL students. Their arithmetic is fine; the barrier is
the English of the question. Write for that.

## Before authoring or editing a lesson

Read **`docs/LESSON-PLAYBOOK.md` end to end.** It is the method: build order,
house style, and every trap that has already cost time. `README.md` is the
field-and-layout reference. Neither is optional, and neither is a substitute
for the other.

A lesson is a folder — `content/<course>/<unit>/index.js`, default-exporting
`{ meta, slides, plan }`. The registry discovers it automatically; there is no
list to update.

## Think before building

Surface the assumption instead of quietly picking one. If a request has two
readings that would produce different decks, say so and ask. A question before
you start costs a minute; the wrong deck costs the lesson.

## Prefer the plain slide

**This is the failure that recurs most in this repo: building something clever
where something simple was wanted.**

- A widget must do one thing a static slide cannot. If it does not, it is a
  note or a bumper. No sliders, no gimmicks, no interaction for its own sake.
- If a slide needs a scrollbar on a projector, it is two slides. Splitting is
  free; a cut-off definition is not.
- Ask the question on its own slide, with no numbers on it, before the slide
  that answers it.

## Non-negotiables

- Copy-down content goes in a `write` note or an orange `>` bumper. **Nothing
  else.** A definition that looks like discussion prose does not get copied.
- Every user-facing string needs a `…Vn` twin, written inline from the start —
  including widget interface text, which receives the deck's `lang` prop.
- Never put a `$` in prose. `parseInlineText` turns any two of them into a
  maths span and eats the words between. Write "20 dollars".
- Write SVG label `<text>` out literally. `audit:svg` cannot see text emitted
  from a `${helper(...)}` call, so it will report zero overflows while
  measuring nothing.
- Every image needs a `CREDITS.json` entry with an honest licence — including
  textbook scans, which are not openly licensed and must say so.
- Use **Mr Bowen** in worked examples, never invented student names.

## Verification — nothing ships until all four are clean

```bash
npm run lint
npm run build
npm run audit:svg
npm run check:deck -- "http://localhost:5173/#/lesson/<course>/<unit>"
```

`check:deck` walks the deck **windowed at 1440×900, in English** (it takes a
`dark` argument). Project mode is fullscreen with roughly 40% larger type, and
it is what the class actually sees — check it separately, in both languages, at
the room's real resolution. See LESSON-PLAYBOOK §6 for why that check is
awkward to automate.

Then commit to `main`, run `npm run deploy`, and confirm the live site is
serving the new bundle before calling it done.
