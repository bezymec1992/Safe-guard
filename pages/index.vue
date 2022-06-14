<template>
  <div class="home-page">
    <intro-section :class="'with-scroll'">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-md-flex flex-column justify-content-center">
            <h1 class="h1">
              Never Caught <br />
              Off-Guard Again
            </h1>
            <div class="text-holder">
              <p>
                We are specialist in protecting your assets and reputation to
                make sure you operate risk-free and focus on your core business.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end"
          >
            <div class="img-holder">
              <img
                data-src="@/assets/images/img-062.png"
                class="helm lazyload"
                alt="img description"
              />
              <img
                data-src="@/assets/images/img-063.png"
                class="earth lazyload"
                alt="img description"
              />
              <img
                data-src="@/assets/images/img-064.png"
                class="info lazyload"
                alt="img description"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-down d-none d-md-flex">
        <a href="#" @click.prevent="scrollToNextSection()">
          <img
            data-src="@/assets/images/icon-01.svg"
            class="lazyload"
            alt="#"
          />
          <span class="arrow-down"
            ><img
              data-src="@/assets/images/icon-03.svg"
              class="lazyload"
              alt="#"
          /></span>
        </a>
      </div>
    </intro-section>
    <StatisticSection />
    <txt-block :class="'txt-block-1'">
      <div class="col-md-5">
        <div class="img-holder">
          <img src="@/assets/images/img-02.jpg" alt="#" />
        </div>
      </div>
      <div class="col-md-7 d-flex flex-column justify-content-center we-are">
        <div class="content-holder">
          <h3 class="h2 text-uppercase">Who We Are</h3>
          <div class="text-holder">
            <p>
              With our global footprint and our specialized team members and
              partners we know what it takes to make sure that we can deliver a
              minimum risk environment for our clients.
            </p>
            <p>
              We know that timing is key, when to accelerate and when to slow
              down. Having our clients brand top of mind, we make sure that
              communication, teamwork and quality reports is a given.
            </p>
          </div>
        </div>
      </div>
    </txt-block>
    <ListSection />
    <ServicesSection :class="'w-btn mobile-img'" />
    <WWSection />
    <WFromSection />
    <ContactSection />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection'
import StatisticSection from '@/components/StatisticSection/StatisticSection'
import TxtBlock from '@/components/TxtBlock/TxtBlock'
import ListSection from '@/components/ListSection/ListSection'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
import WWSection from '@/components/WWSection/WWSection'
import WFromSection from '@/components/WFromSection/WFromSection'
import ContactSection from '@/components/ContactSection/ContactSection'

export default {
  components: {
    IntroSection,
    StatisticSection,
    TxtBlock,
    ListSection,
    ServicesSection,
    WWSection,
    WFromSection,
    ContactSection,
  },
  head: {
    title: 'Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description',
      },
    ],
  },

  methods: {
    scrollToNextSection() {
      const container = document.querySelector('.intro-section')
      container.scrollTop = container.scrollHeight
      window.scroll({
        top: container.scrollHeight,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.home-page {
  .intro-section {
    overflow: hidden;

    @include media-breakpoint-up(md) {
      min-height: 90vh;
      padding-top: 11.2rem;
      padding-bottom: 3.4rem;
    }
    @include media-breakpoint-down(md) {
      min-height: 97vh;
      padding-top: 16.2rem;
      // padding-bottom: 3.4rem;
    }

    .img-holder {
      max-width: 65.5rem;
      position: relative;
      right: -10rem;

      @include media-breakpoint-down(md) {
        transform: unset;
        right: -4rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .earth,
      .info {
        position: absolute;
        top: 0;
        left: 0;
      }

      // .helm {
      //   opacity: 0;
      //   transform: translate(-22.4rem, 20rem) scale(0);

      //   &.lazyload {
      //     animation: helm-animation;
      //     animation-duration: 1s;
      //     animation-fill-mode: forwards;
      //     animation-timing-function: ease-in;
      //     animation-delay: 0.3s;
      //   }

      //   @keyframes helm-animation {
      //     100% {
      //       opacity: 1;
      //       transform: translate(0, 0) scale(1);
      //     }
      //   }
      // }

      // .earth {
      //   opacity: 0;
      //   transform: translate(1rem, 1rem) scale(0);

      //   &.lazyload {
      //     animation: earth-animation;
      //     animation-duration: 1s;
      //     animation-fill-mode: forwards;
      //     animation-timing-function: ease-in;
      //     animation-delay: 1.6s;
      //   }

      //   @keyframes earth-animation {
      //     100% {
      //       opacity: 1;
      //       transform: translate(0, 0) scale(1);
      //     }
      //   }
      // }

      // .info {
      //   opacity: 0;

      //   &.lazyload {
      //     animation: info-animation;
      //     animation-duration: 0.5s;
      //     animation-fill-mode: forwards;
      //     animation-timing-function: ease-in;
      //     animation-delay: 2.8s;
      //   }

      //   @keyframes info-animation {
      //     100% {
      //       opacity: 1;
      //     }
      //   }
      // }
    }
  }
}
.we-are {
  .text-holder {
    max-width: 60rem;
  }
}

.txt-block {
  .img-holder {
    margin-left: 0;
  }
}

.services-section .row .col-txt .h2 {
  max-width: 25rem !important;
}
</style>
