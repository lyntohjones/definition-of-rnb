import React, { useState } from 'react'

const NAV_LINKS = ['HOME', 'ARTISTS', 'MIXES', 'REVIEWS', 'FEATURES', 'SUBMIT']

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-[#5c2a35] border-b border-[#e3d1b8]/20 sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 h-[64px] flex items-center justify-between">

        {/* ── Logo image ── */}
        {/* Drop your logo file into D:\definition-of-rnb\public\ named "logo.png" */}
        <a href="/" className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="The Definition of R&B"
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none'
              e.target.nextSibling.style.display = 'block'
            }}
          />
          {/* Fallback text box — shown only if logo.png is missing */}
          <div className="border-2 border-[#e3d1b8] p-[3px] hidden">
            <div className="border border-[#e3d1b8] px-2 py-[3px]">
              <p className="font-display font-black text-[#e3d1b8] text-[9px] leading-[1.15] tracking-[0.08em] uppercase">
                THE DEFINITION<br />OF R&amp;B
              </p>
            </div>
          </div>
        </a>

        {/* ── Desktop nav links ── */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="font-oswald text-[11px] font-medium tracking-[0.18em] text-[#e3d1b8] hover:text-[#e3d1b8]/60 transition-colors uppercase"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* ── Submit Music CTA ── */}
        <div className="hidden md:block flex-shrink-0">
          <button className="bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-5 py-2.5 hover:bg-white transition-colors">
            SUBMIT MUSIC
          </button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 flex flex-col gap-[5px]"
          aria-label="Toggle menu"
        >
          <span className={"block w-5 h-[1.5px] bg-[#e3d1b8] transition-transform origin-center " + (open ? "rotate-45 translate-y-[6.5px]" : "")} />
          <span className={"block w-5 h-[1.5px] bg-[#e3d1b8] transition-opacity "             + (open ? "opacity-0" : "")} />
          <span className={"block w-5 h-[1.5px] bg-[#e3d1b8] transition-transform origin-center " + (open ? "-rotate-45 -translate-y-[6.5px]" : "")} />
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {open && (
        <div className="md:hidden bg-[#3d1a22] border-t border-[#e3d1b8]/20 px-6 py-5">
          <ul className="flex flex-col gap-4 mb-5">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="font-oswald text-sm tracking-widest text-[#e3d1b8] uppercase">
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button className="w-full bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-sm tracking-widest uppercase py-2.5">
            SUBMIT MUSIC
          </button>
        </div>
      )}
    </nav>
  )
}
