import { useEffect, type ReactNode } from 'react'
import { Outlet, useLocation, useParams } from 'react-router-dom'
import { LangProvider, createT } from '../../i18n'
import { PUBLISHED_LANGUAGES, type Lang } from '../../config/site'
import { isLang } from '../../lib/paths'
import Navigation from './Navigation'
import Footer from './Footer'
import NotFound from '../../pages/NotFound'

// Scroll to top on navigation, or to the #hash target if there is one.
const ScrollManager = () => {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)))
    if (target) target.scrollIntoView({ behavior: 'instant' })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export const Shell = ({ lang, children }: { lang: Lang; children: ReactNode }) => {
  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LangProvider lang={lang}>
      <ScrollManager />
      <div className="flex min-h-screen flex-col">
        <Navigation />
        {!PUBLISHED_LANGUAGES.includes(lang) && (
          <p className="border-b border-line bg-ochre-soft py-2.5 text-center text-sm text-ochre">
            {createT(lang).t('common.languageNotice')}
          </p>
        )}
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </LangProvider>
  )
}

const Layout = () => {
  const { lang } = useParams()
  if (!isLang(lang)) {
    return (
      <Shell lang="de">
        <NotFound />
      </Shell>
    )
  }
  return (
    <Shell lang={lang}>
      <Outlet />
    </Shell>
  )
}

export default Layout
