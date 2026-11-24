import { useParams } from 'react-router-dom'
import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import { getModel, getProject, hasModelPage } from '../content'
import { MODEL_SECTIONS } from '../content/types'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import TemplateSections from '../components/ui/TemplateSections'
import { ProjectCard } from '../components/ui/Cards'
import { ContactCta } from '../components/home/Teasers'
import NotFound from './NotFound'

const ModelDetail = () => {
  const { slug = '' } = useParams()
  const { t, lang } = useT()
  const found = getModel(slug, lang)
  if (!found || !hasModelPage(found.item)) return <NotFound />

  const { item: model, languages } = found
  const crumbs = breadcrumbs(t, lang, 'models', { name: model.title, slug })
  const project = model.project ? getProject(model.project, lang)?.item : undefined

  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'models', slug)}
        title={model.title}
        description={model.summary}
        languages={languages}
        breadcrumbs={crumbs}
      />
      <PageHeader label={t('models.label')} title={model.title} intro={model.summary} breadcrumbs={crumbs} />
      <Section>
        <TemplateSections
          order={MODEL_SECTIONS}
          sections={model.sections ?? {}}
          headings={(key) => t(`models.sections.${key}`)}
        />
      </Section>
      {project && (
        <Section labelledBy="related-project" tone="surface">
          <h2 id="related-project" className="h3">
            {t('common.relatedProject')}
          </h2>
          <div className="mt-8 max-w-xl">
            <ProjectCard project={project} />
          </div>
        </Section>
      )}
      <ContactCta />
    </>
  )
}

export default ModelDetail
