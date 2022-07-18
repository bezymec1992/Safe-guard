<template>
  <div class="quote-section">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// import { gsapInit } from '@/helper/gsap-animations/QuoteSection.js'

export default {
  name: 'QuoteSection',
  // mounted() {
  //   gsapInit()
  // },
}
</script>

<style lang="scss" scoped>
@import '@/components/QuoteSection/QuoteSection.scss';
</style>
