import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav         from './components/Nav'
import TopAdBanner from './components/TopAdBanner'
import Hero        from './components/Hero'
import InFeedAd    from './components/InFeedAd'
import BlogGrid    from './components/BlogGrid'
import Footer      from './components/Footer'
import SubmitMusic from './components/SubmitMusic'
import Reviews     from './pages/Reviews'
import Promote     from './pages/Promote'

/* ── Home page ── */
function Home() {
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
      <Footer onSubmitClick={() => setShowSubmit(true)} />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path="/"        element={<Home />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/promote" element={<Promote />} />
      {/* Catch-all: redirect unknown paths back to home */}
      <Route path="*"        element={<Home />} />
    </Routes>
  )
}
