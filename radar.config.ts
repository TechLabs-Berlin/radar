// The location this Radar is built for. Content is read from `content-<location>/`
// and the matching location badge from `public/icon-<location>.png`.
export const LOCATION = 'bln'

// Latest posts from an RSS 2.0 feed, shown under the events on the home page.
// The feed is read when the site is built. Set RSS_FEED_URL to '' to hide the section.
export const RSS_FEED_URL = 'https://blog.bifunctional.xyz/rss.xml'
export const RSS_ITEM_COUNT = 5

// Shown as a banner on every page. Use it to mark the content as an example or
// a demo. Set DEMO_NOTICE to '' to hide the banner.
export const DEMO_NOTICE =
  'TechLabs Berlin is currently on hiatus. This Radar shows a mock semester for demo purposes.'
