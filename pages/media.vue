<template>
  <div>
    <template v-if="media">
      <Video
        v-for="video in media"
        :key="video.title"
        :title="video.title"
        :youtube-u-r-l="video.youtubeURL"
        :date="video.date"
        :description="video.description"
      />
    </template>
    <template v-else>
      <div class="card timeline-event status-card">
        <div class="card-content">
          <div class="status">
            <p>
              As the semester progresses, we'll add videos of all our events
              here.
            </p>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import Video from '~/components/media/Video'
import { media } from '~/assets/content'

export default {
  components: {
    Video
  },
  data() {
    return {
      media
    }
  }
}
</script>

<style lang="sass" scoped>
.status-card
  margin-top: 2rem
</style>
