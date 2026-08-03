// content/y7-science/U00_1/widgets.jsx
// Interactive tools for Day One.
//
// Each widget does one thing a static slide cannot, and each takes the deck's
// `lang` so its own interface is bilingual like the rest of the slide. Colours
// are the Cambridge tokens used by the note cards and the diagrams.
import { useState, useEffect, useRef } from 'react'

const TEAL = '#0087a8'
const PURPLE = '#5c2483'
const ORANGE = '#c25e12'
const GREEN = '#4a8b23'
const RED = '#c8102e'
const BLUE = '#1a5fa8'

const pick = (lang, en, vn) => (lang === 'vn' ? (vn ?? en) : en)

// Shared shells so every widget on the projector has the same silhouette.
const Stage = ({ children, className = '' }) => (
  <div className={`flex-1 min-h-[210px] w-full bg-white dark:bg-slate-900 rounded-2xl sm:rounded-[2rem] border-2 border-slate-200 dark:border-slate-700 shadow-inner relative flex flex-col p-3 sm:p-4 overflow-hidden ${className}`}>
    {children}
  </div>
)

const Controls = ({ children }) => (
  <div className="w-full bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-2xl shadow-sm border-2 border-slate-200 dark:border-slate-700 mt-2 flex-shrink-0">
    {children}
  </div>
)

/** The one big teacher-paced button every widget here is driven by. */
const BigButton = ({ onClick, colour, children, disabled = false }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="flex-1 px-4 py-3 rounded-xl text-white font-black uppercase tracking-widest text-xs sm:text-sm shadow-sm active:scale-95 disabled:opacity-40 disabled:active:scale-100 transition"
    style={{ backgroundColor: colour }}
  >
    {children}
  </button>
)

const SmallButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="px-4 py-3 rounded-xl font-black uppercase tracking-widest text-xs sm:text-sm bg-slate-100 dark:bg-slate-700 border-2 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 active:scale-95"
  >
    {children}
  </button>
)

/* ============================================================= *
 * WIDGET 1 — THE WEEKLY SCHEDULE
 * The Year 7 timetable as the students will actually read it,
 * with Mr Bowen's four blocks (homeroom, science, math, Thursday
 * review) lit up and everything else left quiet. Tapping a row
 * pulls it out big enough to read from the back of the room.
 * ============================================================= */
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
const DAYS_VN = ['T2', 'T3', 'T4', 'T5', 'T6']

// One row per period. `who` is the same all week unless `perDay` is given.
const ROWS = [
  { time: '8:00', label: 'Arrival / Soft Start', labelVn: 'Đến lớp / Khởi động', who: '', tone: 'quiet' },
  { time: '8:30', label: 'Homeroom', labelVn: 'Sinh hoạt lớp', who: 'Mr Bowen', tone: 'mine' },
  { time: '8:45', label: 'Science', labelVn: 'Khoa học', who: 'Mr Bowen', tone: 'mine' },
  { time: '9:35', label: 'English', labelVn: 'Tiếng Anh', who: 'Mr David', tone: 'other' },
  { time: '10:25', label: 'Snack / Break', labelVn: 'Ăn nhẹ / Giải lao', who: '', tone: 'quiet' },
  { time: '10:45', label: 'Math', labelVn: 'Toán', who: 'Mr Bowen', tone: 'mine' },
  { time: '11:35', label: 'History & Executive Function', labelVn: 'Lịch sử & Kỹ năng học tập', who: 'Ms Kiu', tone: 'other' },
  { time: '12:25', label: 'Lunch', labelVn: 'Ăn trưa', who: '', tone: 'quiet' },
  { time: '13:15', label: 'Art of Science / PE', labelVn: 'Nghệ thuật Khoa học / Thể dục', who: 'Mr Seth · Mr Caleb', tone: 'other' },
  { time: '14:05', label: 'Snack / Break', labelVn: 'Ăn nhẹ / Giải lao', who: '', tone: 'quiet' },
  { time: '14:25', label: 'Review / Maker Space / Well-being', labelVn: 'Ôn tập / Maker Space / Sức khoẻ', who: 'Mr David · Mr Bowen · Ms Kiu', tone: 'other' },
]

const TONE_STYLE = {
  mine: { bg: '#e6f4f8', border: TEAL, text: '#0f3f4d' },
  other: { bg: '#ffffff', border: '#cbd5e1', text: '#334155' },
  quiet: { bg: '#f8fafc', border: '#e2e8f0', text: '#94a3b8' },
}

