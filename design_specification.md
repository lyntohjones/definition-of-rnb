## Design Specification: Rising R&B Artists Section

This document outlines the design specifications for the "Rising R&B Artists" section, intended to guide HTML and CSS development.

### 1. Overall Aesthetic

*   **Modern & Clean:** The design will prioritize a contemporary feel. Key elements include:
    *   Ample white space (or a sophisticated dark theme, TBD based on overall site design).
    *   Crisp, legible typography.
    *   Emphasis on high-quality imagery.
*   **Professional:** The layout will be intuitive and present information clearly, suitable for a music discovery platform or editorial feature.
*   **Engaging:** Visual hierarchy will guide users to artist names and images first, then encourage exploration of biographical details and music. A sense of discovery should be fostered.

### 2. Layout

*   **Responsive Card-Based Grid:**
    *   A flexible grid system (e.g., CSS Grid or Flexbox) will be used for artist cards.
    *   **Desktop:** 3-4 cards per row, adjusting based on viewport width to maintain optimal card size and spacing.
    *   **Tablet (e.g., >768px and <1024px):** 2 cards per row.
    *   **Mobile (e.g., <768px):** 1 card per row, stacked vertically.
    *   **Gutters:** Consistent spacing between cards (e.g., 16px or 24px).
*   **Section Header:**
    *   **Title:** A clear, prominent H1 or H2 header: "Rising R&B Artists to Watch" (or similar, based on final copy).
    *   **Introduction (Optional):** A brief introductory paragraph (1-3 sentences) below the title, providing context for the curated list.

### 3. Artist Card Content & Structure

Each artist card will be a self-contained unit with consistent padding and structure:

*   **A. Artist Image (Primary Visual Element):**
    *   **Placement:** Top of the card.
    *   **Dimensions:** Spanning the full width of the card, with a 16:9 or 4:3 aspect ratio to ensure uniformity. Alternatively, a square image (1:1) can be used if preferred for aesthetic consistency.
    *   **Style:** High-quality promotional photograph of the artist or compelling album/single artwork. Must be clear and professional.
    *   **Fallback:** A default placeholder image if a specific artist image is unavailable.
    *   **Interaction (Optional):**
        *   On hover, a subtle zoom effect (e.g., `transform: scale(1.05); transition: transform 0.3s ease;`).
        *   Alternatively, an overlay could appear with a "Play" icon or "View Music" call-to-action if direct music links are integrated.

*   **B. Artist Name:**
    *   **Placement:** Immediately below the image, or as an overlay on the bottom ~15-20% of the image. If overlaying, a semi-transparent gradient scrim (darkening from bottom up) must be applied behind the text to ensure readability against various image backgrounds.
    *   **Style:** Largest text element on the card.
        *   Font: Modern sans-serif (e.g., Montserrat Bold, Open Sans Semibold).
        *   Size: e.g., `1.4rem` to `1.8rem` (responsive).
        *   Weight: `bold` or `semibold`.
        *   Color: High contrast against its background.

*   **C. Origin (Region & City/Country):**
    *   **Placement:** Directly below the Artist Name.
    *   **Style:** Smaller text, distinct from the name.
        *   Font: Same sans-serif family, but regular or light weight.
        *   Size: e.g., `0.85rem` to `0.95rem`.
        *   `font-style: italic;` (optional, for differentiation).
        *   Color: Slightly muted compared to the artist name, but still highly readable.
    *   **Icon (Optional):** A very small, subtle flag icon (SVG preferred) preceding the origin text for quick visual regional identification. This should not dominate the text.

*   **D. Brief Bio (Synopsis):**
    *   **Placement:** Below the Origin.
    *   **Style:** Standard body text.
        *   Font: Readable sans-serif (e.g., Open Sans Regular, Lato Regular).
        *   Size: e.g., `0.9rem` to `1rem`.
        *   `line-height: 1.5;` for readability.
        *   **Content:** Initially display 2-3 lines of text (approximately 100-150 characters).
        *   **Expansion:** If the bio exceeds this, implement a "Read More" link/button that smoothly expands the card or reveals more text in place. The "Read Less" option should also be available.

*   **E. Key Tracks/Projects:**
    *   **Placement:** Below the Bio section.
    *   **Label:** A small, bolded subheading like "**Listen To:**" or "**Key Releases:**".
    *   **Content:** List 1-3 notable tracks, EPs, or albums.
        *   Style: Standard text size, perhaps slightly emphasized if they are direct links.
    *   **Interaction (If not direct links):** On hover over a track name, a small icon (e.g., Spotify/Apple Music logo) could appear next to it, prompting users to search.

