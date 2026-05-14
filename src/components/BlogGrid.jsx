import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import ArtistCard from './ArtistCard'
import SidebarAd from './SidebarAd'

/* -- Arrow icon -- */
const IconArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* -- Fallback data -- */
const FALLBACK = [
  { id: 1, label: 'Rising Artist', name: 'Loading...', bio: 'Discovering new artists...', photo: null, songs: [{ title: ' - ' }, { title: ' - ' }, { title: ' - ' }] },
]

/*  -  Blog posts data  -  */
const POSTS = [
  {
    slug: 'rnb-artists-to-watch-2026',
    title: '10 R&B Artists You Need to Know in 2026',
    date: 'Jan 15, 2026',
    category: 'Features',
    readTime: '7 min read',
    excerpt: 'From bedroom pop to Atlanta trap-soul, these ten names are defining what R\u0026B sounds like in 2026.',
  },
  {
    slug: 'falsetto-renaissance-rnb',
    title: 'The Falsetto Renaissance: Why R&B Singers Are Going Higher',
    date: 'Sep 18, 2025',
    category: 'Culture',
    readTime: '4 min read',
    excerpt: 'From PinkPantheress to Daniel Caesar, a new generation is embracing head voice as emotional language.',
  },
  {
    slug: 'afrobeats-rnb-transatlantic-love-story',
    title: 'Afrobeats and R&B: How Two Genres Became One Sound',
    date: 'Aug 10, 2025',
    category: 'Culture',
    readTime: '5 min read',
    excerpt: 'The cross-pollination of Afrobeats and American R\u0026B has produced a new transatlantic sound reshaping the charts.',
  },
  {
    slug: 'best-rnb-albums-2025',
    title: 'The Best R&B Albums of 2025: Our Year-End Picks',
    date: 'Dec 20, 2025',
    category: 'Reviews',
    readTime: '8 min read',
    excerpt: 'A definitive ranking of the most essential R\u0026B records that shaped the sound of 2025.',
  },
]

