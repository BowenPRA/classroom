import { ExternalLink, Printer } from 'lucide-react'
import PageShell, { PageBanner } from '../components/PageShell.jsx'
import { HOMEWORK } from '../../content/homework.js'
import { bannerButtonClass } from '../lib/layout.js'
import { homeworkSets, plural } from '../lib/listing.js'

// The accent for everything homework — matches the orange the printed packets
// use for anything a student must copy down.
const HW_COLOR = '#c25e12'

// One packet. The sheets that go out with a packet (its EX and FR versions)
// follow it in the same card, with a grey label instead of an orange one.
function PacketRow({ packet, companion }) {
  return (
    <li>
      <a
        href={packet.pdf}
        target="_blank"
        rel="noopener noreferrer"
        title={`Open ${packet.label} (PDF, new tab)`}
        className="group flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-4 hover:accent-wash transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1cb0f6]"
      >
        <span
          className={`flex items-center justify-center w-16 min-h-[2.75rem] px-1 py-1 rounded-xl border-2 border-b-4 text-[13px] font-extrabold leading-tight text-center tabular-nums shrink-0 group-hover:-rotate-3 transition-transform ${
            companion
              ? 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700'
              : 'accent-tint accent-text accent-edge-soft'
          }`}
        >
          {packet.label}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className={`text-[15px] sm:text-base leading-snug text-slate-900 dark:text-white ${companion ? 'font-semibold' : 'font-bold'}`}>{packet.title}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 sm:line-clamp-1">{packet.subtitle}</p>
        </div>
        <span className="hidden sm:inline text-xs font-bold text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors shrink-0">PDF</span>
        <span className="flex items-center justify-center w-8 h-8 rounded-full text-slate-300 dark:text-slate-600 group-hover:accent-fill transition-colors shrink-0">
          <ExternalLink className="w-4 h-4" strokeWidth={2.5} />
        </span>
      </a>
    </li>
  )
}

export default function HomeworkPage() {
  const sets = homeworkSets(HOMEWORK)
  const newest = sets[0]?.[0]
  return (
    <PageShell title="Homework" accent={HW_COLOR}>
      <PageBanner
        back={{ to: '/', label: 'All courses' }}
        icon={<Printer className="w-8 h-8 sm:w-10 sm:h-10" strokeWidth={2.25} />}
        doodles="Printer"
        kicker="Printable packets"
        title="Homework"
        stats={[plural(HOMEWORK.length, 'packet'), 'Newest first', 'Opens as a PDF']}
        action={
          newest && (
            <a href={newest.pdf} target="_blank" rel="noopener noreferrer" className={bannerButtonClass} title={`Open ${newest.label} (PDF, new tab)`}>
              <span className="accent-fill flex items-center justify-center w-7 h-7 rounded-lg">
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={2.75} />
              </span>
              Newest
              <span className="accent-ink-tint accent-ink rounded-lg px-2 py-0.5 text-sm tabular-nums">{newest.label}</span>
            </a>
          )
        }
      />
      <div className="space-y-4">
        {sets.map((set) => (
          <ul
            key={set[0].id}
            className="rounded-3xl bg-white dark:bg-slate-900 border-2 border-b-[5px] border-slate-200 dark:border-slate-800 divide-y-2 divide-slate-100 dark:divide-slate-800/80 overflow-hidden"
          >
            {set.map((packet, i) => (
              <PacketRow key={packet.id} packet={packet} companion={i > 0} />
            ))}
          </ul>
        ))}
      </div>
    </PageShell>
  )
}
