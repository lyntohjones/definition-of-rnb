import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const POST = {
  slug: 'afrobeats-rnb-transatlantic-love-story',
  date: 'November 5, 2025',
  category: 'Culture',
  readTime: '5 min read',
  title: 'Afrobeats and R&B: How Two Genres Became One Sound',
  subtitle: 'From Wizkid\'s falsetto to Odeal\'s baritone â why the line between Afrobeats and R&B has never been thinner.',
  author: 'The Definition of R&B Editorial Team',
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: POST.title,
  description: POST.subtitle,
  datePublished: '2025-11-05',
  dateModified: '2025-11-05',
  author: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  publisher: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  url: 'https://definitionofrnb.com/blog/afrobeats-rnb-transatlantic-love-story',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://definitionofrnb.com/blog/afrobeats-rnb-transatlantic-love-story' },
  keywords: 'Afrobeats R&B fusion, Afrobeats influence, R&B culture, Wizkid, Tems, Odeal, African R&B',
}

const IconArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default function BlogAfrobeatsRnb() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title={POST.title}
        description={POST.subtitle}
        canonical="https://definitionofrnb.com/blog/afrobeats-rnb-transatlantic-love-story"
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
          Somewhere between Lagos, London, and Los Angeles, a border dissolved. It did not happen with an announcement or a press release â it happened the way most important shifts in music happen, quietly, in the space between the beat and the voice. Afrobeats and R&B have been moving toward each other for a decade. In 2025, they arrived at the same address.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The Story</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>

        <section className="mb-10">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            Where It Started
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            You can trace the conversation back to Wizkid's Made in Lagos in 2020 â an album that did not ask Western audiences to accept Afrobeats on its own terms so much as it revealed that those terms had always been intimately connected to soul and R&B. The way Wizkid phrases a melody, the vulnerability in his falsetto, the space he leaves in a production â these are not Afrobeats aesthetics alone. They are R&B aesthetics refracted through a different cultural prism.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            Tems deepened the conversation. Her collaboration with Future, "Wait for U," reached audiences who had never consciously listened to Afrobeats, but they were not confused by it. They recognized the emotional grammar immediately because it was the same grammar they grew up learning through Destiny's Child and Aaliyah. The delivery was different. The feeling was the same.
          </p>
        </section>

        <blockquote className="border-l-4 border-[#e3d1b8]/30 pl-6 py-2 my-10">
          <p className="font-oswald text-[#e3d1b8]/70 italic leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
            "The best music has never respected the borders we draw around it. Afrobeats and R&B are just the latest proof."
          </p>
        </blockquote>

        <section className="mb-10">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            The New Architects
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            In 2025, the artists doing the most interesting work in this space are the ones who grew up with both traditions simultaneously. Odeal is the clearest example. Born in the UK to Nigerian parents, he did not have to choose between Afrobeats and R&B as a child â he absorbed both as a single, unified vocabulary. His project The Summer That Saved Me does not feel like a fusion experiment. It feels like what happens when you have the freedom to make music from your whole self.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            This is the crucial distinction: the artists who are making this convergence feel inevitable are not code-switching between two genres. They are making one music from two traditions. The rhythm and the melody, the percussion and the vulnerability â these elements were never as separate as the industry's genre categories suggested.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            Leon Thomas's contribution to this moment â as both an artist and a collaborator on records by SZA, Odeal, and others â exemplifies how fluid the best musicians are moving through this space. His production sensibility absorbs Afrobeats rhythmic structures without making them feel decorative or borrowed. They are load-bearing.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
            What It Means for R&B
          </h2>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            For American R&B, the Afrobeats influence has done something quietly radical: it has reintroduced rhythm as an equal partner to harmony. The genre has at various points in its history tilted too far toward lush production and away from groove. Afrobeats, with its insistence on a persistent, almost hypnotic rhythmic foundation, has pulled R&B back toward its body.
          </p>
          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            For Afrobeats, the R&B influence has provided an emotional vocabulary for vulnerability and interiority that complements the genre's celebratory, communal energy. The result, at its best, is music that makes you want to dance and makes you want to sit quietly and feel something at the same time. That is a rare and valuable quality. We expect it to define the next decade of both genres.
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
