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
  subtitle: "From Wizkid's falsetto to Odeal's baritone - why the line between Afrobeats and R&B has never been thinner.",
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
  keywords: 'Afrobeats R&B fusion, Afrobeats influence, Wizkid, Tems, Odeal, African R&B',
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
          <div className="flex flew-wrap items-center gap-3 mb-5">
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
          Here is the thing - the conversation about whether Afrobeats and R&B are merging or have already merged is kind of over. They merged. What we are doing now is figuring out what that new thing actually is, and who is making it best.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The Story</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          How We Got Here
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          You can trace the moment things started to blur pretty clearly. Wizkid's Made in Lagos in 2020 was a pivotal record. Not because it was his debut or because it was commercially massive - but because it made something undeniable. The emotional vocabulary of that album, the way he phrases a melody, the vulnerability in his falsetto, the breathing room in the production - those are R&B instincts. They just grew up in Lagos instead of Atlanta.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          When Western audiences heard that album, they were not confused by it. They recognized the feeling immediately because it was the same grammar they had been learning from Aaliyah and Destiny's Child for twenty years. The delivery was different. The feeling was identical.
        </p>
        </section>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          Wizkid: The Bridge Builder
        </h2>
        <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Wizkid_at_The_Forum_in_Inglewood%2C_Los_Angeles_%28cropped%29.jpg/400px-Wizkid_at_The_Forum_in_Inglewood%2C_Los_Angeles_%28cropped%29.jpg" alt="Wizkid performing" credit="Wizkid live - Photo: Wikimedia Commons" />
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Wizkid did not set out to bridge genres. He just made the music he hears in his head. But the result has been that he normalized the idea of Afrobeats and R&B as the same emotional space. His collaborations with Skepta, Drake, and Beyonce were not awkward cross-genre experiments. They sounded natural because the foundation was always there.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Essence, his track with Tems, might be the single best example of what this convergence sounds like at its peak. It is an Afrobeats record. It is an R&B record. It is both, completely, at the same time.
        </p>
        </section>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          Tems: Making It Sound Effortless
        </h2>
        <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tems_at_the_Grammy_Awards_%282023%29.jpg/400px-Tems_at_the_Grammy_Awards_%282023%29.jpg" alt="Tems at the Grammy Awards" credit="Tems at the 2023 Grammy Awards - Photo: Wikimedia Commons" />
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Tems is maybe the clearest case study. "Wait for U" with Future reached listeners who had never consciously heard an Afrobeats record before. But they were not confused. They understood the emotional content immediately - because Tems delivers it in a language that is fundamentally connected to soul and R&B.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Her voice carries a quality of controlled ache that belongs to the best R&B singers. The Nigerian production context and the Afrobeats rhythmic framework it rides on are almost secondary to that. She leads with feeling. Genre follows.
        </p>
        </section>
        <blockquote className="border-l-4 border-[#e3d1b8]/30 pl-6 py-2 my-10">
          <p className="font-oswald text-[#e3d1b8]/70 italic leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
            &ldquo;The best music has never cared about the borders we draw around it. Afrobeats and R&B are just the latest proof.&rdquo;
          </p>
        </blockquote>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          Odeal: The New Architecture
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Odeal is the most interesting case of what happens in the second generation. Born in the UK to Nigerian parents, he did not have to choose between Afrobeats and R&B growing up - he absorbed both at the same time. The Summer That Saved Me, his 2025 project, sounds like what happens when those two traditions have been fully integrated by someone who never thought of them as separate.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          His baritone sits in a register that is unusual for either genre. The track "Miami," featuring Leon Thomas, became one of the most-replayed songs in our rotation this year. It is warm and intimate and rhythmically alive in a way that does not belong to one tradition. It just belongs to him.
        </p>
        </section>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          What Comes Next
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The interesting question is not whether this convergence is real - it obviously is - but what the next generation does with it. The artists who are 18 or 19 right now grew up in a world where Made in Lagos and SZA's SOS came out in the same era. For them, there is no merger to acknowledge. It is just music.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          That might produce something we cannot quite predict yet. But if the current evidence is anything to go by, it is going to sound very, very good.
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
