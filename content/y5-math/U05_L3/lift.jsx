// content/y5-math/U05_L3/lift.jsx
// MR. DAVID'S LIFT — the "say it first" stepper (slide 3).
//
// A building with floors 5 to B3 (−3). Each move is read out first ("Go down
// 5 floors") with a ? where the answer will be; the class says the floor. The
// press then moves the lift in TWO jumps, to the ground floor (0) and on from
// there, and only then shows the number sentence. That is the method of the
// lesson (zero is a bridge) shown as motion, which a static slide cannot do.
//
// One change a press: "Go!" rides the lift; "Next move" only reads out the next
// move. The moves are chained, so each one starts on the floor where the last
// one stopped and the lift never jumps to a floor nobody predicted.
// Two small headings, "number" and "button", say why the two columns differ
// (they are the same above the ground: 1 and 1, 2 and 2 …).
//
// English only (the Year 5 course is not bilingual). One wide white-plate SVG
// stage (1120×440, the house shape for a showcase widget) and the house Btn.
import { useEffect, useRef, useState } from 'react'
import { ChevronRight, Undo2, RotateCcw } from 'lucide-react'
import { Btn } from '../../y7-science/U03_models/ui.jsx'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"
const INK = '#2b2b2b'
const KEY = '#c25e12'
const RED = '#c8102e'
const BLUE = '#1a5fa8'
const GREEN = '#4a8b23'
const MUTED = '#5b6770'

// Floors from the top: 5 … 1, G (0), B1 … B3.
const FLOORS = [5, 4, 3, 2, 1, 0, -1, -2, -3]
const FH = 40 // floor height
const TOP = 50 // room above the building for the two column headings
const fy = (f) => TOP + (5 - f) * FH // top edge of floor f
const SHAFT_X = 280
const CAR_W = 70

const name = (f) => (f === 0 ? 'G' : f < 0 ? `B${-f}` : String(f))
const num = (n) => (n < 0 ? `−${-n}` : String(n))

// [start, change]. Every move crosses the ground floor, and each starts where
// the last one stopped: 2 − 5 = −3, −3 + 8 = 5, 5 − 7 = −2, −2 + 3 = 1,
// 1 − 4 = −3. Neither the first move nor the last lands on −2, the answer to
// the starter, which slide 4 asks next.
const MOVES = [
  [2, -5],
  [-3, 8],
  [5, -7],
  [-2, 3],
  [1, -4],
]

const say = (d) => (d > 0 ? `Go up ${d} floors.` : `Go down ${-d} floors.`)
const sentence = (s, d) => `${num(s)} ${d > 0 ? '+' : '−'} ${Math.abs(d)} = ${num(s + d)}`

