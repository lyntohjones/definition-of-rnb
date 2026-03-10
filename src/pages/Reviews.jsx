import React, { useState } from 'react'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'

/* ── Spotify icon ── */
const IconSpotify = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

/* ── Star rating ── */
const Stars = ({ rating }) => (
  <div className="flex items-center gap-[3px]">
    {[1, 2, 3, 4, 5].map((n) => (
      <svg key={n} viewBox="0 0 12 12" fill="currentColor"
        className={`w-3 h-3 ${n <= rating ? 'text-[#e3d1b8]' : 'text-[#e3d1b8]/20'}`}>
        <path d="M6 0l1.545 3.09L11 3.635l-2.5 2.455.59 3.455L6 7.91l-3.09 1.635L3.5 6.09 1 3.635l3.455-.545z"/>
      </svg>
    ))}
  </div>
)

/* ── Review data ── */
const REVIEWS = [
  {
    id: 1,
    artist: 'Aqyila',
    title: 'Falling Into Place',
    type: 'Album',
    rating: 5,
    photo: '/images/aqyila.png',
    releaseDate: 'March 28, 2025',
    label: 'Independent',
    tags: ['Neo-Soul', 'R&B', 'Gospel'],
    spotifyUrl: 'https://open.spotify.com/search/Aqyila%20Falling%20Into%20Place',
    excerpt:
      'Aqyila\'s debut LP is a masterclass in restraint and vulnerability. Across 11 tracks she weaves gospel warmth, Caribbean rhythm, and late-night R&B into a cohesive statement that feels both timeless and urgently present. "Bloom" alone is worth the price of admission.',
    highlight: 'Bloom',
    verdict: 'Essential listening. A debut that announces a generational voice.',
  },
  {
    id: 2,
    artist: 'JayDon',
    title: 'Lullaby',
    type: 'Single',
    rating: 4,
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab67616100005174434390637be142925be488a2',
    releaseDate: 'February 2025',
    label: 'HITCO / Mega',
    tags: ['R&B', 'Pop-Soul'],
    spotifyUrl: 'https://open.spotify.com/search/JayDon%20Lullaby%20Usher',
    excerpt:
      'At just 18, JayDon delivers a vocal performance that belies his age. "Lullaby" featuring Usher is a silky, understated ballad that showcases his falsetto range and natural charisma. The Usher co-sign feels earned rather than manufactured.',
    highlight: 'Lullaby (feat. Usher)',
    verdict: 'A star-making moment from one of R&B\'s most exciting young voices.',
  },
  {
    id: 3,
    artist: 'EJ Jones',
    title: 'Gas Station Love',
    type: 'Single',
    rating: 4,
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab67616100005174eb0de5707b163df78f5ccf49',
    releaseDate: 'January 2025',
    label: 'Quality Control',
    tags: ['Soul', 'Classic R&B'],
    spotifyUrl: 'https://open.spotify.com/search/EJ%20Jones%20Gas%20Station%20Love',
    excerpt:
      '"Gas Station Love" is the kind of song that makes you pull over and turn the volume up. EJ Jones channels Bobby Womack and Otis Redding with a rawness that\'s rare in contemporary R&B. The production is stripped back, letting his voice do all the heavy lifting.',
    highlight: 'Gas Station Love',
    verdict: 'Old soul energy that hits harder than most full albums this year.',
  },
  {
    id: 4,
    artist: 'Gabriel Jacoby',
    title: 'The One',
    type: 'Single',
    rating: 4,
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab67616100005174 0c77047950c697730f5c9d3f',
    releaseDate: 'December 2024',
    label: 'Pulse Records',
    tags: ['Southern Soul', 'Funk', 'R&B'],
    spotifyUrl: 'https://open.spotify.com/search/Gabriel%20Jacoby%20The%20One',
    excerpt:
      'Gabriel Jacoby\'s smoky Southern falsetto sits perfectly over deep guitar grooves and funky horns on "The One." The South Carolina native sounds like he\'s been making records for decades. Billboard\'s R&B Fresh Pick designation is well deserved.',
    highlight: 'The One',
    verdict: 'Southern-fried soul that grooves from start to finish.',
  },
  {
    id: 5,
    artist: 'Pimmie',
    title: 'BITTERSWEET EP',
    type: 'EP',
    rating: 4,
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab67616100005174758738053bedb013fae42cea',
    releaseDate: 'November 2024',
    label: 'OVO / Republic',
    tags: ['Alternative R&B', 'Lo-Fi Soul'],
    spotifyUrl: 'https://open.spotify.com/search/Pimmie%20BITTERSWEET',
    excerpt:
      'The Houston singer and mixing engineer who appeared on Drake and PARTYNEXTDOOR\'s album now steps fully into the spotlight. "BITTERSWEET" is a smoldering collection of late-night ballads that explore modern love with unflinching honesty. Her production ear is as sharp as her vocals.',
    highlight: "PIMMIE'S DILEMMA",
    verdict: 'A quietly devastating EP that rewards repeat listening.',
  },
  {
    id: 6,
    artist: 'Odeal',
    title: 'The Summer That Saved Me',
    type: 'Project',
    rating: 5,
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab6761610000517474ad077c18bcd89234376664',
    releaseDate: 'October 2024',
    label: 'Independent',
    tags: ['Afrobeats', 'R&B', 'Alte'],
    spotifyUrl: 'https://open.spotify.com/search/Odeal%20The%20Summer%20That%20Saved%20Me',
    excerpt:
      'Billboard\'s African Rookie of the Year 2025 delivers a global R&B statement. Odeal\'s British-Nigerian perspective fuses Afrobeats, alte, and classic R&B into something genuinely new. His baritone voice carries a warmth that makes every track feel like a conversation.',
    highlight: 'Miami (feat. Leon Thomas)',
    verdict: 'A boundary-dissolving project that positions Odeal as a global R&B force.',
  },
]

