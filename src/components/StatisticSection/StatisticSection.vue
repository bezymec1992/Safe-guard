<template>
  <div class="statistic-section">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4">
          <div class="statistic-item">
            <h3>3.5 Billions</h3>
            <div class="text-holder">
              <p>
                Preventive measurements implemented (cost reduction, loss of
                investmen).
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-4">
          <div class="statistic-item">
            <h3>25+ Years</h3>
            <div class="text-holder">
              <p>Of experience in minimizing risk and protecting assets.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="statistic-item">
            <h3>1.5 Billions</h3>
            <div class="text-holder">
              <p>Of experience in minimizing risk and protecting assets.</p>
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
  name: "StatisticSection",
  props: {
    // msg: String
  },
  data: () => ({
    //
  }),
  methods: {
    //
  },
  mounted() {
    gsap.set(".statistic-item", { opacity: 0, y: 24 });

    ScrollTrigger.batch(".statistic-item", {
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
@import "@/components/StatisticSection/StatisticSection.scss";
</style>
