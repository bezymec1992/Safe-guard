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
            <h1 class="h1">Safeplace software</h1>
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
        <h3 class="h2">Anonymous platform for everyone’s who needs help</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. P
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-006.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Anonymous platform for everyone’s who needs help</h3>
          <div class="text-holder">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec
              viverra. In posuere massa sed magna condimentum, eu gravida urna
              varius.
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
    <!-- <ResultsSection /> -->
    <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">
          We have a huge <br />
          background so we can <br />
          help you with your team
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis
            suscipit justo.
          </p>
          <router-link to="/services/software" class="btn btn-dark"
            >Need our help?</router-link
          >
        </div>
      </div>
      <div class="col-md-6 picture">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-007.png"
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

    <visual-section :bg="'img-008.png'" :class="'bg-img'"> </visual-section>
    <MoodSection />

    <txt-block :class="'txt-block-1 style1 safe-style'">
      <div class="col d-md-none">
        <h3 class="h2">Anonymous chat</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-009.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Anonymous chat</h3>
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
      <div class="col d-md-none mb-0">
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
        <h3 class="h2">Awareness program</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
          <router-link to="/services/software" class="btn btn-dark"
            >About awareness program</router-link
          >
        </div>
      </div>
      <div class="col-md-6 picture">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-0010.png"
            class="lazyload"
            alt="#"
          />
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
              ex. Nullam quis suscipit justo.
            </p>
            <router-link to="/services/software" class="btn btn-dark"
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
        </div>
      </div>
    </txt-block>

    <txt-block :class="'txt-block-2 style2 workshop'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          On- and Offline <br />
          workshops
        </h3>
        <div class="text-holder">
          <!-- mobile first -->
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
        </div>
      </div>
      <div class="col-md-6 phone-holder">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-0011.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-start">
        <div class="content-holder">
          <div class="text-rows">
            <div class="text-row">
              <h3 class="h2 text-capitalize">
                On- and Offline <br />
                workshops
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
              <ul>
                <li>Lorem ipsum dolor sit amet</li>
                <li>Phasellus vestibulum ac nisi nec viverra</li>
              </ul>
              <div class="text-holder"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder txt-mobile">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
          <ul>
            <li>Lorem ipsum dolor sit amet</li>
            <li>Phasellus vestibulum ac nisi nec viverra</li>
          </ul>
        </div>
      </div>
    </txt-block>

    <div class="statistic-section">
      <div class="container">
        <div class="row">
          <div class="text-holder row-text">
            <h2 class="h1">what can you find out in our app</h2>
            <p>We have created a lot of useful funtionalities for you</p>
          </div>
        </div>

        <div class="row row-items">
          <div
            v-for="item in statisticItems"
            :key="item.id"
            class="col-lg-3 col-md-6 col-sm-12"
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

    <!-- <GetIn>
      <template #title>
        <h2 class="title">Interested in our Safeplace Software? Contact us!</h2>
      </template>
    </GetIn> -->

    <div class="get-in">
      <div class="container">
        <div class="row">
          <slot name="title">
            <h2 class="h2">
              Interested in our Safeplace Software? <br />
              Contact us!
            </h2>
          </slot>
          <nuxt-link :to="to" class="btn btn-dark">Get on touch</nuxt-link>
        </div>
      </div>
    </div>

    <!-- <txt-block :class="'txt-block-2 style2 pt-0 reverse  safe-style'">
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
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
        </div>
      </div>
    </txt-block> -->
    <!-- <visual-section :bg="'img-104.png'" :class="'bg-img'"> </visual-section> -->
    <!-- 
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
    </div> -->
    <!-- <txt-block :class="'txt-block-2 style2'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          First we check group <br />
          dymanics
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
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
              <h3 class="h2 text-capitalize">
                First we check group <br />
                dymanics
              </h3>
              <div class="text-holder">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi
                  nec viverra. In posuere massa sed magna condimentum, eu
                  gravida urna varius.
                </p>
              </div>
            </div>
            <div class="text-row">
              <h3 class="h2 text-capitalize">
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
                <router-link to="/services/software" class="btn btn-dark"
                  >About awareness program</router-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Second - we create <br />
          awareness program
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis
            suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
          <router-link to="/services/software" class="btn btn-dark"
            >About awareness program</router-link
          >
        </div>
      </div>
    </txt-block> -->
    <!-- <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">
          We have a huge <br />
          background so we can <br />
          help you with your team
        </h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius. Aenean
            neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis
            suscipit justo.
          </p>
          <router-link to="/services/software" class="btn btn-dark"
            >Need our help?</router-link
          >
        </div>
      </div>
      <div class="col-md-6 picture">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-007.png"
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
            <router-link to="/services/software" class="btn btn-dark"
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
        </div>
      </div>
    </txt-block> -->
    <!-- <visual-section class="anonymous">
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
        <div class="col-md-6 anonymous-block">
          <div class="img-holder">
            <img
              data-src="@/assets/images/img-103.png"
              class="lazyload"
              alt="#"
            />
          </div>
        </div>
      </div>
    </visual-section> -->

    <!-- <get-in-touch-section class="get-in">
      <div class="container">
        <div class="row">
          <div class="text-holder">
            <h3 class="h3">Let’s protect your place and make it <br /> safe for everyone now</h3>
           <router-link to="/services/software" class="btn btn-dark "
              >Need our help?</router-link
            >
          </div>
        </div>
      </div>

    </get-in-touch-section> -->
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import MoodSection from '@/components/MoodSection/MoodSection.vue'
// import GetIn from '@/components/SafePlaces/GetIn.vue'

