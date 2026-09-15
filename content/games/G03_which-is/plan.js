// content/games/G03_which-is/plan.js
// How to run Which Is…? with Year 1, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '30–40 minutes for all four stages; 10 minutes for one stage and its lesson',
  objective:
    'Students choose the right comparative for an adjective by counting its claps (syllables). One clap takes er (tall → taller, '
    + 'big → bigger). Three claps take more (beautiful → more beautiful). Two claps ending in y take ier (heavy → heavier); other '
    + 'two-clap words take more (boring → more boring). They hear, and then say, the whole sentence: "An elephant is bigger than an ant."',
  materials: [
    'Projector / TV — press Project for the big version',
    'A clear space: the left wall and the right wall of the room, with a path down the middle',
    'Nothing to print',
  ],
  vocab: [
    { term: 'Which is bigger?', def: 'the question on every round. Read it out loud twice, and point at the orange word.' },
    { term: 'clap', def: 'one syllable. Clap the plain word, not the new one: clap "big", not "bigger".' },
    { term: '___ is ___er than ___', def: 'the sentence on every reveal. The class says it together before the next round.' },
    { term: 'more', def: 'for long words. Never with er: "more bigger" is wrong.' },
  ],
  timeline: [
    { time: '0–2 min', phase: 'Set up', detail: 'Choose a stage (start at 1) and a timer. 10 seconds is right for most rooms. Use 15 for the first stage, while they learn where to walk.' },
    { time: '2–5 min', phase: 'Lesson 1: one clap', detail: 'Everyone sitting. Say each word and clap it together: big, tall, fast. Then add er, and look at the spelling: big → bigger, hot → hotter, nice → nicer. Last page is "Stand up! Play".' },
    { time: '5–12 min', phase: 'Stage 1', detail: 'Read the question twice. Children walk to the left or right wall (the screen\'s left is their left). Timer beeps 3-2-1 and a long beep means stop. Press Show the answer. The wrong side sits down where they are. The class says the sentence. Next round.' },
    { time: 'one left', phase: 'Winner', detail: 'Press We have a winner. Then Next lesson — everybody sits for the lesson and stands up again to play.' },
    { time: '12–20 min', phase: 'Lesson 2 + Stage 2', detail: 'Three claps: beau·ti·ful, dan·ger·ous, ex·pen·sive → more. The page "Never both!" matters most: more bigger ✗, bigger ✓.' },
    { time: '20–30 min', phase: 'Lesson 3 + Stage 3', detail: 'Two claps is the tricky one. Ends in y → change y to i and add er (heavy → heavier). No y → more (boring → more boring).' },
    { time: '30–40 min', phase: 'Stage 4: everything', detail: 'One recap page, then all 107 questions mixed. Before each reveal ask one sitting child: "er or more? How many claps?"' },
  ],
  answers: [
    { q: 'What if everyone standing picks the wrong side?', a: 'Nobody sits down. Play the next round.' },
    { q: 'What if two children are left and they both go the right way every time?', a: 'Keep going — the questions reshuffle when a stage runs out. Or call it a tie and press We have a winner.' },
    { q: 'The children who sat down', a: 'Keep them working. After Show the answer, they say the sentence with the class. Between rounds, ask a sitting child "How many claps?"' },
    { q: 'Where are the answers?', a: 'Every reveal shows the full sentence with the comparative in orange, and the plain word in claps beside it: big ● → bigger.' },
    { q: 'Keyboard', a: 'Space or Enter: next lesson page, show the answer, next round. Tap the timer to stop it or run it again.' },
    { q: 'Stage sizes', a: 'One clap: 54 questions. Three claps: 24. Two claps: 29. Everything: all 107.' },
    { q: 'Two-clap words that break the rule', a: 'quiet → quieter, clever → cleverer, simple → simpler. They are correct English, so none of them are in the game. If a child asks, say "some two-clap words are different — we learn those later."' },
  ],
  notes:
    'EACH STAGE HAS ITS OWN WINNER. Everybody stands up again after each lesson. One long game would be down to three children '
    + 'by round fifteen, and the other twenty would sit through the lessons on "more" with nothing to play for.\n\n'
    + 'THE SIDE IS RANDOM EVERY ROUND. There is no pattern to follow, so the children who follow their friends sit down fast. '
    + 'Say that once and let it happen.\n\n'
    + 'CLAP THE PLAIN WORD. "Bigger" has two claps and still takes er, because "big" has one. Every lesson row and every reveal '
    + 'shows the plain word with its dots for this reason.\n\n'
    + 'EVERY QUESTION CAN BE DECIDED FROM THE PICTURES. Nothing is an opinion — no "more beautiful: butterfly or spider". A child '
    + 'who sits down for an opinion has been cheated. Some are silly on purpose ("A fish is wetter than a cat"). Read them straight.\n\n'
    + 'Comfortable has four claps (com·for·ta·ble). It is in the three-clap stage, because the rule is "three claps or more".\n\n'
    + 'VIETNAMESE only adds a small gloss under the English: the question, the words and the sentence. Everything the class '
    + 'reads stays in English. Switch to it to unstick a word, then switch back.\n\n'
    + 'The ninety photographs are copies of the Word Wall tiles, with their credits in content/games/G03_which-is/images/CREDITS.json. '
    + 'Most are CC BY or CC BY-SA, so keep that file with the pictures.',
}
