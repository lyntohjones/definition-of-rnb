import React, { useState } from 'react'

/* ── Play icon ── */
const IconPlay = () => (
  <svg viewBox="0 0 10 12" fill="currentColor" className="w-[9px] h-[9px] ml-[1px]">
    <path d="M0 0l10 6L0 12V0z" />
  </svg>
)

/* ── ArtistCard ──────────────────────────────────────────────────
   Props:
     name     {string}   Artist display name
     label    {string}   Tag label e.g. "Rising Artist", "New Artist"
     bio      {string}   Short 2-3 sentence bio
     photo    {string}   URL or path to artist photo (leave null for placeholder)
     songs    {Array}    Array of up to 3 song objects: { title, feat? }
────────────────────────────────────────────────────────────────── */
export default function ArtistCard({ name, label, bio, photo, songs = [] }) {
  const [activeSong, setActiveSong] = useState(null)

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
              const isActive = activeSong === i
              const title  = typeof song === 'string' ? song : song.title
              const feat   = typeof song === 'object' && song.feat ? song.feat : null

              return (
                <li key={i}>
                  <button
                    onClick={() => setActiveSong(isActive ? null : i)}
                    className="w-full flex items-center gap-2.5 group/song"
                  >
                    {/* Play button */}
                    <span className={"flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center transition-colors " +
                      (isActive
                        ? "bg-[#e3d1b8] text-[#5c2a35]"
                        : "bg-[#e3d1b8]/15 text-[#e3d1b8]/60 group-hover/song:bg-[#e3d1b8]/30")}>
                      <IconPlay />
                    </span>

                    {/* Song title */}
                    <span className={"font-inter text-[11px] truncate transition-colors " +
                      (isActive ? "text-[#e3d1b8]" : "text-[#e3d1b8]/55 group-hover/song:text-[#e3d1b8]/80")}>
                      {title}
                      {feat && (
                        <span className="text-[#e3d1b8]/35 ml-1">ft. {feat}</span>
                      )}
                    </span>

                    {/* Track number */}
                    <span className="flex-shrink-0 font-inter text-[9px] text-[#e3d1b8]/25 ml-auto tabular-nums">
                      0{i + 1}
                    </span>
                  </button>
                </li>
              )
            })}
          </ul>
        </div>

      </div>
    </article>
  )
}
