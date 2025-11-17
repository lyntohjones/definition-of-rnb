# COMPLETE IMPLEMENTATION GUIDE
## Definition of R&B - Artist Discovery Platform

**Date:** November 17, 2025  
**Goal:** Transform the website into an SEO-optimized artist discovery platform with bi-weekly featured artists, automatic content workflow, and Instagram management.

---

## 🎯 PROJECT OVERVIEW

### Vision
Create the go-to platform for discovering new and up-and-coming R&B artists (under 500k followers) with:
- Focus: 20% Toronto artists, 80% USA/UK/International
- Featured artist rotation every 2 weeks
- Paid artist submission service
- Full Instagram integration and automated management
- Top-tier SEO to rank #1 for "new R&B artists"

### Key Features
1. **Hero Section**: "Discover Fresh R&B Talent"
2. **Artist Cards**: Profile photo, short bio, top 3 songs with embed players
3. **Featured Artist Spotlight**: Bi-weekly rotation
4. **Artist Submission CTA**: Paid service to get featured
5. **SEO Optimization**: Keywords for discovery and traffic

---

## 📋 ARTIST DATABASE (CURATED)

### Toronto Artists (20% Focus)
1. **Rowena Fysx** - Filipino-Canadian alternative R&B, mesmerizing sound
2. **THEHONESTGUY** - Smooth, soulful R&B from Toronto
3. **Benita** - Intoxicating, moody vibes, recent hit "Selfish"
4. **Maz B** - Toronto singer, smooth slow-burning & heartfelt
5. **Aqyila** - Known for "Bloom", "Hello", "Vibe For Me", Juno nominee

### USA Artists
1. **Avara** - US-based R&B singer/producer, Indian roots, "runnin' round / flawless"
2. **James Savage** - Louisville, KY - destined for festival crowds
3. **SAILORR** - Jacksonville, FL - standout 2025 artist
4. **Kenji** - Brooklyn, NY - draws inspiration from D'Angelo, Erykah Badu
5. **Aaron Childs** - Los Angeles - neo-soul, jazz, R&B blend

### UK/International Artists
1. **Sasha Keable** - London - 4 standout singles 2024, poised to blow up
2. **kwn (kay-wuhn)** - London - amazing songwriting, worked with Kehlani
3. **Aka Kelzz** - Birmingham - introspective lyrics, welcoming space
4. **TIANNA** - Bristol - fusion of classic/contemporary, jungle elements
5. **JELISA** - Amsterdam/Netherlands - Dutch soul/jazz, Spotify Movement playlist

---

## 🎨 WEBSITE REDESIGN STRUCTURE

### NEW Homepage Layout

```
┌─────────────────────────────────────────────────────────┐
│                    HEADER / NAV                         │
│  Logo  | Discover | Artists | Submit Music | About |  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              HERO SECTION                               │
│                                                         │
│          Discover Fresh R&B Talent                      │
│   Uncover the next wave of soulful voices shaping      │
│            the future of R&B music                      │
│                                                         │
│           [Explore Artists] [Submit Your Music]         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│         🌟 FEATURED ARTIST (Rotates Bi-Weekly)          │
│  ┌───────────┐                                          │
│  │           │   Artist Name - City, Country            │
│  │   Photo   │                                          │
│  │           │   Short Bio (150-200 words)              │
│  └───────────┘                                          │
│                                                         │
│   Top 3 Songs:                                          │
│   1. Song Title [Spotify/YouTube player]                │
│   2. Song Title [Spotify/YouTube player]                │
│   3. Song Title [Spotify/YouTube player]                │
│                                                         │
│   [@Instagram] [Spotify] [Apple Music]                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│            RISING TALENT GRID                           │
│                                                         │
│  ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐               │
│  │Artist│  │Artist│  │Artist│  │Artist│               │
│  │ Card │  │ Card │  │ Card │  │ Card │               │
│  └──────┘  └──────┘  └──────┘  └──────┘               │
│                                                         │
│        [Load More Artists]                              │
└─────────────────────────────────────────────────────────┘
```

---

## 💻 SEO KEYWORDS & METADATA

### Primary Keywords
- new R&B artists 2025
- up and coming R&B singers
- discover R&B talent
- emerging R&B artists
- Toronto R&B artists
- UK R&B new artists
- fresh R&B music
- undiscovered R&B talent

### Meta Tags
```html
<title>Discover Fresh R&B Talent | New & Emerging Artists 2025</title>
<meta name="description" content="Discover the hottest new R&B artists from Toronto, USA, and UK. Explore emerging talent under 500k followers with exclusive music, bios, and top tracks.">
<meta name="keywords" content="new R&B artists, Toronto R&B, emerging R&B singers, discover R&B music 2025, up and coming soul artists">
```

---

## 📝 BI-WEEKLY WORKFLOW (Content Management)

### Every 2 Weeks - Featured Artist Update

