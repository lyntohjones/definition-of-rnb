import React, { useState } from 'react'

/* ── Waveform bars ── */
const BARS = [2,4,3,7,4,8,5,3,7,4,9,3,5,8,4,7,3,6,9,4,3,7,4,5,8,3,6,4,7,2]

function Waveform({ active }) {
  return (
    <div className="flex items-center gap-[1.5px] h-[14px] flex-1 min-w-0">
      {BARS.map((h, i) => (
        <div
          key={i}
          className={"w-[2px] rounded-full flex-shrink-0 transition-colors " +
            (active ? "bg-[#e3d1b8]" : "bg-[#e3d1b8]/45")}
          style={{ height: Math.max(2, Math.round((h / 9) * 13)) + "px" }}
        />
      ))}
    </div>
  )
}

/* ── SVG Icons ── */
const IconPlay = () => (
  <svg viewBox="0 0 10 12" fill="currentColor" className="w-[10px] h-[10px] ml-[1px]">
    <path d="M0 0l10 6L0 12V0z" />
  </svg>
)
const IconPause = () => (
  <svg viewBox="0 0 10 12" fill="currentColor" className="w-[10px] h-[10px]">
    <rect x="0" y="0" width="3.5" height="12" rx="1" />
    <rect x="6.5" y="0" width="3.5" height="12" rx="1" />
  </svg>
)
const IconSkip = () => (
  <svg viewBox="0 0 14 12" fill="currentColor" className="w-[10px] h-[10px]">
    <path d="M0 0l9 6-9 6V0zM11 0h3v12h-3V0z" />
  </svg>
)
const IconRepeat = () => (
  <svg viewBox="0 0 16 14" fill="currentColor" className="w-[10px] h-[10px]">
    <path d="M3 2h9v3l4-3.5L12 0v2H2v5h1V2zm10 10H4v-3l-4 3.5L4 16v-2h11V9h-1v4z" />
  </svg>
)

/* ── BlogCard ── */
export default function BlogCard({ category, title, artist, date, duration, thumbnail }) {
  const [playing, setPlaying] = useState(false)

  const thumbStyle = thumbnail
    ? {
        aspectRatio: '1/1',
        backgroundImage: 'url(' + thumbnail + ')',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : { aspectRatio: '1/1' }

  return (
    <article className="border-2 border-[#e3d1b8] bg-[#4a2030] flex flex-col hover:bg-[#521f2b] transition-colors duration-200 cursor-pointer">

      {/* Top: thumbnail + meta */}
      <div className="flex">
        <div className="w-[38%] flex-shrink-0 bg-[#3d1a22] overflow-hidden" style={thumbStyle}>
          {!thumbnail && (
            <div className="w-full h-full flex items-center justify-center">
              <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10 opacity-10">
                <circle cx="24" cy="24" r="24" fill="#e3d1b8" />
                <path d="M16 30V18l18 6-18 6z" fill="#5c2a35" />
              </svg>
            </div>
          )}
        </div>
        <div className="flex-1 p-3 flex flex-col min-h-[100px]">
          <p className="font-oswald text-[9px] tracking-[0.22em] text-[#e3d1b8]/45 uppercase mb-1">
            {category}
          </p>
          <h3 className="font-oswald font-bold text-[#e3d1b8] text-[13px] leading-[1.25] uppercase line-clamp-3">
            {title}
          </h3>
        </div>
      </div>

      {/* Player strip */}
      <div className="border-t border-[#e3d1b8]/20 px-3 pt-2 pb-2 mt-auto">
        {/* Controls row */}
        <div className="flex items-center gap-[7px]">
          <button
            onClick={() => setPlaying(!playing)}
            className="flex-shrink-0 w-[22px] h-[22px] rounded-full bg-[#e3d1b8] flex items-center justify-center text-[#5c2a35] hover:bg-white transition-colors"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <IconPause /> : <IconPlay />}
          </button>
          <button className="flex-shrink-0 text-[#e3d1b8]/40 hover:text-[#e3d1b8] transition-colors">
            <IconSkip />
          </button>
          <button className="flex-shrink-0 text-[#e3d1b8]/40 hover:text-[#e3d1b8] transition-colors">
            <IconRepeat />
          </button>
          <Waveform active={playing} />
          <span className="flex-shrink-0 font-inter text-[10px] text-[#e3d1b8]/45 tabular-nums">
            {duration}
          </span>
        </div>
        {/* Artist + date row */}
        <div className="flex items-center justify-between mt-[5px]">
          <span className="font-inter text-[9px] text-[#e3d1b8]/38 uppercase tracking-wide truncate mr-2">
            {artist}
          </span>
          <span className="font-inter text-[9px] text-[#e3d1b8]/38 flex-shrink-0">
            {date}
          </span>
        </div>
      </div>
    </article>
  )
}
