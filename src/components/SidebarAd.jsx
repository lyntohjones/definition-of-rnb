import React, { useEffect, useRef, useState } from 'react'

/* ââ SIDEBAR AD â 300Ã250 medium rectangle ââââââââââââââââââââââ
   Publisher: ca-pub-1518235509399666
   Format:    display / rectangle
   NOTE: Replace AD_SLOT with your actual slot ID from the AdSense
         dashboard (Ad units â Create ad unit â Display ads).
   Only renders after content is mounted to comply with AdSense policy:
   "ads must not appear on screens without publisher content".
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const AD_CLIENT = 'ca-pub-1518235509399666'
const AD_SLOT   = 'REPLACE_WITH_SLOT_ID'  // â set in AdSense dashboard

export default function SidebarAd() {
  const adRef  = useRef(null)
  const [ready, setReady] = useState(false)

  /* Defer ad push until after surrounding content has mounted. */
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 300)
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
    <div className="flex justify-center" aria-label="Advertisement">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '300px', height: '250px' }}
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
      />
    </div>
  )
}
