import type { ReactNode } from 'react'
import { useT } from '../../i18n'
import { Seo } from '../../lib/seo'
import { localePath } from '../../lib/paths'
import { breadcrumbs } from '../../lib/breadcrumbs'
import { site } from '../../config/site'
import LegalNotice from '../ui/LegalNotice'
import PageHeader from '../ui/PageHeader'

const Part = ({ title, children }: { title: string; children: ReactNode }) => (
  <section>
    <h2 className="h3 mb-3">{title}</h2>
    <div className="space-y-3">{children}</div>
  </section>
)

const List = ({ items }: { items: string[] }) => (
  <ul className="list-disc space-y-1 pl-5">
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
)

const Datenschutz = () => {
  const { t, lang } = useT()
  const crumbs = breadcrumbs(t, lang, 'datenschutz')
  const { person, address } = site
  return (
    <>
      <Seo
        lang={lang}
        path={localePath(lang, 'datenschutz')}
        title={t('meta.datenschutz.title')}
        description={t('meta.datenschutz.description')}
        breadcrumbs={crumbs}
      />
      <PageHeader title="Datenschutzerklärung" breadcrumbs={crumbs} />
      <LegalNotice />
      <div className="container-page py-14 sm:py-20" lang="de">
        <div className="max-w-prose space-y-10 leading-relaxed text-ink-soft">
          <Part title="1. Verantwortliche">
            <p>
              {person.name}
              <br />
              {address.street}, {address.postalCode} {address.city}
              <br />
              E-Mail: <a href={`mailto:${person.email}`}>{person.email}</a>
            </p>
          </Part>

          <Part title="2. Allgemeines">
            <p>
              Die Nutzung dieser Website ist ohne Angabe personenbezogener Daten möglich. Personenbezogene Daten werden
              nur verarbeitet, soweit dies für die Bereitstellung der Website oder die Bearbeitung einer Anfrage
              erforderlich ist. Es werden keine Cookies, keine Analyse- oder Tracking-Dienste und keine extern
              geladenen Schriftarten eingesetzt.
            </p>
          </Part>

          <Part title="3. Hosting und Server-Logfiles">
            <p>
              Die Website wird über GitHub Pages bereitgestellt (GitHub, Inc., 88 Colin P. Kelly Jr. Street, San
              Francisco, CA 94107, USA). Beim Aufruf der Website verarbeitet der Hosting-Anbieter technisch
              erforderliche Daten, insbesondere:
            </p>
            <List items={['IP-Adresse', 'Datum und Uhrzeit des Zugriffs', 'aufgerufene Seite', 'Browsertyp und Betriebssystem']} />
            <p>
              Die Verarbeitung dient der sicheren und stabilen Bereitstellung der Website; darin liegt zugleich das
              berechtigte Interesse. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Übermittlung in die USA erfolgt auf Grundlage des Angemessenheitsbeschlusses
              der EU-Kommission zum EU-U.S. Data Privacy Framework, dem GitHub, Inc. angeschlossen ist.
            </p>
          </Part>

          <Part title="4. Kontaktaufnahme per E-Mail und Anfrage zum Erstgespräch">
            <p>
              Diese Website enthält kein Kontaktformular. Bei einer Kontaktaufnahme per E-Mail, auch mit einer Anfrage
              zum kostenfreien Erstgespräch, werden die Angaben verarbeitet, die Sie in Ihrer E-Mail machen,
              insbesondere Name, E-Mail-Adresse und Inhalt der Nachricht. Die Daten werden ausschließlich verwendet, um
              Ihre Anfrage zu prüfen, mit Ihnen Kontakt aufzunehmen und gegebenenfalls einen Termin für ein
              Erstgespräch abzustimmen. Eine automatische Terminbestätigung erfolgt nicht.
            </p>
            <p>
              <strong className="font-medium text-ink">Empfänger.</strong> Empfängerin der Daten ist ausschließlich die
              Verantwortliche ({person.name}) unter der E-Mail-Adresse {person.email}. Die Übermittlung erfolgt über
              Ihren E-Mail-Anbieter; eingehende E-Mails werden beim E-Mail-Dienst der Verantwortlichen ({site.mailProvider}
              ) gespeichert.
            </p>
            <p>
              Bei einer telefonischen Kontaktaufnahme werden Ihre Telefonnummer und die Inhalte des Gesprächs
              ausschließlich zur Bearbeitung der Anfrage verarbeitet.
            </p>
            <p>
              <strong className="font-medium text-ink">Rechtsgrundlage.</strong> Art. 6 Abs. 1 lit. b DSGVO, soweit
              Ihre Anfrage der Anbahnung eines Vertrags dient (vorvertragliche Maßnahmen auf Ihre Anfrage hin), im
              Übrigen Art. 6 Abs. 1 lit. f DSGVO; das berechtigte Interesse liegt in der Beantwortung Ihrer Anfrage.
            </p>
            <p>
              <strong className="font-medium text-ink">Speicherdauer.</strong> Die Daten werden gelöscht, sobald Ihre
              Anfrage abschließend bearbeitet und die dazu erforderliche Korrespondenz abgeschlossen ist, sofern keine
              gesetzliche Grundlage für eine weitere Speicherung besteht. Kommt ein Vertrag zustande, werden die
              Unterlagen, die gesetzlichen Aufbewahrungspflichten unterliegen, für die Dauer dieser Fristen aufbewahrt
              (insbesondere § 257 HGB und § 147 AO: bis zu zehn Jahre).
            </p>
            <p>
              Die Angabe Ihrer Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne Name, E-Mail-Adresse
              und eine kurze Beschreibung kann eine Anfrage jedoch nicht bearbeitet werden. Bitte übermitteln Sie keine
              vertraulichen Unterlagen oder personenbezogenen Daten Dritter.
            </p>
          </Part>

          <Part title="5. Links zu sozialen Netzwerken">
            <p>
              Diese Website enthält einfache Links zu Profilen in sozialen Netzwerken (z. B. LinkedIn). Es werden keine
              Plugins oder Inhalte dieser Netzwerke eingebunden. Daten werden erst übertragen, wenn Sie einen Link
              anklicken; dann gilt die Datenschutzerklärung des jeweiligen Netzwerks.
            </p>
          </Part>

          <Part title="6. Speicherdauer">
            <p>
              Für Anfragen gelten die Angaben unter Ziffer 4. Server-Logfiles werden vom Hosting-Anbieter nach dessen
              Vorgaben gespeichert.
            </p>
          </Part>

          <Part title="7. Ihre Rechte">
            <p>Sie haben das Recht auf:</p>
            <List
              items={[
                'Auskunft (Art. 15 DSGVO)',
                'Berichtigung (Art. 16 DSGVO)',
                'Löschung (Art. 17 DSGVO)',
                'Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                'Datenübertragbarkeit (Art. 20 DSGVO)',
              ]}
            />
            <p className="font-medium text-ink">
              Widerspruchsrecht: Sie können einer Verarbeitung, die auf Art. 6 Abs. 1 lit. f DSGVO beruht, aus Gründen,
              die sich aus Ihrer besonderen Situation ergeben, jederzeit widersprechen (Art. 21 DSGVO). Eine formlose
              Nachricht an die oben genannte E-Mail-Adresse genügt.
            </p>
            <p>
              Sie können sich außerdem bei einer Datenschutz-Aufsichtsbehörde beschweren (Art. 77 DSGVO), zum Beispiel
              bei der Sächsischen Datenschutz- und Transparenzbeauftragten, Devrientstraße 5, 01067 Dresden.
            </p>
          </Part>

          <Part title="8. Automatisierte Entscheidungen">
            <p>Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) findet nicht statt.</p>
          </Part>

          <Part title="9. Verschlüsselung">
            <p>Die Verbindung zu dieser Website ist per TLS verschlüsselt.</p>
          </Part>

          <p className="text-sm text-ink-muted">Stand: November 2026</p>
        </div>
      </div>
    </>
  )
}

export default Datenschutz
