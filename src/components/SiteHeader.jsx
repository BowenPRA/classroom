import { Link, useLocation } from 'react-router-dom'
import { GraduationCap, Sun, Moon } from 'lucide-react'
import { useDarkMode } from '../lib/useDarkMode.js'
import { PAGE_WIDTH } from '../lib/layout.js'

const navClass = (active) =>
  `px-3 py-2 rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cb0f6] ${
    active
      ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800'
      : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
  }`

// The bar across the top of the home, course and homework pages. "Courses" is
// lit on the home page and every course page; "Homework" on the shelf.
export default function SiteHeader() {
  const { isDark, toggle } = useDarkMode()
  const { pathname } = useLocation()
  const onHomework = pathname.startsWith('/homework')

  return (
    <header className="sticky top-0 z-20 border-b border-slate-200/80 dark:border-slate-800/80 bg-white/85 dark:bg-slate-950/85 backdrop-blur-md supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-slate-950/70">
      <div className={`${PAGE_WIDTH} flex items-center justify-between h-16`}>
        <Link to="/" className="flex items-center gap-2.5 rounded-lg text-slate-900 dark:text-white font-extrabold text-lg tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cb0f6]">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-[#1cb0f6] text-white shadow-sm shadow-sky-500/30">
            <GraduationCap className="w-[18px] h-[18px]" strokeWidth={2.5} />
          </span>
          Lessons
        </Link>
        <nav className="flex items-center gap-1">
          <Link to="/" className={navClass(!onHomework)} aria-current={!onHomework ? 'page' : undefined}>
            Courses
          </Link>
          <Link to="/homework" className={navClass(onHomework)} aria-current={onHomework ? 'page' : undefined}>
            Homework
          </Link>
          <span className="w-px h-5 bg-slate-200 dark:bg-slate-800 mx-1.5" aria-hidden />
          <button
            onClick={toggle}
            className="flex items-center justify-center w-9 h-9 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cb0f6]"
            title={isDark ? 'Light mode' : 'Dark mode'}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-[18px] h-[18px] text-amber-400" strokeWidth={2.5} /> : <Moon className="w-[18px] h-[18px]" strokeWidth={2.5} />}
          </button>
        </nav>
      </div>
    </header>
  )
}
