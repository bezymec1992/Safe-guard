<template>
  <div class="services-project">
    <intro-section :class="'software'">
      <div class="container">
        <router-link to="/services" class="back-link">
          <span class="icon-holder">
            <img src="@/assets/images/img-017.svg" alt="#" />
          </span>
          Back</router-link
        >
        <div class="row">
          <div
            class="col-md-6 text-col d-md-flex flex-column justify-content-center text-bg"
          >
            <h1 class="h1 soft-t">Software</h1>
            <div class="text-holder">
              <p>
                Powerful tools that will assist you in <br/> SAFEKEEPING.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex align-items-md-center flex-md-row flex-column justify-content-center justify-content-md-end"
          >
            <div class="imac-holder intro-pic">
              <!-- <img src="@/assets/images/img-067.png" class="mac-off" alt="#" /> -->
              <img src="@/assets/images/software/soft-intr.png" class="mac-off" alt="#" />
              <img src="@/assets/images/software/soft-intr.png" class="mac-on" alt="#" />
              <div class="iphone-holder hld-1">
                <!-- <img class="d-md-none" src="@/assets/images/img-034.png" alt="#" /> -->
                <img src="@/assets/images/software/phone2.png" alt="#" />
              </div>
              <div class="iphone-holder hld-2">
                <img src="@/assets/images/img-035.png" alt="#" />
              </div>
            </div>

            <h1 class="h1 mbl">Software</h1>
            <div class="text-holder mobile">
              <p class="soft-p">Powerful tools that will assist you in <br/> SAFEKEEPING.</p>
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

    <section class="qoute">
      <div class="container">
        <div class="qoute-wrap">
          <h2 class="h2">
            Safeguard <br class="d-md-none"/> software
          </h2>
          <p class="text txt">
            After our 25 years of experience, we started our internal process to brain mine our knowledge and to convert our experience into software. We have developed a few applications and we are sure there is more to come from our Product Development department.
          </p>
        </div>
      </div>
    </section>

    <txt-block class="txt-block-2 style2 safe-style container-mb kyc">
      <div class="col d-lg-none">
        <h3 class="h2">AUTOMOTIVE KYC</h3>
        <div class="text-holder">
          <p>
            We had noticed that many of the problems occur in the start of the relationship between companies and their customers. Simple KYC checks and lack of good business approval flows generate bigger risks.
          </p>
          <p>
            With this tool designed for the automotive you do not have to count on excel or tools which are not designed to check and approve.
          </p>
        </div>
      </div>
      <div class="col-lg-7 image">
        <div class="img-holder">
          <img
            data-src="@/assets/images/software/laptops.png"
            class="lazyload d-none d-md-block"
            alt="#"
          />
          <img
            data-src="@/assets/images/software/lap.png"
            class="lazyload d-md-none"
            alt="#"
          />
        </div>
      </div>
      <div class="col-lg-5 d-none d-lg-flex flex-column justify-content-center">
        <div class="content-holder">
          <div class="col d-none d-lg-block pb-5">
            <h3 class="h2">AUTOMOTIVE KYC</h3>
            <div class="text-holder">
              <p>
                We had noticed that many of the problems occur in the start of the relationship between companies and their customers. Simple KYC checks and lack of good business approval flows generate bigger risks.
              </p>
              <p>
                With this tool designed for the automotive you do not have to count on excel or tools which are not designed to check and approve.
              </p>
              <p>
                The tool does a check and gives a rating depending on the data that is provided. Your company can set up inside this tool how you want to organize your approval flow.
              </p>
              <p class="sp">
                You are in the DRIVERS SEAT.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col d-lg-none">
        <div class="text-holder">
          <p>
                The tool does a check and gives a rating depending on the data that is provided. Your company can set up inside this tool how you want to organize your approval flow.
              </p>
              <p class="sp">
                You are in the DRIVERS SEAT.
              </p>
        </div>
        
      </div>
    </txt-block>

    <visual-section :bg="'img-096.png'" :class="'bg-img'"> </visual-section>

    <section class="strong">
      <div class="container container-strong">
        <div class="qoute">
          <div class="qoute-wrap">
            <h2 class="h2">
             I am strong app
            </h2>
            <span class="qoute-span">(from 12yrs-24yrs)</span>
            <p class="text txt">
              An app that helps young students that get bullied at school. The app gives the school the opportunity to support students that experience bully behavior from others.
            </p>
        </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h3>United we are stong</h3>
            <p class="strong-text first-text">
              The app helps the school to create awareness for the children and parents. It provides information on how to deal with bullying. The school can organize get together within the app where people can subscribe to. 
            </p>
            <div class="strong-desk d-none d-lg-block">
              <h3>Give the student a voice</h3>
              <p class="strong-text">
                The students can chat anonymously if they want. They can chat with professionals or to care takers from the school. <br/>
                The students can find information about bullying and the impact it has on young people. 
              </p>
              <!-- <p class="strong-text strong-last">
                Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis suscipit justo. Vestibulum at turpis euismod, fermentum
              </p> -->
            </div>
          </div>
          <div class="col-lg-6">
              <img src="@/assets/images/software/boy.jpg" alt="">
          </div>
          <div class="strong-mb d-lg-none">
              <h3>Give the student a voice</h3>
              <p class="strong-text">
                The students can chat anonymously if they want. They can chat with professionals or to care takers from the school. <br/>
                The students can find information about bullying and the impact it has on young people. 
              </p>
            </div>
        </div>

        <div class="white-block">
          <div class="white-wrapp d-flex aling-items-center justify-content-between">
              <div class="white-item">
                <h4>
                  Daily mood <br class="d-none d-lg-block"/> check
                </h4>
                <p>
                  Tell us how you feel today
                </p>
              </div>

              <div class="white-item">
                <h4>
                  Chat with a <br class="d-none d-lg-block"/> professional
                </h4>
                <p>
                  Connecting students with people who know what they do
                </p>
              </div>

              <div class="white-item">
                <h4>
                  Anonymous
                </h4>
                <p>
                  It helps to lower the threshold for students
                </p>
              </div>

              <div class="white-item">
                <h4>
                  Information <br class="d-none d-lg-block"/>  and Events
                </h4>
                <p>
                  Awareness and participation in one app
                </p>
              </div>
          </div>
        </div>

        <div class="strong-img">
          <img class="d-none d-md-block" src="@/assets/images/software/phones.jpg" alt="phones" width="100%" height="auto">
          <img class="d-md-none" src="@/assets/images/software/phones-mb.jpg" alt="phones" width="100%" height="auto">
        </div>
      </div>
    </section>

    <section class="safe">
      <div class="container">
        <div class="qoute">
          <div class="qoute-wrap">
          <h2 class="h2">
            Safeplace app
          </h2>
          <p class="text txt">
            Having a Safety tool in your Pocket to create an environment characterized by safety, integrity and inclusion.
          </p>
        </div>
        </div>
      </div>
    </section>

    <txt-block class="txt-block-1 style1 safe-style pb-0">
      <div class="col d-md-none">
        <h3 class="h2">How does it work?</h3>
        <div class="text-holder">
          <p>
            Our software is accessible to you and your team. The app is designed so your organization can get the information from experts and your staff members can let you know what they think of your organization regarding this topic.
          </p>
        </div>
      </div>
      <div class="col-md-6 image">
        <div class="img-holder phones">
          <picture>
            <source
              srcset="@/assets/images/software/blue-phones.png"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/software/blue-phones-mb.png" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
      <div class="col-md-6 d-none d-md-flex flex-column justify-content-center">
        <div class="content-holder">
          <h3 class="h2">How does it work?</h3>
          <div class="text-holder phone-info">
            <p>
              Our software is accessible to you and your team. The app is designed so your organization can get the information from experts and your staff members can let you know what they think of your organization regarding this topic. It’s a powerful tool to measure the climate of your organization. Your staff engagement is important. They are part of the solution.
            </p>
            
            <nuxt-link to="/about" class="btn btn-arrow">
              Read more
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
            It’s a powerful tool to measure the climate of your organization. Your staff engagement is important. They are part of the solution.
          </p>
          <nuxt-link to="/about" class="btn btn-arrow">
            Read more
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


    <section class="inside">
      <div class="container">
        <div class="find-section">
        <div class="containera">
          <h2 class="h2 text-md-left">What’s inside?</h2>
          <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3">
              <div class="item">
                <div class="icon-holder">
                  <img src="@/assets/images/icon-011.svg" alt="Daya mood check" />
                </div>
                <div class="content-holder">
                  <h3>
                    Daily mood check
                  </h3>
                  
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
                    Anonymous chat
                  </h3>
                  
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
                    Awareness 
                    program
                  </h3>
                
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
                    Online 
                    workshops
                  </h3>
                  
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
                    News and 
                    updates
                  </h3>
                  
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
                    Ideas and advice
                  </h3>
                  
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
                    Events and agenda
                  </h3>
                  
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
                    Awareness quiz
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </section>

    <section class="big-picture">
      <div class="container">
        <div class="big-wrapp">
          <picture>
            <source
              srcset="@/assets/images/software/phones-desk.jpg"
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src="@/assets/images/software/phones-small.jpg" class="lazyload" alt="#" />
          </picture>
        </div>
      </div>
    </section>

    <section class="strong cyber">
      <div class="container">
        <div class="qoute">
          <div class="qoute-wrap">
            <h2 class="h2">
              cyber safe program
            </h2>
            <p class="text txt">
              As an addition to our Cyber Service which we provide to companies. We added the tool of Reliaquest to make our offering perfect.
            </p>
          </div>
        </div>
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h3>Powerful Service platform</h3>
            <p class="strong-text first-text">
              Our Cyber Safe Program is a combination of experience and a digital monitoring platform in one. We will help you to detect your problems and set up the tool in right way so you are protected. 
            </p>
            <div class="strong-desk d-none d-lg-block">
              <h3>Monitor and Action</h3>
              <p class="strong-text">
                In order to monitor we will assess where there is lack or no moderation where it is needed. This is the first step.
