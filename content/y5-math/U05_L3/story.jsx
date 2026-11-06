// content/y5-math/U05_L3/story.jsx
// WHAT HAPPENS NEXT? — Pip's cold night, a four-panel strip (slide 7), one
// panel per press, so the class predicts each step before it is shown. It
// comes after the up and down words (slide 6), so "falls" is already taught.
// Deadpan, never flagged as a joke:
//
//   1  6 p.m. Pip goes camping (on Fansipan, in the title). 8 °C. A hot drink.
//   2  9 p.m. The temperature falls by 3 °C (5 °C). Pip puts on a hat.
//   3  Midnight. It falls by 3 °C again (2 °C). Four more hats.
//   4  6 a.m. Pip is very cold. The thermometer is frozen: ? °C.
//   then the question: it falls by 3 °C every 3 hours, so what does the
//   thermometer say at 6 a.m.? The clue: it falls at 3 a.m. and again at
//   6 a.m. The last press melts the ice: −4 °C, "It falls 6 °C in all:
//   2 − 6 = −4 °C" (2 down to 0, then 4 more). The teacher can press it at
//   once or come back after slide 9 (zero is a bridge).
//
// Sizes: on the projector (1366×768) this stage renders at about 0.75 of its
// viewBox, so the captions (30) come out near 22 px and the scale numbers
// and the clue (28) near 21 px.
//
// After panel 2 the class can see the pattern (8, 5, …) and predict 2 °C;
// after panel 3 the next step crosses zero, which is the lesson.
//
// Pip is the shared made-up otter (src/lib/storyCharacter.js): teacher decks
// never draw a real teacher. English only, like the rest of this course.
import { useState } from 'react'
import { ChevronRight, Undo2, RotateCcw } from 'lucide-react'
import { Btn } from '../../y7-science/U03_models/ui.jsx'
import { StoryCharacter } from '../../../src/lib/storyCharacter.js'

const FONT = "Inter, 'Segoe UI', system-ui, sans-serif"
const INK = '#2b2b2b', RULE = '#d5dbe1', TEAL = '#0087a8', BLUE = '#1a5fa8'
const KEY = '#c25e12' // zero is orange on every number line in this deck
const RED = '#c8102e'
const GREEN = '#4a8b23'

const PANEL_W = 380
const PANEL_H = 340
const TOP = 14
const px = (i) => 30 + i * (PANEL_W + 20)
const FLOOR = TOP + PANEL_H - 25 // 329
const CAP_Y = TOP + PANEL_H + 34 // first caption line
const CAP_LH = 36
const BOX_Y = 480 // the question box
const VB_H = 582
const PIP = 0.72
const PIP_X = 222 // from the panel's left edge
const PIP_Y = FLOOR - 268 * PIP

// the thermometer board, from the panel's left edge
const BOARD = { x: 22, y: TOP + 10, w: 134, h: 298 }
const TUBE_X = 60
const ty = (c) => 168 - c * 9 // 10 °C at y 78, 0 at 168, −10 at 258
const BULB_Y = 286

// The lines under each panel (short: about 22 characters fit at size 30)
const CAPTIONS = [
  ['6 p.m. Pip goes camping.', 'Pip is an otter.'],
  ['9 p.m. The temperature', 'falls by 3 °C.', 'Pip puts on a hat.'],
  ['Midnight. It falls', 'by 3 °C again.', 'Four more hats.'],
  ['6 a.m. Pip is very cold.', 'The thermometer', 'is frozen.'],
]
const TEMPS = [8, 5, 2, null] // null: frozen over, the class works it out
const ANSWER = -4 // shown on the last press, when the ice melts
const MELTED_CAPTION = ['6 a.m. Pip is very cold.', 'The ice melts.']
const SKY = ['#f7d6b0', '#45618a', '#1f2a44', '#d8e8f2']
const HILL = ['#c99a7a', '#33496d', '#2c3a5c', '#b7cadb']
const GROUND = ['#6f8f4e', '#4f6b3a', '#3d5530', '#f2f7fb']
const HATS = ['#d83a2e', '#e8a317', '#4a8b23', '#5c2483', '#1a5fa8']
const LAST = 5 // panels 0-3, then the clue, then the ice melts

