<template>
  <div class="list-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 title">
          <h2>A team dedicated to protect your assets and reputation:</h2>
        </div>
        <div>
          <ul class="list-item">
            <li>Of experience in minimizing risk and protecting assets</li>
            <li>Of experience in minimizing risk and protecting assets</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsapInit } from '@/helper/gsap-animations/ListSection.js'

export default {
  name: 'ListSection',
  mounted() {
    // gsapInit()
  },
}
</script>

<style lang="scss" scoped>
.list-section {
  h2 {
    max-width: 48.4rem;
  }

  .list-item {
    max-width: 104rem;
    display: flex;
    justify-content: space-between;
    @include media-breakpoint-down(xl) {
      max-width: 96rem;
    }
    li {
      font-size: 1.8rem;
      @include media-breakpoint-down(md) {
        font-size: 1.4rem;
      }
      &:first-child {
        max-width: 44.7rem;
        @include media-breakpoint-down(lg) {
          max-width: 40.5rem;
        }
      }
    }

    @include media-breakpoint-down(md) {
      flex-direction: column;
    }
  }
}
</style>

<style lang="scss">
@import '@/components/ListSection/ListSection.scss';
</style>
