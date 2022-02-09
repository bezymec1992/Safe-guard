<template>
  <div class="plyr-holder">
    <client-only>
      <div class="container">
        <vue-plyr>
          <video crossorigin playsinline>
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
// import 'vue-plyr/dist/vue-plyr.css'

import { gsapInit } from '@/helper/gsap-animations/PlyrSection.js'

export default {
  name: 'PlyrSection',
  props: {
    fileName: {
      type: String,
      require: false,
      default: '',
    },
  },
  mounted() {
    gsapInit()
  },
}
</script>