const num = (c) => (c < 0 ? `−${-c}` : String(c))

/** Woolly hats in Pip's frame, stacked; the first sits on the head. */
function hats(count) {
  let s = ''
  for (let k = 0; k < count; k++) {
    const o = -30 * k
    const w = 44 - k * 2
    const tilt = [0, -5, 4, -3, 5][k]
    s += `<g transform="rotate(${tilt} 0 ${16 + o})">
      <path d="M ${-w} ${18 + o} Q ${-w} ${-26 + o} 0 ${-28 + o} Q ${w} ${-26 + o} ${w} ${18 + o} Z" fill="${HATS[k]}" stroke="${INK}" stroke-width="2.5"/>
      <rect x="${-w - 3}" y="${8 + o}" width="${2 * w + 6}" height="16" rx="6" fill="#ffffff" stroke="${INK}" stroke-width="2.5"/>
      ${k === count - 1 ? `<circle cx="0" cy="${-31 + o}" r="9" fill="#ffffff" stroke="${INK}" stroke-width="2.5"/>` : ''}
    </g>`
  }
  return s
}

function Thermometer({ x, temp }) {
  const frozen = temp == null
  const b = BOARD
  return (
    <g>
      <rect x={x + b.x} y={b.y} width={b.w} height={b.h} rx="14" fill="#ffffff" stroke={INK} strokeWidth="3" />
      {/* the scale: a tick each degree, labels at 10, 0 and −10 */}
      {Array.from({ length: 21 }, (_, i) => 10 - i).map((c) => (
        <line key={c} x1={x + TUBE_X + 12} y1={ty(c)} x2={x + TUBE_X + (c % 5 ? 20 : 28)} y2={ty(c)}
          stroke={c === 0 ? KEY : INK} strokeWidth={c === 0 ? 4 : c % 5 ? 1.5 : 2.5} />
      ))}
      {[10, 0, -10].map((c) => (
        <text key={c} x={x + TUBE_X + 33} y={ty(c) + 10} fontFamily={FONT} fontSize="28" fontWeight="900" fill={c === 0 ? KEY : INK}>{num(c)}</text>
      ))}
      <rect x={x + TUBE_X - 8} y={ty(10) - 12} width="16" height={BULB_Y - ty(10) + 12} rx="8" fill="#eef1f4" stroke={INK} strokeWidth="2.5" />
      <circle cx={x + TUBE_X} cy={BULB_Y} r="17" fill={RED} stroke={INK} strokeWidth="2.5" />
      {!frozen && <rect x={x + TUBE_X - 4} y={ty(temp)} width="8" height={BULB_Y - ty(temp)} fill={RED} />}
      {frozen && (
        <g>
          {/* ice over the whole board: the reading cannot be seen */}
          <rect x={x + b.x - 4} y={b.y + 44} width={b.w + 8} height={b.h - 40} rx="14" fill="#dbeaf4" stroke="#7fa3c0" strokeWidth="3" />
          <path d={`M ${x + 44} ${b.y + 80} l 30 -18 M ${x + 52} ${b.y + 160} l 44 -26 M ${x + 40} ${b.y + 230} l 36 -21`} stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
          <path d={`M ${x + 40} ${b.y + b.h + 4} l 6 18 l 6 -18 M ${x + 78} ${b.y + b.h + 4} l 5 24 l 5 -24 M ${x + 112} ${b.y + b.h + 4} l 6 16 l 6 -16`} fill="#dbeaf4" stroke="#7fa3c0" strokeWidth="2" />
        </g>
      )}
      <text x={x + b.x + b.w / 2} y={b.y + 34} fontFamily={FONT} fontSize="30" fontWeight="900" fill={frozen ? '#7fa3c0' : INK} textAnchor="middle">
        {frozen ? '? °C' : `${num(temp)} °C`}
      </text>
    </g>
  )
}

