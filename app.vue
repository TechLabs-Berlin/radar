<script setup>
// The gate is optional and only active when ACCESS_PASSWORD is set when building
const { status, unlock } = useAccessGate()
</script>

<template>
  <AccessGate v-if="status === 'locked'" :unlock="unlock" />
  <NuxtLayout v-else-if="status === 'unlocked'">
    <NuxtPage />
  </NuxtLayout>
</template>
