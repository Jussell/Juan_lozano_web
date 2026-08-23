# AGENTS.md

## Project

Jusell portfolio: a bilingual editorial portfolio for Juan Lozano, Product Designer. The active site is an Astro static site; the legacy HTML files remain for reference during migration.

## Commands

- `npm install` — install dependencies.
- `npm run dev` — start local development.
- `npm run build` — generate the production site in `dist/`.
- `npm run check` — run Astro type/content checks.

## Structure

- `src/pages/` — localized routes and project pages.
- `src/components/` — shared layout, navigation and project UI.
- `src/content/projects/` — bilingual Markdown case studies.
- `src/styles/global.css` — global visual system.
- `assets/` — public images, fonts and downloadable files.

## Rules

- Preserve existing uncommitted user changes; inspect before editing overlapping legacy files.
- Never invent project metrics, client names or outcomes. Use `[Add ...]` placeholders until evidence is supplied.
- Keep English and Spanish project slugs aligned.
- Use accessible alt text, semantic landmarks, keyboard focus and safe external links.
- Run `npm run build` after route, content or configuration changes.

## Content memory

Read `DESIGN.md` for visual decisions and `CONTENT.md` before creating or editing a case study.