*   **F. Music Platform Links (Optional):**
    *   **Placement:** At the very bottom of the card, or horizontally aligned next to the "Key Tracks" label.
    *   **Style:** Display as small, recognizable icons (SVG preferred for scalability and clarity) for platforms like Spotify, Apple Music, YouTube, Soundcloud.
    *   **Functionality:** These should be direct `<a>` links opening in a new tab (`target="_blank"`) to the artist's main profile page on the respective platform.
    *   **Accessibility:** Ensure `aria-label` attributes for each icon link (e.g., "Listen to [Artist Name] on Spotify").

### 4. Visual Distinction for Regions (Optional Implementation)

Choose **one** of the following methods if regional distinction is desired:

*   **Method A: Regional Subheadings (Preferred for Clarity):**
    *   Group artists by region (UK, Toronto, US) within the grid.
    *   Before each group, insert a clear subheading (e.g., H3: "From the UK," "Toronto Spotlight," "Hailing from the US"). These subheadings should break the card grid flow naturally.
*   **Method B: Subtle Card Accents (Use with Caution):**
    *   A thin (2-3px) colored border on one edge (e.g., left or top) of the card, with a unique color per region.
    *   Colors must be chosen carefully to be subtle, harmonious with the overall palette, and accessible. Example: Muted Blue for UK, Soft Red for Toronto, Cool Grey for US.
    *   This method should be A/B tested for user perception and potential clutter.
*   **Method C: Filter/Sort Functionality (Advanced):**
    *   At the top of the section, provide filter buttons (e.g., "All," "UK," "Toronto," "US").
    *   Clicking a filter would dynamically update the grid to show only relevant artists (requires JavaScript).

### 5. Typography

*   **Primary Sans-Serif Family:** Choose one consistent, modern sans-serif family for all text elements (e.g., Inter, Roboto, Open Sans, Lato).
*   **Weights & Styles:**
    *   Section Header: `font-weight: bold;` or `font-weight: 700;`
    *   Artist Name: `font-weight: bold;` or `font-weight: 600;`
    *   Origin: `font-weight: normal;` or `font-weight: 400;` (possibly `font-style: italic;`)
    *   Bio & Key Tracks Text: `font-weight: normal;` or `font-weight: 400;`
    *   Labels ("Listen To:"): `font-weight: semibold;` or `font-weight: 500;`

### 6. Color Palette

*   **Background (Page):** Light neutral (e.g., `#FFFFFF`, `#F8F9FA`) or Dark neutral (e.g., `#121212`, `#1E1E1E`).
*   **Card Background:** Slightly off from the page background for definition (e.g., if page is `#FFFFFF`, card could be `#FDFDFD` with a subtle shadow, or simply defined by a border).
*   **Text (Primary):** Dark grey (e.g., `#333333`) for light backgrounds; Light grey/off-white (e.g., `#E0E0E0`) for dark backgrounds. Ensure WCAG AA contrast ratios.
*   **Accent Color(s):** 1 or 2 colors for links, hover states, and optional regional accents. Examples:
    *   A vibrant but not jarring blue (e.g., `#007BFF`)
    *   A warm gold/orange (e.g., `#FFA500`)
    *   A cool teal (e.g., `#20C997`)
*   **Icons:** Should match the text color or accent color, depending on context.

### 7. Interactions & Animations

*   **Card Hover:**
    *   `box-shadow: 0 4px 8px rgba(0,0,0,0.1);` (subtle lift)
    *   `transform: translateY(-2px);` (slight upward move)
    *   `transition: box-shadow 0.3s ease, transform 0.3s ease;`
*   **Bio Expansion ("Read More"):**
    *   Use JavaScript to toggle a class that changes `max-height` and `opacity` for a smooth animated transition.
    *   `transition: max-height 0.5s ease-in-out, opacity 0.3s ease-in-out;`
*   **Image Lazy Loading:** Implement native `loading="lazy"` attribute on `<img>` tags or use a JavaScript-based solution for wider browser support if needed.
*   **Link Hover States:** Underline links on hover, or change their color to the defined accent color.

### 8. Accessibility Considerations

*   Ensure sufficient color contrast for all text elements.
*   Use semantic HTML5 elements (`<section>`, `<article>` for cards, `<nav>` for filters, etc.).
*   Provide `alt` text for all images.
*   Ensure keyboard navigability for all interactive elements (cards, links, buttons).
*   Use ARIA attributes where appropriate, especially for dynamic content changes (like bio expansion).

This specification provides a comprehensive guide for developing the "Rising R&B Artists" section with a focus on modern aesthetics, usability, and clarity.
