import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const POST = {
  slug: 'rnb-artists-to-watch-2026',
  date: 'January 15, 2026',
  category: 'Features',
  readTime: '7 min read',
  title: '10 R&B Artists You Need to Know in 2026',
  subtitle: 'The names defining the genre\'s next chapter â from quiet cult followings to artists on the verge of breaking through.',
  author: 'The Definition of R&B Editorial Team',
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: POST.title,
  description: POST.subtitle,
  datePublished: '2026-01-15',
  dateModified: '2026-01-15',
  author: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  publisher: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  url: 'https://definitionofrnb.com/blog/rnb-artists-to-watch-2026',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://definitionofrnb.com/blog/rnb-artists-to-watch-2026' },
  keywords: 'R&B artists 2026, new R&B artists, up and coming R&B, R&B music 2026, emerging R&B singers',
}

const IconArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const artists = [
  {
    name: 'JayDon',
    why: 'The Usher co-sign on "Lullaby" was not a favour â it was a recognition. At 18, JayDon has the kind of vocal control and emotional intelligence that most artists spend a decade trying to develop. His debut project, whenever it comes, will be one of the most anticipated releases in R&B.',
    watch: 'His falsetto. It will stop you mid-scroll.',
  },
  {
    name: 'Aqyila',
    why: 'Falling Into Place was one of the finest debut albums of 2025. Aqyila enters 2026 with a fully formed artistic identity â gospel-warm, Caribbean-tinged, and utterly unbothered by trends. The question is not whether her second project will be great. The question is how much further she is willing to push.',
    watch: 'Her live performances. Artists who sound this good on record almost never sound this good in the room.',
  },
  {
    name: 'EJ Jones',
    why: 'No album yet â just a run of singles that collectively constitute one of the most accomplished bodies of work in contemporary soul. EJ Jones understands something most young artists do not: restraint is not the absence of feeling. It is the container that makes feeling mean something. His debut album, when it arrives, will be a landmark.',
    watch: '"Gas Station Love." If you have not heard it, stop reading and go listen.',
  },
  {
    name: 'Odeal',
    why: 'Billboard\'s African Rookie of the Year for 2025 spent last year proving that the Afrobeats-R&B convergence is not a trend but a permanent shift in the genre\'s DNA. He is positioned to be the artist who makes that argument to the widest possible audience. His baritone is a genuine instrument.',
    watch: 'His collaborations. Every artist he works with sounds better for having been in the room with him.',
  },
  {
    name: 'Pimmie',
    why: 'BITTERSWEET was a quiet masterpiece that the mainstream has not yet fully processed. In 2026, that changes. Her combination of vocal precision, production instinct, and emotional honesty is genuinely rare, and the OVO/Republic infrastructure behind her knows it.',
    watch: 'Her production credits. She is making some of the best R&B beats in the game and choosing to put her voice on them.',
  },
  {
    name: 'Gabriel Jacoby',
    why: 'Southern soul is a tradition that rarely produces artists who can both honour and extend it. Gabriel Jacoby does both. His smoky falsetto and groove-driven production feel simultaneously classic and urgent. The South Carolina native is one of the most complete artists in contemporary R&B.',
    watch: 'The live show. Southern soul has always been a visceral genre â Jacoby brings that physicality to every performance.',
  },
  {
    name: 'Amindi',
    why: 'The Ugandan-British artist has been one of the most compelling voices in alternative R&B for several years, and 2026 feels like the year her sound finds its largest audience. Her blend of East African musical traditions with contemporary R&B production is unlike anything else in the genre right now.',
    watch: 'Her approach to production. She builds sonic worlds, not just songs.',
  },
  {
    name: 'Fana Hues',
    why: 'Few artists working today have Fana Hues\'s ability to move between delicate vulnerability and fierce directness without ever feeling inconsistent. Her voice is both instrument and weapon. She has been one of R&B\'s best-kept secrets for too long.',
    watch: 'The control she exercises at the quietest moments. That is where the real technique lives.',
  },
  {
    name: 'Leven Kali',
    why: 'Leven Kali has been a cornerstone of the neo-soul underground for years, appearing as a collaborator and session musician on records across the genre. When he steps fully into the spotlight as a lead artist, which 2026 looks set to deliver, the audience he has already earned will know exactly what they are getting.',
    watch: 'His guitar work. He is one of the few vocalists working today who is equally accomplished as an instrumentalist.',
  },
  {
    name: 'Ravyn Lenae',
    why: 'After years of building one of the most critically admired catalogs in independent R&B, Ravyn Lenae enters 2026 with momentum. Her writing is literary in a way that almost no other R&B artist attempts â she builds entire emotional architectures in three-minute songs.',
    watch: 'The lyrics. Read them separately from the music. They hold up.',
  },
]

