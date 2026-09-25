import { Github, Linkedin, Mail } from 'lucide-react'
import { profile } from '../data/site.js'

const SOCIALS = [
  { href: profile.links.linkedin, Icon: Linkedin, label: 'LinkedIn', external: true },
  { href: profile.links.github, Icon: Github, label: 'GitHub', external: true },
  { href: `mailto:${profile.email}`, Icon: Mail, label: 'Email', external: false },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="container-page">
        <div className="flex flex-col items-center gap-8 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Designed &amp; Developed by {profile.name}
            </p>
          </div>

          <ul className="flex gap-3">
            {SOCIALS.map(({ href, Icon: SocialIcon, label, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  aria-label={external ? `${label} (opens in a new tab)` : label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-600 dark:border-slate-800 dark:text-slate-400 dark:hover:border-brand-600 dark:hover:text-brand-400"
                >
                  <SocialIcon size={17} aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-8 border-t border-slate-200 pt-6 text-center text-xs text-slate-500 dark:border-slate-800">
          © {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
