import { useState, type FormEvent } from 'react'
import { useT } from '../../i18n'
import { site } from '../../config/site'
import PageLink from './PageLink'

type Status = 'idle' | 'sending' | 'success' | 'mailto' | 'error'

const field =
  'block w-full rounded-md border border-line-strong bg-surface px-3.5 py-3 text-base text-ink placeholder:text-ink-muted/70 focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/20'

const ContactForm = () => {
  const { t, tm } = useT()
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    setStatus('sending')

    try {
      if (site.web3formsKey) {
        data.append('access_key', site.web3formsKey)
        data.append('subject', `${t('form.subject')} ${data.get('name')}`)
        const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        const result = await response.json()
        if (!response.ok || !result.success) throw new Error(result.message)
      } else {
        // Without a form service the visitor's mail program sends the message
        const labels: [string, string][] = [
          ['name', t('form.name')],
          ['email', t('form.email')],
          ['organisation', t('form.organisation')],
          ['contact_preference', t('form.contactPreference')],
          ['phone', t('form.phone')],
        ]
        const lines = labels.filter(([key]) => data.get(key)).map(([key, label]) => `${label}: ${data.get(key)}`)
        const body = `${lines.join('\n')}\n\n${data.get('message')}`
        const subject = `${t('form.subject')} ${data.get('name')}`
        window.location.href = `mailto:${site.person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        setStatus('mailto')
        return
      }
      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('Contact form error:', error)
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className="mb-2 block text-sm font-medium">
            {t('form.name')}
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="cf-email" className="mb-2 block text-sm font-medium">
            {t('form.email')}
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={field} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-organisation" className="mb-2 block text-sm font-medium">
            {t('form.organisation')} <span className="font-normal text-ink-muted">({t('form.optional')})</span>
          </label>
          <input id="cf-organisation" name="organisation" type="text" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor="cf-contact" className="mb-2 block text-sm font-medium">
            {t('form.contactPreference')}
          </label>
          <select id="cf-contact" name="contact_preference" className={field}>
            {tm<string[]>('form.contactOptions').map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="cf-phone" className="mb-2 block text-sm font-medium">
          {t('form.phone')} <span className="font-normal text-ink-muted">({t('form.phoneHint')})</span>
        </label>
        <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={field} />
      </div>
      <div>
        <label htmlFor="cf-message" className="mb-2 block text-sm font-medium">
          {t('form.message')}
        </label>
        <p id="cf-message-hint" className="mb-2 text-sm text-ink-muted">
          {t('form.messageHint')}
        </p>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={6}
          aria-describedby="cf-message-hint"
          className={`${field} resize-y`}
        />
      </div>

      <p className="text-sm text-ink-muted">
        {t('form.privacy')}{' '}
        <PageLink page="datenschutz" className="link">
          {t('form.privacyLink')}
        </PageLink>
        .
      </p>

      <div aria-live="polite">
        {status === 'mailto' && (
          <p className="rounded-md bg-petrol-soft px-4 py-3 text-sm text-petrol-dark">
            {t('form.mailto')}{' '}
            <a href={`mailto:${site.person.email}`} className="underline">
              {site.person.email}
            </a>
          </p>
        )}
        {status === 'success' && (
          <p className="rounded-md bg-petrol-soft px-4 py-3 text-sm text-petrol-dark">{t('form.success')}</p>
        )}
        {status === 'error' && <p className="rounded-md bg-ochre-soft px-4 py-3 text-sm text-ochre">{t('form.error')}</p>}
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === 'sending' ? t('form.sending') : t('form.submit')}
      </button>
    </form>
  )
}

export default ContactForm
