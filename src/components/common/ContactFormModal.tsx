import { useState, FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { HiX, HiMail, HiUser, HiCheckCircle } from 'react-icons/hi'

interface ContactFormModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Generate client number (timestamp-based)
      const clientNumber = Date.now()

      // Prepare form data for Web3Forms
      const formPayload = new FormData()
      formPayload.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY') // Get from https://web3forms.com
      formPayload.append('subject', `strukturklar-client-${clientNumber}`)
      formPayload.append('from_name', formData.name)
      formPayload.append('email', formData.email)
      formPayload.append('message', `Client Number: ${clientNumber}\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.comment}`)
      formPayload.append('to', 'kontakt@strukturklar.com')

      // Check if Web3Forms is configured
      const isConfigured = formPayload.get('access_key') !== 'YOUR_WEB3FORMS_ACCESS_KEY'

      if (isConfigured) {
        // Send real email via Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formPayload
        })

        const data = await response.json()

        if (!response.ok || !data.success) {
          throw new Error(data.message || 'Failed to send email')
        }
      } else {
        // DEMO MODE: Log to console
        console.log('📧 DEMO MODE - Form submitted with this data:')
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        console.log('To: kontakt@strukturklar.com')
        console.log('Subject:', `strukturklar-client-${clientNumber}`)
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        console.log('Name:', formData.name)
        console.log('Email:', formData.email)
        console.log('Client Number:', clientNumber)
        console.log('Message:', formData.comment)
        console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━')
        console.log('⚠️  To receive REAL emails:')
        console.log('1. Go to https://web3forms.com')
        console.log('2. Enter kontakt@strukturklar.com')
        console.log('3. Get your Access Key')
        console.log('4. Replace YOUR_WEB3FORMS_ACCESS_KEY in ContactFormModal.tsx')

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000))
      }

      setSubmitStatus('success')

      // Reset form after 2 seconds and close
      setTimeout(() => {
        setFormData({ name: '', email: '', comment: '' })
        setSubmitStatus('idle')
        onClose()
      }, 2000)
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-900">
            {t('contact.cta')}
          </h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <HiX className="w-6 h-6" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.name')} *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiUser className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder={t('form.namePlaceholder')}
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.email')} *
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <HiMail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder={t('form.emailPlaceholder')}
              />
            </div>
          </div>

          {/* Comment Field */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
              {t('form.comment')} *
            </label>
            <textarea
              id="comment"
              required
              rows={4}
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              className="block w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
              placeholder={t('form.commentPlaceholder')}
            />
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <HiCheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">{t('form.successMessage')}</span>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="text-red-600 bg-red-50 p-3 rounded-lg">
              <span className="text-sm font-medium">{t('form.errorMessage')}</span>
            </div>
          )}

          {/* Submit Button */}
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              {t('form.cancel')}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-primary-700 text-white font-semibold rounded-lg hover:bg-primary-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? t('form.sending') : t('form.submit')}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactFormModal
