---
name: gugupy.me
description: Personal site and portfolio of Gughanathan Mani, lead consultant for Python, AI and cloud.
colors:
  primary: "#2f6ea5"
  primary-dark-mode: "#7db4e6"
  on-primary: "#ffffff"
  on-primary-dark-mode: "#0f1217"
  success: "#166534"
  success-dark-mode: "#4ade80"
  canvas: "#f6f7f9"
  surface: "#ffffff"
  surface-sunken: "#eef1f5"
  hairline: "#dfe4ea"
  ink: "#141820"
  ink-muted: "#48515e"
  ink-dim: "#636c7b"
  canvas-dark: "#0f1217"
  surface-dark: "#161a21"
  surface-sunken-dark: "#1d222b"
  hairline-dark: "#2a313c"
  ink-dark: "#e9edf2"
  ink-muted-dark: "#aab3bf"
  ink-dim-dark: "#8590a0"
  terminal: "#10141a"
  terminal-ink: "#e6ebf1"
  accent-teal: "#0f766e"
  accent-teal-dark-mode: "#4fd1c0"
  accent-forest: "#3d6b35"
  accent-forest-dark-mode: "#9ccc8a"
  accent-indigo: "#4f46e5"
  accent-indigo-dark-mode: "#a5a8ff"
  accent-violet: "#7c3aed"
  accent-violet-dark-mode: "#c4a5ff"
  accent-amber: "#b45309"
  accent-amber-dark-mode: "#f6b94a"
  accent-rose: "#be123c"
  accent-rose-dark-mode: "#ff8fa3"
typography:
  display:
    fontFamily: "Space Grotesk, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(46px, 7vw, 88px)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Space Grotesk, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(30px, 4.2vw, 46px)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  stat:
    fontFamily: "Space Grotesk, IBM Plex Sans, system-ui, sans-serif"
    fontSize: "clamp(34px, 4vw, 48px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "tnum"
  title:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "20px"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.75
  body:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "IBM Plex Sans, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
  code:
    fontFamily: "ui-monospace, SF Mono, Menlo, Consolas, monospace"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.75
rounded:
  sm: "8px"
  tile: "10px"
  md: "14px"
  lg: "22px"
  pill: "999px"
spacing:
  gutter: "24px"
  gutter-phone: "16px"
  card: "24px"
  grid-gap: "20px"
  column-gap: "64px"
  section: "112px"
  section-phone: "80px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-ghost:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "12px 22px"
  button-small:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.pill}"
    padding: "8px 16px"
  card:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "{spacing.card}"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: "28px"
  chip:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.ink-muted}"
    rounded: "6px"
    padding: "3px 10px"
  icon-tile:
    textColor: "{colors.primary}"
    rounded: "{rounded.tile}"
    size: "40px"
  nav-link:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
  terminal:
    backgroundColor: "{colors.terminal}"
    textColor: "{colors.terminal-ink}"
    typography: "{typography.code}"
    rounded: "{rounded.lg}"
---

# Design System: gugupy.me

## Overview

**Creative North Star: "The Well-Kept Repo"**

The site should read the way a well-maintained repository feels to open: clear structure, consistent naming, nothing left lying around. Every element has a job, and the job is obvious. It's precise, calm and confident; seniority comes across through control and tidiness rather than spectacle. A visitor should sense, before reading a word, that the person behind it keeps things in order.

Density is moderate and editorial. Large Space Grotesk headings anchor each section, and calm IBM Plex Sans prose and lists sit beneath them on cool blue-gray paper. A single accent color does all the signalling. Texture comes from developer-native details that earn their place: a faint dotted grid behind the hero, an outlined frame offset behind the portrait and project covers, a terminal card for real commands, and a pointer that travels down the career timeline as you scroll. Each is drawn with 1–2px lines and quiet tints, never heavy fills.

