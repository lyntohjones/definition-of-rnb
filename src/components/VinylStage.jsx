import React, { useEffect, useRef, useState } from 'react'

/* ── Palette ── */
const WINE  = '#5c2a35'
const DEEP  = '#3d1a22'
const CREAM = '#e3d1b8'
const VINYL = '#0d0708'

const LABEL_R   = 0.4  // label radius as a fraction of the record radius
const SLEEVE_X  = -0.72  // sleeve centre
const SLIDE_IN  = -0.72  // record x while tucked in the sleeve
const SLIDE_OUT = 0.78   // record x once pulled out (label fully clear of the sleeve)
const TILT_X    = -0.2   // resting tilt of the whole set
const TILT_Y    = 0.24
const SPIN      = 0.9    // rad/s

/* Vinyl face: grooves, track gaps, label, curved masthead and the artist name */
function drawRecord(ctx, size, name) {
  const c = size / 2
  const R = size / 2
  ctx.clearRect(0, 0, size, size)

  ctx.fillStyle = VINYL
  ctx.beginPath(); ctx.arc(c, c, R, 0, Math.PI * 2); ctx.fill()

  /* Grooves: fine rings with jittered alpha, a few darker gaps between tracks */
  const gaps = [0.52, 0.64, 0.76, 0.88]
  for (let r = LABEL_R + 0.03; r < 0.985; r += 0.0027) {
    const gap = gaps.some((g) => Math.abs(r - g) < 0.006)
    ctx.strokeStyle = gap ? 'rgba(0,0,0,0.9)' : `rgba(227,209,184,${0.04 + Math.random() * 0.1})`
    ctx.lineWidth = gap ? 3 : 1
    ctx.beginPath(); ctx.arc(c, c, r * R, 0, Math.PI * 2); ctx.stroke()
  }

  /* Label */
  const L = LABEL_R * R
  ctx.fillStyle = WINE
  ctx.beginPath(); ctx.arc(c, c, L, 0, Math.PI * 2); ctx.fill()
  ctx.strokeStyle = CREAM
  ctx.lineWidth = 3
  ctx.beginPath(); ctx.arc(c, c, L * 0.92, 0, Math.PI * 2); ctx.stroke()

  /* Curved masthead along the top of the label */
  const mast = 'THE DEFINITION OF R&B'
  ctx.fillStyle = CREAM
  ctx.font = `600 ${Math.round(L * 0.11)}px Oswald, Impact, sans-serif`
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  const arcR = L * 0.78
  const step = 0.075
  const start = -Math.PI / 2 - ((mast.length - 1) * step) / 2
  for (let i = 0; i < mast.length; i++) {
    const a = start + i * step
    ctx.save()
    ctx.translate(c + Math.cos(a) * arcR, c + Math.sin(a) * arcR)
    ctx.rotate(a + Math.PI / 2)
    ctx.fillText(mast[i], 0, 0)
    ctx.restore()
  }

  /* Artist name: up to two lines, auto-fit to the label */
  const text = (name || 'Your name here').toUpperCase()
  const words = text.split(/\s+/)
  const lines = words.length > 1 && text.length > 10
    ? [words.slice(0, Math.ceil(words.length / 2)).join(' '), words.slice(Math.ceil(words.length / 2)).join(' ')]
    : [text]
  let fs = L * 0.36
  const maxW = L * 1.2
  ctx.font = `700 ${fs}px Oswald, Impact, sans-serif`
  const widest = Math.max(...lines.map((l) => ctx.measureText(l).width))
  if (widest > maxW) fs *= maxW / widest
  ctx.font = `700 ${fs}px Oswald, Impact, sans-serif`
  const lh = fs * 0.95
  lines.forEach((l, i) => ctx.fillText(l, c, c - L * 0.08 + (i - (lines.length - 1) / 2) * lh))

  ctx.font = `500 ${Math.round(L * 0.085)}px Inter, system-ui, sans-serif`
  ctx.fillStyle = 'rgba(227,209,184,0.75)'
  ctx.fillText('ARTIST OF THE WEEK · 33⅓', c, c + L * 0.5)

  /* Spindle hole */
  ctx.fillStyle = '#1a0b0e'
  ctx.beginPath(); ctx.arc(c, c, L * 0.07, 0, Math.PI * 2); ctx.fill()
}

