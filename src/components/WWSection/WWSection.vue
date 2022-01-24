<template>
  <div class="ww-section">
    <div class="container">
      <h2 class="h2">Why We</h2>
      <div class="text-holder">
        <p>
          A team dedicated to protect your assets and reputation. With our
          global footprint and our specialized team members and partners we know
          what it takes to make sure that we can deliver a minimum risk
          environment for our clients.
        </p>
      </div>
      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="ww-item">
            <span class="item-digit">25+</span>
            <div class="item-text">
              <span class="item-title">years of experience</span>
              <p>In handling legal issues.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="ww-item">
            <span class="item-digit">230+</span>
            <div class="item-text">
              <span class="item-title">signature strategies</span>
              <p>Developed for our clients.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="ww-item">
            <span class="item-digit">145</span>
            <div class="item-text">
              <span class="item-title">corporate clients</span>
              <p>We helped thus far.</p>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="ww-item">
            <span class="item-digit">30</span>
            <div class="item-text">
              <span class="item-title">employees working</span>
              <p>For your legal security.</p>
            </div>
          </div>
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
  name: "WWSection",
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
    gsap.set(".ww-section .h2", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".ww-section .h2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          delay: 0.2,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".ww-section .text-holder", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".ww-section .text-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          delay: 0.3,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".ww-section .col-sm-6", { opacity: 0, y: 24 });

    ScrollTrigger.batch(".ww-section .col-sm-6", {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, delay: 0.5 }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 85%",
      end: "bottom 10%",
    });
  },
};
</script>

<style lang="scss">
@import "@/components/WWSection/WWSection.scss";
</style>
