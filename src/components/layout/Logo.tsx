import type { PageKey } from '../../lib/paths'

export const NAV_ITEMS: PageKey[] = ['home', 'about', 'models', 'projects', 'workshop', 'development', 'contact']

export const Logo = () => (
  <span className="flex items-center gap-2.5 text-[1.05rem] font-semibold tracking-tight text-ink">
    <svg aria-hidden="true" viewBox="0 0 32 32" className="h-7 w-7">
      <rect width="32" height="32" rx="6" className="fill-petrol" />
      <path d="M9 11h14M9 16h8M9 21h11" className="stroke-paper" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
    StrukturKlar
  </span>
)
