/**
 * URL helpers that respect the site's `base` config.
 *
 * When deployed under a subpath (e.g. https://example.github.io/pathfinder/),
 * every internal link and asset reference must be prefixed with that subpath
 * or it 404s. Astro does not auto-rewrite string paths in HTML attributes,
 * so we route every path through these helpers.
 */

// `import.meta.env.BASE_URL` ends with a trailing slash. Strip it so we can
// safely concatenate with paths that start with "/".
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, "");

/**
 * Prefix a site-relative path with the configured base.
 *
 *   url("/about")           → "/pathfinder/about"
 *   url("/")                → "/pathfinder/"
 *   url("/images/logo.png") → "/pathfinder/images/logo.png"
 *
 * Paths that don't start with "/" are treated as if they did.
 */
export function url(path: string): string {
  if (!path.startsWith("/")) path = "/" + path;
  const out = (BASE + path).replace(/\/{2,}/g, "/");
  return out || "/";
}

/**
 * Strip the base prefix from a runtime path (typically `Astro.url.pathname`).
 * Useful when comparing the current URL against unbased hrefs.
 *
 *   unbase("/pathfinder/about") → "/about"
 *   unbase("/pathfinder/")      → "/"
 */
export function unbase(path: string): string {
  if (BASE && path.startsWith(BASE)) {
    path = path.slice(BASE.length) || "/";
  }
  return path;
}
