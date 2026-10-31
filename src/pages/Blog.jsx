import React, { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../components/Nav'
import SEO from '../components/SEO'
import SubmitMusic from '../components/SubmitMusic'
import { ALL_POSTS } from '../data/posts'

/* ── World tile (unscaled px). Each item is drawn once and wraps on its own. ── */
const W = 2400
const H = 1400
const COLS = 6
const ROWS = 3
const CELL_W = W / COLS
const CELL_H = H / ROWS
const MAX_W = 380   // widest item: must stay <= W - viewport width
const MAX_H = 480   // tallest item

const ARTIST_POST = 'rnb-artists-to-watch-2026'

/* Reading order across the wall: posts, prints, the masthead and a note, mixed */
const ORDER = [
  'masthead', 'post:0', 'artist:Imani Imani', 'post:1', 'artist:Aqyila', 'artist:JayDon',
  'artist:Gabriel Jacoby', 'post:2', 'note', 'artist:Pimmie', 'post:3', 'artist:Ebony Riley',
  'post:4', 'artist:Odeal', 'artist:Amindi', 'artist:Fana Hues', 'artist:Leven Kali', 'artist:EJ Jones',
]

/* Deterministic jitter so the wall looks pinned by hand but never changes between visits */
function rand(seed) {
  const x = Math.sin(seed * 9301 + 49297) * 233280
  return x - Math.floor(x)
}

const mod = (n, m) => ((n % m) + m) % m
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

const STYLES = `
.wall-item-inner { transform: rotate(var(--r)); transition: transform 300ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms cubic-bezier(0.22,1,0.36,1); box-shadow: 0 10px 24px rgba(0,0,0,0.4); }
.wall-item-inner.is-flat { box-shadow: none; }
a.wall-item-inner:hover, a.wall-item-inner:focus-visible { transform: rotate(0deg); box-shadow: 0 16px 32px rgba(0,0,0,0.5); }
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
function Clipping({ post, seed }) {
  return (
    <Link to={`/blog/${post.slug}`} draggable={false} className="wall-item-inner relative block bg-[#e3d1b8] text-[#3d1a22] no-underline p-[22px]" style={{ width: 340 }}>
      <Tape seed={seed} />
      <p className="font-inter text-[12px] text-[#3d1a22]/60 m-0">{post.category} · {post.date}</p>
      <p className="font-oswald font-bold uppercase text-[27px] leading-[1.02] m-0 mt-3">{post.title}</p>
      <p className="font-inter text-[14px] leading-[1.5] text-[#3d1a22]/75 m-0 mt-3 line-clamp-3">{post.excerpt}</p>
      <div className="flex items-center justify-between mt-5 pt-3 border-t border-[#3d1a22]/15 font-inter text-[13px]">
        <span className="text-[#3d1a22]/60">{post.readTime}</span>
        <span className="font-medium">Read →</span>
      </div>
    </Link>
  )
}

function Print({ artist, seed }) {
  return (
    <Link
      to={`/blog/${ARTIST_POST}`}
      draggable={false}
      className="wall-item-inner wall-print relative block bg-[#efe4d3] p-[10px] pb-0 no-underline"
      style={{ width: 230 }}
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
        <p className="font-inter text-[11px] text-[#3d1a22]/60 m-0 mt-1">In: 11 artists to know in 2026</p>
      </div>
    </Link>
  )
}

function Masthead() {
  return (
    <div className="wall-item-inner is-flat select-none" style={{ width: 360, '--r': '0deg' }}>
      <p className="font-oswald font-semibold uppercase text-[15px] text-[#e3d1b8]/70 m-0 tracking-[0.04em]">The Definition of R&amp;B</p>
      <h1 className="font-oswald font-bold uppercase text-[#e3d1b8] m-0 text-[132px] leading-[0.86]">Blog</h1>
      <p className="font-inter text-[15px] leading-[1.5] text-[#e3d1b8]/70 m-0 mt-4 max-w-[300px]">
        Features, lists and reviews, pinned up as we write them. Drag the wall to find your way around.
      </p>
    </div>
  )
}

function Note({ seed, onSubmit }) {
  return (
    <button
      type="button"
      onClick={onSubmit}
      className="wall-item-inner relative block text-left bg-[#5c2a35] border border-[#e3d1b8]/25 p-[24px] cursor-pointer"
      style={{ width: 280 }}
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

export default function Blog() {
  const [artists, setArtists] = useState([])
  const [showSubmit, setShowSubmit] = useState(false)
  const [indexOpen, setIndexOpen] = useState(false)
  const [moved, setMoved] = useState(false)
  const [listCollapsed, setListCollapsed] = useState(false)

  const stageRef = useRef(null)
  const worldRef = useRef(null)
  const itemRefs = useRef([])
  const api = useRef({})   // panTo / panBy, filled in by the effect

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
  }, [])

  /* Build the wall layout */
  const items = useMemo(() => {
    const byName = Object.fromEntries(artists.map((a) => [a.name, a]))
    const out = []
    ORDER.forEach((key, i) => {
      const col = i % COLS
      const row = Math.floor(i / COLS)
      const s = i + 1
      let kind, data, w, h
      if (key === 'masthead') { kind = 'masthead'; w = 360; h = 330 }
      else if (key === 'note') { kind = 'note'; w = 280; h = 250 }
      else if (key.startsWith('post:')) { kind = 'post'; data = ALL_POSTS[+key.slice(5)]; w = 340; h = 400 }
      else { kind = 'artist'; data = byName[key.slice(7)]; w = 230; h = 345 }
      if ((kind === 'post' || kind === 'artist') && !data) return
      const stagger = col % 2 ? CELL_H * 0.16 : 0
      out.push({
        key, kind, data, w, h, seed: s,
        x: col * CELL_W + (CELL_W - w) / 2 + (rand(s) - 0.5) * 70,
        y: row * CELL_H + (CELL_H - h) / 2 + stagger - CELL_H * 0.08 + (rand(s + 50) - 0.5) * 60,
        r: kind === 'masthead' ? 0 : (rand(s + 100) - 0.5) * 8,
        /* follow speed: nearer items catch up faster, so panning feels layered but the layout never drifts */
        k: kind === 'masthead' ? 0.14 : [0.14, 0.2, 0.28][Math.floor(rand(s + 150) * 3)],
      })
    })
    return out
  }, [artists])

  /* Pan engine: offsets live in refs, positions written straight to the DOM each frame */
  useEffect(() => {
    const stage = stageRef.current
    const world = worldRef.current
    if (!stage || !world) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const st = { ox: 0, oy: 0, vx: 0, vy: 0, S: 1, VW: 0, VH: 0, drag: null, tween: null, dirty: true }
    let raf = 0

    const layout = () => {
      const vw = stage.clientWidth
      const vh = stage.clientHeight
      /* scale so one tile always covers the viewport plus the largest item */
      st.S = Math.max(Math.min(Math.max(vw / 1440, 0.6), 1.3), (vh + 40) / (H - MAX_H), (vw + 40) / (W - MAX_W))
      st.VW = vw / st.S
      st.VH = vh / st.S
      world.style.zoom = st.S
      world.style.width = `${st.VW}px`
      world.style.height = `${st.VH}px`
      st.dirty = true
    }

    /* Each item trails the shared offset at its own speed */
    const trail = items.map(() => ({ x: st.ox, y: st.oy }))
    const snapTrails = () => trail.forEach((t) => { t.x = st.ox; t.y = st.oy })

    const place = (it, i) => {
      const el = itemRefs.current[i]
      if (!el) return false
      const t = trail[i]
      const k = reduced ? 1 : it.k
      t.x += (st.ox - t.x) * k
      t.y += (st.oy - t.y) * k
      const settled = Math.abs(st.ox - t.x) < 0.1 && Math.abs(st.oy - t.y) < 0.1
      if (settled) { t.x = st.ox; t.y = st.oy }
      const sx = mod(it.x + t.x + MAX_W, W) - MAX_W
      const sy = mod(it.y + t.y + MAX_H, H) - MAX_H
      el.style.transform = `translate3d(${sx}px, ${sy}px, 0)`
      return settled
    }

    const frame = (now) => {
      if (st.tween) {
        const t = Math.min((now - st.tween.t0) / st.tween.dur, 1)
        const e = easeInOut(t)
        st.ox = st.tween.fx + (st.tween.tx - st.tween.fx) * e
        st.oy = st.tween.fy + (st.tween.ty - st.tween.fy) * e
        if (t === 1) { st.tween.done?.(); st.tween = null }
        st.dirty = true
      } else if (!st.drag && (Math.abs(st.vx) > 0.05 || Math.abs(st.vy) > 0.05)) {
        st.ox += st.vx
        st.oy += st.vy
        st.vx *= 0.92
        st.vy *= 0.92
        st.dirty = true
      }
      if (st.dirty) {
        let all = true
        items.forEach((it, i) => { if (!place(it, i)) all = false })
        st.dirty = !all
      }
      raf = requestAnimationFrame(frame)
    }

    const startTween = (tx, ty, dur, done) => {
      st.vx = st.vy = 0
      if (reduced) { st.ox = tx; st.oy = ty; st.dirty = true; done?.(); return }
      st.tween = { fx: st.ox, fy: st.oy, tx, ty, t0: performance.now(), dur, done }
    }

    api.current.panBy = (dx, dy) => startTween(st.ox + dx, st.oy + dy, 420)
    api.current.panTo = (i, done) => {
      const it = items[i]
      if (!it) return
      const sx = mod(it.x + st.ox + MAX_W, W) - MAX_W
      const sy = mod(it.y + st.oy + MAX_H, H) - MAX_H
      /* shortest way round the wrap */
      let dx = st.VW / 2 - (sx + it.w / 2)
      let dy = st.VH / 2 - (sy + it.h / 2)
      dx = mod(dx + W / 2, W) - W / 2
      dy = mod(dy + H / 2, H) - H / 2
      startTween(st.ox + dx, st.oy + dy, 900, done)
    }

    /* Drag with inertia; listeners on window so link clicks still land on the link */
    const onDown = (e) => {
      /* a drag released off-screen fires no click, so never let its suppress flag outlive it */
      st.suppressClick = false
      if (e.button !== 0 || e.target.closest('[data-wall-ui]')) return
      st.tween = null
      st.drag = { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false }
      st.vx = st.vy = 0
      stage.style.cursor = 'grabbing'
    }
    const onMove = (e) => {
      const d = st.drag
      if (!d) return
      const dx = (e.clientX - d.x) / st.S
      const dy = (e.clientY - d.y) / st.S
      d.x = e.clientX
      d.y = e.clientY
      if (!d.moved && Math.hypot(e.clientX - d.sx, e.clientY - d.sy) > 6) { d.moved = true; setMoved(true) }
      st.ox += dx
      st.oy += dy
      st.vx = reduced ? 0 : dx
      st.vy = reduced ? 0 : dy
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
    const onWheel = (e) => {
      e.preventDefault()
      st.tween = null
      st.ox -= e.deltaX / st.S
      st.oy -= e.deltaY / st.S
      st.vx = st.vy = 0
      st.dirty = true
      setMoved(true)
    }
    const onKey = (e) => {
      if (e.target.closest?.('input, textarea, select')) return
      const step = 220
      const map = { ArrowLeft: [step, 0], ArrowRight: [-step, 0], ArrowUp: [0, step], ArrowDown: [0, -step] }
      if (!map[e.key]) return
      e.preventDefault()
      api.current.panBy(...map[e.key])
      setMoved(true)
    }
    const preventDrag = (e) => e.preventDefault()

    const ro = new ResizeObserver(layout)
    ro.observe(stage)
    layout()

    /* Open with the masthead fully in frame, 40px in from the top-left */
    const mast = items.find((it) => it.kind === 'masthead')
    if (mast) { st.ox = 40 - mast.x; st.oy = 32 - mast.y }
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
  }, [items])

  /* Keyboard focus pulls the item to the centre */
  const onItemFocus = (i) => (e) => {
    if (e.target.matches(':focus-visible')) api.current.panTo?.(i)
  }

  const postIndex = (slug) => items.findIndex((it) => it.kind === 'post' && it.data.slug === slug)

  return (
    <div className="h-[100svh] flex flex-col bg-[#2a0f16] overflow-hidden">
      <SEO
        title="Blog"
        description="Features, lists and reviews from The Definition of R&B, pinned to one endless wall you can drag around."
        canonical="https://definitionofrnb.com/blog"
      />
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      <main
        ref={stageRef}
        className="relative flex-1 overflow-hidden cursor-grab select-none"
        style={{ touchAction: 'none', overscrollBehavior: 'none' }}
        aria-label="Blog wall. Drag, scroll or use the arrow keys to move around."
      >
        <div ref={worldRef} className="absolute left-0 top-0">
          {items.map((it, i) => (
            <div
              key={it.key}
              ref={(el) => { itemRefs.current[i] = el }}
              className="absolute left-0 top-0 will-change-transform"
              onFocus={onItemFocus(i)}
            >
              <div className="wall-in" style={{ animationDelay: `${i * 40}ms`, '--r': `${it.r}deg` }}>
                {it.kind === 'post'     && <Clipping post={it.data} seed={it.seed} />}
                {it.kind === 'artist'   && <Print artist={it.data} seed={it.seed} />}
                {it.kind === 'masthead' && <Masthead />}
                {it.kind === 'note'     && <Note seed={it.seed} onSubmit={() => setShowSubmit(true)} />}
              </div>
            </div>
          ))}
        </div>

        {/* Light falloff + vignette */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 42% 38%, rgba(227,209,184,0.07) 0%, rgba(227,209,184,0) 60%), radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.5) 100%)' }} />

        {/* Hint */}
        <p
          aria-hidden="true"
          className="absolute left-4 bottom-4 m-0 px-3 py-2 rounded-[2px] bg-[#2a0f16]/90 font-inter text-[13px] text-[#e3d1b8]/80 pointer-events-none transition-opacity duration-500"
          style={{ opacity: moved ? 0 : 1 }}
        >
          Drag to explore<span className="hidden md:inline"> · scroll or use the arrow keys</span>
        </p>

        {/* Index of posts */}
        <button
          type="button"
          data-wall-ui
          onClick={() => setIndexOpen((o) => !o)}
          aria-expanded={indexOpen}
          aria-controls="wall-index"
          className="md:hidden absolute right-4 bottom-4 z-20 h-11 px-4 rounded-[2px] bg-[#e3d1b8] text-[#3d1a22] font-inter font-medium text-[14px] border-none"
        >
          {indexOpen ? 'Close' : 'All posts'}
        </button>
        <nav
          id="wall-index"
          data-wall-ui
          aria-label="All posts"
          className={`absolute z-10 bg-[#3d1a22] border border-[#e3d1b8]/15 cursor-auto
            md:block md:left-auto md:right-6 md:top-6 md:w-[320px] md:bottom-auto
            left-3 right-3 bottom-[68px] max-h-[60%] overflow-y-auto
            ${indexOpen ? 'block' : 'hidden'}`}
        >
          <button
            type="button"
            onClick={() => setListCollapsed((c) => !c)}
            aria-expanded={!listCollapsed}
            className="w-full flex items-center justify-between bg-transparent border-none cursor-pointer font-inter text-[14px] font-medium text-[#e3d1b8] px-4 pt-4 pb-3 text-left"
          >
            <span>All posts <span className="text-[#e3d1b8]/50 font-normal">· {ALL_POSTS.length}</span></span>
            <span className="hidden md:inline text-[13px] font-normal text-[#e3d1b8]/60">{listCollapsed ? 'Show' : 'Hide'}</span>
          </button>
          <ol className={`list-none m-0 p-0 ${listCollapsed ? 'md:hidden' : ''}`}>
            {ALL_POSTS.map((p) => (
              <li key={p.slug} className="flex items-stretch border-t border-[#e3d1b8]/10">
                <button
                  type="button"
                  onClick={() => { setIndexOpen(false); setMoved(true); api.current.panTo?.(postIndex(p.slug)) }}
                  className="flex-1 text-left bg-transparent border-none cursor-pointer px-4 py-3 hover:bg-[#e3d1b8]/[0.06] transition-colors duration-150"
                >
                  <span className="block font-inter text-[12px] text-[#e3d1b8]/50">{p.category} · {p.date}</span>
                  <span className="block font-inter text-[14px] leading-[1.35] text-[#e3d1b8] mt-0.5">{p.title}</span>
                </button>
                <Link
                  to={`/blog/${p.slug}`}
                  className="flex items-center px-4 font-inter text-[13px] text-[#e3d1b8]/70 no-underline hover:text-[#e3d1b8] hover:bg-[#e3d1b8]/[0.06] transition-colors duration-150"
                  aria-label={`Read ${p.title}`}
                >
                  Read
                </Link>
              </li>
            ))}
          </ol>
        </nav>
      </main>

      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
