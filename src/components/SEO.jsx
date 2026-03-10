import React from 'react'
import { Helmet } from 'react-helmet-async'

const SITE_NAME  = 'The Definition of R&B'
const SITE_URL   = 'https://definitionofrnb.com'
const DEFAULT_OG = `${SITE_URL}/og-image.png`
const TWITTER    = '@definitionofrnb'

/**
 * SEO component — drop into any page to set per-page meta tags.
 *
 * Props:
 *   title       {string}  Page title (appended with site name)
 *   description {string}  Meta description (max ~155 chars)
 *   canonical   {string}  Full canonical URL e.g. "https://definitionofrnb.com/reviews"
 *   image       {string}  OG image URL (defaults to site-wide OG image)
 *   type        {string}  OG type: "website" | "article" (default "website")
 *   noIndex     {boolean} Set true to noindex a page
 *   jsonLd      {object}  JSON-LD structured data object (rendered as <script type="application/ld+json">)
 */
export default function SEO({
  title,
  description,
  canonical,
  image = DEFAULT_OG,
  type = 'website',
  noIndex = false,
  jsonLd,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Artist Discovery, Reviews & R&B Culture`
  const desc = description || 'The definitive source for R&B artist discovery, new music reviews, and culture. Discover the Artist of the Week and explore up-and-coming R&B talent.'
  const url  = canonical || SITE_URL

  return (
    <Helmet>
      {/* ── Primary ── */}
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      }
      <link rel="canonical" href={url} />

      {/* ── Open Graph ── */}
      <meta property="og:type"        content={type} />
      <meta property="og:site_name"   content={SITE_NAME} />
      <meta property="og:title"       content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url"         content={url} />
      <meta property="og:image"       content={image} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale"      content="en_US" />

      {/* ── Twitter / X ── */}
      <meta name="twitter:card"        content="summary_large_image" />
      <meta name="twitter:site"        content={TWITTER} />
      <meta name="twitter:title"       content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image"       content={image} />

      {/* ── JSON-LD structured data ── */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  )
}
