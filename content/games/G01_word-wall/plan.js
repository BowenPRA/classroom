// content/games/G01_word-wall/plan.js
// How to actually run Word Wall in front of a class, rendered by
// src/pages/Plan.jsx. The game is a starter or a plenary, not a whole lesson.
export const plan = {
  duration: '10–15 minutes (one puzzle), or a full 40 minutes across three',
  objective:
    'Students sort sixteen items into four hidden groups and say WHY the four belong together — building category vocabulary '
    + '(farm animals, clothes, weather, the kitchen, where food comes from), initial sounds and rhyme lower down, and Cambridge '
    + 'subject vocabulary plus deliberate wordplay traps at Year 7. Throughout: the habit of justifying a guess in English.',
  materials: [
    'Projector / TV — press Project for the big version',
    'Mini whiteboards, or thumbs up / thumbs down for voting on a guess',
    'Nothing to print; nothing for students to copy down',
  ],
  vocab: [
    { term: 'group / belong together', def: 'the sentence frame the whole game runs on: "These four belong together because they are all ___."' },
    { term: 'the same sound', def: 'for First Sounds — "They all start with the sss sound."' },
    { term: 'rhymes with', def: 'for Rhyme Time — "cat, hat, bat: they rhyme."' },
    { term: 'I think… because…', def: 'the answer stem. Never accept a pointed finger; make them finish the sentence.' },
  ],
  timeline: [
    { time: '0–1 min', phase: 'Choose', detail: 'Open the puzzle list and pick by band — amber is Kindergarten–Year 1 (six puzzles, four of them all pictures), sky is Year 1–4 (eleven word walls, roughly easiest first), violet is Year 7 (four walls, each with a baited tile).' },
    { time: '1–2 min', phase: 'Read the hint', detail: 'The amber line under the title says how this board sorts. Read it aloud twice. First Sounds is unfair without it — the pictures also group by meaning, and that is the trap.' },
    { time: '2–4 min', phase: 'Name everything', detail: 'Before any guessing, point at all sixteen tiles and have the class chorus each one. On a picture board this is the vocabulary lesson; the sorting is the check.' },
    { time: '4–10 min', phase: 'Play', detail: 'Take a guess from one child, then ask the class to vote before you press Check. Four hearts means four wrong guesses, so make them argue for it: "Why those four?" A wrong guess is the best moment in the game — the tiles shake, nobody is told off, and "so close, three of those go together" is a real clue.' },
    { time: 'as each group locks', phase: 'Read the reason', detail: 'A solved row prints the category, the four words and the reason. Read it out; have the class repeat the full sentence. That row is the learning, not the win.' },
    { time: 'end of a picture board', phase: 'Now read it', detail: 'Press "Show the words" and play the same board again, or just chorus the sixteen words now that the pictures are grouped. Sort first, read second.' },
    { time: 'Year 7 only', phase: 'Argue before you press', detail: 'The four violet walls each hide a tile that fits two groups — the hint says so. Do not accept a group until somebody has said which OTHER group it looked like and why it is wrong. That sentence is the whole exercise; the tiles are just the excuse for it.' },
  ],
  answers: [
    { q: 'Picture Sort', a: 'Farm animals: cow, pig, sheep, hen · Fruit: apple, banana, orange, grapes · Things that go: bus, car, boat, plane · Clothes: hat, shoe, sock, t-shirt' },
    { q: 'Read and Match', a: 'Pets: dog, cat, rabbit, bird · Toys: ball, teddy, doll, drum · Things we eat: bread, egg, cake, rice · Weather: sun, snow, rain, wind' },
    { q: 'First Sounds', a: 'S: sun, snake, sock, star · B: ball, bus, bed, bag · C: cat, cake, cup, car · M: moon, milk, map, mat' },
    { q: 'In the Kitchen', a: 'Cook with: pan, pot, wok, kettle · Eat with: spoon, fork, chopsticks, bowl · Machines: fridge, oven, microwave, toaster · Drinks: tea, coffee, water, juice' },
    { q: 'Good Food', a: 'Fruit: apple, banana, orange, grapes · Vegetables: carrot, potato, broccoli, onion · Sweet: cake, ice cream, biscuit, chocolate · From the sea: fish, prawn, crab, squid' },
    { q: 'Where Food Comes From', a: 'On a tree: apple, orange, banana, coconut · Under the ground: carrot, potato, onion, ginger · From a cow or hen: milk, cheese, egg, butter · Baked: bread, cake, biscuit, doughnut' },
    { q: 'Y7 · Talking About Number', a: 'Add: sum, total, plus, more · Subtract: minus, less, take, difference · Kinds of number: prime, SQUARE, CUBE, triangular · Solid shapes: prism, sphere, cone, pyramid. The bait is SQUARE and CUBE, which everyone puts with the shapes.' },
    { q: 'Y7 · Cells and Life', a: 'Every cell: nucleus, membrane, cytoplasm, mitochondria · Plant only: cell wall, chloroplast, vacuole, chlorophyll · Specialised cells: neurone, palisade, ciliated, root hair · Life processes: growth, movement, excretion, nutrition' },
    { q: 'Y7 · Stick a Word on the End', a: '+BALL: foot, base, eye, snow · +WORK: home, net, team, paper · +LIGHT: day, moon, high, FIRE · River: source, bed, bank, mouth. FIRE makes a real word with all three (fireball, firework, firelight) and is only pinned down once BALL and WORK are full — the classic Connections move.' },
    { q: 'Y7 · Every Class Is an English Class', a: 'Maths: table, power, root, volume · Science: cell, current, mass, solution · Command words: state, explain, describe, compare · "a lot": loads, heaps, tons, piles. Baits: MASS looks like "a lot", STATE looks like a state of matter, VOLUME and SOLUTION each look like the other subject.' },
    { q: 'Every other puzzle', a: 'Each group names itself, lists its four words and explains the link the moment it is solved — and "Show me the answers" opens the rest if the hearts run out.' },
    { q: 'The lower-school traps', a: 'Rhyme Time: SQUARE is a shape but belongs with the BEAR rhymes. Opposites and Animals: COW is a farm animal but belongs with the OW spellings. Let the class fall in; that is the lesson.' },
  ],
  notes:
    'Run it as a starter or a plenary, not as a whole lesson — one board is about ten minutes and a second one in the same '
    + 'sitting goes flat.\n\n'
    + 'The hearts are for tension, not for marking. When they run out, "Keep playing" gives unlimited tries and the class '
    + 'finishes the board; nobody should leave a puzzle unsolved.\n\n'
    + 'Kindergarten and Year 1 sit on the floor and point. Do not let a child touch the board before the class has voted — '
    + 'the talking is the whole point, and a fast clicker ends the thinking.\n\n'
    + 'The three early puzzles carry a Vietnamese gloss on every word: switch the deck to VN after solving, and the same '
    + 'solved rows print "COW (con bò)". Sort in English, confirm in Vietnamese, never the other way round.',
}
