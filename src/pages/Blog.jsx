import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import SubmitMusic from '../components/SubmitMusic'
import { ALL_POSTS } from '../data/posts'

const ARTIST_POST = 'rnb-artists-to-watch-2026'

/* Newest first, so the wall reads like a feed from left to right */
const POSTS_BY_DATE = [...ALL_POSTS].sort((a, b) => new Date(b.date) - new Date(a.date))

/* ── Board (unscaled px): one bounded row read left to right, in three sections ── */
const PAD = 96
const TOP = 150            // content starts below the section headings
const HEAD_Y = 64
const BH = 700             // board height; the scale fits this to the viewport
const START_W = 380
const GAP = 170            // space between sections
const POST_W = 340
const POST_STRIDE = 400
const PRINT_W = 230
const PRINT_STRIDE = 270
const POST_SLOTS = 6       // 5 posts + the submit note
const PRINT_SLOTS = 12     // 11 artists + the end card

const START_X = PAD
const POSTS_X = START_X + START_W + GAP
const ARTISTS_X = POSTS_X + POST_STRIDE * POST_SLOTS - (POST_STRIDE - POST_W) + GAP
const BW = ARTISTS_X + PRINT_STRIDE * PRINT_SLOTS - (PRINT_STRIDE - PRINT_W) + PAD

/* x: where the section button scrolls to; at: where the section starts, for highlighting */
const SECTIONS = [
  { id: 'start', label: 'Start', x: 0, at: 0 },
  { id: 'posts', label: 'Posts', x: POSTS_X - 80, at: POSTS_X },
  { id: 'artists', label: 'Artists', x: ARTISTS_X - 80, at: ARTISTS_X },
]

/* Deterministic jitter so the wall looks pinned by hand but never changes between visits */
function rand(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

const clamp = (v, lo, hi) => Math.min(Math.max(v, lo), hi)
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

const STYLES = `
.wall-item-inner { transform: rotate(var(--r)); transition: transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms cubic-bezier(0.22,1,0.36,1); box-shadow: 0 8px 20px rgba(0,0,0,0.35); }
.wall-item-inner.is-flat { box-shadow: none; }
a.wall-item-inner:hover, a.wall-item-inner:focus-visible, button.wall-item-inner:hover, button.wall-item-inner:focus-visible { transform: rotate(0deg); box-shadow: 0 12px 28px rgba(0,0,0,0.45); }
.wall-print img { filter: grayscale(1) contrast(1.08); transition: filter 300ms cubic-bezier(0.22,1,0.36,1); }
.wall-print .duo { background: #5c2a35; mix-blend-mode: color; opacity: 0.85; transition: opacity 300ms cubic-bezier(0.22,1,0.36,1); }
.wall-print:hover img, .wall-print:focus-visible img { filter: none; }
.wall-print:hover .duo, .wall-print:focus-visible .duo { opacity: 0; }
@keyframes wallIn { from { opacity: 0; scale: 0.96; } to { opacity: 1; scale: 1; } }
.wall-in { animation: wallIn 600ms cubic-bezier(0.22,1,0.36,1) both; }
@media (prefers-reduced-motion: reduce) { .wall-in { animation: none; } .wall-item-inner, .wall-print img, .wall-print .duo { transition: none; } }
`
let stylesInjected = false

/* ── Tape strip ── */
const Tape = ({ seed }) => (
  <span
    aria-hidden="true"
    className="absolute left-1/2 -top-3 w-[92px] h-[26px] pointer-events-none"
    style={{ transform: `translateX(-50%) rotate(${(rand(seed) - 0.5) * 8}deg)`, background: 'rgba(255,246,232,0.5)', boxShadow: '0 1px 2px rgba(0,0,0,0.15)' }}
  />
)

/* ── Wall pieces ── */
function Clipping({ post, seed, n, width = POST_W }) {
  return (
    <Link to={`/blog/${post.slug}`} draggable={false} className="wall-item-inner relative block bg-[#e3d1b8] text-[#3d1a22] no-underline p-[22px]" style={{ width }}>
      <Tape seed={seed} />
      <div className="flex items-baseline justify-between gap-3">
        <p className="font-inter text-[12px] text-[#3d1a22]/60 m-0">{post.category} · {post.date}</p>
        {n && <p className="font-oswald font-bold text-[15px] text-[#3d1a22]/40 m-0">{String(n).padStart(2, '0')}</p>}
      </div>
      <p className="font-oswald font-bold uppercase text-[24px] leading-[1.04] m-0 mt-3">{post.title}</p>
      <p className="font-inter text-[14px] leading-[1.5] text-[#3d1a22]/75 m-0 mt-3 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#3d1a22]/15 font-inter text-[13px]">
        <span className="text-[#3d1a22]/60">{post.readTime}</span>
        <span className="font-medium">Read →</span>
      </div>
    </Link>
  )
}

function Print({ artist, seed, width = PRINT_W }) {
  return (
    <Link
      to={`/blog/${ARTIST_POST}`}
      draggable={false}
      className="wall-item-inner wall-print relative block bg-[#efe4d3] p-[10px] pb-0 no-underline"
      style={{ width }}
      aria-label={`${artist.name}, in 11 R&B Artists You Need to Know in 2026`}
    >
      <Tape seed={seed} />
      <div className="relative overflow-hidden" style={{ aspectRatio: '4 / 5' }}>
        <img
          src={artist.photo}
          alt=""
          draggable={false}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: artist.photoFocus || '50% 25%' }}
        />
        <div className="duo absolute inset-0" />
      </div>
      <div className="py-2.5 px-0.5">
        <p className="font-oswald font-bold uppercase text-[17px] leading-none text-[#3d1a22] m-0">{artist.name}</p>
      </div>
    </Link>
  )
}

