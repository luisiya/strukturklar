import fs from 'node:fs'
import path from 'node:path'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const CONTENT_DIR = path.resolve('src/content')
const COLLECTIONS = ['projects', 'models', 'articles']
const VIRTUAL_ID = 'virtual:content'

// Reads src/content at build time and exposes only published entries as `virtual:content`.
// Drafts ("published" not true), incomplete entries and "internalNote" never reach the site,
// not even their file names. VITE_SHOW_DRAFTS=true keeps drafts for local review.
const content = (showDrafts: boolean): Plugin => ({
  name: 'content',
  resolveId: (id) => (id === VIRTUAL_ID ? '\0' + VIRTUAL_ID : undefined),
  load(id) {
    if (id !== '\0' + VIRTUAL_ID) return
    const data = Object.fromEntries(
      COLLECTIONS.map((name) => {
        const dir = path.join(CONTENT_DIR, name)
        this.addWatchFile(dir)
        const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith('.json')) : []
        const entries = files.flatMap((file) => {
          const full = path.join(dir, file)
          this.addWatchFile(full)
          const entry = JSON.parse(fs.readFileSync(full, 'utf8'))
          const [slug, lang] = file.replace('.json', '').split('.')
          const complete = !!entry.title && !!(entry.summary || entry.intro)
          if (entry.published === true && !complete) this.warn(`${name}/${file}: title or summary missing, treated as draft`)
          if ((entry.published !== true || !complete) && !showDrafts) return []
          delete entry.internalNote
          return [{ ...entry, slug, lang }]
        })
        return [name, entries]
      }),
    )
    return `export default ${JSON.stringify(data)}`
  },
  configureServer(server) {
    // New or removed content files refresh the dev server
    const refresh = (file: string) => {
      if (!file.startsWith(CONTENT_DIR)) return
      const mod = server.moduleGraph.getModuleById('\0' + VIRTUAL_ID)
      if (mod) server.moduleGraph.invalidateModule(mod)
      server.ws.send({ type: 'full-reload' })
    }
    server.watcher.on('add', refresh)
    server.watcher.on('unlink', refresh)
    server.watcher.on('change', refresh)
  },
})

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '')
  return {
    plugins: [content(env.VITE_SHOW_DRAFTS === 'true'), react()],
    // Served from the root of strukturklar.com (public/CNAME); set BASE_PATH for a sub-path.
    base: env.BASE_PATH || '/',
  }
})