The visitor controls the theme: light, dark or auto, plus a choice of seven accent colors. Every token therefore exists as a light/dark pair, and every accent works in both modes. The system is built on two axes (mode and accent), and everything else is derived from them.

**Key Characteristics:**
- Cool blue-gray neutrals; one accent at a time, chosen by the visitor (default Python blue).
- Two type voices: Space Grotesk for headings, names and numbers; IBM Plex Sans for everything else.
- Flat at rest: hairline borders define surfaces, and soft shadows appear on raised panels or in response to hover.
- Rounded, friendly geometry: pill buttons, 14px cards, 22px panels and media.
- Motion is purposeful and restrained, and switches off entirely when the visitor prefers reduced motion.

## Colors

A cool, low-chroma slate palette that lets one accent carry all the meaning.

### Primary
- **Python Blue** (light `primary`, dark `primary-dark-mode`): the default accent. Used for primary buttons, links, the hero role line, the timeline progress, icon tiles (as a 10% tint), active nav underline, the focus ring and text selection (25% tint). Text on it uses `on-primary`.
- **Visitor accents** (`accent-teal`, `accent-forest`, `accent-indigo`, `accent-violet`, `accent-amber`, `accent-rose`, each with a `-dark-mode` pair): interchangeable replacements for Python Blue, picked from the theme panel. Each pair is tuned to at least 4.5:1 against the page background in its mode.

### Neutral
- **Cool Paper** (`canvas` / `canvas-dark`): the page background.
- **Clean Sheet** (`surface` / `surface-dark`): cards, panels, ghost buttons, the theme panel.
- **Sunken Slate** (`surface-sunken` / `surface-sunken-dark`): alternating section bands (Skills, Projects, project features), chips, segmented-control tracks, image placeholders.
- **Hairline** (`hairline` / `hairline-dark`): every 1px border and divider.
- **Ink** (`ink` / `ink-dark`): headings, names, key values, bold emphasis in prose.
- **Muted Ink** (`ink-muted` / `ink-muted-dark`): body prose, descriptions, nav links at rest.
- **Dim Ink** (`ink-dim` / `ink-dim-dark`): labels, metadata, captions, timestamps, footer. It is the lowest-contrast text allowed and still clears 4.5:1 on Sunken Slate.
- **Terminal Night** (`terminal`, `terminal-ink`): the code card only. It stays dark in both modes, like a real terminal.

### Semantic
- **Signal Green** (`success` / `success-dark-mode`): availability only: the pulsing status dot, the "Current" job badge, "Open to work", and the copy-confirmation message.

### Named Rules
**The One Signal Rule.** One accent hue on screen at a time, and it always comes from `--accent`. Never hard-code an accent hex in a component, never introduce a second accent hue, and never use the accent as a large background fill. Tints, buttons and lines only.

**The Derived Tint Rule.** Soft accent fills, accent lines and hover washes are derived with `color-mix()` (`--accent-soft` 10%, `--accent-line` 35% into the hairline, `--hover` 6% of ink). Never add a new hex for a tint; derive it, so it follows the visitor's accent and mode.

## Typography

**Display Font:** Space Grotesk (with IBM Plex Sans, system-ui)
**Body Font:** IBM Plex Sans (with system-ui, -apple-system, Segoe UI)
**Code Font:** the platform monospace stack (ui-monospace, SF Mono, Menlo, Consolas)

**Character:** Space Grotesk gives headings a slightly engineered, geometric edge; IBM Plex Sans keeps prose neutral and very legible. Together they read like a technical document written by someone who cares about the reader.

### Hierarchy
- **Display** (`display`): the hero name only, stacked over two lines.
- **Headline** (`headline`): section titles ("What I work with"), capped at 18ch and balanced. The contact title and project-page title are larger variants of the same voice.
- **Stat** (`stat`): the hero numbers, with tabular figures.
- **Title** (`title`): job titles, project names (18px), card headings (16–17px, weight 600–700).
- **Lead** (`lead`): About prose and long descriptions in Muted Ink, at most 62ch.
- **Body** (`body`): the default text, lists, card descriptions (15px in cards).
- **Label** (`label`): buttons, nav links (15px, 500), metadata, form-like labels (13–14px).
- **Code** (`code`): the terminal card only.