export const ScheduleWidget = ({ lang = 'en' }) => {
  const [selected, setSelected] = useState(null)
  const row = selected == null ? null : ROWS[selected]

  return (
    <div className="w-full h-full flex flex-col">
      <Stage className="!p-2 sm:!p-3">
        <div className="flex items-center justify-between px-1 pb-1.5">
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-400">
            {pick(lang, 'Mon – Fri, every week', 'T2 – T6, mỗi tuần')}
          </span>
          <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest" style={{ color: TEAL }}>
            {pick(lang, 'teal = Mr Bowen', 'xanh = thầy Bowen')}
          </span>
        </div>

        <div className="flex-1 min-h-0 flex flex-col gap-[3px]">
          {ROWS.map((r, i) => {
            const st = TONE_STYLE[r.tone]
            const on = selected === i
            return (
              <button
                key={i}
                onClick={() => setSelected(on ? null : i)}
                className="flex-1 min-h-0 w-full flex items-center gap-2 sm:gap-3 rounded-lg border-2 px-2 sm:px-3 py-0.5 text-left transition"
                style={{
                  backgroundColor: st.bg,
                  borderColor: on ? ORANGE : st.border,
                  boxShadow: on ? `0 0 0 3px ${ORANGE}33` : 'none',
                }}
              >
                <span className="w-12 sm:w-14 shrink-0 font-mono font-black text-[11px] sm:text-[13px] tabular-nums" style={{ color: st.text }}>
                  {r.time}
                </span>
                <span className="flex-1 min-w-0 truncate font-bold text-[12px] sm:text-[14px]" style={{ color: st.text }}>
                  {pick(lang, r.label, r.labelVn)}
                </span>
                {r.who && (
                  <span className="shrink-0 font-semibold text-[10px] sm:text-xs" style={{ color: r.tone === 'mine' ? TEAL : '#94a3b8' }}>
                    {r.who}
                  </span>
                )}
              </button>
            )
          })}
        </div>
      </Stage>

      <Controls>
        <div className="flex items-center gap-3">
          <div className="flex gap-1 shrink-0">
            {(lang === 'vn' ? DAYS_VN : DAYS).map((d) => (
              <span key={d} className="px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-300 font-black text-[10px] sm:text-xs uppercase tracking-widest">
                {d}
              </span>
            ))}
          </div>
          <p className="flex-1 min-w-0 truncate text-right font-bold text-[11px] sm:text-sm text-slate-600 dark:text-slate-300">
            {row
              ? `${row.time} · ${pick(lang, row.label, row.labelVn)}${row.who ? ` · ${row.who}` : ''}`
              : pick(lang, 'Tap a row to read it out.', 'Chạm vào một dòng để đọc to.')}
          </p>
        </div>
      </Controls>
    </div>
  )
}

/* ============================================================= *
 * WIDGET 2 — THE THREE QUESTIONS
 * One question on screen at a time, big, with a countdown so the
 * room writes instead of chatting. Showing all three at once is
 * what makes half the class answer only the easy one.
 * ============================================================= */
const QUESTIONS = [
  {
    q: 'What is something you are really good at that most people here do not know about?',
    qVn: 'Em giỏi điều gì mà hầu hết mọi người ở đây chưa biết?',
    hint: 'Start with: "I am really good at…"',
    hintVn: 'Bắt đầu bằng: "I am really good at…"',
    colour: PURPLE,
  },
  {
    q: 'If you could keep any animal in the world as a pet, which one would you choose, and why?',
    qVn: 'Nếu được nuôi bất kỳ con vật nào trên thế giới, em chọn con nào, và vì sao?',
    hint: 'Start with: "I would choose a … because…"',
    hintVn: 'Bắt đầu bằng: "I would choose a … because…"',
    colour: GREEN,
  },
  {
    q: 'What is the best place you have ever been to, and what did you do there?',
    qVn: 'Nơi tuyệt nhất em từng đến là đâu, và em đã làm gì ở đó?',
    hint: 'Start with: "The best place I have been to is…"',
    hintVn: 'Bắt đầu bằng: "The best place I have been to is…"',
    colour: BLUE,
  },
]

const WRITE_SECONDS = 180

