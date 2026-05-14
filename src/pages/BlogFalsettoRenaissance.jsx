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
  subtitle: "From Maxwell to JayDon, the falsetto has always been R&B's most vulnerable instrument. Right now it is everywhere - and that is not an accident.",
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
  keywords: 'falsetto R&B, R&B vocal technique, JayDon, Maxwell, neo-soul, R&B culture',
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
          Okay, have you noticed what is happening? If you have been listening to R&B over the past two years - really listening - something has shifted. Singers are going higher. Not as a party trick or a big note at the end of a chorus. As a primary voice. As the whole thing. The falsetto is back, and this time it is not leaving.
        </p>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The History</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          It Was Always There
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The falsetto is not new to R&B. Curtis Mayfield built a career on it. Al Green made it spiritual. Marvin Gaye used it to say things the chest voice could not. In soul music, the falsetto has always meant something specific - it is the sound of someone choosing to be emotionally naked in public. That takes nerve.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Maxwell brought that quality into the neo-soul era with a control that felt almost supernatural. Prince turned it into a weapon. The falsetto fell a little out of fashion during the trap-R&B wave of the 2010s, when everyone was speaking low and leaning back. What we are seeing now is the correction.
        </p>
        </section>
        <blockquote className="border-l-4 border-[#e3d1b8]/30 pl-6 py-2 my-10">
          <p className="font-oswald text-[#e3d1b8]/70 italic leading-relaxed" style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
            &ldquo;Going falsetto is not about hitting a high note. It is about choosing vulnerability over armor. Right now, R&B wants that honesty.&rdquo;
          </p>
        </blockquote>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">The Artists</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          JayDon: The Kid Who Never Came Down
        </h2>
        <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/JayDon_2024.jpg/400px-JayDon_2024.jpg" alt="JayDon performing" credit="JayDon live - Photo: Wikimedia Commons" />
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          JayDon was 18 when he released "Lullaby" featuring Usher. What makes it remarkable is not the collaboration - it is that there is not a single moment on that record where he drops into his chest voice to prove something. The falsetto is just his voice. The intimacy is the whole point. You can hear Usher recognizing what he is in the room with.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          He is not performing vulnerability. He is just being it. That is harder than it sounds.
        </p>
        </section>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          Daniel Caesar: The Blueprint
        </h2>
        <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Daniel_Caesar_performs_at_Pitchfork_Music_Festival_2019_%2848283073897%29_%28cropped%29.jpg/400px-Daniel_Caesar_performs_at_Pitchfork_Music_Festival_2019_%2848283073897%29_%28cropped%29.jpg" alt="Daniel Caesar performing at Pitchfork Festival" credit="Daniel Caesar at Pitchfork Music Festival - Photo: Wikimedia Commons" />
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The Toronto singer has been the quiet architect of this movement for years. His voice sits in a zone that is not quite chest and not quite falsetto - it lives in the mix between them, which gives him this effortless quality that sounds like he is not trying at all. He is. That is the craft. Albums like Freudian and Case Study 01 showed a generation of R&B singers that you could build an entire aesthetic around restraint and high register emotion.
        </p>
        </section>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          Gabriel Jacoby: The Soul Tradition
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Gabriel Jacoby brings something different to the table. His falsetto is smoky, a little rough around the edges - connecting directly to the Southern soul tradition where a slightly strained note means the emotion is real. It is the sound of church choirs and late nights. That imperfection is the whole point.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          He is not trying to be technically perfect. He is trying to make you feel something. Most of the time, he succeeds.
        </p>
        </section>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          Aqyila: The Other Side of High
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          Aqyila approaches the upper register from a different angle entirely. As a female artist, her falsetto is not about gender vulnerability in the same way - it is about accessing a specific emotional frequency. On "Bloom," her voice climbs exactly when the lyric needs the most exposure. That is not an accident. That is someone who understands how vocal placement and emotional content work together.
        </p>
        </section>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          PinkPantheress: The Electronic Route
        </h2>
        <ArtistPhoto src="https://upload.wikimedia.org/wikipedia/commons/1/10/PinkPantheress%2C_2022.jpg" alt="PinkPantheress" credit="PinkPantheress - Photo: Wikimedia Commons" />
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          PinkPantheress takes the falsetto somewhere unexpected - into drum and bass and hyperpop-adjacent production that has nothing to do with the traditional soul contexts where this technique lives. But her upper register delivery carries the same emotional weight. It just hits differently at 170bpm. She is proof that this is not a genre-specific trend. Something more fundamental is going on.
        </p>
        </section>

        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">Why Now</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>
        <section className="mb-10">
        <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}>
          It Is Not a Coincidence
        </h2>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          The falsetto trend does not exist in isolation. It lines up with a broader cultural shift - particularly among young male artists - toward emotional directness. This generation is not doing ironic distance. They are doing grief, longing, and tenderness without apology. The falsetto is just the vocal expression of that.
        </p>
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
          There is also a simpler answer: it is a beautiful sound when someone has actually mastered it. In an era where music is engineered to disappear into playlists, the falsetto demands attention. You cannot scroll past it. It catches you because it sounds irreducibly human. That might be the most important thing about it right now.
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
