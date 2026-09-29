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

### Need to create a new folder?

GitHub has **no explicit "Add folder" button** — you create folders by naming them in a filename. For example, typing `new-folder/.gitkeep` into a "Create new file" filename box creates `new-folder/` with an invisible placeholder inside.

Full walkthrough (with the direct-upload alternative and nested-folder examples) lives in [managing-images.md → Creating a new subfolder](./managing-images.md#creating-a-new-subfolder-when-the-default-ones-arent-enough).

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

## Walkthrough 7 — Editing page copy (Home, About, Consortium intro, section intros)

Some page text isn't in the `content/` folder — it's baked directly into the page files themselves. These are the **intro paragraphs**, **hero taglines**, **stat labels**, and **section descriptions** you see on the site. Examples:

- The "Youth voices shaping an AI-ready Europe" tagline on the Home page.
- The paragraph on the News & events page: *"Project announcements, event recaps, and the calendar of public PATHFINDER activities…"*
- The intro on Consortium: *"Six partners across five countries — a multidisciplinary partnership…"*
- The four objective titles on the Home page.
- The "Challenge" stats on the About page (15%, 26%+, 11.2%, 10%).

Because these live inside HTML tags rather than in a simple Markdown file, you have to be a bit more careful. Follow the two rules below and you'll be fine.

### The two rules

**Rule 1 — Change only the words.**
The text between `>` and `<` is what appears on the website. That's what you edit.

**Rule 2 — Never touch anything that isn't a plain word.**
Specifically, do NOT change:
- Anything starting with `<` and ending with `>` (that's an HTML tag, e.g. `<p>`, `</p>`, `<span class="...">`, `<h2>`).
- Anything in `{curly braces}` (that's a dynamic expression pulled from data — e.g. `{site.name}`).
- Anything with `class=` or `href=` inside a tag (those control styling and links).
- The number of `<` and `>` characters — if the file has `<p>` before your text and `</p>` after, keep both.

If you follow these two rules, the site cannot break from your edit.

### The pages you can edit, with direct links

Each link below opens GitHub straight in **edit mode** — no navigation, no clicking "pencil icon" needed. Just click, edit, commit.

| Page on the site | Click to edit |
|---|---|
| Home page (hero, sections, objectives, home-page intros) | [Edit `index.astro`](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/index.astro) |
| About page (challenge, methodology, objectives) | [Edit `about.astro`](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/about.astro) |
| Consortium page (intro paragraph above the partner list) | [Edit `consortium.astro`](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/consortium.astro) |
| News & events page (intro paragraph) | [Edit `news-events/index.astro`](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/news-events/index.astro) |
| Outputs page (intro paragraph) | [Edit `outputs/index.astro`](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/outputs/index.astro) |

*Tip*: right-click these links and pick "Open in new tab" so you can keep this guide open on the side.

### Detailed walkthrough — with a real example

Let's say you want to change the News & events intro paragraph:

> *Project announcements, event recaps, and the calendar of public PATHFINDER activities — debates, career days, transnational forums, skills labs, and the closing EU policy roundtable.*

**Step 1**. Click [Edit `news-events/index.astro`](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/news-events/index.astro) above.

**Step 2**. Press **Cmd+F** (Mac) or **Ctrl+F** (Windows) inside the text editor to search. Type a distinctive word or two from the sentence — e.g. `Project announcements`. Your cursor jumps to that line.

**Step 3**. You'll see something like this:

```html
      <p class="text-lg md:text-xl text-[var(--color-ink-soft)] leading-relaxed">
        Project announcements, event recaps, and the calendar of public PATHFINDER activities — debates, career days, transnational forums, skills labs, and the closing EU policy roundtable.
      </p>
```

Identify the three parts:
- 🟢 **Safe to change**: `Project announcements, event recaps, and the calendar…` — the plain sentence.
- 🔴 **Don't touch**: `<p class="text-lg md:text-xl text-[var(--color-ink-soft)] leading-relaxed">` — this is the opening tag.
- 🔴 **Don't touch**: `</p>` — this is the closing tag.

**Step 4**. Replace only the green part with your new text. For example:

```html
      <p class="text-lg md:text-xl text-[var(--color-ink-soft)] leading-relaxed">
        Everything happening at PATHFINDER — news updates, event announcements, and the full calendar of our public activities across all five countries.
      </p>
```

**Step 5**. Scroll down to the "Commit changes" box.
- Commit message: something short like `Update News & events intro copy`.
- Choose **"Commit directly to the `main` branch"**.
- Click **Commit changes**.

**Step 6**. Wait about a minute, then refresh the News & events page on the live site. Your new sentence appears.

### More examples — what you might want to change on each page

**Home page** ([edit](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/index.astro)):
- **Hero tagline** — search for `Youth voices shaping`.
- **The four "Project objectives" cards** — search for `Open dialogue, online and offline` (or any of the other three headings). Each has a title and a description you can rewrite.
- **The section headings** like `Upcoming events`, `Latest news`, `Implementation countries`.
- **The paragraph under "Implementation countries"** starting `PATHFINDER activities take place across five countries…`.

**About page** ([edit](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/about.astro)):
- The four **challenge statistics** — search for `15%` or `EU youth unemployment`. You can change both the number and its description.
- The **methodology phase descriptions** — search for a phase name like `Participatory research`.
- The **section headings** like `The challenge`, `Methodology`, `Objectives`.

**Consortium page** ([edit](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/consortium.astro)):
- The **intro paragraph** above the partner list — search for `Six partners across five countries`.
- The **Advisory Board section intro** — search for `Four experts drawn from four countries`.
- Note: the partner details themselves (name, contribution, team members) are in [`src/content/partners/`](https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/partners), not in this file. See Walkthrough 4.

**Outputs page** ([edit](https://github.com/SEERC-CITY-ULE/pathfinder/edit/main/src/pages/outputs/index.astro)):
- The **page heading** `Project outputs`.
- The **intro paragraph** — search for `The three flagship outputs`.

### Common mistakes and what happens

**Mistake 1 — Deleted an angle bracket by accident.**
- Example: you delete the `<` in `</p>`, leaving `/p>` instead.
- Symptom: the build fails (red X on GitHub Actions). The site keeps showing the old (working) version — visitors see no change.
- Fix: click the red X → find the file → put the `<` back → commit again.

**Mistake 2 — Changed a class name by accident.**
- Example: you rewrite `class="text-lg"` to `class="text-huge"` because "huge" sounds better.
- Symptom: the build succeeds, but the paragraph looks weird on the live site (wrong size, wrong colour).
- Fix: open the file again, put the original class name back, commit again.

**Mistake 3 — Changed a `{curly-brace expression}`.**
- Example: you change `{site.name}` in the hero to `PATHFINDER`. Locally works, but on some pages you'll see empty text.
- Symptom: usually the build succeeds, but text disappears in some places.
- Fix: put the original `{curly braces expression}` back.

**Mistake 4 — Removed the closing `</p>` (or `</div>`, `</section>`, etc.).**
- Symptom: the layout gets scrambled — text on the page below overlaps or disappears.
- Fix: re-add the closing tag. If unsure where it goes, ask the maintainer.

### Safety net — preview before publishing

If you're nervous about a change, you can commit to a **new branch** instead of `main` and open a Pull Request. GitHub Actions will build a preview so you can see what the change looks like before it goes live.

At the "Commit changes" box:
1. Choose **"Create a new branch for this commit and start a pull request"** (instead of "Commit directly to `main`").
2. Give the branch a name like `try-new-intro`.
3. Click **Propose changes**.
4. On the next screen, click **Create pull request**.
5. The Actions tab will show the build. If green, you can click the "Deploy Preview" URL if configured. When happy, click **Merge pull request** on the PR page to go live.

### Escape hatch — undo any change

Every edit is in the commit history and reversible:

1. Go to `https://github.com/SEERC-CITY-ULE/pathfinder/commits/main`.
2. Find your bad commit.
3. Click the **"..."** menu on that commit → **Revert**.
4. Confirm the revert. The site rebuilds within a minute with the old text back.

### When to ask the maintainer instead

If any of the following applies, it's faster to send your desired change to the technical maintainer than to attempt the edit yourself:

- You want to change the **layout** or **colour** of something (not just the words).
- You want to **add** a whole new section or paragraph (not just replace existing text).
- The text you want to change contains a `{curly-brace expression}` — those are computed and need to be updated in the data file, not the page file.
- You've tried an edit twice and it keeps failing the build.

Just email the maintainer with a screenshot of what you want changed and the new text.

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