export const QuestionCardsWidget = ({ lang = 'en' }) => {
  const [index, setIndex] = useState(0)
  const [seconds, setSeconds] = useState(WRITE_SECONDS)
  const [running, setRunning] = useState(false)
  const intervalRef = useRef(null)

  useEffect(() => {
    if (!running) return undefined
    intervalRef.current = setInterval(() => {
      setSeconds((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current)
          setRunning(false)
          return 0
        }
        return s - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current)
  }, [running])

  const current = QUESTIONS[index]
  const mm = String(Math.floor(seconds / 60)).padStart(1, '0')
  const ss = String(seconds % 60).padStart(2, '0')
  const low = seconds <= 30

  const go = (next) => {
    setIndex(next)
    setRunning(false)
    setSeconds(WRITE_SECONDS)
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Stage>
        <div className="flex items-center justify-between px-1">
          <div className="flex gap-1.5">
            {QUESTIONS.map((q, i) => (
              <span
                key={i}
                className="w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm text-white"
                style={{ backgroundColor: i === index ? q.colour : '#cbd5e1' }}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <span
            className={`font-mono font-black tabular-nums text-2xl sm:text-3xl ${low ? 'animate-pulse' : ''}`}
            style={{ color: low ? RED : '#94a3b8' }}
          >
            {mm}:{ss}
          </span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <span className="font-black uppercase tracking-[0.2em] text-[10px] sm:text-xs mb-3" style={{ color: current.colour }}>
            {pick(lang, `Slip ${index + 1} of 3`, `Phiếu ${index + 1} / 3`)}
          </span>
          <p className="font-black leading-snug text-slate-800 dark:text-slate-100 text-lg sm:text-2xl">
            {pick(lang, current.q, current.qVn)}
          </p>
          <p className="mt-4 font-bold text-sm sm:text-base text-slate-500 dark:text-slate-400">
            {pick(lang, current.hint, current.hintVn)}
          </p>
        </div>
      </Stage>

      <Controls>
        <div className="flex items-center gap-2">
          <SmallButton onClick={() => go((index + QUESTIONS.length - 1) % QUESTIONS.length)}>←</SmallButton>
          <BigButton onClick={() => setRunning((r) => !r)} colour={running ? RED : ORANGE}>
            {running ? pick(lang, 'Pause', 'Tạm dừng') : pick(lang, 'Start writing', 'Bắt đầu viết')}
          </BigButton>
          <SmallButton onClick={() => go((index + 1) % QUESTIONS.length)}>→</SmallButton>
        </div>
      </Controls>
    </div>
  )
}

/* ============================================================= *
 * WIDGET 3 — GUESS WHO ROUND
 * The four phases of one round of the bin game, one press each,
 * so nobody shouts the answer before the pointing. Also keeps
 * the running count of slips already read.
 * ============================================================= */
const PHASES = [
  {
    label: 'Draw a slip', labelVn: 'Rút một phiếu',
    text: 'Mr Bowen pulls one slip out of the bin. Nobody speaks.',
    textVn: 'Thầy Bowen rút một phiếu từ trong hộp. Cả lớp im lặng.',
    colour: '#64748b',
  },
  {
    label: 'Read it out', labelVn: 'Đọc to phiếu',
    text: 'The answer is read out twice. Listen for a clue about who wrote it.',
    textVn: 'Câu trả lời được đọc to hai lần. Hãy nghe kỹ để đoán ai đã viết.',
    colour: BLUE,
  },
  {
    label: 'Three, two, one — point', labelVn: 'Ba, hai, một — chỉ tay',
    text: 'On "one", everybody points at the person they think wrote it. No talking, no changing.',
    textVn: 'Đến "một", mọi người cùng chỉ vào người mình nghĩ đã viết. Không nói, không đổi.',
    colour: PURPLE,
  },
  {
    label: 'Reveal', labelVn: 'Công bố',
    text: 'The writer stands up and says the answer again as a full sentence.',
    textVn: 'Người viết đứng lên và nói lại câu trả lời bằng một câu hoàn chỉnh.',
    colour: GREEN,
  },
]

export const GuessWhoWidget = ({ lang = 'en' }) => {
  const [phase, setPhase] = useState(0)
  const [round, setRound] = useState(1)

  const current = PHASES[phase]
  const last = phase === PHASES.length - 1

  const next = () => {
    if (last) {
      setPhase(0)
      setRound((r) => r + 1)
    } else {
      setPhase((p) => p + 1)
    }
  }

  return (
    <div className="w-full h-full flex flex-col">
      <Stage>
        <div className="flex items-center justify-between px-1">
          <span className="font-black uppercase tracking-widest text-[10px] sm:text-xs text-slate-400">
            {pick(lang, `Slip number ${round}`, `Phiếu số ${round}`)}
          </span>
          <div className="flex gap-1.5">
            {PHASES.map((p, i) => (
              <span
                key={i}
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: i <= phase ? p.colour : '#cbd5e1' }}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center px-2 sm:px-4">
          <span
            className="px-3 py-1 rounded-full text-white font-black uppercase tracking-[0.18em] text-[10px] sm:text-xs mb-4"
            style={{ backgroundColor: current.colour }}
          >
            {pick(lang, `Step ${phase + 1}`, `Bước ${phase + 1}`)}
          </span>
          <p className="font-black leading-tight text-slate-800 dark:text-slate-100 text-2xl sm:text-4xl">
            {pick(lang, current.label, current.labelVn)}
          </p>
          <p className="mt-4 font-bold text-sm sm:text-lg text-slate-500 dark:text-slate-400 max-w-md">
            {pick(lang, current.text, current.textVn)}
          </p>
        </div>
      </Stage>

      <Controls>
        <div className="flex items-center gap-2">
          <SmallButton onClick={() => setPhase((p) => Math.max(0, p - 1))}>←</SmallButton>
          <BigButton onClick={next} colour={last ? ORANGE : current.colour}>
            {last ? pick(lang, 'Next slip', 'Phiếu tiếp theo') : pick(lang, 'Next step', 'Bước tiếp theo')}
          </BigButton>
        </div>
      </Controls>
    </div>
  )
}
