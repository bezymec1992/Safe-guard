<template>
  <div class="services-section">
    <div class="container">
      <h2 class="h1">What We Do</h2>
      <div class="rows">
        <div class="row g-0">
          <div class="col-lg-6">
            <nuxt-link to="/services/brand-protection">
              <div
                class="gradient-block gradient-left d-md-flex justify-content-md-center"
              >
                <div class="building-wrapper">
                  <div class="building-holder">
                    <picture>
                      <source
                        data-srcset="@/assets/images/img-078.png"
                        media="(max-width: 992px)"
                      />
                      <img
                        data-src="@/assets/images/img-077.png"
                        alt="Consultancy and Brand Protection"
                        class="lazyload"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-lg-6 col-txt">
            <div class="content-holder">
              <span class="item-number">/01</span>
              <h3 class="h2">
                BRAND <br/> PROTECTION
                
              </h3>
              <div class="text-holder">
                <p>
                  Get all your touchpoints of your brand under control. We will help your company towards a preventive Mindset.
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
            <nuxt-link to="/services/training">
              <div
                class="gradient-block gradient-left d-md-flex justify-content-md-center"
              >
                <div class="punching-bag">
                  <picture>
                    <source
                      data-srcset="@/assets/images/img-018.png"
                      media="(max-width: 992px)"
                    />
                    <img
                      data-src="@/assets/images/img-03.png"
                      alt="Training and Implementation"
                      class="lazyload"
                    />
                  </picture>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-lg-6 col-txt">
            <div class="content-holder">
              <span class="item-number">/02</span>
              <h3 class="h2">
                
                Training
              </h3>
              <div class="text-holder">
                <p>
                  We convert theoretical topics into
                  practical understanding together with your team and making them
                  better so they can operate without us in the future.
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
                    <picture>
                      <source
                        data-srcset="@/assets/images/img-076.png"
                        media="(max-width: 992px)"
                      />
                      <img
                        data-src="@/assets/images/img-075.png"
                        alt="Cyber Consultants"
                        class="lazyload"
                      />
                    </picture>
                  </div>
                </div>
              </div>
            </nuxt-link>
          </div>
          <div class="col-lg-6 col-txt">
            <div class="content-holder">
              <span class="item-number">/03</span>
              <h3 class="h2">
                Cyber <br />
                CONSULTANCY
              </h3>
              <div class="text-holder">
                <p>
                  Having a good overview on CYBER RISKS in your company is the first step and getting more AWARENESS within your team is the second step. 
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
            <nuxt-link to="/services/software">
              <div
                class="gradient-block gradient-right d-md-flex justify-content-md-end"
              >
                <div class="imac-wrapper">
                  <div class="imac-holder">
                    <img
                      src="#"
                      data-src="@/assets/images/img-079.png"
                      class="lazyload"
                      alt="#"
                    />
                  </div>
                </div></div
            ></nuxt-link>
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
              <img
                data-src="@/assets/images/icon-02.svg"
                class="lazyload"
                alt="#"
              />
            </span>
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServicesSection',
}
</script>

<style lang="scss">
@import '@/components/ServicesSection/ServicesSection.scss';
</style>
