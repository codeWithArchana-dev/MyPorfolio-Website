import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'
import { snapshot } from '../data/site.js'

/** Recruiter snapshot: the five facts a hiring manager scans for first. */
export default function Snapshot() {
  return (
    <section
      aria-label="Profile snapshot"
      className="border-y border-slate-200 bg-slate-50 py-10 dark:border-slate-800 dark:bg-slate-900/40"
    >
      <div className="container-page">
        <dl className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {snapshot.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div
                className={`card h-full p-4 ${
                  item.highlight
                    ? 'border-emerald-200 bg-emerald-50/60 dark:border-emerald-900/60 dark:bg-emerald-950/25'
                    : ''
                }`}
              >
                <Icon
                  name={item.icon}
                  size={18}
                  className={
                    item.highlight
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-brand-600 dark:text-brand-400'
                  }
                />
                <dt className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                  {item.value}
                </dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}