function Masthead({ onGo, compact = false }) {
  return (
    <div className="wall-item-inner is-flat" style={{ width: compact ? '100%' : START_W, '--r': '0deg' }}>
      <p className="font-oswald font-semibold uppercase text-[15px] text-[#e3d1b8]/70 m-0 tracking-[0.04em]">The Definition of R&amp;B</p>
      <h1 className={`font-oswald font-bold uppercase text-[#e3d1b8] m-0 leading-[0.86] ${compact ? 'text-[96px]' : 'text-[132px]'}`}>Blog</h1>
      <p className="font-inter text-[15px] leading-[1.5] text-[#e3d1b8]/75 m-0 mt-4 max-w-[320px]">
        Features, lists and reviews from the magazine. {ALL_POSTS.length} posts and the 11 artists we're watching this year.
      </p>
      {!compact && (
        <>
          <ol className="list-none m-0 mt-8 p-0 font-inter text-[15px] text-[#e3d1b8]">
            <li className="flex gap-3 py-2.5 border-t border-[#e3d1b8]/15"><span className="text-[#e3d1b8]/50 w-5">1</span>Latest posts, newest first</li>
            <li className="flex gap-3 py-2.5 border-t border-b border-[#e3d1b8]/15"><span className="text-[#e3d1b8]/50 w-5">2</span>11 artists to know in 2026</li>
          </ol>
          <p className="font-inter text-[14px] text-[#e3d1b8]/60 m-0 mt-4">Scroll or drag sideways to move along the wall.</p>
          <button
            type="button"
            onClick={onGo}
            className="mt-6 h-11 px-5 rounded-[2px] bg-[#e3d1b8] text-[#3d1a22] font-inter font-medium text-[14px] border-none cursor-pointer hover:bg-white transition-colors duration-150"
          >
            Start with the latest post →
          </button>
        </>
      )}
    </div>
  )
}

function SectionHead({ title, meta }) {
  return (
    <div className="select-none" style={{ width: 600 }}>
      <h2 className="font-oswald font-bold uppercase text-[34px] leading-none text-[#e3d1b8] m-0">{title}</h2>
      <p className="font-inter text-[14px] text-[#e3d1b8]/55 m-0 mt-2">{meta}</p>
    </div>
  )
}

function Note({ seed, onSubmit, width = POST_W }) {
  return (
    <button
      type="button"
      onClick={onSubmit}
      className="wall-item-inner relative block text-left bg-[#5c2a35] border border-[#e3d1b8]/25 p-[24px] cursor-pointer"
      style={{ width }}
    >
      <Tape seed={seed} />
      <p className="font-oswald font-bold uppercase text-[34px] leading-[0.95] text-[#e3d1b8] m-0">Got a song?</p>
      <p className="font-inter text-[14px] leading-[1.5] text-[#e3d1b8]/75 m-0 mt-3">
        Send it in for Artist of the Week. It's free, and we listen to every submission.
      </p>
      <p className="font-inter text-[14px] font-medium text-[#e3d1b8] m-0 mt-5">Submit your music →</p>
    </button>
  )
}

