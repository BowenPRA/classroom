// src/components/RandomStudent.jsx
// The "call on a random student" tool. It is deliberately NOT a lesson widget:
// the roster belongs to the room, not to one deck, so it is owned by Deck and
// reachable from every lesson — the bottom bar when previewing, and the
// projector dock when actually teaching.
//
// The teaching-time shape matters most: ONE press on the Pick button draws a
// name and shows it right beside the button. No modal to open first, no second
// button to find. The modal below is the roster manager — editing the list,
// the no-repeats toggle, starting a new round — and the place to show a name
// large if Mr Bowen wants the class to see it. Both read the same state, from
// `useStudentPicker` (src/lib/useStudentPicker.js) owned by Deck, so a pick
// from the bar and a pick from the modal count towards the same round. The
// roster storage and the no-repeats rule are documented there.
//
// Bilingual like the rest of the deck: it takes the deck's `lang` prop.
import { useState, useEffect, useRef } from 'react'
import { Users, X, Shuffle, Pencil, Check, RotateCcw, ListChecks } from 'lucide-react'

const pick = (lang, en, vn) => (lang === 'vn' ? vn : en)

/**
 * The one-press trigger for the bottom bar and the projector dock. Left half
 * draws a student and shows the name beside it; the small right half opens the
 * roster manager. `tone` picks the light (bar) or dark (dock) styling.
 */
export function PickButton({ picker, lang = 'en', onManage, tone = 'light', large = false }) {
  const { names, current, justReset, pickCount, draw } = picker
  const onPick = () => {
    // Nothing to draw from yet: go straight to the editor rather than doing
    // nothing, so a fresh machine still has a one-click route to a name.
    if (!draw()) onManage()
  }
  const light = tone === 'light'
  const shell = light
    ? 'bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-500'
    : 'bg-white/10 border border-white/15 text-white'
  const divider = light ? 'border-slate-200 dark:border-slate-700' : 'border-white/15'
  const hover = light ? 'hover:text-[#1cb0f6]' : 'hover:bg-white/20'
  return (
    <div className={`flex items-stretch rounded-xl overflow-hidden ${shell}`}>
      <button
        onClick={onPick}
        className={`flex items-center gap-2 px-3 sm:px-4 py-2 transition-colors active:scale-95 ${hover}`}
        title={pick(lang, 'Pick a random student (R)', 'Chọn ngẫu nhiên một học sinh (R)')}
      >
        <Shuffle className="w-5 h-5 shrink-0" strokeWidth={2.5} />
        {current ? (
          <span
            key={pickCount}
            className={`font-black tracking-tight whitespace-nowrap max-w-[10rem] sm:max-w-[16rem] truncate animate-in zoom-in-95 fade-in duration-300 ${light ? 'text-slate-900 dark:text-white' : 'text-white'} ${large ? 'text-lg' : 'text-sm sm:text-base'}`}
          >
            {current}
            {justReset && <span className="ml-1.5 text-[10px] uppercase tracking-widest text-[#ffc800] align-middle">{pick(lang, 'new round', 'vòng mới')}</span>}
          </span>
        ) : (
          <span className="hidden sm:inline text-xs font-black uppercase tracking-widest">
            {names.length ? pick(lang, 'Pick', 'Chọn') : pick(lang, 'Class list', 'Danh sách lớp')}
          </span>
        )}
      </button>
      <button
        onClick={onManage}
        className={`flex items-center px-2 border-l-2 transition-colors ${divider} ${hover}`}
        title={pick(lang, 'Class list, rounds and repeats', 'Danh sách lớp, vòng và lặp lại')}
      >
        <ListChecks className="w-4 h-4" strokeWidth={2.5} />
      </button>
    </div>
  )
}

/**
 * The roster manager. `open` / `onClose` are controlled by Deck so the two
 * triggers share one modal; the picker state comes from `useStudentPicker`.
 * The body mounts fresh on each open so it can decide from the roster whether
 * to open in the editor.
 */
export function RandomStudentModal({ open, onClose, lang = 'en', picker }) {
  if (!open) return null
  return <PickerBody onClose={onClose} lang={lang} picker={picker} />
}

