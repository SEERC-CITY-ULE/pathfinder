/**
 * Loader + renderer for on-site documentation.
 *
 * Reads the .md files in the repo's root-level /docs/ folder, parses them with
 * marked, and rewrites internal cross-links so they point at the on-site route
 * (/admin/docs/...) instead of the raw .md filenames.
 */

import { marked } from "marked";

// Vite's import.meta.glob pulls in every .md under /docs/ at build time.
// `query: '?raw'` gives us the raw string content.
const rawDocs = import.meta.glob("/docs/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

// The docs source root, used to strip .md extensions when linking.
const REPO_URL = "https://github.com/SEERC-CITY-ULE/pathfinder";

/**
 * Rewrite `[text](./foo.md)` and `[text](./foo.md#anchor)` to point at
 * `/admin/docs/foo` / `/admin/docs/foo#anchor` — the on-site route.
 *
 * Rewrite `[text](../src/…)` (references to source files) to a github.com
 * blob URL, since those files aren't served on the website.
 */
function rewriteLinks(src: string): string {
  return src
    .replace(/\]\(\.\/([\w-]+)\.md(#[\w-]*)?\)/g, "](/admin/docs/$1$2)")
    .replace(/\]\(\.\.\/(src\/[^)]+)\)/g, `](${REPO_URL}/blob/main/$1)`);
}

/**
 * Extract the first H1 (used as the fallback page title) and strip it from
 * the body so we can render our own header in the layout instead.
 */
function splitTitleAndBody(src: string): { title: string | null; body: string } {
  const match = src.match(/^#\s+(.+?)\n+/);
  if (!match) return { title: null, body: src };
  return {
    title: match[1].trim(),
    body: src.slice(match[0].length),
  };
}

/**
 * Load a doc by slug. Returns null if not found.
 */
export function loadDoc(slug: string): { title: string | null; html: string } | null {
  const path = `/docs/${slug}.md`;
  const source = rawDocs[path];
  if (source === undefined) return null;
  const { title, body } = splitTitleAndBody(source);
  const rewritten = rewriteLinks(body);
  return {
    title,
    html: marked.parse(rewritten) as string,
  };
}

/**
 * List every doc slug that has a file on disk. Useful for validating the
 * docs.ts nav against reality.
 */
export function availableDocSlugs(): string[] {
  return Object.keys(rawDocs).map((p) => p.replace("/docs/", "").replace(".md", ""));
}
