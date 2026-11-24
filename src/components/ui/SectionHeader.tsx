interface Props {
  label?: string
  heading: string
  intro?: string
  id?: string
  as?: 'h1' | 'h2'
  className?: string
}

const SectionHeader = ({ label, heading, intro, id, as: Tag = 'h2', className = '' }: Props) => (
  <header className={`max-w-3xl ${className}`}>
    {label && <p className="label mb-4">{label}</p>}
    <Tag id={id} className={Tag === 'h1' ? 'h1' : 'h2'}>
      {heading}
    </Tag>
    {intro && <p className="lead mt-5">{intro}</p>}
  </header>
)

export default SectionHeader
