<template>
  <div class="quote-section">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "QuoteSection",
  props: {},
  data: () => ({
    //
  }),
  methods: {
    //
  },
  mounted() {
    gsap.set(".quote-section", {
      opacity: 0,
    });
    ScrollTrigger.batch(".quote-section", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 0.3,
          duration: 0.5,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  },
};
</script>

<style lang="scss">
@import "@/components/QuoteSection/QuoteSection.scss";
</style>
