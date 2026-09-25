import { Link } from 'react-router-dom'
import { ArrowUpRight, ExternalLink, Github, ImageOff } from 'lucide-react'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { projects } from '../data/site.js'

function ProjectCard({ project, index }) {
  const { slug, title, summary, tech, features, liveUrl, repoUrl, cover } = project

  return (
    <Reveal delay={index * 0.08}>
      <article className="card card-hover group flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
          {cover ? (
            <img
              src={cover}
              alt={`Screenshot of ${title}`}
              loading={index < 2 ? 'eager' : 'lazy'}
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.nextElementSibling
                if (fallback) fallback.style.display = 'grid'
              }}
            />
          ) : null}
          <div
            style={{ display: cover ? 'none' : 'grid' }}
            className="h-full w-full place-items-center text-slate-400 dark:text-slate-600"
            aria-hidden="true"
          >
            <ImageOff size={28} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            {summary}
          </p>

          {features?.length > 0 && (
            <ul className="mt-4 space-y-1.5">
              {features.slice(0, 3).map((feature, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-slate-600 dark:text-slate-400"
                >
                  <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          )}

          {tech?.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-1.5">
              {tech.map((item) => (
                <li key={item} className="chip !px-2.5 !py-0.5">
                  {item}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-5 dark:border-slate-800">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-3.5 !py-2 !text-xs"
              >
                <ExternalLink size={14} aria-hidden="true" />
                Live Demo
              </a>
            )}
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary !px-3.5 !py-2 !text-xs"
              >
                <Github size={14} aria-hidden="true" />
                Code
              </a>
            )}
            <Link
              to={`/projects/${slug}`}
              className="btn-ghost ml-auto !px-3 !py-2 !text-xs text-brand-600 hover:text-brand-700 dark:text-brand-400"
            >
              View Details
              <ArrowUpRight size={14} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Featured Projects"
      subtitle="Some of the projects I've built while improving my frontend development skills."
    >
      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
