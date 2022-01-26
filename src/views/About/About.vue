<template>
  <div class="about-page">
    <intro-section>
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 text-col d-md-flex flex-column justify-content-center align-items-md-start"
          >
            <h1 class="h1">Who we are</h1>
            <div class="text-holder d-none d-md-block">
              <p>
                We know all the strategic and operational moves to protect you.
              </p>
            </div>
            <router-link
              to="/about/timeline"
              class="btn btn-arrow d-none d-md-inline-flex justify-content-center"
            >
              See Timeline
              <span class="arrow-wrapper">
                <span class="icon-holder">
                  <img src="@/assets/images/icon-02.svg" alt="#" />
                </span>
              </span>
            </router-link>
          </div>
          <div class="col-md-6 d-md-flex justify-content-center">
            <div class="diving-suit">
              <img
                src="@/assets/images/img-040.png"
                alt="#"
                class="diving-suit-img-2"
              />
              <img
                src="@/assets/images/img-039.png"
                alt="#"
                class="diving-suit-img-1"
              />
            </div>
            <div class="text-holder d-md-none">
              <p>
                We know all the strategic and operational moves to protect you.
              </p>
            </div>
            <router-link to="/services" class="btn btn-arrow d-md-none">
              See Timeline
              <span class="arrow-wrapper">
                <span class="icon-holder">
                  <img src="@/assets/images/icon-02.svg" alt="#" />
                </span>
              </span>
            </router-link>
          </div>
        </div>
        <div class="scroll-down">
          <a href="#">
            <img src="@/assets/images/icon-01.svg" alt="#" />
          </a>
        </div>
      </div>
    </intro-section>
    <StatisticSection />
    <txt-block :class="'txt-block-1 style1 reverse'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">Let Is Inroduce</h3>
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
          <img src="@/assets/images/img-041.jpg" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">
          Let Is <br />
          Inroduce
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis
            suscipit justo. Vestibulum at turpis euismod, fermentum
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
    <txt-block :class="'txt-block-2 style2'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          A Team Dedicated To <br />
          Protect Your Assets And <br />
          Reputation
        </h3>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img src="@/assets/images/img-042.png" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">
          A Team Dedicated To <br />
          Protect Your Assets And <br />
          Reputation
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis
            suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            With our global footprint and our specialized team members and
            partners we know what it takes to make sure that we can deliver a
            minimum risk environment for our clients.
          </p>
        </div>
      </div>
    </txt-block>
    <ResultsSection />
    <div class="title-section">
      <div class="container">
        <h2 class="h1">Managing Directors</h2>
      </div>
    </div>
    <txt-block :class="'txt-block-2 style1'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Frank Balte <br />
          <small>(Function)</small>
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
          <img src="@/assets/images/img-047.jpg" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">
          Frank Balte <br />
          <small>(Function)</small>
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis
            suscipit justo. Vestibulum at turpis euismod, fermentum
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
    <txt-block :class="'txt-block-1 style2 reverse'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Roger van Alphen <br />
          <small>(Function)</small>
        </h3>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img src="@/assets/images/img-048.jpg" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">
          Roger van Alphen <br />
          <small>(Function)</small>
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis
            suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            With our global footprint and our specialized team members and
            partners we know what it takes to make sure that we can deliver a
            minimum risk environment for our clients.
          </p>
        </div>
      </div>
    </txt-block>
    <TrustedSection />
    <ContactSection />
  </div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import TxtBlock from "@/components/TxtBlock/TxtBlock.vue";
import StatisticSection from "@/components/StatisticSection/StatisticSection.vue";
import ResultsSection from "@/components/ResultsSection/ResultsSection.vue";
import TrustedSection from "@/components/TrustedSection/TrustedSection.vue";
import ContactSection from "@/components/ContactSection/ContactSection.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "About",
  components: {
    IntroSection,
    TxtBlock,
    StatisticSection,
    ResultsSection,
    TrustedSection,
    ContactSection,
  },
  mounted() {
    gsap.set(".diving-suit .diving-suit-img-1", { opacity: 0 });
    ScrollTrigger.batch(".diving-suit .diving-suit-img-1", {
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

    gsap.set(".diving-suit .diving-suit-img-2", {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      scale: -0.5,
      y: -100,
    });

    ScrollTrigger.batch(".diving-suit .diving-suit-img-2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          delay: 1,
          duration: 1,

          keyframes: [
            { opacity: 1, scale: 1 },
            { y: 0, delay: 0.2 },
          ],
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-1 .img-holder", { opacity: 0, x: 24 });
    ScrollTrigger.batch(".txt-block-1 .img-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-1 .h2", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block-1 .h2", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-1 .text-holder", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block-1 .text-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });
    /// txt-block-1
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
  },
};
</script>

<style lang="scss">
@import "@/views/About/About.scss";
</style>