### Named Rules
**The Two Voices Rule.** Space Grotesk is for headings, the wordmark, names and numbers; IBM Plex Sans is for everything a visitor reads in sentences or clicks. Never set paragraphs or buttons in Space Grotesk, and never add a third family.

**The Sentence Case Rule.** Labels, buttons, stats and headings use sentence case ("Years of experience", "Show 2 more projects"). Uppercase with tracking is reserved for the single "At a glance" facts title.

## Layout

- **Container:** max 1120px, centered, 24px side gutters (16px at 720px and below).
- **Sections:** 112px vertical padding (80px on phones). Alternate sections sit on Sunken Slate bands to separate them without rules.
- **Hero:** a two-column grid (1.35fr / 0.9fr, 64px gap) with the portrait on the right. At 960px and below it becomes one column with the portrait first; on phones the portrait shrinks to a 112px square so the name stays on the first screen.
- **Grids:** skills in a 4-column bordered grid (2 columns at 960px, a single list with icons beside headings on phones). Projects auto-fill at a 320px minimum with a 20px gap. Feature cards auto-fill at a 260px minimum.
- **Two-column content:** About and the project body pair a flexible text column with a fixed 340–360px facts card (sticky on desktop), stacking at 960px.
- **Timeline:** dates column 200px, rail 24px, body, with 24px gaps. At 960px the dates move above each entry.
- **Breakpoints:** 960px (stack two-column layouts) and 720px (phone: mobile nav, tighter gutters and sections).
- **Rhythm:** headings sit 48px above their content (36px on phones); related items are 8–12px apart, and groups are 32–56px apart.

## Elevation & Depth

Flat at rest, with depth as a response. Surfaces are separated first by tone (Cool Paper, Clean Sheet, Sunken Slate) and by hairline borders. One soft, two-layer shadow is the whole vocabulary, and it goes on panels that genuinely float or on cards being hovered.

### Shadow Vocabulary
- **Soft lift** (`--shadow`; light: `0 1px 2px rgb(20 24 32 / .05), 0 8px 24px -12px rgb(20 24 32 / .12)`; dark: `0 1px 2px rgb(0 0 0 / .3), 0 12px 32px -16px rgb(0 0 0 / .6)`): the About facts card, contact panel, project cover, terminal card, the active segment in the theme switcher, and project cards on hover.
- **Popover** (soft lift plus `0 20px 48px -20px rgb(0 0 0 / .25)`): the theme panel only.

### Named Rules
**The Flat at Rest Rule.** Cards in a grid have a hairline border and no shadow until hovered. When hovered they lift 2px and gain the soft lift, while the border shifts to the accent line. Never stack a border-plus-shadow ghost card at rest.

## Shapes

Rounded and approachable, never sharp, never blobby. Buttons, steppers and social links are full pills (`pill`). Icon tiles and small controls use 10px (`tile`), chips 6px. Cards use 14px (`md`), and panels, media and the terminal 22px (`lg`). Status markers are small circles; list bullets are 5–6px squares rotated 45° into diamonds, or 8px dashes in the accent line color.

The **offset outline frame** is the signature shape: a 2px accent-line border with the same radius as its media, translated 14px down-right (6–8px on phones) and placed behind the portrait and project visuals. It slides out after the image loads.

## Components

Refined and restrained: quiet at rest, precise in response.

