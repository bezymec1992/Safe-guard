<template>
  <div class="safe-pages">
    <intro-section class="intro">
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
          <div class="col-md-6 d-md-flex flex-column intro-text">
            <h1 class="h1">How safe is your place?</h1>
            <div class="text-holder d-none d-md-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id,
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-md-row flex-column align-items-md-center justify-content-center justify-content-md-end balloon-wrap"
          >
            <div class="mobile-holder">
              <img
                data-src="@/assets/images/img-005.png"
                class="lazyload ballon"
                alt="img description"
              />
            </div>

            <div class="mobiles">
              <img
                data-src="@/assets/images/img-0013.png"
                class="lazyload ballon"
                alt="img description"
              />
            </div>
            <div class="text-holder d-md-none balloon-p-txt">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id,
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
    <txt-block :class="'txt-block-1 style1 safe-style'">
      <div class="col d-md-none">
        <span class="item-number">/01</span>
        <h3 class="h2">We scan your team and check which problems it has</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. =
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-001.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <span class="item-number">/01</span>
          <h3 class="h2">
            We scan your team and <br />
            check which problems it has
          </h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex. =
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

    <txt-block :class="'txt-block-2 style2 pt-0 reverse safe-style'">
      <div class="col d-md-none">
        <span class="item-number">/02</span>
        <h3 class="h2">
          Transform received <br />
          results into clear <br />
          metodology
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. =
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-002.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder digitalization">
          <span class="item-number">/02</span>
          <h3 class="h2">
            Transform received <br />
            results into clear metodology
          </h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex. =
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
    <visual-section class="anonymous">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-xl-center anonymous-text">
          <div class="content-holder">
            <h2 class="h1 anim-item">
              Team <br />
              Protection
            </h2>
            <div class="text-holder anim-item">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id, consectetur efficitur neque.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6 anonymous-block">
          <div class="img-holder protection">
            <img
              data-src="@/assets/images/group-01.png"
              class="lazyload"
              alt="#"
            />
          </div>
        </div>
      </div>
    </visual-section>

    <txt-block :class="'txt-block-1 style1 safe-style a-program'">
      <div class="col d-md-none">
        <span class="item-number">/03</span>
        <h3 class="h2">Create Awareness Program</h3>
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
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-003.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <span class="item-number">/03</span>
          <h3 class="h2">
            Create Awareness <br />
            Program
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

    <awareness-program class="awareness">
      <div class="row g-0">
        <div class="awareness-wrapper">
          <div class="content-row">
            <h2 class="h1 anim-item">
              Awareness Program will help to understand
            </h2>
          </div>
          <div class="content-wrap">
            <div class="col-md-6 d-flex align-items-xl-center points">
              <div class="text-holder anim-item">
                <ul>
                  <li>Where did problems come from</li>
                  <li>How to improve your team</li>
                </ul>
              </div>
            </div>
            <div class="btns-holder">
              <router-link
                to="/services/brand-protection/awareness-program"
                class="btn btn-dark d-md-inline-flex justify-content-center anim-item btn-style"
                >View More</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </awareness-program>

    <txt-block :class="'txt-block-2 style2 pt-0 reverse safe-style final'">
      <div class="col d-md-none">
        <span class="item-number">/04</span>
        <h3 class="h2">
          Scan again to see and <br />
          compare final results
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. =
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-004.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder digitalization">
          <span class="item-number">/04</span>
          <h3 class="h2">
            Scan again to see and <br />
            compare final results
          </h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex. =
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

    <div class="wfrom-section">
      <div class="additional-section-wrapper">
        <div class="container">
          <div class="more-wrapper">
            <h2 class="h2">Want to know how to train team by yourself?</h2>

            <router-link
              to="/contact-us"
              class="btn btn-arrow more-btn-desktop"
            >
              View More
              <span class="arrow-wrapper"
                ><span class="icon-holder"
                  ><img
                    data-src="@/assets/images/icon-02.svg"
                    class="lazyload"
                    alt="#" /></span></span
            ></router-link>
          </div>
          <div class="row">
            <div class="text-holder">
              <p>Check our programs we have created and we will help you!</p>
              <router-link to="/contact-us" class="btn btn-arrow more-btn">
                View More
                <span class="arrow-wrapper"
                  ><span class="icon-holder"
                    ><img
                      data-src="@/assets/images/icon-02.svg"
                      class="lazyload"
                      alt="#" /></span></span
              ></router-link>
            </div>

            <div
              class="col-md-6 d-md-flex align-items-md-start justify-content-md-center"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'

