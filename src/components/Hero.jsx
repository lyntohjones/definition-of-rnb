import React from 'react'

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden bg-[#5c2a35]"
      style={{ minHeight: '460px' }}
    >
      {/* Right side: artist image area
          ─────────────────────────────────────────────────────
          To use a real photo, replace the inner gradient div with:
          <img
            src="/your-artist.jpg"
            alt="Featured Artist"
            className="w-full h-full object-cover object-top"
          />
          ───────────────────────────────────────────────────── */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[48%] pointer-events-none"
        aria-hidden="true"
      >
        <div className="w-full h-full bg-gradient-to-br from-[#7a3848] via-[#4a1e28] to-[#1a0a10]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5c2a35] via-[#5c2a35]/70 to-transparent" />
      </div>

      {/* Hero copy */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-14 md:py-20">
        <div className="max-w-[640px]">
          <h1
            className="font-oswald font-bold text-[#e3d1b8] uppercase leading-[0.92] mb-5"
            style={{ fontSize: 'clamp(3.5rem, 9vw, 7.5rem)' }}
          >
            FEATURED<br />
            ARTIST<br />
            OF THE<br />
            WEEK
          </h1>

          <h2
            className="font-oswald font-bold text-[#e3d1b8]/90 uppercase leading-tight mb-2"
            style={{ fontSize: 'clamp(1.4rem, 3.5vw, 2.6rem)' }}
          >
            [ARTIST NAME PLACEHOLDER]
          </h2>

          <p className="font-oswald text-[11px] md:text-sm tracking-[0.35em] text-[#e3d1b8]/55 uppercase mb-8">
            A DEEP DIVE INTO THEIR SOUNDSCAPE
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-white transition-colors">
              READ FEATURE
            </button>
            <button className="border border-[#e3d1b8]/60 text-[#e3d1b8] font-oswald font-bold text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#e3d1b8]/10 transition-colors">
              LISTEN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
