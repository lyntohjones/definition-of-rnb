import React, { useState } from 'react'

const GENRES = [
  'R&B / Soul',
  'Neo-Soul',
  'Alternative R&B',
  'Gospel / Inspirational',
  'Afrobeats / Afro-Soul',
  'Caribbean / Reggae',
  'Hip-Hop / Rap',
  'Other',
]

export default function SubmitMusic({ onClose }) {
  const [form, setForm] = useState({
    artistName: '',
    email: '',
    city: '',
    genre: '',
    songTitle: '',
    spotifyLink: '',
    appleMusicLink: '',
    soundcloudLink: '',
    instagram: '',
    bio: '',
    message: '',
  })
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  function update(field) {
    return (e) => setForm((f) => ({ ...f, [field]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')

    // Build mailto fallback (works without backend)
    const subject = encodeURIComponent(`Music Submission: ${form.artistName} — ${form.songTitle}`)
    const body = encodeURIComponent(
      `Artist: ${form.artistName}\n` +
      `Email: ${form.email}\n` +
      `City: ${form.city}\n` +
      `Genre: ${form.genre}\n` +
      `Song: ${form.songTitle}\n` +
      `Spotify: ${form.spotifyLink}\n` +
      `Apple Music: ${form.appleMusicLink}\n` +
      `SoundCloud: ${form.soundcloudLink}\n` +
      `Instagram: ${form.instagram}\n\n` +
      `Bio:\n${form.bio}\n\n` +
      `Message:\n${form.message}`
    )

    // Try form endpoint first (can be swapped to n8n webhook, Formspree, etc.)
    const FORM_ENDPOINT = window.__SUBMIT_ENDPOINT__

    if (FORM_ENDPOINT) {
      try {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (res.ok) {
          setStatus('sent')
          return
        }
      } catch {
        // Fall through to mailto
      }
    }

    // Fallback: open mailto link
    window.location.href = `mailto:submit@definitionofrnb.com?subject=${subject}&body=${body}`
    setStatus('sent')
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-[620px] max-h-[90vh] overflow-y-auto mx-4 bg-[#3d1a22] border border-[#e3d1b8]/20">

        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#3d1a22] border-b border-[#e3d1b8]/15 px-8 py-5 flex items-center justify-between">
          <div>
            <h2 className="font-oswald font-bold text-[#e3d1b8] text-xl tracking-[0.15em] uppercase">
              Submit Your Music
            </h2>
            <p className="font-inter text-[11px] text-[#e3d1b8]/40 mt-1">
              We feature independent R&B artists every week
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-[#e3d1b8]/40 hover:text-[#e3d1b8] transition-colors text-2xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Sent state */}
        {status === 'sent' ? (
          <div className="px-8 py-16 text-center">
            <div className="w-14 h-14 rounded-full bg-[#1DB954]/20 flex items-center justify-center mx-auto mb-5">
              <svg viewBox="0 0 24 24" fill="none" stroke="#1DB954" strokeWidth="2.5" className="w-7 h-7">
                <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="font-oswald text-[#e3d1b8] text-lg tracking-[0.1em] uppercase mb-2">
              Submission Received
            </h3>
            <p className="font-inter text-[13px] text-[#e3d1b8]/50 leading-relaxed max-w-[380px] mx-auto">
              We listen to every submission. If your sound fits what we're building, you'll hear from us within 7 days.
            </p>
            <button
              onClick={onClose}
              className="mt-8 bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-white transition-colors"
            >
              CLOSE
            </button>
          </div>
        ) : (

          /* Form */
          <form onSubmit={handleSubmit} className="px-8 py-6 space-y-5">

            {/* Row: Artist Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="Artist / Group Name" required>
                <input
                  type="text"
                  required
                  value={form.artistName}
                  onChange={update('artistName')}
                  placeholder="e.g. Aqyila"
                />
              </Field>
              <Field label="Email" required>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={update('email')}
                  placeholder="you@email.com"
                />
              </Field>
            </div>

            {/* Row: City + Genre */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Field label="City / Country">
                <input
                  type="text"
                  value={form.city}
                  onChange={update('city')}
                  placeholder="e.g. Toronto, Canada"
                />
              </Field>
              <Field label="Genre" required>
                <select
                  required
                  value={form.genre}
                  onChange={update('genre')}
                >
                  <option value="">Select genre</option>
                  {GENRES.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </Field>
            </div>

            {/* Song title */}
            <Field label="Song Title" required>
              <input
                type="text"
                required
                value={form.songTitle}
                onChange={update('songTitle')}
                placeholder="Title of the track you're submitting"
              />
            </Field>

            {/* Streaming links */}
            <div className="border-t border-[#e3d1b8]/10 pt-5">
              <p className="font-oswald text-[9px] tracking-[0.3em] text-[#e3d1b8]/35 uppercase mb-3">
                Streaming Links (at least one required)
              </p>
              <div className="space-y-3">
                <Field label="Spotify">
                  <input
                    type="url"
                    value={form.spotifyLink}
                    onChange={update('spotifyLink')}
                    placeholder="https://open.spotify.com/track/..."
                  />
                </Field>
                <Field label="Apple Music">
                  <input
                    type="url"
                    value={form.appleMusicLink}
                    onChange={update('appleMusicLink')}
                    placeholder="https://music.apple.com/..."
                  />
                </Field>
                <Field label="SoundCloud">
                  <input
                    type="url"
                    value={form.soundcloudLink}
                    onChange={update('soundcloudLink')}
                    placeholder="https://soundcloud.com/..."
                  />
                </Field>
              </div>
            </div>

            {/* Instagram */}
            <Field label="Instagram Handle">
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#e3d1b8]/30 font-inter text-[13px]">@</span>
                <input
                  type="text"
                  value={form.instagram}
                  onChange={update('instagram')}
                  placeholder="yourhandle"
                  className="!pl-7"
                />
              </div>
            </Field>

            {/* Bio */}
            <Field label="Short Bio">
              <textarea
                rows={3}
                value={form.bio}
                onChange={update('bio')}
                placeholder="Tell us about yourself and your sound in 2-3 sentences"
              />
            </Field>

            {/* Message */}
            <Field label="Anything Else">
              <textarea
                rows={2}
                value={form.message}
                onChange={update('message')}
                placeholder="Why should we feature this track? (optional)"
              />
            </Field>

            {/* Submit */}
            <div className="border-t border-[#e3d1b8]/10 pt-5 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="bg-[#e3d1b8] text-[#5c2a35] font-oswald font-bold text-xs tracking-[0.2em] uppercase px-8 py-3 hover:bg-white transition-colors disabled:opacity-50"
              >
                {status === 'sending' ? 'SUBMITTING...' : 'SUBMIT'}
              </button>
              <p className="font-inter text-[10px] text-[#e3d1b8]/30 leading-relaxed">
                By submitting you agree to be contacted about potential features on The Definition of R&B.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

/* ── Reusable field wrapper ── */
function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="font-oswald text-[10px] tracking-[0.2em] text-[#e3d1b8]/50 uppercase mb-1.5 block">
        {label} {required && <span className="text-[#e3d1b8]/25">*</span>}
      </span>
      <div
        className={[
          '[&_input]:w-full [&_input]:bg-[#5c2a35]/60 [&_input]:border [&_input]:border-[#e3d1b8]/15',
          '[&_input]:text-[#e3d1b8] [&_input]:font-inter [&_input]:text-[13px] [&_input]:px-3 [&_input]:py-2.5',
          '[&_input]:outline-none [&_input]:focus:border-[#e3d1b8]/40 [&_input]:transition-colors',
          '[&_input]:placeholder:text-[#e3d1b8]/20',
          '[&_select]:w-full [&_select]:bg-[#5c2a35]/60 [&_select]:border [&_select]:border-[#e3d1b8]/15',
          '[&_select]:text-[#e3d1b8] [&_select]:font-inter [&_select]:text-[13px] [&_select]:px-3 [&_select]:py-2.5',
          '[&_select]:outline-none [&_select]:focus:border-[#e3d1b8]/40 [&_select]:transition-colors',
          '[&_select]:appearance-none',
          '[&_textarea]:w-full [&_textarea]:bg-[#5c2a35]/60 [&_textarea]:border [&_textarea]:border-[#e3d1b8]/15',
          '[&_textarea]:text-[#e3d1b8] [&_textarea]:font-inter [&_textarea]:text-[13px] [&_textarea]:px-3 [&_textarea]:py-2.5',
          '[&_textarea]:outline-none [&_textarea]:focus:border-[#e3d1b8]/40 [&_textarea]:transition-colors',
          '[&_textarea]:placeholder:text-[#e3d1b8]/20 [&_textarea]:resize-none',
        ].join(' ')}
      >
        {children}
      </div>
    </label>
  )
}
