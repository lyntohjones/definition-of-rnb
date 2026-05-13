import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const POST = {
  slug: 'best-rnb-albums-2025',
  date: 'December 20, 2025',
  category: 'Editorial',
  readTime: '6 min read',
  title: 'The Best R&B Albums of 2025: Our Year-End Picks',
  subtitle: 'From quiet debuts to long-awaited comebacks, 2025 was a year that reminded us why R&B endures.',
  author: 'The Definition of R&B Editorial Team',
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: POST.title,
  description: POST.subtitle,
  datePublished: '2025-12-20',
  dateModified: '2025-12-20',
  author: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  publisher: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  url: 'https://definitionofrnb.com/blog/best-rnb-albums-2025',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://definitionofrnb.com/blog/best-rnb-albums-2025' },
  keywords: 'best R&B albums 2025, R&B year end list, top R&B music 2025, neo-soul albums',
}

const IconArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function BlogBestAlbums2025() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title={POST.title}
        description={POST.subtitle}
        canonical="https://definitionofrnb.com/blog/best-rnb-albums-2025"
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

      <article className="max-w[760px] mx-auto px-5 sm:px-6 py-12">

        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/75 leading-[1.9] mb-8">
          Every December we sit down and ask the same question: did this genre move? In 2025, the answer was an unambiguous yes. R&B continued its quiet evolution â pulling from gospel, Afrobeats, indie, and electronic music while never losing the emotional core that makes it distinct. These are the albums and projects that stayed in our rotation all year and deserve to define how we remember 2025.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The List</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>

        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            1. Aqyila â <span className="text-[#e3d1b8]/60">Falling Into Place</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Album Â· March 2025 Â· Independent</p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">
            The year's most complete debut. Aqyila did not arrive asking for patience â she arrived fully formed. Eleven tracks of gospel-warm, Caribbean-tinged neo-soul that feel as cohesive as albums that take decades to develop. "Bloom" is the easy standout, but the album's second half â especially the run from "River Run" through the closing title track â reveals an artist who thinks in album-length statements, not singles. The production, largely self-directed, refuses to overwhelm her voice. This is the rare debut that you feel immediately but only fully understand on the fifth listen.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            2. Odeal â <span className="text-[#e3d1b8]/60">The Summer That Saved Me</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Project Â· October 2024 Â· Independent</p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">
            Billboard's African Rookie of the Year built something genuinely new this year. Odeal's British-Nigerian perspective refuses to be categorized as simply Afrobeats or simply R&B â it sits at the intersection where both genres are most honest. "Miami," featuring Leon Thomas, became one of the most replayed songs in our office. His baritone carries a warmth that makes confessional lyrics feel like conversation rather than performance. The Summer That Saved Me is proof that the most exciting R&B in 2025 is being made by artists who refuse to draw borders around themselves.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            3. Pimmie â <span className="text-[#e3d1b8]/60">BITTEDRSWEET EP</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">EP Â· November 2024 Â· OVO / Republic</p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">
            If you slept on BITTERSWEET when it dropped, this list is your correction. Pimmie â the Houston singer and mixing engineer who appeared on Drake and PARTYNEXTDOOR's joint album â stepped fully into her own light and did not look back. These are late-night ballads built for the 3am version of every feeling: the love you cannot name, the loss you cannot process, the joy that hurts a little because you know it will end. Her production ear is as sharp as her vocals. "PIMMIE'S DILEMMA" alone justifies every award conversation she belongs in.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            4. EJ Jones â <span className="text-[#e3d1b8]/60">Singles Run</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Singles Â· 2025 Â· Independent</p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">
            EJ Jones did not release an album in 2025. What he released was a series of singles that collectively feel like the most coherent body of work from any artist this year. "Gas Station Love" set the tone in January â stripped-back, voice-forward, channeling Bobby Womack without impersonating him â and he sustained that standard across every subsequent drop. There is an argument that his singles run represents the most accomplished songwriting of the year in the classic soul tradition. We are already anticipating what a full album would look like.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            5. Gabriel Jacoby â <span className="text-[#e3d1b8]/60">Southern Soul Singles</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Singles Â· 2024â2025 Â· Pulse Records</p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">
            The South Carolina native arrived with "The One" and immediately sounded like an artist who had been making records for 30 years. Smoky Southern falsetto, deep guitar grooves, funky horns â the kind of sound that does not chase trends because it exists outside of them. His Billboard R&B Fresh Pick designation was not a discovery so much as a confirmation. By the end of 2025, Gabriel Jacoby had become one of the names that every serious R&B conversation had to include.
          </p>
        </section>

        <blockquote className="border-l-4 border-[#e3d1b8]/30 pl-6 py-2 my-10">
          <p className="font-oswald text-[#e3d1b8]/70 italic leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
            "The best R&B of 2025 shared one quality: it sounded like it could only have been made by the person who made it."
          </p>
        </blockquote>

        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            Honourable Mentions
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-4">
            JayDon's "Lullaby" featuring Usher made the case that R&B has a generation ready to carry the torch. At 18, his vocal control on that record belongs in a different conversation entirely â the conversation about artists who arrive without needing to grow into themselves. We also want to acknowledge the wave of independent artists who released work through streaming platforms alone and found audiences who genuinely cared. The infrastructure of R&B discovery is changing, and 2025 was the year that became undeniable.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            What made 2025 exceptional was not any single album but the collective weight of the year's output. The genre is not in crisis. It is in conversation â with itself, with its history, and with everyone listening. We cannot wait to hear what 2026 brings.
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
