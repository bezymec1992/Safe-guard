<template>
  <div class="safe-pages">
    <intro-section class="d-flex">
      <div class="container">
        <div class="row flex-column flex-md-row">
          <div
            class="col-md-8 col-lg-6 d-flex flex-column justify-content-between justify-content-md-end flex-grow-1"
          >
            <h1 class="h1">
              Our live <br class="d-md-none" />
              program
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
                src="@/assets/images/img-136.png"
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
        <h3 class="h2">Live program</h3>
        <div class="text-holder">
          <p>
            Here we work together with one or more of our specialists on sight
            to make sure that work environment gets improved.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <picture>
            <source
              srcset="@/assets/images/img-137.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-138.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Live program</h3>
          <div class="text-holder">
            <p>
              Here we work together with one or more of our specialists on sight
              to make sure that work environment gets improved. We work together
              on the core of the issue.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>We work together on the core of the issue.</p>
        </div>
      </div>
    </txt-block>

    <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">Departement approach</h3>
        <div class="text-holder">
          <p>
            We work together with the dept were there the urgency is the
            highest.
          </p>
        </div>
      </div>
      <div class="col-md-6 picture">
        <div class="img-holder">
          <picture>
            <source
              srcset="@/assets/images/img-139.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-140.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Departement approach</h3>
          <div class="text-holder">
            <p>
              We work together with the dept were there the urgency is the
              highest. Our focus is to get to the core of the problem.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>Our focus is to get to the core of the problem.</p>
        </div>
      </div>
    </txt-block>

    <txt-block :class="'txt-block-1 style1 safe-style pt-0'">
      <div class="col d-md-none">
        <h3 class="h2">Management</h3>
        <div class="text-holder">
          <p>We make sure that all managers are aligned on this topic</p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <picture>
            <source
              srcset="@/assets/images/img-141.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-142.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Management</h3>
          <div class="text-holder">
            <p>
              We make sure that all managers are aligned on this topic.
              Consistent in their implementation with all other managers
            </p>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>Consistent in their implementation with all other managers</p>
        </div>
      </div>
    </txt-block>

    <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">HR</h3>
        <div class="text-holder">
          <p>
            We guide the dept to make sure we have the right approach on our
            egarding the creation of a safe work environment
          </p>
        </div>
      </div>
      <div class="col-md-6 picture">
        <div class="img-holder">
          <picture>
            <source
              srcset="@/assets/images/img-143.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/img-144.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">HR</h3>
          <div class="text-holder">
            <p>
              We guide the dept to make sure we have the right approach on our
              hiring regarding the creation of a safe work environment
            </p>
          </div>
        </div>
      </div>
    </txt-block>

    <div class="text-section">
      <div class="container">
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
import ContactSection from '@/components/ContactSection/ContactSection'

export default {
  name: 'LiveProgram',
  components: {
    IntroSection,
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
    color: $white;
    background: url('@/assets/images/img-135.jpg') no-repeat 10% 50%;
    background-size: cover;

    @include media-breakpoint-down(md) {
      background: url('@/assets/images/img-145.jpg') no-repeat 100% 50%;
    }

    .container {
      position: relative;
    }

    .h1 {
      @include media-breakpoint-down(md) {
        font-size: 3.4rem;
      }
    }

    .img-holder {
      position: absolute;
      top: 0;
      right: 2.5rem;
      max-width: 13.2rem;

      @include media-breakpoint-down(md) {
        top: 0.7rem;
      }
    }
  }

  .text-section {
    padding-bottom: 12rem;

    @include media-breakpoint-down(md) {
      padding-bottom: 11rem;
    }

    .container {
      max-width: 59.7rem;
    }

    .h2 {
      margin-bottom: 1.2rem;
      text-align: center;

      @include media-breakpoint-down(md) {
        margin-bottom: 1.6rem;
      }
    }

    .text-holder {
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
