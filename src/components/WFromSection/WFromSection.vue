<template>
  <div class="wfrom-section">
    <div class="container">
      <h2 class="h2">
        Discover where we <br />
        came from
      </h2>
      <div class="row">
        <div class="col-md-6">
          <div class="text-holder">
            <p>
              We're here to help and answer any question you might have. We look
              forward to hearing from you.
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
                ><img src="/img/icon-02.2a6a9437.svg" alt="#" /></span></span
          ></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "WFromSection",
  props: {
    //
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
  mounted() {
    gsap.set(".wfrom-section .col-md-6", { opacity: 0, y: 24 });

    ScrollTrigger.batch(".wfrom-section .col-md-6", {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, delay: 0.3 }),
      // onLeave: (batch) => gsap.to(batch, { opacity: 0, y: 24 }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      // onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 24 }),

      start: "top 85%",
      end: "bottom 10%",
      // markers: true,
    });

    gsap.set(".wfrom-section .h2", { opacity: 0, y: 24 });

    ScrollTrigger.batch(".wfrom-section .h2", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      // onLeave: (batch) => gsap.to(batch, { opacity: 0, y: 24 }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      // onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 24 }),

      start: "top 85%",
      end: "bottom 10%",
      // markers: true,
    });
  },
};
</script>

<style lang="scss">
@import "@/components/WFromSection/WFromSection.scss";
</style>
