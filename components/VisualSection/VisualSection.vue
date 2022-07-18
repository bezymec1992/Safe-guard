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
  },
  mounted() {
    // gsapInit()
  },
}
</script>

<style lang="scss">
@import '@/components/VisualSection/VisualSection.scss';
</style>
