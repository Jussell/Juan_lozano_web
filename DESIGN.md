# Design system

## Direction

Editorial premium: generous whitespace, oversized typography, restrained motion and warm paper tones. The work should feel considered and make case studies the main product.

## Tokens

- Paper: `#f7f5f0`
- Ink: `#171717`
- Muted text: `#666666`
- Accent: `#e5b84b`
- Dark section: `#232323`
- Divider: `#d8d3c8`

Noto Sans is self-hosted from `assets/fonts`. Use the existing font files before adding another family.

## Layout

- Content max width: 1180px.
- Mobile side padding: 14px; desktop side padding: 20px.
- Main breakpoints: 700px for stacked/mobile layouts and fluid `clamp()` typography.
- Project cards use a two-column editorial grid on desktop and one column on mobile.

## Components

Header, project card, metadata row, case-study prose, contact CTA and previous/next navigation should remain reusable. Keep interactions subtle: image scale on hover, clear focus rings, no animation required to understand content.

## Accessibility

Use semantic headings in order, descriptive image alt text, visible keyboard focus, sufficient color contrast and `prefers-reduced-motion` support for future animation additions.