function EndCard({ onBack }) {
  return (
    <div className="relative bg-[#3d1a22] border border-[#e3d1b8]/20 p-[20px]" style={{ width: PRINT_W }}>
      <p className="font-oswald font-bold uppercase text-[26px] leading-[0.98] text-[#e3d1b8] m-0">End of the wall</p>
      <p className="font-inter text-[14px] leading-[1.5] text-[#e3d1b8]/70 m-0 mt-3">You've seen every post and all 11 artists.</p>
      <Link
        to={`/blog/${ARTIST_POST}`}
        draggable={false}
        className="block mt-5 font-inter text-[14px] font-medium text-[#e3d1b8] no-underline hover:underline"
      >
        Read the full artist list →
      </Link>
      <button
        type="button"
        onClick={onBack}
        className="block mt-3 p-0 bg-transparent border-none cursor-pointer font-inter text-[14px] font-medium text-[#e3d1b8]/70 hover:text-[#e3d1b8]"
      >
        ← Back to start
      </button>
    </div>
  )
}

/* ── Phones: a plain page, top to bottom ── */
function StackedBlog({ artists, onSubmit }) {
  return (
    <main className="px-4 pt-8 pb-16">
      <Masthead compact />
      <section className="mt-12" aria-labelledby="stack-posts">
        <h2 id="stack-posts" className="font-oswald font-bold uppercase text-[28px] leading-none text-[#e3d1b8] m-0">Latest posts</h2>
        <p className="font-inter text-[14px] text-[#e3d1b8]/55 m-0 mt-2">{POSTS_BY_DATE.length} posts · newest first</p>
        <div className="flex flex-col gap-8 mt-8">
          {POSTS_BY_DATE.map((p, i) => (
            <div key={p.slug} style={{ '--r': `${(rand(i + 1) - 0.5) * 2}deg` }}>
              <Clipping post={p} seed={i + 1} n={i + 1} width="100%" />
            </div>
          ))}
          <div style={{ '--r': '0.6deg' }}><Note seed={9} onSubmit={onSubmit} width="100%" /></div>
        </div>
      </section>
      {artists.length > 0 && (
        <section className="mt-14" aria-labelledby="stack-artists">
          <h2 id="stack-artists" className="font-oswald font-bold uppercase text-[28px] leading-none text-[#e3d1b8] m-0">11 artists to know in 2026</h2>
          <p className="font-inter text-[14px] text-[#e3d1b8]/55 m-0 mt-2">From our January feature</p>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 mt-8">
            {artists.map((a, i) => (
              <div key={a.name} style={{ '--r': `${(rand(i + 30) - 0.5) * 3}deg` }}>
                <Print artist={a} seed={i + 30} width="100%" />
              </div>
            ))}
          </div>
          <Link to={`/blog/${ARTIST_POST}`} className="inline-block mt-8 font-inter text-[15px] font-medium text-[#e3d1b8] no-underline">
            Read the full artist list →
          </Link>
        </section>
      )}
    </main>
  )
}

