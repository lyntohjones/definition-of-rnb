import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const CONTACT_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://definitionofrnb.com/contact',
  url: 'https://definitionofrnb.com/contact',
  name: 'Contact – The Definition of R&B',
  description: 'Contact The Definition of R&B for general inquiries, music submissions, copyright concerns, or advertising.',
  isPartOf: { '@id': 'https://definitionofrnb.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',    item: 'https://definitionofrnb.com/' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://definitionofrnb.com/contact' },
    ],
  },
}

const CONTACTS = [
  {
    heading: 'General Inquiries',
    email: 'info@definitionofrnb.com',
    desc: 'Press, partnerships, or anything else — reach us here.',
  },
  {
    heading: 'Music Submissions',
    email: 'submit@definitionofrnb.com',
    desc: 'Independent R&B artists seeking editorial coverage. Include your name, artist name, and a streaming link.',
  },
  {
    heading: 'Advertising',
    email: 'advertise@definitionofrnb.com',
    desc: 'Sponsorship opportunities and brand partnerships.',
  },
  {
    heading: 'Copyright / DMCA',
    email: 'dmca@definitionofrnb.com',
    desc: 'Copyright concerns or formal DMCA takedown requests. See our DMCA policy for what to include.',
    dmcaLink: true,
  },
  {
    heading: 'Privacy',
    email: 'privacy@definitionofrnb.com',
    desc: 'Data access requests, GDPR/CCPA inquiries, or privacy concerns.',
  },
]

export default function Contact() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title="Contact – The Definition of R&B"
        description="Contact The Definition of R&B for general inquiries, music submissions, copyright concerns, or advertising."
        canonical="https://definitionofrnb.com/contact"
        jsonLd={CONTACT_JSON_LD}
      />
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      {/* Page header */}
      <header className="w-full bg-[#3d1a22] border-b border-[#e3d1b8]/10 py-14 px-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="font-inter text-[11px] text-[#e3d1b8]/40 hover:text-[#e3d1b8]/70 transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              Home
            </button>
            <span className="text-[#e3d1b8]/20 text-[11px]">/</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/40">Contact</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3d1b8]/40" />
            <span className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/40 uppercase">Reach Us</span>
          </div>
          <h1
            className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Contact
          </h1>
          <p className="font-inter text-[14px] text-[#e3d1b8]/55 max-w-[520px] leading-[1.8]">
            We typically respond within 1–2 business days.
          </p>
        </div>
      </header>

      <main className="max-w-[820px] mx-auto px-5 sm:px-6 py-14 space-y-4">
        {CONTACTS.map(({ heading, email, desc, dmcaLink }) => (
          <div
            key={email}
            className="border border-[#e3d1b8]/10 bg-[#3d1a22] px-7 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex-1">
              <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-[0.12em] text-[15px] mb-1">
                {heading}
              </h2>
              <p className="font-inter text-[13px] text-[#e3d1b8]/55 leading-[1.7]">
                {desc}{' '}
                {dmcaLink && (
                  <button
                    onClick={() => { navigate('/dmca'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
                    className="text-[#e3d1b8]/70 underline hover:text-[#e3d1b8] bg-transparent border-none cursor-pointer p-0 font-inter text-[13px]"
                  >
                    DMCA Policy →
                  </button>
                )}
              </p>
            </div>
            <a
              href={`mailto:${email}`}
              className="font-inter text-[13px] text-[#e3d1b8] hover:text-white transition-colors underline underline-offset-2 flex-shrink-0"
            >
              {email}
            </a>
          </div>
        ))}

        <p className="font-inter text-[11px] text-[#e3d1b8]/30 leading-relaxed pt-4">
          The Definition of R&B is an independent platform not affiliated with any major record label or streaming service.
        </p>
      </main>

      <Footer onSubmitClick={() => setShowSubmit(true)} />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