export default function BlogArtists2026() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title={POST.title}
        description={POST.subtitle}
        canonical="https://definitionofrnb.com/blog/rnb-artists-to-watch-2026"
        type="article"
        jsonLd={JSON_LD}
      />
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      <header className="w-full bg-[#3d1a22] border-b border-[#e3d1b8]/10 py-12 px-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="font-inter text-[11px] text-[#e3d1b8]/40 hover:text-[#e3d1b8]/70 transition-colors bg-transparent border-none cursor-pointer p-0">
              Home
            </button>
            <span className="text-[#e3d1b8]/20 text-[11px]">/</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/40">{POST.category}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-oswald text-[9px] tracking-[0.3em] uppercase bg-[#e3d1b8]/10 border border-[#e3d1b8]/20 text-[#e3d1b8]/70 px-3 py-[4px]">{POST.category}</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/30">{POST.date}</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/20">Â·</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/30">{POST.readTime}</span>
          </div>
          <h1 className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight mb-4 max-w-[820px]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}>
            {POST.title}
          </h1>
          <p className="font-inter text-[14px] text-[#e3d1b8]/50 leading-[1.8] max-w-[640px]">{POST.subtitle}</p>
          <div className="flex items-center gap-3 mt-7 pt-6 border-t border-[#e3d1b8]/10">
            <div className="w-8 h-8 rounded-full bg-[#e3d1b8]/10 border border-[#e3d1b8]/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="8" r="4" stroke="#e3d1b8" strokeOpacity="0.5" strokeWidth="1.5"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#e3d1b8" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-inter text-[12px] text-[#e3d1b8]/45">{POST.author}</span>
          </div>
        </div>
      </header>

      <article className="max-w-[760px] mx-auto px-5 sm:px-6 py-12">

        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/75 leading-[1.9] mb-8">
          At the start of every year we do the same thing: we go back through our listening history, our review notes, the artists who kept appearing in our conversations â and we build a list of the names that matter. This is not a list of artists who are already famous. It is a list of artists who are doing the work, developing the craft, and building the kind of audience that lasts. These are the ten artists who, in our view, define R&B's forward edge entering 2026.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The List</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>

        <div className="space-y-10">
          {artists.map((artist, i) => (
            <section key={artist.name} className="border-l-2 border-[#e3d1b8]/20 pl-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="font-oswald text-[#e3d1b8]/25 text-[11px] tracking-[0.3em]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide"
                  style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
                  {artist.name}
                </h2>
              </div>
              <p className="font-inter text-[14px] text-[#e3d1b8]/70 leading-[1.9] mb-3">
                {artist.why}
              </p>
              <div className="bg-[#3d1a22] border border-[#e3d1b8]/10 px-4 py-3">
                <span className="font-oswald text-[9px] tracking-[0.3em] text-[#e3d1b8]/35 uppercase">Watch for: </span>
                <span className="font-inter text-[12px] text-[#e3d1b8]/55 italic">{artist.watch}</span>
              </div>
            </section>
          ))}
        </div>

        <blockquote className="border-l-4 border-[#e3d1b8]/30 pl-6 py-2 my-12">
          <p className="font-oswald text-[#e3d1b8]/70 italic leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
            "R&B's future belongs to artists who have stopped waiting for permission and started building audiences on their own terms."
          </p>
        </blockquote>

        <section className="mb-10">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            A Final Note
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            Every name on this list has one thing in common: they are making music because they have something to say, not because an algorithm told them to. In an era when so much content is engineered to disappear and be replaced, the artists who treat their work as a form of permanent testimony are the ones worth your attention.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            If you are discovering any of these artists for the first time through this piece, start at the beginning of their catalog and work forward. The full story is always richer than the single you heard first. That is what R&B has always rewarded: the listener who is willing to go deeper.
          </p>
        </section>

        <div className="border-t border-[#e3d1b8]/10 pt-8 mt-8">
          <p className="font-oswald text-[#e3d1b8]/50 italic text-base mb-8">â The Definition of R&B Editorial Team</p>
          <div className="flex flex-wrap gap-3">
            <button onClick={() => { navigate('/reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2 bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-7 py-3 hover:bg-white transition-colors">
              Read Our Reviews <IconArrow />
            </button>
            <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2 border border-[#e3d1b8]/40 text-[#e3d1b8] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-7 py-3 hover:bg-[#e3d1b8]/10 transition-colors">
              Discover Artists <IconArrow />
            </button>
          </div>
        </div>
      </article>

      <Footer onSubmitClick={() => setShowSubmit(true)} />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
