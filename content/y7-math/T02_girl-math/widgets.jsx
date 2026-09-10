// content/y7-math/T02_girl-math/widgets.jsx
// Girl Math — ten timed rounds of sharing rice paper by a set of rules.
//
// WHY A GAME AND NOT A SLIDE. Ten of these as printed questions is a worksheet,
// and a worksheet is worked at ten different speeds by twenty-two students. The
// three things that make it a lesson are all things a slide cannot do: a clock
// that makes everybody start and stop together, a reveal that comes out one girl
// at a time so a half-right answer can still be caught, and a prize on each
// round that is bigger when the round is harder, so the class can see the
// difficulty going up rather than just feeling it.
//
// WHAT IS DELIBERATELY NOT IN IT. There is no answer box to type in. The class
// works on mini whiteboards, the teacher says who got it right, and the teacher
// taps a team to award that round's rolls — a keyboard on a projector means one
// student doing maths and twenty-one watching. There is no sound, no confetti
// and no per-question scoring: the only interactive parts are the clock, the
// reveal and the award.
//
// THE MATHS BEHIND THE ROUNDS. Every round is a bar model. "Twice as many" is
// two boxes the same size as one box; "3 more than" is a box plus a loose 3
// that comes off the total FIRST. The rounds add boxes and extras until round
// 10, which is eight girls in an arithmetic staircase. The answers here are the
// answers on the slides' bar models, worked the same way.
//
// It takes the deck's `lang` and, because a `game` slide hands the widget the
// whole slide, also `isDisplayMode` — so its type scales up on the projector
// the way every layout does.
import { useState, useEffect } from 'react'
import {
  Timer, Play, Pause, Plus, Eye, ArrowRight, RotateCcw, Trophy, Undo2, Users,
} from 'lucide-react'

const pick = (lang, en, vn) => (lang === 'vn' ? (vn ?? en) : en)

// One colour per girl, kept the same in every round so a name is recognised
// before it is read — which for this class is the whole point.
const GIRLS = {
  Erica: '#c8102e',
  Nam: '#0087a8',
  Carrot: '#c25e12',
  Su: '#5c2483',
  Tess: '#4a8b23',
  Lily: '#c02a6e',
  Ana: '#1a5fa8',
  Amada: '#8a6a12',
}
const BOWEN = '#475569'

const T = {
  brand: ['Girl Math', 'Toán Của Các Bạn Nữ'],
  tagline: ['Share the rice paper. Beat the clock.', 'Chia bánh tráng. Nhanh hơn đồng hồ.'],
  howMany: ['How many teams?', 'Chia lớp làm mấy đội?'],
  start: ['Start the game', 'Bắt đầu'],
  round: ['Round', 'Vòng'],
  of: ['of', 'trên'],
  worth: ['Worth', 'Thưởng'],
  rolls: ['rolls', 'cuốn'],
  pieces: ['pieces of rice paper to share', 'miếng bánh tráng để chia'],
  startTimer: ['Start the clock', 'Bắt đầu tính giờ'],
  pause: ['Pause', 'Tạm dừng'],
  resume: ['Carry on', 'Tiếp tục'],
  addTime: ['+30 seconds', '+30 giây'],
  timeUp: ['TIME!', 'HẾT GIỜ!'],
  show: ['Show', 'Hiện'],
  checkIt: ['Check it', 'Kiểm tra lại'],
  nextRound: ['Next round', 'Vòng tiếp theo'],
  finish: ['Finish', 'Kết thúc'],
  team: ['Team', 'Đội'],
  award: ['Tap a team to give them the rolls', 'Chạm vào đội để tặng cuốn cho đội đó'],
  undo: ['Undo', 'Hoàn tác'],
  whiteboards: ['Whiteboards. No shouting.', 'Viết ra bảng con. Không hô đáp án.'],
  winner: ['Winner', 'Đội thắng'],
  playAgain: ['Play again', 'Chơi lại'],
  done: ['That is all ten rounds', 'Xong cả mười vòng'],
}
const t = (lang, k) => T[k][lang === 'vn' ? 1 : 0]

