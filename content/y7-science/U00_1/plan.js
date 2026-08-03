// content/y7-science/U00_1/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
// This one covers a whole day rather than a single period — homeroom, the
// science period and the maths period — because the day only works if the
// three run as one sequence.
export const plan = {
  duration: 'Whole day · homeroom 15 min + Science 50 min + Mathematics 50 min',
  objective:
    'Students know each other and their teacher by name, understand the class expectations well enough to explain them at home, ' +
    'leave with a correctly set up binder and a named Learner\'s Book, and sit the Stage 6 diagnostic under proper conditions.',
  materials: [
    'Projector / TV for the lesson deck',
    'Three small slips of paper per student, cut and on the desks before 8:30',
    'A bin, box or bag to collect the folded slips',
    'One printed expectation letter per student (plus a few spares)',
    'One binder + one folder per student; three plastic sleeves per student',
    'A roll of masking tape and a marker pen for the Learner\'s Book covers',
    'Class set of Cambridge Learner\'s Books (Maths and Science)',
    'Printed Stage 6 diagnostic papers, face down, one per desk',
    'Spare pencils and erasers',
  ],
  vocab: [
    { term: 'Homeroom', def: 'the 15 minutes at 8:30 where the day is set up — attendance, planner, notices' },
    { term: 'Planner', def: 'the student-family book that carries deadlines to your family and feedback back to me' },
    { term: 'Expectations', def: 'what we have agreed to do, written down, so nobody has to guess' },
    { term: 'Diagnostic', def: 'questions used to find out what you already know, so teaching starts in the right place — not graded' },
    { term: 'Full sentence', def: 'a subject and a verb — "I am really good at…", not "football"' },
  ],
  timeline: [
    { time: '8:30–8:45', phase: 'Homeroom', detail: 'Slips are already on the desks — slide 1 tells them to take three and write no names. Three facts about Mr Bowen, one false (the 10.68 km one, which is a deliberate hook for tomorrow\'s Science lesson). Then the schedule widget: tap the four teal rows and have the class read the times back. Close on the four homeroom habits.' },
    { time: '8:45–9:00', phase: 'Science · the bin game', detail: 'Question widget, one question at a time, three minutes each on the timer — do NOT show all three at once. Then the sentence-not-a-word slide before any slip is collected; it is the rule for the year. Fold, collect in the bin. Run rounds with the phase widget: read twice, count three-two-one, everybody points, writer stands and repeats it aloud. Mr Bowen\'s own answers slide is the model — play it straight.' },
    { time: '9:00–9:18', phase: 'Science · the expectation letter', detail: 'Seven slides, one letter section each, students following on their own printed copy. Stop on any word a hand goes up for. The two that matter most are Literacy (why the computers stay shut) and Supplies (required from tomorrow). Do not rush section 7 — it is the one families get asked about.' },
    { time: '9:18–9:35', phase: 'Science · binder setup', detail: 'Everybody stands. Four jobs, one at a time, whole room finishing each step before the next: name on binder and folder, three sleeves (Math, Science, English), letter at the very front, taped name on the Learner\'s Book. Finish with the hold-it-up checklist and actually check all five from the front of the room.' },
    { time: '10:45–10:52', phase: 'Maths · framing the diagnostic', detail: 'Desks cleared to pencil and eraser. The "this is not a test" slide, then the diagnostic definition, then the reveal about marking it tonight. Then the four rules — the one to labour is that they may put a hand up if they cannot READ a word. Then the four-step word-problem routine; leave that slide up on the board during the paper.' },
    { time: '10:52–11:32', phase: 'Maths · the paper', detail: 'Papers face down, 40 minutes, silence. Circulate constantly. Read words aloud on request; do not explain method. Note who freezes, who leaves blanks, and who finishes in fifteen minutes — all three tell you something.' },
    { time: '11:32–11:35', phase: 'Close', detail: 'Collect papers. What-happens-next slide, the six-item day-one checklist, and the three homework jobs. Close on the last hero slide.' },
  ],
  answers: [
    { q: 'Which of the three facts is false?', a: 'Number 3 — 10.68 km. Mr Bowen is 178 cm. The number returns in Science 1.1 tomorrow as the answer to the soda-can challenge.' },
    { q: 'What are the four times to know?', a: '8:00 arrival · 8:30 homeroom · 8:45 Science · 10:45 Mathematics.' },
    { q: 'Where does the phone go?', a: 'Reception, on arrival. Collected at the end of the day.' },
    { q: 'What goes at the very front of the binder?', a: 'The signed expectation letter, before the three sleeves.' },
    { q: 'What is the difference between a test and a diagnostic?', a: 'A test asks how much you learned. A diagnostic asks what should be taught first. The diagnostic is not graded and does not go home.' },
    { q: 'Can students ask for help during the diagnostic?', a: 'Only to have a word READ to them. Never to have a method explained.' },
  ],
  notes:
    'The barrier in this class is English, not arithmetic — so day one is built to establish the sentence rule before any content arrives. ' +
    'The bin game is the vehicle: a one-word slip is unguessable, which makes "answer in full sentences" the students\' problem rather than the teacher\'s rule. ' +
    'Two slides are marked "Every class is an English class" (a sentence not a word, and how to read a word problem) — those carry the year\'s theme. ' +
    'Anonymity is the whole game: if names appear on slips, or students show each other, the round is dead. Say it twice before they write. ' +
    'Have a plan for a slip that is unkind or identifies someone — read it, do not attribute it, move on, and follow up privately at lunch. ' +
    'Binder setup always overruns. If it does, cut the Mr Bowen answers slide, not the checklist — the checklist is the only thing that catches an unnamed folder. ' +
    'The diagnostic is the pacing decision for the whole of Quarter 1 (see the year plan: Maths Units 1–4 is the tightest stretch of the year), so mark it tonight, not at the weekend. ' +
    'No images in this deck — both figures are authored SVG in diagrams.js, so there is nothing to license.',
}
