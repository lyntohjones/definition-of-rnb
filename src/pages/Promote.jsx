import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'

/* ── Check icon ── */
const IconCheck = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0">
    <circle cx="8" cy="8" r="7.5" stroke="#e3d1b8" strokeOpacity="0.3" />
    <path d="M5 8.5l2 2 4-4" stroke="#e3d1b8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Press-state helpers ── */
const press = {
  onMouseDown:  (e) => { e.currentTarget.style.transform = 'scale(0.97)' },
  onMouseUp:    (e) => { e.currentTarget.style.transform = 'scale(1)' },
  onMouseLeave: (e) => { e.currentTarget.style.transform = 'scale(1)' },
  onTouchStart: (e) => { e.currentTarget.style.transform = 'scale(0.97)' },
  onTouchEnd:   (e) => { e.currentTarget.style.transform = 'scale(1)' },
}

/* ── Tiers ── */
const TIERS = [
  {
    id: 'standard',
    name: 'Standard Feature',
    price: '$150',
    tag: 'Most Popular',
    tagColor: 'bg-[#1DB954]/20 text-[#1DB954]',
    highlight: false,
    description: 'A dedicated Artist of the Week spotlight on the homepage hero section — the first thing every visitor sees.',
    includes: [
      'Full-width hero section placement for 7 days',
      'Artist name, photo, and bio on the homepage',
      'Up to 3 key tracks with Spotify listen links',
      'Latest release / album callout',
      'Follow on Instagram CTA button',
      'Listen on Spotify CTA button',
    ],
  },
  {
    id: 'premium',
    name: 'Premium Feature',
    price: '$300',
    tag: 'Best Value',
    tagColor: 'bg-[#e3d1b8] text-[#5c2a35]',
    highlight: true,
    description: 'Everything in Standard, plus a full written editorial review published on the Reviews page — a permanent record of your artistry.',
    includes: [
      'Everything in Standard Feature',
      'Full editorial review on the Reviews page (permanent)',
      'Star rating + genre tags + verdict quote',
      'Featured in the Up & Coming Artists grid',
      'Social media shoutout across all platforms',
      '14-day homepage hero placement',
    ],
  },
  {
    id: 'campaign',
    name: 'Full Campaign',
    price: '$500',
    tag: 'Maximum Exposure',
    tagColor: 'bg-[#e3d1b8]/10 text-[#e3d1b8]/70',
    highlight: false,
    description: 'A complete promotional campaign built around your release — from homepage hero to social content to editorial coverage.',
    includes: [
      'Everything in Premium Feature',
      'Custom feature write-up with release breakdown',
      'Accolades and achievements highlighted',
      'Key tracks section with full discography context',
      '30-day homepage hero placement',
      'Pinned post across all social channels',
      'Dedicated email blast to subscriber list',
    ],
  },
]

/* ── Breakdown steps ── */
const BREAKDOWN = [
  {
    step: '01',
    title: 'Hero Section Placement',
    body: 'Your artist photo, name, and bio take over the full homepage hero — the first thing every visitor sees when they land on definitionofrnb.com. The section includes your latest release, key tracks with direct Spotify links, and CTAs to follow you on Instagram and stream your music.',
  },
  {
    step: '02',
    title: 'Editorial Write-Up',
    body: 'Our editorial team writes a genuine, in-depth feature about your artistry — your background, your sound, your influences, and what makes your latest release stand out. No fluff. Real music criticism written for people who care about R&B.',
  },
  {
    step: '03',
    title: 'Reviews Page Coverage',
    body: 'Premium and Campaign features include a permanent review card on the Reviews page. This includes a star rating, genre tags, a verdict quote, and a direct Spotify listen link — a lasting record of your release that fans and industry contacts can find long after the feature week ends.',
  },
  {
    step: '04',
    title: 'Social Amplification',
    body: "Your feature gets pushed across our Instagram, TikTok, Twitter/X, and YouTube channels. We create content around your story — not just a repost. Our audience is built from genuine R&B fans who discover new music through us.",
  },
  {
    step: '05',
    title: 'Artist Grid Listing',
    body: 'Your artist card lives in the Up & Coming Artists grid on the homepage for the duration of your feature. New visitors browsing the site will discover your music alongside other curated R&B artists.',
  },
]

