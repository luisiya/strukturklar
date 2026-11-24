import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import { useT } from '../../i18n'
import { localePath } from '../../lib/paths'
import { Logo, NAV_ITEMS } from './Logo'

interface Props {
  open: boolean
  onClose: () => void
}

const MobileMenu = ({ open, onClose }: Props) => {
  const { t, lang } = useT()
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    closeRef.current?.focus()
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div id="mobile-menu" role="dialog" aria-modal="true" aria-label={t('nav.main')} className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-ink/30" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-paper shadow-xl">
        <div className="flex h-16 items-center justify-between border-b border-line px-5">
          <Logo />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label={t('nav.closeMenu')}
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md"
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul>
            {NAV_ITEMS.map((page) => (
              <li key={page}>
                <NavLink
                  to={localePath(lang, page)}
                  end={page === 'home'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `flex min-h-[52px] items-center rounded-md px-3 text-lg ${
                      isActive ? 'bg-surface font-medium text-ink' : 'text-ink-soft'
                    }`
                  }
                >
                  {t(`nav.${page}`)}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
