import React from 'react'

/* ── SIDEBAR AD — 300x600 or 300x250 ────────────────────────────
   When AdSense is approved, replace the placeholder <div> below with:

   <ins className="adsbygoogle"
        style={{ display: 'inline-block', width: '300px', height: '600px' }}
        data-ad-client="ca-pub-XXXXXXX"
        data-ad-slot="XXXXXXXXXX">
   </ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
─────────────────────────────────────────────────────────────── */

export default function SidebarAd() {
  return (
    <div className="sticky top-20">
      <p className="font-inter text-[9px] tracking-[0.25em] text-[#e3d1b8]/25 uppercase text-center mb-2">
        Advertisement
      </p>
      <div
        className="border border-dashed border-[#e3d1b8]/18 bg-[#4a2030] flex items-center justify-center w-full"
        style={{ minHeight: '300px' }}
      >
        <p className="font-inter text-[10px] text-[#e3d1b8]/18 tracking-widest uppercase text-center leading-7">
          Sidebar Ad<br />Google AdSense<br />300×600 / 300×250
        </p>
      </div>
    </div>
  )
}
