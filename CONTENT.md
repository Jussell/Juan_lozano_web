# Content guide

## Project frontmatter

Every project file in `src/content/projects/` requires:

`slug`, `locale`, `title`, `shortTitle`, `summary`, `role`, `duration`, `status`, `featured`, `cover`, `tags` and `tools`.

Use the same `slug` in the English (`locale: en`) and Spanish (`locale: es`) files. `status` must be `published` or `in-progress`; use `featured: true` only for projects shown on the home page. `nextSlug` and `previousSlug` are optional navigation fields.

Quote placeholders containing square brackets, for example `duration: "[Add duration]"`, so YAML reads them as strings.

## Case study structure

Use a clear narrative when the evidence supports it:

Context → Challenge → Research → Process → Solution → Outcome → Learnings.

Include the designer's contribution, decisions and supporting evidence. Do not claim metrics, client outcomes or research findings without a source. Incomplete work should remain marked `in-progress` and use `[Add ...]` placeholders.

## Voice

Write in first person, with concrete language and short paragraphs. English and Spanish versions should communicate the same facts, while allowing natural phrasing in each language.

## Assets

- Store public images, fonts and downloadable files under `assets/`.
- Use descriptive lowercase names with hyphens for new assets.
- Reference project cover paths relative to `assets`, for example `cover: images/research.png`; the site serves them from the root as `/images/research.png`.
- Use meaningful alt text. The current project card and case-study templates use the project title for cover-image alt text; update the component if an image needs more specific context.
- Compress images appropriately and avoid adding duplicate exports.

## Publish checklist

- Frontmatter matches `src/content.config.ts` and validates.
- Both English and Spanish versions exist with the same slug.
- No `[Add ...]` placeholders remain in a published case.
- Images are optimized, available under `assets/`, and have useful alt text.
- Internal links work from the domain root on Vercel.
- `npm run check` and `npm run build` pass.
