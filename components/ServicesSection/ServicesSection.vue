<template>
  <div class="services-section">
    <div class="container">
      <h2 class="h1">What We Do</h2>
      <div class="rows">
        <div class="row g-0">
          <div class="col-lg-6">
            <nuxt-link to="/services/training">
              <div
                class="gradient-block gradient-left d-md-flex justify-content-md-center"
              >
                <div class="punching-bag">
                  <img src="@/assets/images/img-03.png" alt="#" />
                </div>
              </div>
            </nuxt-link>
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
              <nuxt-link to="/services/training" class="btn btn-dark"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-lg-6">
            <nuxt-link to="/services/cyber-consultants">
              <div
                class="gradient-block gradient-right d-md-flex justify-content-md-center"
              >
                <div class="phone-wrapper">
                  <div class="phone-holder">
                    <img
                      src="@/assets/images/img-075.png"
                      class="desktop"
                      alt="#"
                    />
                    <img
                      src="@/assets/images/img-076.png"
                      class="mobile"
                      alt="#"
                    />
                    <!-- <div class="msg-holder msg-1">
                      <img src="@/assets/images/img-060.png" alt="#" />
                    </div>
                    <div class="msg-holder msg-2">
                      <img src="@/assets/images/img-061.png" alt="#" />
                    </div> -->
                  </div>
                </div>
              </div>
            </nuxt-link>
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
              <nuxt-link to="/services/cyber-consultants" class="btn btn-dark"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-lg-6">
            <nuxt-link to="/services/brand-protection">
              <div
                class="gradient-block gradient-left d-md-flex justify-content-md-center"
              >
                <div class="building-wrapper">
                  <div class="building-holder">
                    <img
                      src="@/assets/images/img-077.png"
                      class="d-none d-lg-block"
                      alt="#"
                    />
                    <img
                      src="@/assets/images/img-078.png"
                      class="d-lg-none"
                      alt="#"
                    />
                    <!-- <div class="cloud-holder hld-1">
                      <img src="@/assets/images/img-08.png" alt="#" />
                    </div>
                    <div class="cloud-holder hld-2">
                      <img src="@/assets/images/img-09.png" alt="#" />
                    </div> -->
                  </div>
                </div>
              </div>
            </nuxt-link>
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
              <nuxt-link to="/services/brand-protection" class="btn btn-dark"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </div>
        <div class="row g-0">
          <div class="col-lg-6">
            <nuxt-link to="/services/software">
              <div
                class="gradient-block gradient-right d-md-flex justify-content-md-end"
              >
                <div class="imac-wrapper">
                  <div class="imac-holder">
                    <img src="@/assets/images/img-079.png" alt="#" />

                    <!-- <div class="iphone-holder hld-1">
                      <img src="@/assets/images/img-011.png" alt="#" />
                    </div>
                    <div class="iphone-holder hld-2">
                      <img src="@/assets/images/img-012.png" alt="#" />
                    </div> -->
                  </div>
                </div>
              </div></nuxt-link
            >
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
              <nuxt-link to="/services/software" class="btn btn-dark"
                >Read More</nuxt-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="btn-holder">
        <nuxt-link to="/services" class="btn btn-arrow">
          All Services
          <span class="arrow-wrapper">
            <span class="icon-holder">
              <img src="@/assets/images/icon-02.svg" alt="#" />
            </span>
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { gsapInit } from '@/helper/gsap-animations/ServicesSection.js'

export default {
  name: 'ServicesSection',
  mounted() {
    gsapInit()
  },
}
</script>

<style lang="scss">
@import '@/components/ServicesSection/ServicesSection.scss';
</style>
