import { useState } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { HiMenu } from 'react-icons/hi'
import MobileMenu from './MobileMenu'
import LanguageSwitcher from './LanguageSwitcher'

const Navigation = () => {
  const { t } = useTranslation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { key: 'home', id: 'hero' },
    { key: 'introduction', id: 'introduction' },
    { key: 'problem', id: 'problem' },
    { key: 'approach', id: 'approach' },
    { key: 'targetAudience', id: 'target-audience' },
    { key: 'strategyCheck', id: 'strategy-check' },
    { key: 'stance', id: 'stance' },
    { key: 'contact', id: 'contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <Link
              to="hero"
              smooth={true}
              duration={500}
              className="text-xl md:text-2xl font-bold text-primary-700 cursor-pointer"
            >
              StrukturKlar®️
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  spy={true}
                  activeClass="text-primary-700 font-semibold"
                  className="text-gray-700 hover:text-primary-700 cursor-pointer transition-colors duration-200 text-sm"
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}
              <LanguageSwitcher />
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-4">
              <LanguageSwitcher />
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="text-gray-700 hover:text-primary-700 transition-colors"
                aria-label="Open menu"
              >
                <HiMenu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={navItems}
      />

      {/* Spacer to prevent content from hiding under fixed nav */}
      <div className="h-16 md:h-20" />
    </>
  )
}

export default Navigation
