<template>
  <div class="services-project">
    <intro-section>
      <div class="container">
        <router-link to="/services" class="back-link">
          <span class="icon-holder">
            <img
              data-src="@/assets/images/img-017.svg"
              class="lazyload"
              alt="#"
            />
          </span>
          Back</router-link
        >
        <div class="row">
          <div
            class="col-md-6 text-col d-md-flex flex-column justify-content-center"
          >
            <h1 class="h1">Consultancy & brand protection</h1>
            <div class="text-holder desktop">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex align-items-end justify-content-md-center"
          >
            <div class="building-wrapper">
              <div class="building-holder">
                <img
                  data-src="@/assets/images/img-07.png"
                  class="lazyload building"
                  alt="#"
                />
                <div class="cloud-holder hld-1">
                  <img
                    data-src="@/assets/images/img-027.png"
                    class="lazyload"
                    alt="#"
                  />
                </div>
                <div class="cloud-holder hld-2">
                  <img
                    data-src="@/assets/images/img-028.png"
                    class="lazyload"
                    alt="#"
                  />
                </div>
              </div>
            </div>
            <div class="text-holder mobile">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sit
                amet, consec
              </p>
            </div>
          </div>
        </div>
        <div class="scroll-down">
          <a href="#">
            <img
              data-src="@/assets/images/icon-01.svg"
              class="lazyload"
              alt="#"
            />
          </a>
        </div>
      </div>
    </intro-section>

    <txt-block :class="'txt-block-1 style1'">
      <div class="col d-md-none">
        <h3 class="h2">
          We are looking inside the <br />
          company to see if it’s <br />
          healthy
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
          <img
            data-src="@/assets/images/img-088.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            We are looking inside the <br />
            company to see if it’s <br />
            healthy
          </h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex. Nullam quis suscipit justo. Vestibulum at turpis euismod,
              fermentum
            </p>
          </div>
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

    <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">
          Team <br />
          Dynamics
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
          <img
            data-src="@/assets/images/img-089.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            Team <br />
            Dynamics
          </h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex. Nullam quis suscipit justo. Vestibulum at turpis euismod,
              fermentum
            </p>
          </div>
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

    <visual-section :bg="'img-030.jpg'" :class="'bg-img'">
      <h2 class="h1 text-center white">brand protection</h2>
    </visual-section>

    <txt-block :class="'txt-block-2 style2'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Specific Request. <br />
          Due Diligence
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
          <img
            data-src="@/assets/images/img-090.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <div class="text-rows">
            <div class="text-row">
              <h3 class="h2 text-capitalize">
                Specific Request. <br />
                Due Diligence
              </h3>
              <div class="text-holder">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi
                  nec viverra. In posuere massa sed magna condimentum, eu
                  gravida urna varius. Aenean neque orci, ultrices ac fermentum
                  id, bibendum a ex. Nullam quis suscipit justo. Vestibulum at
                  turpis euismod, fermentum
                </p>
              </div>
            </div>
            <div class="text-row">
              <h3 class="h2 text-capitalize">Strategical Request</h3>
              <div class="text-holder">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi
                  nec viverra. In posuere massa sed magna condimentum, eu
                  gravida urna varius. Aenean neque orci, ultrices ac fermentum
                  id, bibendum a ex. Nullam quis suscipit justo. Vestibulum at
                  turpis euismod, fermentum
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">Strategical Request</h3>
        <div class="text-holder">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
        </div>
      </div>
    </txt-block>

    <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">
          Checking all the risks <br />
          and advantages
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
          <img
            data-src="@/assets/images/img-091.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            Checking all the risks <br />
            and advantages
          </h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex. Nullam quis suscipit justo. Vestibulum at turpis euismod,
              fermentum
            </p>
          </div>
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

    <PlyrSection :file-name="'vid-01.mp4'" :class="'pb-0'" />

    <txt-block :class="'txt-block-2 style2 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">
          Custodian <br />
          Assets
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
          <img
            data-src="@/assets/images/img-092.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            Custodian <br />
            Assets
          </h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex. Nullam quis suscipit justo. Vestibulum at turpis euismod,
              fermentum
            </p>
          </div>
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

    <visual-section class="balloon">
      <div class="row g-0">
        <div class="col-md-6 d-flex balloon-text">
          <div class="content-holder">
            <h2 class="h1 anim-item">
              Safe place
              <br />
              for everyone
            </h2>
            <div class="text-holder anim-item">
              <p>
                Want to know how to protect your team and make it more healthy?
              </p>
              <nuxt-link
                to="/services/brand-protection/safeplace"
                class="btn btn-arrow"
              >
                Read More
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
        <div class="col-md-6">
          <div class="img-holder">
            <img data-src="@/assets/images/bg-1.png" class="lazyload" alt="#" />
          </div>
        </div>
      </div>
    </visual-section>

    <quote-section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse vitae imperdiet nibh.
      </p>
    </quote-section>

    <ButtonsSection :next-link="'software'" />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import TxtBlock from '@/components/TxtBlock/TxtBlock.vue'
import VisualSection from '@/components/VisualSection/VisualSection.vue'
import QuoteSection from '@/components/QuoteSection/QuoteSection.vue'
import PlyrSection from '@/components/PlyrSection/PlyrSection.vue'
import ButtonsSection from '@/components/ButtonsSection/ButtonsSection.vue'

export default {
  name: 'BrandProtection',

  components: {
    IntroSection,
    TxtBlock,
    VisualSection,
    QuoteSection,
    PlyrSection,
    ButtonsSection,
  },
  data: () => ({}),
  computed: {
    hideHomeServices() {
      return this.$route.name === 'services'
    },
  },
}
</script>

<style lang="scss">
.services-project {
  .intro-section {
    padding-bottom: 0;
    .h1 {
      @include media-breakpoint-down(md) {
        max-width: 25rem;
        font-size: 3.4rem;
      }
    }
    .building-wrapper {
      // position: relative;
      // bottom: 8rem !important;
      margin-top: 2rem;
    }
    .building-holder {
      position: relative;
      z-index: 11;
      max-width: 37rem;
      right: -4rem !important;
    }
  }

  .desktop {
    display: block;
    @include media-breakpoint-down(md) {
      display: none;
    }
  }

  .balloon {
    .balloon-text {
      padding-top: 18rem;
      @include media-breakpoint-down(md) {
        padding-top: 10rem;
      }
    }

    .content-holder {
      .h1 {
        font-size: 4.5rem;
      }

      p {
        max-width: 38rem;
      }
    }
  }
}

@import '@/pages/services/ServicesProjects.scss';
</style>
