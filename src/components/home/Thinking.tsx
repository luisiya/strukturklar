import { useT } from '../../i18n'
import Section from '../ui/Section'
import SectionHeader from '../ui/SectionHeader'

export const When = () => {
  const { t, tm } = useT()
  return (
    <Section labelledBy="when-heading" tone="surface">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
        <div>
          <SectionHeader id="when-heading" label={t('home.when.label')} heading={t('home.when.heading')} />
          <div className="mt-6 space-y-4">
            {tm<string[]>('home.when.text').map((p) => (
              <p key={p} className="body text-[1.05rem]">
                {p}
              </p>
            ))}
          </div>
        </div>
        <div className="card bg-paper p-6 sm:p-8">
          <h3 className="label mb-5 text-ink-muted">{t('home.when.situationsHeading')}</h3>
          <ul className="space-y-3">
            {tm<string[]>('home.when.situations').map((item) => (
              <li key={item} className="flex gap-3 body">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-petrol" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mx-auto mt-14 max-w-3xl border-t border-line pt-10 text-center text-xl font-medium leading-snug sm:text-2xl">
        {t('home.when.goal')}
      </p>
    </Section>
  )
}

export const Method = () => {
  const { t, tm } = useT()
  const steps = tm<{ title: string; question: string }[]>('home.method.steps')
  return (
    <Section id="arbeitsweise" labelledBy="method-heading">
      <SectionHeader
        id="method-heading"
        label={t('home.method.label')}
        heading={t('home.method.heading')}
        intro={t('home.method.intro')}
      />
      <ol className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <li key={step.title} className="bg-paper p-6">
            <span
              aria-hidden="true"
              className={`text-sm font-semibold tabular-nums ${i === steps.length - 1 ? 'text-petrol' : 'text-ink-muted'}`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{step.question}</p>
          </li>
        ))}
      </ol>
      <p className="mx-auto mt-16 max-w-3xl border-t border-line pt-10 text-center text-xl font-medium leading-snug sm:text-2xl">
        {t('home.method.closing')}
      </p>
    </Section>
  )
}
