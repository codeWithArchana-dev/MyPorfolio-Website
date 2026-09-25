import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Award, Briefcase, Download, FolderGit2, Github, Linkedin, Mail, UserSearch } from 'lucide-react'
import Modal from './ui/Modal.jsx'
import Reveal from './ui/Reveal.jsx'
import { profile } from '../data/site.js'

const CORE_SKILLS = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap', 'Git', 'GitHub']

const FACTS = [
  { label: 'Location', value: profile.shortLocation },
  { label: 'Education', value: profile.education },
  { label: 'Status', value: profile.availabilityBadge },
]

/**
 * A 60-second summary for recruiters, reachable from a persistent trigger so it
 * is never more than one click away.
 */
export default function RecruiterProfile() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const jumpTo = (id) => () => {
    setOpen(false)
    // Let the modal finish closing (and unlock scroll) before scrolling.
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      else navigate('/', { state: { scrollTo: id } })
    }, 180)
  }

  const quickLinks = [
    { label: 'View Projects', icon: FolderGit2, onClick: jumpTo('projects') },
    { label: 'View Achievements', icon: Award, onClick: jumpTo('achievements') },
    { label: 'Contact', icon: Mail, onClick: jumpTo('contact') },
  ]

  return (
    <>
      <section id="recruiter" className="scroll-mt-24 py-16">
        <div className="container-page">
          <Reveal>
            <div className="card flex flex-col items-center gap-5 border-brand-200 bg-brand-50/50 p-8 text-center dark:border-brand-900/60 dark:bg-brand-950/20 sm:flex-row sm:text-left">
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white">
                <UserSearch size={26} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <h2 className="text-xl font-bold">Recruiter or hiring manager?</h2>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                  Get everything you need — profile, skills, links, and resume — in under a minute.
                </p>
              </div>
              <button type="button" onClick={() => setOpen(true)} className="btn-primary shrink-0">
                View Quick Profile
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      <Modal open={open} onClose={() => setOpen(false)} title="Recruiter Quick Profile">
        <div className="space-y-7">
          <header>
            <h3 className="text-2xl font-extrabold">{profile.name}</h3>
            <p className="mt-1.5 text-sm font-semibold text-brand-600 dark:text-brand-400">
              {profile.tagline}
            </p>
          </header>

          <dl className="grid gap-4 sm:grid-cols-3">
            {FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-xl border border-slate-200 p-4 dark:border-slate-800"
              >
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-sm font-bold text-slate-900 dark:text-white">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>

          <div>
            <h4 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <Briefcase size={14} aria-hidden="true" />
              Core Skills
            </h4>
            <ul className="mt-3 flex flex-wrap gap-2">
              {CORE_SKILLS.map((skill) => (
                <li key={skill} className="chip">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Quick Links
            </h4>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {quickLinks.map(({ label, icon: LinkIcon, onClick }) => (
                <button
                  key={label}
                  type="button"
                  onClick={onClick}
                  className="btn-secondary !justify-start !py-2.5 !text-xs"
                >
                  <LinkIcon size={15} aria-hidden="true" />
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 border-t border-slate-200 pt-6 dark:border-slate-800">
            <a href={profile.resumePath} download className="btn-primary">
              <Download size={16} aria-hidden="true" />
              Download Resume
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
          </div>
        </div>
      </Modal>
    </>
  )
}
