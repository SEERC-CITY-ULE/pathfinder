# Adding photos to the website

This guide is for **coordinators and team members** who want to add photos to news items, events, or team-member profiles. Everything happens in **your browser** on github.com — **no terminal, no command line, no code editor.**

If you've never used GitHub before, follow the walkthrough sections below. Each one is written to be done click-by-click.

---

## Before you start (one-time setup)

You need three things:

1. **A GitHub account.** Free — sign up at [github.com](https://github.com) if you don't have one.
2. **Write access to the PATHFINDER repository.** Ask your technical maintainer to invite you as a collaborator. You'll get an email invitation with an "Accept invitation" button.
3. **Your photo ready on your computer** (see the "Preparing your photo" section below for size / format guidance).

That's it. From now on you can add photos any time by going to github.com and following the steps below.

---

## Where photos live

Different types of photos go in different folders. You'll pick the right one before uploading:

| I want to add… | Folder to upload to | Referenced in the page as |
|---|---|---|
| A photo for a news item | `public/images/news/` | `/images/news/your-file.jpg` |
| A photo for an event | `public/images/events/` | `/images/events/your-file.jpg` |
| A team-member portrait (partner) | `public/images/team/` | `/images/team/your-file.jpg` |
| An Advisory Board portrait | `public/images/team/` | `/images/team/your-file.jpg` |
| A partner organisation logo | `public/images/partners/` | `/images/partners/your-file.png` |
| A new hero photo for the home page | `public/images/hero/` | `/images/hero/your-file.jpg` |

You don't need to memorise this — the walkthroughs below tell you exactly where to click.

---

## Creating a new subfolder (when the default ones aren't enough)

Sometimes you'll want to organise photos into a new subfolder — for example, all photos from one event grouped together in `public/images/events/sarajevo-2027/`. GitHub's web UI has **no explicit "Add folder" button**. Here's how you actually do it.

### Why it works differently

Git doesn't track empty folders — only files. So on GitHub, you create a folder by creating a **file inside it** with a path that names the folder. The folder appears automatically because the file is in it.

### The one-file trick (an empty placeholder)

Use this when you want to create the folder now and put files in it later.

1. On github.com, navigate to the parent folder — e.g. go to `public/images/events/` at `https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/public/images/events`.
2. Click **Add file → Create new file**.
3. In the filename box at the top, type both the folder and a placeholder file separated by a `/`:
   ```
   sarajevo-2027/.gitkeep
   ```
4. Leave the file **content empty**.
5. Scroll down → commit message like `Create sarajevo-2027 folder for event photos` → **Commit changes**.

The folder `public/images/events/sarajevo-2027/` now exists with an invisible `.gitkeep` file inside. The `.gitkeep` file is a common convention — its only job is to keep the otherwise-empty folder alive in git.

**Tip**: as you type in the filename box, look at the small breadcrumbs above it. They update in real time to show the nesting — `public / images / events / sarajevo-2027 / .gitkeep`. That's a good sanity check that you typed the slash correctly.

### The direct-upload trick (create folder + add files in one go)

If you're creating the folder because you have files to put in it right now, skip `.gitkeep` and just create the first real file at its full path.

**Option A — Create a first file directly:**
1. In the parent folder, click **Add file → Create new file**.
2. Filename: `sarajevo-2027/report.md` (or whatever).
3. Type the content.
4. Commit.

**Option B — Upload the folder from your desktop:**
1. On your computer, put your files inside a folder named exactly what you want (e.g. `sarajevo-2027`).
2. In the parent folder on GitHub, click **Add file → Upload files**.
3. Drag the folder itself (not the files inside it) into the drop zone. Chrome and Firefox both preserve the folder structure when you drag a folder.
4. Commit.

### Nested folders (folders inside folders)

Same trick, more slashes. Filename `outer/inner/deepest/.gitkeep` creates all three folders at once.

### Removing a folder

To delete an empty folder, delete the file inside it (usually the `.gitkeep`). The folder disappears with the file — git has no concept of empty folders. To delete a folder that has real content, delete each file one at a time (or ask the maintainer to do it with a single command).

---

## Walkthrough 1 — Adding a photo to a news item or event

The **easiest** way is to use the **Composer** (`/admin/compose` on the live site) — it uploads nothing, but it generates the correct Markdown for you. See [composer.md](./composer.md) for how the composer works.

If you're editing directly on GitHub, here's the click-by-click:

### Step 1 — Upload the photo file

1. Open a browser tab and go to:
   `https://github.com/SEERC-CITY-ULE/pathfinder`
2. On the repository page, click the folder called **`public`**.
3. Then click **`images`**.
4. Then click **`news`** (or **`events`** if it's for an event).
5. Just above the file list, click the button **`Add file`** (top-right, next to the green "Code" button).
6. From the dropdown, choose **`Upload files`**.
7. A drop zone appears. Either drag your photo file into it, or click **"choose your files"** and pick your photo.
8. Wait for the little green tick that says the upload finished.
9. **Scroll down** on that page. You'll see a "Commit changes" box.
10. In the first field, type a short message like `Add photo for Sarajevo recap`.
11. Leave the second field empty.
12. Make sure **"Commit directly to the `main` branch"** is selected.
13. Click the green **`Commit changes`** button.

Your photo is now on the site at `https://the-pathfinder-project.eu/images/news/your-file.jpg`.

### Step 2 — Tell the news item to use the photo

Now you need to point the news article at the file you just uploaded.

**If the news item doesn't exist yet**: use the [Composer](./composer.md) — in the "Add an image" section, type the path (`/images/news/your-file.jpg`) and the alt text. Then send the resulting file to the publisher.

**If the news item already exists on the site**, follow these steps to edit it:

1. In your browser go to:
   `https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/news`
2. Click the news file you want to edit (a `.md` file with a date in its name).
3. Click the **pencil icon** in the top-right of the file view (it says "Edit this file" when you hover).
4. You'll see the text of the article. Near the top, between two lines of three dashes (`---`), find or add the image block. It should look like this:
   ```yaml
   image:
     src: /images/news/your-file.jpg
     alt: A short description of what the photo shows
     credit: Photographer name on Source
   ```
   - `src`: **must** start with `/images/news/` and match the filename you uploaded exactly.
   - `alt`: a one-sentence description of what's in the photo (for screen readers).
   - `credit`: optional but recommended — where the photo came from.
   - Indentation matters: the three sub-lines each start with **two spaces**.
5. Scroll down to the "Commit changes" box.
6. Short commit message like `Add photo to Sarajevo recap`.
7. Choose **"Commit directly to the `main` branch"**.
8. Click **`Commit changes`**.

**Wait about one minute**, then refresh the news article page — the photo should appear.

### Step 3 (only for events) — same but different folder

For events, everything is identical to news except:
- Upload to `public/images/events/` (not `news/`).
- Edit the event file at `src/content/events/` (not `news/`).
- The `src:` path is `/images/events/your-file.jpg`.

---

## Walkthrough 2 — Adding a photo for a team member

Team-member photos apply to both **partner team members** (e.g. Faye Ververidou, Nikos Zaharis) and **Advisory Board members** (e.g. Antigoni Founta).

### Step 1 — Upload the portrait

1. Open a browser tab and go to:
   `https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/public/images/team`
2. Click **`Add file`** → **`Upload files`**.
3. Drag your portrait into the drop zone (or click "choose your files").
4. Give the file a name that matches the person, using lowercase and hyphens:
   - ✅ `denisa-karabova.jpg`
   - ✅ `oreste-pollicino.jpg`
   - ❌ `Denisa Karabova.jpg` (spaces and capital letters cause problems)
5. Scroll down, add a commit message like `Add portrait for Denisa Karabová`.
6. Choose **"Commit directly to the `main` branch"**.
7. Click **`Commit changes`**.

### Step 2 — Tell the person's profile to use the photo

**For a partner team member** (e.g. someone at European Dialogue):

1. Go to:
   `https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/partners`
2. Click the partner file (e.g. `european-dialogue.md`).
3. Click the **pencil icon** to edit.
4. Find the person in the `team:` list. Add a `photo:` line under their `role:` line, matching the filename you uploaded:
   ```yaml
   team:
     - name: Denisa Karabová
       role: Project Coordinator
       bio: Works in non-formal education…
       photo: /images/team/denisa-karabova.jpg
   ```
   - The `photo:` line starts with **six spaces** (aligned under `name:` and `role:`).
5. Scroll down → commit message → **Commit changes**.

**For an Advisory Board member**:

1. Go to:
   `https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/src/content/advisory-board`
2. Click the person's file (e.g. `antigoni-founta.md`).
3. Click the pencil icon.
4. Add or change the `photo:` line at the top of the file (inside the `---` block):
   ```yaml
   photo: /images/team/antigoni-founta.jpg
   ```
5. Commit as before.

Refresh `/consortium` on the live site after ~1 minute — the portrait should replace the coloured initials avatar.

---

## Preparing your photo (before you upload it)

Photos work best if you prepare them a bit first. Two minutes' work makes the site feel more polished and load faster.

### Format
- **Photos** (workshops, portraits, events): use JPEG (`.jpg`) or WEBP (`.webp`).
- **Logos** (partner logos, icons): use PNG (`.png`) with a transparent background.

### Size (dimensions and file weight)

| For… | Ideal dimensions | Maximum file size |
|---|---|---|
| News / event hero photos | 1600 × 900 px (landscape) | 500 KB |
| Team-member portraits | 400 × 400 px (square) | 100 KB |
| Partner logos | roughly square, 400×400 px | 200 KB |
| Home page hero photo | 2000 × 1200 px (landscape) | 500 KB |

If your photo is too large:
1. Go to [squoosh.app](https://squoosh.app/) in your browser (Google's free tool).
2. Drag your image in.
3. On the right panel, choose "MozJPEG" or "WebP" and drag the Quality slider down until the file size drops below the limit.
4. Click "Download" (bottom-right).

### Filename
Use lowercase letters, numbers, and hyphens only. No spaces, no accents, no special characters.

- ✅ `sarajevo-workshop-2027.jpg`
- ✅ `foteini-ververidou.jpg`
- ❌ `Sarajevo Workshop 2027.jpg` (spaces break URLs)
- ❌ `Φώτω.jpg` (accents cause problems)

---

## Alt text (accessibility)

Every photo needs an `alt:` description in the file that references it. This is what screen readers announce for blind users, and what search engines use to understand the image.

Write what's **in the photo**, in one sentence.

- ❌ Bad: `alt: photo`
- ❌ Bad: `alt: PATHFINDER Sarajevo`
- ✅ Good: `alt: Twelve young researchers seated around a wooden table discussing AI ethics`
- ✅ Good (portrait): `alt: Portrait of Denisa Karabová smiling at the camera`

---

## Where to find good photos

**For general photos (workshops, people at events, city scenes):**

- **[Unsplash](https://unsplash.com/)** — Free for any use. Attribution appreciated but not required. Best for hero and article photos.
- **[Pexels](https://www.pexels.com/)** — Similar to Unsplash. Free for any use.
- **[Wikimedia Commons](https://commons.wikimedia.org/)** — Filter by CC BY or CC BY-SA license. Attribution required — always record the photographer.

**For EU-branded imagery:**

- **[EU Audiovisual Service](https://audiovisual.ec.europa.eu/)** — Official EU photos. Attribution required as `© European Union, [year] / Photographer name`.

**For team-member portraits:**

- **Ask the person for a photo they're happy with.** That's always best.
- If they have a professional profile page (university, LinkedIn), you can usually ask permission to use that photo.
- Please don't take portraits from social media without asking.

---

## Recording the credit

When you use a photo that requires attribution, always fill in the `credit:` field alongside the `image:`:

```yaml
image:
  src: /images/news/team-workshop.jpg
  alt: Workshop participants gathered around a table
  credit: Fauxels on Pexels
```

For EU photos:
```yaml
credit: © European Union, 2027 / Photographer Name
```

For team-member portraits, credit isn't shown publicly — but keep a note somewhere private of where each photo came from, in case you're ever asked.

---

## No photo? That's fine

If a news item or event has no `image:` field, the **PATHFINDER logo** appears automatically as the hero image. This looks intentional — you don't need to add a photo for every post.

For team-member portraits without a `photo:` field, a coloured circle with the person's initials appears (e.g. **DK** for Denisa Karabová). Also intentional — swap in a real photo when you have one.

---

## Troubleshooting

**"I uploaded the photo but it's not showing on the site"**
1. Wait a full minute — the site rebuilds in the background after every commit.
2. Hard-refresh your browser (Cmd+Shift+R on Mac, Ctrl+F5 on Windows).
3. Check that the filename in the content file **exactly matches** the uploaded filename, including capital letters and file extension. `Denisa.JPG` ≠ `denisa.jpg`.
4. Check the path starts with `/images/…`, not `/public/images/…`. The `public/` part is dropped when the site is built.

**"I see a broken-image icon on the live site"**
- The file wasn't uploaded, or the path is wrong. Go to `https://github.com/SEERC-CITY-ULE/pathfinder/tree/main/public/images/news` (or whichever folder) and confirm your file is there with the exact name you referenced.

**"The commit failed with a red X"**
- Usually YAML indentation. Open the failed commit on GitHub, click the red X, look at the error. The most common cause is an extra or missing space at the start of a line inside the `---` block.
- Fix the file (click the pencil icon, correct the indentation), commit again.

**"I can't find the Add file button"**
- You need to be **inside a folder** on GitHub, not on a specific file. If you're looking at a file, click the folder name in the breadcrumbs at the top of the page (e.g. click "news" to go back to the folder).
- If the button still isn't there, you probably don't have write access — ask the maintainer to invite you as a repository collaborator.

**"The photo appears but it looks stretched or cropped weirdly"**
- Team portraits should be square (roughly 400×400). Portraits with a different aspect ratio will be cropped to a circle by the site.
- News and event photos should be landscape (roughly 1600×900).

---

*For a form-based way to add news, events, or outputs without editing files, see [composer.md](./composer.md). For the publisher's workflow, see [publishing.md](./publishing.md).*
