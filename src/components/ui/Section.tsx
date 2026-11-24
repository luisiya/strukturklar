import type { ReactNode } from 'react'

interface Props {
  id?: string
  labelledBy?: string
  tone?: 'paper' | 'surface' | 'ink'
  className?: string
  children: ReactNode
}

const TONES = {
  paper: '',
  surface: 'bg-surface',
  ink: 'bg-ink text-paper',
}

const Section = ({ id, labelledBy, tone = 'paper', className = '', children }: Props) => (
  <section id={id} aria-labelledby={labelledBy} className={`border-b border-line ${TONES[tone]} ${className}`}>
    <div className="container-page py-20 sm:py-28">{children}</div>
  </section>
)

export default Section
