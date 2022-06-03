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
            <nuxt-link
              to="/about/timeline"
              class="btn btn-arrow d-none d-md-inline-flex justify-content-center"
            >
              See Timeline
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
          <div class="col-md-6 d-md-flex justify-content-center">
            <div class="diving-suit">
              <img
                src="@/assets/images/img-040.png"
                alt="#"
                class="diving-suit-img-2 lazyload"
              />
              <img
                src="@/assets/images/img-039.png"
                alt="#"
                class="diving-suit-img-1 lazyload"
              />
            </div>
            <div class="text-holder d-md-none">
              <p>
                We know all the strategic and operational moves to protect you.
              </p>
            </div>
            <router-link to="/about/timeline" class="btn btn-arrow d-md-none">
              See Timeline
              <span class="arrow-wrapper">
                <span class="icon-holder">
                  <img
                    data-src="@/assets/images/icon-02.svg"
                    class="lazyload"
                    alt="#"
                  />
                </span>
              </span>
            </router-link>
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
          <img
            data-src="@/assets/images/img-041.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2 text-capitalize">
            Let Is <br />
            Inroduce
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
          <img
            data-src="@/assets/images/img-042.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2 text-capitalize">
            A Team Dedicated To <br />
            Protect Your Assets And <br />
            Reputation
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
        <h2 class="h1 text-capitalize">Managing Directors</h2>
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
          <img
            data-src="@/assets/images/img-047.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2 text-capitalize">
            Frank Balte <br />
            <small>(Function)</small>
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
    <txt-block :class="'txt-block-1 style2 reverse'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Roger van Alphen <br />
          <small>(Function)</small>
        </h3>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-048.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2 text-capitalize">
            Roger van Alphen <br />
            <small>(Function)</small>
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
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import TxtBlock from '@/components/TxtBlock/TxtBlock.vue'
import StatisticSection from '@/components/StatisticSection/StatisticSection.vue'
import ResultsSection from '@/components/ResultsSection/ResultsSection.vue'
import TrustedSection from '@/components/TrustedSection/TrustedSection.vue'
import ContactSection from '@/components/ContactSection/ContactSection.vue'

export default {
  name: 'About',
  components: {
    IntroSection,
    TxtBlock,
    StatisticSection,
    ResultsSection,
    TrustedSection,
    ContactSection,
  },
}
</script>

<style lang="scss" scoped>
.about-page {
  .intro-section {
    .diving-suit {
      max-width: 41.3rem;
      margin: auto;

      @include media-breakpoint-down(md) {
        margin: auto auto 5.2rem;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .h1 {
      @include media-breakpoint-up(md) {
        margin-bottom: 3.2rem;
      }

      @include media-breakpoint-down(md) {
        margin-bottom: 5.2rem;
      }
    }

    .btn-arrow {
      margin-top: 6.8rem;

      @include media-breakpoint-down(md) {
        margin-top: 3.6rem;
      }
    }
  }

  .title-section {
    padding-top: 14rem;
    padding-bottom: 8rem;

    @include media-breakpoint-down(md) {
      padding-top: 7rem;
      padding-bottom: 5rem;
    }

    @include media-breakpoint-up(xxl) {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    .container {
      max-width: 128.5rem;
    }
    .h1 {
      @include media-breakpoint-down(md) {
        text-transform: inherit;
        font-size: 3.4rem;
      }
    }
  }

  .txt-block {
    &.style1 {
      padding-bottom: 17.4rem;

      @include media-breakpoint-down(md) {
        padding-bottom: 7.9rem;
      }
    }

    &.style2 {
      padding-bottom: 15rem;

      @include media-breakpoint-down(md) {
        padding-bottom: 7.9rem;
      }
    }
  }
}
</style>
