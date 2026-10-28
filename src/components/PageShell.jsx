import { useEffect, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SiteHeader from './SiteHeader.jsx'
import { PAGE_WIDTH } from '../lib/layout.js'

// The frame of the home, course and homework pages: the header, the page
// column and the tab title. `accent` (a hex) sets --accent for the accent-*
// classes in index.css and washes the top corner of the page in that colour.
export default function PageShell({ title, accent, children }) {
  const { pathname } = useLocation()
  // A new page opens at its top. The router keeps the old scroll position, so
  // a card tapped low on the home page would otherwise open its course
  // part-way down the list, below the newest lessons.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  useEffect(() => {
    const before = document.title
    document.title = title ? `${title} · Lessons` : 'Lessons'
    return () => {
      document.title = before
    }
  }, [title])

  return (
    <div
      className="relative min-h-screen overflow-x-clip bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors"
      style={accent ? { '--accent': accent } : undefined}
    >
      {accent && <div aria-hidden className="accent-glow pointer-events-none absolute inset-x-0 top-0 h-96" />}
      <SiteHeader />
      <main className={`relative ${PAGE_WIDTH} pt-6 sm:pt-10 pb-16 sm:pb-24`}>{children}</main>
    </div>
  )
}

// The heading of a course or the homework shelf: a way back, the coloured icon
// tile, a kicker line over the title, and one line about what is listed.
export function PageTitle({ back, icon, kicker, title, meta }) {
  return (
    <div className="mb-10 sm:mb-14">
      {back && (
        <Link
          to={back.to}
          className="group inline-flex items-center gap-1.5 -ml-1 mb-6 sm:mb-8 px-1 py-1 rounded-md text-sm font-semibold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cb0f6]"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.5} />
          {back.label}
        </Link>
      )}
      <div className="flex items-center gap-4 sm:gap-5">
        <span className="accent-bg flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-white shadow-lg shadow-slate-900/10 shrink-0">
          {icon}
        </span>
        <div className="min-w-0">
          <p className="accent-text text-xs sm:text-[13px] font-bold uppercase tracking-[0.12em]">{kicker}</p>
          <h1 className="mt-1 text-[1.75rem] sm:text-4xl leading-tight font-extrabold tracking-tight text-slate-900 dark:text-white">{title}</h1>
        </div>
      </div>
      {meta && <p className="mt-4 sm:mt-5 text-sm sm:text-[15px] text-slate-500 dark:text-slate-400">{meta}</p>}
    </div>
  )
}
