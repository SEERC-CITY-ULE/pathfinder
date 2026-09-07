# Deployment and operations

This guide is for the **technical maintainer** — one person who's comfortable with GitHub, the command line, and DNS. It covers one-time setup, ongoing operations, and security posture.

## One-time setup (before first launch)

### 1. Create the GitHub repo

Create a repo named `pathfinder` (or whatever you prefer) in the organisation that will own the project. Public is fine (the content is meant to be public anyway); private also works if you're on Pro / Team / Enterprise.

### 2. Push the initial commit

From your local machine:

```bash
cd ~/Documents/pathfinder
git init
git add .
git commit -m "Initial site"
git remote add origin git@github.com:<your-org>/pathfinder.git
git branch -M main
git push -u origin main
```

### 3. Configure the site URL

Open [`astro.config.mjs`](../astro.config.mjs). Change the `SITE` constant to your live URL:

```js
const SITE = "https://pathfinder-project.eu";        // custom domain
// or
const SITE = "https://<your-org>.github.io";         // github.io user/org page
```

If you're using a project page (URL includes `/pathfinder`), also set `BASE`:

```js
const BASE = "/pathfinder";
```

Commit and push.

### 4. Enable GitHub Pages

On github.com, in your repo:

1. **Settings → Pages**.
2. **Source**: GitHub Actions.

That's it — the workflow in `.github/workflows/deploy.yml` runs on every push to `main` and deploys automatically.

### 5. (Optional) Set up a custom domain

If you own a domain like `pathfinder-project.eu`:

1. Create a file `public/CNAME` containing just the domain (no `https://`, no trailing slash):
   ```
   pathfinder-project.eu
   ```
2. Commit and push.
3. At your DNS provider, add records per [GitHub's documentation](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site):
   - Apex domain: 4 A records pointing to GitHub's IPs.
   - Subdomain (`www.pathfinder-project.eu`): CNAME to `<your-org>.github.io`.
4. In **Settings → Pages**, set the custom domain and enable **Enforce HTTPS** once the certificate is issued (~15 minutes).

### 6. Harden the repository

Still in **Settings**:

- **Branches → Add rule for `main`**:
  - Require a pull request before merging.
  - Require at least 1 approving review.
  - Require status checks to pass (`build`).
  - Do not allow force pushes.
- **Code security → Advanced Security**: enable Dependabot alerts.
- **Access → Manage access**: invite only the collaborators who need write access.
- **Organisation → Authentication security**: require 2FA for all collaborators.

### 7. Set up the publisher

Identify **one person** who will publish content (usually the project coordinator or communications officer). Add them as a repository collaborator with write access. Send them the link to [publishing.md](./publishing.md).

If you don't want the publisher to have direct push access to `main`, add them as a collaborator with restricted permissions and require them to open PRs (branch protection above enforces this).

### 8. Set up a real mailbox

The site's contact and composer instructions point at `info@the-pathfinder-project.eu`. Make sure this actually exists and someone reads it. If you use a different address, update it in:

- [`src/data/site.ts`](../src/data/site.ts) — the `coordinator.email` field.
- [`docs/composer.md`](./composer.md) — the "Sending to the publisher" section.

### 9. Verify the first deploy

Push a small change (e.g. a comment update in the README), watch the Actions tab, wait for the green check, then visit the live URL. Walk all 5 top-navigation pages. Click into a news detail and an event detail. Try `/admin/compose`. Everything should render.

## Ongoing operations

### Monitoring deployments

- **Actions tab** — every push to `main` triggers a build + deploy. Watch here for failures.
- **Deployments panel** — the sidebar on the repo home shows recent deploys.
- Deploy time: ~1 minute end-to-end.

### Adding a new dependency

If you install a new npm package:

```bash
npm install <package-name>
```

Test locally with `npm run dev` and `npm run build`. Commit both `package.json` and `package-lock.json`.

**Common pitfall**: while `npm run dev` is running, installing a new package can leave Vite's dep cache stale — the local site breaks. Fix: `rm -rf node_modules/.vite` then restart the dev server. Does not affect the production build.

### Updating dependencies

Roughly monthly, or when Dependabot flags a vulnerability:

```bash
npm outdated                # see what's out of date
npm update                  # patch + minor updates
```

For major version bumps (e.g. Astro 5 → Astro 6), read the changelog first and test carefully.

### Local development

```bash
npm install                 # once per fresh clone
npm run dev                 # dev server at http://localhost:4321
npm run build               # build to dist/
npm run preview             # serve the built site locally
```

Requires Node 22+ (see [`.nvmrc`](../.nvmrc)).

### Reverting a bad deploy

Content mistakes: see [troubleshooting.md](./troubleshooting.md).

Code mistakes: revert the commit via GitHub's "Revert" button (Commits page → three-dot menu → Revert). Or:

```bash
git revert <commit-hash>
git push
```

Redeploy happens automatically.

## Security posture

The site's security model, in one paragraph:

> The live site is static HTML/CSS/JS — visitors cannot write to anything. Only GitHub repository collaborators can push, and (with branch protection) every change goes through a reviewed pull request. GitHub Actions builds and deploys from every commit; the audit log records who did what. No third-party CDN dependencies at runtime — fonts are bundled from npm, images are self-hosted. The site collects no personal data and sets no cookies, so GDPR obligations are minimal (an "imprint" / legal notice may still be required depending on your jurisdiction).

**The Composer page** at `/admin/compose` is client-side only. It generates Markdown text and downloads it. It has no way to publish anything. Even a public URL with high traffic to this page creates no security exposure — the publishing step (a human on GitHub) is the security perimeter.

## File structure

```
pathfinder/
├── docs/                    the documentation you're reading
├── public/                  static assets served at /
│   ├── images/              hero, news, events, partners, team, hero
│   └── favicon.svg
├── src/
│   ├── content.config.ts    Zod schemas — the source of truth for what's a valid content field
│   ├── content/             .md content files
│   │   ├── news/
│   │   ├── events/
│   │   ├── partners/
│   │   ├── advisory-board/
│   │   └── outputs/
│   ├── data/                site-wide TS data (nav, project facts, objectives)
│   ├── components/          reusable .astro components
│   ├── layouts/             BaseLayout + ArticleLayout
│   ├── pages/               file-based routing
│   │   └── admin/compose.astro   the composer (unlisted)
│   └── styles/global.css    Tailwind + design tokens
├── .github/workflows/deploy.yml   builds + deploys to GitHub Pages
├── astro.config.mjs
├── package.json
└── README.md                for engineers — start here
```

## Design tokens

Colours and fonts are CSS custom properties in [`src/styles/global.css`](../src/styles/global.css), inside `@theme { ... }`. All values come from the official PATHFINDER visual identity.

| Token | Value | Purpose |
|---|---|---|
| `--color-brand` | `#143B63` | Deep Navy — institutional |
| `--color-teal` | `#159E9C` | Innovation, secondary accent |
| `--color-accent` | `#FF8A30` | Bright Orange — energy, CTAs, eyebrows |
| `--color-surface` | `#F5F2EC` | Warm Light Background |
| `--color-ink` | `#2B2B2B` | Dark Graphite — text |
| `--font-display` | League Spartan | Headlines |
| `--font-sans` | Montserrat | Body |

Change any of these to re-skin the site — the design system propagates.

---

*For content editing (news, events, partners, etc.), see [editing-directly.md](./editing-directly.md).*
