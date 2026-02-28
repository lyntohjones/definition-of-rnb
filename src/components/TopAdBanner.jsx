import React from 'react'

/* ── TOP LEADERBOARD AD — 728x90 ────────────────────────────────
   When AdSense is approved, replace the placeholder <div> below with:

   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXX" crossOrigin="anonymous"></script>
   <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-XXXXXXX"
        data-ad-slot="XXXXXXXXXX"
        data-ad-format="auto"
        data-full-width-responsive="true">
   </ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
─────────────────────────────────────────────────────────────── */

export default function TopAdBanner() {
  return (
    <div className="w-full bg-[#4a2030] border-b border-[#e3d1b8]/10">
      <div className="max-w-screen-xl mx-auto px-6 h-[90px] flex items-center justify-center">
        <div className="w-full max-w-[728px] h-[70px] border border-dashed border-[#e3d1b8]/20 flex items-center justify-center">
          <p className="font-inter text-[10px] tracking-[0.2em] text-[#e3d1b8]/25 uppercase">
            Advertisement — Google AdSense (728×90 Leaderboard)
          </p>
        </div>
      </div>
    </div>
  )
}
