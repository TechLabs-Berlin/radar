<template>
  <div>
    <button
      class="bg-white text-grey font-bold fixed bottom-5 right-5 rounded-full p-4 text-center z-20 shadow-lg hover:text-pink-600 border-2 border-grey-50"
      @click="updateToggle()"
    >
      Add Event
    </button>
  </div>
</template>

<script>
export default {
  emits: ['update:toggle'],
  methods: {
    updateToggle() {
      this.$emit('update:toggle')
    },
  },
}
</script>