function Tent({ x, frost }) {
  const l = x + 258, r = x + 378, top = FLOOR - 128
  return (
    <g>
      <path d={`M ${l} ${FLOOR} L ${x + 318} ${top} L ${r} ${FLOOR} Z`} fill={frost ? '#e3a37a' : KEY} stroke={INK} strokeWidth="3" strokeLinejoin="round" />
      <path d={`M ${x + 300} ${FLOOR} L ${x + 318} ${top + 50} L ${x + 336} ${FLOOR} Z`} fill="#5a3a1f" stroke={INK} strokeWidth="2.5" strokeLinejoin="round" />
      {frost && <path d={`M ${x + 318} ${top} L ${l} ${FLOOR} M ${x + 318} ${top} L ${r} ${FLOOR}`} stroke="#ffffff" strokeWidth="6" opacity="0.85" />}
    </g>
  )
}

function Sky({ x, i }) {
  return (
    <g>
      <rect x={x} y={TOP} width={PANEL_W} height={PANEL_H} fill={SKY[i]} />
      {i === 0 && <circle cx={x + 300} cy={TOP + 170} r="34" fill="#f39a3d" />}
      {i === 3 && <circle cx={x + 300} cy={TOP + 174} r="30" fill="#fbe7b0" />}
      {(i === 1 || i === 2) && (
        <g fill="#ffffff">
          {[[180, 62], [262, 96], [340, 50], [214, 140], [356, 150], [150, 110]].map(([sx, sy], k) => (
            <circle key={k} cx={x + sx} cy={TOP + sy} r={k % 2 ? 2.5 : 3.5} opacity={i === 2 ? 1 : 0.6} />
          ))}
        </g>
      )}
      {i === 2 && <path d={`M ${x + 318} ${TOP + 62} a 26 26 0 1 0 22 40 a 20 20 0 1 1 -22 -40 Z`} fill="#fbe7b0" />}
      <path d={`M ${x} ${FLOOR - 60} L ${x + 120} ${TOP + 150} L ${x + 200} ${FLOOR - 100} L ${x + 290} ${TOP + 135} L ${x + PANEL_W} ${FLOOR - 80} L ${x + PANEL_W} ${FLOOR} L ${x} ${FLOOR} Z`} fill={HILL[i]} />
      <rect x={x} y={FLOOR} width={PANEL_W} height={TOP + PANEL_H - FLOOR} fill={GROUND[i]} />
      <line x1={x} y1={FLOOR} x2={x + PANEL_W} y2={FLOOR} stroke={i === 3 ? '#9db8cf' : '#2f4220'} strokeWidth="3" />
    </g>
  )
}

/** A mug in Pip's frame, held in front with both paws. Steam while it is hot. */
const mug = (hot) => `
  ${hot ? '<path d="M -8 118 q -7 -8 0 -16 q 7 -8 0 -16 M 8 118 q -7 -8 0 -16 q 7 -8 0 -16" stroke="#ffffff" stroke-width="4" fill="none" stroke-linecap="round"/>' : ''}
  <path d="M -20 124 L -17 162 Q -16 168 -10 168 L 10 168 Q 16 168 17 162 L 20 124 Z" fill="#ffffff" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M -19 134 L 19 134" stroke="${TEAL}" stroke-width="5"/>`

function Pip({ x, i }) {
  const holding = i < 2
  const props = [
    { mood: 'happy', hats: 0 },
    { mood: 'calm', hats: 1 },
    { mood: 'sad', hats: 5 },
    { frozen: true, hats: 5 },
  ][i]
  const bx = x + PIP_X
  return (
    <g>
      <StoryCharacter x={bx} y={PIP_Y} scale={PIP} mood={props.mood} frozen={props.frozen}
        handLeft={holding ? [-25, 148] : undefined} handRight={holding ? [25, 148] : undefined}
        wear={hats(props.hats) + (holding ? mug(i === 0) : '')} />
    </g>
  )
}

