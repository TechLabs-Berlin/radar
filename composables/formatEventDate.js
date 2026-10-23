import { format } from 'date-fns'

// The name of the time zone the date is displayed in, e.g. "CET" or "GMT+1".
const timeZoneName = (date) =>
  new Intl.DateTimeFormat('en-GB', { timeZoneName: 'short' })
    .formatToParts(date)
    .find(({ type }) => type === 'timeZoneName')?.value

// Formats a date in the time zone of the viewer and says which time zone that
// is, e.g. "March 16th, at 7:30 p.m. CET". Without the time zone the time is
// ambiguous for people who are not in the same time zone as the event.
export const formatEventDate = (date) =>
  `${format(date, "MMMM do, 'at' h:mm aaaa")} ${timeZoneName(date)}`
