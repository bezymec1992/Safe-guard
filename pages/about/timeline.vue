<template>
  <div class="timeline-page">
    <intro-section :class="'d-flex'">
      <div class="container">
        <nuxt-link to="/about/" class="back-link">
          <span class="icon-holder">
            <img
              data-src="@/assets/images/img-017.svg"
              class="lazyload"
              alt="#"
            />
          </span>
          Back</nuxt-link
        >
        <div class="row">
          <div
            class="col-md-6 text-col d-md-flex flex-column justify-content-center"
          >
            <h1 class="h1">
              In time we always <br class="d-none d-md-block" />
              get measured
            </h1>
          </div>
          <div
            class="col-md-6 d-flex flex-md-row flex-column justify-content-center justify-content-md-end"
          >
            <div class="img-holder tape align-self-center">
              <img
                data-src="@/assets/images/img-055.png"
                class="lazyload"
                alt="#"
              />
            </div>
          </div>
        </div>
      </div>
    </intro-section>
    <TimelineSection />
    <quote-section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse vitae imperdiet nibh.
      </p>
    </quote-section>
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import TimelineSection from '@/components/TimelineSection/TimelineSection.vue'
import QuoteSection from '@/components/QuoteSection/QuoteSection.vue'

export default {
  name: 'Timeline',
  components: {
    IntroSection,
    TimelineSection,
    QuoteSection,
  },
}
</script>

<style lang="scss" scoped>
.timeline-page {
  .intro-section {
    background: linear-gradient(265.59deg, #5d90c6 0.16%, #c0cfee 76.73%);

    @include media-breakpoint-down(md) {
      position: relative;
      background: linear-gradient(189.54deg, #5d90c6 -14.43%, #c0cfee 95.18%);
      min-height: 100vh;
    }

    .h1 {
      position: relative;
      z-index: 2;
    }

    .img-holder {
      margin-left: -10rem;

      @include media-breakpoint-down(md) {
        margin-top: 3rem;
        margin-left: -10rem;
        margin-right: -2.4rem;
      }
    }
  }

  .quote-section {
    padding-bottom: 12.5rem;

    @include media-breakpoint-down(lg) {
      display: none;
    }
  }
}
</style>
