import React, { useState } from 'react'
import Nav         from './components/Nav'
import TopAdBanner from './components/TopAdBanner'
import Hero        from './components/Hero'
import InFeedAd    from './components/InFeedAd'
import BlogGrid    from './components/BlogGrid'
import Footer      from './components/Footer'
import SubmitMusic from './components/SubmitMusic'

export default function App() {
  const [showSubmit, setShowSubmit] = useState(false)

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <Nav onSubmitClick={() => setShowSubmit(true)} />
      <TopAdBanner />
      <div className="relative">
        <Hero />
      </div>
      <InFeedAd />
      <BlogGrid />
      <Footer />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
