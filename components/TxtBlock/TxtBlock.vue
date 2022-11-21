<template>
  <div class="txt-block">
    <div class="container container-mbb">
      <div class="row">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsapInit } from '@/helper/gsap-animations/TxtBlock.js'

export default {
  name: 'TxtBlock',
  // mounted() {
  //   gsapInit()
  // },
}
</script>

<style lang="scss">
.container-mbb {
    padding-left: 2rem !important;
    padding-right: 2rem !important;
  }
@import '@/components/TxtBlock/TxtBlock.scss';
</style>
