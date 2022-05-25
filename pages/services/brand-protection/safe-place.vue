<template>
  <div class="safe-pages">
    <intro-section>
      <div class="container">
        <router-link to="/services" class="back-link">
          <span class="icon-holder">
            <img
              data-src="@/assets/images/img-017.svg"
              class="lazyload"
              alt="#"
            />
          </span>
          Back</router-link
        >
        <div class="row">
          <div class="col-md-6 d-md-flex flex-column justify-content-center intro-text">
            <h1 class="h1">Safe place for everyone</h1>
            <div class="text-holder d-none d-md-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id, .
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-md-row flex-column align-items-md-center justify-content-center justify-content-md-end balloon-wrap"
          >
            <div class="balloon-holder">
              <img
                data-src="@/assets/images/bg-1.png"
                class="lazyload ballon"
                alt="img description"
              />
              <!-- <img
                  data-src="@/assets/images/img-066.png"
                  class="lazyload watch-shadow"
                  alt="img description"
                /> -->
              <!-- <div class="msg-holder w-msg hld-1">
                  <img
                    data-src="@/assets/images/img-069.png"
                    class="lazyload"
                    alt="img description"
                  />
                </div> -->
              <!-- <div class="msg-holder w-msg hld-2">
                  <img
                    data-src="@/assets/images/img-071.png"
                    class="lazyload"
                    alt="img description"
                  />
                </div> -->
            </div>
            <div class="text-holder d-md-none">
              <p>We make it so that nothing catches you by surprise.</p>
            </div>
          </div>
        </div>
        <div class="scroll-down">
          <a href="#">
            <img
              data-src="@/assets/images/icon-01.svg"
              class="lazyload"
              alt="#"
            />
          </a>
        </div>
      </div>
    </intro-section>
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'

export default {
  name: 'safe-place',
  components: {
    IntroSection,
  },
}
</script>

<style lang="scss">
@import 'SafePlace.scss';
</style>
