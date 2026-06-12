import { useState } from 'react'
import PageWrapper from '../../components/common/PageWrapper'
import Seo from '../../components/common/Seo'
import ContactInfoIcon from '../../components/common/ContactInfoIcon'
import { contactCopy, contactFormName, contactInfo, formFields } from '../../data/contact'
import { labels } from '../../data/labels'
import shared from '../../styles/common/shared.module.css'
import styles from './Contact.module.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', subject: '', message: '' })
  const [status, setStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', msg: contactCopy.errorRequired })
      return
    }

    setSubmitting(true)
    setStatus(null)

    try {
      const body = new URLSearchParams({
        'form-name': contactFormName,
        name: form.name,
        email: form.email,
        company: form.company,
        subject: form.subject,
        message: form.message,
      })

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (!response.ok) throw new Error('Form submission failed')

      setStatus({ type: 'success', msg: contactCopy.successMessage })
      setForm({ name: '', email: '', company: '', subject: '', message: '' })
      setTimeout(() => setStatus(null), 4000)
    } catch {
      setStatus({ type: 'error', msg: contactCopy.errorSubmit })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <PageWrapper>
      <Seo title={contactCopy.seoTitle} />
      <h1 className={shared.pageTitle}>{contactCopy.pageTitle}</h1>
      <p className={shared.pageDesc}>{contactCopy.pageDesc}</p>

      <div className={styles.page}>
        <div>
          <div className={styles.infoTitle}>{labels.contactInformation}</div>
          {contactInfo.map(c => (
            <div key={c.label} className={styles.infoRow}>
              <ContactInfoIcon type={c.icon} className={styles.infoIcon} />
              {c.link ? (
                <a
                  href={c.link}
                  target={c.link.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={styles.infoValue}
                  aria-label={c.label}
                >
                  {c.value}
                </a>
              ) : (
                <div className={styles.infoValue}>{c.value}</div>
              )}
            </div>
          ))}
          <div className={styles.ctaBox}>
            <div className={styles.ctaTitle}>{contactCopy.ctaTitle}</div>
            <div className={styles.ctaDesc}>{contactCopy.ctaDesc}</div>
          </div>
        </div>

        <form
          name={contactFormName}
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
          className={styles.formCard}
        >
          <input type="hidden" name="form-name" value={contactFormName} />
          <p className={styles.honeypot} aria-hidden="true">
            <label>
              Don&apos;t fill this out:
              <input name="bot-field" tabIndex={-1} autoComplete="off" />
            </label>
          </p>
          <div className={styles.formTitle}>{labels.sendAMessage}</div>
          <div className={shared.formGrid}>
            <div>
              <label className={shared.formLabel}>{formFields.name.label}</label>
              <input name="name" value={form.name} onChange={handleChange} placeholder={formFields.name.placeholder} className={shared.formInput} required />
            </div>
            <div>
              <label className={shared.formLabel}>{formFields.email.label}</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} placeholder={formFields.email.placeholder} className={shared.formInput} required />
            </div>
          </div>
          <div className={shared.formField}>
            <label className={shared.formLabel}>{formFields.company.label}</label>
            <input name="company" value={form.company} onChange={handleChange} placeholder={formFields.company.placeholder} className={shared.formInput} />
          </div>
          <div className={shared.formField}>
            <label className={shared.formLabel}>{formFields.subject.label}</label>
            <input name="subject" value={form.subject} onChange={handleChange} placeholder={formFields.subject.placeholder} className={shared.formInput} />
          </div>
          <div className={shared.formFieldLg}>
            <label className={shared.formLabel}>{formFields.message.label}</label>
            <textarea name="message" value={form.message} onChange={handleChange} placeholder={formFields.message.placeholder} rows={5} className={shared.formTextarea} required />
          </div>
          <button type="submit" className={shared.submitButton} disabled={submitting}>
            {submitting ? contactCopy.sendingMessage : labels.sendMessage}
          </button>
          {status && (
            <div className={`${shared.formStatus} ${status.type === 'success' ? shared.formStatusSuccess : shared.formStatusError}`}>
              {status.msg}
            </div>
          )}
        </form>
      </div>
    </PageWrapper>
  )
}
