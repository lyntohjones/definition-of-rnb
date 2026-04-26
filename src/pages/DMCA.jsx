import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const DMCA_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://definitionofrnb.com/dmca',
  url: 'https://definitionofrnb.com/dmca',
  name: 'DMCA Policy – The Definition of R&B',
  description: 'DMCA takedown policy for The Definition of R&B. Learn how to submit a copyright infringement notice or counter-notice.',
  isPartOf: { '@id': 'https://definitionofrnb.com/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://definitionofrnb.com/' },
      { '@type': 'ListItem', position: 2, name: 'DMCA Policy', item: 'https://definitionofrnb.com/dmca' },
    ],
  },
}

const SECTIONS = [
  {
    title: '1. Overview',
    body: `The Definition of R&B ("we", "our", or "us") respects the intellectual property rights of others and expects users and contributors to do the same. In accordance with the Digital Millennium Copyright Act of 1998 ("DMCA"), 17 U.S.C. § 512, we will respond promptly to valid notices of alleged copyright infringement.

If you believe that content on this website infringes your copyright, please submit a written DMCA takedown notice to our designated copyright agent as described below.`,
  },
  {
    title: '2. Designated Copyright Agent',
    body: `To submit a copyright infringement notice, contact our designated agent at:

The Definition of R&B — DMCA Agent
Email: dmca@definitionofrnb.com

Please use the subject line "DMCA Takedown Notice" and include all required elements listed in Section 3 below.`,
  },
  {
    title: '3. Requirements for a Valid DMCA Notice',
    body: `To be considered valid under the DMCA, your written notice must include all of the following:

• Identification of the copyrighted work you claim has been infringed. If multiple works are covered, a representative list is sufficient.

• Identification of the material on our website that you claim is infringing, with sufficient detail for us to locate it (e.g., the specific URL or page).

• Your contact information, including your full legal name, mailing address, telephone number, and email address.

• A statement that you have a good-faith belief that the disputed use of the copyrighted material is not authorized by the copyright owner, its agent, or the law.

• A statement that the information in your notice is accurate and, under penalty of perjury, that you are the copyright owner or are authorized to act on the copyright owner's behalf.

• Your physical or electronic signature.

Incomplete notices may not be acted upon. We reserve the right to request additional information if necessary.`,
  },
  {
    title: '4. Our Response to Valid Notices',
    body: `Upon receiving a complete and valid DMCA notice, we will:

• Review the notice and make a good-faith determination of whether the material is infringing.
• Remove or disable access to the allegedly infringing content if we determine the notice is valid.
• Notify the party who posted the content that it has been removed.
• Forward a copy of the notice to that party, who may submit a counter-notice.

We aim to process valid takedown notices within 5–10 business days.`,
  },
  {
    title: '5. Counter-Notice Procedure',
    body: `If you believe your content was removed in error or as a result of misidentification, you may submit a written counter-notice to our DMCA agent at dmca@definitionofrnb.com. Your counter-notice must include:

• Identification of the material that was removed and the location where it appeared before removal.

• A statement under penalty of perjury that you have a good-faith belief the material was removed as a result of mistake or misidentification.

• Your full legal name, mailing address, telephone number, and email address.

• A statement that you consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located (or the Northern District of California if your address is outside the United States), and that you will accept service of process from the person who filed the original DMCA notice.

• Your physical or electronic signature.

Upon receipt of a valid counter-notice, we will forward it to the original complainant. If the complainant does not file a lawsuit within 10–14 business days, we may restore the removed content at our discretion.`,
  },
  {
    title: '6. Repeat Infringers',
    body: `It is our policy, in appropriate circumstances, to terminate the accounts or access of users who are repeat infringers of third-party intellectual property rights, in compliance with 17 U.S.C. § 512(i).`,
  },
  {
    title: '7. Misrepresentation',
    body: `Please be aware that under 17 U.S.C. § 512(f), any person who knowingly materially misrepresents that content is infringing, or that content was removed by mistake, may be liable for damages — including costs and attorneys' fees — incurred by the alleged infringer, the content host, or us. Please ensure your claims are accurate and in good faith before submitting a notice.`,
  },
  {
    title: '8. Fair Use Notice',
    body: `This website is an independent editorial platform dedicated to music criticism, commentary, and cultural journalism. Some content may include brief quotations, song titles, album art references, or embedded streaming players for the purposes of review, criticism, and commentary — uses that are protected under the doctrine of fair use (17 U.S.C. § 107).

If you believe any specific use goes beyond fair use, please contact us at dmca@definitionofrnb.com and we will review it promptly.`,
  },
  {
    title: '9. Contact',
    body: `For all DMCA-related matters, reach us at:

The Definition of R&B
Email: dmca@definitionofrnb.com
Website: https://definitionofrnb.com`,
  },
]

export default function DMCA() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title="DMCA Policy – The Definition of R&B"
        description="DMCA takedown policy for The Definition of R&B. Learn how to submit a copyright infringement notice or counter-notice."
        canonical="https://definitionofrnb.com/dmca"
        jsonLd={DMCA_JSON_LD}
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
            <span className="font-inter text-[11px] text-[#e3d1b8]/40">DMCA Policy</span>
          </div>
          <h1 className="font-playfair text-3xl md:text-4xl font-bold text-[#e3d1b8] leading-tight mb-3">
            DMCA Policy
          </h1>
          <p className="font-inter text-[13px] text-[#e3d1b8]/50">
            Last updated: March 2026
          </p>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-5 py-12">
        <div className="max-w-3xl">
          <p className="font-inter text-[15px] leading-relaxed text-[#e3d1b8]/80 mb-10">
            The Definition of R&B respects the intellectual property of others. This page explains how to report copyright infringement under the Digital Millennium Copyright Act (17 U.S.C. § 512) and what to expect from our process.
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
