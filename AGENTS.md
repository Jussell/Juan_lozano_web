# AGENTS.md

## Project

Jusell portfolio: a bilingual editorial portfolio for Juan Lozano, Product Designer. The active site is a static Astro site. Vercel is the primary deployment platform; GitHub Pages remains a backup deployment. Legacy HTML files remain for migration reference.

## Commands

- `npm install` — install dependencies.
- `npm run dev` — start local development.
- `npm run build` — generate the production site in `dist/`.
- `npm run check` — run Astro type and content checks.

## Deployment

- Production branch: `main`.
- Vercel: use the Astro framework preset, `npm run build`, and `dist` as the output directory. The site is served from the domain root, so do not add a repository `base` path.
- GitHub Pages: backup deployment from `main`, managed by `.github/workflows/deploy.yml`.
- Do not commit `node_modules/`, `dist/`, or `.astro/`.

## Structure

- `src/pages/` — localized routes and project pages.
- `src/components/` — shared layout, navigation, footer and project UI.
- `src/content/projects/` — bilingual Markdown case studies.
- `src/content.config.ts` — project collection loader and frontmatter schema.
- `src/lib/site.ts` — site identity, social links and bilingual interface copy.
- `src/styles/global.css` — global visual system.
- `assets/` — public images, fonts and downloadable files, served from the site root.

## Rules

- Preserve existing uncommitted user changes; inspect before editing overlapping legacy files.
- Never invent project metrics, client names or outcomes. Use `[Add ...]` placeholders until evidence is supplied.
- Keep English and Spanish project files aligned with the same `slug`.
- Use accessible alt text, semantic landmarks, keyboard focus and safe external links.
- Keep the `en` and `es` route structure consistent.
- Run `npm run check` and `npm run build` after route, content or configuration changes.

## Content memory

Read `DESIGN.md` for visual decisions and `CONTENT.md` before creating or editing a case study.