/* Sleeve front: wine card, inset rule, stacked masthead */
function drawSleeve(ctx, size) {
  ctx.fillStyle = WINE
  ctx.fillRect(0, 0, size, size)
  ctx.strokeStyle = 'rgba(227,209,184,0.55)'
  ctx.lineWidth = 4
  ctx.strokeRect(size * 0.06, size * 0.06, size * 0.88, size * 0.88)

  ctx.fillStyle = CREAM
  ctx.textAlign = 'left'
  ctx.textBaseline = 'alphabetic'
  const x = size * 0.12
  ctx.font = `700 ${size * 0.13}px Oswald, Impact, sans-serif`
  ctx.fillText('THE', x, size * 0.3)
  ctx.fillText('DEFINITION', x, size * 0.44)
  ctx.font = `700 ${size * 0.25}px Oswald, Impact, sans-serif`
  ctx.fillText('OF R&B', x, size * 0.7)

  ctx.font = `500 ${size * 0.036}px Inter, system-ui, sans-serif`
  ctx.fillStyle = 'rgba(227,209,184,0.7)'
  ctx.fillText('SIDE A · NEW R&B, EVERY WEEK', x, size * 0.86)
}

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3)

export default function VinylStage({ name }) {
  const mountRef   = useRef(null)
  const redrawRef  = useRef(null)
  const nameRef    = useRef(name)
  const [fallback, setFallback] = useState(false)
  nameRef.current = name

  useEffect(() => {
    let disposed = false
    let cleanup = () => {}

    /* Fetch three.js only once the stage is within ~600px of the viewport */
    const near = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      near.disconnect()
      init()
    }, { rootMargin: '600px 0px' })
    if (mountRef.current) near.observe(mountRef.current)

    const init = async () => {
      const THREE = await import('three')
      const { RoomEnvironment } = await import('three/examples/jsm/environments/RoomEnvironment.js')
      if (disposed || !mountRef.current) return

      /* Make sure the canvas textures use the brand fonts */
      try {
        await Promise.all([
          document.fonts.load('700 80px Oswald'),
          document.fonts.load('600 40px Oswald'),
          document.fonts.load('500 30px Inter'),
        ])
      } catch { /* draw with fallbacks */ }
      if (disposed || !mountRef.current) return

      let renderer
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      } catch {
        setFallback(true)
        return
      }

      const mount = mountRef.current
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.outputColorSpace = THREE.SRGBColorSpace
      mount.appendChild(renderer.domElement)
      renderer.domElement.setAttribute('aria-hidden', 'true')

      const scene  = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50)
      camera.position.set(0, 0, 6.2)

      const pmrem = new THREE.PMREMGenerator(renderer)
      const envTex = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
      scene.environment = envTex
      scene.environmentIntensity = 0.8

      const key = new THREE.DirectionalLight(0xffe9d2, 2.2)
      key.position.set(2, 3, 6)
      scene.add(key)
      const rim = new THREE.PointLight(0xb0485e, 6, 10)
      rim.position.set(-3, -1.5, 2)
      scene.add(rim)

      const group = new THREE.Group()
      scene.add(group)

      /* Record */
      const recCanvas = document.createElement('canvas')
      recCanvas.width = recCanvas.height = 1024
      const recCtx = recCanvas.getContext('2d')
      drawRecord(recCtx, 1024, nameRef.current.trim())
      const recTex = new THREE.CanvasTexture(recCanvas)
      recTex.colorSpace = THREE.SRGBColorSpace
      recTex.anisotropy = renderer.capabilities.getMaxAnisotropy()

      const recGeo  = new THREE.CylinderGeometry(1, 1, 0.025, 160)
      recGeo.rotateX(Math.PI / 2)
      const faceMat = new THREE.MeshStandardMaterial({ map: recTex, roughness: 0.32, metalness: 0.15 })
      const edgeMat = new THREE.MeshStandardMaterial({ color: VINYL, roughness: 0.45, metalness: 0.2 })
      const record  = new THREE.Mesh(recGeo, [edgeMat, faceMat, faceMat])
      record.position.set(reduced ? SLIDE_OUT : SLIDE_IN, 0, -0.035)
      group.add(record)

      /* Sleeve */
      const slvCanvas = document.createElement('canvas')
      slvCanvas.width = slvCanvas.height = 1024
      drawSleeve(slvCanvas.getContext('2d'), 1024)
      const slvTex = new THREE.CanvasTexture(slvCanvas)
      slvTex.colorSpace = THREE.SRGBColorSpace
      slvTex.anisotropy = recTex.anisotropy
      const slvGeo   = new THREE.BoxGeometry(2.2, 2.2, 0.04)
      const sideMat  = new THREE.MeshStandardMaterial({ color: DEEP, roughness: 0.8 })
      const frontMat = new THREE.MeshStandardMaterial({ map: slvTex, color: 0xb8a4a4, roughness: 0.85, metalness: 0 })
      const sleeve   = new THREE.Mesh(slvGeo, [sideMat, sideMat, sideMat, sideMat, frontMat, sideMat])
      sleeve.position.set(SLEEVE_X, 0, 0)
      group.add(sleeve)

      group.rotation.set(TILT_X, TILT_Y, 0)

      /* Loop state (declared before anything can call into it) */
      let running = false
      let raf = 0
      let last = 0
      let slideStart = null

      redrawRef.current = (n) => {
        drawRecord(recCtx, 1024, n)
        recTex.needsUpdate = true
        if (!running) renderer.render(scene, camera)
      }

      /* Size */
      const resize = () => {
        const w = mount.clientWidth
        const h = mount.clientHeight
        renderer.setSize(w, h)
        camera.aspect = w / h
        /* keep the whole sleeve + record in frame on narrow boxes */
        camera.position.z = w / h < 1.1 ? 7.4 : 5.9
        camera.updateProjectionMatrix()
        renderer.render(scene, camera)
      }
      const ro = new ResizeObserver(resize)
      ro.observe(mount)
      resize()

      /* Pointer tilt */
      const target = { x: 0, y: 0 }
      const onPointer = (e) => {
        const r = mount.getBoundingClientRect()
        target.y = ((e.clientX - r.left) / r.width - 0.5) * 0.36
        target.x = ((e.clientY - r.top) / r.height - 0.5) * 0.24
      }
      if (!reduced) window.addEventListener('pointermove', onPointer, { passive: true })

      /* Loop runs only while the stage is on screen */
      const clock = () => performance.now() / 1000

      const tick = () => {
        const now = clock()
        const dt = Math.min(now - last, 0.05)
        last = now

        if (slideStart !== null) {
          const t = Math.min((now - slideStart) / 1.4, 1)
          record.position.x = SLIDE_IN + (SLIDE_OUT - SLIDE_IN) * easeOutCubic(t)
          if (t === 1) slideStart = null
        }
        record.rotation.z -= SPIN * dt
        group.rotation.y += (TILT_Y + target.y - group.rotation.y) * 0.06
        group.rotation.x += (TILT_X + target.x - group.rotation.x) * 0.06

        renderer.render(scene, camera)
        if (running) raf = requestAnimationFrame(tick)
      }

      let slid = reduced
      const io = new IntersectionObserver(([entry]) => {
        const visible = entry.isIntersecting
        if (visible && !slid && entry.intersectionRatio >= 0.35) {
          slid = true
          slideStart = clock()
        }
        if (reduced) return
        if (visible && !running) {
          running = true
          last = clock()
          raf = requestAnimationFrame(tick)
        } else if (!visible && running) {
          running = false
          cancelAnimationFrame(raf)
        }
      }, { threshold: [0, 0.35] })
      io.observe(mount)

      cleanup = () => {
        running = false
        cancelAnimationFrame(raf)
        io.disconnect()
        ro.disconnect()
        window.removeEventListener('pointermove', onPointer)
        ;[recGeo, slvGeo, faceMat, edgeMat, sideMat, frontMat, recTex, slvTex, envTex].forEach((o) => o.dispose())
        pmrem.dispose()
        renderer.dispose()
        renderer.domElement.remove()
        redrawRef.current = null
      }
    }

    return () => { disposed = true; near.disconnect(); cleanup() }
  }, [])

  /* Print the typed name on the label */
  useEffect(() => { redrawRef.current?.(name.trim()) }, [name])

  return (
    <div ref={mountRef} className="relative w-full h-full">
      {fallback && (
        <div
          className="absolute inset-[10%] rounded-full"
          style={{ background: `radial-gradient(circle, ${WINE} 0 17%, ${VINYL} 17.5% 100%)` }}
          aria-hidden="true"
        />
      )}
    </div>
  )
}
