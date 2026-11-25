---
name: Signal Brief
description: Editorial portfolio for Akshay P M. Paper, ink, and one blue path.
colors:
  paper: "#F6F3EC"
  ink: "#141414"
  stone: "#5B5750"
  line: "#D9D3C7"
  accent: "#1B3A6B"
typography:
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(44px, 6vw, 88px)"
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "clamp(30px, 3.6vw, 48px)"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "0"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.08em"
rounded:
  none: "0px"
spacing:
  frame: "1200px"
  hairline: "1px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "44px"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0 18px"
    height: "44px"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0"
---

## Overview

**Creative North Star: "A brief, not a brochure."**

The page is a recruiter's brief for an Applied AI engineer. The first screen has to do two things: make the claim (agentic systems, on ten years of production cloud and IoT) and offer the resume. Everything after that is evidence, in the order a hiring manager can check.

**Key Characteristics:**

- One paper ground, one ink, one accent. The accent is a link, a focus ring, or the path through a diagram.
- Type does the hierarchy. Newsreader for the claim, Geist for the prose, JetBrains Mono for indexes, dates, and the stack.
- Sections are rows and rules, not cards. Vertical rhythm changes from section to section.
- Motion is a short fade on the way in, and one drawn path on the platform diagram. Nothing moves if the reader has asked for reduced motion.

## Colors

**The Ink Rule.** Accent `#1B3A6B` appears on links, focus rings, and the key path of a diagram. It is not a background, a heading, or a decoration.

Paper `#F6F3EC` is the only ground. Ink `#141414` is text and the primary button. Stone `#5B5750` is secondary prose, indexes, and dates. Hairline `#D9D3C7` is the only divider.

## Typography

**The Three Voices Rule.** Newsreader carries headlines. Geist carries sentences. JetBrains Mono carries anything that is an index, a date, a technology, or a control label. Mono is not a texture for ordinary prose.

Display is `clamp(44px, 6vw, 88px)`, weight 400, tracking `-0.02em`, line-height `1.02`. Section titles are `clamp(30px, 3.6vw, 48px)`, weight 500. Body is 16px on small screens and 17px from 768px, line-height 1.6, measure about 66ch. Labels are 12px, uppercase, tracking `0.08em`.

## Layout

The page is one column of content inside a 12-column frame, max width 1200px. The hero and the Norwin case study are asymmetric: the claim sits left, the current stack or the problem sits in the right margin. Selected work is a row (company, story, and for GE a small figure), not a card grid.

Padding is not repeated. The hero, the case study, the skills, and the close each take a different amount of air. There is more space above a heading than between the heading and its first line.

## Elevation & Depth

**The Flat Rule.** There is no shadow, no glow, and no blur. Depth is a hairline or a change of type. Focus is a 2px accent outline, offset 3px, and that is the only "lift" an interactive element gets.

## Shapes

Corners are square. Rules are 1px. Diagram strokes stay thin. The before/after marks on the GE row are short rules, not pills or rings.

## Components

The primary control is an ink rectangle labeled Download resume. Hover turns the fill to paper and the type and border to accent. Email and LinkedIn are accent text links with an underline that thickens on hover.

Navigation is a wordmark and four mono links. The current-work note is a ruled list, not a card. Case-study parts are mono labels (Problem, Architecture, My role, Outcome) over prose. The platform diagram is inline SVG: six stations, accent only on the connecting path, a vertical variant below 900px.

## Do's and Don'ts

Do:

- Keep every sentence traceable to the CV. If a number is not in the CV, it is not on the page.
- Leave the accent rare.
- Keep the resume control above the fold at 1440×900 and at 390×844.
- Respect `prefers-reduced-motion`.

Don't:

- Don't put the phone number on the page.
- Don't claim an IEEE paper, RFC authorship, a JLL GPT, an MCP server, vLLM, BM25, or shipped RAG.
- Don't add cards, icon rows, gradients, glow, glass, or skill bars.
- Don't render a placeholder for the public repository. The slot stays empty until a repo is cleared.
