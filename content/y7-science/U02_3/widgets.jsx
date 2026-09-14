// content/y7-science/U02_3/widgets.jsx
// "Explain It With Particles" — an interactive activity for section 2.3.
//
// WHY A WIDGET. The whole point of 2.3 is that students can CONSTRUCT a
// particle-theory explanation for any change of state. You cannot drill that
// with a static slide — they need to assemble the chain of reasoning
// themselves, get feedback on the order, and do it five times. So the only
// interactive thing is "tap the steps in order", because ORDER is the skill.
//
// WHAT IT DRILLS, mapped to the section:
//   · expanding (heating a solid → particles vibrate more → take up more space)
//   · melting   (vibrate so much → forces can't hold → slide past each other)
//   · boiling   (move so fast → break the forces → escape as gas)
//   · condensing (hit cold surface → lose energy → slow down → forces pull together)
//   · freezing  (lose energy → slow down → lock into fixed pattern)
//
// Each scenario gives 4–5 jumbled sentence strips. Tap them in the right
// order to build the explanation. Wrong order → try again. Right → next
// scenario. No typing, no keyboard — projector-friendly, teacher-paced.
import { useState, useCallback } from 'react'
import { Flame, Snowflake, Sparkles, RotateCcw, ArrowRight, Check, X } from 'lucide-react'

const pick = (lang, en, vn) => (lang === 'vn' ? (vn ?? en) : en)

const T = {
  title: ['Explain It With Particles', 'Giải thích bằng hạt'],
  subtitle: ['Put the steps in order', 'Sắp xếp các bước theo thứ tự'],
  scenario: ['What happens', 'Điều gì xảy ra'],
  yourExplanation: ['Your explanation', 'Bài giải thích của em'],
  tapToOrder: ['Tap the steps in the right order', 'Nhấn các bước theo đúng thứ tự'],
  check: ['Check', 'Kiểm tra'],
  tryAgain: ['Try again', 'Thử lại'],
  correct: ['Correct!', 'Chính xác!'],
  next: ['Next', 'Tiếp theo'],
  reset: ['Reset', 'Đặt lại'],
  done: ['All done!', 'Hoàn thành!'],
  doneMsg: ['You can explain every change of state with particles.', 'Em có thể giải thích mọi sự chuyển thể bằng hạt.'],
  again: ['Start again', 'Làm lại'],
  round: ['of', 'trong'],
}
const t = (lang, key) => T[key][lang === 'vn' ? 1 : 0]

