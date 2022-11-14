<template>
  <div class="wfrom-section">
    <div class="additional-section-wrapper">
      <div class="container">
        <h2 class="h2">
          DISCOVER OUR JOURNEY 
        </h2>
        <div class="row">
          <div class="col-md-8">
            <div class="text-holder">
              <p>
                Every step we took on our journey was taken with pride and determination. Our journey was one of integrity that cultivated sense of honesty and trust. We now benefit from all the steps we were able to take thanks to the trust that the clients have in us.
              </p>
            </div>
          </div>
          <div
            class="col-md-4 d-md-flex align-items-md-start justify-content-md-center"
          >
            <router-link to="/about/timeline" class="btn btn-arrow">
              Our Timeline
              <span class="arrow-wrapper"
                ><span class="icon-holder"
                  ><img
                    data-src="@/assets/images/icon-02.svg"
                    class="lazyload"
                    alt="#" /></span></span
            ></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsapInit } from '@/helper/gsap-animations/WFromSection.js'

export default {
  name: 'WFromSection',
  // mounted() {
  //   gsapInit()
  // },
}
</script>

<style lang="scss">
@import '@/components/WFromSection/WFromSection.scss';
</style>
