import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer
      className="text-white py-12"
      style={{ backgroundColor: 'rgb(3 105 161 / var(--tw-text-opacity, 1))' }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">StrukturKlar</h3>
            <p className="text-white/80 text-sm">
              Betriebswirtschaftliche Struktur- und Entscheidungsanalyse
            </p>
          </div>

          {/* Column 2 - Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/impressum" className="text-white/80 hover:text-white transition-colors">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-white/80 hover:text-white transition-colors">
                  Datenschutz
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <p className="text-white/80 text-sm mb-2">E-Mail: kontakt@strukturklar.com</p>
            <p className="text-white/80 text-sm">Gorkistraße 109, 04347 Leipzig</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/80 text-sm">
            &copy; {new Date().getFullYear()} StrukturKlar. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