function PickerBody({ onClose, lang, picker }) {
  const { names, current, pickedThisRound, noRepeat, justReset, pickCount, remaining, draw, newRound, replaceRoster, toggleNoRepeat } = picker
  // Empty roster opens straight into the editor — there is nothing to pick from yet.
  const [editing, setEditing] = useState(names.length === 0)
  const [draft, setDraft] = useState('')
  const textareaRef = useRef(null)

  useEffect(() => {
    if (editing && textareaRef.current) textareaRef.current.focus()
  }, [editing])

  const startEditing = () => {
    setDraft(names.join('\n'))
    setEditing(true)
  }

  const saveEditing = () => {
    const next = draft
      .split('\n')
      .map((n) => n.trim())
      .filter(Boolean)
    replaceRoster(next)
    setEditing(next.length === 0)
  }

  // Escape closes; handled here so it works in fullscreen (project) mode too.
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose() }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose])

  const allDone = noRepeat && names.length > 0 && remaining === 0

  return (
    <div
      className="fixed inset-0 z-[9999] bg-slate-900/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-[2rem] shadow-2xl border-4 border-slate-200 dark:border-slate-700 overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#1cb0f6] text-white border-b-4 border-black/10">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-xl p-2 border border-white/30 shadow-inner">
              <Users className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                {pick(lang, 'Random Student', 'Gọi ngẫu nhiên')}
              </div>
              <div className="text-lg font-black tracking-tight leading-none">
                {pick(lang, 'Who’s next?', 'Đến lượt ai?')}
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/15 hover:bg-rose-500 text-white transition-colors active:scale-95"
            title={pick(lang, 'Close (Esc)', 'Đóng (Esc)')}
          >
            <X className="w-6 h-6" strokeWidth={3} />
          </button>
        </div>

        {editing ? (
          /* ── Roster editor ──────────────────────────────────────────── */
          <div className="p-6 sm:p-8">
            <label className="block text-sm font-black uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2">
              {pick(lang, 'Your class list — one name per line', 'Danh sách lớp — mỗi dòng một tên')}
            </label>
            <textarea
              ref={textareaRef}
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              rows={10}
              placeholder={pick(lang, 'Type each student’s name on its own line…', 'Nhập tên mỗi học sinh trên một dòng…')}
              className="w-full rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-4 font-semibold text-slate-800 dark:text-slate-100 text-lg leading-relaxed focus:outline-none focus:border-[#1cb0f6] resize-none"
            />
            <p className="mt-2 text-xs font-bold text-slate-400 dark:text-slate-500">
              {pick(lang, 'Saved on this device only.', 'Chỉ lưu trên thiết bị này.')}
            </p>
            <div className="mt-5 flex items-center justify-end gap-3">
              {names.length > 0 && (
                <button
                  onClick={() => setEditing(false)}
                  className="px-5 py-3 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-black uppercase tracking-widest text-xs text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95"
                >
                  {pick(lang, 'Cancel', 'Huỷ')}
                </button>
              )}
              <button
                onClick={saveEditing}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#58cc02] border-b-4 border-[#58a700] text-white font-black uppercase tracking-widest text-sm active:border-b-0 active:translate-y-1 transition-all"
              >
                <Check className="w-5 h-5" strokeWidth={3} />
                {pick(lang, 'Save list', 'Lưu danh sách')}
              </button>
            </div>
          </div>
        ) : (
          /* ── Picker ─────────────────────────────────────────────────── */
          <div className="p-6 sm:p-8">
            <div className="min-h-[9rem] sm:min-h-[11rem] flex flex-col items-center justify-center rounded-2xl border-2 border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 px-4 py-8 text-center">
              {current ? (
                <div
                  key={pickCount}
                  className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white animate-in zoom-in-95 fade-in duration-300 break-words"
                >
                  {current}
                </div>
              ) : (
                <div className="text-xl sm:text-2xl font-black text-slate-400 dark:text-slate-500">
                  {pick(lang, 'Press the button to pick a student.', 'Bấm nút để chọn một học sinh.')}
                </div>
              )}
              {justReset && (
                <div className="mt-3 text-xs font-black uppercase tracking-widest text-[#c25e12] dark:text-amber-300">
                  {pick(lang, 'New round — everyone’s back in', 'Vòng mới — tất cả trở lại')}
                </div>
              )}
            </div>

            <button
              onClick={draw}
              className="mt-6 w-full flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-[#1cb0f6] border-b-4 border-[#1899d6] text-white font-black uppercase tracking-widest text-lg sm:text-xl active:border-b-0 active:translate-y-1 transition-all"
            >
              <Shuffle className="w-6 h-6" strokeWidth={3} />
              {current
                ? pick(lang, 'Pick again', 'Chọn lại')
                : pick(lang, 'Pick a student', 'Chọn học sinh')}
            </button>

            <div className="mt-5 flex items-center justify-between gap-3 text-xs">
              <label className="flex items-center gap-2 font-bold text-slate-600 dark:text-slate-300 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={noRepeat}
                  onChange={(e) => toggleNoRepeat(e.target.checked)}
                  className="w-4 h-4 accent-[#1cb0f6]"
                />
                {pick(lang, 'No repeats until everyone’s had a turn', 'Không lặp lại cho đến khi cả lớp đã được gọi')}
              </label>
              <span className="font-black tabular-nums text-slate-400 dark:text-slate-500 whitespace-nowrap">
                {noRepeat
                  ? pick(lang, `${remaining} left`, `còn ${remaining}`)
                  : pick(lang, `${names.length} students`, `${names.length} học sinh`)}
              </span>
            </div>

            <div className="mt-5 pt-4 border-t-2 border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
              <button
                onClick={startEditing}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-black uppercase tracking-widest text-xs text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95"
              >
                <Pencil className="w-4 h-4" strokeWidth={3} />
                {pick(lang, 'Edit list', 'Sửa danh sách')}
              </button>
              {noRepeat && pickedThisRound.length > 0 && (
                <button
                  onClick={newRound}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-700 font-black uppercase tracking-widest text-xs text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-800 active:scale-95"
                  title={pick(lang, 'Start a fresh round', 'Bắt đầu vòng mới')}
                >
                  <RotateCcw className="w-4 h-4" strokeWidth={3} />
                  {pick(lang, 'New round', 'Vòng mới')}
                </button>
              )}
            </div>
            {allDone && (
              <p className="mt-3 text-center text-xs font-bold text-slate-400 dark:text-slate-500">
                {pick(lang, 'Everyone has had a turn. The next pick starts a new round.', 'Cả lớp đều đã được gọi. Lần chọn tiếp theo bắt đầu vòng mới.')}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
