import { ExternalLink, Printer } from 'lucide-react'
import PageShell, { PageTitle } from '../components/PageShell.jsx'
import { HOMEWORK } from '../../content/homework.js'
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
        className="group flex items-center gap-3.5 sm:gap-4 px-4 sm:px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1cb0f6]"
      >
        <span
          className={`flex items-center justify-center w-16 min-h-[2.75rem] px-1 py-1 rounded-xl text-[13px] font-bold leading-tight text-center tabular-nums shrink-0 ${
            companion ? 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400' : 'accent-tint accent-text'
          }`}
        >
          {packet.label}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className={`text-[15px] sm:text-base leading-snug text-slate-900 dark:text-white ${companion ? 'font-medium' : 'font-semibold'}`}>{packet.title}</h3>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2 sm:line-clamp-1">{packet.subtitle}</p>
        </div>
        <span className="hidden sm:inline text-xs font-semibold text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors shrink-0">PDF</span>
        <ExternalLink className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-slate-500 dark:group-hover:text-slate-400 transition-colors shrink-0" strokeWidth={2.5} />
      </a>
    </li>
  )
}

export default function HomeworkPage() {
  const sets = homeworkSets(HOMEWORK)
  return (
    <PageShell title="Homework" accent={HW_COLOR}>
      <PageTitle
        back={{ to: '/', label: 'All courses' }}
        icon={<Printer className="w-7 h-7 sm:w-8 sm:h-8" strokeWidth={2.25} />}
        kicker="Printable packets"
        title="Homework"
        meta={`${plural(HOMEWORK.length, 'packet')} · newest first · each opens as a PDF to print`}
      />
      <div className="space-y-4">
        {sets.map((set) => (
          <ul
            key={set[0].id}
            className="rounded-2xl bg-white dark:bg-slate-900 ring-1 ring-slate-200/90 dark:ring-slate-800 shadow-sm divide-y divide-slate-100 dark:divide-slate-800/80 overflow-hidden"
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
