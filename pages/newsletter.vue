<template>
  <main>
    <div class="max-w-2xl px-4 py-8 mx-auto space-y-8">
      <h1 class="text-4xl font-bold text-center">Newsletter</h1>
      <WrapperContentBox>
        <!-- SHOW SUCCESS MSG  -->
        <div v-if="status === 'success'">
          <h3 class="mb-2 font-bold">Done!</h3>
          <p>Thank you for the support and we'll be in touch :)</p>
        </div>

        <!-- SHOW FAIL, TRY AGAIN  -->
        <div v-else-if="status === 'failure'">
          <h3 class="mb-2 font-bold">Ooops...</h3>
          <p>
            ... something went wrong!
            <NuxtLink to="/newsletter">Wanna try again?</NuxtLink>
          </p>
        </div>

        <!-- SHOW SUBSCRIPTION FORM -->
        <div v-else>
          <MailchimpForm
            @success="status = 'success'"
            @failure="status = 'failure'"
          />
        </div>
      </WrapperContentBox>
    </div>
  </main>
</template>

<script>
import { defineComponent } from '@nuxtjs/composition-api'
import MailchimpForm from '~/components/MailchimpForm'

export default defineComponent({
  name: 'PageNewsletter',
  components: {
    MailchimpForm,
  },
  data() {
    return {
      status: this.$route.query.status,
    }
  },
})
</script>
