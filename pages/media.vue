<template>
  <div>
    <Video
      v-for="video in media"
      :key="video.title"
      :title="video.title"
      :youtube-u-r-l="video.youtubeURL"
      :date="video.date"
      :description="video.description"
    />
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
