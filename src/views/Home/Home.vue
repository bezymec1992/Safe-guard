<template>
  <div class="home-page">
    <intro-section :class="'with-scroll'">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-md-flex flex-column justify-content-center">
            <h1 class="h1">
              Never Caught <br />
              Off-Guard Again
            </h1>
            <div class="text-holder">
              <p>
                We are specialist in protecting your assets and reputation to
                make sure you operate risk-free and focus on your core business.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end"
          >
            <div class="img-holder">
              <img
                src="@/assets/images/img-062.png"
                class="helm"
                alt="img description"
              />
              <img
                src="@/assets/images/img-063.png"
                class="earth"
                alt="img description"
              />
              <img
                src="@/assets/images/img-064.png"
                class="info"
                alt="img description"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-down d-none d-md-flex">
        <a href="#" @click.prevent="scrollToNextSection()">
          <img src="@/assets/images/icon-01.svg" alt="#" />
          <span class="arrow-down"
            ><img src="@/assets/images/icon-03.svg" alt="#"
          /></span>
        </a>
      </div>
    </intro-section>
    <StatisticSection />
    <txt-block>
      <div class="col-md-6">
        <div class="img-holder">
          <img src="@/assets/images/img-02.jpg" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h3 class="h2">Who We Are</h3>
        <div class="text-holder">
          <p>
            With our global footprint and our specialized team members and
            partners we know what it takes to make sure that we can deliver a
            minimum risk environment for our clients.
          </p>
          <p>
            We know that timing is key, when to accelerate and when to slow
            down. Having our clients brand top of mind, we make sure that
            communication, teamwork and quality reports is a given.
          </p>
        </div>
      </div>
    </txt-block>
    <ListSection />
    <ServicesSection :class="'w-btn'" />
    <WWSection />
    <WFromSection />
    <ContactSection />
  </div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import StatisticSection from "@/components/StatisticSection/StatisticSection.vue";
import TxtBlock from "@/components/TxtBlock/TxtBlock.vue";
import ListSection from "@/components/ListSection/ListSection.vue";
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";
import WWSection from "@/components/WWSection/WWSection.vue";
import WFromSection from "@/components/WFromSection/WFromSection.vue";
import ContactSection from "@/components/ContactSection/ContactSection.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Home",
  components: {
    IntroSection,
    StatisticSection,
    TxtBlock,
    ListSection,
    ServicesSection,
    WWSection,
    WFromSection,
    ContactSection,
  },
  methods: {
    scrollToNextSection() {
      var container = document.querySelector(".intro-section");
      container.scrollTop = container.scrollHeight;
      window.scroll({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    gsap.set(".txt-block .img-holder", { opacity: 0, x: -24 });
    ScrollTrigger.batch(".txt-block .img-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block .h2", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block .h2", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block .text-holder", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block .text-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".intro-section .helm", {
      opacity: 0,
      x: -224,
      y: 200,
      scale: 0,
      scaleX: 20,
    });
    ScrollTrigger.batch(".intro-section .helm", {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, x: 0, y: 0, stagger: 0.15, scale: 1 }),
      start: "top 100%",
      end: "bottom 100%",
      // markers: true,
    });

    gsap.set(".intro-section .earth", {
      opacity: 0,
      x: 24,
      y: 20,
      scale: 0,
      scaleX: 20,
    });
    ScrollTrigger.batch(".intro-section .earth", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.15,
          scale: 1,
          delay: 0.5,
        }),
      start: "top 80%",
      end: "bottom 30%",
    });

    gsap.set(".intro-section .info", {
      opacity: 0,
    });
    ScrollTrigger.batch(".intro-section .info", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 1,
        }),
      start: "top 80%",
      end: "bottom 30%",
    });
  },
};
</script>

<style lang="scss">
@import "@/views/Home/Home.scss";
</style>
