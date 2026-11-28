import { useT } from '../../i18n'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'
import Flow from '../ui/Flow'
import CopyEmail from '../ui/CopyEmail'

export const DecisionSupport = () => {
  const { t, tm } = useT()
  return (
    <Section labelledBy="decision-heading" tone="surface">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <SectionHeader id="decision-heading" label={t('home.decision.label')} heading={t('home.decision.heading')} />
        <div className="space-y-4">
          {tm<string[]>('home.decision.text').map((p) => (
            <p key={p} className="body text-[1.05rem]">
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {tm<{ title: string; questions: string[] }[]>('home.decision.examples').map((example) => (
          <div key={example.title} className="card bg-paper p-6 sm:p-7">
            <h3 className="font-semibold leading-snug">{example.title}</h3>
            <ul className="mt-4 divide-y divide-line">
              {example.questions.map((q) => (
                <li key={q} className="py-2.5 text-[0.95rem] leading-snug text-ink-soft last:pb-0">
                  {q}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-3xl border-l-2 border-petrol pl-4 text-ink-soft">{t('home.decision.note')}</p>
    </Section>
  )
}

export const ProjectSupport = () => {
  const { t, tm } = useT()
  return (
    <Section labelledBy="support-heading">
      <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <SectionHeader id="support-heading" label={t('home.support.label')} heading={t('home.support.heading')} />
        <div className="space-y-4">
          {tm<string[]>('home.support.text').map((p) => (
            <p key={p} className="body text-[1.05rem]">
              {p}
            </p>
          ))}
        </div>
      </div>
      <div className="mt-12 rounded-lg border border-line bg-surface p-6 sm:p-8">
        <h3 className="label mb-5 text-ink-muted">{t('home.support.flowHeading')}</h3>
        <Flow steps={tm<string[]>('home.support.flow')} />
      </div>
      <div className="mt-8 max-w-3xl space-y-3">
        {tm<string[]>('home.support.notes').map((p) => (
          <p key={p} className="body">
            {p}
          </p>
        ))}
      </div>
    </Section>
  )
}

export const Audience = () => {
  const { t, tm } = useT()
  return (
    <Section labelledBy="audience-heading" tone="surface">
      <SectionHeader
        id="audience-heading"
        label={t('home.audience.label')}
        heading={t('home.audience.heading')}
        intro={t('home.audience.intro')}
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {tm<{ title: string; text: string }[]>('home.audience.items').map((item) => (
          <div key={item.title} className="card bg-paper p-6 sm:p-7">
            <h3 className="h3">{item.title}</h3>
            <p className="body mt-3">{item.text}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

export const Check = () => {
  const { t, tm } = useT()
  return (
    <Section id="erstgespraech" labelledBy="check-heading" tone="surface">
      <div className="mx-auto max-w-3xl text-center">
        <p className="label mb-4">{t('home.check.label')}</p>
        <h2 id="check-heading" className="h2">
          {t('home.check.heading')}
        </h2>
        <div className="mt-8 space-y-4 text-left sm:text-center">
          {tm<string[]>('home.check.text').map((p) => (
            <p key={p} className="body text-[1.05rem]">
              {p}
            </p>
          ))}
        </div>
        <div className="card mt-10 p-6 text-left sm:p-8">
          <p className="font-semibold">{t('home.check.stepsHeading')}</p>
          <ol className="mt-4 space-y-2">
            {tm<string[]>('home.check.steps').map((step, i) => (
              <li key={step} className="flex gap-3 text-ink-soft">
                <span className="w-5 shrink-0 text-sm font-semibold tabular-nums text-petrol">{i + 1}</span>
                {step}
              </li>
            ))}
          </ol>
          <p className="mt-6 font-medium">{t('home.check.format')}</p>
        </div>
        <div className="mt-8 space-y-3 text-left text-sm leading-relaxed text-ink-muted">
          {tm<string[]>('inquiry.notes').map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <p className="mt-10 font-medium">{t('inquiry.copyHint')}</p>
        <div className="mt-5">
          <CopyEmail />
        </div>
      </div>
    </Section>
  )
}
