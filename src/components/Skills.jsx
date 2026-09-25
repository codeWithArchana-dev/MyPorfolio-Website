import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'
import { skillGroups } from '../data/site.js'

/**
 * Deliberately no percentage bars — a "React 95%" claim is unverifiable and
 * reads as padding to experienced reviewers. Grouped skill chips instead.
 */
export default function Skills() {
  return (
    <Section
      id="skills"
      muted
      eyebrow="What I work with"
      title="Technical Skills"
      subtitle="Technologies I use to build responsive, component-driven web interfaces."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.08}>
            <div className="card card-hover h-full p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
                  <Icon name={group.icon} size={19} />
                </span>
                <h3 className="text-lg font-bold">{group.title}</h3>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className={`chip transition-transform duration-200 hover:-translate-y-0.5 ${
                      group.muted ? 'opacity-80' : ''
                    }`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
