import React, { useState, useEffect } from 'react'
import ArtistCard from './ArtistCard'
import SidebarAd  from './SidebarAd'

/* ── Fallback data if fetch fails ────────────────────────────────────────── */
const FALLBACK = [
  { id: 1, label: 'Rising Artist', name: 'Loading...', bio: 'Discovering new artists...', photo: null, songs: [{ title: '—' }, { title: '—' }, { title: '—' }] },
]

export default function BlogGrid() {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/artists.json')
      .then((r) => {
        if (!r.ok) throw new Error(r.status)
        return r.json()
      })
      .then((data) => {
        setArtists(Array.isArray(data) ? data : [])
        setLoading(false)
      })
      .catch(() => {
        setArtists(FALLBACK)
        setLoading(false)
      })
  }, [])

  return (
    <section className="w-full bg-[#5c2a35] py-12 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-10">
          <p className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/35 uppercase mb-2">
            ◆ Spotlight ◆
          </p>
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-[0.1em]"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}
          >
            UP &amp; COMING ARTISTS
          </h2>
          <div className="w-10 h-[1px] bg-[#e3d1b8]/30 mx-auto mt-3" />
        </div>

        {/* ── Grid + sidebar ── */}
        <div className="flex gap-8 items-start">

          <div className="flex-1 min-w-0">
            {loading ? (
              <div className="text-center py-20">
                <div className="inline-block w-8 h-8 border-2 border-[#e3d1b8]/30 border-t-[#e3d1b8] rounded-full animate-spin" />
                <p className="font-inter text-[#e3d1b8]/40 text-xs mt-4 tracking-widest uppercase">
                  Discovering Artists...
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {artists.map((artist) => (
                  <ArtistCard key={artist.id} {...artist} />
                ))}
              </div>
            )}
            <div className="text-center mt-10">
              <button className="border border-[#e3d1b8]/45 text-[#e3d1b8] font-oswald font-medium text-[11px] tracking-[0.25em] uppercase px-10 py-3 hover:bg-[#e3d1b8]/10 transition-colors">
                LOAD MORE ARTISTS
              </button>
            </div>
          </div>

          <aside className="hidden xl:block w-[260px] flex-shrink-0">
            <SidebarAd />
          </aside>

        </div>
      </div>
    </section>
  )
}
