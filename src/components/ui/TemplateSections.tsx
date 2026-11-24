import type { Block } from '../../content/types'
import BlockView from './BlockView'

interface Props {
  order: readonly string[]
  sections: Partial<Record<string, Block>>
  headings: (key: string) => string
}

// Numbered sections of a template (project, model, article); empty ones are skipped.
const TemplateSections = ({ order, sections, headings }: Props) => {
  const present = order.filter((key) => sections[key])
  return (
    <div className="divide-y divide-line">
      {present.map((key, i) => (
        <section key={key} aria-labelledby={`s-${key}`} className="grid gap-4 py-10 first:pt-0 last:pb-0 md:grid-cols-[200px_1fr] md:gap-10">
          <h2 id={`s-${key}`} className="flex items-baseline gap-3 text-base font-semibold">
            <span className="text-sm tabular-nums text-petrol">{String(i + 1).padStart(2, '0')}</span>
            {headings(key)}
          </h2>
          <BlockView block={sections[key]!} />
        </section>
      ))}
    </div>
  )
}

export default TemplateSections
