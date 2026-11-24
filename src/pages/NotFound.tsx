import { useLocation } from 'react-router-dom'
import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import PageLink from '../components/ui/PageLink'

const NotFound = () => {
  const { t, lang } = useT()
  const { pathname } = useLocation()
  return (
    <>
      <Seo lang={lang} path={pathname} title={t('meta.notFound.title')} description={t('meta.notFound.description')} noindex />
      <div className="container-page py-24 sm:py-32">
        <p className="label mb-4">404</p>
        <h1 className="h1">{t('notFound.heading')}</h1>
        <p className="lead mt-6 max-w-2xl">{t('notFound.text')}</p>
        <PageLink page="home" className="btn-primary mt-10">
          {t('notFound.cta')}
        </PageLink>
      </div>
    </>
  )
}

export default NotFound
