import { Check, Code2 } from 'lucide-react'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { experience } from '../data/site.js'

/**
 * Honest framing: no professional roles yet, so this presents self-directed and
 * academic project work as what it is, rather than inventing employment.
 */
export default function Experience() {
  return (
    <Section
      id="experience"
      muted
      eyebrow="Hands-on work"
      title="Practical Experience"
      subtitle="Development experience gained through personal and academic projects."
    >
      <Reveal className="mx-auto max-w-3xl">
        <div className="card p-7 sm:p-9">
          <div className="flex flex-wrap items-start gap-4">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-600 text-white">
              <Code2 size={22} aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <h3 className="text-xl font-bold">{experience.title}</h3>
              <p className="mt-0.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                {experience.subtitle}
              </p>
            </div>
          </div>

          <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-400">
            {experience.description}
          </p>

          <ul className="mt-7 space-y-3">
            {experience.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-sm text-slate-700 dark:text-slate-300">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-400">
                  <Check size={12} strokeWidth={3} aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  )
}
