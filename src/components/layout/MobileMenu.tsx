import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'
import { HiX } from 'react-icons/hi'

interface NavItem {
  key: string
  id: string
}

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navItems: NavItem[]
}

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  const { t } = useTranslation()

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Slide-in Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-primary-700">StrukturKlar®️</span>
            <button
              onClick={onClose}
              className="text-gray-700 hover:text-primary-700 transition-colors"
              aria-label="Close menu"
            >
              <HiX className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto py-6">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                activeClass="bg-primary-50 text-primary-700 font-semibold"
                className="block px-6 py-3 text-gray-700 hover:bg-primary-50 hover:text-primary-700 cursor-pointer transition-colors duration-200"
                onClick={onClose}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </>
  )
}

export default MobileMenu
