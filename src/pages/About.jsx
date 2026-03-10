import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const ABOUT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://definitionofrnb.com/about',
  url: 'https://definitionofrnb.com/about',
  name: 'About Definition of R&B',
  description: 'Definition of R&B is a music platform dedicated to documenting, discovering, and celebrating Rhythm and Blues across generations.',
  isPartOf: { '@id': 'https://definitionofrnb.com/#website' },
  about: { '@id': 'https://definitionofrnb.com/#organization' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',  item: 'https://definitionofrnb.com/' },
      { '@type': 'ListItem', position: 2, name: 'About', item: 'https://definitionofrnb.com/about' },
    ],
  },
}

const COVERAGE = [
  'New R&B artist features',
  'Song and album reviews',
  'Classic R&B throwbacks',
  'Industry commentary',
  'Interviews with emerging talent',
  'Cultural conversations around R&B music',
]

const IconDot = () => (
  <svg viewBox="0 0 8 8" className="w-2 h-2 flex-shrink-0 mt-[5px]">
    <circle cx="4" cy="4" r="3" fill="#e3d1b8" fillOpacity="0.4" />
  </svg>
)

export default function About() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title="About Definition of R&B"
        description="Definition of R&B is a music platform dedicated to documenting, discovering, and celebrating Rhythm and Blues across generations — from classic soul to modern R&B voices."
        canonical="https://definitionofrnb.com/about"
        type="website"
        jsonLd={ABOUT_JSON_LD}
      />
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      {/* ── Page header ── */}
      <header className="w-full bg-[#3d1a22] border-b border-[#e3d1b8]/10 py-14 px-5">
        <div className="max-w-screen-xl mx-auto">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="font-inter text-[11px] text-[#e3d1b8]/40 hover:text-[#e3d1b8]/70 transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              Home
            </button>
            <span className="text-[#e3d1b8]/20 text-[11px]">/</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/40">About</span>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3d1b8]/40" />
            <span className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/40 uppercase">
              The Platform
            </span>
          </div>

          <h1
            className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            About Definition of R&B
          </h1>

          <p className="font-inter text-[14px] text-[#e3d1b8]/55 max-w-[620px] leading-[1.8]">
            A music platform dedicated to documenting, discovering, and celebrating Rhythm and Blues across generations.
          </p>
        </div>
      </header>

      {/* ── Main content ── */}
      <main className="max-w-[820px] mx-auto px-5 sm:px-6 py-14 space-y-10">

        {/* Opening */}
        <section>
          <p className="font-inter text-[15px] text-[#e3d1b8]/75 leading-[1.95]">
            From classic soul records to modern R&B voices, the mission of Definition of R&B is simple. Highlight the sound, the artists, and the stories that keep the genre alive.
          </p>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/20 uppercase">◆</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>

        {/* Why it exists */}
        <section>
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}
          >
            Why It Exists
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.95]">
            R&B has shaped global music culture for decades. It influenced hip hop, pop, gospel, and even modern electronic music. Yet many emerging R&B artists struggle to get the recognition they deserve. Definition of R&B exists to change that.
          </p>
        </section>

        {/* What we cover */}
        <section className="border border-[#e3d1b8]/10 bg-[#3d1a22] px-7 py-8">
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-3"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
          >
            What We Cover
          </h2>
          <p className="font-inter text-[14px] text-[#e3d1b8]/60 leading-[1.85] mb-6">
            The platform features artist spotlights, song reviews, cultural commentary, and curated music discoveries focused entirely on the R&B genre. Readers can expect coverage that includes:
          </p>
          <ul className="space-y-3">
            {COVERAGE.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <IconDot />
                <span className="font-inter text-[13px] text-[#e3d1b8]/65 leading-[1.7]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Next generation */}
        <section>
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}
          >
            The Next Generation
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.95]">
            The goal is not only to celebrate established legends, but to introduce listeners to the next generation of R&B voices shaping the future of the genre. Definition of R&B is also a place where independent artists can be discovered. Through editorial features and curated posts, the platform highlights music that deserves attention from fans, media, and the industry.
          </p>
        </section>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#e3d1b8]/30 pl-6 py-2">
          <p
            className="font-oswald text-[#e3d1b8]/65 italic leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}
          >
            "R&B has always been about emotion, storytelling, and authenticity. Definition of R&B exists to keep that spirit alive."
          </p>
        </blockquote>

        {/* Closing */}
        <section>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.95]">
            If you are an R&B artist with new music, a producer creating soulful sounds, or a fan who lives for the genre — Definition of R&B is where the culture continues.
          </p>
        </section>

        {/* CTA row */}
        <div className="border-t border-[#e3d1b8]/10 pt-8 flex flex-wrap gap-3">
          <button
            onClick={() => setShowSubmit(true)}
            className="bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-white transition-colors"
          >
            Submit Your Music
          </button>
          <button
            onClick={() => { navigate('/promote'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="border border-[#e3d1b8]/40 text-[#e3d1b8] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#e3d1b8]/10 transition-colors"
          >
            Get Featured
          </button>
          <a
            href="mailto:info@definitionofrnb.com"
            className="border border-[#e3d1b8]/20 text-[#e3d1b8]/60 font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#e3d1b8]/10 hover:text-[#e3d1b8] transition-colors no-underline"
          >
            Contact Us
          </a>
        </div>
      </main>

      <Footer onSubmitClick={() => setShowSubmit(true)} />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
