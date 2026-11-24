import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useT } from '../../i18n'
import { LANGUAGES, LANGUAGE_NAMES } from '../../config/site'
import { switchLangPath } from '../../lib/paths'

const LanguageSwitcher = () => {
  const { t, lang } = useT()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (!open) return
    const onClick = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('click', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label={`${t('nav.language')}: ${LANGUAGE_NAMES[lang]}`}
        className="flex h-11 min-w-[44px] items-center justify-center rounded-md px-2 text-sm font-medium uppercase tracking-wide text-ink-soft hover:text-ink"
      >
        {lang}
      </button>
      {open && (
        <ul className="absolute right-0 mt-1 w-44 overflow-hidden rounded-md border border-line bg-surface py-1 shadow-lg">
          {LANGUAGES.map((l) => (
            <li key={l}>
              <Link
                to={switchLangPath(pathname, l)}
                hrefLang={l}
                lang={l}
                aria-current={l === lang ? 'true' : undefined}
                className={`flex min-h-[44px] items-center justify-between px-4 text-sm hover:bg-paper ${
                  l === lang ? 'font-medium text-ink' : 'text-ink-soft'
                }`}
              >
                {LANGUAGE_NAMES[l]}
                <span className="text-xs uppercase text-ink-muted">{l}</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default LanguageSwitcher