During moderation we assist in any escalation that can take place and together we will have control where it is needed. 
              </p>
              <!-- <p class="strong-text strong-last">
                Aenean neque orci, ultrices ac fermentum id, bibendum a ex. Nullam quis suscipit justo. Vestibulum at turpis euismod, fermentum
              </p> -->
            </div>
          </div>
          <div class="col-lg-6">
              <img src="@/assets/images/software/pazle-desk.jpg" alt="">
          </div>
          <div class="strong-mb d-lg-none">
              <h3>Monitor and Action</h3>
              <p class="strong-text">
                In order to monitor we will assess where there is lack or no moderation where it is needed. This is the first step.
                During moderation we assist in any escalation that can take place and together we will have control where it is needed.  
              </p>
            </div>
        </div>

      

        <div class="strong-img">
          <img class="d-none d-md-block" src="@/assets/images/software/big-cards.jpg" alt="phones" width="100%" height="auto">
          <img class="d-md-none" src="@/assets/images/software/small-cards.jpg" alt="phones" width="100%" height="auto">
        </div>
        
        <div class="sign">
          <img class="d-none d-md-block" src="@/assets/images/software/asd.png" alt="phones">
          <img class="d-md-none" src="@/assets/images/software/asd-m.png" alt="phones">
        </div>



        <section class="qoute">
          <div class="container">
            <div class="qoute-wrap qoute-wrap-down">
              <h2 class="h2">
                AUTOMATIZATION WITH <br class="d-md-none"/> A <br class="d-none d-md-block"/> CLEAR PURPOSE
              </h2>
            </div>
          </div>
        </section>
        
      </div>
      <ButtonsSection :next-link="'training'" />
    </section>



  </div>
