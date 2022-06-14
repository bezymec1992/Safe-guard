<template>
  <div class="services-project">
    <intro-section class="cyber-consultants">
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
            <h1 class="h1">
              Cyber <br />
              Consultants
            </h1>
            <div class="text-holder d-none d-md-block">
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
                  data-src="@/assets/images/img-022.png"
                  class="lazyload phone-img desktop"
                  alt="#"
                />
                <img
                  data-src="@/assets/images/img-013.png"
                  class="lazyload phone-img mobile"
                  alt="#"
                />
                <div class="msg-holder msg-1">
                  <img
                    data-src="@/assets/images/img-072.png"
                    class="lazyload"
                    alt="#"
                  />
                </div>
                <div class="msg-holder msg-2">
                  <img
                    data-src="@/assets/images/img-073.png"
                    class="lazyload"
                    alt="#"
                  />
                </div>
              </div>
            </div>
            <div class="text-holder d-md-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id, consectetur efficitur neque.
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
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-093.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            Assessment and <br />
            Awareness
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
          We will support you so you <br />
          can be safe
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
            data-src="@/assets/images/img-085.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            We will support you <br />
            so you can be safe
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
    <visual-section :bg="'img-026.jpg'" :class="'bg-img visual'">
      <h2 class="h1 text-center">ADVICE AND PROTECT</h2>
    </visual-section>
    <txt-block :class="'txt-block-1 style1'">
      <div class="col d-md-none">
        <h3 class="h2">
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
          <img
            data-src="@/assets/images/img-086.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            Advice and <br />
            Protect
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
          Additional <br />
          topic
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
            data-src="@/assets/images/img-087.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            Additional <br />
            topic
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

    <visual-section :class="'img-pos1 second-section'">
      <div
        class="row flex-col flex-column-reverse flex-md-row justify-content-between"
      >
        <div class="col-md-6">
          <div class="img-holder">
            <img
              data-src="@/assets/images/img-094.png"
              class="lazyload"
              alt="#"
            />
          </div>
        </div>
        <div class="col-md-6 d-flex align-items-md-center">
          <div class="content-holder">
            <h2 class="h1">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</h2>
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
    <ButtonsSection :next-link="'brand-protection'" />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import TxtBlock from '@/components/TxtBlock/TxtBlock.vue'
import VisualSection from '@/components/VisualSection/VisualSection.vue'
import QuoteSection from '@/components/QuoteSection/QuoteSection.vue'
import ButtonsSection from '@/components/ButtonsSection/ButtonsSection.vue'

export default {
  name: 'Training',
  components: {
    IntroSection,
    TxtBlock,
    VisualSection,
    QuoteSection,
    ButtonsSection,
  },
}
</script>

<style lang="scss" scoped>
.services-project {
  .intro-section {
    padding-top: 18.2rem;
    padding-bottom: 2.4rem;
  }
  .txt-block-2 {
    &.style2 {
      @include media-breakpoint-up(md) {
        padding-top: 13.2rem;
        padding-bottom: 20rem;
      }
    }
  }

  .visual-section {
    padding-top: 7rem;
    overflow: hidden;
    @include media-breakpoint-down(sm) {
      min-height: 54vh;
    }
    &.second-section {
      min-height: 74vh;
      @include media-breakpoint-up(md) {
        margin-bottom: 20rem;
      }

      @include media-breakpoint-down(md) {
        padding-bottom: 3rem;
        margin-bottom: 10rem;
      }

      .row {
        @include media-breakpoint-down(md) {
          min-height: 47.7rem;
        }
      }

      .img-holder {
        left: 0;
        right: unset;

        @include media-breakpoint-down(md) {
          position: relative;
          margin: 0 -2.4rem;
          min-width: 43rem;
          bottom: -2rem;
        }
      }
      .content-holder {
        .h1 {
          @include media-breakpoint-down(md) {
            max-width: 28rem;
          }
        }
      }
    }
    .content-holder {
      margin-left: -9.5rem;
      @include media-breakpoint-down(lg) {
        margin-left: 0;
      }
      .h1 {
        @include media-breakpoint-down(md) {
          font-size: 2.5rem;
        }
      }
    }
  }

  .bg-img {
    padding-top: 3rem;
  }
}
</style>

<style lang="scss">
@import 'ServicesProjects.scss';
</style>
