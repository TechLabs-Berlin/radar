import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TimelineWeek from '@/components/TimelineWeek.vue'

const mountWeek = (week) =>
  mount(TimelineWeek, {
    props: { week: { number: 7, week, events: [], milestones: [] } },
    global: {
      directives: { tippy: {} },
      stubs: { TIcon: true },
    },
  })

describe('TimelineWeek', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    // a Wednesday, so the week of 26 Oct 2026 is the current one
    vi.setSystemTime(new Date('2026-10-28T12:00:00+01:00'))
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  test('highlights the current week', () => {
    const box = mountWeek('2026-10-26').find('.w-10')

    expect(box.classes()).toContain('text-pink-600')
    expect(box.classes()).not.toContain('bg-white')
  })

  test('greys out a past week', () => {
    const box = mountWeek('2026-10-19').find('.w-10')

    expect(box.classes()).toEqual(
      expect.arrayContaining(['bg-gray-100', 'text-gray-500'])
    )
    expect(box.classes()).not.toContain('text-pink-600')
  })

  test('shows a future week on a white background', () => {
    const box = mountWeek('2026-11-02').find('.w-10')

    expect(box.classes()).toContain('bg-white')
    expect(box.classes()).not.toContain('text-pink-600')
    expect(box.classes()).not.toContain('text-gray-500')
  })
})
