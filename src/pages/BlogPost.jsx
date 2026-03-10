import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'

/* ── Arrow icon ── */
const IconArrow = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── Blog post data ── */
const POST = {
  slug: 'welcome-to-the-new-definition-of-rnb',
  date: 'March 9, 2026',
  category: 'Site Update',
  readTime: '4 min read',
  title: 'Welcome to the New Definition of R&B: Streamlined, Mobile-Ready, and Built for Artists',
  subtitle: 'We rebuilt the platform from the ground up — here is everything that changed and what it means for artists and fans.',
  author: 'The Definition of R&B Editorial Team',
}

export default function BlogPost() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      {/* ── Article header ── */}
      <header className="w-full bg-[#3d1a22] border-b border-[#e3d1b8]/10 py-12 px-5">
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
            <span className="font-inter text-[11px] text-[#e3d1b8]/40">Site Update</span>
          </div>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-oswald text-[9px] tracking-[0.3em] uppercase bg-[#e3d1b8]/10 border border-[#e3d1b8]/20 text-[#e3d1b8]/70 px-3 py-[4px]">
              {POST.category}
            </span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/30">{POST.date}</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/20">·</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/30">{POST.readTime}</span>
          </div>

          {/* Title */}
          <h1
            className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight mb-4 max-w-[820px]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}
          >
            {POST.title}
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-[14px] text-[#e3d1b8]/50 leading-[1.8] max-w-[640px]">
            {POST.subtitle}
          </p>

          {/* Author */}
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

      {/* ── Article body ── */}
      <article className="max-w-[760px] mx-auto px-5 sm:px-6 py-12">

        {/* Opening paragraph */}
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/75 leading-[1.9] mb-8">
          At <strong className="text-[#e3d1b8]/90 font-semibold">The Definition of R&B</strong>, our mission has always been simple: to be the definitive source for R&B culture, artist discovery, and honest music criticism. As the genre continues to evolve — blending with Afrobeats, neo-soul, gospel, and alternative sounds — we knew our platform needed to evolve with it.
        </p>

        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/75 leading-[1.9] mb-12">
          Today, we are thrilled to announce a major update to our website. We have rebuilt the experience from the ground up to make discovering your next favourite artist easier, faster, and more beautiful than ever.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          <span className="font-oswald text-[9px] tracking-[0.4em] text-[#e3d1b8]/25 uppercase">Update</span>
          <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
        </div>

        {/* Section 1 */}
        <section className="mb-12">
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}
          >
            A Streamlined, Mobile-First Experience
          </h2>

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            We know that the majority of our community discovers music on their phones. That is why our biggest priority for this update was completely overhauling the mobile experience.
          </p>

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            The most noticeable change is to our <strong className="text-[#e3d1b8]/85 font-semibold">Artist of the Week</strong> hero section. Previously, our desktop-first design meant that artist portraits were sometimes cut off on smaller screens. We have completely redesigned this section so that on mobile, the featured artist takes over the full width of your screen in a stunning portrait, fading seamlessly into their story, key tracks, and accolades below.
          </p>

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            We have also decluttered our navigation. By trimming away the excess, we have focused the site on what matters most: <strong className="text-[#e3d1b8]/85 font-semibold">Artists</strong>, <strong className="text-[#e3d1b8]/85 font-semibold">Reviews</strong>, and <strong className="text-[#e3d1b8]/85 font-semibold">Submissions</strong>. Whether you are scrolling through our Up & Coming grid or reading our latest editorial reviews, the experience is now frictionless and entirely focused on the music.
          </p>
        </section>

        {/* Pull quote */}
        <blockquote className="border-l-4 border-[#e3d1b8]/30 pl-6 py-2 my-10">
          <p className="font-oswald text-[#e3d1b8]/70 italic leading-relaxed"
            style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
            "We wanted every visitor — whether they're on a phone at 2am or a desktop at the office — to feel the weight of the music we feature."
          </p>
        </blockquote>

        {/* Section 2 */}
        <section className="mb-12">
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}
          >
            Introducing the Artist of the Week Promotion
          </h2>

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            As an independent platform, we receive hundreds of submissions every month from incredibly talented artists trying to break through the noise. While we will always review organic submissions, we wanted to create a dedicated, guaranteed avenue for artists and labels who are ready to invest in a major promotional push.
          </p>

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-8">
            That is why we are officially launching our <strong className="text-[#e3d1b8]/85 font-semibold">Artist of the Week Promotion</strong> packages — three tiers designed to match where you are in your rollout.
          </p>

          {/* Tier cards */}
          <div className="space-y-4 mb-8">
            {[
              {
                name: 'Standard Feature — $150',
                desc: 'A 7-day takeover of our homepage hero section. Your photo, bio, and key tracks become the first thing every visitor sees when they land on the site, complete with direct Spotify and Instagram call-to-actions.',
              },
              {
                name: 'Premium Feature — $300',
                desc: 'Everything in Standard, extended to 14 days, plus a permanent editorial review on our Reviews page — a lasting record of your release that fans and industry contacts can reference long after the feature week ends.',
              },
              {
                name: 'Full Campaign — $500',
                desc: 'A 30-day comprehensive rollout including a custom editorial write-up, pinned social media amplification across all our channels, and a dedicated email blast to our subscriber list.',
              },
            ].map((tier) => (
              <div key={tier.name} className="border border-[#e3d1b8]/12 bg-[#3d1a22] px-5 py-5">
                <p className="font-oswald font-bold text-[#e3d1b8]/85 uppercase tracking-wide mb-2"
                  style={{ fontSize: 'clamp(0.9rem, 1.8vw, 1.05rem)' }}>
                  {tier.name}
                </p>
                <p className="font-inter text-[13px] text-[#e3d1b8]/55 leading-[1.8]">
                  {tier.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            We believe in honest music criticism, which means we only accept artists we genuinely believe in. If we do not think your music is ready for a paid feature, we will tell you, provide feedback, and suggest resubmitting when the time is right. This ensures that our audience can always trust the quality of the music we spotlight.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-12">
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-5"
            style={{ fontSize: 'clamp(1.2rem, 3vw, 1.7rem)' }}
          >
            Built for the Culture
          </h2>

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] mb-5">
            This update is more than just a fresh coat of paint. It is a recommitment to the culture we serve. By streamlining our site and introducing structured promotional avenues, we are building a sustainable platform that can continue to champion R&B for years to come.
          </p>

          <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9]">
            Take a look around the new site, check out our latest reviews, and if you are an artist ready to take the next step, head over to the Promote page to book your feature. The culture deserves a platform that takes it seriously — and that is exactly what we are building.
          </p>
        </section>

        {/* Closing sign-off */}
        <div className="border-t border-[#e3d1b8]/10 pt-8 mt-8">
          <p className="font-oswald text-[#e3d1b8]/50 italic text-base mb-8">
            — The Definition of R&B Editorial Team
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => { navigate('/promote'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2 bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-7 py-3 hover:bg-white transition-colors"
            >
              View Promotion Packages
              <IconArrow />
            </button>
            <button
              onClick={() => { navigate('/reviews'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center gap-2 border border-[#e3d1b8]/40 text-[#e3d1b8] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-7 py-3 hover:bg-[#e3d1b8]/10 transition-colors"
            >
              Read Our Reviews
              <IconArrow />
            </button>
          </div>
        </div>
      </article>

      {/* ── Related / next read nudge ── */}
      <div className="bg-[#3d1a22] border-t border-[#e3d1b8]/10 py-10 px-5">
        <div className="max-w-[760px] mx-auto">
          <p className="font-oswald text-[9px] tracking-[0.35em] text-[#e3d1b8]/30 uppercase mb-4">
            Explore the Site
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => { navigate('/'); setTimeout(() => { const el = document.getElementById('artists'); if (el) el.scrollIntoView({ behavior: 'smooth' }) }, 100) }}
              className="flex items-center justify-between border border-[#e3d1b8]/12 bg-[#2a0f16] px-5 py-4 hover:border-[#e3d1b8]/25 transition-colors group text-left"
            >
              <div>
                <p className="font-oswald text-[9px] tracking-[0.25em] text-[#e3d1b8]/30 uppercase mb-1">Discover</p>
                <p className="font-oswald text-[#e3d1b8]/75 uppercase tracking-wide text-sm">Up & Coming Artists</p>
              </div>
              <span className="text-[#e3d1b8]/30 group-hover:text-[#e3d1b8]/60 transition-colors">
                <IconArrow />
              </span>
            </button>
            <button
              onClick={() => { navigate('/promote'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="flex items-center justify-between border border-[#e3d1b8]/12 bg-[#2a0f16] px-5 py-4 hover:border-[#e3d1b8]/25 transition-colors group text-left"
            >
              <div>
                <p className="font-oswald text-[9px] tracking-[0.25em] text-[#e3d1b8]/30 uppercase mb-1">For Artists</p>
                <p className="font-oswald text-[#e3d1b8]/75 uppercase tracking-wide text-sm">Get Featured</p>
              </div>
              <span className="text-[#e3d1b8]/30 group-hover:text-[#e3d1b8]/60 transition-colors">
                <IconArrow />
              </span>
            </button>
          </div>
        </div>
      </div>

      <Footer onSubmitClick={() => setShowSubmit(true)} />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
