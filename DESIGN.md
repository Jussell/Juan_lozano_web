# Design system

## Direction

Editorial premium: generous whitespace, oversized typography, restrained motion and warm paper tones. Case studies are the main product and should remain easy to scan.

## Tokens

- Paper: `#f7f5f0`
- Ink: `#171717`
- Muted text: `#666`
- Accent: `#e5b84b`
- Dark section: `#232323`
- Divider: `#d8d3c8`
- Border radius: `2px`
- Maximum content width: `1180px`

Noto Sans is self-hosted from `assets/fonts` and loaded in `src/styles/global.css`. Use the existing font files before adding another family.

## Layout

- The shared `.shell` is capped at `1180px` with 20px horizontal desktop padding and 14px mobile padding.
- Main responsive breakpoint: `700px`.
- Typography uses fluid `clamp()` sizing for the hero, section headings and case-study titles.
- Project cards use a two-column editorial grid on desktop and one column on mobile. Alternating cards have a 90px desktop offset that is removed on mobile.
- Case studies use a metadata row, cover image, sidebar/content layout and previous/next navigation.
- Assets are served from the site root for Vercel; avoid adding a `/Jusell-web-site` base prefix.

## Components

Keep these shared pieces reusable: `Layout`, `Header`, `Footer` and `ProjectCard`. The page templates also provide the home hero, selected work, about section, contact CTA, case-study metadata and navigation.

Interactions should be subtle: project images scale slightly on hover, links have clear focus states, and no animation should be required to understand the content.

## Accessibility

- Use semantic landmarks and headings in order.
- Provide descriptive alt text for images and meaningful labels for links.
- Keep keyboard focus visible with the existing `:focus-visible` treatment.
- Preserve sufficient color contrast, especially muted text on paper and text on the accent section.
- Respect `prefers-reduced-motion` when adding future animation.
