import { Link } from 'react-router-dom'
import { ArrowLeft, ChevronRight, Printer } from 'lucide-react'
import SiteHeader from '../components/SiteHeader.jsx'
import { HOMEWORK } from '../../content/homework.js'

// The accent for everything homework — matches the orange the printed packets
// use for anything a student must copy down.
const HW_COLOR = '#c25e12'

export default function HomeworkPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors">
      <SiteHeader />
      <main className="max-w-4xl mx-auto px-4 sm:px-8 py-8 sm:py-12">
        <Link to="/" className="inline-flex items-center gap-2 text-slate-400 hover:text-[#c25e12] font-black uppercase tracking-widest text-xs mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4" strokeWidth={3} /> All courses
        </Link>

        <div className="flex items-center gap-4 mb-8 sm:mb-10">
          <span className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-2xl text-white shadow-sm shrink-0" style={{ backgroundColor: HW_COLOR }}>
            <Printer className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.5} />
          </span>
          <div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">Homework</h1>
            <p className="text-slate-500 dark:text-slate-400 font-bold">Printable packets · open the PDF to print</p>
          </div>
        </div>

        <ul className="space-y-3">
          {HOMEWORK.map((packet) => (
            <li key={packet.id} className="rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <a
                href={packet.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 sm:p-5 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors min-w-0"
              >
                <span className="flex items-center justify-center w-11 h-11 rounded-xl bg-slate-100 dark:bg-slate-800 font-black text-sm shrink-0" style={{ color: HW_COLOR }}>
                  {packet.label}
                </span>
                <div className="min-w-0 flex-1">
                  <h3 className="font-black tracking-tight truncate">{packet.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-medium truncate">{packet.subtitle}</p>
                </div>
                <span className="hidden sm:flex items-center gap-1 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-[#c25e12] transition-colors shrink-0">
                  <Printer className="w-4 h-4" strokeWidth={2.5} /> Open PDF
                </span>
                <ChevronRight className="w-5 h-5 text-slate-300 dark:text-slate-600 shrink-0" strokeWidth={2.5} />
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}
