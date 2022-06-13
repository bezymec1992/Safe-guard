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
          <div
            class="col-md-6 d-md-flex flex-column justify-content-center intro-text"
          >
            <h1 class="h1">Safe place for everyone</h1>
            <div class="text-holder">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id, .
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-md-row flex-column align-items-md-center justify-content-center justify-content-md-end balloon-wrap"
          >
            <div class="balloon-holder">
              <!-- <img
                data-src="@/assets/images/bg-1.png"
                class="lazyload ballon"
                alt="img description"
              /> -->
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
        <h3 class="h2">Why did we decide to create SafePlace</h3>
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
          <img data-src="@/assets/images/bg-1.png" class="lazyload" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Why did we decide to create SafePlace</h3>
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

    <div class="results-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6 result-paragraph">
            <h2 class="h2 text-capitalize anim-item">
              What we have <br />
              discoveder during our <br class="d-none d-md-block" />
              work with people <br class="d-md-none" />
            </h2>
            <div class="text-holder anim-item">
              <p>
                We always trying to collect and compare our data during all the
                time we are working, We want share with you some popular
                problems in different types of companies in %
              </p>
            </div>
            <div class="btns-holder">
              <router-link
                to="/services/brand-protection/safeplace-services"
                class="btn btn-dark d-none d-md-inline-flex justify-content-center anim-item"
                >How do we check a place?</router-link
              >
            </div>
          </div>
          <div class="col-md-6 d-flex align-items-center">
            <div class="row row-items">
              <div v-for="item in resultsItems" :key="item.id" class="col-6">
                <div class="result-item anim-item-2">
                  <div class="img-holder">
                    <img
                      :data-src="require(`@/assets/images/${item.image}`)"
                      class="lazyload"
                      :alt="item.alt"
                    />
                  </div>
                  <div class="text">
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 d-md-none anim-item-2 btn-style">
            <router-link
              to="/services/brand-protection/safeplace-services"
              class="btn btn-dark"
              >How do we check a place?</router-link
            >
          </div>
        </div>
      </div>
    </div>

    <txt-block :class="'txt-block-2 style2 pt-0 reverse safe-style'">
      <div class="col d-md-none">
        <h3 class="h2">
          Due to a global <br />
          digitalization the <br />
          influence can be not direct
        </h3>
        <div class="text-holder">
          <p>
            imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere
            massa sed magna condimentum, eu gravida urna varius. Aenean neque
            orci, ultrices
          </p>
        </div>
      </div>
      <div class="col-md-6 safe-style-img">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-101.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder digitalization">
          <h3 class="h2">
            Due to a global <br />
            digitalization the <br />
            influence can be not direct
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
      <div class="col d-md-none mobile-text">
        <div class="text-holder pb-none">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
        </div>
      </div>
    </txt-block>
    <visual-section :bg="'img-104.png'" :class="'bg-img'"> </visual-section>

    <div class="statistic-section">
      <div class="container">
        <div class="row">
          <div class="text-holder">
            <h2 class="h1">Our work area (scope)</h2>
            <p>We can work everywhere where people work together</p>
          </div>
        </div>

        <div class="row">
          <div
            v-for="item in statisticItems"
            :key="item.id"
            class="col-lg-4"
            :class="{ 'col-md-6': item.id < 3 }"
          >
            <div class="statistic-item">
              <h3>{{ item.title }}</h3>
              <div class="text-holder">
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <txt-block :class="'txt-block-2 style2 phone'">
      <div class="col d-md-none">
        <!-- Mobile -->
        <h3 class="h2 inherit">
          First we check group <br />
          dymanics
        </h3>
        <div class="text-holder">
          <p>
            imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere
            massa sed magna condimentum, eu gravida urna varius. Aenean neque
            orci, ultrices
          </p>
        </div>
      </div>
      <div class="col-md-6 phone-holder">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-102.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <div class="text-rows">
            <div class="text-row">
              <!-- Desktop -->
              <h3 class="h2 inherit">
                First we check group <br />
                dymanics
              </h3>
              <div class="text-holder">
                <p>
                  imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
                  posuere massa sed magna condimentum, eu gravida urna varius.
                  Aenean neque orci, ultrices
                </p>
              </div>
            </div>
            <div class="text-row">
              <!-- desktop -->
              <h3 class="h2 inherit">
                Second - we create <br />
                awareness program
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
                <router-link
                  to="/services/brand-protection/awareness-program"
                  class="btn btn-dark"
                  >About awareness program</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <!-- Mobile under  -->
        <h3 class="h2 inherit">
         Second - we create <br />
          awareness program
        </h3>
        <div class="text-holder txt-mobile">
          <p>
            imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere
            massa sed magna condimentum, eu gravida urna varius. Aenean neque
            orci, ultrices
          </p>
          <router-link
            to="/services/brand-protection/awareness-program"
            class="btn btn-dark btn-style"
            >About awareness program</router-link
          >
        </div>
      </div>
    </txt-block>

    <txt-block :class="'txt-block-2 style2 pt-0 reverse safeguard'">
      <div class="col d-md-none">
        <h3 class="h2">
          We have a huge <br />
          background so we can <br />
          help you with your team
        </h3>
        <div class="text-holder">
          <p>
            imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere
            massa sed magna condimentum, eu gravida urna varius. Aenean neque
            orci, ultrices
          </p>
        </div>
      </div>
      <div class="col-md-6 picture">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-105.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            We have a huge <br />
            background so we can <br />
            help you with your team
          </h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius. Aenean neque orci, ultrices ac fermentum id, bibendum a
              ex. Nullam quis suscipit justo.
            </p>
            <router-link to="/contact-us" class="btn btn-dark"
              >Need our help?</router-link
            >
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
          <router-link to="/contact-us" class="btn btn-dark btn-style"
            >Need our help?</router-link
          >
        </div>
      </div>
    </txt-block>

    <visual-section class="anonymous">
      <div class="row g-0">
        <div class="col-md-6 d-flex align-items-md-center anonymous-text">
          <div class="content-holder">
            <h2 class="h1 anim-item">
              Anonymous <br />
              software
            </h2>
            <div class="text-holder anim-item">
              <p>
                Closed and anonymous platform where people can freely report if
                something has happened.
              </p>
              <nuxt-link
                to="/services/brand-protection/safeplace-software"
                class="btn btn-arrow d-none d-md-inline-flex"
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
            <img
              data-src="@/assets/images/img-103.png"
              class="lazyload"
              alt="#"
            />
          </div>

          <nuxt-link
            to="/services/brand-protection/safeplace-software"
            class="btn btn-arrow d-md-none"
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
    </visual-section>

    <GetIn />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection'
