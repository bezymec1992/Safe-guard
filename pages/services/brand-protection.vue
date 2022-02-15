<template>
  <div class="services-project">
    <intro-section>
      <div class="container">
        <router-link to="/services" class="back-link">
          <span class="icon-holder">
            <img v-lazy-load data-src="@/assets/images/img-017.svg" alt="#" />
          </span>
          Back</router-link
        >
        <div class="row">
          <div
            class="col-md-6 text-col d-md-flex flex-column justify-content-center"
          >
            <h1 class="h1">
              Consultancy & <br />
              brand protection
            </h1>
            <div class="text-holder">
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
                  v-lazy-load
                  data-src="@/assets/images/img-07.png"
                  class="building"
                  alt="#"
                />
                <div class="cloud-holder hld-1">
                  <img
                    v-lazy-load
                    data-src="@/assets/images/img-027.png"
                    alt="#"
                  />
                </div>
                <div class="cloud-holder hld-2">
                  <img
                    v-lazy-load
                    data-src="@/assets/images/img-028.png"
                    alt="#"
                  />
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
            <img v-lazy-load data-src="@/assets/images/icon-01.svg" alt="#" />
          </a>
        </div>
      </div>
    </intro-section>
    <txt-block :class="'txt-block-1 style1 reverse'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">Team Dynamics</h3>
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
          <img v-lazy-load data-src="@/assets/images/img-029.jpg" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">
          Team <br />
          Dynamics
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
      <div class="col-md-6 d-md-flex align-items-md-center">
        <div class="img-holder">
          <img v-lazy-load data-src="@/assets/images/img-031.png" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
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
                nec viverra. In posuere massa sed magna condimentum, eu gravida
                urna varius. Aenean neque orci, ultrices ac fermentum id,
                bibendum a ex. Nullam quis suscipit justo. Vestibulum at turpis
                euismod, fermentum
              </p>
            </div>
          </div>
          <div class="text-row">
            <h3 class="h2 text-capitalize">Strategical Request</h3>
            <div class="text-holder">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi
                nec viverra. In posuere massa sed magna condimentum, eu gravida
                urna varius. Aenean neque orci, ultrices ac fermentum id,
                bibendum a ex. Nullam quis suscipit justo. Vestibulum at turpis
                euismod, fermentum
              </p>
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
    <PlyrSection :file-name="'vid-01.mp4'" :class="'pb-0'" />
    <txt-block :class="'txt-block-1 style2 reverse'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">Custodian Assets</h3>
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
          <img v-lazy-load data-src="@/assets/images/img-032.jpg" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <h3 class="h2 text-capitalize">
          Custodian <br />
          Assets
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
}
</script>

<style lang="scss">
@import 'ServicesProjects.scss';
</style>