#### Step 1: Scout New Artist
- **Sources**: Instagram (#TorontoRnB, #NewRnB), Spotify playlists, TikTok, Stereofox, YAMS
- **Criteria**: 
  - Under 500k followers
  - Quality music & engagement
  - 20% from Toronto, rest from USA/UK/Other
  - Unique sound/story

#### Step 2: Research Artist
- Check streaming numbers (Spotify, Apple Music, YouTube)
- Read existing articles/features
- Find top 3 most-streamed or standout tracks
- Gather social media handles
- Collect high-quality photos

#### Step 3: Write Feature (150-200 words)
**Template:**
```
[Artist Name] ([City, Country])

[Artist bio highlighting their style, recent achievements, standout qualities. Mention specific songs, collaborations, or milestones. Keep it engaging and authentic.]

Top Tracks:
1. [Song Name]
2. [Song Name]
3. [Song Name]

Follow: @[instagram]
Listen: [Spotify] [Apple Music] [YouTube]
```

#### Step 4: Update Website
- Replace current featured artist
- Move previous artist to "Archive" or general artist grid
- Upload new artist photo
- Embed top 3 song players
- Add social links

#### Step 5: Instagram Management
- Post artist feature to IG feed (carousel: photo + bio + songs)
- Repost artist's song to Stories
- Tag artist and location
- DM artist: "Congrats! You're featured on definitionofrnb.com!"
- Use hashtags: #NewRnB #EmergingArtist #[CityName]RnB

---

## 📱 INSTAGRAM AUTOMATION WORKFLOW

### Daily/Weekly Tasks
1. **Story Reposts**: Share new music from featured/upcoming artists
2. **Tagging**: Always tag artist + location
3. **Engagement**: Reply to DMs, comments from artists
4. **Hashtag Strategy**: #NewRnB #TorontoMusic #UKRnB #EmergingArtists

### Suggested Tools
- **Later** or **Buffer**: Schedule IG posts
- **Canva**: Create branded story templates
- **n8n** or **Zapier**: Automate artist discovery alerts

---

## 💰 PAID ARTIST SUBMISSION

### Service Offering
- **Feature Spot**: $150-$300 (depending on package)
- **Includes**:
  - 2-week homepage feature
  - Artist bio + top 3 songs
  - IG story/post feature
  - Permanent archive on site
- **CTA Button**: "Submit Your Music" (leads to form/Stripe payment)

---

## 🚀 NEXT STEPS

### Immediate Actions
1. ✅ Update index.html with new hero section
2. ✅ Create artist card component/template
3. ✅ Write first featured artist (suggestion: **Avara** or **Rowena Fysx**)
4. ✅ Set up SEO meta tags
5. ✅ Add "Submit Music" CTA button
6. ✅ Create Instagram content calendar

### Ongoing (Bi-weekly)
1. Scout 1 new artist
2. Write feature post
3. Update website
4. Post to Instagram + Stories
5. Tag and DM artist

---

## 📊 SUCCESS METRICS

### Track Monthly
- **Website traffic**: Google Analytics
- **Search rankings**: Google Search Console ("new R&B artists", "Toronto R&B")
- **IG growth**: Followers, engagement rate, story views
- **Artist submissions**: Paid features per month
- **Artist engagement**: How many tagged artists share your content

---

## 🎵 FIRST FEATURED ARTIST: AVARA

**City:** Based in USA  
**Background:** Indian roots, R&B singer & producer  
**Standout Track:** "runnin' round / flawless"  
**Why Feature:** Made Spotify Movement playlist, unique sound, rising recognition

**Feature Copy:**
```
Avara is a US-based R&B singer and producer with Indian roots who's been quietly building a devoted fanbase with her soulful, genre-blending sound. Her standout single "runnin' round / flawless" caught the attention of Spotify's curators, landing her on the coveted Movement playlist. Avara's music combines classic R&B soul with modern, wavy production, creating an immersive listening experience that feels both nostalgic and fresh. With her smooth vocals and introspective lyrics, she's carving out a unique space in the R&B landscape—one track at a time.

Top Tracks:
1. runnin' round / flawless
2. Dream State
3. On My Mind

Follow: @avaramusic  
Listen: [Spotify] [Apple Music] [YouTube]
```

---

## 📁 FILE STRUCTURE

```
definition-of-rnb/
├── index.html (updated with new layout)
├── css/
│   └── styles.css (new artist card styles)
├── js/
│   └── app.js (dynamic content loading)
├── images/
│   └── artists/ (artist photos)
├── content/
│   ├── featured-artist.json (current feature)
│   └── artist-archive.json (past features)
└── docs/
    ├── COMPLETE_IMPLEMENTATION_GUIDE.md (this file)
    ├── BI-WEEKLY-WORKFLOW.md (process guide)
    └── ARTIST-DATABASE.md (curated list)
```

---

## ✅ COMPLETION CHECKLIST

- [x] Research emerging R&B artists (Toronto, USA, UK)
- [ ] Update hero section: "Discover Fresh R&B Talent"
- [ ] Create artist card component (photo, bio, 3 songs)
- [ ] Write first featured artist profile (Avara)
- [ ] Add SEO meta tags and keywords
- [ ] Create "Submit Music" CTA and payment form
- [ ] Set up Instagram posting template
- [ ] Create bi-weekly content calendar
- [ ] Configure Google Analytics tracking
- [ ] Test website on mobile devices
- [ ] Launch and promote!

---

**Last Updated:** November 17, 2025  
**Next Review:** December 1, 2025 (bi-weekly artist rotation)
