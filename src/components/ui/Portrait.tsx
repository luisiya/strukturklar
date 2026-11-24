const src = (w: number) => `${import.meta.env.BASE_URL}images/anastasiia-gurina-kontakt-${w}.jpg`

const Portrait = ({ alt, className = '' }: { alt: string; className?: string }) => (
  <img
    src={src(480)}
    srcSet={`${src(480)} 480w, ${src(636)} 636w`}
    sizes="(min-width: 1024px) 360px, 80vw"
    alt={alt}
    width={480}
    height={600}
    loading="lazy"
    decoding="async"
    className={`aspect-[4/5] w-full rounded-lg object-cover ${className}`}
  />
)

export default Portrait
