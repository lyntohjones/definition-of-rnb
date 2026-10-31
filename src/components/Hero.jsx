import React, { useState, useEffect } from 'react'

/* ── Spotify icon ── */
const IconSpotify = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

/* ── Play icon ── */
const IconPlay = () => (
  <svg viewBox="0 0 10 12" fill="currentColor" className="w-[9px] h-[11px]" aria-hidden="true">
    <path d="M0 0l10 6L0 12V0z" />
  </svg>
)

/* ── Build Spotify search URL ── */
function spotifyUrl(artistName, songTitle) {
  if (songTitle) return `https://open.spotify.com/search/${encodeURIComponent(`${artistName} ${songTitle}`)}`
  return `https://open.spotify.com/search/${encodeURIComponent(artistName)}`
}

/* ── Animation styles injected once ── */
const STYLES = `
@keyframes heroLineIn  { from { transform: translateY(105%); } to { transform: translateY(0); } }
@keyframes heroFadeUp  { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
@keyframes heroPhotoIn { from { opacity: 0; transform: scale(1.04); } to { opacity: 1; transform: scale(1); } }
.hero-line  { animation: heroLineIn  0.9s cubic-bezier(0.22, 1, 0.36, 1) both; }
.hero-fade  { animation: heroFadeUp  0.6s cubic-bezier(0.22, 1, 0.36, 1) both; }
.hero-photo { animation: heroPhotoIn 1.2s cubic-bezier(0.22, 1, 0.36, 1) both; }
.hero-duotone { background: #5c2a35; mix-blend-mode: color; }
.hero-deepen  { background: #3d1a22; mix-blend-mode: multiply; opacity: 0.45; }
@media (prefers-reduced-motion: reduce) {
  .hero-line, .hero-fade, .hero-photo { animation: none; }
}
`

let stylesInjected = false

/* Wine-toned duotone portrait: grayscale photo + colour-blend layer + fades into the page */
function Portrait({ photo, focus, fades }) {
  return (
    <>
      <img
        src={photo}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: focus, filter: 'grayscale(1) contrast(1.1) brightness(0.88)' }}
      />
      <div className="absolute inset-0 hero-duotone" />
      <div className="absolute inset-0 hero-deepen" />
      {fades.map((bg, i) => (
        <div key={i} className="absolute inset-0 pointer-events-none" style={{ background: bg }} />
      ))}
    </>
  )
}