import GetIn from '@/components/SafePlaces/GetIn'

export default {
  name: 'SafePlace',
  components: {
    IntroSection,
    GetIn,
  },
  layout: 'safe-layout',

  data() {
    return {
      resultsItems: [
        {
          id: 1,
          alt: '#',
          description: 'megalomania',
          image: 'img-043.svg',
        },
        {
          id: 2,
          alt: '#',
          description: 'sexual context',
          image: 'img-044.svg',
        },
        {
          id: 3,
          alt: '#',
          description: 'aggression & bullying',
          image: 'img-045.svg',
        },
        {
          id: 4,
          alt: '#',
          description: 'non-sexual context',
          image: 'img-046.svg',
        },
      ],
      statisticItems: [
        {
          id: 1,
          title: 'Different types of companies',
          description: 'Corparate companies, restaurant business, stores etc',
        },
        {
          id: 2,
          title: 'Organizations',
          description: 'Charity and volonteer organizations ',
        },
        {
          id: 3,
          title: 'Other teams',
          description: 'Sport teams,  clubs, education (courses)',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.safe-pages {
  .intro {
    overflow: hidden;
    min-height: 90vh;
  }

  .intro-section {
    position: relative;
    margin-bottom: 14rem;
    @include media-breakpoint-down(md) {
      padding-top: 11rem;
      padding-bottom: 35.4rem;
      margin-bottom: 0;
    }
  }
  .results-section {
    max-width: 122rem;
    margin: auto;
    margin-bottom: 10.5rem;
    @include media-breakpoint-down(md) {
      margin-bottom: 6.5rem;
    }
    .result-paragraph {
      margin-top: 4rem;
      @include media-breakpoint-down(md) {
        margin-top: 1rem;
      }
    }
  }
  .safe-style {
    max-width: 124rem;
    margin: auto;
    margin-bottom: 16rem;
    @include media-breakpoint-down(md) {
      margin-bottom: 3rem;
    }
    h3 {
      margin-bottom: 2rem;
    }
    .content-holder {
      max-width: 52rem;
    }
    .image {
      .img-holder {
        background-color: #ffd027;
        img {
          width: 100%;
          min-height: 39rem;
          object-fit: cover;
          object-position: right;
        }
      }
    }
  }

  .anonymous {
    position: relative;
    padding-top: 0;
    padding-bottom: 0;
    max-width: 1240px;
    margin: auto;
    margin-bottom: 15rem;
    margin-top: 6.5rem;
    min-height: 55rem;
    overflow: hidden;

    @include media-breakpoint-down(md) {
      padding-bottom: 8rem;
      margin-top: 4.8rem;
      margin-bottom: 10rem;
    }

    @include media-breakpoint-down(sm) {
      margin-bottom: 7rem;
      min-height: 70vh;
    }

    .container {
      padding-right: 0;
    }
    .img-holder {
      @include media-breakpoint-up(md) {
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 50rem;
      }

      @include media-breakpoint-down(md) {
        // max-width: 100%;
        position: relative;
        right: 0;
        min-width: 805;
      }

      @include media-breakpoint-down(sm) {
        margin: 0 0 0 -13rem;
        min-width: 52rem;
      }

      img {
        width: 100%;
        object-fit: cover;
      }
    }

    .protection {
      position: absolute;
      right: 4.6rem;
      bottom: 0;
      // width: 120.5rem;
      img {
        width: 100%;
        height: auto;
      }
      @include media-breakpoint-down(md) {
        width: 39rem !important;
        right: 0;
      }
    }
  }

  .anonymous-text {
    padding-top: 12rem;
    justify-content: center;
    @include media-breakpoint-down(md) {
      padding-top: 7rem;
      justify-content: flex-start;
      position: relative;
      z-index: 4;
    }

    p {
      margin-bottom: 35px;
    }
    .content-holder {
      z-index: 10;
      .h1 {
        @include media-breakpoint-down(md) {
          font-size: 2.5rem;
          line-height: 1.5;
        }
      }
    }
  }

  .mobile-text {
    .pb-none {
      margin-bottom: 0;
    }
  }

  .digitalization {
    padding-left: 0 !important;
    margin-left: 0;
    .text-holder {
      max-width: 47rem !important;
    }
  }

  .phone {
    .phone-holder {
      .img-holder {
        // max-width: 29rem;
        margin: auto;
        @include media-breakpoint-down(md) {
          margin-bottom: 5.6rem;
        }
      }
    }
  }

  .statistic-section {
    max-width: 144rem;
    margin: auto;
    background-color: #262626;
    color: #fff;
    @include media-breakpoint-down(md) {
      padding-bottom: 0;
    }
    .text-holder {
      margin-bottom: 7rem;
      line-height: 2.5;
      @include media-breakpoint-down(md) {
        line-height: 1.5;
        margin-bottom: 3.5rem;
        margin-left: 0;
      }
      .h1 {
        font-size: 40px;
        @include media-breakpoint-down(md) {
          font-size: 2.5rem;
          margin-bottom: 2rem;
        }
      }
    }
    .statistic-item {
      h3 {
        font-size: 2.8rem;
        color: #ffd027;
        line-height: 1.5;
        @include media-breakpoint-down(md) {
          font-size: 2rem;
          text-align: left;
        }
      }

      p {
        line-height: 2;
        @include media-breakpoint-down(md) {
          text-align: left;
        }
      }
      @include media-breakpoint-down(md) {
        margin-bottom: 3rem;
      }
    }
  }

  .txt-mobile {
    margin-bottom: 0;
  }

  .btn-style {
    display: flex;
    justify-content: center;
  }

  .txt-block {
    margin-top: 13rem;
    @include media-breakpoint-down(md) {
      margin-top: 8rem;
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

  .reverse {
    @include media-breakpoint-down(md) {
      margin-left: 0;
      margin-bottom: 4.8rem;
    }
  }

  .safeguard {
    margin-bottom: 18.8rem;
    @include media-breakpoint-up(xxl) {
      margin-left: 0;
    }
    @include media-breakpoint-down(md) {
      margin-bottom: 10rem;
    }
    .content-holder {
      padding-left: 5rem !important;
      @include media-breakpoint-down(lg) {
        padding-left: 0 !important;
      }
    }

    @include media-breakpoint-down(xl) {
      margin-left: 3rem;
    }
    @include media-breakpoint-down(md) {
      margin-left: 0;
    }
  }

  .inherit {
    text-transform: inherit;
  }

  .picture {
    position: relative;

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

  .bg-img {
    max-width: 144rem;
    margin: auto;
  }
}

.workshop {
}

.btn-style {
  .btn-dark {
  min-width: 30.5rem;
  @include media-breakpoint-down(m) {
    padding: 1.3rem 6.4rem;
  }
}
}
</style>

<style lang="scss">
@import 'SafePlace.scss';
</style>
