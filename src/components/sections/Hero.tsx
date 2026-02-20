import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContactFormModal from '../common/ContactFormModal'

const Hero = () => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center text-white px-4 md:px-8 overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/hero-background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-primary-50">
            {t('hero.tagline')}
          </p>
          <p className="text-lg md:text-xl mb-12 text-primary-100 italic">
            {t('hero.subtitle')}
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-block px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-600 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            {t('contact.cta')}
          </button>
        </div>
      </section>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default Hero
