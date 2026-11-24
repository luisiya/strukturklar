import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import { getModels } from '../content'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import { ModelCard } from '../components/ui/Cards'
import { Method } from '../components/home/Thinking'

const Models = () => {
  const { t, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'models')
  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'models')}
        title={t('meta.models.title')}
        description={t('meta.models.description')}
        breadcrumbs={crumbs}
      />
      <PageHeader label={t('models.label')} title={t('models.heading')} intro={t('models.intro')} breadcrumbs={crumbs} />
      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          {getModels(lang).map((model) => (
            <ModelCard key={model.slug} model={model} headingLevel="h2" />
          ))}
        </div>
      </Section>
      <Method />
    </>
  )
}

export default Models