const SCENARIOS = [
  {
    key: 'expand',
    icon: 'heat',
    title: ['Expanding', 'Giãn nở'],
    scene: [
      'Mr Bowen heats an iron bar. It gets slightly bigger.',
      'Thầy Bowen đun nóng một thanh sắt. Nó to ra một chút.',
    ],
    steps: [
      ['Heat energy is transferred to the particles.', 'Nhiệt năng được truyền đến các hạt.'],
      ['The particles vibrate more.', 'Các hạt rung động nhiều hơn.'],
      ['They take up more space.', 'Chúng chiếm nhiều chỗ hơn.'],
      ['The solid expands (gets bigger).', 'Chất rắn giãn nở (to ra).'],
    ],
  },
  {
    key: 'melt',
    icon: 'heat',
    title: ['Melting', 'Nóng chảy'],
    scene: [
      'An ice cube sits on a warm table. It turns into water.',
      'Một viên đá để trên bàn ấm. Nó biến thành nước.',
    ],
    steps: [
      ['Heat energy is transferred to the particles.', 'Nhiệt năng được truyền đến các hạt.'],
      ['The particles vibrate more and more.', 'Các hạt rung động ngày càng nhiều.'],
      ['The attractive forces can no longer hold them in a fixed pattern.', 'Lực hút không còn giữ được chúng trong trật tự cố định.'],
      ['The particles can slide past each other.', 'Các hạt có thể trượt qua nhau.'],
      ['The solid melts into a liquid.', 'Chất rắn nóng chảy thành chất lỏng.'],
    ],
  },
  {
    key: 'boil',
    icon: 'heat',
    title: ['Boiling', 'Sôi'],
    scene: [
      'Water is heated to 100 degrees C. Bubbles form and steam escapes.',
      'Nước được đun đến 100 độ C. Bọt hình thành và hơi thoát ra.',
    ],
    steps: [
      ['Heat energy is transferred to the particles.', 'Nhiệt năng được truyền đến các hạt.'],
      ['The particles move faster and faster.', 'Các hạt chuyển động ngày càng nhanh.'],
      ['Some particles have enough energy to break the attractive forces.', 'Một số hạt có đủ năng lượng để phá vỡ lực hút.'],
      ['They escape from the liquid as a gas.', 'Chúng thoát ra khỏi chất lỏng dưới dạng khí.'],
      ['The liquid boils.', 'Chất lỏng sôi.'],
    ],
  },
  {
    key: 'condense',
    icon: 'cool',
    title: ['Condensing', 'Ngưng tụ'],
    scene: [
      'Steam from a shower hits a cold mirror. Water drops appear.',
      'Hơi nước từ vòi sen chạm vào gương lạnh. Các giọt nước xuất hiện.',
    ],
    steps: [
      ['Gas particles hit the cold surface.', 'Các hạt khí va vào bề mặt lạnh.'],
      ['Heat energy transfers from the particles to the surface.', 'Nhiệt năng truyền từ các hạt sang bề mặt.'],
      ['The particles slow down and get closer together.', 'Các hạt chậm lại và lại gần nhau hơn.'],
      ['The attractive forces pull them back together.', 'Lực hút kéo chúng lại gần nhau.'],
      ['The gas condenses into a liquid.', 'Chất khí ngưng tụ thành chất lỏng.'],
    ],
  },
  {
    key: 'freeze',
    icon: 'cool',
    title: ['Freezing', 'Đông đặc'],
    scene: [
      'A puddle of water freezes into ice overnight.',
      'Một vũng nước đóng băng thành đá qua đêm.',
    ],
    steps: [
      ['Heat energy is transferred away from the particles.', 'Nhiệt năng bị truyền ra khỏi các hạt.'],
      ['The particles slow down.', 'Các hạt chậm lại.'],
      ['They can no longer flow past each other.', 'Chúng không còn chảy qua nhau được nữa.'],
      ['They lock into a fixed pattern.', 'Chúng khóa vào một trật tự cố định.'],
      ['The liquid freezes into a solid.', 'Chất lỏng đông đặc thành chất rắn.'],
    ],
  },
]

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  if (a.every((v, i) => v === arr[i]) && a.length > 1) {
    [a[0], a[1]] = [a[1], a[0]]
  }
  return a
}