### Buttons
- **Shape:** full pill (`pill`).
- **Primary:** accent background, `on-primary` text, 15px/600 label, 12px 22px padding. Hover mixes the accent 14% toward ink, and a faint light sheen sweeps across once. Pressing scales to 0.97.
- **Ghost:** Clean Sheet background, hairline border, ink text. Hover turns the border and text to the accent.
- **Sizes:** small (8px 16px, 14px) for the nav "Hire me"; large (15px 30px, 16px) for the contact email action; block width inside cards.
- **Focus:** 2px accent outline, offset 3px.

### Chips
- **Style:** Sunken Slate background, Muted Ink 12px/600 text, 6px radius, 3px 10px padding. On the project page they sit on Clean Sheet with a hairline border.
- **Variant:** "Hobby" uses the accent soft tint, accent text and accent-line border.

### Cards / Containers
- **Project card:** Clean Sheet, hairline border, 14px radius, 24px padding; icon tile, title, description, chips, then a hairline-topped link row. The whole card is clickable via the name link, and the focus ring wraps the card.
- **Facts panel:** Clean Sheet, 22px radius, soft lift; label/value rows (96–104px label column) divided by hairlines, with buttons at the foot.
- **Feature card:** Clean Sheet, hairline, 14px radius, with an accent number, title and text. Hover adds a 4% accent wash.

### Navigation
- Fixed top bar, 68px tall, transparent over the hero. Once scrolled it turns 82% Cool Paper with a 16px backdrop blur and a hairline bottom edge.
- Links are 15px/500 Muted Ink, become ink with a 6% wash on hover, and show a 2px accent underline when active (scroll-spied).
- Below 720px the links collapse behind a three-bar toggle into a full-width list with hairline separators.
- The theme panel (268px popover; fixed and full-width on phones) holds a three-way segmented mode control and seven accent swatches.

### Experience Timeline (signature)
A 2px hairline rail with 12px ring nodes. As the visitor scrolls, an accent fill and an 18px accent pointer travel down the rail, lighting each node and raising its entry from 45% to full opacity. On reaching the current role the pointer stops and pulses, and the green "Current" badge appears.

### Terminal Card (signature)
Always-dark code card on Terminal Night with a 22px radius, three traffic-light dots and a caption bar, monospace 14px/1.75, and comments in a dimmer slate. Use it only for real, copyable commands.

## Do's and Don'ts

### Do:
- **Do** take every color from the theme tokens (`--bg`, `--surface`, `--surface2`, `--border`, `--text`, `--muted`, `--dim`, `--accent`, `--success`) so mode and accent switching keep working.
- **Do** derive tints with `color-mix()` from `--accent` or `--text` (The Derived Tint Rule).
- **Do** check every new text and background pair in both modes: at least 4.5:1 for text, 3:1 for large text and icons.
- **Do** keep prose to 62–70ch and section titles to 18ch, using `text-wrap: balance` on headings.
- **Do** start content visible and let motion add to it: reveals are applied by script and removed afterwards, and `prefers-reduced-motion` disables every animation and transition.
- **Do** animate with `transform`, `opacity`, `clip-path` and `filter` on the shared `cubic-bezier(.2, .7, .2, 1)` easing; 0.2s for state changes, 0.6–1.1s for entrances.
- **Do** use icons from the single SVG sprite at 15–22px, inheriting `currentColor`.

### Don't:
- **Don't** hard-code an accent hex, add a second accent hue, or fill large areas with the accent (The One Signal Rule).
- **Don't** add shadows to cards at rest or combine a hairline border with a wide shadow on the same resting card (The Flat at Rest Rule).
- **Don't** introduce a third typeface or set body text and buttons in Space Grotesk (The Two Voices Rule).
- **Don't** use Title Case or uppercase labels outside the "At a glance" title (The Sentence Case Rule).
- **Don't** use gradient text, glassmorphism as decoration, or heavy drop shadows; the only blur is the scrolled navbar and photo caption.
- **Don't** make Terminal Night follow the light theme or use the terminal card for anything that isn't real code.
- **Don't** animate layout properties (width, height, top, margins) or hide content that only appears if JavaScript runs.
