# Publishing content

This guide is for the **publisher** — the person who takes content submitted by partners (via the composer or by email) and commits it to the GitHub repository. Once committed, the site rebuilds and updates within about one minute.

If you've never used GitHub's web editor before, don't worry — this guide walks through it in full. It's about ~5 clicks per publish once you're used to it.

## What you'll need

- A GitHub account.
- **Write access to the PATHFINDER repository** — your technical maintainer adds you. Confirm you can see an "Add file" button when browsing the repo.
- A modern browser (Chrome, Firefox, Edge, Safari).

## The 60-second version

1. Someone sends you a `.md` file (or an email with the text).
2. Go to `github.com/<org>/pathfinder/tree/main/src/content/news` (for news) or `.../events` (for events).
3. Click **Add file → Upload files**, drag the `.md` file, commit.
4. Wait ~1 minute. The site updates.

That's it. The rest of this doc explains the details, alternatives, and edge cases.

## Publishing a file that came from the Composer

Coordinators using the [Composer](./composer.md) send you a `.md` file. Here's the full flow:

1. Save the attached `.md` file from the email to your computer.
2. Open the file in any text editor and skim the content. Check:
   - **Sender identity**: does this email come from the person it claims to? A quick reply asking "did you send this?" is fine if you're unsure. Standard email hygiene — the same as accepting any editable content from anyone.
   - **Facts are right**: dates make sense, no obvious typos, tone matches the project.
   - **Image referenced but not attached?** — the file might mention `/images/news/foo.jpg`. If that image doesn't exist in the repo yet, either ask for it or upload it first (see [managing-images.md](./managing-images.md)).
3. Go to GitHub, navigate to the right folder:
   - News → `github.com/<org>/pathfinder/tree/main/src/content/news`
   - Events → `github.com/<org>/pathfinder/tree/main/src/content/events`
4. Click **Add file → Upload files**.
5. Drag the `.md` file into the drop zone (or click "choose your files").
6. Scroll down. Under **Commit changes**:
   - Leave the default commit message, or type something short like "Add news: Sarajevo recap".
   - Choose **Commit directly to `main`** (unless your team's rule is to use pull requests — see below).
7. Click **Commit changes**.
8. Watch the **Actions** tab (top of the repo) — you'll see a new workflow run kick off. When it turns green (~1 minute), the site is updated. If it turns red, see [troubleshooting.md](./troubleshooting.md).

## Publishing content that arrived as pasted text (not a file)

If someone sent you the content in the email body instead of as an attachment:

1. Copy the entire text (starting with `---` at the top).
2. Go to the right folder on GitHub (`src/content/news` or `src/content/events`).
3. Click **Add file → Create new file**.
4. In the filename box at the top, type a name like `2027-05-15-short-slug.md` (see the naming rules below).
5. Paste the entire text into the file body.
6. Scroll down, commit directly to `main`.

## Filename rules

Files in `src/content/news/` and `src/content/events/` follow this pattern:

```
YYYY-MM-DD-short-slug.md
```

- `YYYY-MM-DD` — the date of the news item (for events, use the start date).
- `short-slug` — a short, lowercase, hyphenated version of the title. No spaces, no punctuation. Example: `sarajevo-dialogue-recap`.
- The file extension must be `.md`.

Files downloaded from the Composer already have valid names — you can commit them as-is.

## Editing an already-published post

To fix a typo or update information after publishing:

1. Navigate to the file on GitHub (e.g. `src/content/news/2027-05-15-sarajevo-recap.md`).
2. Click the pencil icon (top right of the file view).
3. Make your edits.
4. Scroll down, add a short commit message ("Fix date in Sarajevo recap"), commit.
5. Site rebuilds within a minute.

## Deleting a post

If a post shouldn't be public any more:

1. Navigate to the file on GitHub.
2. Click the trash icon (top right).
3. Confirm and commit.
4. Alternatively, keep the file but add `draft: true` to its frontmatter — the post disappears from the site but stays in the repo for later.

## Using pull requests for review (optional, safer)

If your team's rule is to review changes before they go live:

1. When you commit (step 6 above), choose **Create a new branch** instead of "Commit directly to `main`". Name the branch something like `add-sarajevo-recap`.
2. Click **Commit changes** — this creates a Pull Request.
3. GitHub Actions runs the build against your branch. When it finishes, you get a preview URL in the PR comment (if configured).
4. Have a colleague review the PR.
5. Merge the PR into `main`. The site updates within a minute of the merge.

**Branch protection can enforce this** — if your maintainer has enabled it, you *have to* use a PR for any change to `main`. That's a safety net, not an obstacle.

## Common issues while publishing

**Red X on the commit / a failed deploy** → the file is malformed (usually a YAML syntax error). Open the Action log; it names the offending file and field. Fix it with another commit. See [troubleshooting.md](./troubleshooting.md) for common causes.

**"Author does not have write access"** → your GitHub account isn't a repo collaborator yet. Ask the technical maintainer to invite you.

**Two people committing at once** → GitHub handles this fine, but if you see a merge conflict, it usually means two people edited the same file. Pull the latest, resolve, commit again.

---

Full field references for what goes in a news or event file are in [editing-directly.md](./editing-directly.md).
