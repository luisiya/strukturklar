import { Link } from 'react-router-dom'

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <Link to="/" className="inline-flex items-center text-primary-700 hover:text-primary-800 mb-6 font-semibold">
          ← Zurück zur Startseite
        </Link>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

        <div className="bg-white rounded-lg p-8 shadow-md space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Allgemeine Hinweise</h2>
            <p className="text-gray-700">
              Der Schutz Ihrer personenbezogenen Daten ist mir wichtig.
              Die Verarbeitung erfolgt ausschließlich im Rahmen der gesetzlichen Bestimmungen (DSGVO, BDSG).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Verantwortliche Stelle</h2>
            <p className="text-gray-700 mb-2">Verantwortlich für die Datenverarbeitung auf dieser Website:</p>
            <p className="text-gray-700 mb-2">Anastasiia Gurina</p>
            <p className="text-gray-700 mb-2">Gorkistraße 109, 04347 Leipzig</p>
            <p className="text-gray-700 mb-2">Telefon: +49 176 60836128</p>
            <p className="text-gray-700">E-Mail: kontakt@strukturklar.com</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p className="text-gray-700 mb-3">Beim Besuch dieser Website werden automatisch folgende Daten erfasst:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Browsertyp</li>
              <li>Betriebssystem</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Diese Daten dienen ausschließlich der technischen Sicherheit der Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Kontaktformular</h2>
            <p className="text-gray-700 mb-3">Wenn Sie das Kontaktformular nutzen, werden folgende Daten verarbeitet:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Unternehmensangaben</li>
              <li>freiwillige Angaben im Freitextfeld</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Die Verarbeitung erfolgt zur Bearbeitung Ihrer Anfrage.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Online-Terminbuchung</h2>
            <p className="text-gray-700 mb-3">
              Für die Terminbuchung wird ein externer Dienstleister verwendet.
            </p>
            <p className="text-gray-700 mb-3">Dabei werden folgende Daten verarbeitet:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>ggf. weitere freiwillige Angaben</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Die Datenverarbeitung erfolgt zum Zweck der Terminorganisation.
              Der jeweilige Anbieter verarbeitet Daten gemäß seinen Datenschutzbestimmungen.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              (Hinweis: Hier später konkreten Anbieter einsetzen, z. B.: "Die Terminbuchung erfolgt über Calendly LLC, USA.")
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Rechtsgrundlage der Verarbeitung</h2>
            <p className="text-gray-700">
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. b DSGVO (Vertrag bzw. Vertragsanbahnung).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Speicherdauer</h2>
            <p className="text-gray-700">
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die jeweiligen Zwecke erforderlich ist
              oder gesetzliche Aufbewahrungspflichten bestehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Ihre Rechte</h2>
            <p className="text-gray-700 mb-3">Sie haben das Recht:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>auf Auskunft über Ihre gespeicherten Daten</li>
              <li>auf Berichtigung</li>
              <li>auf Löschung</li>
              <li>auf Einschränkung der Verarbeitung</li>
              <li>auf Datenübertragbarkeit</li>
              <li>auf Widerruf einer Einwilligung</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Beschwerden können bei der zuständigen Datenschutzaufsichtsbehörde eingereicht werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-gray-700">
              Diese Website nutzt aus Sicherheitsgründen eine SSL- bzw. TLS-Verschlüsselung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Keine Weitergabe an Dritte</h2>
            <p className="text-gray-700">
              Eine Weitergabe Ihrer Daten an Dritte erfolgt nur, wenn dies gesetzlich zulässig oder zur Vertragserfüllung erforderlich ist.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Datenschutz
