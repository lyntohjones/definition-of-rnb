import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav         from './components/Nav'
import TopAdBanner from './components/TopAdBanner'
import Hero        from './components/Hero'
import InFeedAd    from './components/InFeedAd'
import BlogGrid    from './components/BlogGrid'
import Footer      from './components/Footer'
import SubmitMusic from './components/SubmitMusic'
import SEO         from './components/SEO'
import Reviews       from './pages/Reviews'
import Promote       from './pages/Promote'
import BlogPost      from './pages/BlogPost'
import About         from './pages/About'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import Contact        from './pages/Contact'
import DMCA        from './pages/DMCA'
import BlogBestAlbums2025      from './pages/BlogBestAlbums2025'
import BlogAfrobeatsRnb        from './pages/BlogAfrobeatsRnb'
import BlogFalsettoRenaissance from './pages/BlogFalsettoRenaissance'
import BlogArtists2026         from './pages/BlogArtists2026'

/* ââ Home page JSON-LD ââ */
const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://definitionofrnb.com/#website',
      url: 'https://definitionofrnb.com/',
      name: 'The Definition of R&B',
      description: 'The definitive source for R&B artist discovery, new music reviews, and culture.',
      publisher: { '@id': 'https://definitionofrnb.com/#organization' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://definitionofrnb.com/?s={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'Organization',
      '@id': 'https://definitionofrnb.com/#organization',
      name: 'The Definition of R&B',
      url: 'https://definitionofrnb.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://definitionofrnb.com/logo.png',
        width: 400,
        height: 100,
      },
      sameAs: [
        'https://www.instagram.com/definitionofrnb/',
        'https://www.tiktok.com/@definitionofrnb',
        'https://twitter.com/definitionofrnb',
        'https://www.youtube.com/@definitionofrnb',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@definitionofrnb.com',
        contactType: 'editorial',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://definitionofrnb.com/#webpage',
      url: 'https://definitionofrnb.com/',
      name: 'The Definition of R&B | Artist Discovery, Reviews & R&B Culture',
      isPartOf: { '@id': 'https://definitionofrnb.com/#website' },
      about: { '@id': 'https://definitionofrnb.com/#organization' },
      description: 'Discover the Artist of the Week, explore up-and-coming R&B artists, and read honest editorial reviews of the latest R&B releases.',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://definitionofrnb.com/' }],
      },
    },
  ],
}

/* ââ Home page ââ */
function Home() {
  const [showSubmit, setShowSubmit] = useState(false)
  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        canonical="https://definitionofrnb.com/"
        jsonLd={HOME_JSON_LD}
      />
      <Nav onSubmitClick={() => setShowSubmit(true)} />
      <TopAdBanner />
      <div className="relative">
        <Hero />
      </div>
      <InFeedAd />
      <BlogGrid />
      <Footer onSubmitClick={() => setShowSubmit(true)} />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/"                                            element={<Home />} />
      <Route path="/reviews"                                     element={<Reviews />} />
      <Route path="/promote"                                     element={<Promote />} />
      <Route path="/blog/welcome-to-the-new-definition-of-rnb"  element={<BlogPost />} />
      <Route path="/about"                                       element={<About />} />
      <Route path="/privacy"                                     element={<PrivacyPolicy />} />
      <Route path="/terms"                                       element={<TermsOfService />} />
      <Route path="/contact"                                     element={<Contact />} />
      <Route path="/dmca"                                        element={<DMCA />} />
      <Route path="*"                                            element={<Home />} />
              <Route path="/blog/best-rnb-albums-2025"                  element={<BlogBestAlbums2025 />} />
          <Route path="/blog/afrobeats-rnb-transatlantic-love-story" element={<BlogAfrobeatsRnb />} />
          <Route path="/blog/falsetto-renaissance-rnb"               element={<BlogFalsettoRenaissance />} />
          <Route path="/blog/rnb-artists-to-watch-2026"              element={<BlogArtists2026 />} />
        </Routes>
  )
}