export default function Hero() {
  const [featured, setFeatured] = useState(null)

  /* Inject animation styles once */
  useEffect(() => {
    if (!stylesInjected) {
      const tag = document.createElement('style')
      tag.textContent = STYLES
      document.head.appendChild(tag)
      stylesInjected = true
    }
  }, [])

  useEffect(() => {
    fetch('/data/artists.json')
      .then((r) => r.json())
      .then((data) => {
        const aotw = data.find((a) => a.label === 'Artist of the Week')
        if (aotw) setFeatured(aotw)
      })
      .catch(() => {})
  }, [])

  if (!featured) return null

  const {
    name,
    bio,
    photo,
    photoFocus = '50% 20%',
    songs      = [],
    feature,
    instagram,
  } = featured

  const nameLines = name.split(/\s+/)
  const tracks = (feature?.highlights?.length
    ? feature.highlights
    : songs.map((s) => (typeof s === 'string' ? s : s.title))
  ).slice(0, 3)
  const delay = (s) => ({ animationDelay: `${s}s` })

  return (
    <>
      <section className="relative w-full bg-[#5c2a35] overflow-hidden" aria-labelledby="aotw-name">

        {/* ── Mobile portrait ── */}
        {photo && (
          <div className="md:hidden relative w-full overflow-hidden hero-photo" style={{ aspectRatio: '4 / 5', maxHeight: '68svh' }}>
            <Portrait
              photo={photo}
              focus={photoFocus}
              fades={['linear-gradient(to top, #5c2a35 0%, rgba(92,42,53,0) 45%)']}
            />
          </div>
        )}

        {/* ── Desktop portrait ── */}
        {photo && (
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[60%] overflow-hidden hero-photo" aria-hidden="true">
            <Portrait
              photo={photo}
              focus={photoFocus}
              fades={[
                'linear-gradient(to right, #5c2a35 0%, rgba(92,42,53,0) 30%)',
                'linear-gradient(to top, #5c2a35 0%, rgba(92,42,53,0) 30%)',
              ]}
            />
          </div>
        )}

        {/* ── Content ── */}
        <div
          className="relative z-10 max-w-screen-xl mx-auto px-5 sm:px-6 md:flex md:items-center md:py-10"
          style={{ minHeight: 'min(calc(100svh - 80px), 920px)' }}
        >
          <div className="w-full max-w-[38rem] pb-12 md:pb-0 -mt-[2.2em] md:mt-0">

            {/* Artist name — the cover line */}
            <h1
              id="aotw-name"
              className="font-oswald font-bold text-[#e3d1b8] uppercase m-0"
              style={{ fontSize: 'clamp(4.5rem, 12.5vw, 12rem)', lineHeight: 0.86, letterSpacing: '-0.01em', overflowWrap: 'anywhere' }}
            >
              {nameLines.map((word, i) => (
                <span key={i} className={`block overflow-hidden md:whitespace-nowrap${i % 2 ? ' md:pl-[0.55em]' : ''}`}>
                  <span className="block hero-line" style={delay(0.1 + i * 0.09)}>{word}</span>
                </span>
              ))}
            </h1>

            {/* Kicker */}
            <p className="hero-fade flex items-center gap-3 mt-6 mb-3 font-inter text-[14px] font-medium text-[#e3d1b8]" style={delay(0.35)}>
              Artist of the Week
              <span className="w-8 h-px bg-[#e3d1b8]/40" aria-hidden="true" />
            </p>

            {/* Bio */}
            <p className="hero-fade font-inter text-[16px] md:text-[17px] leading-[1.65] text-[#e3d1b8]/80 max-w-[34rem] m-0" style={delay(0.45)}>
              {bio}
            </p>

            {/* Release + tracklist */}
            {(feature?.album || tracks.length > 0) && (
              <div className="hero-fade mt-7 max-w-[34rem]" style={delay(0.55)}>
                {feature?.album && (
                  <div className="flex items-baseline justify-between gap-4 border-t border-[#e3d1b8]/15 py-3.5">
                    <p className="font-oswald text-[20px] uppercase tracking-[0.02em] text-[#e3d1b8] m-0">{feature.album}</p>
                    {feature.releaseDate && (
                      <p className="font-inter text-[13px] text-[#e3d1b8]/55 text-right m-0">{feature.releaseDate}</p>
                    )}
                  </div>
                )}
                <ol className="list-none m-0 p-0 border-t border-[#e3d1b8]/15">
                  {tracks.map((track, i) => (
                    <li key={track}>
                      <a
                        href={spotifyUrl(name, track)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 h-12 px-2 -mx-2 border-b border-[#e3d1b8]/10 no-underline text-[#e3d1b8]/85 hover:text-[#e3d1b8] hover:bg-[#e3d1b8]/[0.06] transition-colors duration-150"
                      >
                        <span className="font-inter text-[12px] tabular-nums text-[#e3d1b8]/45 w-5">{String(i + 1).padStart(2, '0')}</span>
                        <span className="font-inter text-[15px] flex-1">{track}</span>
                        <span className="flex items-center gap-2 font-inter text-[13px] text-[#e3d1b8]/55">
                          <IconPlay /> Play
                        </span>
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            )}

            {/* CTAs */}
            <div className="hero-fade flex flex-wrap gap-3 mt-7" style={delay(0.7)}>
              <a
                href={spotifyUrl(name)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 h-12 px-6 rounded-[2px] bg-[#e3d1b8] text-[#5c2a35] font-inter font-medium text-[14px] no-underline hover:bg-white transition-colors duration-150"
              >
                <span className="text-[#1DB954]"><IconSpotify /></span>
                Listen on Spotify
              </a>
              <a
                href={`https://www.instagram.com/${instagram || name.toLowerCase().replace(/\s+/g, '')}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center h-12 px-6 rounded-[2px] border border-[#e3d1b8]/40 text-[#e3d1b8] font-inter font-medium text-[14px] no-underline hover:border-[#e3d1b8] hover:bg-[#e3d1b8]/[0.06] transition-colors duration-150"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Feature write-up, moved out of the first viewport ── */}
      {feature?.paragraphs?.length > 0 && (
        <section className="w-full bg-[#3d1a22]">
          <div className="max-w-screen-xl mx-auto px-5 sm:px-6 py-16 md:py-24 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="font-oswald font-bold uppercase text-[#e3d1b8] text-[28px] leading-[1.05] m-0">
                About {name}
              </h2>
              {feature.accolades?.length > 0 && (
                <ul className="list-none m-0 mt-6 p-0">
                  {feature.accolades.map((item) => (
                    <li key={item} className="font-inter text-[14px] leading-[1.5] text-[#e3d1b8]/60 border-t border-[#e3d1b8]/10 py-3">
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="md:col-span-8 max-w-[40rem] flex flex-col gap-5">
              {feature.paragraphs.map((p, i) => (
                <p key={i} className="font-inter text-[16px] md:text-[17px] leading-[1.75] text-[#e3d1b8]/80 m-0">{p}</p>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
