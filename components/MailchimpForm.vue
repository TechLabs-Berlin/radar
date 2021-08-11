<template>
  <div>
    <h4 class="label">
      Applications are currently closed and will probably open up mid September
    </h4>
    <p class="mb-8">
      Stay in the loop and get notifications about upcoming events, workshops,
      new application dates, partnership opportunities, and more.
    </p>
    <div class="w-full md:p-8 md:mx-auto lg:max-w-md">
      <form class="space-y-4" @submit.prevent="checkForm">
        <div class="field">
          <label class="label"
            ><span>Name</span><br />

            <input
              v-model="form.name"
              class="form-input"
              type="text"
              placeholder="Enter your name"
              :disabled="loading"
          /></label>
        </div>
        <div class="field">
          <label class="label"
            >Email

            <input
              v-model="form.email"
              class="form-input"
              :class="{ 'is-danger': errorEmail }"
              type="email"
              placeholder="Enter your email"
              :disabled="loading"
          /></label>
          <p v-if="errorEmail" class="text-sm text-pink-600">
            This email is invalid
          </p>
        </div>
        <div>
          <label class="flex space-x-4">
            <input
              v-model="form.consent"
              type="checkbox"
              :disabled="loading"
              class="mt-2"
            />
            <div>
              <span
                >I agree to subscribe to the newsletter and receive emails from
                TechLabs Berlin. I can unsubscribe at any time.</span
              >
              <p v-if="errorConsent" class="text-sm text-pink-600">
                You need to agree, otherwise we cannot add you to our list.
              </p>
            </div>
          </label>
        </div>
        <div class="pt-4">
          <button
            class="
              flex
              items-center
              justify-center
              w-full
              px-4
              py-2
              space-x-2
              font-bold
              border-2 border-gray-700
              rounded-lg
              md:min-w-md
              hover:border-pink-600 hover:text-white hover:bg-pink-600
              disabled:opacity-75
            "
            :disabled="loading"
            @click="checkForm"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  reactive,
  ref,
  useContext,
} from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'MailchimpForm',
  setup(_, { emit }) {
    const form = reactive({ email: '', name: '', consent: true })
    const errorEmail = ref(false)
    const errorConsent = ref(false)
    const loading = ref(false)

    const { $axios } = useContext()

    async function submit(email, name) {
      loading.value = true
      const data = {
        email,
        name,
      }
      try {
        const response = await $axios.$post(
          'https://a696oel4ti.execute-api.eu-central-1.amazonaws.com/dev/add-to-list',
          data,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        console.log('SUCCESS')
        console.log(response)
        emit('success')
      } catch (e) {
        console.log('ERROR')
        console.error(e)
        emit('failure')
      } finally {
        loading.value = false
      }
    }

    function checkForm(e) {
      errorConsent.value = !form.consent
      errorEmail.value = false
      // if (!form.email) {
      //   errorEmail.value = true
      // }
      if (!errorConsent.value && !errorEmail.value) {
        submit(form.email, form.name)
      }
      e.preventDefault()
    }

    return {
      form,
      errorEmail,
      errorConsent,
      loading,
      checkForm,
    }
  },
})
</script>

<style lang="scss">
.form-input {
  @apply shadow-inner border rounded-lg px-4 py-2 w-full mt-2;
}
.label {
  @apply font-bold;
}
</style>
