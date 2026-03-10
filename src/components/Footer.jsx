import React from 'react'
import { useNavigate } from 'react-router-dom'

/* ── Footer link config ──────────────────────────────────────────
   route: internal path (uses navigate)
   href:  external URL (opens in new tab)
   action: special handler key
────────────────────────────────────────────────────────────────── */
const LINK_CONFIG = {
  Explore: [
    { label: 'Artists',      action: 'artists' },
    { label: 'Reviews',      route: '/reviews' },
  ],
  Connect: [
    { label: 'Instagram',    href: 'https://www.instagram.com/definitionofrnb/' },
    { label: 'TikTok',       href: 'https://www.tiktok.com/@definitionofrnb' },
    { label: 'YouTube',      href: 'https://www.youtube.com/@definitionofrnb' },
    { label: 'Twitter / X',  href: 'https://twitter.com/definitionofrnb' },
    { label: 'Spotify',      href: 'https://open.spotify.com/user/definitionofrnb' },
  ],
  Legal: [
    { label: 'About',          route: '/about' },
    { label: 'Submit Music',   action: 'submit' },
    { label: 'Advertise',      route: '/promote' },
    { label: 'Privacy Policy', route: '/' },
    { label: 'Contact',        href: 'mailto:info@definitionofrnb.com' },
  ],
}

export default function Footer({ onSubmitClick }) {
  const navigate = useNavigate()

  function handleClick(item) {
    if (item.href) {
      window.open(item.href, '_blank', 'noopener noreferrer')
      return
    }
    if (item.action === 'submit') {
      onSubmitClick?.()
      return
    }
    if (item.action === 'artists') {
      if (window.location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById('artists')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 150)
      } else {
        const el = document.getElementById('artists')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
      return
    }
    if (item.route) {
      navigate(item.route)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-[#2a0f16] border-t border-[#e3d1b8]/10 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* ── Brand block ── */}
          <div className="col-span-2 md:col-span-1">
            <img
              src="/logo.png"
              alt="The Definition of R&B"
              className="h-14 w-auto object-contain mb-4"
              onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'inline-block' }}
            />
            {/* Fallback */}
            <div className="border-2 border-[#e3d1b8] p-[3px] mb-4" style={{ display: 'none' }}>
              <div className="border border-[#e3d1b8] px-3 py-1.5">
                <p className="font-display font-black text-[#e3d1b8] text-xs leading-[1.2] tracking-[0.06em] uppercase">
                  THE DEFINITION<br />OF R&amp;B
                </p>
              </div>
            </div>
            <p className="font-inter text-[11px] text-[#e3d1b8]/38 leading-relaxed max-w-[200px]">
              The definitive source for R&amp;B culture, artists, and music criticism. Est. 2011. A Division of the Definition of Music Group.
            </p>
          </div>

          {/* ── Link columns ── */}
          {Object.entries(LINK_CONFIG).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-oswald text-[10px] tracking-[0.25em] text-[#e3d1b8]/45 uppercase mb-4 border-b border-[#e3d1b8]/10 pb-2">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => handleClick(item)}
                      className="font-inter text-[11px] text-[#e3d1b8]/38 hover:text-[#e3d1b8] transition-colors bg-transparent border-none cursor-pointer p-0 text-left"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-[#e3d1b8]/10 pt-5 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-inter text-[9px] tracking-[0.2em] text-[#e3d1b8]/22 uppercase">
            &copy; 2011–2026 The Definition of R&amp;B. All Rights Reserved. A Division of the Definition of Music Group.
          </p>
          <p className="font-inter text-[9px] tracking-[0.2em] text-[#e3d1b8]/15 uppercase">
            Built for the culture.
          </p>
        </div>

      </div>
    </footer>
  )
}
