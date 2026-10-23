<script setup>
const props = defineProps({
  unlock: {
    type: Function,
    required: true,
  },
})

useHead({ title: 'Password' })

const { location } = useRuntimeConfig().public
const password = ref('')
const failed = ref(false)
const loading = ref(false)

async function submit() {
  loading.value = true
  failed.value = !(await props.unlock(password.value))
  loading.value = false
}
</script>

<template>
  <main
    class="flex items-center justify-center w-full h-full max-w-5xl px-2 mx-auto"
  >
    <WrapperContentBox class="w-full max-w-md">
      <div class="flex justify-center mb-6 space-x-2">
        <img src="/icon.png" class="w-10 h-10" alt="" />
        <img :src="`/icon-${location}.png`" class="w-10 h-10" alt="" />
      </div>
      <h1 class="mb-2 text-2xl font-bold text-center">Semester Radar</h1>
      <p class="mb-6 text-center">
        Please enter the password you received from us to continue.
      </p>
      <form class="space-y-4" @submit.prevent="submit">
        <label class="block font-bold">
          Password
          <input
            v-model="password"
            type="password"
            autocomplete="current-password"
            class="w-full px-4 py-2 mt-2 font-normal border rounded-lg shadow-inner"
            :disabled="loading"
            autofocus
          />
        </label>
        <p v-if="failed" class="text-sm text-pink-600">
          That password is not correct. Please try again.
        </p>
        <button
          class="w-full px-4 py-2 font-bold border-2 border-gray-700 rounded-lg hover:border-pink-600 hover:text-white hover:bg-pink-600 disabled:opacity-75"
          :disabled="loading"
        >
          Continue
        </button>
      </form>
    </WrapperContentBox>
  </main>
</template>
