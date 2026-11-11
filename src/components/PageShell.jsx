import { useEffect, useLayoutEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import SiteHeader from './SiteHeader.jsx'
import { PAGE_WIDTH } from '../lib/layout.js'
import { Doodles } from '../lib/courseIcons.js'

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
      <div aria-hidden className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[40rem]" />
      {accent && <div aria-hidden className="accent-glow pointer-events-none absolute inset-x-0 top-0 h-96" />}
      <SiteHeader />
      <main className={`relative ${PAGE_WIDTH} pt-6 sm:pt-8 pb-16 sm:pb-24`}>{children}</main>
    </div>
  )
}

// The top of a course or the homework shelf: a way back, then a banner in the
// course colour with its subject's symbols, the icon on a white tile, the
// title, a row of counts, and `action` (the newest lesson's button).
export function PageBanner({ back, icon, doodles, kicker, title, stats = [], action }) {
  return (
    <div className="mb-10 sm:mb-14">
      {back && (
        <Link
          to={back.to}
          className="group inline-flex items-center gap-1.5 -ml-1 mb-4 sm:mb-5 px-1 py-1 rounded-md text-sm font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1cb0f6]"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" strokeWidth={2.75} />
          {back.label}
        </Link>
      )}
      <header className="accent-banner accent-edge relative overflow-hidden rounded-3xl border-b-[6px] px-5 py-6 sm:px-10 sm:py-9 text-white shadow-xl shadow-slate-900/10">
        <Doodles name={doodles} scale={1.6} className="text-white/20" />
        <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-6 min-w-0">
            <span className="accent-ink flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border-b-4 border-slate-900/15 shadow-lg -rotate-3 shrink-0">
              {icon}
            </span>
            <div className="min-w-0">
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.12em] text-white/85">{kicker}</p>
              <h1 className="mt-1 text-3xl sm:text-5xl leading-tight font-extrabold tracking-tight [text-shadow:0_2px_10px_rgb(15_23_42/0.18)]">{title}</h1>
              {stats.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {stats.map((s) => (
                    <span key={s} className="rounded-full bg-white/20 px-3 py-1 text-xs sm:text-sm font-bold backdrop-blur-sm">
                      {s}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
          {action && <div className="shrink-0">{action}</div>}
        </div>
      </header>
    </div>
  )
}