</template>

<script>
import IntroSection from '@/components/IntroSection/IntroSection.vue'
import TxtBlock from '@/components/TxtBlock/TxtBlock.vue'
import VisualSection from '@/components/VisualSection/VisualSection.vue'
import ButtonsSection from '@/components/ButtonsSection/ButtonsSection.vue'

export default {
  name: 'Software',
  components: {
    IntroSection,
    TxtBlock,
    VisualSection,
    ButtonsSection,
  },
}
</script>

<style lang="scss" scoped>
.intro-section {
  min-height: 82rem;
}
.software {
  position: relative;
  min-height: 82rem;
  padding-bottom: 0 !important;
  .imac-holder {
    @include media-breakpoint-down(md) {
      margin-left: -8rem !important;
    }
    
  }
  .intro-pic {
    right: -8rem;
    bottom: 8.5rem;

    @include media-breakpoint-up(lg) {
      // width: 100%;
      max-width: 66.8rem;
      margin-left: -5rem;
    }

    @include media-breakpoint-down(lg) {
      bottom: 0;
    }

    @include media-breakpoint-down(xl) {
      right: 0;
    }
  }
  .text-bg {
    // margin-top: 20rem;
    z-index: 1000;
    @include media-breakpoint-down(lg) {
      // margin-top: 56rem;
    }
    @include media-breakpoint-down(md) {
      display: none;
    }
  }
}
.qoute {
  
  margin-top: 16rem;
  @include media-breakpoint-down(md) {
    margin-top: 8rem;
  }
  
  .qoute-wrap {
    text-align: center;
    max-width: 627px;
    margin: 0 auto;
    @include media-breakpoint-down(md) {
      text-align: left;
    }
    h2 {
      @include media-breakpoint-down(md) {
        font-size: 3.2rem;
      }
    }
    
    p {
      font-weight: 400;
      font-size: 18px;
      line-height: 160%;
      margin-top: 2rem;
      @include media-breakpoint-down(md) {
        font-size: 14px;
      }
    }
  }
  
}
.qoute-wrap-down {
    max-width: 756px !important;
    z-index: 222;
    padding-top: 150px;
    margin-bottom: 0 !important;
    h2 {
        font-weight: 600 !important;
        font-size: 48px !important;
        line-height: 50px;
        text-align: center;

        @include media-breakpoint-down(md) {
          font-size: 26px !important;
          line-height: 36px !important;
          font-weight: 600 !important;
        }
      }
  }
