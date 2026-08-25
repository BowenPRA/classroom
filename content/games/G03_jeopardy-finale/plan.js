// content/games/G03_jeopardy-finale/plan.js
// How to actually run the Unit 1 finale board in front of a class, rendered by
// src/pages/Plan.jsx. It is a revision lesson or a plenary, not new teaching.
export const plan = {
  duration: '25 minutes (three categories), or a full 50-minute revision lesson (all six)',
  objective:
    'Students recall and SAY, in English, what they were taught in Mathematics 1.4–1.6 (factors and the highest common factor, '
    + 'the nine divisibility tests, squares, cubes and their roots) and Science 1.4 (tissue, organ, organ system, organism). '
    + 'The clues are written so that the wording is the difficulty, not the arithmetic — "highest", "consecutive", "divisible by", '
    + '"similar" against "different" — and every answer is expected as a full English sentence. The two trivia categories are the '
    + 'same exercise with the maths taken out: a fact, a number, and a reason, produced out loud in English by the students who '
    + 'find the maths hardest.',
  materials: [
    'Projector / TV — press Project for the big version',
    'Mini whiteboards + markers (one per team), so every team answers every clue instead of the fastest hand winning',
    'Nothing to print; nothing for students to copy down',
  ],
  vocab: [
    { term: 'I think the answer is ___ because ___', def: 'the sentence frame the whole game runs on. Never accept a bare number — and never accept a bare animal, either.' },
    { term: 'We would like ___ for 300', def: 'how a team chooses. Make them say the category name in English — it is free vocabulary practice.' },
    { term: 'Command words', def: 'the clues use the book\'s own verbs — list, find, say why, work out, put in order. Point that out at least once.' },
    { term: 'Show your working', def: 'on the three maths categories, a right answer with no working on the whiteboard scores nothing.' },
    { term: 'Roughly / about', def: 'the trivia answers are approximate on purpose. "About 32 years" is right; demanding an exact number is not the point.' },
  ],
  timeline: [
    { time: '0–3 min', phase: 'Set up', detail: 'One board here, already selected — type the team names and start. Two to six teams; four teams of six is about right for a class of 24.' },
    { time: '3–5 min', phase: 'The rules', detail: 'A team chooses a category and a value in English. EVERY team writes an answer on a whiteboard — that is what keeps the other twenty students in the game. Boards up together, then the answer is revealed. Any team that had it right gets the points, so several teams can score on one clue.' },
    { time: '5–10 min', phase: 'The 100s', detail: 'Start along the top row. The 100s are recall in one line — the factors of 12, the number with no test, 9², what a tissue is, the blue whale, seconds in an hour. They exist to get every team on the scoreboard and to set the sentence frame before the questions get long.' },
    { time: '10–20 min', phase: 'The maths spine', detail: 'Work down Factors & the HCF, Divisible By and Squares & Roots. Four of those fifteen clues are the traps the decks were built around: HCF(8, 9) = 1 and not "none", HCF(6, 18) = 6 and not 1, 10 is even and still not divisible by 6, and 5² is 25 and not 10. Let the teams commit on whiteboards before you reveal — a trap caught here is a mark saved on the test.' },
    { time: '20–30 min', phase: 'Science, and the ladder', detail: 'Cells to Organisms. The 300 (a leaf is an organ, not a tissue) and the 400 (the five levels in order) are the two that decide whether 1.4 landed. On the 400, make one team say the whole ladder out loud with the example attached — cell, tissue, organ, organ system, organism — rather than just listing five words.' },
    { time: '30–42 min', phase: 'Trivia', detail: 'Animal Records and Big Numbers, Weird Facts. Same rules, same sentence frame, and no easier in English — "Which animal has three hearts and blue blood?" is a full comprehension question. Take an estimate from every team before revealing the 400s and 500s; a wrong guess out loud is worth more than a silent right one.' },
    { time: 'each reveal', phase: 'Make them justify it', detail: 'Before pressing Show the answer, ask the room "why?" The revealed answer usually carries the reason as well as the fact — read that reason out, and have the class repeat it. The reason is the revision; the points are the excuse.' },
    { time: '42–47 min', phase: 'The 500s', detail: 'The bottom row is full-sentence work: why the book wants the lowest multiple but the highest factor, the missing digit and why it is the only one, the two meanings of "tissue" in a sentence each. Slow down here — one 500 is worth five 100s in teaching value as well as in points.' },
    { time: '47–50 min', phase: 'Final scores', detail: 'Press Finish (or let the last clue run out) for the ranked scoreboard. Then ask the losing team for the one clue they wish they had taken, and re-ask it. Nobody leaves on a wrong answer.' },
  ],
  answers: [
    { q: 'Where the clues come from', a: 'The four teaching categories are drawn from the decks for Maths 1.4, 1.5, 1.6 and Science 1.4 — the same numbers, the same traps, the same worked examples. Nothing new is introduced, so a team that revised can win.' },
    { q: 'Maths 1.4 · the traps', a: 'HCF(8, 9) = 1, never "none", because 1 is a factor of every number. HCF(6, 18) = 6, not 1, because 6 divides into 18. The 500 is the language beat: multiples never stop so there is no highest, factors stop so there is one — and the lowest common factor is always 1, which carries no information.' },
    { q: 'Maths 1.5 · the traps', a: '7 is the number with no usable test — that is a fact about 7, not a gap in their notes. 10 is even and is NOT divisible by 6: the test for 6 is both tests at once. The 400 is the English beat — "6 is a factor of 24", "24 is divisible by 6", "24 is a multiple of 6" are one division fact in three sentences.' },
    { q: 'Maths 1.6 · the traps', a: '5² = 25, not 10 — the small 2 counts the fives, it does not double. 64 sits on both lists: √64 = 8 and ∛64 = 4. √45 is between 6 and 7 because 36 < 45 < 49. The 500 is 144: the only squares between 100 and 200 are 121 and 144, and 12 is the multiple of 3.' },
    { q: 'Science 1.4 · the traps', a: 'A leaf is an ORGAN — four different tissues in one leaf. A tissue is SIMILAR cells; an organ is DIFFERENT tissues. The ladder is cell → tissue → organ → organ system → organism, and the example that walks all five is the ciliated cell they drew in 1.3.' },
    { q: 'Animal Records · the facts', a: 'Blue whale, about 30 m, the largest animal ever. Peregrine falcon, about 390 km/h in a dive — the cheetah is only fastest on land. A giraffe has seven neck bones, the same as a human. An octopus has three hearts and copper-based blue blood. The tardigrade survives freezing, drying out and open space, and was flown in orbit in 2007.' },
    { q: 'Big Numbers · the facts', a: '3600 seconds in an hour, 86 400 in a day. An adult has 206 bones and a newborn about 300, because some fuse as you grow. Sunlight takes about 8 minutes 20 seconds to reach us. A billion seconds is about 32 years. Paper 0.1 mm thick folded 42 times is about 440 000 km — past the Moon, which is 384 000 km away.' },
    { q: 'Awarding points', a: 'Tap every team that had it right, then Confirm. Tap nobody and Confirm records that nobody got it — the clue is spent and no points move.' },
  ],
  notes:
    'This is a REVISION game, not new teaching. Run it the lesson before the end-of-unit test, or as the last half of a Friday — '
    + 'the clues assume Maths 1.4, 1.5, 1.6 and Science 1.4 have already been taught.\n\n'
    + 'The two trivia categories are not a reward and not a break. They are there because a quiz made only of the four taught units '
    + 'hands the whole game to the three strongest mathematicians in the room, and the other twenty-one stop speaking. Animal Records '
    + 'and Big Numbers are answerable by anyone, and they are still answered in English, in a sentence, with a reason — which is the '
    + 'thing this class actually needs to practise. Do not let them become shout-outs: same frame, same whiteboards, same "why?".\n\n'
    + 'Every team writes every answer. The single biggest failure mode of a quiz game in this room is that one confident student '
    + 'answers everything in English while twenty-three quietly stop listening; mini whiteboards, boards up together, fixes it.\n\n'
    + 'Make them say the category and the value out loud in English to choose. It costs three seconds and it is the only part of '
    + 'the lesson where they produce language without being asked a question.\n\n'
    + 'The timer is optional and starts by hand, so use it for the 100s and 200s and turn it off for the 500s. A 500 needs a '
    + 'sentence, and thirty seconds is not long enough to build one in a second language.\n\n'
    + 'Points can go to more than one team on the same clue. Do not turn this into a race for the buzzer — the game is about '
    + 'being right in English, not about being first.\n\n'
    + 'Switch the deck to Vietnamese only to unstick a team that is stuck on the WORDING, then switch straight back and make '
    + 'them answer in English. Read the clue in English first, always.\n\n'
    + 'If you are short of time, play Factors & the HCF, Divisible By and Squares & Roots down to 300 and finish on one trivia '
    + 'category — that is about twenty-five minutes and still ends the lesson with the whole room talking.',
}
