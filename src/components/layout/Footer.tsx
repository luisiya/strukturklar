import { Link } from 'react-router-dom'
import { useT } from '../../i18n'
import { site } from '../../config/site'
import { localePath, type PageKey } from '../../lib/paths'
import { Logo } from './Logo'

const LEGAL: PageKey[] = ['impressum', 'datenschutz', 'scope']

// Footer navigation; services and method are sections of the home page.
const NAV: { key: string; page: PageKey; hash?: string }[] = [
  { key: 'about', page: 'about' },
  { key: 'services', page: 'home', hash: 'leistungen' },
  { key: 'method', page: 'home', hash: 'arbeitsweise' },
  { key: 'models', page: 'models' },
  { key: 'projects', page: 'projects' },
  { key: 'contact', page: 'contact' },
]

const Footer = () => {
  const { t, lang } = useT()
  const social = site.social.filter((s) => s.url)
  const linkClass = 'text-ink-soft hover:text-ink'

  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Logo />
          <p className="mt-4 max-w-xs text-sm font-medium leading-relaxed text-ink-soft">{t('footer.tagline')}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-muted">{t('footer.text')}</p>
          <p className="mt-4 text-sm text-ink-muted">
            {site.person.name} · {site.person.city}
          </p>
        </div>

        <nav aria-label={t('footer.navigation')}>
          <h2 className="label mb-4 text-ink-muted">{t('footer.navigation')}</h2>
          <ul className="space-y-2.5 text-sm">
            {NAV.map(({ key, page, hash }) => (
              <li key={key}>
                <Link to={localePath(lang, page) + (hash ? `#${hash}` : '')} className={linkClass}>
                  {t(`nav.${key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t('footer.legal')}>
          <h2 className="label mb-4 text-ink-muted">{t('footer.legal')}</h2>
          <ul className="space-y-2.5 text-sm">
            {LEGAL.map((page) => (
              <li key={page}>
                <Link to={localePath(lang, page)} className={linkClass}>
                  {t(`footer.${page}`)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {social.length > 0 && (
          <div>
            <h2 className="label mb-4 text-ink-muted">{t('footer.social')}</h2>
            <ul className="space-y-2.5 text-sm">
              {social.map((s) => (
                <li key={s.key}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer me" className={linkClass}>
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-line">
        <p className="container-page py-6 text-xs text-ink-muted">
          © {new Date().getFullYear()} {site.name}. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}

export default Footer
