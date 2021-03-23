import { computed } from '@nuxtjs/composition-api'
import { differenceInMinutes, isFuture, isToday, isPast } from 'date-fns'

export const useEvent = (event) => {
  const isFutureDate = computed(() => isFuture(event.date))
  const isTodayDate = computed(() => isToday(event.date))
  const isLive = computed(() => {
    const diff = differenceInMinutes(new Date(), event.date)
    return diff >= 0 && diff <= 120
  })
  const isInOneHour = computed(() => {
    const diff = differenceInMinutes(event.date, new Date())
    return diff <= 60 && diff >= 0
  })
  const isPastDate = computed(() => isPast(event.date))
  return { isLive, isFutureDate, isTodayDate, isInOneHour, isPastDate }
}
