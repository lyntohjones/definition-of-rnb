import React from 'react'

/* ── Spotify icon (green circle + logo) ── */
const IconSpotify = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[11px] h-[11px]">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
)

/* ── Play icon ── */
const IconPlay = () => (
  <svg viewBox="0 0 10 12" fill="currentColor" className="w-[9px] h-[9px] ml-[1px]">
    <path d="M0 0l10 6L0 12V0z" />
  </svg>
)

/* ── Build Spotify search URL ── */
function spotifySearchUrl(artistName, songTitle) {
  const q = encodeURIComponent(`${artistName} ${songTitle}`)
  return `https://open.spotify.com/search/${q}`
}

/* ── ArtistCard ──────────────────────────────────────────────────
   Props:
     name     {string}   Artist display name
     label    {string}   Tag label e.g. "Rising Artist", "New Artist"
     bio      {string}   Short 2-3 sentence bio
     photo    {string}   URL or path to artist photo (leave null for placeholder)
     songs    {Array}    Array of up to 3 song objects: { title, feat? }
────────────────────────────────────────────────────────────────── */
export default function ArtistCard({ name, label, bio, photo, songs = [] }) {

  return (
    <article className="border-2 border-[#e3d1b8] bg-[#4a2030] flex flex-col group hover:bg-[#521f2b] transition-colors duration-200">

      {/* ── Artist photo ── */}
      <div className="w-full overflow-hidden bg-[#3d1a22] relative" style={{ aspectRatio: '4/3' }}>
        {photo ? (
          <img
            src={photo}
            alt={name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          /* Placeholder */
          <div className="w-full h-full flex flex-col items-center justify-center gap-2">
            <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 opacity-10">
              <circle cx="32" cy="24" r="14" fill="#e3d1b8" />
              <path d="M4 60c0-15.464 12.536-28 28-28s28 12.536 28 28" fill="#e3d1b8" />
            </svg>
            <p className="font-inter text-[9px] tracking-widest text-[#e3d1b8]/20 uppercase">
              Artist Photo
            </p>
          </div>
        )}

        {/* Label badge */}
        <div className="absolute top-3 left-3 bg-[#5c2a35]/90 border border-[#e3d1b8]/30 px-2 py-[3px]">
          <span className="font-oswald text-[9px] tracking-[0.22em] text-[#e3d1b8]/80 uppercase">
            {label || 'Up & Coming'}
          </span>
        </div>
      </div>

      {/* ── Card body ── */}
      <div className="flex flex-col flex-1 p-4">

        {/* Artist name */}
        <h3 className="font-oswald font-bold text-[#e3d1b8] uppercase leading-tight mb-2"
            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}>
          {name}
        </h3>

        {/* Bio */}
        <p className="font-inter text-[11px] text-[#e3d1b8]/60 leading-[1.6] mb-4 flex-1">
          {bio}
        </p>

        {/* ── Latest songs ── */}
        <div className="border-t border-[#e3d1b8]/20 pt-3">
          <p className="font-oswald text-[9px] tracking-[0.28em] text-[#e3d1b8]/35 uppercase mb-2">
            Latest Releases
          </p>

          <ul className="space-y-[7px]">
            {songs.slice(0, 3).map((song, i) => {
              const title  = typeof song === 'string' ? song : song.title
              const feat   = typeof song === 'object' && song.feat ? song.feat : null
              const href   = spotifySearchUrl(name, title)

              return (
                <li key={i}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center gap-2.5 group/song no-underline"
                  >
                    {/* Spotify play button */}
                    <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors bg-[#1DB954]/20 text-[#1DB954] group-hover/song:bg-[#1DB954]/40">
                      <IconPlay />
                    </span>

                    {/* Song title */}
                    <span className="font-inter text-[11px] truncate transition-colors text-[#e3d1b8]/55 group-hover/song:text-[#e3d1b8]/80">
                      {title}
                      {feat && (
                        <span className="text-[#e3d1b8]/35 ml-1">ft. {feat}</span>
                      )}
                    </span>

                    {/* Spotify icon */}
                    <span className="flex-shrink-0 ml-auto text-[#1DB954]/40 group-hover/song:text-[#1DB954]/80 transition-colors">
                      <IconSpotify />
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </article>
  )
}
