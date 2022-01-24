<template>
  <div class="services-section">
    <div class="container">
      <h2 class="h1">What We Do</h2>
      <div class="rows">
        <div class="row g-0">
          <div class="col-lg-6">
            <router-link to="/services/training">
              <div
                class="gradient-block gradient-left d-md-flex justify-content-md-center"
              >
                <div class="punching-bag">
                  <img src="@/assets/images/img-03.png" alt="#" />
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-lg-6 col-txt">
            <div class="content-holder">
              <span class="item-number">/01</span>
              <h3 class="h2">
                Training and <br />
                Implementation
              </h3>
              <div class="text-holder">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi
                  nec viverra. In posuere
                </p>
              </div>
              <router-link to="/services/training" class="btn btn-dark"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-lg-6">
            <router-link to="/services/cyber-consultants">
              <div
                class="gradient-block gradient-right d-md-flex justify-content-md-center"
              >
                <div class="phone-wrapper">
                  <div class="phone-holder">
                    <img
                      src="@/assets/images/img-04.png"
                      class="desktop"
                      alt="#"
                    />
                    <img
                      src="@/assets/images/img-013.png"
                      class="mobile"
                      alt="#"
                    />
                    <div class="msg-holder msg-1">
                      <img src="@/assets/images/img-060.png" alt="#" />
                    </div>
                    <div class="msg-holder msg-2">
                      <img src="@/assets/images/img-061.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-lg-6 col-txt">
            <div class="content-holder">
              <span class="item-number">/02</span>
              <h3 class="h2">
                Cyber <br />
                Consultants
              </h3>
              <div class="text-holder">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi
                  nec viverra. In posuere
                </p>
              </div>
              <router-link to="/services/cyber-consultants" class="btn btn-dark"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-lg-6">
            <router-link to="/services/brand-protection">
              <div
                class="gradient-block gradient-left d-md-flex justify-content-md-center"
              >
                <div class="building-wrapper">
                  <div class="building-holder">
                    <img src="@/assets/images/img-07.png" alt="#" />
                    <div class="cloud-holder hld-1">
                      <img src="@/assets/images/img-08.png" alt="#" />
                    </div>
                    <div class="cloud-holder hld-2">
                      <img src="@/assets/images/img-09.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
          <div class="col-lg-6 col-txt">
            <div class="content-holder">
              <span class="item-number">/03</span>
              <h3 class="h2">
                Consultancy and <br />
                Brand Protection
              </h3>
              <div class="text-holder">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi
                  nec viverra. In posuere
                </p>
              </div>
              <router-link to="/services/brand-protection" class="btn btn-dark"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-lg-6">
            <router-link to="/services/software">
              <div
                class="gradient-block gradient-right d-md-flex justify-content-md-end"
              >
                <div class="imac-wrapper">
                  <div class="imac-holder">
                    <img src="@/assets/images/img-010.png" alt="#" />
                    <div class="iphone-holder hld-1">
                      <img src="@/assets/images/img-011.png" alt="#" />
                    </div>
                    <div class="iphone-holder hld-2">
                      <img src="@/assets/images/img-012.png" alt="#" />
                    </div>
                  </div>
                </div></div
            ></router-link>
          </div>
          <div class="col-lg-6 col-txt">
            <div class="content-holder">
              <span class="item-number">/04</span>
              <h3 class="h2">Software</h3>
              <div class="text-holder">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi
                  nec viverra. In posuere
                </p>
              </div>
              <router-link to="/services/software" class="btn btn-dark"
                >Read More</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="btn-holder">
        <router-link to="/services" class="btn btn-arrow">
          All Services
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ServicesSection",
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
    gsap.set(".services-section .h1", { opacity: 0 });
    ScrollTrigger.batch(".services-section .h1", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".services-section .btn-holder", { opacity: 0 });
    ScrollTrigger.batch(".services-section .btn-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".services-section .gradient-left", { opacity: 0, x: 24 });
    ScrollTrigger.batch(".services-section .gradient-left", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          stagger: 0.15,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".services-section .gradient-right", { opacity: 0, x: -24 });
    ScrollTrigger.batch(".services-section .gradient-right", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          stagger: 0.15,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".services-section .content-holder", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".services-section .content-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          delay: 0.2,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });
  },
};
</script>

<style lang="scss">
@import "@/components/ServicesSection/ServicesSection.scss";
</style>
