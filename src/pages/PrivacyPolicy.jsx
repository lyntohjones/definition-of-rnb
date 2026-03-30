import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const PRIVACY_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://definitionofrnb.com/privacy',
  url: 'https://definitionofrnb.com/privacy',
  name: 'Privacy Policy â The Definition of R&B',
  description: 'Privacy Policy for The Definition of R&B. Learn how we collect, use, and protect your personal information.',
  isPartOf: { '@id': 'https://definitionofrnb.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home',           item: 'https://definitionofrnb.com/' },
      { '@type': 'ListItem', position: 2, name: 'Privacy Policy', item: 'https://definitionofrnb.com/privacy' },
    ],
  },
}

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: `We collect information you provide directly to us, such as when you submit music for review, sign up for our newsletter, or contact us by email. This may include your name, email address, social media handles, and any music or promotional materials you share with us.

We also automatically collect certain technical information when you visit our website, including your IP address, browser type, referring URLs, pages visited, and time spent on each page. This information is collected through standard server logs and analytics tools.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use the information we collect to:

â¢ Respond to your submissions, inquiries, and requests
â¢ Publish editorial content about artists who submit music for review
â¢ Send newsletters or updates if you have opted in to receive them
â¢ Analyse website traffic and improve the user experience
â¢ Comply with legal obligations and protect our rights

We do not sell, rent, or trade your personal information to third parties for their marketing purposes.`,
  },
  {
    title: '3. Advertising & Third-Party Services',
    body: `This website is monetised through Google AdSense. Google and its partners may use cookies and similar technologies to serve ads based on your prior visits to this website and other websites. Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site.

You may opt out of personalised advertising by visiting Google's Ads Settings at https://www.google.com/settings/ads. We do not have access to or control over the cookies that third-party advertisers place on your device.

We may also embed third-party content such as Spotify players, YouTube videos, and social media widgets. These third parties may collect data about your interactions with their embedded content in accordance with their own privacy policies.`,
  },
  {
    title: '4. Cookies',
    body: `Our website uses cookies and similar tracking technologies to enhance your browsing experience and to serve relevant advertisements. Cookies are small text files stored on your device.

We use the following types of cookies:
â¢ Essential cookies: Required for the website to function properly
â¢ Analytics cookies: Help us understand how visitors interact with the site (e.g. Google Analytics)
â¢ Advertising cookies: Used by Google AdSense to serve personalised ads

You can control and manage cookies through your browser settings. Please note that disabling certain cookies may affect the functionality of our website.`,
  },
  {
    title: '5. Data Retention',
    body: `We retain personal information only for as long as necessary to fulfil the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. Music submissions and related correspondence may be retained indefinitely for editorial and archival purposes, unless you request deletion.`,
  },
  {
    title: '6. Your Rights',
    body: `Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, or delete your data, and the right to object to or restrict our processing of your data. If you wish to exercise any of these rights, please contact us at info@definitionofrnb.com.

Residents of California may have additional rights under the California Consumer Privacy Act (CCPA). Residents of the European Economic Area may have additional rights under the General Data Protection Regulation (GDPR).`,
  },
  {
    title: '7. Children\'s Privacy',
    body: `Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal data from a child under 13 without verification of parental consent, we will take steps to remove that information from our servers.`,
  },
  {
    title: '8. Links to Other Websites',
    body: `Our website may contain links to third-party websites, including artist profiles, streaming platforms, social media. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: '9. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. When we make changes, we will revise the "Last Updated" date at the top of this page. Your continued use of the website after any changes constitutes your acceptance of the revised policy. We encourage you to review this policy periodically.`,
  },
  {
    title: '10. Contact Us',
    body: `If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:

The Definition of R&B
Email: info@definitionofrnb.com
Website: https://definitionofrnb.com`,
  },
]

export default function PrivacyPolicy() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title="Privacy Policy â The Definition of R&B"
        description="Privacy Policy for The Definition of R&B. Learn how we collect, use, and protect your personal information."
        canonical="https://definitionofrnb.com/privacy"
        jsonLd={PRIVACY_JSON_LD}
      />
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      {/* Header */}
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
            <span className="font-inter text-[11px] text-[#e3d1b8]/40">Privacy Policy</span>
          </div>

          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#e3d1b8] leading-tight mb-3">
            Privacy Policy
          </h1>
          <p className="font-inter text-[13px] text-[#e3d1b8]/50">
            Last updated: March 2026
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-screen-xl mx-auto px-5 py-12">
        <div className="max-w-3xl">
          <p className="font-inter text-[15px] leading-relaxed text-[#e3d1b8]/80 mb-10">
            The Definition of R&B ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit{' '}
            <a href="https://definitionofrnb.com" className="text-[#e3d1b8] underline underline-offset-2 hover:text-white transition-colors">
              definitionofrnb.com
            </a>
            . Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
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
