// content/games/G02_jeopardy/plan.js
// How to actually run Jeopardy in front of a class, rendered by
// src/pages/Plan.jsx. It is a revision lesson or a plenary, not new teaching.
export const plan = {
  duration: '20–25 minutes (half a board), or a full 50-minute revision lesson (one whole board)',
  objective:
    'Students recall and SAY, in English, what they were taught in Mathematics 1.1–1.3 (adding and subtracting integers, the four sign '
    + 'rules, multiples and the lowest common multiple) and Science 1.1–1.3 (cells and organelles, plant versus animal cells, specialised '
    + 'cells). The clues are written so that the wording is the difficulty, not the arithmetic — "subtract 5 from 8", "the difference '
    + 'between", "common", "similar" — and every answer is expected as a full English sentence, not a pointed finger.',
  materials: [
    'Projector / TV — press Project for the big version',
    'Mini whiteboards + markers (one per team), so every team answers every clue instead of the fastest hand winning',
    'Nothing to print; nothing for students to copy down',
  ],
  vocab: [
    { term: 'I think the answer is ___ because ___', def: 'the sentence frame the whole game runs on. Never accept a bare number.' },
    { term: 'We would like ___ for 300', def: 'how a team chooses. Make them say the category name in English — it is free vocabulary practice.' },
    { term: 'Command words', def: 'the clues use the book\'s own verbs — name, state, explain, work out, finish the sentence. Point that out at least once.' },
    { term: 'Show your working', def: 'on the maths board, a right answer with no calculation written on the whiteboard scores nothing.' },
  ],
  timeline: [
    { time: '0–3 min', phase: 'Set up', detail: 'Choose a board — Mathematics 1.1–1.3, Science 1.1–1.3, or the Revision board that runs one category per unit across all six. Then type the team names. Two to six teams; four teams of six is about right for a class of 24.' },
    { time: '3–5 min', phase: 'The rules', detail: 'A team chooses a category and a value in English. EVERY team writes an answer on a whiteboard — that is what keeps the other twenty students in the game. Boards up together, then the answer is revealed. Any team that had it right gets the points, so several teams can score on one clue.' },
    { time: '5–10 min', phase: 'The 100s', detail: 'Start along the top row. The 100s are recall in one word; they exist to get every team on the scoreboard and to set the sentence frame before the questions get long.' },
    { time: '10–40 min', phase: 'Play', detail: 'Work down the values. Use the 30-second timer once the class is warm — it is off by default and started by hand, because early on the thinking time matters more than the pressure. Read every clue aloud twice, and make the answering team read it back before they answer if the English is the problem.' },
    { time: 'each reveal', phase: 'Make them justify it', detail: 'Before pressing Show the answer, ask the room "why?" The revealed answer usually carries the reason as well as the fact — read that reason out, and have the class repeat it. The reason is the revision; the points are the excuse.' },
    { time: '40–47 min', phase: 'The 500s', detail: 'The bottom row is full-sentence work: prove that "two negatives make a positive" is only half true, explain why a root hair cell has no chloroplasts, finish "adapted to ___ because it has ___". Slow down here — one 500 is worth five 100s in teaching value as well as in points.' },
    { time: '47–50 min', phase: 'Final scores', detail: 'Press Finish (or let the last clue run out) for the ranked scoreboard. Then ask the losing team for the one clue they wish they had taken, and re-ask it. Nobody leaves on a wrong answer.' },
  ],
  answers: [
    { q: 'Where the clues come from', a: 'Every clue is drawn from the deck for that unit — the same numbers, the same traps, the same worked examples. Nothing new is introduced, so a team that revised can win.' },
    { q: 'Maths board · the traps', a: '"Subtract 5 from 8" is 8 − 5 (the word "from" marks the starting number). "The difference between −3 and 4" is 7, not −7. 20 ÷ (−3 + −2) = −4, because the bracket holds an ADDITION. LCM(4, 8) = 8, not 32. The durian question costs nothing, because he buys zero.' },
    { q: 'Maths board · the one that matters most', a: '"Two negatives make a positive" — TRUE for × and ÷ (−3 × −4 = 12), FALSE for + (−3 + −4 = −7). If the class gets only one clue right all lesson, make it that one.' },
    { q: 'Science board · the traps', a: 'The Rhoeo cells are purple with no chloroplasts and are still PLANT cells — the cell wall is the test, not the colour green. Onion cells have walls but no chloroplasts because they grow in the dark. The red blood cell has no nucleus, so "every cell has a nucleus" is wrong.' },
    { q: 'Science board · the full-sentence answers', a: '"A red blood cell is adapted to carry oxygen because it is full of haemoglobin." "Similar" means alike in some ways AND different in others — it does not mean "the same".' },
    { q: 'Revision board', a: 'Six categories, one per unit: Maths 1.1, 1.2, 1.3 and Science 1.1, 1.2, 1.3. Different clues from the other two boards, so a class can play the Maths board on Monday and still meet fresh questions on Friday.' },
    { q: 'Awarding points', a: 'Tap every team that had it right, then Confirm. Tap nobody and Confirm records that nobody got it — the clue is spent and no points move.' },
  ],
  notes:
    'This is a REVISION game, not new teaching. Run it the lesson before a test, or as the last twenty minutes of a Friday — the '
    + 'clues assume the unit has already been taught.\n\n'
    + 'Every team writes every answer. The single biggest failure mode of a quiz game in this room is that one confident student '
    + 'answers everything in English while twenty-three quietly stop listening; mini whiteboards, boards up together, fixes it.\n\n'
    + 'Make them say the category and the value out loud in English to choose. It costs three seconds and it is the only part of '
    + 'the lesson where they produce language without being asked a question.\n\n'
    + 'The timer is optional and starts by hand, so use it for the 100s and 200s and turn it off for the 500s. A 500 needs a '
    + 'sentence, and thirty seconds is not long enough to build one in a second language.\n\n'
    + 'Points can go to more than one team on the same clue. Do not turn this into a race for the buzzer — the game is about '
    + 'being right in English, not about being first.\n\n'
    + 'Switch the deck to Vietnamese only to unstick a team that is stuck on the WORDING, then switch straight back and make '
    + 'them answer in English. Read the clue in English first, always.',
}
