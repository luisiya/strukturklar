import { ReactNode } from 'react'

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
  backgroundColor?: 'white' | 'gray'
}

const Section = ({ id, className = '', children, backgroundColor = 'white' }: SectionProps) => {
  const bgColor = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white'

  return (
    <section
      id={id}
      className={`py-12 md:py-20 lg:py-24 px-4 md:px-8 lg:px-16 ${bgColor} ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}

export default Section
