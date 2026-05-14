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
  subtitle: 'The names defining the genre's next chapter - from cult followings to artists on the verge of breaking through.',
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
  keywords: 'R&B artists 2026, new R&B artists, up and coming R&B, emerging R&B singers',
}

const IconArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArtistPhoto = ({ src, alt, credit }) => (
  <div className="my-8 text-center">
    <img
      src={src}
      alt={alt}
      onError={(e) => { e.target.parentElement.style.display = 'none' }}
      className="w-full max-w-md mx-auto rounded-xl block"
    />
    {credit && (
      <p className="font-inter text-[12px] text-[#e3d1b8]/35 mt-2 italic">{credit}</p>
    )}
  </div>
)
export default function Blog() {
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
            <span className="font-inter text-[11px] text-[#e3d1b8]/20">&middot;</span>
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
          Every year we do this list and every year we say the same thing: the future of R&B is in safe hands. But in 2026, it feels less like faith and more like obvious fact. Here are the ten artists you need to have in your ears right now.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The List</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            1. JayDon
          </h2>
          
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">He was 18 when "Lullaby" featuring Usher dropped, and the calmness of that record is still astonishing. He did not oversing to prove himself. He did not manufacture drama. He just made an incredibly intimate record and let Usher co-sign the vision. In 2026, the follow-up is the only question that matters - and everything we have heard suggests he has the answer.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>The full project. Singles are warm-up.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            2. Aqyila
          </h2>
          
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">Falling Into Place was the best debut album of 2025 and it still has not received the full mainstream recognition it deserves. That changes in 2026. Her gospel roots, her Caribbean melodic instincts, and her absolute command of the slow burn - these are not skills you develop. You either have them or you do not. She has them.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>Her live performances. She is one of those artists who is even better live than on the record.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            3. Odeal
          </h2>
          
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">The British-Nigerian artist spent 2025 quietly building one of the most interesting catalogs in contemporary R&B. The Afrobeats-R&B convergence is not a trend to him - it is just how he hears music. He is positioned to be the artist who makes that argument to the widest possible audience in 2026. His baritone is a genuine instrument.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>His collaborations. Every artist he works with sounds better for having been in the room with him.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            4. Pimmie
          </h2>
          
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">BITTERSWEET was a quiet masterpiece that the mainstream has not fully processed yet. In 2026, that changes. Her combination of vocal precision and production instinct is genuinely rare, and the OVO/Republic infrastructure behind her knows exactly what they have. This is the year she gets her flowers.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>Her production credits. She is making some of the best R&B beats in the game and choosing to put her voice on them.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            5. Gabriel Jacoby
          </h2>
          
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">Southern soul is a tradition that rarely produces artists who can both honor and extend it. Gabriel Jacoby does both. His smoky falsetto and groove-driven production feel simultaneously classic and urgent. The South Carolina native is one of the most complete artists in contemporary R&B, and Red Dirt Gospel was just the opening statement.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>The live show. Southern soul has always been a visceral genre - Jacoby brings that energy to every performance.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            6. Amindi
          </h2>
          
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">The Ugandan-British artist has been one of the most compelling voices in alternative R&B for several years. 2026 feels like the year her sound finds its largest audience. Her blend of East African musical traditions with contemporary R&B production is unlike anything else in the genre right now. Once you hear it, it is hard to unhear.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>Her approach to production. She builds sonic worlds, not just songs.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            7. Fana Hues
          </h2>
          
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">Few artists working today have Fana Hues's ability to move between delicate vulnerability and fierce directness without ever feeling inconsistent. Her voice is both instrument and statement. She has been one of R&B's best-kept secrets for too long, and 2026 is the year the secret gets out.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>The control she exercises at the quietest moments. That is where the real technique lives.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            8. Leven Kali
          </h2>
                  <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Leven_Kali_2022.jpg/400px-Leven_Kali_2022.jpg" alt="Leven Kali" credit="Leven Kali - Photo: Wikimedia Commons" />

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">Leven Kali has been a cornerstone of the neo-soul underground for years as a collaborator and session musician. When he steps fully into the spotlight as a lead artist - which 2026 looks set to deliver - the audience he has already built will know exactly what they are getting. Soft Landing from last year was the mission statement.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>His guitar work. He is one of the few vocalists working today who is equally accomplished as an instrumentalist.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            9. Ravyn Lenae
          </h2>
                  <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ravyn_Lenae_2023.jpg/400px-Ravyn_Lenae_2023.jpg" alt="Ravyn Lenae" credit="Ravyn Lenae - Photo: Wikimedia Commons" />

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">After years of building one of the most critically admired catalogs in independent R&B, Ravyn Lenae enters 2026 with real momentum. Her writing is literary in a way that almost no other R&B artist attempts - she builds entire emotional architectures in three-minute songs. She is the kind of artist other artists listen to for education.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>The lyrics. Read them separately from the music. They hold up on their own.</p>
        </section>
        <section className="mb-12 pb-10 border-b border-[#e3d1b8]/10 last:border-b-0">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-4" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            10. Masego
          </h2>
                  <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Masego_2018.jpg/400px-Masego_2018.jpg" alt="Masego performing" credit="Masego - Photo: Wikimedia Commons" />

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">Masego has been making jazz-influenced R&B that defies easy category for years. In 2026, the genre has finally caught up to where he has always been. His saxophone is as expressive as his voice, and his live show is one of the best in the genre. If you have slept on him, this is your wake-up call.</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.8]"><span className="font-oswald text-[10px] tracking-[0.2em] uppercase text-[#e3d1b8]/30 mr-2">Watch for:</span>The saxophone. Specifically, how he uses it as a vocal counterpart. It is a masterclass.</p>
        </section>
        <div className="mt-16 pt-8 border-t border-[#e3d1b8]/10">
          <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 font-inter text-[12px] text-[#e3d1b8]/40 hover:text-[#e3d1b8]/70 transition-colors bg-transparent border-none cursor-pointer p-0">
            <IconArrow />
            Back to home
          </button>
        </div>

      </article>

      <Footer />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
