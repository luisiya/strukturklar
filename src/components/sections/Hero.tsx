import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-scroll'
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
            src={`${import.meta.env.BASE_URL}images/hero-background.jpg`}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-4xl mx-auto leading-relaxed">
            {t('hero.tagline')}
          </p>
          <p className="text-base md:text-lg mb-12 text-white/80 italic">
            {t('hero.languages')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {t('hero.button1')}
            </button>
            <Link
              to="premium-service"
              smooth={true}
              duration={500}
              offset={-80}
              className="px-8 py-4 bg-white text-primary-700 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 cursor-pointer"
            >
              {t('hero.button2')}
            </Link>
          </div>
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
