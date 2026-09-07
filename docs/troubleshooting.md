# Troubleshooting

Common issues and how to fix them. Symptoms first, causes and fixes below.

## Symptoms

- [A commit failed — red X on the commit / broken deploy](#a-commit-failed)
- [The site says "Page not found" for a page I just added](#the-site-says-page-not-found)
- [An image doesn't show up on the live site](#an-image-doesnt-show)
- [The Composer preview doesn't update when I type](#the-composer-preview-doesnt-update-when-i-type)
- [The Composer's "Download .md" button does nothing](#the-composers-download-button-does-nothing)
- [I published something and want to undo it](#undoing-a-published-change)
- [My local `npm run dev` shows 404 on a page I edited](#local-npm-run-dev-shows-404)
- [Someone I don't recognise is submitting content to the publisher](#someone-i-dont-recognise-is-submitting-content)

---

## A commit failed

**Symptom**: You commit a file (news, event, partner, etc.) and get a red X mark instead of a green check. Live site doesn't update.

**Cause**: The file has a formatting error — usually a YAML frontmatter issue.

**Fix**:

1. Click the red X on the commit to see the failed GitHub Action.
2. Click into the failed job. Scroll down to find the error message.
3. Common error patterns:
   - **"Missing required field 'title'"** → you forgot the `title:` line in the frontmatter.
   - **"Invalid enum value 'Greek' for 'country'"** → the country name doesn't match the allowed list. Fix to `Greece` (see [editing-directly.md](./editing-directly.md) for allowed values).
   - **"Invalid date"** → your `date:` field isn't in `YYYY-MM-DD` format.
   - **"Invalid url"** → a URL field is missing the `https://` prefix.
   - **"expected ':' but found something else"** → YAML syntax error, usually a wrong indent (must be 2 spaces, no tabs) or missing colon.
4. Edit the file to fix the issue, commit again. The build re-runs automatically.

## The site says "Page not found"

**Symptom**: You commit a new news item or event, GitHub Actions turns green, but visiting the URL shows the 404 page.

**Cause 1**: You edited a file's slug or date after publishing, changing the URL.
- **Fix**: check the file's filename. The URL is derived from it (e.g. `2027-05-15-sarajevo-recap.md` → `/news-events/news/2027-05-15-sarajevo-recap`).

**Cause 2**: The file has `draft: true` in its frontmatter.
- **Fix**: change to `draft: false` (or delete the line — false is the default), commit.

**Cause 3**: Browser or CDN cache.
- **Fix**: hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows).

## An image doesn't show

**Symptom**: You referenced an image in a content file but a broken-image icon appears on the site.

**Cause 1**: The image file isn't actually uploaded to `public/images/…/` in the repo.
- **Fix**: check whether the file exists in the correct subfolder on GitHub.

**Cause 2**: Wrong path in the frontmatter.
- **Fix**: the path must start with `/images/…`, NOT `/public/images/…`. The `public/` prefix is dropped at build time.

**Cause 3**: Filename mismatch (case-sensitivity).
- **Fix**: `Sarajevo.jpg` and `sarajevo.jpg` are different files. Filenames on the live site are case-sensitive.

## The Composer preview doesn't update when I type

**Symptom**: You're testing the composer locally (`npm run dev`). Typing in fields doesn't change the preview panel. Buttons don't respond.

**Cause**: Vite's dependency cache has gone stale (usually happens right after installing a new package).

**Fix** (in the terminal running `npm run dev`):

```bash
# Stop the dev server (Ctrl+C in the terminal running it)
rm -rf node_modules/.vite
npm run dev
```

This clears Vite's pre-bundled dependency cache. First page load after this will be slightly slower while it re-optimizes.

On the **live site** (after deploy), this issue does not exist — the production build bundles everything up-front.

## The Composer's Download button does nothing

**Symptom**: Clicking "↓ Download .md" doesn't save a file.

**Cause 1**: Your browser is blocking the download.
- **Fix**: check the browser's download settings. Some strict configurations block automatic downloads from unknown pages.

**Cause 2**: Same Vite dep cache issue as above.
- **Fix**: same as above — restart the dev server after clearing `node_modules/.vite`. (Only applies to local dev; the live site is fine.)

## Undoing a published change

If a commit went wrong and you want to revert it:

**Option 1 (via GitHub UI)**:

1. Go to the repo's **Commits** page (`github.com/<org>/pathfinder/commits/main`).
2. Find the bad commit.
3. Click the "..." menu on that commit → **Revert**.
4. Commit the revert. Site rebuilds within a minute, back to the pre-bad-commit state.

**Option 2 (delete the file)**:

If a commit added a bad file, just delete the file:

1. Go to the file on GitHub.
2. Click the trash icon (top right).
3. Confirm and commit. Site rebuilds without that content.

## Local `npm run dev` shows 404

**Symptom**: You edited a content file's frontmatter (added or removed fields). The dev server suddenly shows 404 for that page.

**Cause**: Astro's content collection cache in the running dev server got stale.

**Fix**: restart the dev server. Ctrl+C, then `npm run dev` again.

This does not affect the production build — only the running dev server.

## Someone I don't recognise is submitting content

**Symptom**: The publisher receives a `.md` file from an email address they don't recognise.

**Reason to be careful**: the composer page is public (unlisted URL, but findable). Anyone can generate a valid-looking Markdown file. Publishing it without verification would put someone else's content on the site.

**Fix**: standard email hygiene. Ask the coordinator or the presumed sender to confirm they sent it. Don't publish unverified content — the same way you wouldn't act on any unverified email request.

The composer itself is inert (see the security explanation in the composer page's info panel). The publishing step is the security perimeter, and it's a human decision.

---

*If your issue isn't covered here, contact the technical maintainer or open an issue on the repo.*
