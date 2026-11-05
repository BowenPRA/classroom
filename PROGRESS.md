# PROGRESS — Year 5 Mathematics pilot pack (branch feat/y5-math-pilot)

Target changed on 2026-11-05 from Year 5 English (Ms. Kiu) to Year 5 Maths (Mr. David).
Nothing from the English start was written to this worktree.

## Chosen session
Unit 5 (Addition and subtraction), lesson 3 after Mr. David's two decks
("Subtracting into Negative Numbers", "Adding & Subtracting with Negative Numbers", both 19 Oct):
bigger jumps across zero (5Ni.01, one integer negative), estimating first, and the English of
the word problems: rises / falls, floors below ground, owing money, "the difference between".

## Done (all committed on the branch)
- [x] Worktree + junction, branch renamed
- [x] Sources read: David's Unit 5 slides, scheme of work 5.4 Topic 1, framework 5Nc/5Ni, Unit 5 test (types only)
- [x] courses.js entry y5-math; deck content/y5-math/U05_L3 (23 slides, lift + Up or Down? widgets, 3 photos)
- [x] plan.js
- [x] worksheet (4 pages + 1-page key) + content/homework.js entry
- [x] content/y5-math/U05_L3/problem-bank.md (10 types, 3 with steps)
- [x] docs/TEACHER-COURSES.md
- [x] checks: lint, build, audit:svg, check:deck light + dark, project-check REVEALS=1 at 1366x768 + 1920x1080,
      screenshots of every slide + widget states, #/plan printed, worksheet pages read

## Polish pass, 5 Nov 2026 (second session)
- [x] `teacher` field on courses (courses.js); y5-math has `teacher: 'Mr. David'`. Course fields
      pass through getCatalog() whole (no whitelist; only lesson meta is whitelisted).
      Blank screen: "Eyes on Mr. David" (VN thầy / cô); no field = "Eyes on Mr Bowen" /
      "Hãy nhìn thầy Bowen" / "Les yeux sur Mr Bowen", checked in headless Chrome.
      Plan header names the teacher and reads "Unit 5 · Lesson 3" for a lesson-in-unit number.
- [x] Plan on one A4 page: plan.js tightened first (still 2 pages), then a compact print
      style in Plan.jsx (@page A4 12 mm, no card padding, root font 13px in print only,
      sections may split). A4 page counts before -> after:
      y5-math/U05_L3 2 -> 1; y7-math/U05_2 8 -> 4; y7-science/U03_coffee 8 -> 4; y7-math/U02_3 3 -> 2.
      Bowen's three never fitted one page; same layout, no half-empty pages now.
- [x] One naming rule (docs/TEACHER-COURSES.md "Naming" = teacher-lessons skill "Names"):
      title "Year 5 Mathematics"; lesson folder = book section (U05_3) else U05_L3; request
      number only on the request; packet homework/y5m05-l3 (renamed from y5m05, rebuilt,
      header now "Year 5 Mathematics"), shelf label Y5 M5 L3; worksheet on #/homework and,
      once Bowen makes it, a PDF copy in the shared drive's Lesson packs folder; problem bank
      committed beside the lesson.
- [x] Checks after: lint clean, build OK, audit:svg 0/0, check:deck y5 EN light + dark 23/23 clean,
      check:deck y7-math/U02_3 29/29 clean.

## Left (for Bowen)
- Merge to main and deploy from a clean worktree (not done: no deploys from this session)
- the_current_lessons.py still suggests `U05_R<n>` / `R<nnn>` for a request with no book
  section (unit_slug, about line 299); the skill tells the operator to replace it. Change the
  script to suggest nothing or `U<unit>_L?` when convenient.
- Create `G:\Shared drives\PRA Shared Drive\Lesson Planning\Lesson packs\` so worksheets and
  keys can be copied there.
- Your own plans are still 4, 4 and 2 pages (were 8, 8, 3). Fitting them on one page is a
  content job, not done here (your decks were out of scope).
