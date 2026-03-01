import React, { useState, useEffect } from 'react'

/* ── Spotify icon ── */
const IconSpotify = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

/* ── Play icon ── */
const IconPlay = () => (
  <svg viewBox="0 0 10 12" fill="currentColor" className="w-3 h-3 ml-[2px]">
    <path d="M0 0l10 6L0 12V0z" />
  </svg>
)

/* ── Build Spotify search URL ── */
function spotifyUrl(artistName, songTitle) {
  if (songTitle) {
    return `https://open.spotify.com/search/${encodeURIComponent(`${artistName} ${songTitle}`)}`
  }
  return `https://open.spotify.com/search/${encodeURIComponent(artistName)}`
}

export default function Hero() {
  const [featured, setFeatured] = useState(null)

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

  const { name, bio, photo, songs = [], feature, instagram } = featured

  return (
    <section className="relative w-full overflow-hidden bg-[#5c2a35]">

      {/* ── Background image (right side, faded into bg) ── */}
      {photo && (
        <div className="absolute right-0 top-0 bottom-0 w-[55%] md:w-[48%] pointer-events-none" aria-hidden="true">
          <img
            src={photo}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#5c2a35] via-[#5c2a35]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#5c2a35] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[#5c2a35]/25" />
        </div>
      )}

      {/* ── Hero content ── */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 py-14 md:py-20">
        <div className="max-w-[680px]">

          {/* Label line */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-[#e3d1b8]/40" />
            <span className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/50 uppercase">
              Featured Artist of the Week
            </span>
          </div>

          {/* Artist name — big type */}
          <h1
            className="font-oswald font-bold text-[#e3d1b8] uppercase leading-[0.92] mb-6"
            style={{ fontSize: 'clamp(3.2rem, 8vw, 7rem)' }}
          >
            {name}
          </h1>

          {/* Short bio */}
          <p className="font-inter text-[13px] md:text-[14px] text-[#e3d1b8]/65 leading-[1.8] mb-6 max-w-[580px]">
            {bio}
          </p>

          {/* ── Feature writeup ── */}
          {feature && (
            <div className="mb-8">

              {/* New release header */}
              {feature.album && (
                <div className="border-l-2 border-[#e3d1b8]/25 pl-4 mb-5">
                  <p className="font-oswald text-[9px] tracking-[0.35em] text-[#e3d1b8]/40 uppercase mb-1">
                    Latest Release
                  </p>
                  <p className="font-oswald text-[#e3d1b8]/90 uppercase tracking-wide"
                     style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}>
                    {feature.album}
                  </p>
                  {feature.releaseDate && (
                    <p className="font-inter text-[11px] text-[#e3d1b8]/40 mt-1">
                      {feature.releaseDate}
                    </p>
                  )}
                </div>
              )}

              {/* Feature paragraphs */}
              {feature.paragraphs && feature.paragraphs.map((p, i) => (
                <p key={i} className="font-inter text-[12px] md:text-[13px] text-[#e3d1b8]/55 leading-[1.8] mb-4 max-w-[560px]">
                  {p}
                </p>
              ))}

              {/* Key tracks with Spotify links */}
              {feature.highlights && feature.highlights.length > 0 && (
                <div className="mt-5">
                  <p className="font-oswald text-[9px] tracking-[0.3em] text-[#e3d1b8]/35 uppercase mb-3">
                    Key Tracks
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {feature.highlights.map((track, i) => (
                      <a
                        key={i}
                        href={spotifyUrl(name, track)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-[#1DB954]/10 border border-[#1DB954]/20 px-3 py-[6px] hover:bg-[#1DB954]/20 transition-colors no-underline group"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#1DB954]/20 flex items-center justify-center text-[#1DB954] group-hover:bg-[#1DB954]/40 transition-colors">
                          <IconPlay />
                        </span>
                        <span className="font-inter text-[11px] text-[#e3d1b8]/70 group-hover:text-[#e3d1b8]/90 transition-colors">
                          {track}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Awards / badges */}
              {feature.accolades && feature.accolades.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {feature.accolades.map((badge, i) => (
                    <span
                      key={i}
                      className="font-oswald text-[9px] tracking-[0.2em] text-[#e3d1b8]/50 uppercase border border-[#e3d1b8]/15 px-3 py-[5px]"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Fallback: if no feature data, show songs as pills */}
          {songs.length > 0 && !feature && (
            <div className="mb-8">
              <p className="font-oswald text-[9px] tracking-[0.3em] text-[#e3d1b8]/35 uppercase mb-3">
                Top Tracks
              </p>
              <div className="flex flex-wrap gap-2">
                {songs.slice(0, 3).map((song, i) => {
                  const title = typeof song === 'string' ? song : song.title
                  return (
                    <a
                      key={i}
                      href={spotifyUrl(name, title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-[#1DB954]/10 border border-[#1DB954]/20 px-3 py-[6px] hover:bg-[#1DB954]/20 transition-colors no-underline group"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#1DB954]/20 flex items-center justify-center text-[#1DB954]">
                        <IconPlay />
                      </span>
                      <span className="font-inter text-[11px] text-[#e3d1b8]/70 group-hover:text-[#e3d1b8]/90">
                        {title}
                      </span>
                    </a>
                  )
                })}
              </div>
            </div>
          )}

          {/* ── CTA buttons ── */}
          <div className="flex flex-wrap gap-3">
            <a
              href={spotifyUrl(name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#1DB954] text-white font-oswald font-bold text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#1ed760] transition-colors no-underline"
            >
              <IconSpotify />
              LISTEN ON SPOTIFY
            </a>
            <a
              href={`https://www.instagram.com/${instagram || name.toLowerCase().replace(/\s+/g, '')}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#e3d1b8]/60 text-[#e3d1b8] font-oswald font-bold text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-[#e3d1b8]/10 transition-colors no-underline"
            >
              FOLLOW ON IG
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