export function ExplainIt({ lang = 'en', isDisplayMode = false }) {
  const [round, setRound] = useState(0)
  const [placed, setPlaced] = useState([])
  const [pool, setPool] = useState(() => shuffle(SCENARIOS[0].steps.map((_, i) => i)))
  const [result, setResult] = useState(null) // null | 'wrong' | 'correct'
  const [done, setDone] = useState(false)

  const big = isDisplayMode
  const sc = SCENARIOS[round] || SCENARIOS[0]

  const resetRound = useCallback((idx) => {
    setPlaced([])
    setPool(shuffle(SCENARIOS[idx].steps.map((_, i) => i)))
    setResult(null)
  }, [])

  const tapPool = (stepIdx) => {
    if (result) return
    setPlaced((p) => [...p, stepIdx])
    setPool((p) => p.filter((i) => i !== stepIdx))
  }

  const tapPlaced = (stepIdx) => {
    if (result) return
    setPlaced((p) => p.filter((i) => i !== stepIdx))
    setPool((p) => [...p, stepIdx])
  }

  const check = () => {
    const correct = placed.every((v, i) => v === i)
    setResult(correct ? 'correct' : 'wrong')
  }

  const tryAgain = () => {
    setPlaced([])
    setPool(shuffle(sc.steps.map((_, i) => i)))
    setResult(null)
  }

  const next = () => {
    if (round + 1 >= SCENARIOS.length) {
      setDone(true)
    } else {
      const nr = round + 1
      setRound(nr)
      resetRound(nr)
    }
  }

  const restart = () => {
    setRound(0)
    setDone(false)
    resetRound(0)
  }

  const HEAT_BG = 'bg-[#c25e12]'
  const COOL_BG = 'bg-[#1a5fa8]'

  if (done) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-950 gap-6 p-6">
        <div className="p-4 rounded-2xl bg-emerald-500 text-white shadow-lg">
          <Sparkles className={big ? 'w-14 h-14' : 'w-10 h-10'} strokeWidth={2} />
        </div>
        <div className={`font-black text-slate-800 dark:text-slate-100 text-center ${big ? 'text-4xl' : 'text-2xl sm:text-3xl'}`}>{t(lang, 'done')}</div>
        <div className={`font-bold text-slate-500 dark:text-slate-400 text-center max-w-lg ${big ? 'text-xl' : 'text-base'}`}>{t(lang, 'doneMsg')}</div>
        <button onClick={restart} className={`flex items-center gap-2 rounded-xl font-black uppercase tracking-wide text-white bg-[#0087a8] border-b-4 border-[#00697f] active:border-b-0 active:translate-y-1 transition-all ${big ? 'px-6 py-3 text-lg' : 'px-5 py-2.5 text-sm'}`}>
          <RotateCcw className={big ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={3} />{t(lang, 'again')}
        </button>
      </div>
    )
  }

  const isHeat = sc.icon === 'heat'
  const accentBg = isHeat ? HEAT_BG : COOL_BG
  const IconComp = isHeat ? Flame : Snowflake

  return (
    <div className="w-full h-full flex flex-col bg-slate-50 dark:bg-slate-950 overflow-hidden select-none">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
        <div className="flex items-center gap-3 min-w-0">
          <div className={`p-2 rounded-xl text-white shadow-inner border border-black/10 shrink-0 ${accentBg}`}>
            <IconComp className={big ? 'w-7 h-7' : 'w-5 h-5'} strokeWidth={2.5} />
          </div>
          <div className="min-w-0">
            <div className={`font-black tracking-tight text-slate-800 dark:text-slate-100 leading-none ${big ? 'text-2xl' : 'text-lg sm:text-xl'}`}>{t(lang, 'title')}</div>
            <div className={`font-bold text-slate-400 dark:text-slate-500 truncate ${big ? 'text-sm' : 'text-[11px] sm:text-xs'}`}>{t(lang, 'subtitle')}</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className={`font-black text-slate-400 dark:text-slate-500 tabular-nums ${big ? 'text-lg' : 'text-sm'}`}>
            {round + 1} {t(lang, 'round')} {SCENARIOS.length}
          </span>
          <div className="flex gap-1.5">
            {SCENARIOS.map((s, i) => (
              <div key={s.key} className={`rounded-full transition-all ${big ? 'w-3.5 h-3.5' : 'w-2.5 h-2.5'} ${i < round ? 'bg-emerald-400' : i === round ? 'bg-slate-800 dark:bg-slate-200' : 'bg-slate-300 dark:bg-slate-700'}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Main area */}
      <div className="flex-1 min-h-0 flex flex-col lg:flex-row gap-3 sm:gap-4 p-3 sm:p-4">
        {/* LEFT — scenario */}
        <div className="lg:w-[320px] xl:w-[380px] shrink-0 flex flex-col gap-3">
          {/* Scenario card */}
          <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
            <div className={`px-4 py-2 font-black uppercase tracking-widest text-white ${accentBg} ${big ? 'text-sm' : 'text-[10px] sm:text-xs'}`}>
              {pick(lang, sc.title[0], sc.title[1])}
            </div>
            <div className={`px-4 py-3 font-bold text-slate-700 dark:text-slate-200 leading-relaxed ${big ? 'text-lg' : 'text-sm sm:text-base'}`}>
              {pick(lang, sc.scene[0], sc.scene[1])}
            </div>
          </div>

          {/* Explanation area — placed steps */}
          <div className="flex-1 min-h-0 rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden flex flex-col">
            <div className={`px-4 py-2 font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-slate-800 ${big ? 'text-sm' : 'text-[10px] sm:text-xs'}`}>
              {t(lang, 'yourExplanation')}
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto p-3 flex flex-col gap-2">
              {placed.length === 0 && (
                <div className={`text-center text-slate-400 dark:text-slate-600 font-bold py-4 ${big ? 'text-base' : 'text-xs sm:text-sm'}`}>
                  {t(lang, 'tapToOrder')}
                </div>
              )}
              {placed.map((stepIdx, pos) => {
                const isCorrect = result === 'correct'
                const isWrong = result === 'wrong' && stepIdx !== pos
                return (
                  <button
                    key={stepIdx}
                    onClick={() => tapPlaced(stepIdx)}
                    disabled={!!result}
                    className={`flex items-start gap-2.5 rounded-xl border-2 px-3 py-2 text-left transition-all ${big ? 'text-base' : 'text-xs sm:text-sm'}
                      ${isCorrect ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30' : ''}
                      ${isWrong ? 'border-red-400 bg-red-50 dark:bg-red-950/30 animate-pulse' : ''}
                      ${!result ? 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-slate-300 active:scale-[0.98] cursor-pointer' : ''}
                      ${result && !isWrong && !isCorrect ? 'border-emerald-400 bg-emerald-50 dark:bg-emerald-950/30' : ''}
                    `}
                  >
                    <span className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-black text-white text-xs ${isWrong ? 'bg-red-400' : isCorrect ? 'bg-emerald-500' : 'bg-slate-400 dark:bg-slate-600'}`}>
                      {isCorrect ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : isWrong ? <X className="w-3.5 h-3.5" strokeWidth={3} /> : pos + 1}
                    </span>
                    <span className={`font-bold leading-snug ${isWrong ? 'text-red-700 dark:text-red-300' : 'text-slate-700 dark:text-slate-200'}`}>
                      {pick(lang, sc.steps[stepIdx][0], sc.steps[stepIdx][1])}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* RIGHT — pool of steps + controls */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          {/* Step pool */}
          <div className="flex-1 min-h-0 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-100/50 dark:bg-slate-900/40 p-3 overflow-y-auto flex flex-col gap-2">
            {pool.map((stepIdx) => (
              <button
                key={stepIdx}
                onClick={() => tapPool(stepIdx)}
                className={`flex items-center gap-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 px-4 py-3 text-left font-bold leading-snug text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 active:scale-[0.98] transition-all cursor-pointer shadow-sm ${big ? 'text-base' : 'text-xs sm:text-sm'}`}
              >
                <ArrowRight className={`shrink-0 text-slate-400 ${big ? 'w-5 h-5' : 'w-4 h-4'}`} strokeWidth={2.5} />
                {pick(lang, sc.steps[stepIdx][0], sc.steps[stepIdx][1])}
              </button>
            ))}
            {pool.length === 0 && !result && (
              <div className={`text-center text-slate-400 font-bold py-4 ${big ? 'text-base' : 'text-sm'}`}>
                {t(lang, 'check')} ↓
              </div>
            )}
          </div>

          {/* Controls */}
          <div className="shrink-0 flex items-center justify-center gap-3">
            {pool.length === 0 && !result && (
              <button onClick={check} className={`flex items-center gap-2 rounded-xl font-black uppercase tracking-wide text-white bg-[#0087a8] border-b-4 border-[#00697f] active:border-b-0 active:translate-y-1 transition-all ${big ? 'px-8 py-3 text-lg' : 'px-6 py-2.5 text-sm'}`}>
                <Check className={big ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={3} />{t(lang, 'check')}
              </button>
            )}
            {result === 'wrong' && (
              <button onClick={tryAgain} className={`flex items-center gap-2 rounded-xl font-black uppercase tracking-wide text-white bg-[#c8102e] border-b-4 border-[#a00d24] active:border-b-0 active:translate-y-1 transition-all ${big ? 'px-8 py-3 text-lg' : 'px-6 py-2.5 text-sm'}`}>
                <RotateCcw className={big ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={3} />{t(lang, 'tryAgain')}
              </button>
            )}
            {result === 'correct' && (
              <button onClick={next} className={`flex items-center gap-2 rounded-xl font-black uppercase tracking-wide text-white bg-emerald-500 border-b-4 border-emerald-700 active:border-b-0 active:translate-y-1 transition-all ${big ? 'px-8 py-3 text-lg' : 'px-6 py-2.5 text-sm'}`}>
                <ArrowRight className={big ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={3} />{round + 1 < SCENARIOS.length ? t(lang, 'next') : t(lang, 'done')}
              </button>
            )}
            <button onClick={tryAgain} className={`flex items-center gap-2 rounded-xl font-black uppercase tracking-wide border-2 border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95 transition-all ${big ? 'px-4 py-3 text-sm' : 'px-3 py-2.5 text-xs'}`}>
              <RotateCcw className={big ? 'w-4 h-4' : 'w-3.5 h-3.5'} strokeWidth={3} />{t(lang, 'reset')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
