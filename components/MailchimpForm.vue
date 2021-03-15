<template>
  <div>
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
            class="flex items-center justify-center w-full px-4 py-2 space-x-2 font-bold border-2 border-gray-700 rounded-lg md:min-w-md hover:border-pink-600 hover:text-white hover:bg-pink-600 disabled:opacity-75"
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
import { defineComponent } from '@nuxtjs/composition-api'

const SIGNUP_URL =
  'https://a696oel4ti.execute-api.eu-central-1.amazonaws.com/dev/add-to-list'
export default defineComponent({
  name: 'MailchimpForm',
  data() {
    return {
      form: {
        email: '',
        name: '',
        consent: true,
      },
      errorEmail: false,
      errorConsent: false,
      loading: false,
    }
  },
  methods: {
    async submit(email, name) {
      this.loading = true
      const data = {
        email,
        name,
      }
      try {
        const response = await this.$axios.$post(SIGNUP_URL, data, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        console.log('SUCCESS')
        console.log(response)
        this.$emit('success')
      } catch (e) {
        console.log('ERROR')
        console.error(e)
        this.$emit('failure')
      } finally {
        this.loading = false
      }
    },
    checkForm(e) {
      this.errorConsent = !this.form.consent
      this.errorEmail = false
      if (!this.form.email || !this.validEmail(this.form.email)) {
        this.errorEmail = true
      }
      if (!this.errorConsent && !this.errorEmail) {
        this.submit(this.form.email, this.form.name)
      }
      e.preventDefault()
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
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