/* ============================================================= *
 * THE TEN ROUNDS
 *
 * `rules` are read out; `answers` are revealed one at a time, in an order that
 * starts with the girl every other rule is measured against. `spare` is a share
 * that does not go to a girl, so the check line still adds to the total.
 *
 * Difficulty climbs by boxes, not by arithmetic: 2 girls, then 3, then an extra
 * to take off the total first, then 4, then a total that has already been
 * raided, then 5, then all eight. `prize` climbs with it, so the class can see
 * the difficulty rising instead of only feeling it.
 * ============================================================= */
const ROUNDS = [
  {
    total: 12, prize: 2, seconds: 90,
    rules: [
      ['Carrot gets twice as many pieces as Erica.', 'Carrot được số miếng gấp đôi Erica.'],
    ],
    why: ['Carrot brought the sauce, so nobody argues.', 'Carrot mang nước chấm tới, nên không ai cãi.'],
    answers: [['Erica', 4], ['Carrot', 8]],
  },
  {
    total: 15, prize: 2, seconds: 90,
    rules: [
      ['Nam gets 3 more pieces than Su.', 'Nam được nhiều hơn Su 3 miếng.'],
    ],
    why: ['Nam carried the whole bag from the shop.', 'Nam xách cả túi từ cửa hàng về.'],
    answers: [['Su', 6], ['Nam', 9]],
  },
  {
    total: 20, prize: 3, seconds: 120,
    rules: [
      ['Tess gets twice as many as Lily.', 'Tess được gấp đôi Lily.'],
      ['Ana gets the same as Lily.', 'Ana được bằng Lily.'],
    ],
    why: ['Ana and Lily always have exactly the same lunch.', 'Ana và Lily lúc nào cũng ăn giống hệt nhau.'],
    answers: [['Lily', 5], ['Tess', 10], ['Ana', 5]],
  },
  {
    total: 22, prize: 3, seconds: 120,
    rules: [
      ['Carrot gets twice as many as Erica.', 'Carrot được gấp đôi Erica.'],
      ['Nam gets 2 more than Erica.', 'Nam được nhiều hơn Erica 2 miếng.'],
    ],
    why: ['Nam found the last packet at the back of the shelf.', 'Nam tìm được gói cuối cùng ở phía sau kệ.'],
    answers: [['Erica', 5], ['Carrot', 10], ['Nam', 7]],
  },
  {
    total: 36, prize: 4, seconds: 150,
    rules: [
      ['Su gets three times as many as Amada.', 'Su được gấp ba Amada.'],
      ['Tess gets 6 fewer than Su.', 'Tess được ít hơn Su 6 miếng.'],
    ],
    why: ['Tess ate six of them on the way here.', 'Tess đã ăn mất sáu miếng trên đường tới.'],
    answers: [['Amada', 6], ['Su', 18], ['Tess', 12]],
  },
  {
    total: 30, prize: 4, seconds: 150,
    rules: [
      ['They stand in a line: Erica, Tess, Ana, Lily.', 'Các bạn xếp hàng: Erica, Tess, Ana, Lily.'],
      ['Each girl gets 1 more than the girl in front of her.', 'Mỗi bạn được nhiều hơn bạn đứng trước 1 miếng.'],
    ],
    why: ['Erica is at the front and is not happy about it.', 'Erica đứng đầu hàng và không vui lắm.'],
    answers: [['Erica', 6], ['Tess', 7], ['Ana', 8], ['Lily', 9]],
  },
  {
    total: 32, prize: 5, seconds: 150,
    rules: [
      ['Nam gets twice as many as Su.', 'Nam được gấp đôi Su.'],
      ['Carrot gets twice as many as Nam.', 'Carrot được gấp đôi Nam.'],
      ['Amada gets the same as Su.', 'Amada được bằng Su.'],
    ],
    why: ['Amada was on the phone and missed the whole argument.', 'Amada mải nghe điện thoại nên bỏ lỡ cả cuộc tranh cãi.'],
    answers: [['Su', 4], ['Nam', 8], ['Carrot', 16], ['Amada', 4]],
  },
  {
    total: 43, prize: 6, seconds: 180,
    rules: [
      ['Mr Bowen eats 4 pieces before anybody notices.', 'Thầy Bowen ăn mất 4 miếng trước khi ai kịp thấy.'],
      ['Su gets twice as many as Tess.', 'Su được gấp đôi Tess.'],
      ['Lily gets 3 more than Tess.', 'Lily được nhiều hơn Tess 3 miếng.'],
    ],
    why: ['He says it was a quality check.', 'Thầy bảo đó là kiểm tra chất lượng.'],
    spare: [['Mr Bowen', 'Thầy Bowen'], 4],
    answers: [['Tess', 9], ['Su', 18], ['Lily', 12]],
  },
  {
    total: 45, prize: 7, seconds: 180,
    rules: [
      ['Ana gets twice as many as Erica.', 'Ana được gấp đôi Erica.'],
      ['Su gets the same as Erica.', 'Su được bằng Erica.'],
      ['Nam gets 3 more than Ana.', 'Nam được nhiều hơn Ana 3 miếng.'],
      ['Tess gets 1 fewer than Nam.', 'Tess được ít hơn Nam 1 miếng.'],
    ],
    why: ['Tess dropped one and we are all pretending we did not see.', 'Tess đánh rơi một miếng và cả nhóm giả vờ không thấy.'],
    answers: [['Erica', 5], ['Su', 5], ['Ana', 10], ['Nam', 13], ['Tess', 12]],
  },
  {
    total: 60, prize: 8, seconds: 210,
    rules: [
      ['All eight, in this order: Erica, Nam, Carrot, Su, Tess, Lily, Ana, Amada.', 'Cả tám bạn, theo thứ tự: Erica, Nam, Carrot, Su, Tess, Lily, Ana, Amada.'],
      ['Each one gets 1 more piece than the one before her.', 'Mỗi bạn được nhiều hơn bạn trước 1 miếng.'],
    ],
    why: ['They lined up by how loudly they said "bánh tráng".', 'Các bạn xếp hàng theo độ to khi hô "bánh tráng".'],
    answers: [['Erica', 4], ['Nam', 5], ['Carrot', 6], ['Su', 7], ['Tess', 8], ['Lily', 9], ['Ana', 10], ['Amada', 11]],
  },
]

