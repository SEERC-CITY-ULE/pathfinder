# Editing existing content on the website

This guide covers **editing anything that's already on the PATHFINDER website** — news items, events, outputs, partner descriptions, team bios, and the basic site information (project name, contact email, home page copy, etc.).

Everything happens in **your browser** on github.com. **No terminal, no code editor, no command line.**

If you've never used GitHub before, follow the click-by-click steps in the walkthroughs below. Each edit takes about 60 seconds once you know the pattern.

---

## Before you start (one-time setup)

1. **A GitHub account** ([github.com](https://github.com)) — free.
2. **Write access to the PATHFINDER repository.** Ask your technical maintainer to invite you. You'll get an email with an "Accept invitation" button.

That's it. From now on, every edit is a browser task.

---

## The common pattern (worth learning once)

Every edit on GitHub follows the same 5 clicks:

1. Navigate to the file you want to change.
2. Click the **pencil icon** in the top-right of the file view.
3. Make your changes in the text box.
4. Scroll to the bottom → **"Commit changes"** box.
5. Type a short description of what you changed, choose **"Commit directly to the `main` branch"**, click the green **Commit changes** button.

Wait one minute. The live site updates automatically. That's it.

Below are the specific files and fields for each type of content.

---

## Walkthrough 1 — Editing an existing news item

### Step 1 — Find the news file

Open your browser and go to:
`https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/news`

You'll see a list of files, one per news item. Each filename starts with a date (e.g. `2026-04-01-project-launches.md`).

Click the file for the news item you want to edit.

### Step 2 — Open the editor

At the top-right of the file view, click the **pencil icon** (says "Edit this file" on hover).

### Step 3 — Understand what you're looking at

The file has two parts:

**The top block (between the two `---` lines) is the "frontmatter"** — the settings for the post:

```yaml
---
title: PATHFINDER officially launches
date: 2026-04-01
summary: A short preview shown on the news card.
tags:
  - milestone
---
```

**Everything below the second `---` is the article body**, written in Markdown.

### Step 4 — Common edits

**To change the headline** — edit the `title:` line.

**To change the summary shown on the news card** — edit the `summary:` line.

**To change the published date** — edit the `date:` line (must stay in `YYYY-MM-DD` format).

**To change the article text** — edit the paragraphs below the second `---`.

**To add or remove tags** — edit the `tags:` list. Each tag is on its own line, indented two spaces, starting with `- `:
```yaml
tags:
  - event-recap
  - sarajevo
```

**To hide the post without deleting it** — add this line to the frontmatter:
```yaml
draft: true
```
The post disappears from the site but the file stays in the repo. Change to `draft: false` (or delete the line) to make it live again.

**To change or add a photo** — see [managing-images.md](./managing-images.md).

### Step 5 — Save

Scroll down to the "Commit changes" box. Write a short description like `Fix typo in Sarajevo recap` or `Update date on launch post`. Choose **"Commit directly to the `main` branch"**. Click **Commit changes**.

Wait ~1 minute, refresh the news page on the live site.

### Step 6 — Deleting a news item entirely

If you actually want to delete the post:
1. Open the file (as in Step 1).
2. Click the **trash icon** in the top-right of the file view (next to the pencil).
3. Scroll down, add a commit message, click **Commit changes**.

---

## Walkthrough 2 — Editing an existing event

Identical flow to news, but in a different folder.

### Step 1 — Find the event file

Go to:
`https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/events`

Click the event file you want to edit.

### Step 2 — Open the editor

Pencil icon, top-right of the file view.

### Step 3 — What you can change

**Common frontmatter fields for events:**

```yaml
---
title: PATHFINDER Sofia Forum
startDate: 2027-09-01
endDate: 2027-09-02
location: Sofia, Bulgaria
country: Bulgaria
format: In-person
summary: A short description shown on the event card.
agenda: |
  09:00 — Registration
  09:30 — Opening remarks
registrationUrl: https://...
---
```

- **`title:`** — the event name.
- **`startDate:`** and **`endDate:`** — dates in `YYYY-MM-DD` format. Omit `endDate:` for single-day events.
- **`location:`** — city and country, or "Online".
- **`country:`** — **must be one of**: `Slovakia`, `Greece`, `Bosnia & Herzegovina`, `Bulgaria`, `Serbia`, `Italy`, `United Kingdom`, `European Union`, `Online`. Any other value fails the build.
- **`format:`** — **must be one of**: `In-person`, `Online`, `Hybrid`.
- **`summary:`** — one or two sentences shown on the event card.
- **`agenda:`** *(optional)* — programme details. Note the `|` character after the colon and the two-space indent on each line — that lets you write multiple lines.
- **`registrationUrl:`** *(optional)* — a link to a registration page. Must start with `https://`.

**Everything below the second `---` is the event description** in Markdown.

### Step 4 — Save

Scroll down → commit message → **"Commit directly to the `main` branch"** → **Commit changes**.

---

## Walkthrough 3 — Editing an existing output (deliverable)

### Step 1 — Find the output file

Go to:
`https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/outputs`

Click the file for the output you want to edit (files named like `d6-1-transnational-research.md`).

### Step 2 — What you can change

Output frontmatter:
```yaml
---
id: D6.1
title: Transnational Research Synthesis Report
summary: A short description shown on the outputs page.
featured: true
fileUrl: /files/d6-1-report.pdf
image:
  src: /images/outputs/d6-1-cover.jpg
  alt: Cover of the report
---
```

- **`id:`** — the deliverable ID (format `D#.#`, e.g. `D6.1`). This becomes the URL slug (`/outputs/d6-1`).
- **`title:`** — the report title.
- **`summary:`** — one or two sentences shown on the output card.
- **`featured:`** — `true` to show on the Outputs page; `false` to hide.
- **`fileUrl:`** *(optional)* — link to the actual PDF. Either an external URL (`https://…`) or an uploaded file (`/files/…pdf`).
- **`image:`** *(optional)* — a cover image. See [managing-images.md](./managing-images.md).

**Body**: everything below the second `---` is the description.

### Uploading the actual PDF

1. Go to:
   `https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/public/files`
2. Click **Add file → Upload files**.
3. Drag the PDF in.
4. Commit.
5. In the output file's frontmatter, set `fileUrl: /files/your-file.pdf` (matching the exact filename you uploaded).

The PDF becomes downloadable and previewable directly on the output detail page.

---

## Walkthrough 4 — Editing a partner (organisation info + team)

### Step 1 — Find the partner file

Go to:
`https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/partners`

Click the partner file (e.g. `credi.md`, `european-dialogue.md`, `city-ule.md`, etc.).

### Step 2 — What you can change

Partner file structure:
```yaml
---
name: European Dialogue
shortName: ED
country: Slovakia
role: Coordinator
summary: A one-liner about the organisation.
contribution: What the organisation does in PATHFINDER.
team:
  - name: Denisa Karabová
    role: Project Coordinator
    bio: Short bio paragraph.
    photo: /images/team/denisa-karabova.jpg
  - name: Ali Honaramiz
    role: Project Manager
    bio: Short bio paragraph.
order: 1
---
```

**Common edits:**

**Change the organisation description** — edit `summary:` (one-liner) or `contribution:` (what they do in PATHFINDER).

**Add a new team member** — copy the last block in the `team:` list and edit it:
```yaml
  - name: New Person's Name
    role: Their role
    bio: One or two sentences about them.
    photo: /images/team/new-person.jpg
```
- The dash `-` at the start is important — it says "a new list item".
- Every line after the dash starts with **four spaces**.
- `bio` and `photo` are optional. Without a photo, an initials avatar appears (e.g. NP for "New Person").
- See [managing-images.md](./managing-images.md) for uploading the portrait.

**Remove a team member** — delete their entire block (the line starting with `- name:` and the indented lines below it).

**Change someone's role or bio** — edit the `role:` or `bio:` line for that person.

**Reorder team members** — cut and paste the whole `- name: …` blocks in the order you want.

### Step 3 — Save

Commit message → **"Commit directly to the `main` branch"** → **Commit changes**.

---

## Walkthrough 5 — Editing an Advisory Board member

### Step 1 — Find the file

Go to:
`https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/advisory-board`

Click the file for the person you want to edit.

### Step 2 — What you can change

```yaml
---
name: Antigoni Maria Founta
country: United Kingdom
affiliation: Imperial College London
expertise: AI safety, machine learning ethics
bio: A short paragraph about them and their PATHFINDER role.
photo: /images/team/antigoni-founta.jpg
order: 2
---
```

All fields are edit-in-place. The **`bio:`** field is the paragraph shown on the Consortium page. See [managing-images.md](./managing-images.md) for uploading a portrait.

### Step 3 — Adding a new Advisory Board member

1. Go to the folder (`src/content/advisory-board/`).
2. Click **Add file → Create new file**.
3. In the filename box at the top, type something like `firstname-lastname.md` (lowercase, hyphens, `.md` extension).
4. Paste in this template and fill it out:
   ```yaml
   ---
   name: Their Full Name
   country: Italy
   affiliation: Their institution
   expertise: One-line description of expertise areas
   bio: One or two sentences about them and their PATHFINDER role.
   photo: /images/team/firstname-lastname.jpg
   order: 5
   ---
   ```
5. Scroll down → commit message → **Commit changes**.

---

## Walkthrough 6 — Editing basic site information

Things like the project name, tagline, description, contact email, coordinator name, and country list live in a single file: [`src/data/site.ts`](../src/data/site.ts).

### Step 1 — Open the file

Go to:
`https://github.com/SEERC-CITY-ULE/pathfinder/blob/main/src/data/site.ts`

### Step 2 — Click the pencil icon to edit

### Step 3 — What you can change

The file looks like this (only the parts you'd normally change are shown):

```ts
export const site = {
  name: "PATHFINDER",
  longName: "Unlocking the PotentiAl of YouTH on AI Learning…",
  tagline: "Youth voices shaping an AI-ready Europe",
  description: "PATHFINDER is an EU-funded CERV project (2026–2028)…",

  grant: {
    id: "101253819",
    programme: "CERV — Citizens, Equality, Rights and Values",
    ...
  },

  duration: {
    months: 24,
    start: "1 April 2026",
    end: "31 March 2028",
  },

  coordinator: {
    name: "European Dialogue",
    country: "Slovakia",
    contactName: "Denisa Karabová",
    contactRole: "Project Coordinator",
    email: "info@the-pathfinder-project.eu",
  },
  ...
};
```

**Common edits:**

- **Change the tagline** on the home page → edit the `tagline: "..."` line.
- **Change the project description** on the home page → edit the `description: "..."` line.
- **Change the contact email** (shown in the footer and in the composer instructions) → edit `email: "..."`.
- **Change the coordinator name or role** → edit `contactName:` or `contactRole:`.

**Important**: keep the **double quotes** around every text value. If you write `tagline: A new tagline` (without quotes), the site will fail to build. Always use `tagline: "A new tagline"`.

### Step 4 — Save

Commit → **"Commit directly to the `main` branch"** → **Commit changes**.

---

## Walkthrough 7 — Editing page copy (Home, About, Consortium intro)

Some page text isn't in the `content/` folder — it's in the page files themselves. These are trickier to edit because there's HTML around the text.

**Rule**: change only the **words** — never the `<tags>` or `{expressions}` around them.

### The pages you can edit:

| Page on the site | File to edit on GitHub |
|---|---|
| Home page (hero + sections) | [`src/pages/index.astro`](../src/pages/index.astro) |
| About page | [`src/pages/about.astro`](../src/pages/about.astro) |
| Consortium page (intro paragraph) | [`src/pages/consortium.astro`](../src/pages/consortium.astro) |
| News & events page (intro) | [`src/pages/news-events/index.astro`](../src/pages/news-events/index.astro) |
| Outputs page (intro) | [`src/pages/outputs/index.astro`](../src/pages/outputs/index.astro) |

### How to edit safely

1. Open the file on GitHub (link above).
2. Click the pencil icon.
3. **Find the exact text** you want to change (Ctrl+F / Cmd+F in your browser).
4. Change only the **plain words** — leave everything that looks like `<span class="…">`, `{something}`, or `class=`, or `href=` alone.

**Example — changing the About page challenge stats:**

You'll see something like:
```html
<div class="border-l-2 border-[var(--color-accent)] pl-4">
  <p class="…">15%</p>
  <p class="…">EU youth unemployment (late 2024)</p>
</div>
```

You can safely change the **`15%`** and **`EU youth unemployment (late 2024)`** to different words. Do NOT touch the `<div class="…">`, `<p class="…">`, or `</p>` bits.

### If in doubt

Copy the file's contents into a plain text note before editing. If your commit breaks the site (red X on GitHub Actions), just paste the original text back and commit again.

Or: ask the technical maintainer to do the change — they'll be able to look at your commit and undo it in seconds.

---

## What to do when something goes wrong

**"My commit shows a red X"**
The build failed. Click the red X → click into the failed job → scroll to the bottom for the error. Most common causes:
- **Missing required field**: you deleted a `title:` or `date:` line by accident. Put it back.
- **YAML indentation error**: you have too many or too few spaces at the start of a line inside the frontmatter (the `---` block). Fix the indentation and commit again.
- **Invalid country name**: check the exact spellings in the "country" list above.
- **Missing quotes** in `site.ts`: any string value needs `"double quotes"` around it.

**"I changed something but the site still shows the old version"**
1. Wait a full minute — the site rebuilds after every commit.
2. Hard-refresh your browser (Cmd+Shift+R on Mac, Ctrl+F5 on Windows).
3. If it's still stale, open the site in a private / incognito window.

**"I accidentally deleted something important"**
Every change is in the commit history and can be undone:
1. Go to the file on GitHub.
2. Click the "History" link at the top of the file.
3. Find a commit from before you broke it — click it to see the old version.
4. Click the "..." menu on that commit → **"View file"**.
5. Click the pencil, copy the old text, paste it into the current version.
6. Commit.

Or: ask the technical maintainer to revert the bad commit — they can do it in one click on GitHub.

---

*For adding photos, see [managing-images.md](./managing-images.md). For creating brand-new news items or events via a form, see [composer.md](./composer.md). For understanding the publisher's role, see [publishing.md](./publishing.md).*
