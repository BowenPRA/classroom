// content/y5-math/U05_L3/updown.jsx
// UP OR DOWN? — the standing game (slide 13). One sentence at a time, big.
// Everyone stands; on "3, 2, 1" arms UP for add (up, warmer, more) or arms
// DOWN for subtract (down, colder, less). The press shows the answer and the
// word that decides it; wrong answers sit down. Rounds 5 and 8 are the traps:
// "deeper" sounds like more but goes down, and paying back money you owe goes
// UP towards zero.
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

// [sentence, up?, the word that decides it]
const ROUNDS = [
  ['The temperature rises by 6 °C.', true, 'rises'],
  ['The lift goes down 4 floors.', false, 'goes down'],
  ['It gets 5 °C colder.', false, 'colder'],
  ['Mr. David spends 10 000 dong.', false, 'spends'],
  ['The diver goes 3 metres deeper.', false, 'deeper: further down'],
  ['It gets 2 °C warmer.', true, 'warmer'],
  ['The temperature drops by 8 °C.', false, 'drops'],
  ['Mr. David pays back 5 000 dong that he owes.', true, 'pays back: he owes less'],
]

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
  const [sentence, up, why] = ROUNDS[i]
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
          {open ? (
            <g>
              <Arrow up={up} />
              <text x="320" y="250" fontFamily={FONT} fontSize="64" fontWeight="900" fill={up ? GREEN : RED}>{up ? 'UP: add (+)' : 'DOWN: subtract (−)'}</text>
              <text x="320" y="318" fontFamily={FONT} fontSize="34" fontWeight="800" fill={INK}>{`The word: ${why}`}</text>
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
