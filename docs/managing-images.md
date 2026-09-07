# Managing images

The PATHFINDER site uses images in several places: hero photos, news article headers, event photos, partner logos, and team member portraits. This guide covers where they live, how to add them, and where to find Creative Commons ones.

## Where images live

Images go in `public/images/`, in one of these subfolders:

| Subfolder | Used for | Referenced in Markdown as |
|---|---|---|
| `public/images/hero/` | Home page hero photo | `/images/hero/filename.jpg` |
| `public/images/news/` | News article images | `/images/news/filename.jpg` |
| `public/images/events/` | Event photos | `/images/events/filename.jpg` |
| `public/images/team/` | Partner + Advisory Board portraits | `/images/team/filename.jpg` |
| `public/images/partners/` | Partner organisation logos | `/images/partners/filename.png` |

Note that the path in Markdown starts with `/images/…`, NOT `/public/images/…`. The `public/` folder is dropped at build time.

## Adding an image on GitHub

1. Navigate to the right subfolder in the repo, e.g. `github.com/<org>/pathfinder/tree/main/public/images/news`.
2. Click **Add file → Upload files**.
3. Drag your image into the drop zone.
4. Commit.

The image is now at `https://<your-site>/images/news/yourfile.jpg` and can be referenced in any content file.

## Referencing an image in content

In news or event frontmatter:

```yaml
image:
  src: /images/news/your-file.jpg
  alt: A short description of what the photo shows
  credit: Photographer Name on Unsplash
```

For team member portraits (in partner or Advisory Board files):

```yaml
photo: /images/team/denisa-karabova.jpg
```

## Image requirements

- **License**: Creative Commons (or public domain, or your own photo). See sources below.
- **Format**: JPEG (`.jpg`) for photos, PNG for logos, WEBP for smaller file sizes.
- **Size**:
  - Hero and article images: aim for **1600×900** or similar landscape ratio. Max 500 KB.
  - Team portraits: **400×400** square. Max 100 KB.
  - Partner logos: transparent PNG, roughly square, max 200 KB.
- **Naming**: lowercase, hyphens-not-spaces, descriptive: `sarajevo-workshop-2027.jpg`.

Use a compression tool if your images are too big:
- [Squoosh](https://squoosh.app/) — drag-and-drop, in your browser.
- Or any image editor's "Export for web".

## Alt text (accessibility)

Every image on the site needs `alt` text. Not decorative alt like "photo" — a real description of what's in the image:

- ❌ Bad: `alt: photo`
- ❌ Bad: `alt: PATHFINDER event`
- ✅ Good: `alt: Twelve young researchers seated in a circle discussing AI ethics at the Sarajevo workshop`

If the image is purely decorative (e.g. a background pattern), leave alt empty (`alt: ""`) or omit the field entirely.

## Where to find Creative Commons images

**For general photos** (workshops, people, conference-style scenes):

- **[Unsplash](https://unsplash.com/)** — Free for any use, attribution appreciated but not required. Enormous library. Great for hero images and article photos.
- **[Pexels](https://pexels.com/)** — Similar to Unsplash. Free for any use.
- **[Wikimedia Commons](https://commons.wikimedia.org/)** — Filter by license (CC BY or CC BY-SA). Wide variety, includes historical and location photos. Attribution required — always record the credit.

**For EU-specific imagery**:

- **[EU Audiovisual Service](https://audiovisual.ec.europa.eu/)** — Official EU photos and videos. Attribution required, formatted as "© European Union, [year]".

**For portraits** of team members and AB members:

- Ideally use photos the person supplies themselves. Ask them.
- If they have a professional profile page (university, LinkedIn), often you can request permission to use their photo from there.
- Don't scrape social media portraits without permission.

## Recording the credit

For images with attribution requirements, always fill in the `credit:` field:

```yaml
image:
  src: /images/news/team-workshop.jpg
  alt: Workshop participants gathered around a table
  credit: Fauxels on Pexels
```

For EU images:

```yaml
credit: © European Union, 2027 / Photographer Name
```

Team portraits don't currently render a visible credit (it's assumed you got permission). Keep a record of where each photo came from in a private log.

## The default logo fallback

If a news item or event has no `image:` in its frontmatter, the site automatically shows the **PATHFINDER logo** as the hero image, on a warm surface background. This looks intentional — you don't need to add an image for every post.

Skip the image field when:
- You don't have a photo yet.
- The post is short-form (an announcement, a link).
- The photo would be generic filler (a stock keyboard, a generic office).

## Replacing the hero photo on the Home page

The Home page hero currently uses `/images/hero/youth-collaboration.jpg` (a placeholder from Unsplash). To swap it:

1. Upload the new photo to `public/images/hero/`.
2. Open [`src/pages/index.astro`](../src/pages/index.astro).
3. Find the line `src="/images/hero/youth-collaboration.jpg"` and change the filename.
4. Also update the small `Photo via Unsplash` credit at the bottom-right of the hero if the credit changes.

---

Broken image on the site? See [troubleshooting.md](./troubleshooting.md).
