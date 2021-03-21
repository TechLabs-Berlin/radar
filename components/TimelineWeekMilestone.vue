<template>
  <div class="flex space-x-2">
    <p>
      <TIcon
        :icon="
          milestone.type === 'cutoff' ? 'exclamation-circle' : 'check-square'
        "
        class="inline-block text-xs mt-05"
        :class="isFutureMilestone ? 'text-pink-600' : 'text-gray-300'"
      />
    </p>
    <div>
      <p class="font-semibold" :class="{ 'line-through': !isFutureMilestone }">
        <NuxtLink :to="`/milestone/${milestone.slug}`" class="regular-link">{{
          milestone.title
        }}</NuxtLink>
      </p>
      <p>Due {{ format(new Date(milestone.deadline), 'MMM d') }}</p>
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from '@nuxtjs/composition-api'
import { format, isToday, isFuture, parseISO } from 'date-fns'

export default defineComponent({
  props: {
    milestone: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const isFutureMilestone = computed(
      () =>
        isFuture(parseISO(props.milestone.deadline)) ||
        isToday(parseISO(props.milestone.deadline))
    )
    return { format, isFutureMilestone }
  },
})
</script>
