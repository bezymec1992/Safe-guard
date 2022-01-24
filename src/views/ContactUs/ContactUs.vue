<template>
  <div class="contact-us">
    <visual-section>
      <div class="row">
        <div class="col-12">
          <div class="content-holder">
            <h1 class="h1 text-center">
              Jump in and <br class="d-md-none" />
              Enjoy the ride!
            </h1>
          </div>
        </div>
        <div class="col-12">
          <div class="img-holder">
            <img src="@/assets/images/img-059.png" alt="#" />
          </div>
        </div>
      </div>
      <ContactSection />
    </visual-section>
  </div>
</template>

<script>
import VisualSection from "@/components/VisualSection/VisualSection.vue";
import ContactSection from "@/components/ContactSection/ContactSection.vue";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ContactUs",
  components: {
    ContactSection,
    VisualSection,
  },

  created() {
    document.querySelector(".footer").classList.add("contact-us");
  },
  unmounted() {
    document.querySelector(".footer").classList.remove("contact-us");
  },
  methods: {
    // handleScroll(event) {
    //   console.log(event);
    // },
  },
  computed: {
    // watchRoute() {
    //   return this.$route.name === "ContactUs";
    // },
  },
  mounted() {
    gsap.set(".visual-section .h1", { opacity: 0, y: -24 });
    ScrollTrigger.batch(".visual-section .h1", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".visual-section .img-holder", {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      scale: -0.5,
    });
    ScrollTrigger.batch(".visual-section .img-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          delay: 0.5,
          duration: 0.9,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  },
};
</script>

<style lang="scss">
@import "@/views/ContactUs/ContactUs.scss";
</style>
