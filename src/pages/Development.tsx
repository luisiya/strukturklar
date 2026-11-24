import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'
import Flow from '../components/ui/Flow'

interface Field {
  title: string
  items: string[]
}

const Development = () => {
  const { t, tm, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'development')
  const path = tm<string[]>('development.path')
  const dataField = tm<Field>('development.dataField')

  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'development')}
        title={t('meta.development.title')}
        description={t('meta.development.description')}
        breadcrumbs={crumbs}
      />
      <PageHeader
        label={t('development.label')}
        title={t('development.heading')}
        intro={t('development.subtitle')}
        breadcrumbs={crumbs}
      />

      <Section labelledBy="path-heading">
        <h2 id="path-heading" className="sr-only">
          {t('development.heading')}
        </h2>
        <div className="max-w-3xl">
          <p className="label mb-4 text-ink-muted">{t('development.baseLabel')}</p>
          <Flow steps={tm<string[]>('development.base')} tone="subtle" />

          <div className="mt-10 flex items-center gap-3">
            <p className="label text-ink-muted">{t('development.pathLabel')}</p>
            <Badge tone="ochre">{t('common.inDevelopment')}</Badge>
          </div>
          <ol className="mt-6">
            {path.map((step, i) => (
              <li key={step} className="relative pb-4 pl-10 last:pb-0">
                {i < path.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-[11px] top-7 w-px border-l border-dashed border-line-strong" />
                )}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-2.5 flex h-6 w-6 items-center justify-center rounded-full border border-dashed border-ochre text-[0.7rem] font-semibold text-ochre"
                >
                  {i + 1}
                </span>
                <p className="card px-5 py-3.5 font-medium">{step}</p>
              </li>
            ))}
          </ol>

          <p className="mt-14 border-l-2 border-petrol pl-5 text-xl font-medium leading-snug sm:text-2xl">
            {t('development.keyPhrase')}
          </p>
        </div>
      </Section>

      {dataField && (
        <Section labelledBy="data-heading" tone="surface">
          <div className="flex flex-wrap items-center gap-3">
            <h2 id="data-heading" className="h2">
              {dataField.title}
            </h2>
            <Badge tone="ochre">{t('common.inDevelopment')}</Badge>
          </div>
          <ul className="mt-8 grid max-w-3xl gap-x-8 gap-y-2 sm:grid-cols-2">
            {dataField.items.map((item) => (
              <li key={item} className="flex gap-3 body">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-ochre" />
                {item}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}

export default Development
