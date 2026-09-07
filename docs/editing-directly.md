# Editing content directly on GitHub

This guide covers editing the site's content **without the Composer** — useful for the publisher, or for coordinators comfortable with GitHub's web editor. It covers news, events, partners, Advisory Board members, and outputs.

If you'd rather use a form-based interface for news and events, see [composer.md](./composer.md).

## What's a content file?

Every piece of content on the site is a plain text file in `src/content/`. Files use Markdown format with a small YAML block at the top called "frontmatter":

```yaml
---
title: My news item
date: 2027-05-15
summary: A short preview.
---

The full article in Markdown goes down here.
```

The `---` lines are required. Everything between them is frontmatter (structured fields). Everything below is the body content.

## Content folders

| Content type | Folder | One file per… |
|---|---|---|
| News | `src/content/news/` | News item |
| Events | `src/content/events/` | Event |
| Partners | `src/content/partners/` | Partner organisation |
| Advisory Board | `src/content/advisory-board/` | AB member |
| Featured outputs | `src/content/outputs/` | Deliverable getting its own detail page |

## Adding a news item

**File location**: `src/content/news/`

**Filename**: `YYYY-MM-DD-short-slug.md` (e.g. `2027-06-15-sarajevo-recap.md`).

**Template** (in `src/content/news/_template.md`):

```yaml
---
title: Headline for the news item
date: 2027-06-15
summary: One or two sentences (at least 20 characters).
author: Coordinator name         # optional
image:                            # optional
  src: /images/news/photo.jpg
  alt: A short description of the photo
  credit: Photographer on Source
tags:                             # optional
  - event-recap
draft: false                      # set to true to hide while editing
---

Write the article in Markdown here.

## Use headings, lists, and links freely
```

Required fields: `title`, `date`, `summary`. Everything else is optional. If no `image` is provided, the PATHFINDER logo shows as the default on the card and article.

## Adding an event

**File location**: `src/content/events/`

**Filename**: `YYYY-MM-DD-short-slug.md` (use the start date).

**Template**:

```yaml
---
title: Short event title
startDate: 2027-03-15
endDate: 2027-03-16               # optional, omit for single-day events
location: City, Country
country: Greece                    # must be one of the allowed values (see below)
format: In-person                  # must be one of: In-person, Online, Hybrid
summary: One or two sentences (at least 20 characters).
image:                             # optional
  src: /images/events/photo.jpg
  alt: A short description of the photo
  credit: Photographer on Source
registrationUrl: https://...       # optional
draft: false                       # set to true to hide while editing
---

Full event description in Markdown here.
```

**Allowed values for `country`**: `Slovakia`, `Greece`, `Bosnia & Herzegovina`, `Bulgaria`, `Serbia`, `Italy`, `United Kingdom`, `European Union`, `Online`.

**Allowed values for `format`**: `In-person`, `Online`, `Hybrid`.

Typos in these fields will fail the build with a clear error.

## Editing a partner

Each partner has one file in `src/content/partners/`. Fields:

```yaml
---
name: Full official name
shortName: Short name / acronym
country: Slovakia                   # same allowed values as events
role: Coordinator                    # or "Beneficiary"
website: https://example.org         # optional
logo: /images/partners/foo.png       # optional
summary: One-liner about the org.
contribution: What they do in PATHFINDER.
team:                                # list of team members
  - name: Denisa Karabová
    role: Project coordinator
    bio: Optional short bio.
    photo: /images/team/denisa-karabova.jpg  # optional
  - name: Ali Honaramiz
    role: European Dialogue team
order: 1                             # order the partner appears (lower first)
---

Optional paragraph of extra body text (rarely used).
```

To add or remove team members, just edit the `team:` list. Each entry needs `name` and `role`; `bio` and `photo` are optional. If `photo` is omitted, an initials avatar appears in brand teal.

## Editing an Advisory Board member

Each member has one file in `src/content/advisory-board/`:

```yaml
---
name: Full name
country: Italy                      # same allowed values as events
affiliation: Institution / employer
expertise: One-line description of expertise areas
bio: One or two sentences about them and their PATHFINDER role.
photo: /images/team/name.jpg         # optional
order: 1                             # display order on the page
---
```

## Editing a featured output

Only the **three flagship outputs** get their own detail pages. Files live in `src/content/outputs/`.

```yaml
---
id: D6.1                             # deliverable ID from the DoA
title: Report title
workPackage: WP6                     # for internal reference only, not shown publicly
leadPartner: CREDI                   # for internal reference only, not shown publicly
dueMonth: 7                          # project month
summary: One or two sentences shown on the flagship card.
featured: true                       # true to show on the outputs page
fileUrl: https://…                   # optional link to the published PDF
order: 1                             # display order among flagships
---

Optional body text (shown on the detail page under the summary).
```

## Editing the About page, Home page, or Consortium intro

These pages are NOT content-file-driven — they live in `src/pages/`. They're Astro files (a mix of HTML and expressions). Coordinators can still edit the text on them by finding the exact string in the file and changing it — just be careful not to break the tags (angle brackets and curly braces).

Files:
- Home page copy: [`src/pages/index.astro`](../src/pages/index.astro)
- About page: [`src/pages/about.astro`](../src/pages/about.astro)
- Consortium intro (above the partner sections): [`src/pages/consortium.astro`](../src/pages/consortium.astro)

Site-wide facts (project name, tagline, description, coordinator info, contact email, country list) live in [`src/data/site.ts`](../src/data/site.ts). One place to change them all.

## Hiding a post without deleting it

Every content file supports a `draft: true` field in the frontmatter. When set, the file is skipped by the site build — it stays in the repository but doesn't appear on the live site. Useful for:

- Drafting a post over several days.
- Temporarily unpublishing a post without losing the file.
- Test posts you don't want visitors to see.

## Common YAML gotchas

- **Indentation** — always exactly 2 spaces. Tabs will break the build.
- **Dates** — always `YYYY-MM-DD`. Don't use slashes or written dates.
- **Colons in titles or summaries** — wrap the whole value in double quotes: `title: "Learning: what we found"`.
- **Line breaks in fields** — avoid. Keep field values on a single line. Multi-line content belongs in the body (below the second `---`).

## The build tells you what's wrong

If you commit a file with a broken schema, GitHub Actions fails and the site doesn't update. Open the Action log — it names the file and the exact problem. See [troubleshooting.md](./troubleshooting.md).

---

For image uploads and Creative Commons sources, see [managing-images.md](./managing-images.md).
