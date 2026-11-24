interface Props {
  stages: { title: string; items?: string[] }[]
}

// Vertical diagram: stages connected by a line, each with optional points.
const Stages = ({ stages }: Props) => (
  <ol className="relative space-y-4">
    {stages.map((stage, i) => (
      <li key={stage.title} className="relative pl-10">
        {i < stages.length - 1 && (
          <span aria-hidden="true" className="absolute left-[11px] top-7 h-[calc(100%+0.25rem)] w-px bg-line-strong" />
        )}
        <span
          aria-hidden="true"
          className={`absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border text-[0.7rem] font-semibold ${
            stage.items ? 'border-line-strong bg-surface text-ink-muted' : 'border-petrol bg-petrol text-white'
          }`}
        >
          {i + 1}
        </span>
        <div className={stage.items ? 'card p-5' : 'py-1'}>
          <p className={stage.items ? 'font-semibold' : 'font-semibold uppercase tracking-[0.12em] text-petrol'}>
            {stage.title}
          </p>
          {stage.items && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {stage.items.map((item) => (
                <li key={item} className="rounded bg-paper px-2.5 py-1 text-sm text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
)

export default Stages
