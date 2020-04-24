import { parseISO, compareDesc } from 'date-fns'
import status from '~/content/status.yaml'
import yamlMilestones from '~/content/milestones.yaml'
import links from '~/content/links.yaml'
import phases from '~/content/phases.yaml'
import faq from '~/content/faq.yaml'
import media from '~/content/media.yaml'

const yamlEvents = {}
function requireAll(r) {
  r.keys().forEach((key) => (yamlEvents[key] = r(key)))
}
requireAll(require.context('~/content/events/', true, /\.yaml$/))

const events = Object.values(yamlEvents).map((e) => {
  return {
    ...e,
    type: 'event',
    date: parseISO(e.date)
  }
})
const milestones = yamlMilestones.map((m) => {
  return {
    ...m,
    type: 'milestone',
    date: parseISO(m.date)
  }
})
const timeline = [...events, ...milestones].sort((e1, e2) =>
  compareDesc(e1.date, e2.date)
)

export { status, timeline, links, phases, faq, media }
