import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import { useT } from '../../i18n'

interface Props {
  label?: string
  title: string
  intro?: string
  breadcrumbs: { name: string; path: string }[]
  children?: ReactNode
}

// Top of every subpage: breadcrumb trail, H1 and optional intro.
const PageHeader = ({ label, title, intro, breadcrumbs, children }: Props) => {
  const { t } = useT()
  return (
    <header className="border-b border-line">
      <div className="container-page pb-12 pt-10 sm:pb-16 sm:pt-14">
        <nav aria-label={t('common.breadcrumb')} className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
            {breadcrumbs.map((b, i) => (
              <li key={b.path} className="flex items-center gap-2">
                {i < breadcrumbs.length - 1 ? (
                  <>
                    <Link to={b.path} className="hover:text-ink">
                      {b.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                ) : (
                  <span aria-current="page" className="text-ink-soft">
                    {b.name}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        {label && <p className="label mb-4">{label}</p>}
        <h1 className="h1 max-w-4xl">{title}</h1>
        {intro && <p className="lead mt-6 max-w-3xl">{intro}</p>}
        {children}
      </div>
    </header>
  )
}

export default PageHeader
