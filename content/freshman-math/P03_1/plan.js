// content/freshman-math/P03_1/plan.js
// One-page teacher lesson plan, rendered by src/pages/Plan.jsx.
export const plan = {
  duration:
    'Two lessons plus a downstairs session. Lesson 1 is the set-up and the construction (slides 1-13). Lesson 2 is the precision question, the privacy write-up and the checkpoint (14-17), then the theory (18-21). The Early Years session (22-28) needs 25 minutes downstairs and has to be booked with the Early Years teacher in advance. Solutions (31-35) come after every sheet is in.',
  objective:
    'Students can state that one measured distance from a known point constrains a position to a circle, that two constrain it to two points, and that three non-collinear distances fix it; ' +
    'construct that fix with compass and straight edge on a scaled map, converting between map centimetres and ground metres using a stated scale; quantify the uncertainty that follows from ' +
    'readings rounded to 0.1 km, and express it in real metres; distinguish TRILATERATION (from distances) from TRIANGULATION (from angles) and say which one a phone performs; explain why ' +
    'sharing a distance rather than a location is a much weaker privacy guarantee than it sounds; and design a working three-distance clue for a five-year-old, choosing three non-collinear ' +
    'reference points and predicting the false position that two distances alone would allow.',
  materials: [
    'Projector / TV for the project deck',
    'THE PRINTED SHEET, one per student, double-sided - homework/alg13p3/alg13p3.pdf, on the site under Homework as "P3"',
    'A pair of compasses per student, plus spares. CHECK THEY OPEN TO 11 cm before the lesson',
    'Strips of scrap paper - the fallback for the 10.8 cm arc, and the better tool for it',
    'Rulers marked in mm, and sharp pencils',
    'Coloured pencils, three per team, so the three arcs stay apart',
    '- for the downstairs session -',
    'TWO soft tape measures per team (this is the point, not a shortage)',
    'A sheet of small stickers - one treasure per team',
    'Index cards for the clue cards, or the tear-off strip on the back of the sheet',
    'A booked slot with the Early Years class, and their teacher briefed on what the children will be asked to do',
  ],
  vocab: [
    { term: 'Trilateration', def: 'fixing a position from DISTANCES to known points. "Lateral" means side, as in the sides of a triangle. This is what the app, the project and GPS all do, and almost nobody uses the word' },
    { term: 'Triangulation', def: 'fixing a position from ANGLES measured at the ends of a known base line. What surveyors did for two centuries, and the word everyone reaches for by mistake' },
    { term: 'Base line', def: 'the one distance a triangulation survey measures directly and with enormous care. Everything else in the survey is built out of angles from it' },
    { term: 'Reference point', def: 'a fixed thing you measure from, and can describe well enough that somebody else can stand on the same spot. "The door" is not one; "the left edge of the door frame at floor level" is' },
    { term: 'Collinear', def: 'lying on one straight line - from 1.3. Three reference points along one wall are collinear, and their distances agree along a smear rather than at a place' },
    { term: 'Precision', def: 'how finely a measurement is reported. "2.7 km" is reported to 0.1 km, so it means anything from 2.65 to 2.75, and that is a 100 m band on the ground' },
    { term: 'Scale', def: 'how many real metres one map centimetre stands for. On this sheet 1 cm is 250 m, so 1 km is 4 cm. The scale BAR on the map is the authority if the sheet is ever reprinted at a different size' },
    { term: 'Fix', def: 'the surveyor\'s and navigator\'s word for a determined position. "Getting a fix" is exactly what the three arcs do' },
  ],
  timeline: [
    { time: 'L1 · 0-8 min', phase: 'The set-up', detail: 'Slides 1-3. Mr Bowen is somewhere in Hoi An and will not say where; the only tool is an app called Neary that reports how far away somebody is, to the nearest tenth of a kilometre. Read the app\'s privacy promise out loud, deadpan: WE NEVER SHARE YOUR LOCATION. It is completely true, and the whole project is the joke landing forty minutes later. Hand out the sheets now so the three readings are in front of them.' },
    { time: 'L1 · 8-22 min', phase: 'One, then two', detail: 'Slides 4-7, and this is the sequence to protect. Slide 4 asks where he is from ONE reading, with nothing drawn: most classes want to point at a place, and discovering they can only point at a ring is the first real idea. Slide 6 then asks for a NUMBER before anything else - how many places do two readings leave? Expect "one" from most of the room. Slide 7 is the correction, and it is the single most load-bearing slide in the deck, because the Early Years task downstairs is built on it.' },
    { time: 'L1 · 22-30 min', phase: 'The third reading, and the map', detail: 'Slides 8-9. The third circle passes through one candidate and misses the other; say out loud that this is the three-point rule from 1.3 running backwards. Then put the real map up and give them a moment to find A, B and C on their own sheet before anybody picks up a compass.' },
    { time: 'L1 · 30-50 min', phase: 'The construction', detail: 'Slides 10-12. Make everybody convert all three radii to centimetres and write them down BEFORE the compass comes out - 2.7 km is 10.8 cm, 1.5 km is 6.0 cm, 2.3 km is 9.2 cm. Most school compasses will not open to 10.8 cm; the reveal on slide 10 gives them the paper-strip method, which is worth teaching to everyone rather than only to the stuck, because it is the 1.3 argument in physical form. Slide 11 insists on finding BOTH A-B crossings before reading C - marks are for showing both.' },
    { time: 'L2 · 0-14 min', phase: 'How sure are you?', detail: 'Slide 13. Their three arcs will not meet at a point, and the instinct is to apologise for it. Do not let them: "2.7 km" means 2.65 to 2.75, so each arc is really a 100 m band and the answer is a patch. They measure the little triangle in mm and convert with the scale. This is the question that separates a finished sheet from a good one.' },
    { time: 'L2 · 14-26 min', phase: 'The privacy answer', detail: 'Slides 14-16. Slide 14 is the turn: Neary never lied. Give the room a few seconds of silence before slide 15. The copy-down is A DISTANCE IS NOT A LOCATION - THREE DISTANCES ARE, and Q4 asks for three or four sentences plus one thing they would check in an app\'s settings. Push once on the follow-up that earns the last mark: the three readings did not need three people, only one person and twenty minutes.' },
    { time: 'L2 · 26-30 min', phase: 'Checkpoint', detail: 'Slide 17. Sign the corner of every map. The Hoi An half is closed here, deliberately BEFORE the method is named - if trilateration is explained first, the construction becomes an instruction to follow rather than a thing to work out. The sheets stay with the students because the back is used downstairs.' },
    { time: 'L2 · 30-45 min', phase: 'What it is called, and what a phone does', detail: 'Slides 18-21. The distinction is worth doing properly: distances give circles, angles give rays, and the word everybody uses is the wrong one. Slide 20 explains why the wrong word won - for two hundred years an angle was easy to measure and a long distance was not, and radio reversed that. Slide 21 lands it on GPS and on the 1.1 distance formula with a third term. If a student asks why four satellites and not three, the answer is on the slide: the phone\'s own clock is a fourth unknown.' },
    { time: 'Downstairs · 0-12 min', phase: 'Hide and measure', detail: 'Slides 22-25. Teams hide a sticker somewhere a five-year-old can reach, choose three fixed reference points, and measure to the nearest 10 cm. Circulate for the two failures that matter: reference points chosen along one wall (collinear - send them back to slide 23), and points described too vaguely to stand on. Slide 25 is where the connection gets made out loud: two tapes will find TWO places, and the third number is what picks one.' },
    { time: 'Downstairs · 12-25 min', phase: 'The hunt', detail: 'Slides 26-27. Two tape measures per team, two Early Years children on the ends, the Year 7 team reading the numbers and holding one end still. THE THING TO WATCH FOR is a team that walks the little ones straight to the sticker - that is a team that has skipped its own clue. The mark is for whether the CLUES worked. Leave time for every team to find one.' },
    { time: 'After · 10 min', phase: 'Write-up and hand-in', detail: 'Slides 28-29. Q5 while it is fresh: did the clues work first time, and if the children went to the wrong place, which wrong place was it? A team that recognises the mirror image across PQ has understood the whole project. Then both sides in, arcs intact. Solutions from slide 31 only once every sheet is collected.' },
  ],
  answers: [
    { q: 'Slide 4: one reading, 2.7 km from the Japanese Bridge', a: 'A circle of radius 2.7 km centred on the bridge - a ring about 17 km long. Accept any wording that reaches "he could be anywhere on a circle". The wrong answer to enjoy is a confident finger on one spot; ask that student what is wrong with the spot 200 m round the ring.' },
    { q: 'Slide 6: how many places do TWO readings leave?', a: 'Two. Expect most of the class to say one. Two circles cross twice unless they happen to touch, in which case one, or miss entirely, in which case none. On this map the two crossings are 2.7 km apart, which is the point - they are not near-duplicates.' },
    { q: 'Q1: the two A-B crossings', a: 'One at the answer, on the road out towards Cua Dai; the other about 2.7 km away to the north-west, near Thanh Ha. Both are on the printed map, and a sheet showing only one has skipped the step the marks are for.' },
    { q: 'Q2: where is Mr Bowen?', a: 'Classic Coffee, a cafe on the road out to the beach. True distances 2688 m, 1469 m and 2327 m, which round to the 2.7, 1.5 and 2.3 the app reported. Accept anything within about 5 mm of the true crossing, described by road or business rather than as "here".' },
    { q: 'Q2: how accurate should a good construction be?', a: 'Within roughly 5 mm on the sheet, which is 125 m on the ground. The rounding alone is worth about 4 mm, so 5 mm is genuinely good work. Mark the arcs, not the dot: three clean arcs with a crossing 8 mm out beats a confident dot with no working.' },
    { q: 'Q3: how big is the patch?', a: 'Each reading admits plus or minus 50 m, so each arc is a 100 m band. Where all three bands agree is a region 111 m by 143 m - about 130 m across, or 5 mm on the sheet. Accept anything from about 100 m to 200 m if the working shows a millimetre measurement converted with the scale.' },
    { q: 'Q4: the privacy answer', a: 'Three moves. (1) One distance is nearly harmless - it leaves a 17 km ring. (2) Three distances are not - they leave a patch you can walk across in two minutes. (3) The move that earns the last mark: nobody needed three phones. One person walking to three places gets three readings from the same app. For the settings half, accept anything real: turning off distance sharing, restricting it to friends, or checking what "approximate location" actually means.' },
    { q: 'Slide 18: what is this called?', a: 'TRILATERATION, from distances. TRIANGULATION is the one that works from angles, off a measured base line. Both fix a position; only the second is named after the triangle it draws. Expect the whole room to say triangulation, which is why the slide asks first.' },
    { q: 'Why four GPS satellites and not three?', a: 'Three distances fix a point in three dimensions - but the phone does not have an atomic clock, so it does not know exactly when the signals left relative to its own time. The clock offset is a fourth unknown, and four satellites give four equations for it. Worth saying that the maths is the 1.1 distance formula with a z term.' },
    { q: 'Treasure task: why must the three reference points not be in a line?', a: 'Same reason as 1.3. Three collinear points leave a smear rather than a place - and worse for a floor hunt, the answers are symmetric above and below the line, so the little ones have two whole regions to search. Points spread around the treasure give one place.' },
    { q: 'Treasure task: why two tape measures and three clues?', a: 'Two tapes reproduce two circles, and two circles cross twice - so two tapes are consistent with two spots, one on each side of the line PQ. The third distance is the only thing that separates them. If a team cannot explain this, send them back to slide 7.' },
    { q: 'Q5: what if the children went to the wrong place first?', a: 'The wrong place is almost certainly the mirror image of the sticker reflected across the line joining P and Q - the second crossing, happening on a floor. A team that spots that and draws it has understood the entire project, and it is worth more than a team whose hunt went smoothly and who wrote three bland sentences.' },
    { q: 'Exit question: readings rounded to the nearest whole km', a: 'Each band goes from 100 m wide to 1000 m wide - ten times wider - so the patch grows by roughly ten times in each direction, to something like 1.3 km across. That is most of a town, and it is genuinely much more private. The useful follow-up is that precision, not the existence of the reading, is what does the damage.' },
  ],
  notes:
    'THE PROJECT IS A JOKE THAT TURNS SERIOUS, AND THE TURN IS SLIDE 14. Neary\'s privacy promise - we never share your location - is completely true and completely worthless. Everything ' +
    'before slide 14 exists so that the students, not the teacher, are the ones who prove it. Do not preview the privacy point earlier; the argument only lands if they have already found him. ' +
    'THE TARGET IS MR BOWEN, ON PURPOSE. The lesson is about how easily a person can be located, and it should not be modelled on following a stranger. Keeping the target as a member of staff ' +
    'who is in on it makes the same mathematical point without teaching the class to practise on somebody real. The app is invented; do not name a real one from the front. ' +
    'THE NUMBERS ARE REAL AND WERE COMPUTED, NOT CHOSEN TO BE TIDY. The map is an OpenStreetMap render at exactly 1 cm = 250 m (see images/CREDITS.json for the frame, the projection and the ' +
    'anchor coordinates). From Classic Coffee the true distances are 2688.4 m, 1469.1 m and 2327.1 m, which is why the app reports 2.7, 1.5 and 2.3. The bearings from the answer to the three ' +
    'anchors are 117, 88 and 154 degrees apart, so the three arcs cut each other at healthy angles - if you ever re-anchor this project, check that first, because three anchors bunched on one ' +
    'side give a long thin patch and a construction nobody can read. ' +
    'THE TWO-CIRCLE AMBIGUITY IS THE SPINE OF BOTH HALVES, and it is the one thing to insist on. Circles A and B cross at two points 2.7 km apart and BOTH are on the printed map, which is why ' +
    'Q1 asks for both before reading C. It is also exactly why the Early Years class gets TWO tape measures and THREE clues. Say that out loud at slide 25. If the connection is never made, the ' +
    'downstairs session is a nice game with no mathematics in it. ' +
    'THE COMPASS WILL NOT REACH, AND THAT IS FINE. A 2.7 km radius is 10.8 cm, past most school compasses. The paper-strip method on slide 10 - two marks on the edge of a strip, one pinned ' +
    'under a pencil point - is not a work-around but the 1.3 argument made physical: what draws a circle is a LOCKED DISTANCE, not a particular tool. Teach it to the whole class rather than ' +
    'only to the stuck, and it also removes the "my compass is broken" ten minutes. ' +
    'BOOK THE EARLY YEARS CLASS IN ADVANCE and brief their teacher. The children are five: they can hold a tape end, walk, and read a big number with help, and they cannot read handwriting or ' +
    'wait long. Two tape measures per team is the design, not a shortage - see above. Watch for the team that walks the little ones straight to the sticker; that team has skipped its own clue ' +
    'and should be sent back to hand the card to another team instead. ' +
    'ON MARKING: 12 marks for the Hoi An half and 4 for the treasure task, listed on slide 29. The Hoi An marks are weighted towards ARCS AND WORKING rather than towards the accuracy of the ' +
    'final dot, because the rounding alone is worth about 4 mm and a lucky dot with no arcs proves nothing. The most valuable single answer in the whole project is a team explaining WHY the ' +
    'Early Years class went to the wrong place first. ' +
    'ON THE CHECKPOINT AT SLIDE 17: the maps are signed off, not collected, because the back of the sheet is used downstairs. What is being closed is the Hoi An answer, so that the theory ' +
    'slides cannot retroactively help. The stop slide at 30 is the usual one and guards the worked solutions. ' +
    'ON LAYOUT, FOR ANYONE EDITING THIS DECK: showcase, steps, compare and gallery silently DROP a slide-level notes array - nothing errors, the panel just never renders. Every copy-down item ' +
    'here is on a split, statement, callout or stack, or is an orange ">" bumper inside a steps slide\'s content. Check that before moving a note between slides. ' +
    'The course is flagged bilingual:false in content/courses.js, so this deck is English-only and the EN/VN toggle is hidden. The vocabulary is not softened: trilateration, triangulation, ' +
    'base line, collinear, precision and fix are all named properly. ' +
    'WHAT COMES NEXT: this project uses circles to find a point and never writes one down as an equation. The natural follow-on is the circle in coordinates, (x - h)^2 + (y - k)^2 = r^2, at ' +
    'which point the three-arc construction becomes three equations in two unknowns - and the fact that they do not quite agree stops being a drawing error and becomes the reason least ' +
    'squares exists.',
}
