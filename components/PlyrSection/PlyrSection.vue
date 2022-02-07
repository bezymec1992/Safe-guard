<template>
  <client-only>
    <div class="plyr-holder">
      <div class="container">
        <vue-plyr>
          <video crossorigin playsinline data-poster="poster.jpg">
            <source
              :src="require(`@/assets/videos/${fileName}`)"
              type="video/mp4"
            />
          </video>
        </vue-plyr>
      </div>
    </div>
  </client-only>
</template>

<script>
// import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js'
// import 'vue-plyr/dist/vue-plyr.css'

export default {
  name: 'PlyrSection',
  components: {
    // VuePlyr,
  },
  props: {
    fileName: {
      type: String,
      require: false,
      default: '',
    },
  },

  methods: {},
}
</script>
