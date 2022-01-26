<template>
  <div class="services-page">
    <div v-if="hideHomeServices">
      <intro-section>
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-md-flex flex-column justify-content-center">
              <h1 class="h1">Services</h1>
              <div class="text-holder">
                <p>We make it so that nothing catches you by surprise.</p>
              </div>
            </div>
            <div
              class="col-md-6 d-flex flex-md-row flex-column align-items-md-center justify-content-center justify-content-md-end"
            >
              <div class="watch-holder">
                <img
                  src="@/assets/images/img-065.png"
                  class="watch"
                  alt="img description"
                />
                <img
                  src="@/assets/images/img-066.png"
                  class="watch-shadow"
                  alt="img description"
                />
                <div class="msg-holder w-msg hld-1">
                  <img
                    src="@/assets/images/img-069.png"
                    alt="img description"
                  />
                </div>
                <div class="msg-holder w-msg hld-2">
                  <img
                    src="@/assets/images/img-071.png"
                    alt="img description"
                  />
                </div>
              </div>
              <div class="text-holder mobile">
                <p>We make it so that nothing catches you by surprise.</p>
              </div>
            </div>
          </div>
          <div class="scroll-down">
            <a href="#">
              <img src="@/assets/images/icon-01.svg" alt="#" />
            </a>
          </div>
        </div>
      </intro-section>
      <ServicesSection :class="'items-wtext'" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Services",
  components: {
    IntroSection,
    ServicesSection,
  },
  data: () => ({}),
  computed: {
    hideHomeServices() {
      return this.$route.name === "Services";
    },
  },
  mounted() {
    gsap.set(".intro-section .watch", {
      opacity: 0,
      rotation: -40,
      y: 100,
    });
    ScrollTrigger.batch(".intro-section .watch", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          delay: 0.3,
          duration: 0.5,
          rotation: 0,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".intro-section .watch-shadow", {
      opacity: 0,
    });
    ScrollTrigger.batch(".intro-section .watch-shadow", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 1,
          duration: 0.8,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".intro-section .w-msg", {
      opacity: 0,
      scale: 0,
    });
    ScrollTrigger.batch(".intro-section .w-msg", {
      onEnter: (batch) =>
        gsap.to(batch, {
          scale: 1,
          opacity: 1,
          delay: 1.2,
          duration: 0.5,
          stagger: 0.35,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  },
};
</script>

<style lang="scss">
@import "@/views/Services/Services.scss";
</style>
