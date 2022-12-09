<template>
  <div class="about-page">
    <intro-section>
      <div class="container">
        <div class="row">
          <div
            class="col-md-6 text-col d-md-flex flex-column justify-content-center align-items-md-start"
          >
            <h1 class="h1 d-none d-md-block">Who we are</h1>
            <div class="text-holder d-none d-md-block">
              <p>
                We are equipped a rich variety of experience and knowledge. We utilize our global overview, insight and data in order to prevent crises before they occur in your company. 
              </p>
            </div>
            <nuxt-link
              to="/about/timeline"
              class="btn btn-arrow d-none d-md-inline-flex justify-content-center"
            >
              See Timeline
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
          <div class="col-md-6 d-md-flex justify-content-center">
            <div class="diving-suit">
              <img
                src="@/assets/images/img-040.png"
                alt="#"
                class="diving-suit-img-2 lazyload"
              />
              <img
                src="@/assets/images/img-039.png"
                alt="#"
                class="diving-suit-img-1 lazyload"
              />
            </div>
            <div class="text-holder d-md-none">
              <h1 class="h1 d-md-none">Who we are</h1>
              <p>
                We are equipped a rich variety of experience and knowledge. We utilize our global overview, insight and data in order to prevent crises before they occur in your company.
              </p>
            </div>
            <router-link to="/about/timeline" class="btn btn-arrow d-md-none">
              See Timeline
              <span class="arrow-wrapper">
                <span class="icon-holder">
                  <img
                    data-src="@/assets/images/icon-02.svg"
                    class="lazyload"
                    alt="#"
                  />
                </span>
              </span>
            </router-link>
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
    <StatisticSection />
    <txt-block :class="'txt-block-1 style1 reverse'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">Let Us Introduce Ourselves</h3>
        <div class="text-holder">
          <p>
            We are a team of disciplined individuals that are dedicated and specialized in solving problems.
            The largest percentage of our team works daily to implement preventive measures and analyze the mechanics of companies with safety risks in order to determine how we can prevent safety breaches in the best way possible within each specific industry in which we work.
          </p>
        </div>
      </div>
      <div class="col-md-5">
        <div class="video-holder">
          <!-- <img
            data-src="@/assets/images/img-041.jpg"
            class="lazyload"
            alt="#"
          /> -->
          <video muted autoplay loop>
            <source src="@/assets/videos/video-04.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div class="col-md-7 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder content-holder-video">
          <h3 class="h2 text-capitalize">
            Let Us Introduce <br/> Ourselves
          </h3>
          <div class="text-holder">
            <p>
              We are a team of disciplined individuals that are dedicated and specialized in solving problems.
            </p>
            <p>
              The largest percentage of our team works daily to implement preventive measures and analyze the mechanics of companies with safety risks in order to determine how we can prevent safety breaches in the best way possible within each specific industry in which we work.
            </p>
            <p>
              Our methodology which we have developed the last 5 years is constantly being improved in order to give us the insight and nuance we need in order to support our clients in the best way possible.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            Our methodology which we have developed the last 5 years is constantly being improved in order to give us the overview which we need to support our clients in the best way possible.
          </p>
        </div>
      </div>
    </txt-block>
    <txt-block :class="'txt-block-2 style2'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          A Team Dedicated To <br />
          Protect Your Assets And <br />
          Reputation
        </h3>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          <img
            data-src="@/assets/images/img-042.png"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2 text-capitalize">
            A Team Dedicated To <br />
            Protect Your Assets And <br />
            Reputation
          </h3>
          <div class="text-holder">
            <p>
              With our global footprint and international partners, we are able to offer our clients the tools to operate in a low-risk environment. Reputation management is key in our approach, to aiding our clients in this pursuit.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
            With our global footprint and international partners, we are able to offer our clients the tools to operate in a low-risk environment. Reputation management is key in our approach, to aiding our clients in this pursuit.
          </p>
        </div>
      </div>
    </txt-block>
    <!-- <ResultsSection /> -->
    <!-- <div class="result-section"></div> -->
    <div class="title-section">
      <div class="container">
        <h2 class="h1 text-capitalize">Managing Directors</h2>
      </div>
    </div>
    <txt-block :class="'txt-block-2 style1'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Frank Balte <br />
          <small>(Function)</small>
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
            data-src="@/assets/images/img-048.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2 text-capitalize">
            Frank Balte <br />
            <small>(Head of Strategy)</small>
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


    <txt-block :class="'txt-block-1 style2 reverse roger'">
      <div class="col d-md-none">
        <h3 class="h2 text-capitalize">
          Roger van Alphen <br />
          <small>(Head of Operations)</small>
        </h3>
        <p>ROGER a highly respected and tenacious problem solver. He serves as one of the firm’s Managing Directors. <br/>
