import { useParams } from 'react-router-dom'
import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import { getModel, getProject } from '../content'
import { PROJECT_SECTIONS } from '../content/types'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import Badge from '../components/ui/Badge'
import TemplateSections from '../components/ui/TemplateSections'
import { ModelCard } from '../components/ui/Cards'
import { ContactCta } from '../components/home/Teasers'
import NotFound from './NotFound'

const ProjectDetail = () => {
  const { slug = '' } = useParams()
  const { t, lang } = useT()
  const found = getProject(slug, lang)
  if (!found) return <NotFound />

  const { item: project, languages } = found
  const crumbs = breadcrumbs(t, lang, 'projects', { name: project.title, slug })
  const statusLabel = t(`common.statusLabels.${project.status}`)
  const sections = { ...project.sections, status: { text: [statusLabel], ...project.sections.status } }
  const models = (project.models ?? []).map((m) => getModel(m, lang)?.item).filter((m) => !!m)

  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'projects', slug)}
        title={project.title}
        description={project.subtitle ?? project.summary}
        languages={languages}
        breadcrumbs={crumbs}
      />
      <PageHeader label={project.category} title={project.title} intro={project.subtitle ?? project.summary} breadcrumbs={crumbs}>
        <div className="mt-8 flex flex-wrap gap-2">
          <Badge>{statusLabel}</Badge>
          {!project.published && <Badge tone="ochre">{t('common.draft')}</Badge>}
          {project.tags?.map((tag) => (
            <Badge key={tag} tone="neutral">
              {tag}
            </Badge>
          ))}
        </div>
      </PageHeader>

      <Section>
        <TemplateSections
          order={PROJECT_SECTIONS}
          sections={sections}
          headings={(key) => t(`projects.sections.${key}`)}
        />
      </Section>

      {models.length > 0 && (
        <Section labelledBy="related-models" tone="surface">
          <h2 id="related-models" className="h3">
            {t('common.relatedModels')}
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {models.map((model) => (
              <ModelCard key={model.slug} model={model} />
            ))}
          </div>
        </Section>
      )}

      <ContactCta />
    </>
  )
}

export default ProjectDetail
