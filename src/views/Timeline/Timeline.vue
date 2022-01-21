<template>
  <div class="timeline-page">
    <intro-section>
      <div class="container">
        <router-link to="/about/" class="back-link">
          <span class="icon-holder">
            <img src="@/assets/images/img-017.svg" alt="#" />
          </span>
          Back</router-link
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
            <div class="img-holder align-self-center">
              <img src="@/assets/images/img-055.png" alt="#" />
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
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import TimelineSection from "@/components/TimelineSection/TimelineSection.vue";
import QuoteSection from "@/components/QuoteSection/QuoteSection.vue";

export default {
  name: "Timeline",
  components: {
    IntroSection,
    TimelineSection,
    QuoteSection,
  },
};
</script>

<style lang="scss">
@import "@/views/Timeline/Timeline.scss";
</style>
