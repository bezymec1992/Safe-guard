<template>
  <div
    class="visual-section"
    :style="{
      backgroundImage: bg ? `url(${require('@/assets/images/' + bg)})` : null,
    }"

    
    
  >
    <div class="container">
      <slot></slot>
    </div>
    <video v-if="videoBg" autoplay loop playsinline muted>
      <source :src="require(`@/assets/videos/${videoBg}`)" type="video/mp4" />
    </video>
  </div>
</template>

<script>
// import { gsapInit } from '@/helper/gsap-animations/VisualSection.js'

export default {
  name: 'TxtBlock',
  props: {
    bg: {
      type: String,
      default: null,
      required: false,
    },
    videoBg: {
      type: String,
      default: '',
    },
    txt: {
      type: String,
      default: '',
    },
  },
  mounted() {
    // gsapInit()
  },
}
</script>

<style lang="scss">
@import '@/components/VisualSection/VisualSection.scss';
</style>
