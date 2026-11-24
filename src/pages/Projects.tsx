import { useT } from '../i18n'
import { Seo } from '../lib/seo'
import { localePath } from '../lib/paths'
import { breadcrumbs } from '../lib/breadcrumbs'
import { getProjects } from '../content'
import PageHeader from '../components/ui/PageHeader'
import Section from '../components/ui/Section'
import { ProjectCard } from '../components/ui/Cards'

const Projects = () => {
  const { t, tm, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'projects')
  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'projects')}
        title={t('meta.projects.title')}
        description={t('meta.projects.description')}
        breadcrumbs={crumbs}
      />
      <PageHeader label={t('projects.label')} title={t('projects.heading')} intro={t('projects.intro')} breadcrumbs={crumbs} />
      <Section>
        <div className="mb-12 max-w-3xl border-l-2 border-line-strong pl-5">
          <h2 className="label mb-4 text-ink-muted">{t('projects.statusHeading')}</h2>
          <dl className="space-y-2 text-sm text-ink-soft">
            {tm<{ status: string; text: string }[]>('projects.statusTypes').map((type) => (
              <div key={type.status}>
                <dt className="inline font-medium text-ink">{t(`common.statusLabels.${type.status}`)}:</dt>{' '}
                <dd className="inline">{type.text}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm text-ink-muted">{t('projects.statusDisclaimer')}</p>
        </div>
        <div className="mb-12 max-w-3xl">
          <h2 className="label mb-3 text-ink-muted">{t('projects.methodHeading')}</h2>
          <p className="body">{t('projects.method')}</p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {getProjects(lang).map((project) => (
            <ProjectCard key={project.slug} project={project} headingLevel="h2" />
          ))}
        </div>
      </Section>
    </>
  )
}

export default Projects