export function LiftStepper({ isDisplayMode = false }) {
  // step 2k = move k asked (the ? shows); 2k + 1 = move k shown
  const [step, setStep] = useState(0)
  // the step whose second jump (from G to the end floor) has happened
  const [arrived, setArrived] = useState(-1)
  // the step whose lift has landed: only then does the number sentence show
  const [landed, setLanded] = useState(-1)
  const timer = useRef(null)
  const timer2 = useRef(null)
  const big = isDisplayMode
  const k = Math.floor(step / 2)
  const shown = step % 2 === 1
  const [start, change] = MOVES[k]
  const end = start + change
  const LAST = MOVES.length * 2 - 1
  // On a "show" step: ride to G first, then (after the pause) on to the end floor.
  const pos = !shown ? start : arrived === step ? end : 0

  useEffect(() => {
    clearTimeout(timer.current)
    clearTimeout(timer2.current)
    if (shown) {
      timer.current = setTimeout(() => setArrived(step), 1300)
      timer2.current = setTimeout(() => setLanded(step), 2500)
    }
    return () => {
      clearTimeout(timer.current)
      clearTimeout(timer2.current)
    }
  }, [step, shown])

  // Any move forgets the last ride, so Back then Go! rides via G again.
  const go = (s) => {
    setArrived(-1)
    setLanded(-1)
    setStep(s)
  }
  const back = () => go(Math.max(0, step - 1))
  const next = () => go(Math.min(LAST, step + 1))
  const label = shown ? (step === LAST ? 'Done' : 'Next move') : 'Go!'

  const toZero = Math.abs(start)
  const rest = Math.abs(end)
  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox="0 0 1120 440" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1120" height="440" rx="16" fill="#ffffff" />
          {/* sky and ground */}
          <rect x="150" y={fy(0) + FH} width="330" height={440 - (fy(0) + FH) - 10} fill="#efe3cf" />
          <line x1="140" y1={fy(0) + FH} x2="490" y2={fy(0) + FH} stroke={GREEN} strokeWidth="6" />
          {/* the two column headings */}
          <text x="92" y="36" fontFamily={FONT} fontSize="22" fontWeight="800" fill={MUTED} textAnchor="end">number</text>
          <text x="178" y="36" fontFamily={FONT} fontSize="22" fontWeight="800" fill={INK} textAnchor="end">button</text>
          {/* the building */}
          <rect x="190" y={TOP} width="250" height={FH * 9} fill="none" stroke={INK} strokeWidth="4" />
          {FLOORS.map((f) => (
            <g key={f}>
              <line x1="190" y1={fy(f) + FH} x2="440" y2={fy(f) + FH} stroke="#c9d3dc" strokeWidth="2" />
              <text x="170" y={fy(f) + 29} fontFamily={FONT} fontSize="24" fontWeight="900" fill={f < 0 ? RED : f === 0 ? KEY : BLUE} textAnchor="end">{name(f)}</text>
              <text x="84" y={fy(f) + 29} fontFamily={FONT} fontSize="22" fontWeight="700" fill={MUTED} textAnchor="end">{num(f)}</text>
            </g>
          ))}
          {/* the shaft and the car */}
          <rect x={SHAFT_X - 6} y={TOP} width={CAR_W + 12} height={FH * 9} fill="#eef1f4" />
          <g style={{ transform: `translateY(${fy(pos)}px)`, transition: 'transform 1.1s ease-in-out' }}>
            <rect x={SHAFT_X} y="4" width={CAR_W} height={FH - 8} rx="6" fill={KEY} stroke={INK} strokeWidth="3" />
            <line x1={SHAFT_X + CAR_W / 2} y1="8" x2={SHAFT_X + CAR_W / 2} y2={FH - 8} stroke="#ffffff" strokeWidth="3" />
          </g>

          {/* the move, read out */}
          <text x="530" y="60" fontFamily={FONT} fontSize="22" fontWeight="800" fill={MUTED}>{`Move ${k + 1} of ${MOVES.length}`}</text>
          <text x="530" y="112" fontFamily={FONT} fontSize="38" fontWeight="900" fill={INK}>{`The lift is on floor ${name(start)}.`}</text>
          <text x="530" y="164" fontFamily={FONT} fontSize="38" fontWeight="900" fill={change > 0 ? BLUE : RED}>{say(change)}</text>

          {shown && landed === step ? (
            <g>
              <text x="530" y="230" fontFamily={FONT} fontSize="28" fontWeight="800" fill={GREEN}>{`${toZero} to the ground floor, then ${rest} more.`}</text>
              <text x="530" y="318" fontFamily={FONT} fontSize="64" fontWeight="900" fill={KEY}>{sentence(start, change)}</text>
              <text x="530" y="384" fontFamily={FONT} fontSize="34" fontWeight="900" fill={INK}>{`Floor ${name(end)}`}</text>
            </g>
          ) : (
            <g>
              <text x="530" y="318" fontFamily={FONT} fontSize="64" fontWeight="900" fill="#cfd8dc">{`${num(start)} ${change > 0 ? '+' : '−'} ${Math.abs(change)} = ?`}</text>
              <text x="530" y="384" fontFamily={FONT} fontSize="30" fontWeight="800" fill={MUTED}>{shown ? 'Watch the lift…' : 'Which floor? Say it first.'}</text>
            </g>
          )}
        </svg>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn big={big} tone="slate" icon={Undo2} disabled={step === 0} onClick={back}>Back</Btn>
        <Btn big={big} tone="orange" icon={ChevronRight} disabled={step === LAST} onClick={next}>{label}</Btn>
        <Btn big={big} tone="teal" icon={RotateCcw} disabled={step === 0} onClick={() => go(0)}>Start again</Btn>
      </div>
    </div>
  )
}
