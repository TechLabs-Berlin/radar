import { computed } from '@nuxtjs/composition-api'
import { isToday, isPast, isFuture, closestTo, isSameDay } from 'date-fns'

export const useEvents = (eventList) => {
  const events = computed(() =>
    eventList.map((e) => ({
      ...e,
      datetime: { ...e.datetime, start: new Date(e.datetime.start) },
    }))
  )
  const pastEvents = computed(() =>
    events.value.filter(
      ({ datetime: { start } }) => isPast(start) && !isToday(start)
    )
  )

  const futureEvents = computed(() =>
    events.value.filter(
      ({ datetime: { start } }) => isFuture(start) || isToday(start)
    )
  )

  const currentEvent = computed(() => {
    const futureDates = futureEvents.value.map(
      ({ datetime: { start } }) => start
    )
    const closestDate = closestTo(new Date(), futureDates)
    return futureEvents.value.find(({ datetime: { start } }) =>
      isSameDay(start, closestDate)
    )
  })

  return {
    events,
    pastEvents,
    currentEvent,
    futureEvents,
    isToday,
    isFuture,
    isPast,
    isSameDay,
  }
}