.kyc {
  .content-holder {
    padding-left: 1rem !important;
    p {
      margin-bottom: 2.5rem !important;
      
    }
    .sp {
      font-size: 2rem;
      @include media-breakpoint-down(md) {
        font-size: 1.6rem !important;
      }
    }
    
  }
  
}
.txt-block .text-holder p:not(:last-child) {
      @include media-breakpoint-down(md) {
        margin-bottom: 2rem !important;
      }
    }

.mbl {
  display: none;
  @include media-breakpoint-down(md) {
    position: absolute;
    top: 18rem;
    display: block;
  }
}

.computers {
  .img-holder {
    margin-left: -9rem;
    @include media-breakpoint-down(lg) {
      margin-left: 0;
    }

    @include media-breakpoint-down(sm) {
      margin-left: -2.2rem;
    }
  }

  .text-holder {
    max-width: 48rem;
  }
}

.macbook-img {
  @include media-breakpoint-down(sm) {
    margin-top: -2rem;
    margin-right: -2.2rem;
  }
}

.computers-2 {
  @include media-breakpoint-down(sm) {
    overflow: hidden;
  }

  .img-holder {
    margin-right: -1rem;

    @include media-breakpoint-down(sm) {
      margin-right: -4rem;
      margin-left: -1.4rem;
    }
  }
  .content-holder {
    padding-left: 0;
  }
  .text-holder {
    max-width: 47rem;
  }
}

.visual-section {
  max-width: 126.2rem;
}

