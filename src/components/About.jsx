import { Download, GraduationCap, Linkedin, MapPin, Sparkles } from 'lucide-react'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { about, profile } from '../data/site.js'

const HIGHLIGHTS = [
  { icon: GraduationCap, label: 'Education', value: profile.education },
  { icon: MapPin, label: 'Based in', value: profile.shortLocation },
  { icon: Sparkles, label: 'Focus', value: 'React & Responsive UI' },
]

export default function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title="About Me">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <Reveal>
          <div className="space-y-5">
            {about.paragraphs.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3">
            <a href={profile.resumePath} download className="btn-primary">
              <Download size={17} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={17} aria-hidden="true" />
              View LinkedIn Profile
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <ul className="space-y-4">
            {HIGHLIGHTS.map(({ icon: HighlightIcon, label, value }) => (
              <li key={label} className="card card-hover flex items-start gap-4 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
                  <HighlightIcon size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {label}
                  </span>
                  <span className="mt-0.5 block text-sm font-bold text-slate-900 dark:text-white">
                    {value}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-4 rounded-2xl border border-dashed border-slate-300 p-5 text-sm leading-relaxed text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <strong className="font-semibold text-slate-900 dark:text-white">{profile.university}</strong>
            {' — '}
            currently pursuing a Master of Computer Applications while building frontend projects
            alongside coursework.
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
