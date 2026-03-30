import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const TERMS_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://definitionofrnb.com/terms-of-service',
  url: 'https://definitionofrnb.com/terms-of-service',
  name: 'Terms of Service – The Definition of R&B',
  description: 'Terms of Service for The Definition of R&B. Read the rules and guidelines governing use of our music review website.',
  isPartOf: { '@id': 'https://definitionofrnb.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://definitionofrnb.com/' },
      { '@type': 'ListItem', position: 2, name: 'Terms of Service', item: 'https://definitionofrnb.com/terms-of-service' },
    ],
  },
}

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: 'By accessing or using The Definition of R&B website located at definitionofrnb.com (the "Site"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use the Site.\n\nThese Terms apply to all visitors, users, and others who access or use the Site. We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Site following any changes constitutes your acceptance of the revised Terms.',
  },
  {
    title: '2. Description of Service',
    body: 'The Definition of R&B is an independent music review and editorial website dedicated to R&B music. We publish album reviews, artist features, news, commentary, and curated playlists. The Site also accepts music submissions from independent artists and labels for editorial consideration.\n\nThe Site is provided for informational and entertainment purposes only. We do not guarantee that the Site will be available at all times, or that all content will be free from errors or omissions.',
  },
  {
    title: '3. User Conduct',
    body: 'By using the Site, you agree not to:\n\n• Submit false, misleading, or fraudulent information\n• Attempt to gain unauthorised access to any part of the Site\n• Use automated scripts, bots, or crawlers to scrape data without written consent\n• Transmit unsolicited commercial communications (spam)\n• Post or distribute content that is defamatory, obscene, or hateful\n• Violate any applicable local, national, or international law\n• Impersonate any person or entity\n• Interfere with or disrupt the integrity or performance of the Site',
  },
  {
    title: '4. Music Submissions',
    body: 'Artists, managers, publicists, and labels may submit music for editorial consideration. By submitting music, you represent and warrant that:\n\n• You own or have the necessary rights and permissions to submit the music\n• The submission does not infringe upon any third-party intellectual property rights\n• You grant us a non-exclusive, royalty-free licence to listen to, review, and write about submitted music\n• Submission does not guarantee coverage, review, or editorial response\n• We may decline to publish content about any submission at our sole discretion\n\nWe treat all submissions with respect and will not share your contact details or unreleased material with third parties without your consent.',
  },
  {
    title: '5. Intellectual Property',
    body: 'All editorial content on the Site — including reviews, articles, features, commentary, and the overall look and feel of the Site — is the intellectual property of The Definition of R&B and protected by applicable copyright and trademark laws.\n\nYou may not reproduce, distribute, publicly display, modify, or create derivative works from any content on the Site without prior written permission. Brief quotations for commentary, criticism, or news reporting are permitted under fair use, provided attribution is given to The Definition of R&B with a link to the source article.\n\nArtist names, album artwork, song titles, and other artist-related intellectual property referenced on the Site remain the property of the respective rights holders.',
  },
  {
    title: '6. Third-Party Content & Links',
    body: 'The Site may contain links to third-party websites, embedded streaming players (Spotify, Apple Music), YouTube videos, and social media content. These are provided for convenience and do not constitute an endorsement.\n\nWe have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites. We strongly advise you to read the terms and privacy policies of any third-party sites you visit.',
  },
  {
    title: '7. Advertising',
    body: 'The Definition of R&B uses Google AdSense to display advertisements. These ads help support the continued operation of the Site and allow us to produce free editorial content.\n\nAdvertisements are served by Google and its advertising partners. We do not personally endorse any advertised products or services. You can opt out of personalised advertising by visiting https://www.google.com/settings/ads.',
  },
  {
    title: '8. Disclaimers',
    body: 'THE SITE AND ALL CONTENT ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.\n\nWe do not warrant that the Site will be uninterrupted, error-free, or free of viruses. Music reviews represent the personal views of the authors and are not professional advice of any kind.',
  },
  {
    title: '9. Limitation of Liability',
    body: 'To the fullest extent permitted by applicable law, The Definition of R&B, its owners, editors, contributors, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, the Site.\n\nThis includes, without limitation, any loss of revenue, data, goodwill, or other intangible losses.',
  },
  {
    title: '10. Governing Law',
    body: 'These Terms shall be governed by and construed in accordance with the laws of the Province of Ontario, Canada. Any disputes arising from these Terms or your use of the Site shall be subject to the exclusive jurisdiction of the courts located in Ontario, Canada.',
  },
  {
    title: '11. Changes to These Terms',
    body: 'We reserve the right to modify these Terms at any time. When we make material changes, we will update the "Last Updated" date at the top of this page. Your continued use of the Site after changes take effect constitutes your acceptance of the new Terms.',
  },
  {
    title: '12. Contact Us',
    body: 'If you have any questions or concerns about these Terms of Service, please reach out to us:\n\nThe Definition of R&B\nEmail: definitionofrnb@gmail.com\nWebsite: https://definitionofrnb.com',
  },
]

export default function TermsOfService() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title="Terms of Service – The Definition of R&B"
        description="Terms of Service for The Definition of R&B. Read the rules and guidelines governing use of our music review website."
        canonical="https://definitionofrnb.com/terms-of-service"
        jsonLd={TERMS_JSON_LD}
      />
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      <header className="w-full bg-[#3d1a22] border-b border-[#e3d1b8]/10 py-12 px-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <button
              onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="font-inter text-[11px] text-[#e3d1b8]/40 hover:text-[#e3d1b8]/70 transition-colors bg-transparent border-none cursor-pointer p-0"
            >
              Home
            </button>
            <span className="text-[#e3d1b8]/20 text-[11px]">/</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/40">Terms of Service</span>
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#e3d1b8] leading-tight mb-3">
            Terms of Service
          </h1>
          <p className="font-inter text-[13px] text-[#e3d1b8]/50">Last updated: March 2026</p>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-5 py-12">
        <div className="max-w-3xl">
          <p className="font-inter text-[15px] leading-relaxed text-[#e3d1b8]/80 mb-10">
            Welcome to The Definition of R&B. These Terms of Service govern your use of our website at{' '}
            <a href="https://definitionofrnb.com" className="text-[#e3d1b8] underline underline-offset-2 hover:text-white transition-colors">
              definitionofrnb.com
            </a>
            . Please read these Terms carefully before using the Site.
          </p>
          <div className="space-y-10">
            {SECTIONS.map((section) => (
              <div key={section.title}>
                <h2 className="font-oswald text-lg font-semibold text-[#e3d1b8] mb-3 uppercase tracking-wide">
                  {section.title}
                </h2>
                {section.body.split('\n\n').map((para, i) => (
                  <p key={i} className="font-inter text-[14px] leading-relaxed text-[#e3d1b8]/70 mb-3 whitespace-pre-line">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer onSubmitClick={() => setShowSubmit(true)} />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
