<template>
  <div class="list-section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h2>
            A team dedicated to protect your <br />
            assets and reputation:
          </h2>
        </div>
        <div class="col-md-6">
          <ul>
            <li>Of experience in minimizing risk and protecting assets</li>
          </ul>
        </div>
        <div class="col-md-6">
          <ul>
            <li>Of experience in minimizing risk and protecting assets</li>
          </ul>
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
  name: "ListSection",
  props: {
    // msg: String
  },
  data: () => ({
    //
  }),
  mounted() {
    gsap.set(".list-section h2", { opacity: 0 });
    ScrollTrigger.batch(".list-section h2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
          // delay: 0.5,
          // duration: 2,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".list-section ul", { opacity: 0, y: 24 });

    ScrollTrigger.batch(".list-section ul", {
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
@import "@/components/ListSection/ListSection.scss";
</style>
