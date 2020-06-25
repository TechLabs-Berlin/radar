<template>
  <div class="card media-card">
    <div class="card-content">
      <h1 class="title">{{ title }}</h1>
      <div class="columns">
        <div class="column">
          <div class="video-container">
            <iframe
              class="video"
              :src="youtubeURL"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="column content">
          <p><strong>Date:</strong> {{ friendlyDate }}</p>
          <!--eslint-disable vue/no-v-html-->
          <p v-html="formattedDescription"></p>
          <!--eslint-enable-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it'
import { parseISO, format } from 'date-fns'
import { de } from 'date-fns/locale'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    youtubeURL: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  computed: {
    friendlyDate() {
      return format(parseISO(this.date), 'PP', { locale: de })
    },
    formattedDescription() {
      const md = new MarkdownIt()
      return md.render(this.description)
    }
  }
}
</script>

<style lang="sass">
@import "~bulma/sass/utilities/_all"
@import "~bulma/sass/base/helpers"
@import "~bulma/sass/elements/content"

.media-card
  @extends .card
  margin-top: 2rem
  margin-bottom: 2rem
  margin-left: auto
  margin-right: auto
  max-width: $desktop * (9/12)
  border-radius: 8px

.video-container
  position: relative
  width: 100%
  height: 0
  padding-bottom: 56.25%

.video
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%
</style>
