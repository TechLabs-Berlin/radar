import { afterEach, describe, expect, test, vi } from 'vitest'
import { parseFeed, useBlogFeed } from '@/composables/useBlogFeed.js'

const feed = (items, channel = '') => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Frequently Bayesian</title>
    <link>https://blog.example.com</link>
    ${channel}
    ${items}
  </channel>
</rss>`

const item = ({ title, link, pubDate }) => `<item>
  <title>${title}</title>
  <link>${link}</link>
  <pubDate>${pubDate}</pubDate>
</item>`

describe('parseFeed', () => {
  test('returns the newest posts first, limited to the count', () => {
    const xml = feed(
      [
        item({
          title: 'Old',
          link: 'https://b.test/old',
          pubDate: 'Sun, 18 May 2025 10:00:00 +0000',
        }),
        item({
          title: 'New',
          link: 'https://b.test/new',
          pubDate: 'Wed, 15 Jul 2026 10:00:00 +0000',
        }),
        item({
          title: 'Middle',
          link: 'https://b.test/mid',
          pubDate: 'Sun, 07 Jun 2026 10:00:00 +0000',
        }),
      ].join('\n')
    )

    expect(parseFeed(xml, 2).map(({ title }) => title)).toEqual([
      'New',
      'Middle',
    ])
    expect(parseFeed(xml, 5).map(({ title }) => title)).toEqual([
      'New',
      'Middle',
      'Old',
    ])
  })

  test('returns title, link and a Date for each post', () => {
    const xml = feed(
      item({
        title: 'A post',
        link: 'https://b.test/a',
        pubDate: 'Wed, 15 Jul 2026 10:00:00 +0000',
      })
    )

    const [post] = parseFeed(xml, 5)
    expect(post.title).toBe('A post')
    expect(post.link).toBe('https://b.test/a')
    expect(post.date).toBeInstanceOf(Date)
    expect(post.date.toISOString()).toBe('2026-07-15T10:00:00.000Z')
  })

  test('decodes XML entities and CDATA in titles', () => {
    const xml = feed(
      [
        item({
          title: 'Data &amp; design',
          link: 'https://b.test/a',
          pubDate: 'Wed, 15 Jul 2026 10:00:00 +0000',
        }),
        item({
          title: '<![CDATA[Working with JSON]]>',
          link: 'https://b.test/b',
          pubDate: 'Sun, 07 Jun 2026 10:00:00 +0000',
        }),
      ].join('\n')
    )

    expect(parseFeed(xml, 5).map(({ title }) => title)).toEqual([
      'Data & design',
      'Working with JSON',
    ])
  })

  test('skips items without a title, a web link or a valid date', () => {
    const xml = feed(
      [
        item({
          title: '',
          link: 'https://b.test/empty',
          pubDate: 'Wed, 15 Jul 2026 10:00:00 +0000',
        }),
        item({
          title: 'Bad link',
          link: 'javascript:alert(1)',
          pubDate: 'Wed, 15 Jul 2026 10:00:00 +0000',
        }),
        item({
          title: 'Bad date',
          link: 'https://b.test/date',
          pubDate: 'not a date',
        }),
        item({
          title: 'Kept',
          link: 'https://b.test/kept',
          pubDate: 'Sun, 07 Jun 2026 10:00:00 +0000',
        }),
      ].join('\n')
    )

    expect(parseFeed(xml, 5).map(({ title }) => title)).toEqual(['Kept'])
  })

  test('accepts a feed with a single post', () => {
    const xml = feed(
      item({
        title: 'Only one',
        link: 'https://b.test/one',
        pubDate: 'Wed, 15 Jul 2026 10:00:00 +0000',
      })
    )

    expect(parseFeed(xml, 5).map(({ title }) => title)).toEqual(['Only one'])
  })

  test('returns no posts for an empty channel or a page that is not a feed', () => {
    expect(parseFeed(feed(''), 5)).toEqual([])
    expect(
      parseFeed('<!doctype html><html><body>404</body></html>', 5)
    ).toEqual([])
    expect(parseFeed('', 5)).toEqual([])
  })
})

describe('useBlogFeed', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  // Nuxt's auto-imported helpers, replaced by plain functions for the test.
  const stubNuxt = (config, fetchImpl) => {
    vi.stubGlobal('useAsyncData', (_key, handler) => handler())
    vi.stubGlobal('useRuntimeConfig', () => ({ public: config }))
    vi.stubGlobal('$fetch', vi.fn(fetchImpl))
  }

  test('reads the configured feed and returns its newest posts', async () => {
    const xml = feed(
      item({
        title: 'Hello',
        link: 'https://b.test/hello',
        pubDate: 'Wed, 15 Jul 2026 10:00:00 +0000',
      })
    )
    stubNuxt(
      { rssFeedUrl: 'https://b.test/rss.xml', rssItemCount: 5 },
      async () => xml
    )

    const posts = await useBlogFeed()

    expect($fetch).toHaveBeenCalledWith('https://b.test/rss.xml', {
      responseType: 'text',
    })
    expect(posts.map(({ title }) => title)).toEqual(['Hello'])
  })

  test('does not fetch anything when no feed URL is set', async () => {
    stubNuxt({ rssFeedUrl: '', rssItemCount: 5 }, async () => '')

    expect(await useBlogFeed()).toEqual([])
    expect($fetch).not.toHaveBeenCalled()
  })

  test('returns no posts and warns when the feed cannot be read', async () => {
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    stubNuxt(
      { rssFeedUrl: 'https://b.test/rss.xml', rssItemCount: 5 },
      async () => {
        throw new Error('503 Service Unavailable')
      }
    )

    expect(await useBlogFeed()).toEqual([])
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining('503 Service Unavailable')
    )
  })
})
