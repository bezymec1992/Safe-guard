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
            <div class="text-holder d-none d-md-block">
              <p>
                We are specialized in safeguarding your assets. Our main goal is that our clients can operate risk free and that all prevention measurements are taken. 
              </p>
            </div>
            <nuxt-link
              to="/services"
              class="btn btn-arrow d-none d-md-inline-flex"
            >
              SEE OUR SERVICES
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
          <div
            class="col-md-6 d-md-flex align-items-md-center justify-content-center justify-content-md-end"
          >
            <div class="img-holder">
              <picture>
                <source
                  data-srcset="@/assets/images/img-062.webp"
                  type="image/webp"
                />
                <img
                  data-src="@/assets/images/img-062.png"
                  class="helm lazyload"
                  alt="img description"
                  width="400px"
                  height="400px"
                />
              </picture>

              <img
                src="#"
                data-src="@/assets/images/img-063.png"
                class="earth lazyload"
                alt="img description"
              />
              <img
                src="#"
                data-src="@/assets/images/img-064.png"
                class="info lazyload"
                alt="img description"
              />
            </div>
            <div class="text-holder d-md-none">
              <p>
                We are specialized in safeguarding your assets. Our main goal is that our clients can operate risk free and that all prevention measurements are taken.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-down d-none d-md-flex">
        <a href="#" @click.prevent="scrollToNextSection()">
          <img
            src="#"
            data-src="@/assets/images/icon-01.svg"
            class="lazyload"
            alt="#"
          />
          <span class="arrow-down"
            ><img
              src="#"
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
          <img data-src="@/assets/images/img-02.jpg" class="lazyload" alt="#" />
        </div>
      </div>
      <div class="col-md-7 d-flex flex-column justify-content-center we-are">
        <div class="content-holder">
          <h3 class="h2 text-uppercase">Who We Are</h3>
          <div class="text-holder">
            <p>
              We are a company that earned their stripes in the industry for the last 25 years. We retrieved assets and solved the problems of our clients. The main success factor of our company is that we truly care. This is why we started in this industry. The last 5 years we turned our expertise in offering more preventive measurements instead in just focusing on fixing the problem.
            </p>
            <p>
              Our clients are in different industries and in different jurisdictions. What we have seen that the mechanics in the most industries are the same when a company is at risk. We developed a methodology together with our team to make sure that our customers are protected in their core business. It gives us pleasure to see that our clients can focus on their core business.
            </p>
          </div>
        </div>
      </div>
    </txt-block>
    <VideoSection src="video-03.mp4" />
    <ServicesSection :class="'w-btn mobile-img'" />
    <!-- <WWSection /> -->
    <WFromSection />
    <LazyHydrate when-visible>
      <ContactSection />
    </LazyHydrate>
  </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration'
import IntroSection from '@/components/IntroSection/IntroSection'
import StatisticSection from '@/components/StatisticSection/StatisticSection'
import TxtBlock from '@/components/TxtBlock/TxtBlock'
import ServicesSection from '@/components/ServicesSection/ServicesSection'
// import WWSection from '@/components/WWSection/WWSection'
import WFromSection from '@/components/WFromSection/WFromSection'
import VideoSection from '@/components/VideoSection'

export default {
  components: {
    IntroSection,
    StatisticSection,
    TxtBlock,
    ServicesSection,
    // WWSection,
    WFromSection,
    ContactSection: () => import('@/components/ContactSection/ContactSection'),
    LazyHydrate,
    VideoSection,
  },
  head: {
    title: 'SafeGuard - Home page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content:
          'We are specialist in protecting your assets and reputation to make sure you operate risk-free and focus on your core business.',
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
  .h3 {
    max-width: 450px;
  }
  .intro-section {
    overflow: hidden;
    .btn {
      margin-top: 8rem;
    }
    @include media-breakpoint-up(md) {
      min-height: 90vh;
      padding-top: 11.2rem;
      padding-bottom: 3.4rem;
    }

    .h1 {
      margin-bottom: 8rem;
      margin-top: 8rem;
      @include media-breakpoint-down(md) {
        margin-bottom: 1rem;
        margin-top: 0;
      }
    }

    .img-holder {
      max-width: 65.5rem;
      min-height: 22rem;
      position: relative;
      right: -10rem;

      @include media-breakpoint-down(md) {
        transform: unset;
        right: -4rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 2rem;
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
  padding-bottom: 11rem;
  @include media-breakpoint-down(md) {
    padding-bottom: 5rem;
  }
  .img-holder {
    margin-left: 0;
  }
}


.services-section .row .col-txt .h2 {
  max-width: 25rem !important;
}
</style>
