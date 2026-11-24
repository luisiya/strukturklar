import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'

const Scope = () => {
  const { t, tm, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'scope')
  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'scope')}
        title={t('meta.scope.title')}
        description={t('meta.scope.description')}
        breadcrumbs={crumbs}
      />
      <PageHeader label={t('scope.label')} title={t('scope.heading')} intro={t('scope.subheading')} breadcrumbs={crumbs} />
      <Section>
        <div className="max-w-prose space-y-5">
          {tm<string[]>('scope.text').map((p) => (
            <p key={p} className="body text-[1.05rem]">
              {p}
            </p>
          ))}
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="h3">{t('scope.focusHeading')}</h2>
            <p className="body mt-3">{t('scope.focusIntro')}</p>
            <ul className="mt-5 space-y-2 text-ink-soft">
              {tm<string[]>('scope.focus').map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-petrol" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="h3">{t('scope.notOfferedHeading')}</h2>
            <p className="body mt-3">{t('scope.notOfferedIntro')}</p>
            <ul className="mt-5 space-y-2 text-ink-soft">
              {tm<string[]>('scope.notOffered').map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-line-strong" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-14 max-w-prose space-y-4 border-t border-line pt-10">
          {tm<string[]>('scope.closing').map((p) => (
            <p key={p} className="body">
              {p}
            </p>
          ))}
        </div>
      </Section>
    </>
  )
}

export default Scope
