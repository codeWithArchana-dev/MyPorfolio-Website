import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Lightbulb,
  ListChecks,
  Puzzle,
  Target,
  User,
  Wrench,
} from 'lucide-react'
import Reveal from '../components/ui/Reveal.jsx'
import { projects, profile } from '../data/site.js'

function Block({ icon: BlockIcon, title, children }) {
  if (!children) return null
  return (
    <section className="card p-6 sm:p-7">
      <h2 className="flex items-center gap-2.5 text-base font-bold">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
          <BlockIcon size={17} aria-hidden="true" />
        </span>
        {title}
      </h2>
      <div className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {children}
      </div>
    </section>
  )
}

function BulletList({ items }) {
  if (!items?.length) return null
  return (
    <ul className="space-y-2.5">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  useEffect(() => {
    const previous = document.title
    if (project) document.title = `${project.title} | ${profile.name}`
    return () => {
      document.title = previous
    }
  }, [project])

  if (!project) {
    return (
      <main id="main" className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-extrabold">Project not found</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-400">
          The project you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link to="/" className="btn-primary mt-8">
          <ArrowLeft size={16} aria-hidden="true" />
          Back to portfolio
        </Link>
      </main>
    )
  }

  const study = project.caseStudy ?? {}
  const hasContent = (value) => (Array.isArray(value) ? value.length > 0 : Boolean(value))

  return (
    <main id="main" className="pb-24 pt-28 sm:pt-32">
      <div className="container-page">
        <Link
          to="/"
          state={{ scrollTo: 'projects' }}
          className="btn-ghost -ml-3 !px-3 text-sm"
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to projects
        </Link>

        <Reveal className="mt-8">
          <header>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{project.title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {project.summary}
            </p>

            {project.tech?.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li key={tech} className="chip">
                    {tech}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <ExternalLink size={16} aria-hidden="true" />
                  Live Demo
                </a>
              )}
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Github size={16} aria-hidden="true" />
                  View GitHub Repository
                </a>
              )}
            </div>
          </header>
        </Reveal>

        {project.cover && (
          <Reveal delay={0.1} className="mt-12">
            <img
              src={project.cover}
              alt={`${project.title} main screenshot`}
              loading="lazy"
              decoding="async"
              className="w-full rounded-2xl border border-slate-200 shadow-xl dark:border-slate-800"
            />
          </Reveal>
        )}

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <Block icon={Target} title="Project Overview">
              {hasContent(study.overview) ? <p>{study.overview}</p> : null}
            </Block>
          </Reveal>
          <Reveal delay={0.06}>
            <Block icon={Lightbulb} title="Project Purpose">
              {hasContent(study.purpose) ? <p>{study.purpose}</p> : null}
            </Block>
          </Reveal>
          <Reveal delay={0.12}>
            <Block icon={User} title="My Role">
              {hasContent(study.role) ? <p>{study.role}</p> : null}
            </Block>
          </Reveal>
          <Reveal delay={0.18}>
            <Block icon={Wrench} title="Technologies Used">
              {project.tech?.length > 0 ? <BulletList items={project.tech} /> : null}
            </Block>
          </Reveal>
          <Reveal delay={0.24}>
            <Block icon={ListChecks} title="Key Features">
              {hasContent(project.features) ? <BulletList items={project.features} /> : null}
            </Block>
          </Reveal>
          <Reveal delay={0.3}>
            <Block icon={Puzzle} title="Challenges">
              {hasContent(study.challenges) ? <BulletList items={study.challenges} /> : null}
            </Block>
          </Reveal>
          <Reveal delay={0.36}>
            <Block icon={Lightbulb} title="Solutions">
              {hasContent(study.solutions) ? <BulletList items={study.solutions} /> : null}
            </Block>
          </Reveal>
          <Reveal delay={0.42}>
            <Block icon={ListChecks} title="What I Learned">
              {hasContent(study.learned) ? <BulletList items={study.learned} /> : null}
            </Block>
          </Reveal>
        </div>

        {study.screenshots?.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-extrabold tracking-tight">Project Screenshots</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {study.screenshots.map((shot, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <figure className="card overflow-hidden">
                    <img
                      src={shot.src}
                      alt={shot.alt || `${project.title} ${shot.device} screenshot`}
                      loading="lazy"
                      decoding="async"
                      className="w-full bg-slate-100 object-cover dark:bg-slate-800"
                    />
                    <figcaption className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {shot.device}
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
