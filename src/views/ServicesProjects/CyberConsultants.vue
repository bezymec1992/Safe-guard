<template>
  <div class="services-project">
    <intro-section class="cyber-consultants">
      <div class="container">
        <router-link to="/services" class="back-link">
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
              Cyber <br />
              Consultants
            </h1>
            <div class="text-holder">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-md-row flex-column justify-content-center justify-content-md-end"
          >
            <div class="phone-wrapper">
              <div class="phone-holder">
                <img
                  src="@/assets/images/img-022.png"
                  class="phone-img desktop"
                  alt="#"
                />
                <img
                  src="@/assets/images/img-013.png"
                  class="phone-img mobile"
                  alt="#"
                />
                <div class="msg-holder msg-1">
                  <img src="@/assets/images/img-072.png" alt="#" />
                </div>
                <div class="msg-holder msg-2">
                  <img src="@/assets/images/img-073.png" alt="#" />
                </div>
              </div>
            </div>
            <div class="text-holder mobile">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id, consectetur efficitur neque.
              </p>
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
    <txt-block :class="'txt-block-2 style1'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Assessment and <br />
          Awareness
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
        </div>
      </div>
      <div class="col-md-6 d-flex align-items-center">
        <div class="img-holder ml-lg--10">
          <img src="@/assets/images/img-025.png" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">
          Assessment and <br />
          Awareness
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci
          </p>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
        </div>
      </div>
    </txt-block>
    <visual-section :bg="'img-026.jpg'" :class="'bg-img'">
      <h2 class="h1 text-center">ADVICE AND PROTECT</h2>
    </visual-section>
    <txt-block :class="'txt-block-2 style2'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Advice and <br />
          Protect
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <div class="phone-wrapper d-flex justify-content-center">
            <div class="phone-holder">
              <img src="@/assets/images/img-074.png" alt="#" />
              <div class="msg-holder msg-1">
                <img src="@/assets/images/img-072.png" alt="#" />
              </div>
              <div class="msg-holder msg-2">
                <img src="@/assets/images/img-073.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">Practical</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
        </div>
      </div>
    </txt-block>
    <div class="plyr-holder">
      <div class="container">
        <vue-plyr>
          <video crossorigin playsinline data-poster="poster.jpg">
            <source src="@/assets/videos/vid-01.mp4" type="video/mp4" />
            <track
              default
              kind="captions"
              label="English captions"
              src="/path/to/english.vtt"
              srclang="en"
            />
          </video>
        </vue-plyr>
      </div>
    </div>
    <quote-section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse vitae imperdiet nibh.
      </p>
    </quote-section>
    <div class="buttons-section">
      <div class="container">
        <router-link to="/services/" class="btn btn-arrow">
          All Services
          <span class="arrow-wrapper">
            <span class="icon-holder">
              <img src="@/assets/images/icon-02.svg" alt="#" />
            </span>
          </span>
        </router-link>
        <router-link to="/services/brand-protection" class="btn btn-arrow">
          Next Service
          <span class="arrow-wrapper">
            <span class="icon-holder">
              <img src="@/assets/images/icon-02.svg" alt="#" />
            </span>
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import TxtBlock from "@/components/TxtBlock/TxtBlock.vue";
import VisualSection from "@/components/VisualSection/VisualSection.vue";
import QuoteSection from "@/components/QuoteSection/QuoteSection.vue";
import VuePlyr from "vue-plyr";
import "vue-plyr/dist/vue-plyr.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "Training",
  components: {
    IntroSection,
    TxtBlock,
    VisualSection,
    QuoteSection,
    VuePlyr,
  },
  mounted() {
    gsap.set(".cyber-consultants .phone-img", {
      opacity: 0,
      rotation: -10,
      y: 100,
      x: 50,
    });
    ScrollTrigger.batch(".intro-section .phone-img", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.15,
          delay: 0.5,
          duration: 0.5,
          rotation: 0,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".intro-section .msg-holder", {
      opacity: 0,
      scale: 0,
    });
    ScrollTrigger.batch(".intro-section .msg-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          scale: 1,
          opacity: 1,
          delay: 1,
          duration: 0.5,
          stagger: 0.35,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-2 .img-holder", { opacity: 0, x: -24 });
    ScrollTrigger.batch(".txt-block-2 .img-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-2 .h2", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block-2 .h2", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-2 .text-holder", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block-2 .text-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });
    //txt-block-2

    gsap.set(".visual-section", {
      opacity: 0,
    });
    ScrollTrigger.batch(".visual-section", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".plyr-holder", {
      opacity: 0,
      scale: 0,
    });
    ScrollTrigger.batch(".plyr-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, scale: 1 }),
      start: "top 75%",
      end: "bottom 10%",
    });
  },
};
</script>

<style lang="scss">
@import "@/views/ServicesProjects/ServicesProjects.scss";
</style>
