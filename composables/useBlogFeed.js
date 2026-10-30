import { XMLParser } from 'fast-xml-parser'

const parser = new XMLParser()

// The newest `count` posts of an RSS 2.0 feed. Items without a title, a web
// link or a valid date are skipped, so one odd entry cannot break the list.
export const parseFeed = (xml, count) => {
  const channel = parser.parse(xml)?.rss?.channel
  return [channel?.item ?? []]
    .flat()
    .map((item) => ({
      title: String(item.title ?? '').trim(),
      link: String(item.link ?? '').trim(),
      date: new Date(item.pubDate),
    }))
    .filter(
      ({ title, link, date }) =>
        title && /^https?:\/\//.test(link) && !Number.isNaN(date.getTime())
    )
    .sort((a, b) => b.date - a.date)
    .slice(0, count)
}

// The feed is read at build time, so the posts are part of the static site.
// A feed that cannot be read leaves the section out instead of failing the build.
export const useBlogFeed = () =>
  useAsyncData('blog-feed', async () => {
    const { rssFeedUrl, rssItemCount } = useRuntimeConfig().public
    if (!rssFeedUrl) return []
    try {
      const xml = await $fetch(rssFeedUrl, { responseType: 'text' })
      return parseFeed(xml, rssItemCount)
    } catch (error) {
      console.warn(
        `Could not read the blog feed ${rssFeedUrl}: ${error.message}`
      )
      return []
    }
  })