.img-pos1 {
  position: relative;
  overflow: hidden;
  min-height: 47vh;
  @include media-breakpoint-down(md) {
    min-height: 70rem;
  }
  .content-holder {
    margin-top: 10rem;
    @include media-breakpoint-down(md) {
      margin-top: 2rem;
    }
    .h1 {
      @include media-breakpoint-down(lg) {
        z-index: 1000;
      }
      @include media-breakpoint-down(sm) {
        font-size: 2.5rem;
      }
    }
  }

  .row {
    min-height: 67.7rem;
    @include media-breakpoint-down(sm) {
      min-height: 55.7rem;
    }
  }
  .img-holder {
    @include media-breakpoint-down(md) {
      min-width: 54rem;
    }
    @include media-breakpoint-down(sm) {
      position: absolute;
      bottom: 0;
      right: -5rem;
    }
  }
}
.txt-block {
  
  overflow: hidden;
    padding-top: 14rem !important;
    @include media-breakpoint-down(md) {
      padding-top: 4rem !important;
    }
  .img-holder {
    margin-left: 0;
    margin-right: 2rem;
    @include media-breakpoint-down(md) {
      margin-right: -5rem;
    }
  }
  .content-holder {
    padding-left: 2rem;
  }
  
    h3 {
      @include media-breakpoint-down(md) {
        margin-bottom: 1.5rem;
      }
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      font-size: 2.4rem;
      line-height: 1.5;

      @include media-breakpoint-down(lg) {
        margin-bottom: 4rem;
      }

      @include media-breakpoint-up(md) {
        padding-top: 3rem;
      }

      @include media-breakpoint-down(md) {
        font-size: 2rem;
      }

      li {
        position: relative;
        padding-left: 3.5rem;

        @include media-breakpoint-down(md) {
          padding-left: 2.5rem;
        }

        &:not(:last-child) {
          margin-bottom: 1.6rem;
        }

        &::before {
          content: '';
          position: absolute;
          top: 0.8rem;
          left: 0;
          width: 1.7rem;
          height: 1.8rem;
          background: url("data:image/svg+xml,%3Csvg width='18' height='20' viewBox='0 0 18 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.5 1.44338L16.1603 5.28868C16.4697 5.46731 16.6603 5.79743 16.6603 6.1547V13.8453C16.6603 14.2026 16.4697 14.5327 16.1603 14.7113L9.5 18.5566C9.1906 18.7353 8.8094 18.7353 8.5 18.5566L1.83975 14.7113C1.53034 14.5327 1.33975 14.2026 1.33975 13.8453V6.1547C1.33975 5.79743 1.53034 5.46731 1.83975 5.28868L8.5 1.44338C8.8094 1.26474 9.1906 1.26474 9.5 1.44338Z' stroke='black' stroke-width='2'/%3E%3C/svg%3E%0A");
          background-size: 1.4rem;
          background-repeat: no-repeat;

          @include media-breakpoint-down(md) {
            width: 1.6rem;
            height: 1.6rem;
          }
        }
      }
    }
  }

.strong {

  overflow: hidden;
  background: #F3F6F7;
  padding: 14rem 0;
  margin-top: 14rem;
  @include media-breakpoint-down(lg) {
    margin-top: 8rem;
    padding-top: 8rem;
    padding-bottom: 7rem;
  }
  .container-strong {
    max-width: 1290px !important;
  }
  .qoute-span {
    font-size: 25px;
    line-height: 35px;
    color: #111111;
    opacity: 0.5;
    @include media-breakpoint-down(lg) {
      font-size: 20px;
      line-height: 35px;
    }
  }
  h3 {
    margin-bottom: 3rem;
    font-weight: 400;
    font-size: 40px;
    @include media-breakpoint-down(lg) {
      margin-bottom: 1.8rem;
      font-size: 25px;
    }
  }
  .strong-text {
    max-width: 48rem;
    font-size: 18px;
    @include media-breakpoint-down(lg) {
      font-size: 14px;
    }
  }
  .strong-last {
    margin-top: 25px;
  }
  .first-text {
    margin-bottom: 8rem;
    @include media-breakpoint-down(lg) {
      margin-bottom: 3.2rem;
    }
  }
  img {
    width: 100%;
    height: auto;
    @include media-breakpoint-down(lg) {
      margin-bottom: 3.2rem;
    }
  }
  .qoute {
    margin-top: 0;
    margin-bottom: 14rem;
    @include media-breakpoint-down(lg) {
      margin-bottom: 4rem;
    }
  }

  .white-block {
    margin-top: 10rem;
    @include media-breakpoint-down(lg) {
      margin-top: 6rem;
    }
    .white-wrapp {
      background-color: white;
      padding: 8rem 5rem;
      
      @include media-breakpoint-down(xl) {
        padding: 4rem 2rem;
        
      }
      @include media-breakpoint-down(lg) {
        flex-direction: column;
      }
      .white-item {
        max-width: 243px;
        @include media-breakpoint-down(lg) {
          // max-width: 100%;
          &:not(:last-child){
            margin-bottom: 4rem;
          }
        }
        h4 {
          font-size: 28px;
          font-weight: 500;
          margin-bottom: 1rem;
          @include media-breakpoint-down(lg) {
            font-size: 24px;
            margin-bottom: 0.5rem;
          }
        }
        p {
          font-size: 16px;
        }
        
      }
      .white-item:nth-child(3) p {
          @include media-breakpoint-up(lg) {
            padding-top: 3.4rem;
          }
        }
    }
  }
  .strong-img {
    margin-top: 8rem;
    
    @include media-breakpoint-down(md) {
      margin-top: 6rem;
      margin-left: -2.5rem;
      margin-right: -2.5rem;
    }
  }
}

