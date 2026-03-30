import React, { useEffect, useRef, useState } from 'react'

/* ââ TOP LEADERBOARD AD â 728Ã90 / responsive âââââââââââââââââââ
   Publisher: ca-pub-1518235509399666
   Format:    horizontal / leaderboard
   NOTE: Replace AD_SLOT with your actual slot ID from the AdSense
         dashboard (Ad units â Create ad unit â Display ads).
   Only renders after content is mounted to comply with AdSense policy:
   "ads must not appear on screens without publisher content".
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const AD_CLIENT = 'ca-pub-1518235509399666'
const AD_SLOT   = 'REPLACE_WITH_SLOT_ID'  // â set in AdSense dashboard

export default function TopAdBanner() {
  const adRef  = useRef(null)
  const [ready, setReady] = useState(false)

  /* Defer ad push until after surrounding content has mounted.
     This prevents the ad loading on empty / transitioning screens. */
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!ready || !adRef.current) return
    try {
      ;(window.adsbygoogle = window.adsbygoogle || []).push({})
    } catch (e) {
      /* AdSense script not yet loaded â silently skip */
    }
  }, [ready])

  if (!ready) return null

  return (
    <div className="w-full flex justify-center py-2 bg-[#5c2a35]" aria-label="Advertisement">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
