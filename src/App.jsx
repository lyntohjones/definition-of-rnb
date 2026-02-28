import React from 'react'
import Nav         from './components/Nav'
import TopAdBanner from './components/TopAdBanner'
import Hero        from './components/Hero'
import InFeedAd    from './components/InFeedAd'
import BlogGrid    from './components/BlogGrid'
import Footer      from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <Nav />
      <TopAdBanner />
      <Hero />
      <InFeedAd />
      <BlogGrid />
      <Footer />
    </div>
  )
}
