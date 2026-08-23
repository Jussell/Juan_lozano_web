# Jusell portfolio

Bilingual editorial portfolio for Juan Lozano, Product Designer, built with Astro and Markdown content collections.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro. Production output is generated with:

```bash
npm run build
```

Vercel is the primary deployment platform. GitHub Pages remains configured as a backup deployment from the `main` branch.

## Add a project

Create one Markdown file per language in `src/content/projects/`, keeping the same `slug` in both files. Follow `CONTENT.md` and the existing frontmatter schema. Use `[Add ...]` only while a case is incomplete.

## Documentation

- `AGENTS.md` — project memory and engineering rules.
- `DESIGN.md` — visual system and accessibility decisions.
- `CONTENT.md` — case-study and asset guidelines.
