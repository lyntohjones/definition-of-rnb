import React from 'react'

const LINKS = {
  Explore: ['Artists', 'Mixes', 'Reviews', 'Features', 'Interviews'],
  Connect: ['Instagram', 'TikTok', 'YouTube', 'Twitter / X', 'Spotify'],
  Legal:   ['About', 'Submit Music', 'Advertise', 'Privacy Policy', 'Contact'],
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#2a0f16] border-t border-[#e3d1b8]/10 py-12 px-4">
      <div className="max-w-screen-xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">

          {/* Brand block */}
          <div className="col-span-2 md:col-span-1">
            <div className="border-2 border-[#e3d1b8] p-[3px] inline-block mb-4">
              <div className="border border-[#e3d1b8] px-3 py-1.5">
                <p className="font-display font-black text-[#e3d1b8] text-xs leading-[1.2] tracking-[0.06em] uppercase">
                  THE DEFINITION<br />OF R&amp;B
                </p>
              </div>
            </div>
            <p className="font-inter text-[11px] text-[#e3d1b8]/38 leading-relaxed max-w-[200px]">
              The definitive source for R&amp;B culture, artists, mixes, and music criticism. Est. 2025.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="font-oswald text-[10px] tracking-[0.25em] text-[#e3d1b8]/45 uppercase mb-4 border-b border-[#e3d1b8]/10 pb-2">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-inter text-[11px] text-[#e3d1b8]/38 hover:text-[#e3d1b8] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#e3d1b8]/10 pt-5 flex flex-col sm:flex-row justify-between gap-2">
          <p className="font-inter text-[9px] tracking-[0.2em] text-[#e3d1b8]/22 uppercase">
            &copy; 2025 The Definition of R&amp;B. All Rights Reserved.
          </p>
          <p className="font-inter text-[9px] tracking-[0.2em] text-[#e3d1b8]/15 uppercase">
            Built for the culture.
          </p>
        </div>

      </div>
    </footer>
  )
}
