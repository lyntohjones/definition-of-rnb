import React from 'react'
import BlogCard  from './BlogCard'
import SidebarAd from './SidebarAd'

const POSTS = [
  {
    id: 1,
    category: 'Artist Profile',
    title: 'The Evolution of UK Alt-R&B',
    artist: '[Artist Name Placeholder]',
    date: 'Apr 1, 2023',
    duration: '0:55',
  },
  {
    id: 2,
    category: 'Album Review',
    title: 'A Close Look at the Latest from Tiana',
    artist: '[Artist Name Placeholder]',
    date: 'Apr 1, 2023',
    duration: '0:55',
  },
  {
    id: 3,
    category: 'Album Review',
    title: 'Curated Soul Mix: Vol. 15',
    artist: '[Artist Soul Mix. 15]',
    date: 'Apr 1, 2023',
    duration: '0:35',
  },
  {
    id: 4,
    category: 'Artist Profile',
    title: 'The Evolution of Alt-R&B',
    artist: '[Artist Soul Mix]',
    date: 'Apr 1, 2023',
    duration: '0:35',
  },
  {
    id: 5,
    category: 'Album Review',
    title: 'Curated Soul Mix: Vol. 15',
    artist: '[Artist Soul Link At]',
    date: 'Apr 1, 2023',
    duration: '0:58',
  },
  {
    id: 6,
    category: 'Album Review',
    title: 'Curated Soul Mix: Vol. 15',
    artist: '[Artist Soul Mix. 15]',
    date: 'Nov 1, 2023',
    duration: '6:25',
  },
]

export default function BlogGrid() {
  return (
    <section className="w-full bg-[#5c2a35] py-12 px-4">
      <div className="max-w-screen-xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-10">
          <h2
            className="font-oswald font-bold text-[#e3d1b8] uppercase tracking-[0.12em]"
            style={{ fontSize: 'clamp(1.4rem, 3vw, 2.1rem)' }}
          >
            LATEST FROM THE BLOG
          </h2>
          <div className="w-10 h-[1px] bg-[#e3d1b8]/30 mx-auto mt-3" />
        </div>

        {/* Grid + sidebar */}
        <div className="flex gap-8 items-start">
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {POSTS.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
            <div className="text-center mt-10">
              <button className="border border-[#e3d1b8]/45 text-[#e3d1b8] font-oswald font-medium text-[11px] tracking-[0.25em] uppercase px-10 py-3 hover:bg-[#e3d1b8]/10 transition-colors">
                LOAD MORE
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
