// content/games/G04_around-the-world/plan.js
// How to run Around the World with Year 7, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '15–25 minutes: about one lap of a class of 24, which is 25–35 questions',
  objective:
    'Students answer Maths 1.1–3.2 questions out loud, in English, under the gentle pressure of a one-on-one race. Half of the '
    + 'questions are the English of the units — "subtract 5 from 8", "the difference between", "correct to 2 d.p.", "under 18" — '
    + 'and every trap the decks voted on is in there with new numbers. The race makes them decode the sentence fast, which is '
    + 'exactly the skill a test question needs.',
  materials: [
    'Projector / TV — press Full screen (or F) for the big version',
    'A clicker if you have one: PageDown shows the answer, then the next question',
    'Nothing to print; no whiteboards needed',
  ],
  vocab: [
    { term: 'traveller', def: 'the student standing up. They move to the next desk every time they win.' },
    { term: 'challenger', def: 'the seated student the traveller stands behind. If they win, they become the traveller.' },
    { term: 'I think it is ___', def: 'the frame for a word answer. A number on its own is fine for a bare calculation, said in English: "negative ten", not "minus ten".' },
  ],
  timeline: [
    { time: '0–1 min', phase: 'Choose the units', detail: 'Tap the units you have taught, or a whole Unit at once. Start shows how many questions are in play. For a lap of a class of 24, choose at least one full unit (30 questions); two units if the room is fast.' },
    { time: '1–2 min', phase: 'The rules', detail: 'One student stands behind the student next to them. The question comes up. The first of the two to say the right answer in English wins. The winner travels to stand behind the next desk; the other sits in the seat. Nobody else answers.' },
    { time: 'each question', phase: 'Read, race, reveal', detail: 'Read the question aloud once, slowly, while the pair reads it. When one of them answers, press Space to show the answer. Read the grey line under it to the room: it is the reason, and the reason is the revision. Space again for the next question.' },
    { time: 'both wrong', phase: 'No winner', detail: 'If neither is right, show the answer anyway, read the reason, and give the same pair a fresh question. If you showed the answer too soon, the left arrow hides it again.' },
    { time: 'end', phase: 'Around the world', detail: 'A student who travels all the way back to their own seat has gone around the world. If nobody does in the time, the student who travelled furthest wins.' },
  ],
  answers: [
    { q: 'Keys', a: 'Space, Enter, the right arrow or a clicker\'s PageDown: show the answer, then the next question. Left arrow or PageUp: hide the answer, then go back a question. F: full screen. R still draws a random student, for choosing the first traveller.' },
    { q: 'Where the questions come from', a: 'The maths question bank (content/banks/y7-math): 30 per unit, 420 in all, written from the decks, the homework, the Workbook (with new numbers) and the Jeopardy maths boards. Every arithmetic answer is recomputed by npm run check:bank.' },
    { q: 'Repeats', a: 'None until every question in the chosen units has come up. Then the game says "All asked · shuffled again" and starts a fresh shuffle.' },
    { q: 'Vietnamese', a: 'The deck\'s VN toggle switches the question, the answer and the reason. Where the English IS the question ("Subtract 5 from 8"), the Vietnamese keeps that phrase in English, so switching never gives the answer away.' },
    { q: 'Which questions are hard', a: 'Each question has a level in the bank (1 recall, 2 the unit\'s core, 3 the trap). The game mixes them; the traps are where the room learns most, so take your time on those reveals.' },
  ],
  notes:
    'ONLY THE PAIR ANSWERS. The rest of the room will shout if you let them, and then the quickest three students answer every '
    + 'question. Everyone else may work it out silently and check against the reveal.\n\n'
    + 'THE ANSWER MUST BE IN ENGLISH. "Negative ten", not "âm mười" and not a pointed finger. A word question ("What does LCM '
    + 'stand for?") wants the words. If the first answer is right in Vietnamese, the other student may still win by saying it in '
    + 'English.\n\n'
    + 'READ THE REASON OUT LOUD after every reveal, and make the pair say it back on the trap questions. The race is only the '
    + 'excuse; the grey line under the answer is the revision.\n\n'
    + 'Choose units the class has actually been taught. Unit 3 questions in a room that has not done 3.2 is a race nobody can win.\n\n'
    + 'Read the deadpan questions completely straight (the snail, the goldfish called x, Mr Bowen\'s age). They are there to be '
    + 'read to the end before anyone calculates.',
}
