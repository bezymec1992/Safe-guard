<template>
  <div class="safe-pages">
    <intro-section class="d-flex">
      <div class="container">
        <div class="row flex-column flex-md-row">
          <div
            class="col-md-8 col-lg-6 d-flex flex-column justify-content-between justify-content-md-end flex-grow-1"
          >
            <h1 class="h1">
              Safeplace <br />
              software
            </h1>
            <div class="text-holder d-none d-md-block">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id,
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="img-holder">
              <img
                src="@/assets/images/img-128.png"
                alt="Safe place for everyone"
              />
            </div>
            <div class="text-holder d-md-none">
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
          <picture>
            <source
              srcset="@/assets/images/img-133.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-147.jpg" class="lazyload" alt="#" />
          </picture>
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
        </div>
      </div>
      <div class="col-md-6 picture">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-130.png"
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
              ex.
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

    <div class="full-img-section">
      <div class="img-holder">
        <picture>
          <source
            srcset="@/assets/images/img-131.jpg"
            media="(min-width: 768px)"
            type="image/jpg"
          />
          <img src="@/assets/images/img-132.jpg" />
        </picture>
      </div>
    </div>

    <MoodSection />

    <txt-block class="txt-block-2 style2 safe-style reverse">
      <div class="col d-md-none">
        <h3 class="h2">On- and Offline workshops</h3>
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
      <div class="col-md-6 image">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-124.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            On- and Offline <br />
            workshops
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
          <ul class="mb-5">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Phasellus vestibulum ac nisi nec</li>
          </ul>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam
            quis suscipit justo. Vestibulum at turpis euismod, fermentum
          </p>
        </div>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Phasellus vestibulum ac nisi nec</li>
        </ul>
      </div>
    </txt-block>

    <div class="find-section">
      <div class="container">
        <h2 class="h2 text-md-center">what can you find out in our app</h2>
        <div class="row">
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
              <div class="icon-holder">
                <img src="@/assets/images/icon-011.svg" alt="Day mood check" />
              </div>
              <div class="content-holder">
                <h3>
                  Day mood <br class="d-none d-md-block" />
                  check
                </h3>
                <div class="text-holder">
                  <p>Check your mood every day to understand changes</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
              <div class="icon-holder">
                <img src="@/assets/images/icon-012.svg" alt="Day mood check" />
              </div>
              <div class="content-holder">
                <h3>
                  Anonymous <br class="d-none d-md-block" />
                  chat
                </h3>
                <div class="text-holder">
                  <p>You can easily chat with our supporters</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
              <div class="icon-holder">
                <img src="@/assets/images/icon-013.svg" alt="Day mood check" />
              </div>
              <div class="content-holder">
                <h3>
                  Awareness <br class="d-none d-md-block" />
                  program
                </h3>
                <div class="text-holder">
                  <p>We will create special program how to improve your team</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
              <div class="icon-holder">
                <img src="@/assets/images/icon-014.svg" alt="Day mood check" />
              </div>
              <div class="content-holder">
                <h3>
                  Online <br class="d-none d-md-block" />
                  workshops
                </h3>
                <div class="text-holder">
                  <p>We have prepared a video-content for you</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
              <div class="icon-holder">
                <img src="@/assets/images/icon-015.svg" alt="Day mood check" />
              </div>
              <div class="content-holder">
                <h3>
                  News and <br class="d-none d-md-block" />
                  updates
                </h3>
                <div class="text-holder">
                  <p>Latest news and updates from Safeplace team</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
              <div class="icon-holder">
                <img src="@/assets/images/icon-016.svg" alt="Day mood check" />
              </div>
              <div class="content-holder">
                <h3>
                  Ideas how to <br class="d-none d-md-block" />
                  improve a team
                </h3>
                <div class="text-holder">
                  <p>New articles and posts for employees</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
              <div class="icon-holder">
                <img src="@/assets/images/icon-017.svg" alt="Day mood check" />
              </div>
              <div class="content-holder">
                <h3>
                  Events and <br class="d-none d-md-block" />
                  agenda
                </h3>
                <div class="text-holder">
                  <p>Info about new Safeplace meeting & workshops</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-6 col-md-4 col-lg-3">
            <div class="item">
              <div class="icon-holder">
                <img src="@/assets/images/icon-018.svg" alt="Day mood check" />
              </div>
              <div class="content-holder">
                <h3>
                  Awareness <br class="d-none d-md-block" />
                  quiz
                </h3>
                <div class="text-holder">
                  <p>Check your awareness with our quiz</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="work-section">
      <div class="container">
        <div class="img-holder">
          <img
            src="@/assets/images/img-134.png"
            alt="We work for your safety"
          />
        </div>
        <h2 class="h2">We work for your safety</h2>
        <div class="text-holder">
          <p>
            Condimentum, eu gravida urna varius. Aenean neque orci, ultrices ac
            fermentum id, bibendum a ex. Nullam quis suscipit justo. Vestibulum
            at turpis euismod, fermentum
          </p>
        </div>
      </div>
    </div>
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
import MoodSection from '@/components/MoodSection/MoodSection'
import ContactSection from '@/components/ContactSection/ContactSection'
import TxtBlock from '@/components/TxtBlock/TxtBlock'

