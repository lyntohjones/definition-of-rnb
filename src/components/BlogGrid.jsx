import React from 'react'
import ArtistCard from './ArtistCard'
import SidebarAd  from './SidebarAd'

/* ── Artist data ─────────────────────────────────────────────────
   Replace name / bio / photo / songs with real data.
   photo: '/artists/your-filename.jpg'
          → Drop images into D:\definition-of-rnb\public\artists\
   songs: array of strings OR { title, feat } objects
──────────────────────────────────────────────────────────────── */
const ARTISTS = [
  {
    id: 1,
    label: 'Rising Artist',
    name: '[Artist Name]',
    bio: 'A boundary-pushing vocalist blending neo-soul textures with raw lyricism. Born and raised in Atlanta, their debut project earned critical praise for its emotional depth and sonic range.',
    photo: null,
    songs: [
      { title: 'Latest Single Title' },
      { title: 'Second Newest Track' },
      { title: 'Third Newest Release' },
    ],
  },
  {
    id: 2,
    label: 'New Artist',
    name: '[Artist Name]',
    bio: "Emerging from London's underground scene, this self-produced artist crafts intimate bedroom R&B that has already attracted major-label attention and a rapidly growing fanbase.",
    photo: null,
    songs: [
      { title: 'Latest Single Title' },
      { title: 'Second Newest Track' },
      { title: 'Third Newest Release' },
    ],
  },
  {
    id: 3,
    label: 'Up & Coming',
    name: '[Artist Name]',
    bio: 'Toronto-based singer-songwriter fusing Caribbean influences with contemporary R&B. Their independent releases have accumulated millions of streams with no label backing.',
    photo: null,
    songs: [
      { title: 'Latest Single Title' },
      { title: 'Second Newest Track', feat: 'Feature Artist' },
      { title: 'Third Newest Release' },
    ],
  },
  {
    id: 4,
    label: 'Rising Artist',
    name: '[Artist Name]',
    bio: 'A Houston native redefining Southern R&B with cinematic production and confessional songwriting. Already co-signed by two prominent artists in the genre.',
    photo: null,
    songs: [
      { title: 'Latest Single Title' },
      { title: 'Second Newest Track' },
      { title: 'Third Newest Release' },
    ],
  },
  {
    id: 5,
    label: 'New Artist',
    name: '[Artist Name]',
    bio: 'Genre-fluid vocalist drawing from jazz, gospel, and modern R&B. Their viral live session clips have built a loyal following ahead of their anticipated debut EP.',
    photo: null,
    songs: [
      { title: 'Latest Single Title' },
      { title: 'Second Newest Track' },
      { title: 'Third Newest Release', feat: 'Feature Artist' },
    ],
  },
  {
    id: 6,
    label: 'Up & Coming',
    name: '[Artist Name]',
    bio: 'Los Angeles-based producer-vocalist crafting polished alt-R&B with dark, moody undertones. Their debut single debuted in the Top 40 on R&B streaming charts.',
    photo: null,
    songs: [
      { title: 'Latest Single Title' },
      { title: 'Second Newest Track' },
      { title: 'Third Newest Release' },
    ],
  },
]

export default function BlogGrid() {
  return (
    <section className="w-full bg-[#5c2a35] py-12 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* ── Section header ── */}
        <div className="text-center mb-10">
          <p className="font-oswald text-[10px] tracking-[0.4em] text-[#e3d1b8]/35 uppercase mb-2">
            ◆ Spotlight ◆
          </p>
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-[0.1em]"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}
          >
            UP &amp; COMING ARTISTS
          </h2>
          <div className="w-10 h-[1px] bg-[#e3d1b8]/30 mx-auto mt-3" />
        </div>

        {/* ── Grid + sidebar ── */}
        <div className="flex gap-8 items-start">

          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {ARTISTS.map((artist) => (
                <ArtistCard key={artist.id} {...artist} />
              ))}
            </div>
            <div className="text-center mt-10">
              <button className="border border-[#e3d1b8]/45 text-[#e3d1b8] font-oswald font-medium text-[11px] tracking-[0.25em] uppercase px-10 py-3 hover:bg-[#e3d1b8]/10 transition-colors">
                LOAD MORE ARTISTS
              </button>
            </div>
          </div>

          <aside className="hidden xl:block w-[260px] flex-shrink-0">
            <SidebarAd />
          </aside>

        </div>
      </div>
    </section>
  )
}
