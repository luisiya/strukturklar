import type { ReactNode } from 'react'

const TONES = {
  petrol: 'bg-petrol-soft text-petrol-dark',
  ochre: 'bg-ochre-soft text-ochre',
  neutral: 'bg-paper text-ink-muted border border-line',
}

const Badge = ({ tone = 'petrol', children }: { tone?: keyof typeof TONES; children: ReactNode }) => (
  <span className={`inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${TONES[tone]}`}>{children}</span>
)

export default Badge
