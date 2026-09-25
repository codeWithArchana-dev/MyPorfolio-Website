import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/site.js'

const TECH_BADGES = [
  { label: 'React', className: 'left-0 top-16', delay: 0 },
  { label: 'JavaScript', className: 'right-0 top-32', delay: 0.6 },
  { label: 'HTML', className: 'left-2 bottom-28', delay: 1.2 },
  { label: 'CSS', className: 'right-4 bottom-12', delay: 1.8 },
]

/** Types each role out, holds, deletes, then moves to the next. */
function useTypedRole(roles, enabled) {
  const [text, setText] = useState(enabled ? '' : roles[0])
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (!enabled) return
    const full = roles[index % roles.length]

    if (!deleting && text === full) {
      const hold = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(hold)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % roles.length)
      return
    }

    const timer = setTimeout(
      () => {
        setText((current) =>
          deleting ? full.slice(0, current.length - 1) : full.slice(0, current.length + 1)
        )
      },
      deleting ? 40 : 85
    )
    return () => clearTimeout(timer)
  }, [text, deleting, index, roles, enabled])

  return text
}

export default function Hero() {
  const reduce = useReducedMotion()
  const typed = useTypedRole(profile.roles, !reduce)

  const scrollTo = (id) => () =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="grid-backdrop pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-brand-500/10 blur-3xl dark:bg-brand-500/15"
        aria-hidden="true"
      />

      <div className="container-page relative">
        <div className="grid items-center gap-14 pb-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16 lg:pb-28">
          {/* ---------------- Text column ---------------- */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-400">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availabilityBadge}
            </span>

            <p className="mt-7 text-base font-medium text-slate-500 dark:text-slate-400">
              Hi, I&apos;m
            </p>
            <h1 className="mt-1 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>

            <p className="mt-4 flex min-h-[2.25rem] items-center text-lg font-semibold text-brand-600 dark:text-brand-400 sm:text-xl">
              {/* Screen readers get the complete list; sighted users see it type. */}
              <span className="sr-only">{profile.tagline}</span>
              <span aria-hidden="true">
                {typed}
                {!reduce && <span className="ml-0.5 animate-blink font-normal">|</span>}
              </span>
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {profile.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href={profile.resumePath} download className="btn-primary">
                <Download size={17} aria-hidden="true" />
                Download Resume
              </a>
              <button type="button" onClick={scrollTo('contact')} className="btn-secondary">
                Contact Me
              </button>
              <button type="button" onClick={scrollTo('projects')} className="btn-ghost">
                View My Work
                <ArrowRight size={16} aria-hidden="true" />
              </button>
            </div>

            <div className="mt-9 flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Find me
              </span>
              <span className="h-px w-8 bg-slate-300 dark:bg-slate-700" aria-hidden="true" />
              {[
                { href: profile.links.linkedin, Icon: Linkedin, label: 'LinkedIn' },
                { href: profile.links.github, Icon: Github, label: 'GitHub' },
                { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email' },
              ].map(({ href, Icon: SocialIcon, label }) => {
                const external = href.startsWith('http')
                return (
                  <a
                    key={label}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    aria-label={external ? `${label} (opens in a new tab)` : label}
                    className="rounded-lg border border-slate-200 p-2.5 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-brand-600 dark:hover:text-brand-400"
                  >
                    <SocialIcon size={18} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </motion.div>

          {/* ---------------- Photo column ---------------- */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div
              className="absolute inset-6 rounded-[2.5rem] bg-gradient-to-tr from-brand-500/25 to-brand-300/10 blur-2xl"
              aria-hidden="true"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-b from-slate-100 to-slate-200 shadow-2xl dark:border-slate-800 dark:from-slate-800 dark:to-slate-900">
              <img
                src={profile.photoPath}
                alt={`${profile.name}, Frontend Developer`}
                width="480"
                height="600"
                fetchpriority="high"
                className="h-full w-full object-cover object-center"
                onError={(e) => {
                  // Photo not added yet — show initials instead of a broken image.
                  e.currentTarget.style.display = 'none'
                  const fallback = e.currentTarget.nextElementSibling
                  if (fallback) fallback.style.display = 'grid'
                }}
              />
              <div
                style={{ display: 'none' }}
                className="h-full w-full place-items-center text-6xl font-black text-slate-400 dark:text-slate-600"
              >
                AV
              </div>
            </div>

            {TECH_BADGES.map(({ label, className, delay }) => (
              <motion.span
                key={label}
                className={`absolute ${className} rounded-xl border border-slate-200 bg-white/90 px-3 py-2 text-xs font-bold text-slate-700 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/90 dark:text-slate-200`}
                aria-hidden="true"
                animate={reduce ? undefined : { y: [0, -9, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay }}
              >
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
