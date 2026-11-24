/// <reference types="vite/client" />

declare module 'virtual:content' {
  const content: { projects: unknown[]; models: unknown[]; articles: unknown[] }
  export default content
}
