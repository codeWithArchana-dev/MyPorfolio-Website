import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import Icon from './ui/Icon.jsx'
import { strengths } from '../data/site.js'

export default function WhyHireMe() {
  return (
    <Section
      id="why-hire-me"
      muted
      eyebrow="Why work with me"
      title="What I Bring to Your Team"
      subtitle="The strengths and mindset I'd bring into a frontend development role."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {strengths.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.06}>
            <div className="card card-hover group h-full p-6 sm:p-7">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600 transition-transform duration-300 group-hover:scale-110 dark:bg-brand-950/50 dark:text-brand-400">
                <Icon name={item.icon} size={20} />
              </span>
              <h3 className="mt-5 text-base font-bold">{item.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {item.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
