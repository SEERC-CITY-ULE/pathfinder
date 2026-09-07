import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const sitemapUrl = new URL("sitemap-index.xml", context.site).toString();
  const body = `User-agent: *\nAllow: /\nDisallow: /admin/\n\nSitemap: ${sitemapUrl}\n`;
  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
