import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { HiMenuAlt3 } from 'react-icons/hi'
import { useT } from '../../i18n'
import { localePath } from '../../lib/paths'
import { Logo, NAV_ITEMS } from './Logo'
import MobileMenu from './MobileMenu'
import LanguageSwitcher from './LanguageSwitcher'

const Navigation = () => {
  const { t, lang } = useT()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-surface focus:px-4 focus:py-2"
      >
        {t('nav.skip')}
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
        <div className="container-page flex h-16 items-center justify-between gap-6 lg:h-[4.5rem]">
          <Link to={localePath(lang)} aria-label={t('nav.homeLink')} className="-m-2 p-2">
            <Logo />
          </Link>

          <nav aria-label={t('nav.main')} className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {NAV_ITEMS.slice(1).map((page) => (
                <li key={page}>
                  <NavLink
                    to={localePath(lang, page)}
                    className={({ isActive }) =>
                      `rounded-md px-3 py-2 text-[0.92rem] transition-colors ${
                        isActive ? 'font-medium text-ink' : 'text-ink-soft hover:text-ink'
                      }`
                    }
                  >
                    {t(`nav.${page}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-1">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t('nav.openMenu')}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="-mr-2 flex h-11 w-11 items-center justify-center rounded-md text-ink lg:hidden"
            >
              <HiMenuAlt3 className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}

export default Navigation
