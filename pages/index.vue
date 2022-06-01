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
                class="lazyload helm"
                alt="img description"
              />
              <img
                data-src="@/assets/images/img-063.png"
                class="lazyload earth"
                alt="img description"
              />
              <img
                data-src="@/assets/images/img-064.png"
                class="lazyload info"
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
          <img data-src="@/assets/images/img-02.jpg" class="lazyload" alt="#" />
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
    <ServicesSection :class="'w-btn'" />
    <WWSection />
    <WFromSection />
    <ContactSection />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import StatisticSection from '@/components/StatisticSection/StatisticSection.vue'
import TxtBlock from '@/components/TxtBlock/TxtBlock.vue'
import ListSection from '@/components/ListSection/ListSection.vue'
import ServicesSection from '@/components/ServicesSection/ServicesSection.vue'
import WWSection from '@/components/WWSection/WWSection.vue'
import WFromSection from '@/components/WFromSection/WFromSection.vue'
// import ContactSection from '@/components/ContactSection/ContactSection.vue'

export default {
  components: {
    IntroSection,
    StatisticSection,
    TxtBlock,
    ListSection,
    ServicesSection,
    WWSection,
    WFromSection,
    ContactSection: () =>
      import('@/components/ContactSection/ContactSection.vue'),
    // ContactSection,
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
    min-height: 80.12rem;
    @include media-breakpoint-up(md) {
      min-height: 80.12rem;
    }

    .img-holder {
      max-width: 65.5rem;
      position: relative;
      right: -10rem;

      @include media-breakpoint-down(md) {
        transform: translateX(20%);
        right: 0;
      }

      .earth,
      .info {
        position: absolute;
        left: 0;
      }
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
</style>
