import { Link } from 'react-router-dom'
import { GraduationCap, Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../lib/useDarkMode.js'

export default function SiteHeader() {
  const { isDark, toggle } = useDarkMode()
  return (
    <header className="flex justify-between items-center px-4 sm:px-8 h-16 sm:h-20 border-b-2 border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-20">
      <Link to="/" className="flex items-center gap-2.5 text-slate-800 dark:text-slate-100 font-black text-lg sm:text-xl tracking-tight">
        <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-[#1cb0f6] text-white shadow-sm">
          <GraduationCap className="w-5 h-5" strokeWidth={2.5} />
        </span>
        Lessons
      </Link>
      <button
        onClick={toggle}
        className="p-2 rounded-xl text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-600 transition-colors active:scale-95 border-2 border-transparent hover:border-slate-200 dark:hover:border-slate-700"
        title="Toggle dark mode"
      >
        {isDark ? <Sun className="w-5 h-5 text-amber-400" strokeWidth={2.5} /> : <Moon className="w-5 h-5" strokeWidth={2.5} />}
      </button>
    </header>
  )
}
