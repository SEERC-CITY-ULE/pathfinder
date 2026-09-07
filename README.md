# PATHFINDER project website

The public website for the [PATHFINDER](https://pathfinder-project.github.io) project — an EU-funded CERV initiative on AI, youth, and the future of work.

Built with [Astro](https://astro.build/) + [Tailwind CSS](https://tailwindcss.com/). Content lives in plain Markdown files so non-engineer coordinators can maintain the site directly on GitHub.

**Full documentation lives in [`docs/`](./docs/)** — role-based guides for coordinators, publishers, and maintainers. Start with [`docs/README.md`](./docs/README.md).

Fast links:
- Coordinators submitting news / events → [`docs/composer.md`](./docs/composer.md)
- The publisher who commits content → [`docs/publishing.md`](./docs/publishing.md)
- Editing partner descriptions, bios, About page → [`docs/editing-directly.md`](./docs/editing-directly.md)
- Something broken → [`docs/troubleshooting.md`](./docs/troubleshooting.md)
- Deployment + ops → [`docs/deployment.md`](./docs/deployment.md)

---

## Quick start (engineers)

Requires Node 22+ (see [`.nvmrc`](./.nvmrc)).

```bash
npm install        # one-off
npm run dev        # http://localhost:4321
npm run build      # type-check + build static site into ./dist
npm run preview    # serve the built site locally
```

## Project structure

```
pathfinder/
├── public/                  static assets served at /
│   ├── images/              hero, news, partner images
│   ├── fonts/               (reserved — fonts ship via npm via @fontsource-variable)
│   └── favicon.svg
├── src/
│   ├── content.config.ts    Zod schemas for every content collection
│   ├── content/
│   │   ├── news/            one .md per news item
│   │   ├── events/          one .md per event
│   │   ├── partners/        one .md per consortium partner
│   │   ├── advisory-board/  one .md per Advisory Board member
│   │   └── outputs/         one .md per featured deliverable
│   ├── data/
│   │   ├── site.ts          site-wide metadata (project name, dates, nav, etc.)
│   │   ├── objectives.ts    the four project objectives
│   │   └── deliverables.ts  the full 25-row deliverables table
│   ├── components/          reusable .astro components
│   ├── layouts/             BaseLayout + ArticleLayout
│   ├── pages/               file-based routing
│   └── styles/global.css    Tailwind v4 + design tokens
├── .github/workflows/deploy.yml   builds + publishes to GitHub Pages on push to main
├── astro.config.mjs               site URL + base path live here
└── package.json
```

## Design tokens

The colour palette and type scale are CSS custom properties declared inside `@theme { ... }` in [`src/styles/global.css`](./src/styles/global.css). Change them there to re-skin the site. All values come from the official PATHFINDER visual identity (Deep Navy `#143B63`, Teal `#159E9C`, Bright Orange `#FF8A30`, on Warm Light `#F5F2EC` with Dark Graphite `#2B2B2B` text — League Spartan + Montserrat).

| Token              | Default          | Purpose                                                          |
|--------------------|------------------|------------------------------------------------------------------|
| `--color-brand`    | `#143B63`        | Deep Navy — institutional, trustworthy                           |
| `--color-teal`     | `#159E9C`        | Teal — innovation, technology, new opportunities                 |
| `--color-accent`   | `#FF8A30`        | Bright Orange — energy, action, youth participation              |
| `--color-surface`  | `#F5F2EC`        | Warm Light Background — softer, modern base                      |
| `--color-ink`      | `#2B2B2B`        | Dark Graphite — body text                                        |
| `--font-display`   | League Spartan   | Headlines (bundled via `@fontsource-variable`)                   |
| `--font-sans`      | Montserrat       | Body text (bundled via `@fontsource-variable`)                   |

**Brand guidelines summarised**
- Use rounded corners, curved shapes, soft gradients, dotted patterns, candid youth photography.
- Avoid robotic AI imagery (glowing brains, holograms, cyberpunk), stock-photo businessmen, pattern overload.
- **Don't use italics** — they reduce readability for users with visual impairments or reading difficulties. The site enforces this in `global.css` (`em` / `i` / `cite` / `blockquote` are styled non-italic).

## Deployment

The site is deployed to **GitHub Pages** by [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) on every push to `main`. Manual deploys can be triggered from the *Actions* tab.

### One-time GitHub setup

1. **Push the repo** to GitHub.
2. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
3. **Settings → Branches → Add branch protection rule for `main`:**
   - Require a pull request before merging.
   - Require at least 1 reviewer.
   - Require status checks to pass (`build`).
   - Disallow force pushes.
4. **Settings → Code security → require 2FA for all collaborators / the org.**
5. Update [`astro.config.mjs`](./astro.config.mjs) — set `SITE` and `BASE` to the final URL (GitHub Pages subdomain or custom domain).
6. If using a custom domain (e.g. `pathfinder-project.eu`), add a `public/CNAME` file containing the domain, and configure DNS per [GitHub's instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

## Accessibility

Targets WCAG 2.2 AA. Verified manually for keyboard navigation, focus visibility, semantic landmarks, and colour contrast. Re-test after large content edits — `npx @axe-core/cli http://localhost:4321/` is a good smoke check.

## License

- **Content** (Markdown files, text, images we produced): [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — see [`LICENSE`](./LICENSE).
- **Code** (the Astro project itself): MIT.

Third-party images used in `public/images/` retain their original licenses; credits are recorded in each image's frontmatter (`imageCredit`).
