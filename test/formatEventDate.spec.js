import { afterEach, describe, expect, test } from 'vitest'
import { formatEventDate } from '@/composables/formatEventDate.js'

const originalTZ = process.env.TZ

describe('formatEventDate', () => {
  afterEach(() => {
    process.env.TZ = originalTZ
  })

  test('shows the time and the time zone of the viewer', () => {
    process.env.TZ = 'Europe/Berlin'
    expect(formatEventDate(new Date('2021-03-16T19:30:00+01:00'))).toBe(
      'March 16th, at 7:30 p.m. CET'
    )
  })

  test('converts to the time zone of the viewer', () => {
    process.env.TZ = 'America/New_York'
    expect(formatEventDate(new Date('2021-03-16T19:30:00+01:00'))).toBe(
      'March 16th, at 2:30 p.m. GMT-4'
    )
  })
})
