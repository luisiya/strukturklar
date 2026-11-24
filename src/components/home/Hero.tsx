import { useT } from '../../i18n'
import PageLink from '../ui/PageLink'

// Abstract structure: elements, their connections and one highlighted path.
const StructureGraphic = () => {
  const nodes: [number, number, boolean][] = [
    [40, 70, false], [150, 40, true], [260, 90, false], [370, 50, false],
    [90, 190, true], [210, 210, true], [330, 180, false], [440, 150, false],
    [50, 320, false], [170, 330, false], [290, 310, true], [410, 290, false],
  ]
  const edges: [number, number, boolean?][] = [
    [0, 1], [1, 2], [2, 3], [0, 4], [1, 4, true], [4, 5, true], [2, 5], [5, 6], [3, 7], [6, 7],
    [4, 8], [5, 9], [5, 10, true], [6, 10], [10, 11], [8, 9], [9, 10], [7, 11],
  ]
  return (
    <svg aria-hidden="true" viewBox="0 0 480 370" className="h-auto w-full">
      {edges.map(([a, b, hot], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="currentColor"
          className={hot ? 'text-petrol' : 'text-line-strong'}
          strokeWidth={hot ? 1.75 : 1}
        />
      ))}
      {nodes.map(([x, y, hot], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={hot ? 7 : 5}
          className={hot ? 'fill-petrol' : 'fill-paper stroke-ink-muted'}
          strokeWidth={1.25}
        />
      ))}
    </svg>
  )
}

const Hero = () => {
  const { t, tm } = useT()
  return (
    <section className="border-b border-line">
      <div className="container-page grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-[1.25fr_1fr] lg:py-28">
        <div>
          <p className="label mb-6">{t('home.hero.label')}</p>
          <h1 className="h1">{t('home.hero.claim')}</h1>
          <p className="lead mt-6 max-w-2xl font-medium text-ink">{t('home.hero.subtitle')}</p>
          <div className="mt-6 max-w-2xl space-y-4">
            {tm<string[]>('home.hero.text').map((p) => (
              <p key={p} className="body">
                {p}
              </p>
            ))}
          </div>
          <p className="mt-6 max-w-2xl border-l-2 border-petrol pl-4 text-ink">{t('home.hero.focus')}</p>
          <p className="mt-6 max-w-2xl font-semibold">{t('home.hero.closing')}</p>
          <PageLink page="home" hash="erstgespraech" className="btn-primary mt-10">
            {t('home.hero.cta')}
          </PageLink>
        </div>
        <div className="hidden lg:block">
          <StructureGraphic />
        </div>
      </div>
    </section>
  )
}

export default Hero