// import ResultsSection from '@/components/ResultsSection/ResultsSection.vue';

export default {
  name: 'SafePlaceSoftware',
  components: {
    IntroSection,
    MoodSection,
    // GetIn,

    // ResultsSection,
  },
  data() {
    return {
      statisticItems: [
        {
          id: 1,
          title: 'Day mood check',
          description: 'Check your mood every day to understand changes',
        },
        {
          id: 2,
          title: 'Anonymous chat',
          description: 'You can easily chat with our supporters  ',
        },
        {
          id: 3,
          title: 'Awareness program',
          description:
            'We will create special program how to improve your team ',
        },
        {
          id: 4,
          title: 'Online workshops',
          description: 'Online workshops',
        },
      ],
    }
  },

  props: {
    title: {
      type: String,
      default: 'title',
    },
    to: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>

<style lang="scss" scoped>
.safe-pages {
  .intro {
    overflow: hidden;
    background: linear-gradient(265.59deg, #5d90c6 0.16%, #c0cfee 76.73%);
    .intro-text {
      .h1 {
        max-width: 15rem;
      }
    }
    .text-holder {
      p {
        max-width: 48rem;
      }
    }
  }

  .mobile-holder {
    @include media-breakpoint-up(md) {
      position: absolute;
      right: 14.2rem;
      bottom: 0;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
}

.check-section {
  max-width: 124rem;
  margin: auto;
  margin-bottom: 10.5rem;
  @include media-breakpoint-down(md) {
    margin-bottom: 6.5rem;
  }
}
.safe-style {
  margin-bottom: 16rem;
  @include media-breakpoint-down(md) {
    margin-bottom: 3rem;
  }
}
.mb-0 {
  .text-holder {
    margin-bottom: 0;
  }
}

.digitalization {
  padding-left: 0 !important;
}

.statistic-section {
  max-width: 124rem;
  margin: auto;
  background-color: #efefef;
  color: #000;
  padding-top: 10.6rem;
  padding-bottom: 6rem;
  margin-bottom: 13rem;
  @include media-breakpoint-down(md) {
    margin-top: 8rem;
    padding-bottom: 7rem;
    margin-bottom: 11rem;
  }
  .text-holder {
    margin-bottom: 7rem;
    line-height: 2.5;
    @include media-breakpoint-down(md) {
      text-align: flex-start;
      margin-bottom: 1rem;
      line-height: 1.5;
    }
    .h1 {
      font-size: 4rem;
      @include media-breakpoint-down(md) {
        font-size: 2.5rem;
      }
    }
  }

  .row-items,
  .row-text {
    margin: auto;
    max-width: 106rem;
  }
  .statistic-item {
    max-width: 20rem;
    @include media-breakpoint-down(md) {
      max-width: 100%;
      margin-bottom: 3rem;
    }
    h3 {
      font-size: 2.8rem;
      color: #000;
      line-height: 1.3;
      @include media-breakpoint-down(lg) {
        text-align: left;
        max-width: 100%;
      }
      @include media-breakpoint-down(md) {
        font-size: 2rem;
      }
    }
    p {
      line-height: 1.7;
      @include media-breakpoint-down(lg) {
        text-align: left;
      }
      @include media-breakpoint-down(md) {
        font-size: 1.5rem;
      }
    }
    .text-holder {
      @include media-breakpoint-down(lg) {
        margin: 0;
      }
    }
  }
  .col-lg-3,
  .col-md-6,
  .col-sm-12 {
    padding: 0;
  }
  .row-text {
    margin-bottom: 6rem;
    @include media-breakpoint-down(md) {
      margin-bottom: 3rem;
    }
  }
}
.text-holder {
  p {
    margin-bottom: 2.5rem;
  }
}

.workshop {
  margin-bottom: 12rem;
  @include media-breakpoint-down(md) {
    margin-bottom: 6rem;
  }
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

li {
  line-height: 2.5;
}

.text-mobile {
  p {
    margin-bottom: 2rem;
  }
}

.reverse {
  margin-bottom: 18.8rem;
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

  .get-in {
    padding-bottom: 24rem;

    @include media-breakpoint-down(md) {
      padding-bottom: 12rem;
    }

    .h2 {
      text-align: center;
      margin-bottom: 4rem;
      text-transform: inherit;
    }

    .btn {
      margin: auto;
      justify-content: center;
      max-width: 30rem;
    }
  }
}
</style>

<style lang="scss">
@import 'SafePlace.scss';
</style>