export default function BlogGrid() {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    fetch('/data/artists.json')
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.json() })
      .then((data) => {
        setArtists(Array.isArray(data) ? data.filter((a) => a.label !== 'Artist of the Week') : [])
        setLoading(false)
      })
      .catch(() => { setArtists(FALLBACK); setLoading(false) })
  }, [])

  return (
    <>
      {/* -- Featured Blog Post Banner -- */}
      <section className="w-full bg-[#3d1a22] border-t border-b border-[#e3d1b8]/10 px-4 py-8">
        <div className="max-w-screen-xl mx-auto">
          <button
            onClick={() => {
              navigate('/blog/welcome-to-the-new-definition-of-rnb')
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="w-full text-left group flex flex-col sm:flex-row sm:items-center justify-between gap-4 border border-[#e3d1b8]/12 bg-[#2a0f16] px-6 py-5"
            style={{ transition: 'border-color 250ms cubic-bezier(0.22,1,0.36,1), transform 150ms cubic-bezier(0.64,0,0.78,0)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(227,209,184,0.28)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(227,209,184,0.12)'; e.currentTarget.style.transform = 'scale(1)' }}
            onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.99)' }}
            onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            <div className="flex items-start gap-4">
              {/* NEW badge */}
              <span className="flex-shrink-0 mt-[2px] font-oswald text-[9px] tracking-[0.3em] uppercase bg-[#e3d1b8] text-[#5c2a35] px-2 py-[3px]">
                New
              </span>
              <div>
                <p className="font-oswald text-[9px] tracking-[0.3em] text-[#e3d1b8]/35 uppercase mb-1">
                  Site Update &middot; March 9, 2026
                </p>
                <h3
                  className="font-oswald font-bold text-[#e3d1b8]/85 uppercase leading-tight"
                  style={{
                    fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)',
                    transition: 'color 200ms cubic-bezier(0.22,1,0.36,1)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#e3d1b8' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(227,209,184,0.85)' }}
                >
                  Welcome to the New Definition of R&amp;B: Streamlined, Mobile-Ready, and Built for Artists
                </h3>
                <p className="font-inter text-[12px] text-[#e3d1b8]/40 mt-1.5 leading-relaxed max-w-[560px]">
                  We rebuilt the platform from the ground up  -  new mobile experience, live nav links, a Reviews page, and the new Artist of the Week Promotion feature.
                </p>
              </div>
            </div>
            <span
              className="flex-shrink-0 flex items-center gap-1.5 font-oswald text-[10px] tracking-[0.2em] text-[#e3d1b8]/40 uppercase"
              style={{ transition: 'color 200ms cubic-bezier(0.22,1,0.36,1)' }}
              onMouseEnter={e => { e.currentTarget.style.color = 'rgba(227,209,184,0.7)' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(227,209,184,0.4)' }}
            >
              Read <IconArrow />
            </span>
          </button>
        </div>
      </section>

      {/* -- Artists grid -- */}
      <section id="artists" className="w-full bg-[#5c2a35] py-12 px-4">
        <div className="max-w-screen-xl mx-auto">

          {/* Section header */}
          <div className="text-center mb-10">
            <p className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/35 uppercase mb-2">
              * Spotlight *
            </p>
            <h2
              className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-[0.1em]"
              style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}
            >
              UP &amp; COMING ARTISTS
            </h2>
            <div className="w-10 h-[1px] bg-[#e3d1b8]/30 mx-auto mt-3" />
          </div>

          {/* Grid + sidebar */}
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
                <button
                  className="border border-[#e3d1b8]/45 text-[#e3d1b8] font-oswald font-medium text-[11px] tracking-[0.25em] uppercase px-10 py-3"
                  style={{ transition: 'background-color 200ms cubic-bezier(0.22,1,0.36,1), border-color 200ms cubic-bezier(0.22,1,0.36,1), transform 150ms cubic-bezier(0.64,0,0.78,0)' }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(227,209,184,0.1)'; e.currentTarget.style.borderColor = 'rgba(227,209,184,0.7)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(227,209,184,0.45)'; e.currentTarget.style.transform = 'scale(1)' }}
                  onMouseDown={e => { e.currentTarget.style.transform = 'scale(0.97)' }}
                  onMouseUp={e => { e.currentTarget.style.transform = 'scale(1)' }}
                >
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
      {/*  -  -  -  Latest from the Blog  -  -  -  */}
      <section className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 2rem)' }}
          >
            Latest from the Blog
          </h2>
          <a
            href="/blog"
            className="font-oswald text-[11px] tracking-[0.25em] uppercase text-[#e3d1b8]/60 hover:text-[#e3d1b8] transition-colors"
          >
            View all &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {POSTS.map(post => (
            <a
              key={post.slug}
              href={'/blog/' + post.slug}
              className="group block bg-[#1a1a1a] border border-[#e3d1b8]/10 rounded-lg overflow-hidden hover:border-[#e3d1b8]/30 transition-all duration-300"
            >
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-oswald text-[9px] tracking-[0.3em] uppercase bg-[#5c2a35] text-[#e3d1b8] px-2 py-[3px]">
                    {post.category}
                  </span>
                  <span className="font-oswald text-[9px] tracking-[0.2em] uppercase text-[#e3d1b8]/40">
                    {post.readTime}
                  </span>
                </div>
                <h3
                  className="font-oswald font-bold text-[#e3d1b8] leading-tight mb-2 group-hover:text-white transition-colors"
                  style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}
                >
                  {post.title}
                </h3>
                <p className="font-inter text-[11px] text-[#e3d1b8]/50 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center gap-1 font-oswald text-[9px] tracking-[0.2em] uppercase text-[#e3d1b8]/40 group-hover:text-[#e3d1b8]/70 transition-colors">
                  Read more <span>&rarr;</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

    </>
  )
}
