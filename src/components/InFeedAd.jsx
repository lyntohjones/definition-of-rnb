import React, { useEffect, useRef, useState } from 'react'

/* ââ IN-FEED / IN-ARTICLE AD ââââââââââââââââââââââââââââââââââââ
   Publisher: ca-pub-1518235509399666
   Format:    in-article / fluid
   NOTE: Replace AD_SLOT with your actual slot ID from the AdSense
         dashboard (Ad units â Create ad unit â In-article ads).
   Only renders after content is mounted to comply with AdSense policy:
   "ads must not appear on screens without publisher content".
ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ */

const AD_CLIENT = 'ca-pub-1518235509399666'
const AD_SLOT   = 'REPLACE_WITH_SLOT_ID'  // â set in AdSense dashboard

export default function InFeedAd() {
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
    <div className="w-full max-w-screen-xl mx-auto px-4 py-4" aria-label="Advertisement">
      <ins
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client={AD_CLIENT}
        data-ad-slot={AD_SLOT}
      />
    </div>
  )
}
