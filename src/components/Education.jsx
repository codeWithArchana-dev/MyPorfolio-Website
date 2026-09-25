import { GraduationCap } from 'lucide-react'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { education } from '../data/site.js'

export default function Education() {
  return (
    <Section id="education" muted eyebrow="Academic background" title="Education">
      <ol className="relative mx-auto max-w-3xl">
        {/* Timeline rail */}
        <span
          className="absolute left-[1.35rem] top-3 h-[calc(100%-1.5rem)] w-px bg-slate-200 dark:bg-slate-800"
          aria-hidden="true"
        />

        {education.map((item, i) => (
          <li key={`${item.degree}-${i}`} className="relative pb-10 pl-16 last:pb-0">
            <Reveal delay={i * 0.1}>
              <span
                className={`absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-xl border-2 ${
                  item.current
                    ? 'border-brand-500 bg-brand-600 text-white'
                    : 'border-slate-200 bg-white text-slate-500 dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <GraduationCap size={19} aria-hidden="true" />
              </span>

              <div className="card p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-bold">{item.degree}</h3>
                  {item.current && (
                    <span className="chip !border-emerald-200 !bg-emerald-50 !text-emerald-700 dark:!border-emerald-900/60 dark:!bg-emerald-950/40 dark:!text-emerald-400">
                      In Progress
                    </span>
                  )}
                </div>

                <p className="mt-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                  {item.institution}
                </p>
                <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {item.period}
                </p>

                {item.description && (
                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                    {item.description}
                  </p>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  )
}
