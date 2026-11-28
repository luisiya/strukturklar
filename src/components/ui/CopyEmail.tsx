import { useState } from 'react'
import { HiOutlineClipboardCopy, HiOutlineCheck } from 'react-icons/hi'
import { useT } from '../../i18n'
import { site } from '../../config/site'

// Shows the email address with a copy button, so visitors can paste it into their own mail service.
const CopyEmail = ({ align = 'center' }: { align?: 'center' | 'start' }) => {
  const { t } = useT()
  const [copied, setCopied] = useState(false)
  const email = site.person.email

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
    } catch {
      // Older browsers: select the address so it can be copied by hand
      const range = document.createRange()
      range.selectNodeContents(document.getElementById('copy-email-address')!)
      window.getSelection()?.removeAllRanges()
      window.getSelection()?.addRange(range)
      return
    }
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <div
      className={`flex flex-col gap-3 ${align === 'center' ? 'items-center sm:flex-row sm:justify-center' : 'items-start'}`}
    >
      <span
        id="copy-email-address"
        className="select-all rounded-md border border-line-strong bg-paper px-4 py-3 text-base font-medium text-ink"
      >
        {email}
      </span>
      <button type="button" onClick={copy} className="btn-primary whitespace-nowrap">
        {copied ? <HiOutlineCheck aria-hidden="true" /> : <HiOutlineClipboardCopy aria-hidden="true" />}
        {copied ? t('common.emailCopied') : t('common.copyEmail')}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? t('common.emailCopied') : ''}
      </span>
    </div>
  )
}

export default CopyEmail
