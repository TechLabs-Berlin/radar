import { parseISO, compareAsc } from 'date-fns'
import { slugify } from '~/assets/slug'
import status from '~/content/status.yaml'
import yamlMilestones from '~/content/milestones.yaml'

const yamlEvents = {}
function requireAll(r) {
  r.keys().forEach((key) => (yamlEvents[key] = r(key)))
}
requireAll(require.context('~/content/events/', true, /\.yaml$/))

const events = Object.values(yamlEvents).map((e) => {
  return {
    ...e,
    type: 'event',
    slug: slugify(e.name)
  }
})
const milestones = yamlMilestones.map((m) => {
  return {
    ...m,
    type: 'milestone',
    slug: slugify(m.name)
  }
})
const timeline = [...events, ...milestones].sort((e1, e2) =>
  compareAsc(parseISO(e1.date), parseISO(e2.date))
)

export { status, timeline }