export default {
  name: 'SafePlaceSoftware',
  components: {
    IntroSection,
    MoodSection,
    ContactSection,
    TxtBlock,
  },
  layout: 'safe-layout',
}
</script>

<style lang="scss" scoped>
.safe-pages {
  .intro-section {
    overflow: hidden;
    background: #ebebeb;

    .container {
      position: relative;
    }

    .img-holder {
      @include media-breakpoint-up(md) {
        position: absolute;
        bottom: -11.3rem;
        right: 0;
        width: 65%;
      }

      @include media-breakpoint-down(md) {
        margin-top: -15rem;
        margin-right: -8rem;
        margin-left: -22rem;
        margin-bottom: -1rem;
      }

      @include media-breakpoint-down(sm) {
        margin-top: -14rem;
        margin-right: -4rem;
        margin-left: -14rem;
        margin-bottom: -1rem;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .full-img-section {
    max-width: 144rem;
    width: 100%;
    margin: auto;

    .img-holder {
      img {
        width: 100%;
        height: auto;
      }
    }
  }

  .find-section {
    overflow: hidden;

    .container {
      max-width: 120rem;
    }

    .row {
      @include media-breakpoint-up(lg) {
        @include grid-gutter(4rem);
      }

      @include media-breakpoint-up(xl) {
        @include grid-gutter(8rem);
      }
    }

    .h2 {
      margin-bottom: 7.2rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 3.2rem;
      }
    }

    .item {
      margin-bottom: 7rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 4rem;
      }

      @include media-breakpoint-down(sm) {
        display: flex;
      }
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 2.8rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 0.6rem;
        font-size: 2.4rem;
      }
    }

    .icon-holder {
      max-width: 6rem;
      margin-bottom: 2rem;

      @include media-breakpoint-down(md) {
        min-width: 4.8rem;
        max-width: 4.8rem;
        margin-right: 2.4rem;
      }

      img {
        width: 100%;
      }
    }

    .text-holder {
      font-size: 1.6rem;
    }
  }

  .work-section {
    padding-top: 5rem;
    padding-bottom: 12rem;

    @include media-breakpoint-down(md) {
      overflow: hidden;
      padding-top: 6rem;
      padding-bottom: 11rem;
    }

    .img-holder {
      max-width: 79.2rem;
      margin: auto auto 6.5rem;

      @include media-breakpoint-down(md) {
        margin-left: -2.4rem;
        margin-right: -2.4rem;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .h2 {
      margin-bottom: 1.2rem;
      text-align: center;
    }

    .text-holder {
      max-width: 59.7rem;
      margin: auto;
      font-size: 1.8rem;
      text-align: center;

      @include media-breakpoint-down(md) {
        font-size: 1.6rem;
      }
    }
  }
}
</style>

<style lang="scss">
@import 'SafePlace.scss';
</style>
