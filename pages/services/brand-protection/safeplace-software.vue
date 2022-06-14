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

            <div class="mobiles">
              <img
                data-src="@/assets/images/img-0013.png"
                class="lazyload ballon"
                alt="img description"
              />
            </div>
            <div class="text-holder d-md-none balloon-p-txt">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sit
                amet, consec
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

    <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">How does it work?</h3>
        <div class="text-holder">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In
            posuere massa sed magna condimentum, eu gravida urna varius.
          </p>
          <!-- <router-link to="/services/software" class="btn btn-dark"
            >Need our help?</router-link
          > -->
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
          <h3 class="h2">How does it work?</h3>
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

    <visual-section :bg="'img-008.png'" :class="'bg-img double-phone'">
    </visual-section>

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

        <!--          BUTTON          -->

        <!-- <router-link to="/services/software" class="btn btn-dark"
            >About awareness program</router-link
          > -->
      </div>
    </txt-block>

    <txt-block :class="'txt-block-2 style2 pt-0 reverse a-program'">
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
              ex.
            </p>
            <router-link
              to="/services/brand-protection/awareness-program"
              class="btn btn-dark"
              >About awareness program</router-link
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
          <router-link
            to="/services/brand-protection/awareness-program"
            class="btn btn-dark"
            >Awareness program</router-link
          >
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
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
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
        <h2 class="h1">what can you find out in our app</h2>
        <p class="subtitle">
          We have created a lot of useful funtionalities for you
        </p>

        <div class="row row-items">
          <div v-for="item in statisticItems" :key="item.id" class="statistic">
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

    <GetIn>
      <template #title>
        <h2 class="h2">Interested in our Safeplace Software? Contact us!</h2>
      </template>
    </GetIn>
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import MoodSection from '@/components/MoodSection/MoodSection.vue'
import GetIn from '@/components/SafePlaces/GetIn.vue'

export default {
  name: 'SafePlaceSoftware',
  components: {
    IntroSection,
    MoodSection,
    GetIn,
  },
  layout: 'safe-layout',
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
          description: 'We have prepared a video-content for you',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.safe-pages {
  .intro {
    position: relative;
    overflow: hidden;
    background: linear-gradient(265.59deg, #5d90c6 0.16%, #c0cfee 76.73%);
    @include media-breakpoint-down(md) {
      min-height: 96vh;
    }
    .intro-text {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      .h1 {
        max-width: 15rem;
        margin-bottom: 0;
      }
    }
    .text-holder {
      margin-top: 3rem;
      max-width: 41.4rem;
      @include media-breakpoint-up(xxl) {
        max-width: 44.4rem;
      }
      p {
        max-width: 48rem;
      }
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
      margin-bottom: 3rem;
    }
    // @include media-breakpoint-down(sm) {
    //   position: absolute;
    //   right: 3rem;
    //   bottom: 12rem;
    // }
  }

  .balloon-p-txt {
    p {
      @include media-breakpoint-down(md) {
        position: absolute;
        top: 41rem;
      }
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
.a-program {
  .text-holder {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

.statistic-section {
  background-color: #efefef;
  max-width: 124rem;
  margin: auto;
  margin-bottom: 13rem;
  overflow: hidden;

  .statistic-item {
    margin-bottom: 3.2rem;
    .text-holder {
      text-align: left;
      margin-left: 0;
    }
  }

  .h1 {
    font-size: 4rem;
    text-transform: uppercase;
    max-width: 93.5rem;
    margin-bottom: 1rem;
    margin-left: 3.5rem;
    @include media-breakpoint-down(lg) {
      margin-left: 0;
    }
    @include media-breakpoint-down(md) {
      font-size: 2.5rem;
      margin-bottom: 1.7rem;
      margin-left: 0;
    }
  }
  .subtitle {
    margin-bottom: 7rem;
    margin-left: 3.5rem;
    @include media-breakpoint-down(lg) {
      margin-left: 0;
      margin-bottom: 4rem;
    }
  }
  .row-items {
    margin-left: 3.5rem;
    display: grid;
    grid-template-columns: 220px 220px 250px 220px;
    gap: 8rem;
    @include media-breakpoint-down(xl) {
      grid-template-columns: 220px 220px 250px 220px;
      gap: 4rem;
    }
    @include media-breakpoint-down(lg) {
      margin-left: 0;
      grid-template-columns: 1fr 1fr;
    }
    @include media-breakpoint-down(md) {
      grid-template-columns: 1fr;
      gap: 0;
    }

    .statistic:first-child {
      h3 {
        max-width: 21rem;
      }
    }

    h3 {
      text-align: left;
      font-weight: 500;
      font-size: 2.8rem;
      margin-bottom: 1rem;
      line-height: 1.1;
      @include media-breakpoint-down(md) {
        font-size: 2rem;
      }
    }

    .text-holder {
      @include media-breakpoint-down(md) {
        max-width: 70rem;
      }
    }
    p {
      text-align: left;
    }
  }
  .statistic {
    padding: 0;
  }
  @include media-breakpoint-down(md) {
    min-height: 63vh;
    margin-right: 2.4rem;
    margin-left: 2.4rem;
  }
  @include media-breakpoint-down(sm) {
    padding-top: 8rem;
    margin-bottom: 11rem;
    min-height: 68vh;
  }
}

.text-holder {
  p {
    margin-bottom: 2.5rem;
    line-height: 1.8;
  }
}

.workshop {
  margin-bottom: 12rem;
  @include media-breakpoint-down(md) {
    margin-bottom: 6rem;
  }
  .content-holder {
    @include media-breakpoint-up(xxl) {
      padding-left: 10rem;
    }
  }
  &.reverse {
    @include media-breakpoint-up(xxl) {
      padding-left: 0rem;
    }
    @include media-breakpoint-down(xxl) {
      padding-left: 0rem;
    }
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
        max-width: 48rem;
      }
    }
  }
  .text-holder {
    @include media-breakpoint-down(md) {
      margin-bottom: 0;
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
