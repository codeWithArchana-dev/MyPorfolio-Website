import { useState } from 'react'
import { BadgeCheck, Building2, Calendar, ExternalLink, Eye, FileWarning } from 'lucide-react'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import Modal from './ui/Modal.jsx'
import Icon from './ui/Icon.jsx'
import { certificates } from '../data/site.js'

function CertificateViewer({ item, onClose }) {
  const isPdf = item?.file?.toLowerCase().endsWith('.pdf')

  return (
    <Modal open={Boolean(item)} onClose={onClose} title={item?.title ?? ''} size="xl">
      {item && (
        <div className="space-y-6">
          <dl className="grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Issuing Organization
              </dt>
              <dd className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <Building2 size={15} className="text-brand-600 dark:text-brand-400" aria-hidden="true" />
                {item.organization}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Date
              </dt>
              <dd className="mt-1 flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
                <Calendar size={15} className="text-brand-600 dark:text-brand-400" aria-hidden="true" />
                {item.date}
              </dd>
            </div>
            {item.result && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Result
                </dt>
                <dd className="mt-1 text-sm font-semibold text-slate-900 dark:text-white">
                  {item.result}
                </dd>
              </div>
            )}
            {item.credentialId && (
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Credential ID
                </dt>
                <dd className="mt-1 break-all font-mono text-sm text-slate-900 dark:text-white">
                  {item.credentialId}
                </dd>
              </div>
            )}
          </dl>

          {item.description && (
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
              {item.description}
            </p>
          )}

          <div className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
            {isPdf ? (
              <object data={item.file} type="application/pdf" className="h-[70vh] w-full">
                <p className="p-6 text-sm text-slate-600 dark:text-slate-400">
                  Your browser can&apos;t display PDFs inline.{' '}
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-600 underline dark:text-brand-400"
                  >
                    Open the certificate in a new tab
                  </a>
                  .
                </p>
              </object>
            ) : (
              <>
                <img
                  src={item.file}
                  alt={`${item.title} certificate issued by ${item.organization}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                    const fallback = e.currentTarget.nextElementSibling
                    if (fallback) fallback.style.display = 'flex'
                  }}
                />
                <div
                  style={{ display: 'none' }}
                  className="items-center gap-3 p-8 text-sm text-slate-500"
                >
                  <FileWarning size={20} aria-hidden="true" />
                  Certificate file not found at <code className="font-mono">{item.file}</code>
                </div>
              </>
            )}
          </div>

          <div className="flex flex-wrap gap-3">
            {item.verifyUrl && (
              <a
                href={item.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <BadgeCheck size={16} aria-hidden="true" />
                Verify Credential
              </a>
            )}
            <a href={item.file} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <ExternalLink size={16} aria-hidden="true" />
              Open Full Size
            </a>
          </div>
        </div>
      )}
    </Modal>
  )
}

export default function Certificates() {
  const [selected, setSelected] = useState(null)

  return (
    <Section
      id="achievements"
      eyebrow="Recognition"
      title="Achievements & Certificates"
      subtitle="Milestones and certifications from my learning and development journey."
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item, i) => (
          <Reveal key={item.id} delay={i * 0.08}>
            <article className="card card-hover flex h-full flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-600 dark:bg-amber-950/40 dark:text-amber-400">
                  <Icon name={item.icon} size={20} />
                </span>
                {item.result && (
                  <span className="chip !border-amber-200 !bg-amber-50 !text-amber-700 dark:!border-amber-900/60 dark:!bg-amber-950/40 dark:!text-amber-400">
                    {item.result}
                  </span>
                )}
              </div>

              <h3 className="mt-5 text-base font-bold leading-snug">{item.title}</h3>

              <p className="mt-1.5 text-sm font-medium text-brand-600 dark:text-brand-400">
                {item.organization}
              </p>
              <p className="mt-0.5 text-xs text-slate-500">{item.date}</p>

              {item.description && (
                <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              )}

              {item.credentialId && (
                <p className="mt-3 truncate font-mono text-xs text-slate-500">
                  ID: {item.credentialId}
                </p>
              )}

              <button
                type="button"
                onClick={() => setSelected(item)}
                className="btn-secondary mt-6 w-full !py-2.5 !text-xs"
              >
                <Eye size={15} aria-hidden="true" />
                View Certificate
              </button>
            </article>
          </Reveal>
        ))}
      </div>

      <CertificateViewer item={selected} onClose={() => setSelected(null)} />
    </Section>
  )
}
