import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import SubmitMusic from '../components/SubmitMusic'
import SEO from '../components/SEO'

const POST = {
  slug: 'rnb-artists-to-watch-2026',
  date: 'June 2, 2026',
  category: 'Features',
  readTime: '9 min read',
  title: '11 R&B Artists You Need to Know in 2026',
  subtitle: "The names defining the genre's next chapter — from a pgLang surprise arrival to cult voices finally breaking through.",
  author: 'The Definition of R&B Editorial Team',
}

const JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'BlogPosting',
  headline: POST.title,
  description: POST.subtitle,
  datePublished: '2026-06-02',
  dateModified: '2026-06-02',
  author: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  publisher: { '@type': 'Organization', name: 'The Definition of R&B', url: 'https://definitionofrnb.com' },
  url: 'https://definitionofrnb.com/blog/rnb-artists-to-watch-2026',
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://definitionofrnb.com/blog/rnb-artists-to-watch-2026' },
  keywords: 'R&B artists 2026, new R&B artists, up and coming R&B, emerging R&B singers, Imani Imani, pgLang',
}

const ARTISTS = [
  {
    number: '01',
    name: 'Imani Imani',
    tag: 'NEW ARRIVAL',
    photo: 'https://i.scdn.co/image/ab6761670000ecd4efe988a917a71f0121a47cb6',
    body: 'pgLang does not sign artists to make numbers. They sign artists to make history. Imani Imani joined a roster that includes Kendrick Lamar, Baby Keem, and Tanna Leone in 2024, and in 2025 she made her arrival impossible to ignore. A surprise debut album titled "Papercut." A first music video for "Mindgames" that arrived with it. No rollout. No buildup. Just the work.',
    watchFor: 'Everything that comes next. She has already shown she does not move conventionally — and that is the most exciting thing about her.',
    instagram: 'imanimani',
    spotify: 'Imani Imani',
    accent: true,
  },
  {
    number: '02',
    name: 'JayDon',
    tag: 'RISING',
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab67616100005174434390637be142925be488a2',
    body: 'He was 18 when "Lullaby" featuring Usher dropped, and the calmness of that record is still astonishing. He did not oversing to prove himself. He did not manufacture drama. He just made an incredibly intimate record and let Usher co-sign the vision. In 2026, the follow-up is the only question that matters — and everything we have heard suggests he has the answer.',
    watchFor: 'The full project. Singles are warm-up.',
    instagram: 'jaydon',
    spotify: 'JayDon',
  },
  {
    number: '03',
    name: 'Aqyila',
    tag: 'FEATURED',
    photo: '/images/aqyila.png',
    photoFocus: '50% 15%',
    body: 'Falling Into Place was the best debut album of 2025 and it still has not received the full mainstream recognition it deserves. That changes in 2026. Her gospel roots, her Caribbean melodic instincts, and her absolute command of the slow burn — these are not skills you develop. You either have them or you do not. She has them.',
    watchFor: 'Her live performances. She is one of those artists who is even better live than on the record.',
    instagram: 'aqyila',
    spotify: 'Aqyila',
  },
  {
    number: '04',
    name: 'Odeal',
    tag: 'GLOBAL',
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab6761610000517474ad077c18bcd89234376664',
    body: 'The British-Nigerian artist spent 2025 quietly building one of the most interesting catalogs in contemporary R&B. The Afrobeats-R&B convergence is not a trend to him — it is just how he hears music. He is positioned to be the artist who makes that argument to the widest possible audience in 2026. His baritone is a genuine instrument.',
    watchFor: 'His collaborations. Every artist he works with sounds better for having been in the room with him.',
    instagram: 'odeal',
    spotify: 'Odeal',
  },
  {
    number: '05',
    name: 'Pimmie',
    tag: 'NEW ARTIST',
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab67616100005174758738053bedb013fae42cea',
    body: 'BITTERSWEET was a quiet masterpiece that the mainstream has not fully processed yet. In 2026, that changes. Her combination of vocal precision and production instinct is genuinely rare, and the OVO/Republic infrastructure behind her knows exactly what they have. This is the year she gets her flowers.',
    watchFor: 'Her production credits. She is making some of the best R&B beats in the game and choosing to put her voice on them.',
    instagram: 'pimmie',
    spotify: 'Pimmie',
  },
  {
    number: '06',
    name: 'Gabriel Jacoby',
    tag: 'UP & COMING',
    photo: 'https://image-cdn-ak.spotifycdn.com/image/ab676161000051740c77047950c697730f5c9d3f',
    body: 'Southern soul is a tradition that rarely produces artists who can both honor and extend it. Gabriel Jacoby does both. His smoky falsetto and groove-driven production feel simultaneously classic and urgent. The South Carolina native is one of the most complete artists in contemporary R&B, and Red Dirt Gospel was just the opening statement.',
    watchFor: 'The live show. Southern soul has always been a visceral genre — Jacoby brings that energy to every performance.',
    instagram: 'gabrieljacoby',
    spotify: 'Gabriel Jacoby',
  },
  {
    number: '07',
    name: 'Amindi',
    tag: 'ALT R&B',
    photo: 'https://i.scdn.co/image/ab6761610000101fd1379fa02c5997717d6eaf3a',
    body: 'The Ugandan-British artist has been one of the most compelling voices in alternative R&B for several years. 2026 feels like the year her sound finds its largest audience. Her blend of East African musical traditions with contemporary R&B production is unlike anything else in the genre right now. Once you hear it, it is hard to unhear.',
    watchFor: 'Her approach to production. She builds sonic worlds, not just songs.',
    instagram: 'amindi',
    spotify: 'Amindi',
  },
  {
    number: '08',
    name: 'Fana Hues',
    tag: 'ESSENTIAL',
    photo: 'https://i.scdn.co/image/ab6761670000ecd479712bf0718c962de38dcc1a',
    body: 'Few artists working today have Fana Hues\'s ability to move between delicate vulnerability and fierce directness without ever feeling inconsistent. Her voice is both instrument and statement. She has been one of R&B\'s best-kept secrets for too long, and 2026 is the year the secret gets out.',
    watchFor: 'The control she exercises at the quietest moments. That is where the real technique lives.',
    instagram: 'fanahues',
    spotify: 'Fana Hues',
  },
  {
    number: '09',
    name: 'Leven Kali',
    tag: 'NEO-SOUL',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Leven_Kali_2022.jpg/640px-Leven_Kali_2022.jpg',
    body: 'Leven Kali has been a cornerstone of the neo-soul underground for years as a collaborator and session musician. When he steps fully into the spotlight as a lead artist — which 2026 looks set to deliver — the audience he has already built will know exactly what they are getting. Soft Landing from last year was the mission statement.',
    watchFor: 'His guitar work. He is one of the few vocalists working today who is equally accomplished as an instrumentalist.',
    instagram: 'levenkali',
    spotify: 'Leven Kali',
  },
  {
    number: '10',
    name: 'Ravyn Lenae',
    tag: 'LITERARY',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Ravyn_Lenae_2023.jpg/640px-Ravyn_Lenae_2023.jpg',
    body: 'After years of building one of the most critically admired catalogs in independent R&B, Ravyn Lenae enters 2026 with real momentum. Her writing is literary in a way that almost no other R&B artist attempts — she builds entire emotional architectures in three-minute songs. She is the kind of artist other artists listen to for education.',
    watchFor: 'The lyrics. Read them separately from the music. They hold up on their own.',
    instagram: 'ravynlenae',
    spotify: 'Ravyn Lenae',
  },
  {
    number: '11',
    name: 'Masego',
    tag: 'JAZZ-R&B',
    photo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Masego_2018.jpg/640px-Masego_2018.jpg',
    body: 'Masego has been making jazz-influenced R&B that defies easy category for years. In 2026, the genre has finally caught up to where he has always been. His saxophone is as expressive as his voice, and his live show is one of the best in the genre. If you have slept on him, this is your wake-up call.',
    watchFor: 'The saxophone. Specifically, how he uses it as a vocal counterpart. It is a masterclass.',
    instagram: 'masego',
    spotify: 'Masego',
  },
]

