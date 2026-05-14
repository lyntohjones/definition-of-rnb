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
          Look, 2025 did not disappoint. Every December we ask the same question: did the genre move this year? This year the answer is yes, clearly, in multiple directions at once. Here are the records that stayed in our rotation and deserve to define how we remember 2025 in R&B.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The List</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>
        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            1. Aqyila &mdash; <span className="text-[#e3d1b8]/60">Falling Into Place</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Album &middot; March 2025 &middot; Independent</p>
                  <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The year's most complete debut, and it is not particularly close. Aqyila did not arrive asking for patience - she arrived fully formed. Eleven tracks of gospel-warm, Caribbean-tinged neo-soul that feel as cohesive as albums that take decades to develop. The production refuses to overwhelm her voice, which is the smartest decision on the record. You can hear every breath she takes.
        </p>
        <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Aqyila_2025.jpg/400px-Aqyila_2025.jpg" alt="Aqyila" credit="Aqyila - Photo: Wikimedia Commons" />
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          "Bloom" is the easy standout. But the album's second half - especially the run from "River Run" through the closing title track - is where you realize you are dealing with someone who thinks in album-length statements, not singles. Listen to it front to back at least twice before you decide.
        </p>

        </section>
        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            2. Odeal &mdash; <span className="text-[#e3d1b8]/60">The Summer That Saved Me</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Project &middot; October 2025 &middot; Independent</p>
                  <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Billboard's African Rookie of the Year built something genuinely new in 2025. Odeal's British-Nigerian perspective refuses to be categorized as simply Afrobeats or simply R&B - it sits exactly at the intersection where both genres are most honest about what they are.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          "Miami" featuring Leon Thomas became one of the most-replayed songs in our office. His baritone carries a warmth that makes confessional lyrics feel like conversation. This is the sound of the transatlantic R&B convergence at its best.
        </p>

        </section>
        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            3. Gabriel Jacoby &mdash; <span className="text-[#e3d1b8]/60">Red Dirt Gospel</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Album &middot; June 2025 &middot; Independent</p>
                  <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The South Carolina native made the best Southern soul album of the year without announcing it as such. Red Dirt Gospel is rooted in church and field and late nights, and it sounds like all three simultaneously. Jacoby's smoky falsetto is not technically perfect - it is emotionally precise, which is much harder.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The production keeps things sparse. Every note Jacoby sings has room to breathe. "Carolina" is the song we kept coming back to, but the whole project is airtight.
        </p>

        </section>
        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            4. Pimmie &mdash; <span className="text-[#e3d1b8]/60">BITTERSWEET</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Album &middot; September 2025 &middot; OVO/Republic</p>
                  <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Pimmie's debut did not get the mainstream attention it deserved when it dropped, and that is the story of every year in R&B. BITTERSWEET is a strikingly self-assured record from a vocalist who also produces most of her own material, which shows.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The combination of vocal precision and production instinct on this album is genuinely rare. She knows exactly what she wants every track to feel like, and she knows how to build toward it. This one will get its flowers eventually.
        </p>

        </section>
        <section className="mb-12">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            5. Leven Kali &mdash; <span className="text-[#e3d1b8]/60">Soft Landing</span>
          </h2>
          <p className="font-inter text-[11px] text-[#e3d1b8]/35 uppercase tracking-[0.2em] mb-4">Album &middot; April 2025 &middot; Independent</p>
                  <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Leven Kali has been a cornerstone of the neo-soul underground for years as a collaborator, session musician, and co-writer on records across the genre. Soft Landing is him stepping fully into the center, and the result is everything his collaborators already knew he was capable of.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          He plays most of the instruments himself. His guitar work alone is worth the price of admission. But it is the way his vocal and instrumental instincts work together that makes this a fully realized creative statement rather than a showcase.
        </p>

        </section>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The Takeaway</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          What 2025 Actually Said About R&B
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The through-line across every album on this list is independence. Four of the five records here were either self-released or released on small independent labels. The genre's most exciting work is not coming from major label rollouts with radio campaigns. It is coming from artists who are building their own audiences, one honest record at a time.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          R&B has always been at its best when it is allowed to be emotionally direct without apology. 2025 delivered that in abundance. We cannot wait to see what 2026 brings.
        </p>
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
