# Content guide

## Project frontmatter

Every project requires: `slug`, `locale`, `title`, `shortTitle`, `summary`, `role`, `duration`, `status`, `featured`, `cover`, `tags` and `tools`. Use the same slug in `en` and `es` files.

`status` is either `published` or `in-progress`. Use `featured` only for projects shown on the home page.

## Case study structure

Use a clear narrative: Context → Challenge → Research → Process → Solution → Outcome → Learnings. Include evidence, decisions and the designer's contribution. Do not claim metrics without a source.

## Voice

Write in first person, concrete language and short paragraphs. English and Spanish versions should communicate the same facts, not be literal translations when a more natural phrase is clearer.

## Assets

Use descriptive lowercase names with hyphens for new assets. Store public assets under `assets/images` and reference them from Markdown as `images/file-name.ext`. Provide meaningful alt text in the page component or content model.

## Publish checklist

- Frontmatter validates.
- Both language versions exist.
- No `[Add ...]` placeholders remain for a published case.
- Images are compressed and have useful alt text.
- Links work from the GitHub Pages base path.
- `npm run check` and `npm run build` pass.
