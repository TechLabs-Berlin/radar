// import Vue from 'vue'
import { reactive, ref } from '@nuxtjs/composition-api'

export default async function ({ $axios }, inject) {
  const store = reactive({ events: [], timeline: [], milestones: [] })
  const isPublic = ref(process.env.SCOPE === 'public')

  if (isPublic.value) {
    const { data } = await $axios.get('/public')
    store.events = data.events
    store.milestones = data.milestones
    store.timeline = data.timeline
  } else {
    const { data } = await $axios.get()
    store.events = data.events
    store.milestones = data.milestones
    store.timeline = data.timeline
  }

  store.events.sort(
    (a, b) => new Date(a.datetime.start) - new Date(b.datetime.start)
  )

  inject('store', store)
}
