<template>
  <div class="services-project">
    <intro-section>
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
            class="col-md-6 text-col d-md-flex flex-column justify-content-center"
          >
            <h1 class="h1">
              Training and <br />
              Implementation
            </h1>
            <div class="text-holder d-none d-md-block">
              <p>We make it so that nothing catches you by surprise.</p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex flex-md-row flex-column justify-content-end"
          >
            <div class="punching-bag">
              <img
                data-src="@/assets/images/img-018.png"
                class="lazyload"
                alt="#"
              />
            </div>
            <div class="text-holder d-md-none">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                ipsum lacus, aliquam id eros id, consectetur efficitur neque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </intro-section>
    <txt-block :class="'txt-block-1 style1'">
      <div class="col d-md-none">
        <h3 class="h2">
          We will make scaning of <br />
          your company
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
            data-src="@/assets/images/img-080.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            We will make scaning of <br />
            your company
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
    <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">
          Why team does not <br />
          perform
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
            data-src="@/assets/images/img-029.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            Why team does not <br />
            perform
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
    <!-- <visual-section class="visual">
      <div class="row">
        <div class="col-md-6 d-flex align-items-md-center">
          <div class="content-holder">
            <h2 class="h1 anim-item">
              Stress <br />
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
        <div class="col-md-6">
          <div class="img-holder">
            <img
              data-src="@/assets/images/img-020.png"
              class="lazyload"
              alt="#"
            />
          </div>
        </div>
      </div>
    </visual-section> -->
    <visual-section class="visual-video">
      <video
        src="@/assets/videos/video-02.mp4"
        poster="@/assets/videos/poster-02.jpg"
        muted
        loop
        autoplay
      >
        Sorry, your browser doesn't support embedded videos, but don't worry,
        you can <a href="videofile.ogg">download it</a>
        and watch it with your favorite video player!
      </video>
    </visual-section>
    <txt-block :class="'txt-block-1 style1'">
      <div class="col d-md-none">
        <h3 class="h2">
          High Performance <br />
          Behavior
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
            data-src="@/assets/images/img-081.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">
            High Performance <br />
            Behavior
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
    <txt-block :class="'txt-block-2 style2 pt-0 reverse'">
      <div class="col d-md-none">
        <h3 class="h2">Practical</h3>
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
            data-src="@/assets/images/img-082.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">Practical</h3>
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
    <ImgSection :img="'img-083.jpg'" />
    <quote-section>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
        Suspendisse vitae imperdiet nibh.
      </p>
    </quote-section>
    <ButtonsSection :next-link="'cyber-consultants'" />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection'
import TxtBlock from '@/components/TxtBlock/TxtBlock'
import VisualSection from '@/components/VisualSection/VisualSection'
import QuoteSection from '@/components/QuoteSection/QuoteSection'
import ButtonsSection from '@/components/ButtonsSection/ButtonsSection'
import ImgSection from '@/components/ImgSection/ImgSection'

export default {
  name: 'Training',
  components: {
    IntroSection,
    TxtBlock,
    VisualSection,
    QuoteSection,
    ButtonsSection,
    ImgSection,
  },
}
</script>

<style lang="scss" scoped>
.intro-section {
  padding-top: 18.2rem;
  padding-bottom: 2.4rem;
  @include media-breakpoint-down(md) {
    min-height: 95vh;
  }
  .text-holder {
    p {
      @include media-breakpoint-up(lg) {
        max-width: 32rem;
      }
      @include media-breakpoint-down(md) {
        min-width: 31.4rem;
        max-width: 31.4rem;
        font-size: 1.4rem;
      }
    }
  }
}
// .visual {
//   overflow: hidden;

//   .img-holder {
//     margin: 0 -3rem 0 -7rem;
//   }
// }

.visual-video {
  position: relative;
  padding-bottom: 46.8%;

  @include media-breakpoint-down(lg) {
    padding-bottom: 75%;
  }

  @include media-breakpoint-down(md) {
    padding-bottom: 95%;
  }

  @include media-breakpoint-down(sm) {
    padding-bottom: 120%;
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

<style lang="scss">
@import 'ServicesProjects';
</style>