const TEAM_TONES = ['#1cb0f6', '#4a8b23', '#c25e12', '#5c2483']

const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

/** A little stack of rice paper rounds. Decoration, and the only one there is. */
const RicePaper = ({ size = 84 }) => (
  <svg viewBox="0 0 120 120" width={size} height={size} aria-hidden="true">
    <circle cx="52" cy="66" r="42" fill="#efe0c4" stroke="#b99f6e" strokeWidth="3" />
    <circle cx="62" cy="58" r="42" fill="#f7ecd6" stroke="#b99f6e" strokeWidth="3" />
    <circle cx="62" cy="58" r="30" fill="none" stroke="#dfcba4" strokeWidth="2" />
    <path d="M40 40 L84 76 M84 40 L40 76" stroke="#e2d0ad" strokeWidth="2" fill="none" />
  </svg>
)

export function GirlMathGame({ lang = 'en', isDisplayMode = false }) {
  const z = (big, small) => (isDisplayMode ? big : small)

  const [screen, setScreen] = useState('menu')
  const [teamCount, setTeamCount] = useState(3)
  const [scores, setScores] = useState([0, 0, 0, 0])
  const [awards, setAwards] = useState([]) // team indexes, newest last — for Undo
  const [r, setR] = useState(0)
  const [shown, setShown] = useState(0)
  const [left, setLeft] = useState(ROUNDS[0].seconds)
  const [running, setRunning] = useState(false)

  const round = ROUNDS[r]

  useEffect(() => {
    if (!running || left <= 0) return undefined
    const id = setTimeout(() => setLeft(left - 1), 1000)
    return () => clearTimeout(id)
  }, [running, left])

  const goRound = (i) => {
    setR(i)
    setShown(0)
    setLeft(ROUNDS[i].seconds)
    setRunning(false)
  }

  const award = (k) => {
    setScores(scores.map((v, j) => (j === k ? v + round.prize : v)))
    setAwards([...awards, [k, round.prize]])
  }
  const undo = () => {
    if (!awards.length) return
    const [k, p] = awards[awards.length - 1]
    setScores(scores.map((v, j) => (j === k ? v - p : v)))
    setAwards(awards.slice(0, -1))
  }

  const restart = () => {
    setScores([0, 0, 0, 0])
    setAwards([])
    goRound(0)
    setScreen('menu')
  }

  // ── Menu ──────────────────────────────────────────────────────────────────
  if (screen === 'menu') {
    return (
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center text-center p-6 bg-slate-50 dark:bg-slate-950">
        <div className="flex items-center gap-4 mb-2">
          <RicePaper size={z(120, 88)} />
          <div className="text-left">
            <h1 className={`font-black tracking-tight text-[#c02a6e] ${z('text-[clamp(3rem,6vw,6rem)]', 'text-5xl lg:text-6xl')}`}>
              {t(lang, 'brand')}
            </h1>
            <p className={`font-bold text-slate-500 dark:text-slate-400 ${z('text-[clamp(1.1rem,2vw,1.8rem)]', 'text-lg')}`}>
              {t(lang, 'tagline')}
            </p>
          </div>
        </div>

        <p className={`mt-8 mb-3 font-black uppercase tracking-[0.2em] text-slate-400 ${z('text-base', 'text-xs')}`}>
          {t(lang, 'howMany')}
        </p>
        <div className="flex items-center gap-2 mb-8">
          {[2, 3, 4].map((n) => (
            <button
              key={n}
              onClick={() => setTeamCount(n)}
              className={`rounded-2xl font-black border-2 active:scale-95 transition-all ${z('w-20 h-20 text-3xl', 'w-14 h-14 text-xl')} ${n === teamCount ? 'text-white border-transparent' : 'text-slate-500 dark:text-slate-300 border-slate-200 dark:border-slate-600'}`}
              style={n === teamCount ? { backgroundColor: '#c02a6e' } : undefined}>
              {n}
            </button>
          ))}
        </div>

        <button
          onClick={() => { setScreen('play'); goRound(0) }}
          className={`rounded-2xl font-black uppercase tracking-widest text-white bg-[#c02a6e] border-b-4 border-[#8e1f52] active:border-b-0 active:translate-y-1 transition-all ${z('px-14 py-6 text-2xl', 'px-10 py-4 text-lg')}`}>
          {t(lang, 'start')}
        </button>

        <p className={`mt-8 font-bold text-slate-400 ${z('text-lg', 'text-sm')}`}>
          {lang === 'vn' ? '10 vòng · càng về sau càng khó và càng nhiều cuốn' : '10 rounds · they get harder, and worth more rolls'}
        </p>
      </div>
    )
  }

  // ── End ───────────────────────────────────────────────────────────────────
  if (screen === 'end') {
    const best = Math.max(...scores.slice(0, teamCount))
    return (
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center text-center p-6 bg-slate-50 dark:bg-slate-950">
        <Trophy className={z('w-24 h-24', 'w-16 h-16')} style={{ color: '#c02a6e' }} strokeWidth={2.5} />
        <h1 className={`font-black tracking-tight text-slate-800 dark:text-slate-100 mt-4 ${z('text-[clamp(2.5rem,5vw,5rem)]', 'text-4xl lg:text-5xl')}`}>
          {t(lang, 'done')}
        </h1>
        <div className="flex flex-wrap items-end justify-center gap-4 mt-10">
          {scores.slice(0, teamCount).map((v, k) => (
            <div
              key={k}
              className={`rounded-2xl border-4 shadow-sm ${z('px-10 py-7', 'px-7 py-5')} ${v === best ? '' : 'opacity-70'}`}
              style={{ borderColor: TEAM_TONES[k], backgroundColor: `${TEAM_TONES[k]}14` }}>
              <div className={`font-black uppercase tracking-widest ${z('text-lg', 'text-xs')}`} style={{ color: TEAM_TONES[k] }}>
                {t(lang, 'team')} {k + 1}
              </div>
              <div className={`font-black tabular-nums text-slate-800 dark:text-slate-100 ${z('text-7xl', 'text-5xl')}`}>{v}</div>
              <div className={`font-bold text-slate-400 ${z('text-base', 'text-xs')}`}>{t(lang, 'rolls')}</div>
            </div>
          ))}
        </div>
        <button
          onClick={restart}
          className={`mt-12 rounded-2xl font-black uppercase tracking-widest text-white bg-[#c02a6e] border-b-4 border-[#8e1f52] active:border-b-0 active:translate-y-1 transition-all ${z('px-12 py-5 text-xl', 'px-8 py-3.5 text-base')}`}>
          <RotateCcw className="inline w-5 h-5 mr-2" strokeWidth={3} />{t(lang, 'playAgain')}
        </button>
      </div>
    )
  }

  // ── A round ───────────────────────────────────────────────────────────────
  const done = shown >= round.answers.length
  const nextName = done ? null : round.answers[shown][0]
  const timeUp = left === 0
  const sumLine = [...round.answers.map(([, n]) => n), ...(round.spare ? [round.spare[1]] : [])]

  return (
    <div className={`flex-1 min-h-0 flex flex-col gap-2 bg-slate-50 dark:bg-slate-950 ${z('p-6', 'p-3 sm:p-4')}`}>
      {/* Clock · round · prize.
          The clock is FIRST, on the left, because the deck's floating controls
          sit over the top right of a projected slide until they idle out — and
          the one thing a timed game must never have covered is the clock. */}
      <div className="flex-shrink-0 flex items-center gap-2 sm:gap-3">
        <span
          className={`rounded-xl font-black tabular-nums border-2 flex items-center gap-2 ${z('px-6 py-2.5 text-4xl', 'px-4 py-1.5 text-2xl')} ${timeUp ? 'text-white bg-[#c8102e] border-[#c8102e] animate-pulse' : left <= 20 ? 'text-[#c8102e] border-[#c8102e] bg-[#c8102e]/10' : 'text-slate-700 dark:text-slate-200 border-slate-300 dark:border-slate-600'}`}>
          <Timer className={z('w-8 h-8', 'w-5 h-5')} strokeWidth={3} />
          {timeUp ? t(lang, 'timeUp') : mmss(left)}
        </span>
        <span className={`rounded-xl font-black uppercase tracking-widest text-white bg-[#c02a6e] ${z('px-5 py-2.5 text-lg', 'px-3 py-1.5 text-xs')}`}>
          {t(lang, 'round')} {r + 1} {t(lang, 'of')} {ROUNDS.length}
        </span>
        <span className={`rounded-xl font-black uppercase tracking-widest border-2 border-[#c25e12] text-[#c25e12] bg-[#c25e12]/10 ${z('px-5 py-2.5 text-lg', 'px-3 py-1.5 text-xs')}`}>
          {t(lang, 'worth')} {round.prize} {t(lang, 'rolls')}
        </span>
        <div className="flex-1" />
        <span className={`font-bold uppercase tracking-[0.2em] text-slate-400 hidden xl:inline ${z('text-sm', 'text-[10px]')}`}>
          {t(lang, 'whiteboards')}
        </span>
      </div>

      {/* The pile, and the rules */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-3 overflow-hidden">
        <div className="flex-shrink-0 lg:w-[28%] flex lg:flex-col items-center justify-center gap-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 p-3">
          <RicePaper size={z(150, 92)} />
          <div className="text-center">
            <div className={`font-black tabular-nums text-slate-800 dark:text-slate-100 leading-none ${z('text-8xl', 'text-6xl')}`}>{round.total}</div>
            <div className={`font-bold text-slate-500 dark:text-slate-400 leading-tight mt-1 ${z('text-xl', 'text-sm')}`}>{t(lang, 'pieces')}</div>
          </div>
        </div>

        <div className="flex-1 min-h-0 flex flex-col justify-center gap-2 overflow-y-auto custom-scrollbar">
          {round.rules.map((rule, k) => (
            <div key={k} className="flex items-start gap-3 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 px-4 py-3">
              <span className={`flex-shrink-0 rounded-full bg-[#c02a6e] text-white font-black flex items-center justify-center ${z('w-11 h-11 text-xl', 'w-7 h-7 text-sm')}`}>{k + 1}</span>
              <span className={`font-black text-slate-800 dark:text-slate-100 leading-snug ${z('text-[clamp(1.4rem,2.4vw,2.4rem)]', 'text-lg lg:text-2xl')}`}>
                {pick(lang, rule[0], rule[1])}
              </span>
            </div>
          ))}
          <p className={`font-bold italic text-slate-400 px-2 ${z('text-xl', 'text-sm')}`}>
            {pick(lang, round.why[0], round.why[1])}
          </p>
        </div>
      </div>

      {/* The answers, one at a time */}
      <div className="flex-shrink-0 flex flex-wrap items-stretch gap-2">
        {round.spare && (
          <div
            className={`rounded-2xl border-2 border-dashed flex flex-col items-center justify-center ${z('px-6 py-3', 'px-4 py-2')}`}
            style={{ borderColor: BOWEN, backgroundColor: `${BOWEN}10` }}>
            <span className={`font-black uppercase tracking-widest ${z('text-base', 'text-[10px]')}`} style={{ color: BOWEN }}>
              {pick(lang, round.spare[0][0], round.spare[0][1])}
            </span>
            <span className={`font-black tabular-nums leading-none ${z('text-5xl', 'text-3xl')}`} style={{ color: BOWEN }}>
              {round.spare[1]}
            </span>
          </div>
        )}
        {round.answers.map(([name, n], k) => {
          const on = k < shown
          const tone = GIRLS[name]
          return (
            <div
              key={name}
              className={`flex-1 min-w-[92px] rounded-2xl border-2 flex flex-col items-center justify-center transition-all ${z('px-4 py-3', 'px-3 py-2')}`}
              style={{ borderColor: on ? tone : '#cbd5e1', backgroundColor: on ? `${tone}14` : 'transparent' }}>
              <span className={`font-black uppercase tracking-widest ${z('text-base', 'text-[10px]')}`} style={{ color: on ? tone : '#94a3b8' }}>{name}</span>
              <span className={`font-black tabular-nums leading-none ${z('text-6xl', 'text-4xl')}`} style={{ color: on ? tone : '#cbd5e1' }}>
                {on ? n : '?'}
              </span>
            </div>
          )
        })}
        {done && (
          <div className="flex-1 min-w-[180px] rounded-2xl border-2 border-[#4a8b23] bg-[#4a8b23]/10 flex flex-col items-center justify-center px-4 py-2">
            <span className={`font-black uppercase tracking-widest text-[#4a8b23] ${z('text-base', 'text-[10px]')}`}>{t(lang, 'checkIt')}</span>
            <span className={`font-black tabular-nums text-[#4a8b23] leading-tight text-center ${z('text-2xl', 'text-base')}`}>
              {sumLine.join(' + ')} = {round.total}
            </span>
          </div>
        )}
      </div>

      {/* Clock, reveal, and the scoreboard */}
      <div className="flex-shrink-0 flex flex-wrap items-center gap-2">
        <button
          onClick={() => setRunning(!running)}
          disabled={timeUp}
          className={`rounded-xl font-black uppercase tracking-widest border-2 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 disabled:opacity-30 active:scale-95 flex items-center gap-2 ${z('px-6 py-3 text-base', 'px-4 py-2.5 text-xs')}`}>
          {running ? <Pause className={z('w-6 h-6', 'w-4 h-4')} strokeWidth={3} /> : <Play className={z('w-6 h-6', 'w-4 h-4')} strokeWidth={3} />}
          {running ? t(lang, 'pause') : left === round.seconds ? t(lang, 'startTimer') : t(lang, 'resume')}
        </button>
        <button
          onClick={() => { setLeft(left + 30); }}
          className={`rounded-xl font-black uppercase tracking-widest border-2 border-slate-300 dark:border-slate-600 text-slate-600 dark:text-slate-300 active:scale-95 flex items-center gap-1 ${z('px-6 py-3 text-base', 'px-4 py-2.5 text-xs')}`}>
          <Plus className={z('w-6 h-6', 'w-4 h-4')} strokeWidth={3} />30
        </button>

        <button
          onClick={() => (done ? (r + 1 < ROUNDS.length ? goRound(r + 1) : setScreen('end')) : setShown(shown + 1))}
          className={`flex-1 min-w-[220px] rounded-xl font-black uppercase tracking-widest text-white border-b-4 active:border-b-0 active:translate-y-1 transition-all flex items-center justify-center gap-2 ${z('py-4 text-xl', 'py-2.5 text-sm')}`}
          style={done
            ? { backgroundColor: '#c02a6e', borderColor: '#8e1f52' }
            : { backgroundColor: '#0087a8', borderColor: '#00697f' }}>
          {done
            ? <>{r + 1 < ROUNDS.length ? t(lang, 'nextRound') : t(lang, 'finish')}<ArrowRight className={z('w-6 h-6', 'w-4 h-4')} strokeWidth={3} /></>
            : <><Eye className={z('w-6 h-6', 'w-4 h-4')} strokeWidth={3} />{t(lang, 'show')} {nextName}</>}
        </button>

        <div className="flex items-center gap-2">
          <Users className={`text-slate-400 ${z('w-6 h-6', 'w-4 h-4')}`} strokeWidth={3} />
          {scores.slice(0, teamCount).map((v, k) => (
            <button
              key={k}
              onClick={() => award(k)}
              title={t(lang, 'award')}
              className={`rounded-xl font-black border-2 active:scale-95 transition-all flex items-center gap-2 ${z('px-5 py-3 text-2xl', 'px-3 py-2 text-base')}`}
              style={{ borderColor: TEAM_TONES[k], color: TEAM_TONES[k], backgroundColor: `${TEAM_TONES[k]}12` }}>
              <span className={`font-black uppercase tracking-widest opacity-70 ${z('text-sm', 'text-[10px]')}`}>{t(lang, 'team')} {k + 1}</span>
              <span className="tabular-nums">{v}</span>
            </button>
          ))}
          <button
            onClick={undo}
            disabled={!awards.length}
            title={t(lang, 'undo')}
            className={`rounded-xl border-2 border-slate-300 dark:border-slate-600 text-slate-500 disabled:opacity-30 active:scale-95 ${z('px-3 py-3', 'px-2 py-2')}`}>
            <Undo2 className={z('w-6 h-6', 'w-4 h-4')} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  )
}