export default {
  name: 'SafePlaceServices',
  components: {
    IntroSection,
  },
}
</script>

<style lang="scss" scoped>
.safe-pages {
  .intro-section {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    background: linear-gradient(265.59deg, #5d90c6 0.16%, #c0cfee 76.73%);
    height: 95vh;

    @include media-breakpoint-down(md) {
      position: relative;
      background: linear-gradient(189.54deg, #5d90c6 -14.43%, #c0cfee 95.18%);
      min-height: 80vh;
    }

    .intro-text {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .h1 {
        max-width: 32rem;
      }
    }
    .text-holder {
      p {
        max-width: 40rem;
      }
    }

    .mobile-holder {
      max-width: 55rem;
      @include media-breakpoint-up(md) {
        position: absolute;
        right: 20.2rem;
        bottom: 112px;
      }
      @include media-breakpoint-down(md) {
        display: none;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .mobiles {
      display: none;
      @include media-breakpoint-down(md) {
        display: block;
      }
    }
  }

  .safe-style {
    .item-number {
      display: block;
      margin-bottom: 3.2rem;
      font-size: 3rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 1.8rem;
        font-size: 2rem;
      }
    }
  }

  .a-program {
    max-width: 126rem;
    margin: auto;
  }

  .txt-block {
    margin-top: 13rem;
    @include media-breakpoint-down(md) {
      margin-top: 6rem;
    }
    .phone-holder {
      align-self: center;
      .img-holder {
        display: flex;
        justify-content: center;
        img {
          width: 100%;
          max-width: 35rem;
        }
      }
    }
  }

  .final {
    max-width: 126rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 7rem;
    @include media-breakpoint-down(md) {
      margin-top: 4rem;
    }
    .content-holder {
      padding-left: 0;
    }
    .digitalization {
      .text-holder {
        max-width: 47rem !important;
      }
    }
  }

  .reverse {
    margin-bottom: 15.8rem;
    @include media-breakpoint-down(md) {
      margin-bottom: 4.8rem;
    }
  }

  .picture {
    position: relative;
    .img-holder {
      img {
        width: 100%;
        height: auto;
      }
    }
    .icon-holder {
      display: none;
      position: absolute;
      left: 24%;
      top: 8%;
      max-width: 35rem;
      img {
        width: 100%;
      }
    }
  }
  .btns-holder {
    @include media-breakpoint-down(md) {
      margin: auto;
    }
  }
  .btn-style {
    display: flex;
    justify-content: center;
    align-self: center;
    min-width: 30rem;
  }

  .points {
    @include media-breakpoint-down(sm) {
      align-self: center;
    }
  }

  .wfrom-section {
    padding-bottom: 14rem;
    background-color: #efefef;
    @include media-breakpoint-down(md) {
      padding-bottom: 10.3rem;
    }
    .additional-section-wrapper {
      width: 100%;

      align-self: center;
      .more-wrapper {
        display: flex;
        @include media-breakpoint-down(md) {
          flex-direction: column;
        }
      }
      .more {
        align-self: center;
        @include media-breakpoint-down(md) {
          align-self: flex-start;
        }
      }
      .container {
        max-width: 90rem !important;
      }

      .more-btn-desktop {
        margin-top: 2rem;
        min-width: 20.3rem;
        margin-left: 10rem;
        display: flex;
        @include media-breakpoint-down(md) {
          display: none;
        }
      }
      .more-btn {
        display: none;
        @include media-breakpoint-down(md) {
          display: flex;
        }
      }

      .text-holder {
        margin-bottom: 0;
        p {
          margin-bottom: 5rem;
        }
      }
      .h2 {
        max-width: 60rem;
      }
    }
  }
  .bg-img {
    background-position-x: right !important;
    background-image: url(/_nuxt/assets/images/img-008.png);
    opacity: 1;
  }
}
</style>

<style lang="scss">
@import 'SafePlace.scss';
@import 'SafePlaceServices.scss';
</style>