.phones {
  img {
    max-width: 465px !important;
    display: block;
    @include media-breakpoint-up(xl) {
      margin-left: auto;
    }
    
  }
  margin-right: 0 !important;
}

.find-section {
    overflow: hidden;
    max-width: 120rem;
    background: #F3F3F3;
    margin: 12rem auto 0;
    padding: 6rem 6rem;
    @include media-breakpoint-down(lg) {
      padding: 4rem 2rem 2rem;
      margin: 7rem auto 0;
    }

    .row {
      @include media-breakpoint-up(lg) {
        @include grid-gutter(4rem);
      }

      @include media-breakpoint-up(xl) {
        @include grid-gutter(3rem);
      }
    }

    .h2 {
      margin-bottom: 7.2rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 4rem;
      }
    }

    .item {
      margin-bottom: 7rem;

      @include media-breakpoint-down(md) {
          margin-bottom: 3rem;
        }
      
      @include media-breakpoint-down(sm) {
        display: flex;
        align-items: center;
      }
    }

    h3 {
      margin-bottom: 1rem;
      font-size: 2.4rem;
      font-weight: 400;
      @include media-breakpoint-down(md) {
        margin-bottom: 0;
        font-size: 2rem;
      }
    }

    .icon-holder {
      max-width: 4rem;
      margin-bottom: 2rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 0;
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

.big-picture {
  margin-top: 12rem;
  margin-bottom: 12rem;
  overflow: hidden;
  @include media-breakpoint-down(lg) {
    margin-top: 8rem;
    margin-bottom: 8rem;
  }
  .big-wrapp {
    @include media-breakpoint-down(md) {
      margin-left: -2.6rem;
      margin-right: -2.6rem;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
}

.cyber {
  padding-bottom: 0rem;
  .qoute {
    
    @include media-breakpoint-up(md) {
      margin-bottom: 8rem;
    }
  }
  .strong-img {
    @include media-breakpoint-up(md) {
      margin-bottom: 12rem;
    }
  }
  .sign {
    text-align: center;
    // margin: 0 auto !important;
    img  {
      width: unset !important;
      height: unset !important;
      margin: 45px auto 0 !important;
      @include media-breakpoint-down(md) {
        margin: 0 !important;
      }
    }
  }
  
}

.iphone-holder.hld-1 {
  bottom: -1% !important;
  left: -9% !important;
  img {
    @include media-breakpoint-up(lg) {
      height: 25rem !important;
      width: 13rem !important;
    }
  }
  
}
.iphone-holder.hld-2 {
  bottom: -11% !important;
  left: 7% !important;
  img {
    @include media-breakpoint-up(lg) {
      height: 28rem !important;
      width: 14rem !important;
    }
  }
}
.imac-holder {
  @include media-breakpoint-down(md) {
    right: -35% !important;
  }
}

.soft-t {
  @include media-breakpoint-up(lg) {
  margin-top: 3rem !important;
  }
}
.soft-p {
      @include media-breakpoint-down(md) {
        margin-top: 3rem !important;
      }
    }
</style>

<style lang="scss">
@import 'ServicesProjects.scss';
</style>