/* ── Rating badge colour ── */
const ratingLabel = (r) => {
  if (r === 5) return { text: 'Classic', bg: 'bg-[#e3d1b8]', fg: 'text-[#5c2a35]' }
  if (r === 4) return { text: 'Recommended', bg: 'bg-[#1DB954]/20', fg: 'text-[#1DB954]' }
  return { text: 'Worth Hearing', bg: 'bg-[#e3d1b8]/10', fg: 'text-[#e3d1b8]/60' }
}

/* ── Review card ── */
function ReviewCard({ review }) {
  const badge = ratingLabel(review.rating)
  return (
    <article className="border border-[#e3d1b8]/15 bg-[#4a2030] flex flex-col sm:flex-row gap-0 overflow-hidden group hover:border-[#e3d1b8]/30 transition-colors">

      {/* Cover image */}
      <div className="sm:w-[180px] flex-shrink-0 bg-[#3d1a22] overflow-hidden" style={{ minHeight: '180px' }}>
        <img
          src={review.photo}
          alt={review.artist}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          style={{ minHeight: '180px' }}
          onError={(e) => { e.target.style.display = 'none' }}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 sm:p-6">

        {/* Top row */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`font-oswald text-[9px] tracking-[0.25em] uppercase px-2 py-[3px] ${badge.bg} ${badge.fg}`}>
                {badge.text}
              </span>
              <span className="font-oswald text-[9px] tracking-[0.2em] text-[#e3d1b8]/35 uppercase border border-[#e3d1b8]/15 px-2 py-[3px]">
                {review.type}
              </span>
            </div>
            <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)' }}>
              {review.artist} — <span className="text-[#e3d1b8]/70">{review.title}</span>
            </h2>
            <p className="font-inter text-[11px] text-[#e3d1b8]/35 mt-1">
              {review.releaseDate} · {review.label}
            </p>
          </div>
          <div className="flex-shrink-0 pt-1">
            <Stars rating={review.rating} />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {review.tags.map((tag) => (
            <span key={tag} className="font-inter text-[10px] text-[#e3d1b8]/40 border border-[#e3d1b8]/10 px-2 py-[2px]">
              {tag}
            </span>
          ))}
        </div>

        {/* Review excerpt */}
        <p className="font-inter text-[12px] md:text-[13px] text-[#e3d1b8]/60 leading-[1.8] mb-4 flex-1">
          {review.excerpt}
        </p>

        {/* Verdict */}
        <div className="border-l-2 border-[#e3d1b8]/25 pl-3 mb-4">
          <p className="font-oswald text-[9px] tracking-[0.3em] text-[#e3d1b8]/35 uppercase mb-1">Verdict</p>
          <p className="font-inter text-[12px] text-[#e3d1b8]/75 italic leading-relaxed">{review.verdict}</p>
        </div>

        {/* Spotify CTA */}
        <a
          href={review.spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="self-start flex items-center gap-2 bg-[#1DB954]/10 border border-[#1DB954]/25 px-4 py-2 hover:bg-[#1DB954]/20 transition-colors no-underline group/sp"
        >
          <IconSpotify />
          <span className="font-inter text-[11px] text-[#e3d1b8]/70 group-hover/sp:text-[#e3d1b8]/90 transition-colors">
            Listen: {review.highlight}
          </span>
        </a>
      </div>
    </article>
  )
}

/* ── Page ── */
export default function Reviews() {
  const [showSubmit, setShowSubmit] = useState(false)

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      {/* Page header */}
      <header className="w-full bg-[#3d1a22] border-b border-[#e3d1b8]/10 py-10 px-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#e3d1b8]/40" />
            <span className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/40 uppercase">
              New Releases
            </span>
          </div>
          <h1
            className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight"
            style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}
          >
            Reviews
          </h1>
          <p className="font-inter text-[13px] text-[#e3d1b8]/45 mt-3 max-w-[520px] leading-relaxed">
            Honest takes on the latest R&B albums, EPs, and singles. We listen so you know what's worth your time.
          </p>
        </div>
      </header>

      {/* Reviews list */}
      <main className="max-w-screen-xl mx-auto px-4 sm:px-6 py-10 space-y-6">
        {REVIEWS.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </main>

      <Footer />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
