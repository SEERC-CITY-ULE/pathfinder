# Using the Composer

The Composer is a form on the PATHFINDER website that lets you write a news item or an event and download it as a ready-to-publish file — **without touching GitHub, YAML, or code**.

**URL**: `https://<your-live-url>/admin/compose`

The page is unlisted (not in the site's menu, hidden from search engines). Bookmark the URL when your maintainer sends it to you.

## What the Composer does — and doesn't

- ✅ Takes what you type and formats it correctly for the website.
- ✅ Shows a live preview so you can see how the news card and article will look.
- ✅ Generates the right filename and downloads the file for you.
- ❌ Does **not** publish anything on its own. You still need to send the downloaded file to your publisher.

Think of it as a "clean the format for me" tool. Publishing is a separate step handled by the designated publisher (contact your project coordinator to know who that is).

## Writing a news item

1. Go to `/admin/compose`.
2. Confirm the toggle at the top says **News item** (the darker button). If not, click it.
3. Fill in the fields:
   - **Title** — a short, punchy headline (max 120 characters).
   - **Date** — the date of publication. Defaults to today.
   - **Summary** — one or two sentences that will show on the News card. This is what people see before clicking through.
   - **Body** — the full article. Uses Markdown for formatting (see below).
   - **Tags** *(optional)* — one or two labels, comma-separated (e.g. `event-recap, sarajevo`).
   - **Author** *(optional)* — your name or the name of whoever wrote the piece.
4. *(Optional)* Click **Add an image** to include a hero photo. See [managing-images.md](./managing-images.md) for what to put here.
5. Watch the **Preview** on the right — the news card and article both update as you type.
6. When you're happy, click **↓ Download .md**. A file like `2027-05-15-my-title.md` saves to your Downloads folder.
7. Send that file to the publisher (see the "Sending to the publisher" section below).

## Writing an event

Same flow as news, but click the **Event** toggle at the top first. The form changes:

- **Title** — the event's name (e.g. "Sofia Forum on AI and the Future of Work").
- **Start date** and **End date** *(optional)* — the date(s) the event runs.
- **Location** — city and country (e.g. "Sofia, Bulgaria" or "Online").
- **Country** — pick from the dropdown. "Online" is a valid choice for virtual events.
- **Format** — In-person / Online / Hybrid.
- **Summary** — a one- or two-sentence description shown on the events grid.
- **Body** — full agenda, background, or details in Markdown.
- **Registration URL** *(optional)* — a link where people can register.

Everything else works the same. Download, send to publisher.

## Formatting the body

There are two ways to format text in the **Body** field:

### 1. Toolbar buttons (easiest)

Right above the body textarea there's a small toolbar:

- **B** — bold. Select some text and click B, or click B and start typing.
- **🔗 Link** — insert a link. Select the text you want linked, click Link, then type or paste the URL in the popup.
- **H2** — turn the current line into a section heading.
- **H3** — turn the current line into a sub-heading.
- **• List** — turn the current line (or selected lines) into a bulleted list.
- **❝ Quote** — turn the current line into a quote block.

The preview on the right updates immediately so you see exactly what will render.

### 2. Type Markdown directly

The toolbar is just a shortcut — you can type the same syntax by hand. That's plain text with a few simple rules:

```
## A section heading
### A smaller heading

A paragraph. Just type normally.

Leave a blank line between paragraphs.

**Bold** and *italic*.

- A bulleted list
- Another item

1. A numbered list
2. Another item

[A link to somewhere](https://example.org)

> A quote or callout.
```

The preview shows exactly how it will render. If it looks right in the preview, it will look right on the live site.

## Sending to the publisher

The publisher for PATHFINDER content receives files at:

**`info@the-pathfinder-project.eu`** *(confirm with your coordinator — this may change)*

To send:

1. Open a new email to the publisher.
2. Subject line: something like "News item: Sarajevo recap" or "Event: Sofia Forum".
3. Attach the `.md` file you downloaded.
4. Optionally include a note if there's context or a suggested publish time.
5. Send.

The publisher will upload the file to GitHub, at which point the site will update within about a minute.

## FAQs

**"Can I edit an already-published post?"** — The composer only creates new files. To edit an existing news item or event, ask the publisher (they can do it directly on GitHub) or see [editing-directly.md](./editing-directly.md) if you're comfortable with the web editor.

**"What if I don't upload an image?"** — Then the PATHFINDER logo appears on the card and article. Perfectly fine as a default.

**"What if I want to save my work and come back later?"** — Click Download. Keep the `.md` file on your computer. Later, open it in any text editor, edit, and re-attach when you're ready.

**"Is my content saved anywhere while I'm typing?"** — No. If you close the tab before downloading, your work is lost. Download before you close.

**"Can I preview my post on the live site before it publishes?"** — Only if your publisher opens a Pull Request (draft mode) instead of committing directly. Ask them to do that if you want a private preview URL before it goes live.

**"Someone else already saw the composer URL. Is that a security problem?"** — No. The composer generates text; it can't publish anything. Only committed changes on GitHub reach the site, and only your maintainer can commit. See [troubleshooting.md](./troubleshooting.md) for more on this.

---

*If something in the composer doesn't work as expected, check [troubleshooting.md](./troubleshooting.md) or contact the technical maintainer.*
