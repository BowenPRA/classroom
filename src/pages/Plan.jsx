import { ArrowLeft, Printer, Clock } from 'lucide-react'

// Print-friendly teacher lesson plan. Reads `lesson.plan`, an optional object
// on each lesson module. All fields are optional — empty sections are skipped.
//   plan = { duration, objective, materials: [..], vocab: [{term, def}],
//            timeline: [{ time, phase, detail }], answers: [{ q, a }], notes }
export default function Plan({ lesson, course, onBack }) {
  const plan = lesson.plan || {}
  const color = course?.color || '#1cb0f6'

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 print:bg-white py-6 sm:py-10 print:py-0">
      <style>{`@media print { .no-print { display: none !important; } .sheet { box-shadow: none !important; margin: 0 !important; max-width: none !important; } body { background: #fff; } }`}</style>

      {/* Screen-only toolbar */}
      <div className="no-print max-w-3xl mx-auto px-4 mb-4 flex items-center justify-between">
        <button onClick={onBack} className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-300 hover:text-[#1cb0f6] font-black uppercase tracking-widest text-xs transition-colors">
          <ArrowLeft className="w-4 h-4" strokeWidth={3} /> Back to course
        </button>
        <button onClick={() => window.print()} className="inline-flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] text-white rounded-xl font-black uppercase tracking-widest text-xs border-b-4 border-[#7c3aed] active:border-b-0 active:translate-y-1 transition-all">
          <Printer className="w-4 h-4" strokeWidth={2.5} /> Print
        </button>
      </div>

      {/* The sheet */}
      <div className="sheet max-w-3xl mx-auto bg-white text-slate-900 rounded-2xl print:rounded-none shadow-lg px-8 sm:px-12 py-10">
        <div className="border-b-4 pb-4 mb-6" style={{ borderColor: color }}>
          <div className="text-xs font-black uppercase tracking-[0.2em]" style={{ color }}>{course?.title} · Lesson {lesson.unit}</div>
          <h1 className="text-3xl font-black tracking-tight mt-1">{lesson.title}</h1>
          <div className="flex flex-wrap gap-4 mt-3 text-sm font-bold text-slate-600">
            {plan.duration && <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" strokeWidth={2.5} />{plan.duration}</span>}
          </div>
        </div>

        <Section title="Objective" color={color}>
          <p className="font-medium text-slate-700 leading-relaxed">{plan.objective || lesson.objective || '—'}</p>
        </Section>

        {plan.materials?.length > 0 && (
          <Section title="Materials" color={color}>
            <ul className="list-disc ml-5 space-y-1 text-slate-700 font-medium">
              {plan.materials.map((m, i) => <li key={i}>{m}</li>)}
            </ul>
          </Section>
        )}

        {plan.vocab?.length > 0 && (
          <Section title="Key vocabulary" color={color}>
            <dl className="space-y-1.5">
              {plan.vocab.map((v, i) => (
                <div key={i} className="flex gap-2 text-slate-700">
                  <dt className="font-black shrink-0">{v.term}</dt>
                  <dd className="font-medium">— {v.def}</dd>
                </div>
              ))}
            </dl>
          </Section>
        )}

        {plan.timeline?.length > 0 && (
          <Section title="Lesson flow" color={color}>
            <table className="w-full text-sm border-collapse">
              <tbody>
                {plan.timeline.map((row, i) => (
                  <tr key={i} className="border-b border-slate-200 align-top">
                    <td className="py-2 pr-3 font-black whitespace-nowrap" style={{ color }}>{row.time}</td>
                    <td className="py-2 pr-3 font-black text-slate-800 whitespace-nowrap">{row.phase}</td>
                    <td className="py-2 font-medium text-slate-600">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Section>
        )}

        {plan.answers?.length > 0 && (
          <Section title="Answer key" color={color}>
            <ol className="space-y-1.5">
              {plan.answers.map((a, i) => (
                <li key={i} className="text-slate-700">
                  <span className="font-bold">{a.q}</span> <span className="font-black" style={{ color }}>{a.a}</span>
                </li>
              ))}
            </ol>
          </Section>
        )}

        {plan.notes && (
          <Section title="Teacher notes" color={color}>
            <p className="font-medium text-slate-700 leading-relaxed whitespace-pre-line">{plan.notes}</p>
          </Section>
        )}
      </div>
    </div>
  )
}

function Section({ title, color, children }) {
  return (
    <section className="mb-6 break-inside-avoid">
      <h2 className="text-xs font-black uppercase tracking-[0.2em] mb-2" style={{ color }}>{title}</h2>
      {children}
    </section>
  )
}
