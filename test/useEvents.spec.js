import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import { useEvents } from '@/composables/useEvents.js'

// `@nuxtjs/composition-api` only works inside a Nuxt build, so use the
// underlying library directly in tests.
jest.mock('@nuxtjs/composition-api', () => require('@vue/composition-api'))
Vue.use(VueCompositionAPI)

const event = (slug, date) => ({ slug, title: slug, date })

describe('useEvents', () => {
  beforeEach(() => {
    jest.useFakeTimers('modern')
    jest.setSystemTime(new Date('2021-07-20T12:00:00+02:00'))
  })

  afterEach(() => {
    jest.useRealTimers()
  })

  test('picks the closest upcoming event as the current event', () => {
    const { currentEvent, pastEvents, futureEvents } = useEvents([
      event('past', '2021-07-01T19:30:00+02:00'),
      event('next', '2021-07-22T19:30:00+02:00'),
      event('later', '2021-08-05T19:30:00+02:00'),
    ])

    expect(currentEvent.value.slug).toBe('next')
    expect(pastEvents.value.map(({ slug }) => slug)).toEqual(['past'])
    expect(futureEvents.value.map(({ slug }) => slug)).toEqual([
      'next',
      'later',
    ])
  })

  // When every event is in the past there is no current event. Components must
  // guard against this (see the v-if in Events.vue), so it must stay `undefined`
  // rather than throw.
  test('has no current event when all events are in the past', () => {
    const { currentEvent, futureEvents, pastEvents } = useEvents([
      event('a', '2021-06-01T19:30:00+02:00'),
      event('b', '2021-07-01T19:30:00+02:00'),
    ])

    expect(currentEvent.value).toBeUndefined()
    expect(futureEvents.value).toEqual([])
    expect(pastEvents.value).toHaveLength(2)
  })

  test('handles an empty event list', () => {
    const { currentEvent, futureEvents, pastEvents } = useEvents([])

    expect(currentEvent.value).toBeUndefined()
    expect(futureEvents.value).toEqual([])
    expect(pastEvents.value).toEqual([])
  })
})
