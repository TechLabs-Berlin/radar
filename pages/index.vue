<template>
  <section class="section">
    <div class="card">
      <div class="card-content">
        <div class="status">
          TechLabs Berlin is
          <span class="highlighted">currently accepting applications</span>
          until Friday, April 17. <br />
          We will
          <span class="highlighted">kick-off our semester</span> on Monday,
          April 21.<br />
        </div>
        <p class="content has-text-centered">
          <a
            href="https://techlabs.org/location/Berlin"
            target="_new"
            class="techlabs-button"
          >
            Apply now!
          </a>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
@import "~bulma/sass/elements/content"

.status
  @extend .content
  @extend .is-size-4
  @extend .has-text-centered
  line-height: 2
</style>
