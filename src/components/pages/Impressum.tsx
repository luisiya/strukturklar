import { Link } from 'react-router-dom'

const Impressum = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center text-primary-700 hover:text-primary-800 mb-6 font-semibold">
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Impressum</h1>

        <div className="bg-white rounded-lg p-8 shadow-md space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Angaben gemäß § 5 TMG</h2>
            <p className="text-gray-700 mb-2">Anastasiia Gurina</p>
            <p className="text-gray-700 mb-2">Gorkistraße 109</p>
            <p className="text-gray-700 mb-4">04347 Leipzig</p>
            <p className="text-gray-700">Deutschland</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Kontakt</h3>
            <p className="text-gray-700 mb-2">Telefon: +49 176 60836128</p>
            <p className="text-gray-700">E-Mail: anastasiia78@gmail.com</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Berufsbezeichnung</h3>
            <p className="text-gray-700">Freiberufliche betriebswirtschaftliche Beraterin</p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Tätigkeitsbeschreibung</h3>
            <p className="text-gray-700">
              Betriebswirtschaftliche Struktur- und Entscheidungsanalyse ohne Steuerberatung im Sinne des Steuerberatungsgesetzes (StBerG)
              und ohne Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Berufshaftpflichtversicherung</h3>
            <p className="text-gray-700 mb-2">Name der Versicherung: [Versicherung einfügen]</p>
            <p className="text-gray-700 mb-2">Anschrift der Versicherung: [Adresse einfügen]</p>
            <p className="text-gray-700">Räumlicher Geltungsbereich: Deutschland</p>
            <p className="text-sm text-gray-600 italic mt-2">
              (Hinweis: Dieser Abschnitt ist vorübergehend, bis die Versicherung abgeschlossen ist)
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Umsatzsteuer</h3>
            <p className="text-gray-700">
              Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).
            </p>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h3>
            <p className="text-gray-700 mb-2">Anastasiia Gurina</p>
            <p className="text-gray-700">Gorkistraße 109, 04347 Leipzig</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Impressum
