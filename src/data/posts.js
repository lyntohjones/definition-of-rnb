/* ── Blog posts: shared by the homepage grid and the /blog wall ── */

export const WELCOME_POST = {
  slug: 'welcome-to-the-new-definition-of-rnb',
  title: 'Welcome to the New Definition of R&B: Streamlined, Mobile-Ready, and Built for Artists',
  date: 'Mar 9, 2026',
  category: 'Site Update',
  readTime: '3 min read',
  excerpt: 'We rebuilt the platform from the ground up: a new mobile experience, live nav links, a Reviews page and a home for independent artists.',
}

export const POSTS = [
  {
    slug: 'rnb-artists-to-watch-2026',
    title: '11 R&B Artists You Need to Know in 2026',
    date: 'Jan 15, 2026',
    category: 'Features',
    readTime: '7 min read',
    excerpt: 'From a pgLang surprise arrival to cult voices finally breaking through, these eleven names are defining what R&B sounds like in 2026.',
  },
  {
    slug: 'falsetto-renaissance-rnb',
    title: 'The Falsetto Renaissance: Why R&B Singers Are Going Higher',
    date: 'Sep 18, 2025',
    category: 'Culture',
    readTime: '4 min read',
    excerpt: 'From PinkPantheress to Daniel Caesar, a new generation is embracing head voice as emotional language.',
  },
  {
    slug: 'afrobeats-rnb-transatlantic-love-story',
    title: 'Afrobeats and R&B: How Two Genres Became One Sound',
    date: 'Aug 10, 2025',
    category: 'Culture',
    readTime: '5 min read',
    excerpt: 'The cross-pollination of Afrobeats and American R&B has produced a new transatlantic sound reshaping the charts.',
  },
  {
    slug: 'best-rnb-albums-2025',
    title: 'The Best R&B Albums of 2025: Our Year-End Picks',
    date: 'Dec 20, 2025',
    category: 'Reviews',
    readTime: '8 min read',
    excerpt: 'A definitive ranking of the most essential R&B records that shaped the sound of 2025.',
  },
]

export const ALL_POSTS = [POSTS[0], WELCOME_POST, ...POSTS.slice(1)]
