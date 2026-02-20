import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ContactFormModal from '../common/ContactFormModal'

const Contact = () => {
  const { t } = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <>
      <section id="contact" className="relative py-20 md:py-32 bg-white overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/30" />
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-700/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2" />

        <div className="relative max-w-6xl mx-auto px-4 md:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('contact.heading')}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-700 to-accent mx-auto" />
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Side - Photo & Info Card */}
            <div className="flex justify-center md:justify-end">
              <div className="text-center">
                {/* Photo */}
                <div className="mb-6">
                  {!imageError ? (
                    <img
                      src={`${import.meta.env.BASE_URL}images/contact-photo.jpg`}
                      alt="StrukturKlar Berater"
                      className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover mx-auto"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-56 h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center mx-auto">
                      <svg
                        className="w-32 h-32 md:w-40 md:h-40 text-white/80"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Professional Badge */}
                <div className="inline-flex items-center justify-center px-4 py-2 bg-primary-50 rounded-full mb-3">
                  <div className="w-2 h-2 bg-primary-700 rounded-full mr-2 animate-pulse" />
                  <span className="text-sm font-semibold text-primary-700">
                    {t('contact.available')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Anastasiia Gurina
                </h3>
                <p className="text-gray-600 font-medium">
                  {t('contact.title')}
                </p>
              </div>
            </div>

            {/* Right Side - Contact Information */}
            <div className="text-center md:text-left">
              <div className="space-y-6 mb-10">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  {t('contact.text1')}
                </p>
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  {t('contact.text2')}
                </p>
                <p className="text-xl md:text-2xl text-gray-900 leading-relaxed font-semibold">
                  {t('contact.text3')}
                </p>
              </div>

              {/* Contact Details */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 mb-8 border border-gray-100 shadow-sm">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-primary-700 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700">Gorkistraße 109</p>
                      <p className="text-gray-700">04347 Leipzig</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+4917660836128" className="text-gray-700 hover:text-primary-700 transition-colors">
                      0176 60836128
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary-700 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:anastasiia78@gmail.com" className="text-gray-700 hover:text-primary-700 transition-colors">
                      anastasiia78@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-800 text-white font-semibold rounded-xl hover:from-primary-800 hover:to-primary-900 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {t('contact.cta')}
                    <svg
                      className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-accent to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-10 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-700">10+</div>
                    <div className="text-sm text-gray-600">Jahre Erfahrung</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-700">100%</div>
                    <div className="text-sm text-gray-600">Vertraulich</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary-700">24h</div>
                    <div className="text-sm text-gray-600">Rückmeldung</div>
                  </div>
                </div>
              </div>
            </div>
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

export default Contact
