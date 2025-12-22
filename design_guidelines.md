# ClownPierce Profile Website - Design Guidelines

## Design Approach
**Reference-Based:** Drawing inspiration from modern gaming personality websites (Ninja, Pokimane) and dark-themed portfolio sites. The design embodies ClownPierce's persona as "The Deadliest Player" with an intense, competitive aesthetic that appeals to the Minecraft PvP community.

## Core Design Principles
1. **Dark & Intense:** Embrace a dramatic, gaming-focused visual language
2. **Bold Typography:** Large, impactful headings that command attention
3. **Strategic Imagery:** Minecraft-themed visuals and PvP action screenshots
4. **Ruthless Precision:** Clean layouts reflecting strategic, calculated gameplay

## Typography System

**Primary Font:** 'Inter' or 'Poppins' (Google Fonts) - modern, clean, tech-forward
**Accent Font:** 'Bebas Neue' or 'Oswald' (Google Fonts) - bold, impactful for headings

**Hierarchy:**
- Hero Title: text-6xl to text-8xl, font-bold, uppercase
- Section Headings: text-4xl to text-5xl, font-bold
- Subsection Titles: text-2xl to text-3xl, font-semibold
- Body Text: text-base to text-lg, font-normal, leading-relaxed
- Captions/Meta: text-sm, font-medium, uppercase tracking

## Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24 (e.g., p-4, gap-8, my-16, py-24)

**Container Strategy:**
- Full-width sections with max-w-7xl inner containers
- Content sections: max-w-6xl centered
- Text-heavy areas: max-w-4xl for readability

**Grid Patterns:**
- Server/Content cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Stats/achievements: grid-cols-2 md:grid-cols-4
- Social links: Single row with flex layout

## Page Structure & Sections

**1. Hero Section (100vh)**
- Large hero image: Dramatic Minecraft PvP scene or ClownPierce skin/character art with dark, cinematic lighting
- Overlay: Gradient from transparent to dark at bottom
- Content: Centered, "ClownPierce" in massive typography, "The Deadliest Player" tagline, brief one-liner
- CTA buttons (blurred backdrop): "Watch on YouTube" + "Follow on Twitch"
- Scroll indicator at bottom

**2. About Section**
- Two-column layout (lg:grid-cols-2)
- Left: Biographical info (birthdate, nationality, channel launch), written in engaging narrative style
- Right: Key stats display (1M+ subscribers, servers played, signature series)
- Background: Subtle Minecraft texture or pattern overlay

**3. Playstyle Showcase**
- Three-column feature grid
- Card 1: "PvP Specialist" - ruthless combat tactics
- Card 2: "Story-Driven Content" - Friend or Foe series
- Card 3: "Strategic Dominance" - calculated gameplay
- Each card: Icon/graphic, title, description
- Accent border or glow effects

**4. Server History**
- Timeline or card-based layout showcasing LifeSteal SMP (highlighted), HCSMP, MagicGum SMP, Rizen SMP, The Realm SMP
- Each entry: Server name, role/achievements, brief description
- Visual dividers between entries

**5. Content Highlights**
- Video/series showcase grid (2-3 featured videos)
- Thumbnail images with play button overlays
- Series titles and view counts

**6. Social Hub**
- Centered layout with large social icons
- YouTube, Twitch, Twitter/X, Merch Store links
- Each link: Platform icon, follower count/description
- Prominent, clickable cards

**7. Footer**
- Minimalist: Copyright, business contact (clownpierce@dcmedia.tv)
- Quick links back to top
- Subtle Minecraft-themed decorative elements

## Component Library

**Navigation (if included):**
- Fixed top bar or side navigation
- Logo/name on left, section links on right
- Hamburger menu for mobile

**Cards:**
- Dark background with subtle border
- Hover: Slight lift (transform translate-y), glow effect
- Padding: p-8 to p-12
- Rounded corners: rounded-xl

**Buttons:**
- Primary: Large (px-8 py-4), rounded-lg, font-semibold
- When on images: backdrop-blur-md background
- No custom hover states (component handles)

**Stats Display:**
- Large numbers (text-4xl to text-5xl)
- Small labels beneath (text-sm, uppercase)
- Grid or flex layout with dividers

## Images & Media

**Hero Image:** YES - Large, dramatic Minecraft PvP battle scene or ClownPierce character render with dark, cinematic atmosphere. Full-screen background with overlay gradient.

**Section Images:**
- About: Portrait-style image or gaming setup photo
- Server cards: Server logos or representative screenshots
- Content showcase: YouTube thumbnail images
- Background textures: Subtle Minecraft block patterns, diamond/sword motifs

**Image Treatment:**
- Slight desaturation for consistency
- Vignette effects on hero
- Subtle parallax on scroll (hero only)

## Animations

**Minimal, Strategic Use:**
- Hero: Fade-in on load
- Scroll-triggered: Fade-up for section content (stagger children)
- Buttons: Built-in hover states only
- NO: Excessive parallax, complex scroll animations, or distracting effects

## Accessibility

- Maintain WCAG AA contrast ratios throughout
- All interactive elements keyboard-accessible
- Alt text for all images
- Semantic HTML structure
- Focus indicators on all focusable elements

---

**Design Philosophy:** Create an intense, memorable profile that matches ClownPierce's "villain" persona while remaining professional and navigable. Every section serves a purpose—showcasing skill, building credibility, and connecting fans to his content platforms.