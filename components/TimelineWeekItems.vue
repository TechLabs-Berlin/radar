<template>
  <ul class="mt-1 text-xs" :class="{ 'opacity-75': weekStatus === 'past' }">
    <li v-for="e in events" :key="e.slug" class="flex justify-between">
      <slot name="event" :event="e" />
      <div v-if="$auth.loggedIn" class="flex">
        <button id="tmpID" class="font-semibold ml-3" @click="log(e)">
          Edit
        </button>
        <button class="font-semibold ml-3" @click="log(e)">Delete</button>
      </div>
    </li>
  </ul>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  props: {
    weekStatus: {
      type: String,
      default: 'current',
    },
    events: {
      type: Array,
      default: () => {},
    },
  },
  setup() {
    const log = function (e) {
      console.log(e)
    }
    return { log }
  },
})
</script>
