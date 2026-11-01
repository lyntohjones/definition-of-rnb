/* Writes a real HTML file for every app route after `vite build`.
 *
 * GitHub Pages has no SPA fallback, so without this every route except "/"
 * is served by 404.html with a 404 status: Google and link previews see
 * "not found" even though the app redirects and renders it for people.
 * Each route gets a copy of dist/index.html with its own title, description,
 * canonical and social tags, at both `route.html` and `route/index.html` so
 * the host answers 200 with or without a trailing slash.
 *
 * Keep this list in step with the routes in src/App.jsx and the <SEO> props
 * on each page.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'

const SITE = 'https://definitionofrnb.com'
const BRAND = 'The Definition of R&B'
const DIST = 'dist'

const ROUTES = [
  { path: '/blog', title: 'Blog',
    description: 'Features, lists and reviews from The Definition of R&B, pinned to one wall you can scroll along.' },
  { path: '/blog/rnb-artists-to-watch-2026', type: 'article',
    title: '11 R&B Artists You Need to Know in 2026',
    description: "The names defining the genre's next chapter — from a pgLang surprise arrival to cult voices finally breaking through." },
  { path: '/blog/welcome-to-the-new-definition-of-rnb', type: 'article',
    title: 'Welcome to the New Definition of R&B: Streamlined, Mobile-Ready, and Built for Artists',
    description: 'We rebuilt the platform from the ground up — here is everything that changed and what it means for artists and fans.' },
  { path: '/blog/falsetto-renaissance-rnb', type: 'article',
    title: 'The Falsetto Renaissance: Why R&B Singers Are Going Higher',
    description: "From Maxwell to JayDon, the falsetto has always been R&B's most vulnerable instrument. Right now it is everywhere - and that is not an accident." },
  { path: '/blog/afrobeats-rnb-transatlantic-love-story', type: 'article',
    title: 'Afrobeats and R&B: How Two Genres Became One Sound',
    description: "From Wizkid's falsetto to Odeal's baritone - why the line between Afrobeats and R&B has never been thinner." },
  { path: '/blog/best-rnb-albums-2025', type: 'article',
    title: 'The Best R&B Albums of 2025: Our Year-End Picks',
    description: 'From quiet debuts to long-awaited comebacks, 2025 was a year that reminded us why R&B endures.' },
  { path: '/reviews', title: 'Reviews',
    description: 'Honest editorial reviews of new R&B singles and EPs from independent and rising artists.' },
  { path: '/promote', title: 'Promote Your Music',
    description: 'Feature packages for R&B artists: hero placement, editorial write-ups, reviews coverage and social amplification.' },
  { path: '/about', title: 'About Definition of R&B',
    description: 'Definition of R&B is a music platform dedicated to documenting, discovering, and celebrating Rhythm and Blues across generations — from classic soul to modern R&B voices.' },
  { path: '/contact', title: 'Contact – The Definition of R&B',
    description: 'Contact The Definition of R&B for general inquiries, music submissions, copyright concerns, or advertising.' },
  { path: '/privacy', title: 'Privacy Policy – The Definition of R&B',
    description: 'Privacy Policy for The Definition of R&B. Learn how we collect, use, and protect your personal information.' },
  { path: '/terms', title: 'Terms of Service – The Definition of R&B',
    description: 'Terms of Service for The Definition of R&B. Read the rules and guidelines governing use of our music review website.' },
  { path: '/dmca', title: 'DMCA Policy – The Definition of R&B',
    description: 'DMCA takedown policy for The Definition of R&B. Learn how to submit a copyright infringement notice or counter-notice.' },
]

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

/* Swap the content of one existing tag; fail the build if the tag is missing so a template change can't silently ship stale meta */
const setAttr = (html, selector, value) => {
  const re = new RegExp(`(<${selector}\\s+content=")[^"]*(")`)
  if (!re.test(html)) throw new Error(`route-pages: tag not found in index.html: <${selector}>`)
  return html.replace(re, `$1${value}$2`)
}

const template = readFileSync(join(DIST, 'index.html'), 'utf8')

for (const r of ROUTES) {
  const title = esc(`${r.title} | ${BRAND}`)
  const desc = esc(r.description)
  const url = `${SITE}${r.path}`
  let html = template.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`)
  html = html.replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
  html = setAttr(html, 'meta name="description"', desc)
  html = setAttr(html, 'meta property="og:type"\\s*', r.type || 'website')
  html = setAttr(html, 'meta property="og:title"\\s*', title)
  html = setAttr(html, 'meta property="og:description"', desc)
  html = setAttr(html, 'meta property="og:url"\\s*', url)
  html = setAttr(html, 'meta name="twitter:title"\\s*', title)
  html = setAttr(html, 'meta name="twitter:description"', desc)

  for (const file of [`${r.path}.html`, `${r.path}/index.html`]) {
    const out = join(DIST, file)
    mkdirSync(dirname(out), { recursive: true })
    writeFileSync(out, html)
  }
}

console.log(`route-pages: wrote ${ROUTES.length} routes`)
