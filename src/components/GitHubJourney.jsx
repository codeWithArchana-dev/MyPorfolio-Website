import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { profile, repositories } from '../data/site.js'

export default function GitHubJourney() {
  return (
    <Section
      id="github"
      eyebrow="Open source"
      title="My Development Journey"
      subtitle="A selection of repositories from my learning and project work."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {repositories.map((repo, i) => (
          <Reveal key={`${repo.name}-${i}`} delay={i * 0.08}>
            <article className="card card-hover flex h-full flex-col p-6">
              <div className="flex items-center gap-2.5">
                <Github size={17} className="shrink-0 text-slate-500" aria-hidden="true" />
                <h3 className="truncate font-mono text-sm font-bold">{repo.name}</h3>
              </div>

              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {repo.description}
              </p>

              {repo.language && (
                <p className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-500">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-500" aria-hidden="true" />
                  {repo.language}
                </p>
              )}

              <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800">
                {repo.url && (
                  <a
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary !px-3 !py-1.5 !text-xs"
                  >
                    <Github size={13} aria-hidden="true" />
                    Repository
                  </a>
                )}
                {repo.demo && (
                  <a
                    href={repo.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !px-3 !py-1.5 !text-xs text-brand-600 dark:text-brand-400"
                  >
                    <ExternalLink size={13} aria-hidden="true" />
                    Live Demo
                  </a>
                )}
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.15} className="mt-12 text-center">
        <a
          href={profile.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          <Github size={17} aria-hidden="true" />
          View GitHub Profile
          <ArrowUpRight size={15} aria-hidden="true" />
        </a>
      </Reveal>
    </Section>
  )
}
