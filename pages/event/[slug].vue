<template>
  <main>
    <div class="space-y-4 lg:mx-auto lg:max-w-2xl">
      <NuxtLink to="/" class="text-gray-500 hover:text-gray-700"
        ><TIcon icon="chevron-left" class="inline-block" /> Back to the
        Timeline</NuxtLink
      >
      <EventListItem v-if="event" :tl-event="event" show-resources />
    </div>
  </main>
</template>

<script setup>
const { data: event } = await useContentBySlug('events', useRoute().params.slug)
if (!event.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Event not found',
    fatal: true,
  })
}
useHead({ title: event.value.title })
</script>
