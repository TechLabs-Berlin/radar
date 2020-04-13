<template>
  <div>
    <div class="card faq-card">
      <div class="card-content content">
        <h1 class="title">Frequently Asked Questions</h1>
        <p class="content">
          For general questions regarding the TechLabs Digital Shaper program,
          such as:
        </p>
        <ul>
          <li>How much time to invest</li>
          <li>What expenses you will have to pay</li>
          <li>How to receive the Digital Shaper certificate</li>
          <li>…</li>
        </ul>
        <p class="content">
          Please also have a look at the
          <a
            href="https://techlabs.org/faq"
            target="_new"
            class="techlabs-button faq-button"
          >
            <span class="icon">
              <Fas i="link" />
            </span>
            <span>FAQs at techlabs.org</span>
          </a>
        </p>
      </div>
    </div>
    <div class="card faq-card">
      <div class="card-content content">
        <h2>What is the next event?</h2>
        <p>The next event will be the Q&A session.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Fas from '~/components/Fas'

export default {
  components: {
    Fas
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
@import "~bulma/sass/elements/content"

.faq-card
  margin-top: 2rem
  margin-bottom: 2rem
  margin-left: auto
  margin-right: auto
  max-width: $desktop * (9/12)
  border-radius: 8px

.faq-button
  vertical-align: sub
  margin-left: 0.5rem
</style>
