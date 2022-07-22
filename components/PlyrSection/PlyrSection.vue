<template>
  <div class="plyr-holder">
    <client-only>
      <div class="container">
        <vue-plyr>
          <video
            crossorigin
            playsinline
            :data-poster="require('@/assets/images/img-048.jpg')"
          >
            <source
              :src="require(`@/assets/videos/${fileName}`)"
              type="video/mp4"
            />
          </video>
        </vue-plyr>
      </div>
    </client-only>
  </div>
</template>

<script>
// import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js' data-poster="poster.jpg"
import 'vue-plyr/dist/vue-plyr.css'

export default {
  name: 'PlyrSection',
  props: {
    fileName: {
      type: String,
      require: false,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.plyr-holder {
  .plyr {
    min-height: 40rem;
  }

  .plyr__video-wrapper {
    position: unset;
  }

  .plyr__poster {
    background-size: cover;
  }
}
</style>
