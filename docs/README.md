# PATHFINDER website — documentation

Everything you need to run and update the PATHFINDER project website.

## Find your role

- **I'm a partner submitting news or an event** → [composer.md](./composer.md)
- **I'm the publisher committing content to the site** → [publishing.md](./publishing.md)
- **I want to edit partner descriptions, team bios, or the About page** → [editing-directly.md](./editing-directly.md)
- **I need to add or swap an image** → [managing-images.md](./managing-images.md)
- **Something broke** → [troubleshooting.md](./troubleshooting.md)
- **I'm the technical maintainer deploying or configuring the site** → [deployment.md](./deployment.md)

## About this site in one paragraph

Static site built with [Astro](https://astro.build/), styled with [Tailwind CSS](https://tailwindcss.com/), deployed automatically to GitHub Pages on every push to `main`. All content is plain text files — news and events as Markdown files, partners and the Advisory Board as Markdown too. There is no database, no admin login for the public, and no backend. Only repository collaborators can push changes, and (with branch protection) every change goes through a reviewed pull request.

## The two ways content gets added

1. **Composer (recommended for coordinators)** — a form at `/admin/compose` on the live site. Fill in the form, download a `.md` file, send it to the publisher. Full guide: [composer.md](./composer.md).
2. **Directly on GitHub** — edit or create Markdown files in `src/content/`. Recommended for the publisher and anyone comfortable with GitHub's web editor. Full guide: [editing-directly.md](./editing-directly.md).

Both routes end up in the same place: a Markdown file in `src/content/news/` or `src/content/events/`. The build reads those files and generates the website.

## The site's map (for reference)

| Section | URL | Source |
|---|---|---|
| Home | `/` | `src/pages/index.astro` |
| About | `/about` | `src/pages/about.astro` |
| Consortium (partners + Advisory Board) | `/consortium` | `src/pages/consortium.astro` + `src/content/partners/*.md` + `src/content/advisory-board/*.md` |
| News & events | `/news-events` | `src/pages/news-events/index.astro` + `src/content/news/*.md` + `src/content/events/*.md` |
| Outputs | `/outputs` | `src/pages/outputs/index.astro` + `src/content/outputs/*.md` |
| Composer (unlisted) | `/admin/compose` | `src/pages/admin/compose.astro` |
