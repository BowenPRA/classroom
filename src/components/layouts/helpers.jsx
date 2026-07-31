// Non-component helpers shared by the layout components: markdown-lite text
// rendering, note-tone tokens, and colour parsing. Kept out of primitives.jsx so
// each component file only exports components (fast-refresh / eslint clean).
import { Pencil } from 'lucide-react'
import { SafeInlineMath, SafeBlockMath } from '../../lib/SafeMath.jsx'

// `**bold**`, `$inline$` / `$$block$$` KaTeX, `>` note bumper, blank line = spacer.
export function parseInlineText(text) {
  if (!text) return null
  const parts = text.split(/(\*\*.*?\*\*)/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const inner = part.slice(2, -2)
      const mathParts = inner.split(/(\$[\s\S]+?\$)/g)
      return (
        <strong key={`b-${i}`} className="font-black text-slate-900 dark:text-slate-100">
          {mathParts.map((m, j) =>
            m.startsWith('$') && m.endsWith('$')
              ? <SafeInlineMath key={`m-${j}`} math={m.slice(1, -1).trim()} />
              : <span key={`t-${j}`}>{m}</span>,
          )}
        </strong>
      )
    }
    const mathParts = part.split(/(\$[\s\S]+?\$)/g)
    return mathParts.map((m, j) =>
      m.startsWith('$') && m.endsWith('$')
        ? <SafeInlineMath key={`m-${i}-${j}`} math={m.slice(1, -1).trim()} />
        : <span key={`t-${i}-${j}`}>{m}</span>,
    )
  })
}

export function renderContent(text, { isDisplayMode = false, isExample = false } = {}) {
  if (!text || typeof text !== 'string') return null
  const blockParts = text.split(/(\$\$[\s\S]+?\$\$)/g)
  const elements = []
  let bumpers = []

  const flush = () => {
    if (bumpers.length) {
      elements.push(
        <div key={`bump-${elements.length}`} className={`my-4 bg-[#ffc800]/10 dark:bg-amber-900/10 border-l-[6px] border-[#ffc800] p-4 sm:p-5 rounded-r-2xl relative animate-in fade-in ${isDisplayMode ? 'ml-[clamp(1rem,1.5vw,1.5rem)]' : 'ml-0'}`}>
          <div className={`absolute ${isDisplayMode ? '-left-[18px]' : '-left-[14px]'} top-4 p-1.5 bg-[#ffc800] text-amber-950 rounded-full shadow-sm border-2 border-white dark:border-slate-900 z-10`}>
            <Pencil className={isDisplayMode ? 'w-5 h-5' : 'w-4 h-4'} strokeWidth={3} />
          </div>
          <div className="space-y-3 ml-3">
            {bumpers.map((line, idx) => (
              <p key={idx} className={`text-amber-950 dark:text-amber-200 font-bold leading-relaxed ${isDisplayMode ? 'text-[clamp(1.15rem,1.8vw,1.6rem)]' : 'text-sm sm:text-base lg:text-lg'}`}>
                {parseInlineText(line)}
              </p>
            ))}
          </div>
        </div>,
      )
      bumpers = []
    }
  }

  blockParts.forEach((block, i) => {
    if (block.startsWith('$$') && block.endsWith('$$')) {
      flush()
      elements.push(
        <div key={`mb-${i}`} className={`w-full text-slate-800 dark:text-slate-100 ${isDisplayMode ? 'text-4xl' : 'text-xl lg:text-2xl'}`}>
          <SafeBlockMath math={block.slice(2, -2).trim()} />
        </div>,
      )
    } else {
      block.split('\n').forEach((line, j) => {
        if (!line.trim()) {
          flush()
          elements.push(<div key={`sp-${i}-${j}`} className={isDisplayMode ? 'h-[clamp(0.75rem,1.5vh,1.5rem)]' : 'h-3'} />)
        } else if (line.trim().startsWith('>')) {
          bumpers.push(line.replace('>', '').trim())
        } else {
          flush()
          elements.push(
            <p key={`p-${i}-${j}`} className={`${isExample ? 'mb-1' : 'mb-3'} text-slate-700 dark:text-slate-300 font-medium ${isDisplayMode ? 'text-[clamp(1rem,1.8vw,1.6rem)] leading-relaxed tracking-tight' : 'text-[15px] sm:text-base lg:text-lg leading-relaxed'}`}>
              {parseInlineText(line)}
            </p>,
          )
        }
      })
    }
  })
  flush()
  return elements
}

// Typed note-card tone tokens (theme-safe light + dark), mirroring the `.note-*`
// styles: write (blue), task (orange), plant (green), homework (rose), theory
// (violet), info (teal).
export const NOTE_TONES = {
  write:    { accent: '#3b82f6', card: 'bg-blue-50/80 dark:bg-blue-950/30',   border: 'border-blue-300 dark:border-blue-500/50',   text: 'text-blue-950 dark:text-blue-100',   icon: 'Pencil',    label: 'Write This Down', labelVn: 'Chép vào vở' },
  task:     { accent: '#f59e0b', card: 'bg-amber-50/80 dark:bg-amber-950/25',  border: 'border-amber-300 dark:border-amber-500/50',  text: 'text-amber-950 dark:text-amber-100', icon: 'Hourglass', label: 'Starter Task',    labelVn: 'Nhiệm vụ khởi động' },
  plant:    { accent: '#22c55e', card: 'bg-green-50/80 dark:bg-green-950/25',  border: 'border-green-300 dark:border-green-500/50',  text: 'text-green-950 dark:text-green-100', icon: 'Leaf',      label: 'Plant Only',      labelVn: 'Chỉ ở thực vật' },
  homework: { accent: '#f43f5e', card: 'bg-rose-50/80 dark:bg-rose-950/25',    border: 'border-rose-300 dark:border-rose-500/50',    text: 'text-rose-950 dark:text-rose-100',   icon: 'Home',      label: 'Homework',        labelVn: 'Bài tập về nhà' },
  theory:   { accent: '#8b5cf6', card: 'bg-violet-50/80 dark:bg-violet-950/25', border: 'border-violet-300 dark:border-violet-500/50', text: 'text-violet-950 dark:text-violet-100', icon: 'Sparkles', label: 'Think Deeper',    labelVn: 'Suy nghĩ sâu hơn' },
  info:     { accent: '#14b8a6', card: 'bg-teal-50/80 dark:bg-teal-950/25',    border: 'border-teal-300 dark:border-teal-500/50',    text: 'text-teal-950 dark:text-teal-100',   icon: 'Info',      label: 'Note',            labelVn: 'Ghi chú' },
}

/** Extract a raw hex from an accent hex or a `bg-[#hex]` string. */
export function toHex(value, fallback = '#1cb0f6') {
  if (!value) return fallback
  const m = /#([0-9a-fA-F]{3,8})/.exec(value)
  return m ? `#${m[1]}` : fallback
}
