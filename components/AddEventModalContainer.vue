<template>
  <div @keyup.esc="toggle = false">
    <AddEventModalButton @update:toggle="updateToggle"></AddEventModalButton
    ><AddEventModalForm
      v-if="toggle"
      @update:toggle-false="updateToggleFalse"
    ></AddEventModalForm>
  </div>
</template>

<script>
export default {
  name: 'AddEventModalContainer',

  data() {
    return {
      toggle: false,
    }
  },

  methods: {
    updateToggle() {
      this.toggle = !this.toggle
    },
    updateToggleFalse() {
      this.toggle = false
    },
  },
}
</script>
