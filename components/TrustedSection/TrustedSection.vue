<template>
  <div class="trusted-section">
    <div class="container">
      <h2 class="h2 text-md-center">Trusted by</h2>
      <div class="row justify-content-center">
        <div
          v-for="item in trustedItems"
          :key="item.id"
          class="col-4 col-lg-3 col-xl-2 d-flex align-items-center justify-center"
        >
          <div class="img-holder">
            <img
              :data-src="require(`@/assets/images/${item.image}`)"
              class="lazyload"
              :alt="item.title"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsapInit } from '@/helper/gsap-animations/TrustedSection.js'

export default {
  name: 'TrustedSection',
  data() {
    return {
      trustedItems: [
        {
          id: 1,
          title: 'Bitburger',
          image: 'img-049.png',
        },
        {
          id: 2,
          title: 'Audi',
          image: 'img-050.png',
        },
        {
          id: 3,
          title: 'Ritter sport',
          image: 'img-051.png',
        },
        {
          id: 4,
          title: 'Samsung',
          image: 'img-052.png',
        },
        {
          id: 5,
          title: 'Koh-I-Noor',
          image: 'img-053.png',
        },
        {
          id: 6,
          title: 'hard Rock',
          image: 'img-054.png',
        },
      ],
    }
  },
  mounted() {
    gsapInit()
  },
}
</script>

<style lang="scss">
@import '@/components/TrustedSection/TrustedSection.scss';
</style>
