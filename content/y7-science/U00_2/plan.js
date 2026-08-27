// content/y7-science/U00_2/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '~80 minutes total — a ~15 minute briefing, 3 × 20 minute rotations (60 minutes), and a 5 minute debrief. Fits a double period; split the briefing into its own short session if you only have a single period.',
  objective:
    'Students predict a measurement before taking it, then take repeated measurements at three stations (a room perimeter, a folded paper stack, and timed ramp trials), and notice that repeating a measurement — and averaging it — changes how much they can trust the result.',
  materials: [
    'Projector / TV for the lesson deck — the rotation-timer widget is the whole lesson clock',
    'A long tape measure or metre stick, shared between whichever group is at Station 1',
    'A3 paper — at least one full sheet per group, ideally two or three, since folding destroys the sheet',
    'The ramp built by the Teens class, with a 1 metre track marked on it',
    'One plastic ball and one wooden ball, sized to roll down the ramp',
    'A stopwatch or phone timer for Station 3 (not the projector timer — that one is busy running the rotation)',
    'Notebooks or paper for every student to record predictions and data',
  ],
  vocab: [
    { term: 'Accuracy', def: 'how close a measurement is to the true value — not covered as a slide definition in this lab, but useful for you to draw on verbally during the debrief' },
    { term: 'Precision', def: 'how close repeated measurements are to each other, whether or not they are close to the true value' },
  ],
  timeline: [
    { time: '0–3 min', phase: 'Hero + how today works', detail: 'Slides 1–2. State the shape once, clearly: 3 groups, 3 stations, 20 minutes each, first 2 minutes of every station is prediction only.' },
    { time: '3–8 min', phase: 'Make the groups', detail: 'Slide 3. Type the roster into the widget live — it is faster than it looks, and the class enjoys watching the shuffle. The groups save automatically for the rotation slide.' },
    { time: '8–14 min', phase: 'Brief all three stations', detail: 'Slides 4–6, about 2 minutes each. Read the prediction question at each station out loud and pause — do not let anyone start guessing numbers yet, that happens physically at the station. State the "then measure / then fold / then race" instruction clearly since it is the only place the full method is written down.' },
    { time: '14–74 min', phase: 'The three rotations', detail: 'Slide 7. Send groups to their Round 1 stations, then press Start. The widget shows PREDICT for the first 2 minutes of every round and MEASURE after that, and names which group is at which station. Press Next Rotation when the timer hits zero — do not linger, the next round\'s prediction window is short.' },
    { time: '74–80 min', phase: 'Debrief', detail: 'Slide 8. Ask whether predictions matched the data, and specifically whether all 10 ramp times for one ball were identical. Someone will say no — that is precision, and it is the whole point of running 10 trials instead of 1.' },
  ],
  answers: [
    { q: 'Station 1 — the perimeter', a: 'Depends on the room; measure it yourself beforehand so you can settle disagreements between groups. Two groups measuring the same wall and disagreeing by a centimetre or two is normal and is itself worth pointing out at the debrief.' },
    { q: 'Station 2 — how many folds', a: 'Most groups manage 6–8 folds by hand before the stack is too thick and small to fold again — famously fewer than people predict, because the thickness doubles every time (2, 4, 8, 16 layers…) while the foldable area shrinks just as fast.' },
    { q: 'Station 3 — which ball wins', a: 'Depends on the two actual balls, and that is fine to leave open. If both are solid and roll without slipping, mass alone does not decide the winner — how the mass is distributed does: a ball with more mass toward its surface (a higher moment of inertia relative to its mass) accelerates more slowly than one with mass concentrated near the centre. Do not pre-announce a winner; let the 10-trial average settle it.' },
  ],
  notes:
    'THE PROJECTOR NEVER LEAVES SLIDE 7 once the rotations start. Everything the class needs while rotating — which group is where, the countdown, PREDICT vs MEASURE — is on that one widget, because the room only has one shared screen and groups are scattered across three stations. ' +
    'THE PREDICTION IS THE POINT, not a warm-up to rush through. If a group starts measuring in the first 2 minutes, send them back — the gap between the guess and the data is what the whole lab is teaching, same as any other "ask before you tell" slide in this course, just spread across a room instead of a single question. ' +
    'GROUPS ARE SAVED IN THE BROWSER, not in React state — Deck.jsx remounts each slide\'s widget on navigation, so the roster widget and the rotation widget talk to each other through localStorage. This also means the timer survives you flipping back to a station slide mid-round to remind a group of the task, and survives a reload. Press Reset Lab on the rotation slide before running this with a different class. ' +
    'IF A CLASS IS ODD-SIZED, groups will not be perfectly equal — the shuffle deals names round-robin into 3 groups, so at most they differ by one student. That is deliberate; do not manually rebalance.',
}
