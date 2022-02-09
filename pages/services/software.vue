<template>
  <div class="services-project">
    <intro-section :class="'software'">
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
            <h1 class="h1">Software</h1>
            <div class="text-holder">
              <p>We make it so that nothing catches you by surprise.</p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex align-items-md-center flex-md-row flex-column justify-content-center justify-content-md-end"
          >
            <div class="imac-holder">
              <img src="@/assets/images/img-067.png" class="mac-off" alt="#" />
              <img src="@/assets/images/img-068.png" class="mac-on" alt="#" />
              <div class="iphone-holder hld-1">
                <img src="@/assets/images/img-034.png" alt="#" />
              </div>
              <div class="iphone-holder hld-2">
                <img src="@/assets/images/img-035.png" alt="#" />
              </div>
            </div>
            <div class="text-holder mobile mt-auto">
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
    <txt-block :class="'txt-block-2 style1'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">Tool #1</h3>
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
          <img src="@/assets/images/img-036.png" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">Tool #1</h3>
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
    <visual-section :class="'img-pos1'">
      <div class="row">
        <div class="col-md-6 d-flex align-items-md-center">
          <div class="content-holder">
            <h2 class="h1">
              with our software <br />
              life becomes more comfortable
            </h2>
          </div>
        </div>
        <div class="col-md-6">
          <div class="img-holder">
            <img src="@/assets/images/img-037.png" alt="#" />
          </div>
        </div>
      </div>
    </visual-section>
    <txt-block :class="'txt-block-1 style2 reverse'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">Tool #2</h3>
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
          <img src="@/assets/images/img-038.png" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">Tool #2</h3>
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
    <quote-section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse vitae imperdiet nibh.
      </p>
    </quote-section>
    <ButtonsSection />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import TxtBlock from '@/components/TxtBlock/TxtBlock.vue'
import VisualSection from '@/components/VisualSection/VisualSection.vue'
import QuoteSection from '@/components/QuoteSection/QuoteSection.vue'
import ButtonsSection from '@/components/ButtonsSection/ButtonsSection.vue'

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export default {
  name: 'Software',
  components: {
    IntroSection,
    TxtBlock,
    VisualSection,
    QuoteSection,
    ButtonsSection,
  },
  mounted() {
    // gsap.set(".txt-block-2 .img-holder", { opacity: 0, x: -24 });
    // ScrollTrigger.batch(".txt-block-2 .img-holder", {
    // 	onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
    // 	start: "top 75%",
    // 	end: "bottom 10%"
    // });
    // gsap.set(".txt-block-2 .h2", {
    // 	opacity: 0,
    // 	y: 24
    // });
    // ScrollTrigger.batch(".txt-block-2 .h2", {
    // 	onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
    // 	start: "top 75%",
    // 	end: "bottom 10%"
    // });
    // gsap.set(".txt-block-2 .text-holder", {
    // 	opacity: 0,
    // 	y: 24
    // });
    // ScrollTrigger.batch(".txt-block-2 .text-holder", {
    // 	onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
    // 	start: "top 75%",
    // 	end: "bottom 10%"
    // });
    // //txt-block-2
    // gsap.set(".txt-block-1 .img-holder", { opacity: 0, x: 24 });
    // ScrollTrigger.batch(".txt-block-1 .img-holder", {
    // 	onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
    // 	start: "top 75%",
    // 	end: "bottom 10%"
    // });
    // gsap.set(".txt-block-1 .h2", {
    // 	opacity: 0,
    // 	y: 24
    // });
    // ScrollTrigger.batch(".txt-block-1 .h2", {
    // 	onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
    // 	start: "top 75%",
    // 	end: "bottom 10%"
    // });
    // gsap.set(".txt-block-1 .text-holder", {
    // 	opacity: 0,
    // 	y: 24
    // });
    // ScrollTrigger.batch(".txt-block-1 .text-holder", {
    // 	onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
    // 	start: "top 75%",
    // 	end: "bottom 10%"
    // });
    // /// txt-block-1
    // gsap.set(".visual-section", {
    // 	opacity: 0
    // });
    // ScrollTrigger.batch(".visual-section", {
    // 	onEnter: (batch) => gsap.to(batch, { opacity: 1 }),
    // 	start: "top 75%",
    // 	end: "bottom 10%"
    // });
  },
}
</script>

<style lang="scss">
@import 'ServicesProjects.scss';
</style>
