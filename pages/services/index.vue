<template>
  <div class="services-page">
    <div v-if="hideHomeServices">
      <intro-section>
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-md-flex flex-column justify-content-center">
              <h1 class="h1">Services</h1>
              <div class="text-holder d-none d-md-block">
                <p>We make it so that nothing catches you by surprise.</p>
              </div>
            </div>
            <div
              class="col-md-6 d-flex flex-md-row flex-column align-items-md-center justify-content-center justify-content-md-end"
            >
              <div class="watch-holder">
                <img
                  v-lazy-load
                  data-src="@/assets/images/img-065.png"
                  class="watch"
                  alt="img description"
                />
                <img
                  v-lazy-load
                  data-src="@/assets/images/img-066.png"
                  class="watch-shadow"
                  alt="img description"
                />
                <div class="msg-holder w-msg hld-1">
                  <img
                    v-lazy-load
                    data-src="@/assets/images/img-069.png"
                    alt="img description"
                  />
                </div>
                <div class="msg-holder w-msg hld-2">
                  <img
                    v-lazy-load
                    data-src="@/assets/images/img-071.png"
                    alt="img description"
                  />
                </div>
              </div>
              <div class="text-holder d-md-none">
                <p>We make it so that nothing catches you by surprise.</p>
              </div>
            </div>
          </div>
          <div class="scroll-down">
            <a href="#">
              <img v-lazy-load data-src="@/assets/images/icon-01.svg" alt="#" />
            </a>
          </div>
        </div>
      </intro-section>
      <ServicesSection :class="'items-wtext'" />
    </div>
    <nuxt />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import ServicesSection from '@/components/ServicesSection/ServicesSection.vue'

export default {
  name: 'Services',
  components: {
    IntroSection,
    ServicesSection,
  },
  data: () => ({}),
  computed: {
    hideHomeServices() {
      return this.$route.name === 'services'
    },
  },
}
</script>

<style lang="scss">
@import 'Services.scss';
</style>
