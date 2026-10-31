import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import VinylStage from './VinylStage'

const STEPS = [
  { n: '01', title: 'Send one song',       body: 'A Spotify, Apple Music or SoundCloud link and a few lines about you.' },
  { n: '02', title: 'We listen',           body: 'Every submission is heard. You hear back within 7 days.' },
  { n: '03', title: 'Take the spotlight',  body: 'Artist of the Week, an honest write-up, the Up & Coming grid and posts across our socials.' },
]

/* Reveal styles injected once */
const STYLES = `
.fa-reveal { opacity: 0; transform: translateY(12px); transition: opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1); }
.fa-in .fa-reveal { opacity: 1; transform: none; }
@media (prefers-reduced-motion: reduce) { .fa-reveal { opacity: 1; transform: none; transition: none; } }
`
let stylesInjected = false

export default function ForArtists({ onSubmitClick }) {
  const [name, setName] = useState('')
  const [shown, setShown] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!stylesInjected) {
      const tag = document.createElement('style')
      tag.textContent = STYLES
      document.head.appendChild(tag)
      stylesInjected = true
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect() }
    }, { threshold: 0.2 })
    if (sectionRef.current) io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [])

  const delay = (i) => ({ transitionDelay: `${i * 80}ms` })

  return (
    <section
      id="for-artists"
      ref={sectionRef}
      aria-labelledby="for-artists-title"
      className={`w-full scroll-mt-20 bg-[#2a0f16] border-t border-[#e3d1b8]/10 overflow-hidden${shown ? ' fa-in' : ''}`}
    >
      <div className="max-w-screen-xl mx-auto px-5 sm:px-6 py-16 md:py-24 grid gap-8 md:gap-10 md:grid-cols-12 md:items-center">

        {/* ── 3D record ── */}
        <div className="md:col-span-6 lg:col-span-7 aspect-[4/3] md:aspect-[5/4] max-h-[640px] -mx-5 sm:mx-0">
          <VinylStage name={name} />
        </div>

        {/* ── Pitch ── */}
        <div className="md:col-span-6 lg:col-span-5">
          <h2
            id="for-artists-title"
            className="fa-reveal font-oswald font-bold uppercase text-[#e3d1b8] m-0"
            style={{ fontSize: 'clamp(2.6rem, 4.4vw, 4rem)', lineHeight: 0.92, letterSpacing: '-0.01em', ...delay(0) }}
          >
            Your record<br />could spin here<br />next week.
          </h2>

          <p className="fa-reveal font-inter text-[16px] md:text-[17px] leading-[1.65] text-[#e3d1b8]/80 mt-6 mb-0 max-w-[34rem]" style={delay(1)}>
            Every week one independent R&amp;B artist takes over the top of this page — a written feature,
            key tracks, and posts across our socials. Submitting is free, and we listen to everything.
          </p>

          <ol className="list-none m-0 mt-8 p-0 border-t border-[#e3d1b8]/15 max-w-[34rem]">
            {STEPS.map((s, i) => (
              <li key={s.n} className="fa-reveal flex gap-4 py-4 border-b border-[#e3d1b8]/10" style={delay(2 + i)}>
                <span className="font-oswald text-[13px] text-[#e3d1b8]/45 pt-[3px] w-6 flex-shrink-0">{s.n}</span>
                <div>
                  <p className="font-inter text-[16px] font-medium text-[#e3d1b8] m-0">{s.title}</p>
                  <p className="font-inter text-[14px] leading-[1.55] text-[#e3d1b8]/60 m-0 mt-1">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          {/* Name on the record */}
          <div className="fa-reveal mt-8 max-w-[34rem]" style={delay(5)}>
            <label htmlFor="fa-name" className="block font-inter text-[14px] font-medium text-[#e3d1b8] mb-2">
              Try your name on the record
            </label>
            <input
              id="fa-name"
              type="text"
              value={name}
              maxLength={24}
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
              placeholder="Your artist name"
              className="w-full h-12 px-4 rounded-[2px] bg-[#3d1a22] border border-[#e3d1b8]/30 text-[#e3d1b8] placeholder:text-[#e3d1b8]/35 font-inter text-[15px] outline-none focus:border-[#e3d1b8]/80 transition-colors duration-150"
            />
          </div>

          <div className="fa-reveal flex flex-wrap gap-3 mt-4" style={delay(6)}>
            <button
              type="button"
              onClick={() => onSubmitClick?.(name.trim())}
              className="h-12 px-6 rounded-[2px] bg-[#e3d1b8] text-[#5c2a35] font-inter font-medium text-[14px] border-none cursor-pointer hover:bg-white transition-colors duration-150"
            >
              Submit your music — free
            </button>
            <Link
              to="/promote"
              className="flex items-center h-12 px-6 rounded-[2px] border border-[#e3d1b8]/40 text-[#e3d1b8] font-inter font-medium text-[14px] no-underline hover:border-[#e3d1b8] hover:bg-[#e3d1b8]/[0.06] transition-colors duration-150"
            >
              See feature packages
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
