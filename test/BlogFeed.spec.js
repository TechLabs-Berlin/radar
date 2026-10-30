import { describe, expect, test } from 'vitest'
import { mount } from '@vue/test-utils'
import BlogFeed from '@/components/BlogFeed.vue'

const items = [
  {
    title: 'We Built a Digital Twin',
    link: 'https://blog.example.com/twin',
    date: new Date('2026-07-15T10:00:00Z'),
  },
  {
    title: 'A Year in the Studio',
    link: 'https://blog.example.com/studio',
    date: new Date('2026-06-07T10:00:00Z'),
  },
]

describe('BlogFeed', () => {
  test('lists each post with a link that opens in a new tab', () => {
    const wrapper = mount(BlogFeed, { props: { items } })

    const links = wrapper.findAll('a')
    expect(links.map((a) => a.text())).toEqual([
      'We Built a Digital Twin',
      'A Year in the Studio',
    ])
    expect(links[0].attributes('href')).toBe('https://blog.example.com/twin')
    expect(links[0].attributes('target')).toBe('_blank')
    expect(links[0].attributes('rel')).toBe('noopener')
  })

  test('shows the date of each post', () => {
    const wrapper = mount(BlogFeed, { props: { items } })

    const times = wrapper.findAll('time')
    expect(times.map((t) => t.text())).toEqual(['15 Jul 2026', '7 Jun 2026'])
    expect(times[0].attributes('datetime')).toBe('2026-07-15T10:00:00.000Z')
  })

  test('has a heading', () => {
    const wrapper = mount(BlogFeed, { props: { items } })

    expect(wrapper.find('h3').text()).toBe('From the blog')
  })
})
