// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// CHANGE THIS to the final URL once the GitHub repo + Pages settings are confirmed.
// Examples:
//   user/org site:  "https://pathfinder-project.github.io"   (no base)
//   project page:   "https://<org>.github.io"  with base: "/pathfinder"
//   custom domain:  "https://pathfinder-project.eu"          (no base)
const SITE = "https://pathfinder-project.github.io";
const BASE = "/";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  build: {
    format: "directory",
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/admin/"),
    }),
  ],
  vite: {
    // tailwindcss()'s Vite Plugin type clashes with Astro's bundled Vite version;
    // the runtime behaviour is correct, so cast away the structural mismatch.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
