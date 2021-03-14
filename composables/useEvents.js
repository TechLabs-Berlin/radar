import { computed } from '@nuxtjs/composition-api'
import { isToday, isPast, isFuture, closestTo, isSameDay } from 'date-fns'

export const useEvents = (eventList) => {
  const events = computed(() =>
    eventList.map((e) => ({ ...e, date: new Date(e.date) }))
  )
  const pastEvents = computed(() =>
    events.value.filter(({ date }) => isPast(date) && !isToday(date))
  )

  const futureEvents = computed(() =>
    events.value.filter(({ date }) => isFuture(date) || isToday(date))
  )

  const currentEvent = computed(() => {
    const futureDates = futureEvents.value.map(({ date }) => date)
    const closestDate = closestTo(new Date(), futureDates)
    return futureEvents.value.find(({ date }) => isSameDay(date, closestDate))
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
