<template>
  <div class="txt-block">
    <div class="container">
      <div class="row">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { gsapInit } from '@/helper/gsap-animations/TxtBlock.js'

export default {
  name: 'TxtBlock',
  mounted() {
    gsapInit()
  },
  beforeDestroy() {},
}
</script>

<style lang="scss">
@import '@/components/TxtBlock/TxtBlock.scss';
</style>