/* ── Tier card ── */
function TierCard({ tier }) {
  const emailSubject = encodeURIComponent(`Artist of the Week — ${tier.name}`)
  const emailBody = encodeURIComponent(
    `Hi,\n\nI'm interested in the ${tier.name} package.\n\nArtist Name:\nRelease:\nSpotify Link:\nInstagram:\n\nTell us a bit about yourself:`
  )

  return (
    <div
      className={`flex flex-col border p-6 ${tier.highlight ? 'border-[#e3d1b8]/50 bg-[#5c2a35]' : 'border-[#e3d1b8]/15 bg-[#2a0f16]'}`}
      style={{ transition: 'transform 250ms cubic-bezier(0.22,1,0.36,1), border-color 250ms cubic-bezier(0.22,1,0.36,1)' }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px)'
        e.currentTarget.style.borderColor = tier.highlight ? 'rgba(227,209,184,0.75)' : 'rgba(227,209,184,0.3)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.borderColor = tier.highlight ? 'rgba(227,209,184,0.5)' : 'rgba(227,209,184,0.15)'
      }}
    >
      {/* Tier header */}
      <div className="mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className={`font-oswald text-[9px] tracking-[0.25em] uppercase px-2 py-[3px] ${tier.tagColor}`}>
            {tier.tag}
          </span>
        </div>
        <h3
          className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-1"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          {tier.name}
        </h3>
        <p className="font-oswald text-[#e3d1b8]/50 mb-3" style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)' }}>
          {tier.price}
        </p>
        <p className="font-inter text-[12px] text-[#e3d1b8]/50 leading-[1.7]">{tier.description}</p>
      </div>

      {/* Includes list */}
      <ul className="space-y-3 flex-1 mb-6">
        {tier.includes.map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <IconCheck />
            <span className="font-inter text-[11px] text-[#e3d1b8]/60 leading-[1.6]">{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href={`mailto:info@definitionofrnb.com?subject=${emailSubject}&body=${emailBody}`}
        className={`block text-center font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-6 py-3 no-underline
          ${tier.highlight ? 'bg-[#e3d1b8] text-[#5c2a35]' : 'border border-[#e3d1b8]/40 text-[#e3d1b8]'}`}
        style={{ transition: 'background-color 200ms cubic-bezier(0.22,1,0.36,1), border-color 200ms cubic-bezier(0.22,1,0.36,1), transform 150ms cubic-bezier(0.64,0,0.78,0)' }}
        onMouseEnter={e => {
          if (tier.highlight) { e.currentTarget.style.backgroundColor = '#fff' }
          else { e.currentTarget.style.backgroundColor = 'rgba(227,209,184,0.1)'; e.currentTarget.style.borderColor = 'rgba(227,209,184,0.65)' }
        }}
        onMouseLeave={e => {
          if (tier.highlight) { e.currentTarget.style.backgroundColor = '#e3d1b8' }
          else { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(227,209,184,0.4)'; e.currentTarget.style.transform = 'scale(1)' }
        }}
        {...press}
      >
        Get Featured
      </a>
    </div>
  )
}

export default function Promote() {
  const [showSubmit, setShowSubmit] = useState(false)

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      {/* ── Page header ── */}
      <header className="w-full bg-[#3d1a22] border-b border-[#e3d1b8]/10 py-12 px-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3d1b8]/40" />
            <span className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/40 uppercase">
              Artist Promotion
            </span>
          </div>
          <h1
            className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Artist of the Week
          </h1>
          <p className="font-inter text-[14px] text-[#e3d1b8]/55 max-w-[600px] leading-[1.8]">
            Get your music in front of a dedicated R&amp;B audience. The Definition of R&amp;B features one artist every week across the homepage, editorial, and social channels. Here's exactly what you get.
          </p>
        </div>
      </header>

      {/* ── Feature breakdown ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-10">
          <p className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/35 uppercase mb-2">◆ What You Get ◆</p>
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            The Feature Breakdown
          </h2>
          <div className="w-10 h-[1px] bg-[#e3d1b8]/30 mt-3" />
        </div>

        <div className="space-y-0 divide-y divide-[#e3d1b8]/10 border border-[#e3d1b8]/10">
          {BREAKDOWN.map((item) => (
            <div
              key={item.step}
              className="flex gap-6 px-6 py-7"
              style={{ transition: 'background-color 200ms cubic-bezier(0.22,1,0.36,1)' }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(227,209,184,0.02)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent' }}
            >
              <div className="flex-shrink-0 w-10">
                <span className="font-oswald text-[#e3d1b8]/20 text-2xl font-bold">{item.step}</span>
              </div>
              <div>
                <h3
                  className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-wide mb-2"
                  style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)' }}
                >
                  {item.title}
                </h3>
                <p className="font-inter text-[13px] text-[#e3d1b8]/55 leading-[1.8] max-w-[680px]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing tiers ── */}
      <section className="bg-[#3d1a22] border-t border-b border-[#e3d1b8]/10 py-14 px-4 sm:px-6">
        <div className="max-w-screen-xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/35 uppercase mb-2">◆ Packages ◆</p>
            <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
              Choose Your Feature
            </h2>
            <div className="w-10 h-[1px] bg-[#e3d1b8]/30 mx-auto mt-3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TIERS.map((tier) => <TierCard key={tier.id} tier={tier} />)}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 py-14">
        <div className="mb-8">
          <p className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/35 uppercase mb-2">◆ Good to Know ◆</p>
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase" style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            How It Works
          </h2>
          <div className="w-10 h-[1px] bg-[#e3d1b8]/30 mt-3" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[860px]">
          {[
            { q: 'Who is this for?', a: 'Independent R&B artists, singer-songwriters, producers, and labels looking to build awareness with a targeted R&B audience. We do not feature genres outside of R&B, Soul, Neo-Soul, and related styles.' },
            { q: 'How do I book a feature?', a: `Click "Get Featured" on any package above. We will respond within 48 hours to confirm your slot, collect your assets (photo, bio, links), and schedule your feature week.` },
            { q: 'What assets do I need to provide?', a: 'A high-resolution artist photo (minimum 1200px wide), a short bio (2-4 sentences), your Spotify and Instagram links, and the title of the release you want featured.' },
            { q: 'Is the review guaranteed to be positive?', a: 'We write honest editorial. We only accept artists we genuinely believe in — if we do not think your music is ready, we will tell you and suggest resubmitting when the time is right.' },
            { q: 'How far in advance should I book?', a: 'We recommend booking at least 2 weeks before your desired feature date, especially around album or single release windows. Slots fill quickly.' },
            { q: 'Can I submit without paying?', a: 'Yes. We also consider organic submissions through the Submit Music form. Paid features guarantee placement and editorial coverage; organic submissions are reviewed at our discretion.' },
          ].map((faq) => (
            <div key={faq.q} className="border-l-2 border-[#e3d1b8]/20 pl-5">
              <p className="font-oswald text-[#e3d1b8]/80 uppercase tracking-wide mb-2" style={{ fontSize: 'clamp(0.85rem, 1.5vw, 1rem)' }}>
                {faq.q}
              </p>
              <p className="font-inter text-[12px] text-[#e3d1b8]/50 leading-[1.8]">{faq.a}</p>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div className="mt-12 border border-[#e3d1b8]/15 p-8 max-w-[600px]">
          <p className="font-oswald text-[9px] tracking-[0.35em] text-[#e3d1b8]/35 uppercase mb-3">Ready to get featured?</p>
          <h3 className="font-oswald font-bold text-[#e3d1b8] uppercase mb-3" style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)' }}>
            Let's Tell Your Story
          </h3>
          <p className="font-inter text-[13px] text-[#e3d1b8]/50 leading-[1.8] mb-6">
            Email us directly at{' '}
            <a
              href="mailto:info@definitionofrnb.com"
              className="text-[#e3d1b8]/80 no-underline"
              style={{ transition: 'color 200ms cubic-bezier(0.22,1,0.36,1)' }}
              onMouseEnter={e => { e.currentTarget.style.color = '#e3d1b8' }}
              onMouseLeave={e => { e.currentTarget.style.color = 'rgba(227,209,184,0.8)' }}
            >
              info@definitionofrnb.com
            </a>{' '}
            with your artist name, release, and which package you are interested in. We will take it from there.
          </p>
          <a
            href="mailto:info@definitionofrnb.com?subject=Artist%20of%20the%20Week%20Inquiry"
            className="inline-block bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-[11px] tracking-[0.2em] uppercase px-8 py-3 no-underline"
            style={{ transition: 'background-color 200ms cubic-bezier(0.22,1,0.36,1), transform 150ms cubic-bezier(0.64,0,0.78,0)' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#e3d1b8'; e.currentTarget.style.transform = 'scale(1)' }}
            {...press}
          >
            Email Us Now
          </a>
        </div>
      </section>

      <Footer onSubmitClick={() => setShowSubmit(true)} />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
