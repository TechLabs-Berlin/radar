<template>
  <button class="inline-flex" @click="updateLoginToggle()">
    <TIcon icon="lock" class="text-2xl"></TIcon>
  </button>
</template>

<script>
export default {
  emits: ['update:login-toggle'],
  methods: {
    updateLoginToggle() {
      this.$emit('update:login-toggle')
    },
  },
}
</script>
