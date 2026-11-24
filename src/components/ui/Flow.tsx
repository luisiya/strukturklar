interface Props {
  steps: string[]
  label?: string
  tone?: 'default' | 'subtle'
}

// Horizontal chain A → B → C that wraps on small screens.
const Flow = ({ steps, label, tone = 'default' }: Props) => (
  <ol aria-label={label} className="flex flex-wrap items-center gap-x-2 gap-y-3">
    {steps.map((step, i) => (
      <li key={step} className="flex items-center gap-2">
        <span
          className={
            tone === 'subtle'
              ? 'text-sm font-medium text-ink-soft'
              : 'rounded-md border border-line-strong bg-surface px-3 py-1.5 text-sm font-medium text-ink'
          }
        >
          {step}
        </span>
        {i < steps.length - 1 && (
          <span aria-hidden="true" className="text-line-strong">
            →
          </span>
        )}
      </li>
    ))}
  </ol>
)

export default Flow
