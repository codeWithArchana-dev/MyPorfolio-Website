import { useRef, useState } from 'react'
import { AlertCircle, CheckCircle2, Github, Linkedin, Loader2, Mail, MapPin, Send } from 'lucide-react'
import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { emailjs as emailjsConfig, isEmailjsConfigured, contact, profile } from '../data/site.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const CHANNELS = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/codewitharchu',
    href: profile.links.linkedin,
    external: true,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View repositories',
    href: profile.links.github,
    external: true,
  },
]

const EMPTY = { name: '', email: '', company: '', message: '' }

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  else if (values.name.trim().length < 2) errors.name = 'Name must be at least 2 characters.'

  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Please enter a valid email address.'

  if (!values.message.trim()) errors.message = 'Please enter a message.'
  else if (values.message.trim().length < 10) errors.message = 'Message must be at least 10 characters.'

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('')
  const formRef = useRef(null)

  const update = (field) => (event) => {
    setValues((v) => ({ ...v, [field]: event.target.value }))
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const found = validate(values)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      setStatus('idle')
      // Move focus to the first invalid field for keyboard and screen reader users.
      formRef.current?.querySelector(`[name="${Object.keys(found)[0]}"]`)?.focus()
      return
    }

    setStatus('sending')

    // Without EmailJS credentials, hand off to the visitor's mail client rather
    // than pretending the message was delivered.
    if (!isEmailjsConfigured) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${values.name}`)
      const body = encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || '—'}\n\n${values.message}`
      )
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('success')
      setStatusMessage(
        'Your email app should now be open with the message ready to send. If nothing happened, email me directly at ' +
          profile.email +
          '.'
      )
      return
    }

    try {
      const { default: emailjs } = await import('@emailjs/browser')
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: values.name,
          from_email: values.email,
          company: values.company || 'Not specified',
          message: values.message,
          to_name: profile.name,
        },
        { publicKey: emailjsConfig.publicKey }
      )
      setStatus('success')
      setStatusMessage('Thank you! Your message has been sent successfully.')
      setValues(EMPTY)
    } catch (error) {
      console.error('Contact form submission failed:', error)
      setStatus('error')
      setStatusMessage(
        `Sorry, something went wrong while sending your message. Please email me directly at ${profile.email}.`
      )
    }
  }

  const fieldClass = (field) =>
    `w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-900 transition-colors placeholder:text-slate-400 focus:border-brand-500 dark:bg-slate-900 dark:text-white ${
      errors[field]
        ? 'border-red-400 dark:border-red-500'
        : 'border-slate-300 dark:border-slate-700'
    }`

  return (
    <Section
      id="contact"
      eyebrow="Get in touch"
      title={contact.heading}
      subtitle={contact.text}
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-14">
        <Reveal>
          <ul className="space-y-4">
            {CHANNELS.map(({ icon: ChannelIcon, label, value, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="card card-hover flex items-center gap-4 p-5"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/50 dark:text-brand-400">
                    <ChannelIcon size={19} aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {label}
                    </span>
                    <span className="mt-0.5 block truncate text-sm font-semibold text-slate-900 dark:text-white">
                      {value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
            <li className="card flex items-center gap-4 p-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500 dark:bg-slate-800">
                <MapPin size={19} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Location
                </span>
                <span className="mt-0.5 block text-sm font-semibold text-slate-900 dark:text-white">
                  {profile.location}
                </span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <form ref={formRef} onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={update('name')}
                  aria-required="true"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Your name"
                  className={fieldClass('name')}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={update('email')}
                  aria-required="true"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="you@company.com"
                  className={fieldClass('email')}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="company" className="mb-2 block text-sm font-semibold">
                Company <span className="font-normal text-slate-500">(optional)</span>
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={values.company}
                onChange={update('company')}
                placeholder="Company name"
                className={fieldClass('company')}
              />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={update('message')}
                aria-required="true"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                placeholder="Tell me about the role or opportunity…"
                className={`${fieldClass('message')} resize-y`}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs font-medium text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            <button type="submit" disabled={status === 'sending'} className="btn-primary mt-6 w-full">
              {status === 'sending' ? (
                <>
                  <Loader2 size={17} className="animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={17} aria-hidden="true" />
                  Send Message
                </>
              )}
            </button>

            <div aria-live="polite" role="status">
              {status === 'success' && (
                <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-medium text-emerald-800 dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-300">
                  <CheckCircle2 size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {statusMessage}
                </p>
              )}
              {status === 'error' && (
                <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800 dark:border-red-900/60 dark:bg-red-950/30 dark:text-red-300">
                  <AlertCircle size={17} className="mt-0.5 shrink-0" aria-hidden="true" />
                  {statusMessage}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
