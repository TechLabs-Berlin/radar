<template>
  <main>
    <div class="py-4 md:py-8 lg:mx-auto lg:max-w-2xl">
      <h1 class="mb-8 text-4xl font-bold text-center">Newsletter</h1>
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

        <!-- SHOW THAT SIGN-UP IS OFF (the demo has no sign-up endpoint) -->
        <div v-else-if="!newsletterUrl">
          <h3 class="mb-2 font-bold">Newsletter sign-up is off</h3>
          <p>This demo does not add anyone to a mailing list.</p>
        </div>

        <!-- SHOW SUBSCRIPTION FORM -->
        <div v-else>
          <ClientOnly>
            <MailchimpForm
              :sign-up-url="newsletterUrl"
              @success="status = 'success'"
              @failure="status = 'failure'"
            />
          </ClientOnly>
        </div>
      </WrapperContentBox>
    </div>
  </main>
</template>

<script setup>
useHead({ title: 'Newsletter' })

const status = useRoute().query.status
const newsletterUrl = useRuntimeConfig().public.newsletterUrl
</script>
