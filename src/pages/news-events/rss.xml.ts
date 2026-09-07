import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";
import { site as siteMeta } from "~/data/site";

export async function GET(context: APIContext) {
  const news = await getCollection("news", ({ data }) => !data.draft);
  return rss({
    title: `${siteMeta.name} — news`,
    description: siteMeta.description,
    site: context.site!,
    items: news
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((item) => ({
        title: item.data.title,
        pubDate: item.data.date,
        description: item.data.summary,
        link: `/news-events/news/${item.id}/`,
      })),
  });
}