export default function Blog() {
  const [artists, setArtists] = useState([])
  const [showSubmit, setShowSubmit] = useState(false)
  const [narrow, setNarrow] = useState(() => typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches)
  const [section, setSection] = useState('start')

  const stageRef = useRef(null)
  const worldRef = useRef(null)
  const boardRef = useRef(null)
  const itemRefs = useRef([])
  const trackRef = useRef(null)
  const windowRef = useRef(null)
  const api = useRef({})   // goTo / panTo / panBy, filled in by the effect

  useEffect(() => {
    if (!stylesInjected) {
      const tag = document.createElement('style')
      tag.textContent = STYLES
      document.head.appendChild(tag)
      stylesInjected = true
    }
    fetch('/data/artists.json')
      .then((r) => r.json())
      .then((d) => setArtists(Array.isArray(d) ? d : []))
      .catch(() => {})
    const mq = window.matchMedia('(max-width: 767px)')
    const onChange = () => setNarrow(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  /* Board layout: fixed slots, small hand-pinned jitter */
  const items = useMemo(() => {
    const out = []
    const pin = (key, kind, x, y, w, extra = {}) => {
      const s = out.length + 1
      const loose = kind !== 'head' && kind !== 'masthead' && kind !== 'end'
      out.push({
        key, kind, w, seed: s, ...extra,
        x: x + (loose ? (rand(s) - 0.5) * 24 : 0),
        y: y + (loose ? (rand(s + 50) - 0.5) * 24 : 0),
        r: loose ? (rand(s + 100) - 0.5) * 5 : 0,
        k: loose ? [0.16, 0.22, 0.3][Math.floor(rand(s + 150) * 3)] : 0.22,
      })
    }
    pin('masthead', 'masthead', START_X, TOP - 40, START_W)
    pin('head:posts', 'head', POSTS_X, HEAD_Y, 600, { title: 'Latest posts', meta: `${POSTS_BY_DATE.length} posts · newest first` })
    POSTS_BY_DATE.forEach((p, i) => {
      pin(`post:${p.slug}`, 'post', POSTS_X + i * POST_STRIDE, TOP + (i % 2) * 28, POST_W, { data: p, n: i + 1 })
    })
    const noteSlot = POSTS_BY_DATE.length
    pin('note', 'note', POSTS_X + noteSlot * POST_STRIDE, TOP + 40, POST_W)
    if (artists.length) {
      pin('head:artists', 'head', ARTISTS_X, HEAD_Y, 600, { title: '11 artists to know in 2026', meta: 'From our January feature · tap a photo to read' })
      artists.slice(0, 11).forEach((a, i) => {
        pin(`artist:${a.name}`, 'artist', ARTISTS_X + i * PRINT_STRIDE, TOP + 20 + (i % 2) * 44, PRINT_W, { data: a })
      })
      pin('end', 'end', ARTISTS_X + 11 * PRINT_STRIDE, TOP + 40, PRINT_W)
    }
    return out
  }, [artists])

  /* Pan engine: offsets live in refs, positions written straight to the DOM each frame */
  useEffect(() => {
    if (narrow) return
    const stage = stageRef.current
    const world = worldRef.current
    if (!stage || !world) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const st = { ox: 0, oy: 0, vx: 0, S: 1, VW: 0, VH: 0, drag: null, tween: null, dirty: true, section: 'start' }
    let raf = 0

    /* Pan limits: the board never leaves the screen, and centres on an axis where it fits */
    const minX = () => Math.min(st.VW - BW, 0)
    const fitY = () => (st.VH >= BH ? (st.VH - BH) / 2 : null)
    const clampX = (x) => clamp(x, minX(), 0)
    const clampY = (y) => (fitY() ?? clamp(y, st.VH - BH, 0))

    const layout = () => {
      const vw = stage.clientWidth
      const vh = stage.clientHeight
      /* fit the board's height to the screen so only sideways movement is needed */
      st.S = clamp(vh / BH, 0.55, 1.05)
      st.VW = vw / st.S
      st.VH = vh / st.S
      world.style.zoom = st.S
      world.style.width = `${st.VW}px`
      world.style.height = `${st.VH}px`
      st.ox = clampX(st.ox)
      st.oy = clampY(st.oy)
      st.dirty = true
    }

    /* Each item trails the shared offset at its own speed */
    const trail = items.map(() => ({ x: 0, y: 0 }))
    const snapTrails = () => trail.forEach((t) => { t.x = st.ox; t.y = st.oy })

    const place = (it, i) => {
      const el = itemRefs.current[i]
      if (!el) return true
      const t = trail[i]
      const k = reduced ? 1 : it.k
      t.x += (st.ox - t.x) * k
      t.y += (st.oy - t.y) * k
      const settled = Math.abs(st.ox - t.x) < 0.1 && Math.abs(st.oy - t.y) < 0.1
      if (settled) { t.x = st.ox; t.y = st.oy }
      el.style.transform = `translate3d(${it.x + t.x}px, ${it.y + t.y}px, 0)`
      return settled
    }

    /* Bottom bar: position window on the track, and which section is in view */
    const syncBar = () => {
      const track = trackRef.current
      const win = windowRef.current
      if (track && win) {
        const tw = track.clientWidth
        const vis = Math.min(st.VW / BW, 1)
        win.style.width = `${vis * tw}px`
        win.style.transform = `translateX(${(-st.ox / BW) * tw}px)`
      }
      /* the section reaching into the left third of the screen is the one you're in */
      const probe = -st.ox + st.VW * 0.3
      const atEnd = st.ox <= minX() + 1
      const now = atEnd ? SECTIONS[SECTIONS.length - 1].id : [...SECTIONS].reverse().find((s) => probe >= s.at)?.id || 'start'
      if (now !== st.section) { st.section = now; setSection(now) }
    }

    const frame = (now) => {
      if (st.tween) {
        const t = Math.min((now - st.tween.t0) / st.tween.dur, 1)
        const e = easeInOut(t)
        st.ox = st.tween.fx + (st.tween.tx - st.tween.fx) * e
        st.oy = st.tween.fy + (st.tween.ty - st.tween.fy) * e
        if (t === 1) st.tween = null
        st.dirty = true
      } else if (!st.drag && Math.abs(st.vx) > 0.05) {
        st.ox = clampX(st.ox + st.vx)
        st.vx *= 0.92
        st.dirty = true
      }
      if (st.dirty) {
        if (boardRef.current) boardRef.current.style.transform = `translate3d(${st.ox}px, ${st.oy}px, 0)`
        let all = true
        items.forEach((it, i) => { if (!place(it, i)) all = false })
        st.dirty = !all
        syncBar()
      }
      raf = requestAnimationFrame(frame)
    }

    const startTween = (tx, ty, dur) => {
      st.vx = 0
      tx = clampX(tx)
      ty = clampY(ty)
      if (reduced) { st.ox = tx; st.oy = ty; st.dirty = true; return }
      st.tween = { fx: st.ox, fy: st.oy, tx, ty, t0: performance.now(), dur }
    }

    api.current.panBy = (dx) => startTween(st.ox + dx, st.oy, 420)
    api.current.goTo = (x) => startTween(-x, st.oy, 900)
    api.current.panTo = (i) => {
      const it = items[i]
      if (!it) return
      const sx = it.x + st.ox
      if (sx >= 40 && sx + it.w <= st.VW - 40) return
      startTween(st.VW / 2 - (it.x + it.w / 2), st.oy, 600)
    }
    api.current.seekTrack = (frac) => startTween(-(frac * BW - st.VW / 2), st.oy, 500)

    /* Drag with inertia; listeners on window so link clicks still land on the link */
    const onDown = (e) => {
      /* a drag released off-screen fires no click, so never let its suppress flag outlive it */
      st.suppressClick = false
      if (e.button !== 0 || e.target.closest('[data-wall-ui]')) return
      st.tween = null
      st.drag = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false }
      st.vx = 0
      stage.style.cursor = 'grabbing'
    }
    const onMove = (e) => {
      const d = st.drag
      if (!d) return
      const dx = (e.clientX - d.x) / st.S
      const dy = (e.clientY - d.y) / st.S
      d.x = e.clientX
      d.y = e.clientY
      if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > 6) d.moved = true
      st.ox = clampX(st.ox + dx)
      st.oy = clampY(st.oy + dy)
      st.vx = reduced ? 0 : dx
      st.dirty = true
    }
    const onUp = () => {
      if (!st.drag) return
      st.suppressClick = st.drag.moved
      st.drag = null
      stage.style.cursor = ''
    }
    const onClickCapture = (e) => {
      if (st.suppressClick) { e.preventDefault(); e.stopPropagation(); st.suppressClick = false }
    }
    /* Any scroll direction moves along the wall */
    const onWheel = (e) => {
      if (e.target.closest('[data-wall-ui]')) return
      e.preventDefault()
      st.tween = null
      const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      st.ox = clampX(st.ox - d / st.S)
      st.vx = 0
      st.dirty = true
    }
    const onKey = (e) => {
      if (e.target.closest?.('input, textarea, select')) return
      if (e.key === 'Home') { e.preventDefault(); api.current.goTo(0); return }
      if (e.key === 'End') { e.preventDefault(); api.current.goTo(BW); return }
      const step = 320
      const map = { ArrowLeft: step, ArrowRight: -step }
      if (map[e.key] === undefined) return
      e.preventDefault()
      api.current.panBy(map[e.key])
    }
    const preventDrag = (e) => e.preventDefault()

    const ro = new ResizeObserver(layout)
    ro.observe(stage)
    layout()
    st.ox = 0
    st.oy = clampY(0)
    snapTrails()
    raf = requestAnimationFrame(frame)

    stage.addEventListener('pointerdown', onDown)
    stage.addEventListener('click', onClickCapture, true)
    stage.addEventListener('wheel', onWheel, { passive: false })
    stage.addEventListener('dragstart', preventDrag)
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerup', onUp)
    window.addEventListener('pointercancel', onUp)
    window.addEventListener('keydown', onKey)

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      stage.removeEventListener('pointerdown', onDown)
      stage.removeEventListener('click', onClickCapture, true)
      stage.removeEventListener('wheel', onWheel)
      stage.removeEventListener('dragstart', preventDrag)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointercancel', onUp)
      window.removeEventListener('keydown', onKey)
    }
  }, [items, narrow])

  /* Keyboard focus pulls an off-screen item into view */
  const onItemFocus = (i) => (e) => {
    if (e.target.matches(':focus-visible')) api.current.panTo?.(i)
  }

  const goSection = (id) => api.current.goTo?.(SECTIONS.find((s) => s.id === id).x)
  const onTrack = (e) => {
    const r = trackRef.current.getBoundingClientRect()
    api.current.seekTrack?.(clamp((e.clientX - r.left) / r.width, 0, 1))
  }

  const seo = (
    <SEO
      title="Blog"
      description="Features, lists and reviews from The Definition of R&B, pinned to one wall you can scroll along."
      canonical="https://definitionofrnb.com/blog"
    />
  )

  if (narrow) {
    return (
      <div className="min-h-screen bg-[#2a0f16]">
        {seo}
        <Nav onSubmitClick={() => setShowSubmit(true)} />
        <StackedBlog artists={artists} onSubmit={() => setShowSubmit(true)} />
        {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
      </div>
    )
  }

  return (
    <div className="h-[100svh] flex flex-col bg-[#2a0f16] overflow-hidden">
      {seo}
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      <main
        ref={stageRef}
        className="relative flex-1 overflow-hidden cursor-grab select-none"
        style={{ touchAction: 'none', overscrollBehavior: 'none' }}
        aria-label="Blog wall. Scroll, drag or use the arrow keys to move along it."
      >
        <div ref={worldRef} className="absolute left-0 top-0">
          {/* The board itself, so its two ends are visible */}
          <div
            ref={boardRef}
            aria-hidden="true"
            className="absolute left-0 top-0 bg-[#36141d] border border-[#e3d1b8]/10"
            style={{ width: BW, height: BH }}
          />
          {items.map((it, i) => (
            <div
              key={it.key}
              ref={(el) => { itemRefs.current[i] = el }}
              className="absolute left-0 top-0 will-change-transform"
              onFocus={onItemFocus(i)}
            >
              <div className="wall-in" style={{ animationDelay: `${Math.min(i, 12) * 35}ms`, '--r': `${it.r}deg` }}>
                {it.kind === 'post'     && <Clipping post={it.data} seed={it.seed} n={it.n} />}
                {it.kind === 'artist'   && <Print artist={it.data} seed={it.seed} />}
                {it.kind === 'masthead' && <Masthead onGo={() => goSection('posts')} />}
                {it.kind === 'head'     && <SectionHead title={it.title} meta={it.meta} />}
                {it.kind === 'note'     && <Note seed={it.seed} onSubmit={() => setShowSubmit(true)} />}
                {it.kind === 'end'      && <EndCard onBack={() => goSection('start')} />}
              </div>
            </div>
          ))}
        </div>

        {/* Where you are: sections plus a position track */}
        <nav
          data-wall-ui
          aria-label="Wall sections"
          className="absolute left-1/2 bottom-5 -translate-x-1/2 z-10 flex items-center gap-4 bg-[#3d1a22] border border-[#e3d1b8]/15 p-1.5 cursor-auto"
        >
          <ol className="list-none m-0 p-0 flex">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  type="button"
                  onClick={() => goSection(s.id)}
                  aria-current={section === s.id ? 'true' : undefined}
                  className={`h-9 px-4 rounded-[2px] border-none cursor-pointer font-inter text-[14px] transition-colors duration-150
                    ${section === s.id ? 'bg-[#e3d1b8] text-[#3d1a22] font-medium' : 'bg-transparent text-[#e3d1b8]/75 hover:text-[#e3d1b8]'}`}
                >
                  {s.label}
                  {s.id === 'posts' && <span className="opacity-60"> {POSTS_BY_DATE.length}</span>}
                  {s.id === 'artists' && <span className="opacity-60"> 11</span>}
                </button>
              </li>
            ))}
          </ol>
          <div
            ref={trackRef}
            onClick={onTrack}
            role="presentation"
            className="relative w-[180px] h-2 mr-3 bg-[#e3d1b8]/15 cursor-pointer"
          >
            {SECTIONS.slice(1).map((s) => (
              <span key={s.id} aria-hidden="true" className="absolute top-0 bottom-0 w-px bg-[#e3d1b8]/40" style={{ left: `${(s.x / BW) * 100}%` }} />
            ))}
            <span ref={windowRef} aria-hidden="true" className="absolute left-0 top-0 bottom-0 bg-[#e3d1b8]/70" />
          </div>
        </nav>
      </main>

      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
