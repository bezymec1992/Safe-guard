<template>
  <div class="trusted-section">
    <div class="container">
      <h2 class="h2 text-md-center">Trusted by</h2>
      <div class="row justify-content-center">
        <div
          class="col-4 col-lg-3 col-xl-2 d-flex align-items-center justify-center"
        >
          <div class="img-holder">
            <img src="@/assets/images/img-049.png" alt="#" />
          </div>
        </div>
        <div
          class="col-4 col-lg-3 col-xl-2 d-flex align-items-center justify-center"
        >
          <div class="img-holder">
            <img src="@/assets/images/img-050.png" alt="#" />
          </div>
        </div>
        <div
          class="col-4 col-lg-3 col-xl-2 d-flex align-items-center justify-center"
        >
          <div class="img-holder">
            <img src="@/assets/images/img-051.png" alt="#" />
          </div>
        </div>
        <div
          class="col-4 col-lg-3 col-xl-2 d-flex align-items-center justify-center"
        >
          <div class="img-holder">
            <img src="@/assets/images/img-052.png" alt="#" />
          </div>
        </div>
        <div
          class="col-4 col-lg-3 col-xl-2 d-flex align-items-center justify-center"
        >
          <div class="img-holder">
            <img src="@/assets/images/img-053.png" alt="#" />
          </div>
        </div>
        <div
          class="col-4 col-lg-3 col-xl-2 d-flex align-items-center justify-center"
        >
          <div class="img-holder">
            <img src="@/assets/images/img-054.png" alt="#" />
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
  name: "TrustedSection",
  mounted() {
    gsap.set(".trusted-section .h2", { opacity: 0 });
    ScrollTrigger.batch(".trusted-section .h2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
          delay: 0.5,
          duration: 2,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".trusted-section .img-holder", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".trusted-section .img-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.4,
          delay: 0.7,
          duration: 0.6,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  },
};
</script>

<style lang="scss">
@import "@/components/TrustedSection/TrustedSection.scss";
</style>
