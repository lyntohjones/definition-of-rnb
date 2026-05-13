import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const POST = {
  slug: 'falsetto-renaissance-rnb',
  date: 'September 18, 2025',
  category: 'Culture',
  readTime: '4 min read',
  title: 'The Falsetto Renaissance: Why R&B Singers Are Going Higher',
  subtitle: 'From Maxwell to JayDon, the falsetto has always been R&B\'s most vulnerable instrument. Right now it is everywhere â and that is not an accident.',
  author: 'The Definition of R&B Editorial Team',
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: POST.title,
  description: POST.subtitle,
  datePublished: '2025-09-18',
  dateModified: '2025-09-18',
  author: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  publisher: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  url: 'https://definitionofrnb.com/blog/falsetto-renaissance-rnb',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://definitionofrnb.com/blog/falsetto-renaissance-rnb' },
  keywords: 'falsetto R&B, R&B vocal technique, JayDon, Maxwell, neo-soul, R&B culture, male R&B singers',
}

const IconArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function BlogFalsettoRenaissance() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title={POST.title}
        description={POST.subtitle}
        canonical="https://definitionofrnb.com/blog/falsetto-renaissance-rnb"
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
          Something has shifted in the upper register. If you have been paying attention to R&B over the last two years, you will have noticed it â a return to the falsetto, not as a trick or a flourish but as a primary voice. Artists are going higher, staying higher, and finding that the vulnerability up there is exactly what the moment requires.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The Tradition</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>

        <section className="mb-10">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            The Long History of Going High
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            The falsetto has always been R&B's most emotionally exposed technique. When Curtis Mayfield sang in falsetto, it was not because he lacked the range to go lower â it was because the higher register carried a specific quality of light and longing that the chest voice could not access. Al Green understood this. Marvin Gaye built an entire aesthetic around it. The falsetto in soul and R&B is the sound of a man choosing to be fragile in public, which has always been a radical act.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            Maxwell brought it into the neo-soul era with an almost otherworldly control. Prince weaponized it. In the 2000s, R. Kelly's vocal acrobatics, whatever else we must say about him, demonstrated the technique's commercial power. The falsetto fell somewhat out of fashion in the era of trap-inflected R&B, where a more spoken, lower-register delivery became dominant. What we are witnessing now is a correction.
          </p>
        </section>

        <blockquote className="border-l-4 border-[#e3d1b8]/30 pl-6 py-2 my-10">
          <p className="font-oswald text-[#e3d1b8]/70 italic leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
            "The falsetto is not the sound of weakness. It is the sound of a voice stripped of armour â and right now, R&B wants that honesty."
          </p>
        </blockquote>

        <section className="mb-10">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            The New Generation
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            JayDon, who at 18 released "Lullaby" featuring Usher, is the most striking recent example of an artist who leads with falsetto not as a choice but as his natural voice. There is no moment on that record where he drops into the chest register for credibility or to demonstrate range. The falsetto is the voice. The intimacy is the point. Usher â who has himself been a master of strategic falsetto deployment throughout his career â sounds like he recognizes what he is hearing: a peer.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            Gabriel Jacoby brings a different quality to the technique â a smoky, slightly strained falsetto that connects directly to the Southern soul tradition. His is not the crystalline control of a classically trained vocalist. It is the falsetto of field recordings and church choirs, of emotion running slightly ahead of technical precision. That imperfection is what makes it feel so alive.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            Aqyila, approaching the technique from a different angle as a female artist, uses her upper register to access a quality of pleading and resilience simultaneously. On "Bloom," her voice climbs at the exact moment the lyric requires the most exposure. This is not coincidence. It is craft.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            Why Now?
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            The return of the falsetto is not separate from broader cultural shifts in how vulnerability is understood, particularly among men. The emotional directness of this generation of artists â their willingness to make music about grief, longing, confusion, and tenderness without ironic distance â has found its vocal expression in the upper register.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            The falsetto is also, simply, a beautiful sound when deployed by someone who has genuinely mastered it. At a moment when so much music is built to disappear into algorithmic playlists, the falsetto demands presence. You cannot ignore it. You cannot scroll past it. It catches you the way that only something irreducibly human can. That may be the deepest reason for its return.
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
