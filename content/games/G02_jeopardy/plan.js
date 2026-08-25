// content/games/G02_jeopardy/plan.js
// How to actually run Jeopardy in front of a class, rendered by
// src/pages/Plan.jsx. It is a revision lesson or a plenary, not new teaching.
export const plan = {
  duration: '20–25 minutes (half a board), or a full 50-minute revision lesson (one whole board)',
  objective:
    'Students recall and SAY, in English, what they were taught in Mathematics 1.1–1.6 (adding and subtracting integers, the four sign '
    + 'rules, multiples and the LCM, factors and the HCF, the divisibility tests, squares, cubes and roots) and Science 1.1–1.4 (cells and '
    + 'organelles, plant versus animal cells, specialised cells, and the ladder from cell to organism). The clues are written so that the '
    + 'wording is the difficulty, not the arithmetic — "subtract 5 from 8", "the difference between", "common", "highest", "consecutive", '
    + '"similar" — and every answer is expected as a full English sentence, not a pointed finger.',
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
    { time: '0–3 min', phase: 'Set up', detail: 'Choose a board — Mathematics 1.1–1.3, Science 1.1–1.3, the Revision board that runs one category per unit across all six, or the Unit 1 Finale (Maths 1.4–1.6, Science 1.4, and two rounds of trivia). Then type the team names. Two to six teams; four teams of six is about right for a class of 24.' },
    { time: '3–5 min', phase: 'The rules', detail: 'A team chooses a category and a value in English. EVERY team writes an answer on a whiteboard — that is what keeps the other twenty students in the game. Boards up together, then the answer is revealed. Any team that had it right gets the points, so several teams can score on one clue.' },
    { time: '5–10 min', phase: 'The 100s', detail: 'Start along the top row. The 100s are recall in one word; they exist to get every team on the scoreboard and to set the sentence frame before the questions get long.' },
    { time: '10–40 min', phase: 'Play', detail: 'Work down the values. The 30-second timer starts by itself when a clue opens, with the music, so the room can hear the clock without watching it — tap the countdown to stop it whenever a clue needs more thinking than pressure. Read every clue aloud twice, and make the answering team read it back before they answer if the English is the problem.' },
    { time: 'each reveal', phase: 'Make them justify it', detail: 'Before pressing Show the answer, ask the room "why?" The revealed answer usually carries the reason as well as the fact — read that reason out, and have the class repeat it. The reason is the revision; the points are the excuse.' },
    { time: '40–47 min', phase: 'The 500s', detail: 'The bottom row is full-sentence work: prove that "two negatives make a positive" is only half true, explain why a root hair cell has no chloroplasts, say why the book wants the LOWEST multiple but the HIGHEST factor, give the two meanings of "tissue" in a sentence each. Slow down here — one 500 is worth five 100s in teaching value as well as in points.' },
    { time: '47–50 min', phase: 'Final scores', detail: 'Press Finish (or let the last clue run out) for the ranked scoreboard. Then ask the losing team for the one clue they wish they had taken, and re-ask it. Nobody leaves on a wrong answer.' },
  ],
  answers: [
    { q: 'Where the clues come from', a: 'Every clue is drawn from the deck for that unit — the same numbers, the same traps, the same worked examples. Nothing new is introduced, so a team that revised can win.' },
    { q: 'Maths board · the traps', a: '"Subtract 5 from 8" is 8 − 5 (the word "from" marks the starting number). "The difference between −3 and 4" is 7, not −7. 20 ÷ (−3 + −2) = −4, because the bracket holds an ADDITION. LCM(4, 8) = 8, not 32. The durian question costs nothing, because he buys zero.' },
    { q: 'Maths board · the one that matters most', a: '"Two negatives make a positive" — TRUE for × and ÷ (−3 × −4 = 12), FALSE for + (−3 + −4 = −7). If the class gets only one clue right all lesson, make it that one.' },
    { q: 'Science board · the traps', a: 'The Rhoeo cells are purple with no chloroplasts and are still PLANT cells — the cell wall is the test, not the colour green. Onion cells have walls but no chloroplasts because they grow in the dark. The red blood cell has no nucleus, so "every cell has a nucleus" is wrong.' },
    { q: 'Science board · the full-sentence answers', a: '"A red blood cell is adapted to carry oxygen because it is full of haemoglobin." "Similar" means alike in some ways AND different in others — it does not mean "the same".' },
    { q: 'Revision board', a: 'Six categories, one per unit: Maths 1.1, 1.2, 1.3 and Science 1.1, 1.2, 1.3. Different clues from the Maths and Science boards, so a class can play one on Monday and still meet fresh questions on Friday.' },
    { q: 'Finale board · what is on it', a: 'Six categories: Factors & the HCF (Maths 1.4), Divisible By (1.5), Squares & Roots (1.6), Cells to Organisms (Science 1.4), and two trivia rounds — Animal Records, and Big Numbers, Weird Facts. It is the board for the end of the unit, when 1.1–1.3 have already been played.' },
    { q: 'Finale board · the maths traps', a: 'HCF(8, 9) = 1, never "none", because 1 is a factor of everything. HCF(6, 18) = 6, not 1, because 6 divides into 18. 10 is even and is NOT divisible by 6 — the test for 6 is both tests at once. 5² = 25, not 10. √45 sits between 6 and 7. The 500 is 144: the only squares between 100 and 200 are 121 and 144, and 12 is the multiple of 3.' },
    { q: 'Finale board · the two language beats', a: 'Divisible By 400 — "6 is a factor of 24", "24 is divisible by 6", "24 is a multiple of 6" are ONE division fact in three sentences. Cells to Organisms 500 — "a tissue" is a paper handkerchief and countable; "muscle tissue" is a group of similar cells and is not. Both want full sentences, out loud.' },
    { q: 'Finale board · Science 1.4', a: 'A tissue is SIMILAR cells; an organ is DIFFERENT tissues, which is why a leaf is an organ (four tissues in it) and the palisade layer is not. The ladder is cell → tissue → organ → organ system → organism, walked by one example: ciliated cell → ciliated epithelium → a lung → the breathing system → you.' },
    { q: 'Finale board · the trivia answers', a: 'Blue whale (largest ever, about 30 m) · peregrine falcon, about 390 km/h in a dive, with the cheetah only fastest on land · a giraffe has seven neck bones, the same as you · the octopus has three hearts and copper-based blue blood · the tardigrade survives freezing, drying out and open space. Then: 3600 seconds in an hour · 206 bones in an adult and about 300 in a newborn · sunlight takes about 8 minutes 20 seconds · a billion seconds is about 32 years · paper 0.1 mm thick folded 42 times passes the Moon.' },
    { q: 'Awarding points', a: 'Tap every team that had it right, then Confirm. Tap nobody and Confirm records that nobody got it — the clue is spent and no points move.' },
    { q: 'Fixing a score', a: 'Edit scores, in the board header. Every team gets −500, −100, a typed box, +100 and +500. Negative totals are allowed, because a team that has been caught guessing usually deserves one.' },
    { q: 'Turning the sound off', a: 'The speaker button beside Edit scores, at any time. To change which piece plays, or to stop the timer starting on its own, go back to Setup — both live there.' },
  ],
  notes:
    'This is a REVISION game, not new teaching. Run it the lesson before a test, or as the last twenty minutes of a Friday — the '
    + 'clues assume the unit has already been taught.\n\n'
    + 'THE FINALE BOARD IS THE ONE WITH TRIVIA ON IT, and the trivia is not a reward or a break. A board made only of the taught '
    + 'units hands the whole game to the three strongest mathematicians in the room and the other twenty-one stop speaking. Animal '
    + 'Records and Big Numbers are answerable by anyone, and they are still worked in English — a sentence, a reason, a number. Same '
    + 'frame, same whiteboards, same "why?". Do not let them turn into shout-outs.\n\n'
    + 'Every team writes every answer. The single biggest failure mode of a quiz game in this room is that one confident student '
    + 'answers everything in English while twenty-three quietly stop listening; mini whiteboards, boards up together, fixes it.\n\n'
    + 'Make them say the category and the value out loud in English to choose. It costs three seconds and it is the only part of '
    + 'the lesson where they produce language without being asked a question.\n\n'
    + 'THE TIMER NOW STARTS ITSELF, and so does the music. That is right for the 100s and 200s, where the clock is about pace. '
    + 'It is wrong for the 500s: a 500 needs a sentence, and thirty seconds is not long enough to build one in a second '
    + 'language. Tap the countdown to stop it — the music fades with it — or untick "The timer starts by itself" in Setup '
    + 'before a lesson that is all bottom row. The speaker button in the board header kills the sound at any moment.\n\n'
    + 'THE MUSIC IS FIVE FREE TRACKS, chosen in Setup, and TAPPING ONE PLAYS IT — audition them at your desk before the class '
    + 'arrives rather than finding out in front of them. Boss Battle (8-bit, heavy, save it for the 500s), Slay The Evil '
    + '(8-bit, fast and bright, right for the 100s), Time Attack (chiptune, and the whole track is only forty seconds), '
    + 'R2D2 Plays Bass (funk, the one for the trivia categories) and Current (phonk and synthwave, which is the genre this '
    + 'age group actually listens to). Only the first 30 seconds of any of them ever plays.\n\n'
    + 'THE TELEVISION SHOW\'S COUNTDOWN CUE IS NOT HERE and cannot be. It is still in copyright, and a re-recorded "free '
    + 'version" of it is a cover of a protected tune rather than a way round it — the chiptune boss music is the honest '
    + 'substitute, and it does the same job in the room. Four of the five tracks are CC0; Current is CC BY, so the artist '
    + 'name (WhiteWhyne) has to travel with it. All of it is in content/games/G02_jeopardy/audio/CREDITS.json.\n\n'
    + 'SCORES CAN BE CORRECTED. Press Edit scores in the board header for a panel with every team on it: steps of 100 and 500, '
    + 'or type the number straight in. Use it when you tap the wrong team, when the class argues you into a mark, or when a '
    + 'team joins late — a scoreboard that cannot be fixed is a scoreboard the room stops believing in.\n\n'
    + 'Points can go to more than one team on the same clue. Do not turn this into a race for the buzzer — the game is about '
    + 'being right in English, not about being first.\n\n'
    + 'Switch the deck to Vietnamese only to unstick a team that is stuck on the WORDING, then switch straight back and make '
    + 'them answer in English. Read the clue in English first, always.',
}
