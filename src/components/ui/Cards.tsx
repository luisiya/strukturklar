import { HiArrowRight } from 'react-icons/hi'
import { useT } from '../../i18n'
import { hasModelPage } from '../../content'
import type { Model, Project } from '../../content/types'
import PageLink from './PageLink'
import Badge from './Badge'

export const ProjectCard = ({ project, headingLevel = 'h3' }: { project: Project; headingLevel?: 'h2' | 'h3' }) => {
  const { t } = useT()
  const Heading = headingLevel
  return (
    <article className="card group relative flex flex-col p-6 transition-colors hover:border-ink/30 sm:p-7">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="neutral">{t(`common.statusLabels.${project.status}`)}</Badge>
        {!project.published && <Badge tone="ochre">{t('common.draft')}</Badge>}
      </div>
      {project.category && <p className="label mt-4 text-ink-muted">{project.category}</p>}
      <Heading className={`h3 ${project.category ? 'mt-2' : 'mt-4'}`}>
        <PageLink page="projects" slug={project.slug} className="after:absolute after:inset-0">
          {project.title}
        </PageLink>
      </Heading>
      <p className="body mt-3 flex-1">{project.summary}</p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-petrol">
        {t('common.viewProject')}
        <HiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
      </span>
    </article>
  )
}

export const ModelCard = ({ model, headingLevel = 'h3' }: { model: Model; headingLevel?: 'h2' | 'h3' }) => {
  const { t } = useT()
  const Heading = headingLevel
  const target = hasModelPage(model)
    ? { page: 'models' as const, slug: model.slug }
    : model.project
      ? { page: 'projects' as const, slug: model.project }
      : undefined

  return (
    <article
      className={`card relative flex flex-col p-6 sm:p-7 ${target ? 'group transition-colors hover:border-ink/30' : ''}`}
    >
      <ModelGlyph />
      <Heading className="h3 mt-5">
        {target ? (
          <PageLink {...target} className="after:absolute after:inset-0">
            {model.title}
          </PageLink>
        ) : (
          model.title
        )}
      </Heading>
      <p className="body mt-3 flex-1">{model.summary}</p>
      <div className="mt-6">
        {target ? (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-petrol">
            {t('common.viewModel')}
            <HiArrowRight aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </span>
        ) : (
          <Badge tone="neutral">{t('common.inPreparation')}</Badge>
        )}
      </div>
    </article>
  )
}

// Small structural mark shared by all model cards.
const ModelGlyph = () => (
  <svg aria-hidden="true" viewBox="0 0 48 24" className="h-6 w-12 text-petrol">
    <circle cx="4" cy="12" r="3" fill="currentColor" />
    <circle cx="24" cy="4" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="20" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="44" cy="12" r="3" fill="currentColor" />
    <path d="M7 11 21 5M7 13l14 6M27 5l14 6M27 19l14-6" stroke="currentColor" strokeWidth="1" opacity=".6" />
  </svg>
)