const IconArrowLeft = () => (
  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
    <path d="M13 8H3M7 4L3 8l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const IconSpotify = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

const IconIG = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
  </svg>
)

/* ── Cover Story (first artist — full width) ── */
function CoverStory({ artist }) {
  const [imgError, setImgError] = useState(false)
  return (
    <div className="mb-0 border-b border-[#e3d1b8]/10">
      <div className="grid md:grid-cols-2 min-h-[460px]">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#3d1a22] order-1 md:order-2" style={{ minHeight: '320px' }}>
          {!imgError ? (
            <img
              src={artist.photo}
              alt={artist.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
              style={{ objectPosition: artist.photoFocus || '50% 20%', position: 'absolute', inset: 0 }}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="font-oswald text-[#e3d1b8]/10 uppercase text-2xl">{artist.name}</span>
            </div>
          )}
          {/* Gradient overlay on mobile */}
          <div className="absolute inset-x-0 bottom-0 h-24 md:hidden pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, #5c2a35)' }} />
          {/* Number watermark */}
          <div className="absolute top-4 right-5 font-oswald font-bold text-[#e3d1b8]/8 select-none leading-none"
            style={{ fontSize: 'clamp(5rem, 12vw, 9rem)' }}>
            {artist.number}
          </div>
        </div>

        {/* Text */}
        <div className="order-2 md:order-1 flex flex-col justify-center px-8 py-10 md:py-14 bg-[#4a1f2b]">
          <div className="flex items-center gap-3 mb-5">
            <span className="font-oswald text-[9px] tracking-[0.4em] uppercase text-[#e3d1b8]/40 border border-[#e3d1b8]/15 px-3 py-[4px]">
              {artist.tag}
            </span>
            <span className="font-oswald text-[9px] tracking-[0.3em] uppercase text-[#c9a96e]/60">New Addition</span>
          </div>
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase leading-[0.9] mb-5"
            style={{ fontSize: 'clamp(2.2rem, 6vw, 4rem)' }}>
            {artist.name}
          </h2>
          <p className="font-inter text-[13px] md:text-[14px] text-[#e3d1b8]/65 leading-[1.85] mb-6 max-w-[500px]">
            {artist.body}
          </p>
          <div className="border-l-2 border-[#c9a96e]/30 pl-4 mb-7">
            <p className="font-oswald text-[9px] tracking-[0.3em] uppercase text-[#c9a96e]/50 mb-1">Watch For</p>
            <p className="font-inter text-[12px] text-[#e3d1b8]/50 leading-[1.7]">{artist.watchFor}</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={`https://open.spotify.com/search/${encodeURIComponent(artist.spotify)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1DB954] text-white font-oswald font-bold text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 no-underline"
              style={{ transition: 'background-color 150ms ease' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1ed760'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#1DB954'}>
              <IconSpotify /> Listen
            </a>
            <a href={`https://www.instagram.com/${artist.instagram}/`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 border border-[#e3d1b8]/30 text-[#e3d1b8]/60 font-oswald font-bold text-[10px] tracking-[0.2em] uppercase px-5 py-2.5 no-underline"
              style={{ transition: 'border-color 150ms ease, color 150ms ease' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(227,209,184,0.7)'; e.currentTarget.style.color = 'rgba(227,209,184,0.9)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(227,209,184,0.3)'; e.currentTarget.style.color = 'rgba(227,209,184,0.6)' }}>
              <IconIG /> Follow
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ── Standard artist entry ── */
function ArtistEntry({ artist, index }) {
  const [imgError, setImgError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <div className="border-b border-[#e3d1b8]/8 last:border-b-0">
      <div className={`grid md:grid-cols-[1fr_1.6fr] gap-0 ${isEven ? '' : 'md:[direction:rtl]'}`}>

        {/* Image column */}
        <div className="relative overflow-hidden bg-[#3d1a22]" style={{ minHeight: '280px', direction: 'ltr' }}>
          {!imgError ? (
            <img
              src={artist.photo}
              alt={artist.name}
              onError={() => setImgError(true)}
              className="w-full h-full object-cover absolute inset-0"
              style={{ objectPosition: artist.photoFocus || '50% 20%' }}
            />
          ) : (
            <div className="w-full h-full absolute inset-0 flex items-center justify-center">
              <span className="font-oswald text-[#e3d1b8]/10 uppercase text-xl">{artist.name}</span>
            </div>
          )}
          {/* Number watermark */}
          <div className="absolute bottom-3 right-4 font-oswald font-bold text-[#e3d1b8]/10 select-none leading-none"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}>
            {artist.number}
          </div>
          {/* Tag */}
          <div className="absolute top-3 left-3">
            <span className="font-oswald text-[8px] tracking-[0.3em] uppercase bg-[#5c2a35]/85 border border-[#e3d1b8]/20 text-[#e3d1b8]/70 px-2.5 py-[3px]">
              {artist.tag}
            </span>
          </div>
        </div>

        {/* Text column */}
        <div className="flex flex-col justify-center px-7 py-9 md:py-12" style={{ direction: 'ltr' }}>
          <h2 className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight mb-3"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)' }}>
            {artist.name}
          </h2>
          <p className="font-inter text-[13px] md:text-[14px] text-[#e3d1b8]/65 leading-[1.85] mb-5">
            {artist.body}
          </p>
          <div className="flex items-start gap-2 mb-6">
            <span className="font-oswald text-[8px] tracking-[0.3em] uppercase text-[#e3d1b8]/30 mt-[2px] whitespace-nowrap">Watch for</span>
            <span className="w-[1px] self-stretch bg-[#e3d1b8]/15 mx-1 flex-shrink-0" />
            <p className="font-inter text-[12px] text-[#e3d1b8]/45 leading-[1.7]">{artist.watchFor}</p>
          </div>
          <div className="flex items-center gap-2.5">
            <a href={`https://open.spotify.com/search/${encodeURIComponent(artist.spotify)}`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#1DB954]/70 font-oswald text-[9px] tracking-[0.2em] uppercase no-underline"
              style={{ transition: 'color 150ms ease' }}
              onMouseEnter={e => e.currentTarget.style.color = '#1DB954'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(29,185,84,0.7)'}>
              <IconSpotify /> Spotify
            </a>
            <span className="text-[#e3d1b8]/15 text-xs">·</span>
            <a href={`https://www.instagram.com/${artist.instagram}/`}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#e3d1b8]/35 font-oswald text-[9px] tracking-[0.2em] uppercase no-underline"
              style={{ transition: 'color 150ms ease' }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(227,209,184,0.7)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(227,209,184,0.35)'}>
              <IconIG /> Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BlogArtists2026() {
  const [showSubmit, setShowSubmit] = useState(false)
  const navigate = useNavigate()
  const coverArtist = ARTISTS[0]
  const listArtists = ARTISTS.slice(1)

  return (
    <div className="min-h-screen bg-[#5c2a35]">
      <SEO
        title={POST.title}
        description={POST.subtitle}
        canonical="https://definitionofrnb.com/blog/rnb-artists-to-watch-2026"
        type="article"
        jsonLd={JSON_LD}
      />
      <Nav onSubmitClick={() => setShowSubmit(true)} />

      {/* ── Page header ── */}
      <header className="w-full bg-[#3d1a22] border-b border-[#e3d1b8]/10 py-12 px-5">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <button onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="font-inter text-[11px] text-[#e3d1b8]/40 hover:text-[#e3d1b8]/70 transition-colors bg-transparent border-none cursor-pointer p-0">
              Home
            </button>
            <span className="text-[#e3d1b8]/20 text-[11px]">/</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/40">{POST.category}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="font-oswald text-[9px] tracking-[0.3em] uppercase bg-[#e3d1b8]/10 border border-[#e3d1b8]/20 text-[#e3d1b8]/70 px-3 py-[4px]">{POST.category}</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/30">{POST.date}</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/20">&middot;</span>
            <span className="font-inter text-[11px] text-[#e3d1b8]/30">{POST.readTime}</span>
          </div>
          <h1 className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight mb-4 max-w-[820px]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.2rem)' }}>
            {POST.title}
          </h1>
          <p className="font-inter text-[14px] text-[#e3d1b8]/50 leading-[1.8] max-w-[640px]">{POST.subtitle}</p>
          <div className="flex items-center gap-3 mt-7 pt-6 border-t border-[#e3d1b8]/10">
            <div className="w-8 h-8 rounded-full bg-[#e3d1b8]/10 border border-[#e3d1b8]/20 flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                <circle cx="12" cy="8" r="4" stroke="#e3d1b8" strokeOpacity="0.5" strokeWidth="1.5"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#e3d1b8" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-inter text-[12px] text-[#e3d1b8]/45">{POST.author}</span>
          </div>
        </div>
      </header>

      {/* ── Intro ── */}
      <div className="max-w-screen-xl mx-auto px-5 sm:px-8 py-10 border-b border-[#e3d1b8]/10">
        <p className="font-inter text-[14px] md:text-[15px] text-[#e3d1b8]/70 leading-[1.9] max-w-[720px]">
          Every year we do this list and every year we say the same thing: the future of R&B is in safe hands.
          But in 2026, it feels less like faith and more like obvious fact — and this year we have updated the list
          with one addition that changes everything. Here are the eleven artists you need to have in your ears right now.
        </p>
      </div>

      {/* ── Cover story ── */}
      <div className="max-w-screen-xl mx-auto">
        <div className="px-5 sm:px-8 pt-8 pb-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
            <span className="font-oswald text-[9px] tracking-[0.45em] text-[#e3d1b8]/25 uppercase">Cover Story</span>
            <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          </div>
        </div>
        <CoverStory artist={coverArtist} />

        {/* ── The list ── */}
        <div className="px-5 sm:px-8 pt-10 pb-4">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
            <span className="font-oswald text-[9px] tracking-[0.45em] text-[#e3d1b8]/25 uppercase">The List</span>
            <div className="flex-1 h-[1px] bg-[#e3d1b8]/10" />
          </div>
        </div>

        <div className="overflow-hidden">
          {listArtists.map((artist, i) => (
            <ArtistEntry key={artist.name} artist={artist} index={i} />
          ))}
        </div>

        {/* ── Back link ── */}
        <div className="px-5 sm:px-8 py-12 border-t border-[#e3d1b8]/10 mt-2">
          <button
            onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="inline-flex items-center gap-2 font-inter text-[12px] text-[#e3d1b8]/40 hover:text-[#e3d1b8]/70 transition-colors bg-transparent border-none cursor-pointer p-0">
            <IconArrowLeft />
            Back to home
          </button>
        </div>
      </div>

      <Footer />
      {showSubmit && <SubmitMusic onClose={() => setShowSubmit(false)} />}
    </div>
  )
}
