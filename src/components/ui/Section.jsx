import Reveal from './Reveal.jsx'

/**
 * Standard section shell: consistent vertical rhythm, centered heading block,
 * and a landmark <section> with an accessible name for screen readers.
 */
export default function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  className = '',
  muted = false,
}) {
  const headingId = `${id}-heading`

  return (
    <section
      id={id}
      aria-labelledby={title ? headingId : undefined}
      className={`scroll-mt-24 py-20 sm:py-24 ${
        muted ? 'bg-slate-50 dark:bg-slate-900/40' : ''
      } ${className}`}
    >
      <div className="container-page">
        {(eyebrow || title) && (
          <Reveal className="mb-14 text-center">
            {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
            {title && (
              <h2 id={headingId} className="section-title">
                {title}
              </h2>
            )}
            {subtitle && <p className="section-sub">{subtitle}</p>}
          </Reveal>
        )}
        {children}
      </div>
    </section>
  )
}