His insight and know-how are a tremendous resource. He is recommended for his critical thinking, expertise and experience, which enables him “quickly get to the heart of the issue and the strategic objectives.”</p>
      </div>
      <div class="col-md-6">
        <div class="img-holder">
          
          <img
            data-src="@/assets/images/img-047.jpg"
            class="lazyload"
            alt="#"
          />
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2 text-capitalize">
            Roger van Alphen<br />
            <small>(Head of Operations)</small>
          </h3>
          <div class="text-holder">
            <p>
              ROGER a highly respected and tenacious problem solver. He serves as one of the firm’s Managing Directors. <br/>
His insight and know-how are a tremendous resource. He is recommended for his critical thinking, expertise and experience, which enables him “quickly get to the heart of the issue and the strategic objectives.”
            </p>
            <p>
              He is a single father who raised a daughter (23) and son (26) by himself. <br/>
He is a military Krav Maga & combat instructor, NLP based Coach focused on high performance behavior, both physically as mentally. <br/>
He is an Equestrian, loves Opera, chess, skiing and boating.
            </p>
          </div>
        </div>
      </div>
      <div class="col d-md-none">
        <div class="text-holder">
          <p>
              He is a single father who raised a daughter (23) and son (26) by himself. <br/>
He is a military Krav Maga & combat instructor, NLP based Coach focused on high performance behavior, both physically as mentally. <br/>
He is an Equestrian, loves Opera, chess, skiing and boating.
            </p>
        </div>
      </div>
    </txt-block>
    <TrustedSection />
    <ContactSection />
  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import TxtBlock from '@/components/TxtBlock/TxtBlock.vue'
import StatisticSection from '@/components/StatisticSection/StatisticSection.vue'
// import ResultsSection from '@/components/ResultsSection/ResultsSection.vue'
import TrustedSection from '@/components/TrustedSection/TrustedSection.vue'
import ContactSection from '@/components/ContactSection/ContactSection.vue'
import getterBreakpoints from '@/mixins/getterBreakpoints'

export default {
  name: 'About',
  components: {
    IntroSection,
    TxtBlock,
    StatisticSection,
    // ResultsSection,
    TrustedSection,
    ContactSection,
  },
  mixins: [getterBreakpoints],
}
</script>

<style lang="scss" scoped>
.about-page {
  .result-section {
    width: 100%;
    margin: 0 auto;
    min-height: 50rem;
    background-color: lightgrey;
  }
  overflow: hidden;

  .intro-section {
    padding-top: 18.2rem;
    padding-bottom: 2.4rem;
    min-height: 82rem !important;
    @include media-breakpoint-down(md) {
      padding-top: 10.2rem;
    }
    .text-holder {
      max-width: 41.4rem;
      @include media-breakpoint-down(md) {
        font-size: 14px;
      }
    }
    .diving-suit {
      max-width: 41.3rem;
      margin: auto;

      @include media-breakpoint-down(md) {
        margin: auto auto 5.2rem;
      }

      @include media-breakpoint-down(sm) {
        max-width: 25rem;
        margin: auto auto 4.2rem;
      }

      img {
        width: 100%;
        height: auto;
      }
    }

    .h1 {
      @include media-breakpoint-up(md) {
        margin-bottom: 3.2rem;
      }

      @include media-breakpoint-down(md) {
        margin-bottom: 5.2rem;
      }
    }
    p {
      margin-bottom: 0;
    }

    .btn-arrow {
      margin-top: 4.5rem;

      @include media-breakpoint-down(md) {
        margin-top: 3.6rem;
      }
    }
  }

  .title-section {
    
    // padding-top: 14rem;
    padding-bottom: 8rem;

    @include media-breakpoint-down(md) {
      // padding-top: 7rem;
      padding-bottom: 5rem;
      .container {
      padding: 0 20px;
    }
    }

    .container {
      max-width: 115rem;
    }
    .h1 {
      @include media-breakpoint-down(md) {
        text-transform: inherit;
        font-size: 3.4rem;
      }
    }
  }

  .txt-block {
    .text-holder {
        max-width: 60rem !important;
      }
      
      p {
        margin-bottom: 2rem;
      }
    &.style1 {
      padding-bottom: 17.4rem;
      .content-holder-video {
        padding-left: 0;
      }
      .video-holder {
        max-width: 45rem;
        min-height: 50rem;
        @include media-breakpoint-down(md) {
          min-height: 36.3rem;
        }
      }
      @include media-breakpoint-down(md) {
        padding-bottom: 5rem;
      }
    }

    &.style2 {
      padding-bottom: 15rem;

      @include media-breakpoint-down(md) {
        padding-bottom: 5rem;
      }
    }
  }
  .roger {
    p {
      @include media-breakpoint-down(md) {
        font-size: 14px !important;
        line-height: 22px !important;
      }
    }
  }
}
</style>
