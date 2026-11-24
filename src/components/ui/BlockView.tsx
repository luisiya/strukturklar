import type { Block } from '../../content/types'
import Flow from './Flow'
import Stages from './Stages'

// Renders a content block from the JSON files; used by all templates.
const BlockView = ({ block }: { block: Block }) => (
  <div className="space-y-5">
    {block.text?.map((p) => (
      <p key={p} className="body text-[1.05rem]">
        {p}
      </p>
    ))}
    {block.items && (
      <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
        {block.items.map((item) => (
          <li key={item} className="flex gap-3 body">
            <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-petrol" />
            {item}
          </li>
        ))}
      </ul>
    )}
    {block.flow && <Flow steps={block.flow} />}
    {block.stages && <Stages stages={block.stages} />}
    {block.note && <p className="border-l-2 border-line-strong pl-4 text-sm text-ink-muted">{block.note}</p>}
  </div>
)

export default BlockView
