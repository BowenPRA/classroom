// content/y5-math/U05_L3/updown.jsx
// UP OR DOWN? — the standing game (slide 14). One sentence at a time, big.
// Everyone stands; on "3, 2, 1" arms UP for add (up, warmer, more) or arms
// DOWN for subtract (down, colder, less). The press shows the answer and the
// word that decides it; wrong answers sit down. Rounds 5, 7 and 8 are the
// traps: "deeper" sounds like more but goes down; "less cold" has a down word
// in it but means warmer; owing less moves the number UP towards zero.
// (Not "pays back money he owes": the 5 Nov pass found it reads both ways,
// because his wallet goes down.) Round 5 shows a diver under the water, so the
// word "diver" is named by a picture before anyone answers.
//
// It reveals one answer at a time after the whole class has committed, which a
// slide cannot. English only; one wide white-plate SVG stage and the house Btn.
import { useState } from 'react'
import { ChevronRight, Undo2, Eye } from 'lucide-react'
import { Btn } from '../../y7-science/U03_models/ui.jsx'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"
const INK = '#2b2b2b'
const MUTED = '#5b6770'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const RULE = '#cfd8dc'

// [sentence, up?, the word that decides it, a note for the two traps]
const ROUNDS = [
  ['The temperature rises by 6 °C.', true, 'rises'],
  ['The lift goes down 4 floors.', false, 'goes down'],
  ['It gets 2 °C warmer.', true, 'warmer'],
  ['Mr. David spends 10 000 dong.', false, 'spends'],
  ['The diver goes 3 metres deeper.', false, 'deeper', 'Deeper means further down.'],
  ['It gets 5 °C colder.', false, 'colder'],
  ['It gets less cold.', true, 'less cold', 'Less cold means warmer.'],
  ['Mr. David owes 5 000 dong less.', true, 'owes less', 'He owes less: −5 000 goes up towards 0.'],
]

/** A diver under the water, with bubbles (round 5 only). No words. */
function Diver() {
  // bottom right, clear of the answer text ("DOWN: subtract (−)" ends near x 980, y 205-260)
  return (
    <g>
      <rect x="940" y="272" width="164" height="150" rx="14" fill="#cfe8f5" />
      <path d="M 940 288 q 20 -13 41 0 t 41 0 t 41 0 t 41 0" fill="none" stroke="#1a5fa8" strokeWidth="5" strokeLinecap="round" />
      <circle cx="1056" cy="334" r="7" fill="none" stroke="#1a5fa8" strokeWidth="3" />
      <circle cx="1068" cy="314" r="5" fill="none" stroke="#1a5fa8" strokeWidth="3" />
      <g>{/* level: the picture must not hint up or down */}
        <rect x="964" y="358" width="84" height="30" rx="15" fill="#2b2b2b" />
        <rect x="974" y="348" width="44" height="13" rx="6" fill="#e8a317" stroke="#2b2b2b" strokeWidth="2.5" />
        <circle cx="1058" cy="372" r="19" fill="#f2c9a0" stroke="#2b2b2b" strokeWidth="3" />
        <rect x="1054" y="361" width="21" height="15" rx="5" fill="#9fd3ef" stroke="#2b2b2b" strokeWidth="3" />
        <path d="M 964 364 L 942 352 L 946 372 Z M 964 382 L 942 394 L 950 373 Z" fill="#4a8b23" stroke="#2b2b2b" strokeWidth="2.5" strokeLinejoin="round" />
      </g>
    </g>
  )
}

function Arrow({ up }) {
  const c = up ? GREEN : RED
  return up ? (
    <g>
      <path d="M 200 150 L 140 250 L 260 250 Z" fill={c} />
      <rect x="175" y="248" width="50" height="120" fill={c} />
    </g>
  ) : (
    <g>
      <rect x="175" y="150" width="50" height="120" fill={c} />
      <path d="M 200 370 L 140 268 L 260 268 Z" fill={c} />
    </g>
  )
}

export function UpOrDown({ isDisplayMode = false }) {
  const [i, setI] = useState(0)
  const [open, setOpen] = useState(false)
  const big = isDisplayMode
  const [sentence, up, word, note] = ROUNDS[i]
  const last = i === ROUNDS.length - 1
  const long = sentence.length > 34
  // Back closes an open answer first, then goes to the previous round, open.
  const back = () => {
    if (open) {
      setOpen(false)
      return
    }
    setI((v) => v - 1)
    setOpen(true)
  }

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 1120 440" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1120" height="440" rx="16" fill="#ffffff" />
          <text x="560" y="52" fontFamily={FONT} fontSize="24" fontWeight="800" fill={MUTED} textAnchor="middle">{`Round ${i + 1} of ${ROUNDS.length}`}</text>
          <text x="560" y="120" fontFamily={FONT} fontSize={long ? 40 : 50} fontWeight="900" fill={INK} textAnchor="middle">{sentence}</text>
          {word === 'deeper' && <Diver />}
          {open ? (
            <g>
              <Arrow up={up} />
              <text x="320" y="250" fontFamily={FONT} fontSize="64" fontWeight="900" fill={up ? GREEN : RED}>{up ? 'UP: add (+)' : 'DOWN: subtract (−)'}</text>
              <text x="320" y="318" fontFamily={FONT} fontSize="34" fontWeight="800" fill={INK}>{`The word: ${word}`}</text>
              {note && <text x="320" y="372" fontFamily={FONT} fontSize="30" fontWeight="700" fill={MUTED}>{note}</text>}
            </g>
          ) : (
            <g>
              <text x="560" y="270" fontFamily={FONT} fontSize="150" fontWeight="900" fill={RULE} textAnchor="middle">?</text>
              <text x="560" y="350" fontFamily={FONT} fontSize="32" fontWeight="800" fill={MUTED} textAnchor="middle">3, 2, 1… arms up or arms down!</text>
            </g>
          )}
        </svg>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn big={big} tone="slate" icon={Undo2} disabled={i === 0 && !open} onClick={back}>Back</Btn>
        {open ? (
          <Btn big={big} tone="orange" icon={ChevronRight} disabled={last} onClick={() => { setI((v) => v + 1); setOpen(false) }}>Next round</Btn>
        ) : (
          <Btn big={big} tone="green" icon={Eye} onClick={() => setOpen(true)}>Show the answer</Btn>
        )}
      </div>
    </div>
  )
}
