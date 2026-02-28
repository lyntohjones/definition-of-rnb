import React from 'react'

/* ── IN-FEED / IN-ARTICLE AD ────────────────────────────────────
   When AdSense is approved, replace the placeholder <div> below with:

   <ins className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-XXXXXXX"
        data-ad-slot="XXXXXXXXXX">
   </ins>
   <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
─────────────────────────────────────────────────────────────── */

export default function InFeedAd() {
  return (
    <div className="w-full bg-[#5c2a35] border-y border-[#e3d1b8]/10 py-3">
      <div className="max-w-screen-xl mx-auto px-6 flex justify-center">
        <div className="w-full max-w-2xl h-14 border border-dashed border-[#e3d1b8]/15 flex items-center justify-center">
          <p className="font-inter text-[10px] tracking-[0.2em] text-[#e3d1b8]/20 uppercase">
            In-Feed Advertisement — Google AdSense
          </p>
        </div>
      </div>
    </div>
  )
}
