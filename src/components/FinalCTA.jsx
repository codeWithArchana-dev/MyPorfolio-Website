import { Download, Mail } from 'lucide-react'
import Reveal from './ui/Reveal.jsx'
import { finalCta, profile } from '../data/site.js'

export default function FinalCTA() {
  return (
    <section aria-labelledby="cta-heading" className="py-20 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-16 text-center dark:bg-brand-950/40 dark:ring-1 dark:ring-brand-900/60 sm:px-12">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 id="cta-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {finalCta.heading}
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
                {finalCta.text}
              </p>

              <div className="mt-9 flex flex-wrap justify-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }
                  className="btn bg-white text-slate-900 shadow-lg hover:bg-slate-100"
                >
                  <Mail size={17} aria-hidden="true" />
                  Contact Me
                </button>
                <a
                  href={profile.resumePath}
                  download
                  className="btn border border-white/25 text-white hover:bg-white/10"
                >
                  <Download size={17} aria-hidden="true" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
