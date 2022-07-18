<template>
  <div class="wfrom-section">
    <div class="additional-section-wrapper">
      <div class="container">
        <h2 class="h2">
          Discover where we <br />
          came from
        </h2>
        <div class="row">
          <div class="col-md-6">
            <div class="text-holder">
              <p>
                We're here to help and answer any question you might have. We
                look forward to hearing from you.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-md-flex align-items-md-start justify-content-md-center"
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