export function NightStory({ isDisplayMode = false }) {
  // panels 0..k are shown; k = 4 adds the clue; k = 5 melts the ice
  const [k, setK] = useState(0)
  const big = isDisplayMode
  const asked = k >= 3
  const melted = k >= LAST

  return (
    <div className="w-full h-full flex flex-col gap-3 select-none">
      <div className="flex-1 min-h-0 w-full">
        <svg viewBox={`0 0 1640 ${VB_H}`} className="w-full h-full" preserveAspectRatio="xMidYMid meet">
          <rect x="0" y="0" width="1640" height={VB_H} rx="16" fill="#ffffff" />
          <defs>
            {CAPTIONS.map((_, i) => (
              <clipPath key={i} id={`pip-night-p${i}`}><rect x={px(i)} y={TOP} width={PANEL_W} height={PANEL_H} rx="20" /></clipPath>
            ))}
          </defs>
          {CAPTIONS.map((cap, i) => {
            const x = px(i)
            const shown = i <= k
            return (
              <g key={i}>
                {shown ? (
                  <g clipPath={`url(#pip-night-p${i})`}>
                    <Sky x={x} i={i} />
                    <Tent x={x} frost={i === 3} />
                    <Thermometer x={x} temp={i === 3 && melted ? ANSWER : TEMPS[i]} />
                    <Pip x={x} i={i} />
                  </g>
                ) : (
                  <g>
                    <rect x={x} y={TOP} width={PANEL_W} height={PANEL_H} rx="20" fill="#f4f6f8" />
                    <text x={x + PANEL_W / 2} y={TOP + 220} fontFamily={FONT} fontSize="150" fontWeight="900" fill={RULE} textAnchor="middle">?</text>
                  </g>
                )}
                <rect x={x} y={TOP} width={PANEL_W} height={PANEL_H} rx="20" fill="none" stroke={shown ? '#c9d3dc' : RULE} strokeWidth="3" strokeDasharray={shown ? undefined : '10 8'} />
                <circle cx={x + PANEL_W - 32} cy={TOP + 32} r="23" fill={shown ? BLUE : RULE} stroke="#ffffff" strokeWidth={shown ? 3 : 0} />
                <text x={x + PANEL_W - 32} y={TOP + 41} fontFamily={FONT} fontSize="28" fontWeight="900" fill="#ffffff" textAnchor="middle">{i + 1}</text>
                {shown && (i === 3 && melted ? MELTED_CAPTION : cap).map((line, j) => (
                  <text key={j} x={x + PANEL_W / 2} y={CAP_Y + j * CAP_LH} fontFamily={FONT} fontSize="30" fontWeight={j === 0 ? 900 : 700} fill={INK} textAnchor="middle">{line}</text>
                ))}
              </g>
            )
          })}
          {asked && (
            <g>
              <rect x="30" y={BOX_Y} width="1580" height="92" rx="16" fill="#e2f2f6" stroke={TEAL} strokeWidth="3" />
              <text x="820" y={k >= 4 ? BOX_Y + 36 : BOX_Y + 56} fontFamily={FONT} fontSize="30" fontWeight="900" fill={INK} textAnchor="middle">
                It falls by 3 °C every 3 hours. What does the thermometer say at 6 a.m.?
              </text>
              {k === 4 && (
                <text x="820" y={BOX_Y + 76} fontFamily={FONT} fontSize="28" fontWeight="900" fill={TEAL} textAnchor="middle">
                  A clue: it falls at 3 a.m. and again at 6 a.m.
                </text>
              )}
              {melted && (
                <text x="820" y={BOX_Y + 76} fontFamily={FONT} fontSize="28" fontWeight="900" fill={GREEN} textAnchor="middle">
                  It falls 6 °C in all: 2 − 6 = −4 °C.
                </text>
              )}
            </g>
          )}
        </svg>
      </div>
      <div className="shrink-0 flex items-center justify-center gap-3 flex-wrap">
        <Btn big={big} tone="slate" icon={Undo2} disabled={k === 0} onClick={() => setK((v) => Math.max(0, v - 1))}>Back</Btn>
        <Btn big={big} tone="orange" icon={ChevronRight} disabled={k === LAST} onClick={() => setK((v) => Math.min(LAST, v + 1))}>
          {k === 3 ? 'A clue' : k >= 4 ? 'Melt the ice' : 'What happens next?'}
        </Btn>
        <Btn big={big} tone="teal" icon={RotateCcw} disabled={k === 0} onClick={() => setK(0)}>Start again</Btn>
      </div>
    </div>
  )
}
