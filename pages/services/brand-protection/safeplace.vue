<template>
  <div class="safe-pages">
    <intro-section>
      <div class="container">
        <div class="row flex-column">
          <div
            class="col-md-8 col-lg-6 d-flex flex-column justify-content-between justify-content-md-center flex-grow-1"
          >
            <h1 class="h1">
              Safe place <br />
              for everyone
            </h1>
            <div class="text-holder">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id,
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-md-row flex-column align-items-md-center justify-content-center justify-content-md-end balloon-wrap"
          >
            <!-- <div class="bg-holder">
              <img src="@/assets/images/img-127.png" alt="Safe place for everyone" />
            </div> -->
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

    <txt-block class="txt-block-1 style1 safe-style pb-0">
      <div class="col d-md-none">
        <h3 class="h2">What do we do</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
        </div>
      </div>
      <div class="col-md-6 image">
        <div class="img-holder">
          <picture>
            <source
              srcset="@/assets/images/img-108.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-154.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">What do we do</h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendmagna condimentum, eu gravida urna varius. Aenean neque
              orci, ultrices ac fermentum id, bibendum a ex. Nullam quis
              suscipit justo. Vestibul
            </p>
            <p>
              um at turpis euismod, fermentum erra. In posuere massa sed magna
              condimentum, eu gravida urna varius. Aenean neque orci, ultrices
              ac
            </p>
            <nuxt-link to="/about" class="btn btn-arrow">
              About us
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
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
          <nuxt-link to="/about" class="btn btn-arrow">
            About us
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
    </txt-block>

    <div class="quote-block">
      <div class="container">
        <div class="row">
          <div class="col-lg-8">
            <div class="title-holder">
              <div class="icon-holder">
                <img src="@/assets/images/icon-010.svg" alt="icon quote" />
              </div>
              <h2 class="h2">
                What have we seen while working with different companies
              </h2>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="text-holder">
              <p>
                Lorem ipsum imperdiet nibh. Phasellus vestibulum ac nisi nec
                viverra. In posuere massa sed magna condimentum, eu gravida
                bulum posuere.
              </p>
            </div>
          </div>
        </div>
        <ImgSection img="img-109.jpg" />
      </div>
    </div>

    <div class="single-title">
      <div class="container">
        <h2 class="h2">what can we offer</h2>
      </div>
    </div>

    <txt-block class="txt-block-1 style1 safe-style pt-0">
      <div class="col d-md-none">
        <h3 class="h2">Create assessment of your team</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
        </div>
      </div>
      <div class="col-md-6 image">
        <div class="img-holder">
          <picture>
            <source
              srcset="@/assets/images/img-110.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-155.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Create assessment of your team</h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nib
            </p>

            <nuxt-link to="/services/training" class="btn btn-dark"
              >About assessment</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
          <nuxt-link to="/services/training" class="btn btn-dark d-block"
            >About assessment</nuxt-link
          >
        </div>
      </div>
    </txt-block>

    <txt-block class="txt-block-2 style2 reverse safe-style pt-0">
      <div class="col d-md-none">
        <h3 class="h2">Awareness program</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
        </div>
      </div>
      <div class="col-md-6 image">
        <div class="img-holder">
          <picture>
            <source
              srcset="@/assets/images/img-112.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-156.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Awareness program</h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex.
            </p>
            <nuxt-link to="/services/training" class="btn btn-dark"
              >Awareness program</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
          <nuxt-link to="/services/training" class="btn btn-dark"
            >Awareness program</nuxt-link
          >
        </div>
      </div>
    </txt-block>

    <txt-block class="txt-block-1 style1 pt-0 safe-style">
      <div class="col d-md-none">
        <h3 class="h2">Anonymous platform for everyone’s who needs help</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
        </div>
      </div>
      <div class="col-md-6 safe-style-img">
        <div class="img-holder">
          <picture>
            <source
              srcset="@/assets/images/img-111.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-157.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder digitalization">
          <h3 class="h2">Anonymous platform for everyone’s who needs help</h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere
            </p>
            <nuxt-link to="/services/training" class="btn btn-dark"
              >Our software</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="col d-md-none mobile-text">
        <div class="text-holder pb-none">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
          <nuxt-link to="/services/training" class="btn btn-dark"
            >Our software</nuxt-link
          >
        </div>
      </div>
    </txt-block>

    <QuoteSection class="text-uppercase">
      <p>
        This is a place for a final <br class="d-none d-md-block" />
        slogan on this page
      </p>
    </QuoteSection>

    <ContactSection class="style2">
      <template #content>
        <h2 class="h2">Interested or want to know more?</h2>
        <ul>
          <li>
            <h3>Address</h3>
            <address>Hobbemakade 29, 1071 XK, Amsterdam, Netherlands</address>
          </li>
          <li>
            <h3>E-mail</h3>
            <a href="mailto:safeguard_help@gmail.com"
              >safeguard_help@gmail.com</a
            >
          </li>
          <li>
            <h3>Phone</h3>
            <a href="tel:+330123456789">+330123456789</a>
          </li>
        </ul>
      </template>
    </ContactSection>
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection'
import TxtBlock from '@/components/TxtBlock/TxtBlock'
import ImgSection from '@/components/ImgSection/ImgSection'
import QuoteSection from '@/components/QuoteSection/QuoteSection'
import ContactSection from '@/components/ContactSection/ContactSection'

export default {
  name: 'SafePlace',
  components: {
    IntroSection,
    TxtBlock,
    ImgSection,
    QuoteSection,
    ContactSection,
  },
  layout: 'safe-layout',
  head() {
    return {
      bodyAttrs: {
        class: 'header-white',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.safe-pages {
  .intro-section {
    position: relative;
    color: $white;
    background: url('@/assets/images/img-113.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    @include media-breakpoint-down(md) {
      display: flex;
      min-height: 95vh;
      background: url('@/assets/images/img-114.jpg');
      background-position: 100% 44%;
      background-size: cover;
      background-repeat: no-repeat;
    }

    .h1 {
      font-size: 6.8rem;

      @include media-breakpoint-down(md) {
        font-size: 4rem;
      }
    }
  }

  .quote-block {
    padding-top: 14rem;

    @include media-breakpoint-down(md) {
      padding-top: 7rem;
    }

    .container {
      max-width: 132rem;
    }

    .title-holder {
      @include media-breakpoint-up(md) {
        display: flex;
        align-items: flex-start;
      }

      .h2 {
        margin-bottom: 1.6rem;

        @include media-breakpoint-up(lg) {
          margin-bottom: 8.6rem;
        }

        @include media-breakpoint-up(md) {
          max-width: 66.7rem;
        }
      }

      .icon-holder {
        min-width: 5rem;
        width: 5rem;
        margin-right: 2rem;

        @include media-breakpoint-down(md) {
          width: 2.4rem;
          min-width: 2.4rem;
        }

        img {
          width: 100%;
          height: auto;
        }
      }
    }
    .text-holder {
      font-size: 2.4rem;
      line-height: 1.5;

      @include media-breakpoint-down(lg) {
        margin-bottom: 2.4rem;
      }

      @include media-breakpoint-down(md) {
        font-size: 1.6rem;
      }
    }
  }

  .single-title {
    padding-top: 12.8rem;
    padding-bottom: 8rem;

    @include media-breakpoint-down(md) {
      padding-top: 8rem;
      padding-bottom: 3.2rem;
    }

    .h2 {
      margin-bottom: 0;

      @include media-breakpoint-up(md) {
        text-align: center;
      }
    }
  }
}
</style>

<style lang="scss">
@import 'SafePlace.scss';
</style>
