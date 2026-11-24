// Writes a static HTML file for every route, plus 404.html, sitemap.xml and robots.txt.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle in dist-ssr).
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const { render, routes, siteUrl } = await import(pathToFileURL(path.join(root, 'dist-ssr/entry-server.js')).href)

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8')

const page = (lang, { html, head }) =>
  template
    .replace('<html lang="de">', `<html lang="${lang}">`)
    .replace(/<title>.*<\/title>/, `<title>${head.title}</title>`)
    .replace('<!--app-head-->', head.tags)
    .replace('<!--app-html-->', html)

const write = async (route, content) => {
  const file = path.join(dist, route, route.endsWith('.html') ? '' : 'index.html')
  await fs.mkdir(path.dirname(file), { recursive: true })
  await fs.writeFile(file, content)
}

const redirect = (target, canonicalPath) => `<!doctype html>
<html lang="de">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="refresh" content="0; url=${target}" />
    <link rel="canonical" href="${siteUrl}${canonicalPath}" />
    <title>StrukturKlar</title>
  </head>
  <body><a href="${target}">StrukturKlar</a></body>
</html>
`

const all = routes()
for (const route of all) {
  await write(route.path, page(route.lang, render(route.path)))
}

await write('404.html', page('de', render('/de/__not-found__/')))

// Root and old URLs without language prefix
const base = template.match(/src="([^"]*)assets\//)?.[1] ?? '/'
for (const [from, to] of [
  ['/', '/de/'],
  ['/impressum/', '/de/impressum/'],
  ['/datenschutz/', '/de/datenschutz/'],
]) {
  await write(from, redirect(base.replace(/\/$/, '') + to, to))
}

const indexed = all.filter((r) => r.indexed)
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexed.map((r) => `  <url><loc>${siteUrl}${r.path}</loc></url>`).join('\n')}
</urlset>
`
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap)
const preview = process.env.VITE_NOINDEX === 'true'
await fs.writeFile(
  path.join(dist, 'robots.txt'),
  preview
    ? 'User-agent: *\nDisallow: /\n'
    : `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
)
// A preview must not claim the custom domain or ship the CMS
if (preview) {
  await fs.rm(path.join(dist, 'CNAME'), { force: true })
  await fs.rm(path.join(dist, 'admin'), { recursive: true, force: true })
}

// Fail the build on internal links that point to pages which do not exist
const broken = []
const exists = async (file) => !!(await fs.stat(file).catch(() => null))
for (const route of all) {
  const html = await fs.readFile(path.join(dist, route.path, 'index.html'), 'utf8')
  for (const [, href] of html.matchAll(/href="([^"#?]+)/g)) {
    if (!href.startsWith(base)) continue
    const rel = href.slice(base.length)
    const target = path.join(dist, rel, rel === '' || rel.endsWith('/') ? 'index.html' : '')
    if (!(await exists(target))) broken.push(`${route.path} -> ${href}`)
  }
}
if (broken.length) {
  console.error(`Broken internal links:\n${[...new Set(broken)].join('\n')}`)
  process.exit(1)
}

console.log(`Prerendered ${all.length} pages, ${indexed.length} in sitemap, all internal links resolve.`)
