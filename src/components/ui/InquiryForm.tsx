import { useState, type FormEvent } from 'react'
import { useT } from '../../i18n'
import { site } from '../../config/site'
import PageLink from './PageLink'

type Status = 'idle' | 'sending' | 'success' | 'mailto' | 'error'

const field =
  'block w-full rounded-md border border-line-strong bg-surface px-3.5 py-3 text-base text-ink placeholder:text-ink-muted/70 focus:border-petrol focus:outline-none focus:ring-2 focus:ring-petrol/20'

// Request for the free initial consultation. Goes to the owner's inbox; no appointment is confirmed automatically.
const InquiryForm = () => {
  const { t, tm } = useT()
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = `${data.get('first_name')} ${data.get('last_name')}`
    const subject = `${t('inquiry.subject')} ${name}`
    setStatus('sending')

    try {
      if (site.web3formsKey) {
        data.append('access_key', site.web3formsKey)
        data.append('subject', subject)
        const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
        const result = await response.json()
        if (!response.ok || !result.success) throw new Error(result.message)
      } else {
        // Without a form service the visitor's mail program sends the request
        const labels: [string, string][] = [
          ['first_name', t('inquiry.firstName')],
          ['last_name', t('inquiry.lastName')],
          ['email', t('inquiry.email')],
          ['address', t('inquiry.address')],
          ['availability', t('inquiry.availability')],
        ]
        const lines = labels.filter(([key]) => data.get(key)).map(([key, label]) => `${label}: ${data.get(key)}`)
        const body = `${lines.join('\n')}\n\n${t('inquiry.message')}\n${data.get('message')}`
        window.location.href = `mailto:${site.person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
        setStatus('mailto')
        return
      }
      form.reset()
      setStatus('success')
    } catch (error) {
      console.error('Inquiry form error:', error)
      setStatus('error')
    }
  }

  const label = (htmlFor: string, text: string, optional = false) => (
    <label htmlFor={htmlFor} className="mb-2 block text-sm font-medium">
      {text} {optional && <span className="font-normal text-ink-muted">({t('form.optional')})</span>}
    </label>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-5 text-left">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          {label('if-first', t('inquiry.firstName'))}
          <input id="if-first" name="first_name" type="text" required autoComplete="given-name" className={field} />
        </div>
        <div>
          {label('if-last', t('inquiry.lastName'))}
          <input id="if-last" name="last_name" type="text" required autoComplete="family-name" className={field} />
        </div>
      </div>
      <div>
        {label('if-email', t('inquiry.email'))}
        <input id="if-email" name="email" type="email" required autoComplete="email" className={field} />
      </div>
      <div>
        {label('if-address', t('inquiry.address'), true)}
        <input id="if-address" name="address" type="text" autoComplete="street-address" className={field} />
      </div>
      <div>
        {label('if-message', t('inquiry.message'))}
        <textarea id="if-message" name="message" required rows={5} className={`${field} resize-y`} />
      </div>
      <div>
        {label('if-availability', t('inquiry.availability'))}
        <select id="if-availability" name="availability" required className={field}>
          {tm<string[]>('inquiry.availabilityOptions').map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
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
          <p className="rounded-md bg-petrol-soft px-4 py-3 text-sm text-petrol-dark">{t('inquiry.success')}</p>
        )}
        {status === 'error' && <p className="rounded-md bg-ochre-soft px-4 py-3 text-sm text-ochre">{t('form.error')}</p>}
      </div>

      <button type="submit" disabled={status === 'sending'} className="btn-primary w-full sm:w-auto disabled:opacity-60">
        {status === 'sending' ? t('form.sending') : t('inquiry.submit')}
      </button>

      <div className="space-y-3 border-t border-line pt-5 text-sm leading-relaxed text-ink-muted">
        {tm<string[]>('inquiry.notes').map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </form>
  )
}

export default InquiryForm
