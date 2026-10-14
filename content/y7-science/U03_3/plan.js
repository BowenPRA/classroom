// content/y7-science/U03_3/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration: '50 minutes, one period (Tuesday 20 October, provisional) — 25 slides',
  objective:
    'Students can explain that the Sun’s gravity keeps the planets in orbit and always pulls towards the Sun, ' +
    'and that without it a planet would go off in a straight line; draw a bar graph of the planets’ orbit speeds ' +
    'and say that speed decreases as the distance from the Sun increases, because the Sun’s pull is weaker; ' +
    'describe air resistance and a vacuum, and explain why objects moving in space do not slow down.',
  materials: [
    'Projector / TV for the lesson deck (no internet needed: every picture is saved in the deck)',
    'Learner’s Book, Unit 3.3, pages 91–96',
    'For the demo (slides 6–7): a SOFT ball on about 1 m of strong string — a tennis ball knotted into an old sock works well, or a foam ball or rubber bung. See the safety note below.',
    'Rulers and pencils for the bar graph (slide 11); squared paper if you have it, otherwise the notebook',
    'Mini whiteboards (slides 3, 10, 12, 22, 23)',
    'Their exercise books for the air-resistance test (slide 15)',
    'Student science notebooks',
  ],
  vocab: [
    { term: 'Orbit · l’orbite (f) / être en orbite', def: 'the path of an object going round another one; also the verb, "the Moon orbits the Earth" (a 3.2 key word)' },
    { term: 'Circular · circulaire', def: 'in the shape of a circle. The planets’ orbits are almost circular' },
    { term: 'Speed · la vitesse', def: 'how fast something moves. Here in km/s, kilometres per second, and km/h, kilometres per hour' },
    { term: 'Air resistance · la résistance de l’air', def: 'a force from the air that slows a moving object down; it acts opposite to the movement and is bigger at higher speed' },
    { term: 'Vacuum · le vide', def: 'a space with no particles. Space is (almost) a vacuum, so there is no air resistance' },
    { term: 'Gravity · la gravité', def: 'from 3.1: the force that pulls objects towards each other. The Sun’s gravity pulls every planet towards the Sun' },
    { term: 'Observation · une observation', def: 'what you see, measure and record (Think like a scientist)' },
    { term: 'Prediction · une prédiction', def: 'what you think will happen' },
    { term: 'Conclusion · une conclusion', def: 'what you decide from the results' },
    { term: 'Contradict · contredire', def: 'to go against (a 3.2 key word). Uranus’s path contradicted the prediction' },
  ],
  timeline: [
    { time: '0–5 min', phase: 'Starter', detail: 'Slide 1, the book’s Getting Started: planets in order, and the object that orbits the Earth. Slide 2: check with the photos; say the orange words together ("My Very Easy Method…"). The Moon orbits the Earth.' },
    { time: '5–9 min', phase: 'The Sun', detail: 'Slide 3: 330 000 Earths of mass, gravity 27 times stronger. Mr Bowen’s weight on the Sun on whiteboards (80 × 270), then reveal. Never look at the Sun. Slide 4: Question 3 in pairs, 30 seconds, then reveal Jupiter.' },
    { time: '9–16 min', phase: 'Let go of the string', detail: 'Slide 5: why don’t the planets fly away? Take ideas, no answer. Slide 6: swing the ball; hand = Sun, string = gravity, ball = planet. Slide 7: everyone votes at once (left hand A, right hand B), THEN let go — twice. Slide 8: Play, ask "which is fastest?" (Mercury), then Gravity off: straight lines, like the ball.' },
    { time: '16–21 min', phase: 'Draw This and Questions 1–2', detail: 'Slide 9: draw the Sun, the orbit, one planet and the two arrows (about 3 minutes) and copy the panel. Slide 10: Questions 1 and 2 on whiteboards.' },
    { time: '21–31 min', phase: 'Planet speeds: the bar graph', detail: 'Slide 11: the book’s Activity. Mercury’s bar is drawn for them; 0–50 km/s up the side. Say "km/s, kilometres PER second" (3.1’s per = for every). About 7 minutes. Slide 12: check; whiteboards: complete the sentence (decreases), then pairs say why. Slide 13: the reason, copy SPEED. Slide 14: Activity Questions 2 and 4, aloud.' },
    { time: '31–35 min', phase: 'Air resistance', detail: 'Slide 15: everyone waves an open exercise book, slow then fast, flat then edge first — then reveal. Remind them of the flat paper in 3.1. Slide 16: the plane’s wing; copy AIR RESISTANCE.' },
    { time: '35–42 min', phase: 'Vacuum: nothing to slow you down', detail: 'Slide 17: is there air resistance in space? Slide 18: Juno; copy VACUUM (this is Question 4). Slide 19: Voyager 1 — still going since 1977; reveal Question 5. Slide 20: Question 6 with fingers, 1 to 4, all at once.' },
    { time: '42–48 min', phase: 'How Neptune was found', detail: 'Slide 21: tell the story left to right. Slide 22: say the three words with the class, then Questions 1–3 on whiteboards. Slide 23: Question 4 on whiteboards.' },
    { time: '48–50 min', phase: 'Close', detail: 'Slide 24: checklist; 4 written panels, 1 drawing, 1 bar graph. Slide 25: exit question (the book’s Question 7). If time is short, skip slides 14 and 23 first, and finish the bar graph next lesson.' },
  ],
  answers: [
    { q: 'Getting Started', a: '1 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune. 2 The Moon.' },
    { q: 'Slide 3 — Mr Bowen on the Sun', a: '80 kg × 270 N/kg = 21 600 N, 27 times his 800 N on Earth. (The Sun has no surface to stand on; 270 N/kg is the strength of gravity at its visible surface.)' },
    { q: 'Q3', a: 'Jupiter. After the Sun it has the most mass in the Solar System (about 318 times the Earth’s), so the strongest gravity: 25 N/kg in 3.1’s table.' },
    { q: 'Slide 7 — the vote', a: 'B. When he lets go, nothing pulls the ball towards the centre any more, so it goes straight on in the direction it was moving at that moment — along the edge of the circle (the tangent), not outwards along the string. A is the common wrong idea that something "throws it outwards".' },
    { q: 'Slide 8 — the widget', a: 'Mercury is fastest (48 km/s) and Mars slowest of the four (24 km/s). In one Earth year (365 days) Mercury goes round about 4 times (88 days each), Venus about 1.6 times, Mars about half. Gravity off: each planet leaves in a straight line, the way it was going, at the same speed — nothing slows it down.' },
    { q: 'Q1', a: 'Towards the Sun (towards the centre of the orbit).' },
    { q: 'Q2', a: 'The Sun’s gravity.' },
    { q: 'Activity Q1', a: '… decreases. (As the distance from the Sun increases, the speed of orbit of the planets decreases.)' },
    { q: 'Activity Q2', a: 'A graph shows the pattern (trend) at a glance and makes the planets easy to compare; in a table you must read every number.' },
    { q: 'Activity Q3', a: 'The Sun’s gravity gets weaker as the distance from the Sun increases. Close to the Sun the pull is strongest, and the planets move fastest.' },
    { q: 'Activity Q4', a: 'The planets are separate categories, not continuous data like time or temperature: there are no in-between values to join with a line.' },
    { q: 'Slide 13 — speeds', a: 'The book’s km/h figures match its km/s table: 48 km/s × 3600 s = 172 800 km/h (book: 170 000). Earth: 30 × 3600 = 108 000 km/h (book: about 100 000).' },
    { q: 'Slide 15 — feel the air', a: 'A push against the movement of the book (air resistance). Bigger when it moves faster, and bigger flat side first than edge first — the flat side pushes against more particles of air. The same reason the flat paper fell slowly in 3.1.' },
    { q: 'Q4', a: 'Vacuum.' },
    { q: 'Q5', a: 'On Earth there is air. Air resistance acts against the movement, and the faster an object moves the bigger it is: at 64 000 km/h it would be enormous and would slow Voyager 1 down (and heat it up). In space there is a vacuum, so there is nothing to slow it.' },
    { q: 'Q6', a: 'Gravity only. Space is a vacuum, so there is no air resistance; nothing is rubbing on the Earth, so there is no friction.' },
    { q: 'Think like a scientist Q1–3', a: '1 predictions (Bouvard’s calculations said where Uranus would be). 2 observations (what was seen and recorded). 3 a conclusion (what scientists decided from the results). The book offers four words each time; the deck keeps the three that matter.' },
    { q: 'Think like a scientist Q4', a: 'Uranus moving further away from the Sun CONTRADICTED the original prediction about its orbit. Scientists found Neptune using careful MEASUREMENTS — accept OBSERVATIONS too: the prediction came from measurements of Uranus, and Neptune was then found by looking.' },
    { q: 'Exit (Q7)', a: 'In January. Closer to the Sun, its gravity pulls harder and the Earth moves faster: about 30.3 km/s in early January, 29.3 km/s in early July.' },
  ],
  notes:
    'NOTEBOOK COUNT (slide 24): 4 written panels — circular and the Sun’s pull (slide 9), speed (13), air resistance (16), vacuum (18) — plus 1 drawing (the orbit, slide 9) and 1 bar graph (slide 11). Fewer copied panels than 3.1, on purpose.\n\n' +
    'SAFETY FOR THE DEMO (slides 6–7). Soft ball only, on strong string with the knot checked. Stand at the front with at least 3 metres of clear space in the direction the ball will fly, and nobody within 2 metres of you. Swing it in a flat circle above head height, slowly — two turns a second is plenty. Let go when the ball is moving towards an empty wall or a pile of bags, never towards students, windows or the projector. Practise once before the class arrives. Let go twice, from different points, so they see it always goes straight on. If the room is too small: roll a marble round inside a paper plate with a quarter of the rim cut away — it leaves the gap in a straight line.\n\n' +
    'THE WIDGET (slide 8). The four planets closest to the Sun, with their orbits to scale and their real times round the Sun, so the dots’ speeds are in the right proportion. Press Play, ask which is fastest, let it run until the Earth has been round once (Mercury shows 4), then Gravity off: each planet leaves along a straight line, the way it was going. Reset puts them back.\n\n' +
    'THE NUMBERS. Book values throughout. The Sun’s mass is about 333 000 Earths; its surface gravity 274 N/kg (book: 270). Orbit speeds in km/s (NASA): Mercury 47.4, Venus 35.0, Earth 29.8, Mars 24.1, Jupiter 13.1, Saturn 9.7, Uranus 6.8, Neptune 5.4 — the book rounds them. Neptune is 30 times further from the Sun than the Earth and has 17 times its mass.\n\n' +
    'JUNO AND VOYAGER. Juno reached about 266 000 km/h as it arrived at Jupiter on 4 July 2016, then the fastest object people had made; if a student asks, the record now belongs to the Parker Solar Probe, about 690 000 km/h close to the Sun (December 2024). Voyager 1 was launched on 5 September 1977. NASA says it will be one light-day from Earth — about 25.9 billion km, so a radio signal takes 24 hours each way — on 18 November 2026, the first spacecraft ever to get that far. Its speed is about 61 000 km/h (17 km/s); the book says 64 000.\n\n' +
    'THE NEPTUNE STORY (slide 21). William Herschel found Uranus in 1781. In 1821 the French astronomer Alexis Bouvard published tables of where Uranus would be; it kept drifting off them. In 1846 Urbain Le Verrier, also French, calculated where an unseen planet pulling on Uranus must be; Johann Galle at the Berlin Observatory looked there on 23 September 1846 and found Neptune within about 1° of the prediction. (John Couch Adams in England made a similar prediction.) Worth saying in French as well: two French scientists.\n\n' +
    'ENGLISH POINTS. "Orbit" is a noun and a verb. "Per" means "for every" (3.1): km/s, km/h. Observation, prediction and conclusion are nearly the same words in French, so the French speakers have a head start — but the English spelling of "prediction" has no accent.\n\n' +
    'LANGUAGES: English and French only, like every Year 7 deck from Unit 4. The diagrams are in English.',
}
