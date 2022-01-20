<template>
  <div class="home">
    <intro-section :class="'with-scroll'">
      <div class="container">
        <div class="row">
          <div class="col-md-6 d-md-flex flex-column justify-content-center">
            <h1 class="h1">
              Never Caught <br />
              Off-Guard Again
            </h1>
            <div class="text-holder">
              <p>
                We are specialist in protecting your assets and reputation to
                make sure you operate risk-free and focus on your core business.
              </p>
            </div>
          </div>
          <div
            class="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end"
          >
            <div class="img-holder">
              <img src="@/assets/images/img-01.png" alt="img description" />
            </div>
          </div>
        </div>
      </div>
      <div class="scroll-down">
        <a href="#" @click.prevent="scrollToNextSection()">
          <img src="@/assets/images/icon-01.svg" alt="#" />
          <span class="arrow-down"
            ><img src="@/assets/images/icon-03.svg" alt="#"
          /></span>
        </a>
      </div>
    </intro-section>
    <StatisticSection />
    <txt-block>
      <div class="col-md-6">
        <div class="img-holder">
          <img src="@/assets/images/img-02.jpg" alt="#" />
        </div>
      </div>
      <div class="col-md-6 d-flex flex-column justify-content-center">
        <h3 class="h2">Who We Are</h3>
        <div class="text-holder">
          <p>
            With our global footprint and our specialized team members and
            partners we know what it takes to make sure that we can deliver a
            minimum risk environment for our clients.
          </p>
          <p>
            We know that timing is key, when to accelerate and when to slow
            down. Having our clients brand top of mind, we make sure that
            communication, teamwork and quality reports is a given.
          </p>
        </div>
      </div>
    </txt-block>
    <ListSection />
    <ServicesSection :class="'w-btn'" />
    <WWSection />
    <WFromSection />
    <ContactSection />
  </div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import StatisticSection from "@/components/StatisticSection/StatisticSection.vue";
import TxtBlock from "@/components/TxtBlock/TxtBlock.vue";
import ListSection from "@/components/ListSection/ListSection.vue";
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";
import WWSection from "@/components/WWSection/WWSection.vue";
import WFromSection from "@/components/WFromSection/WFromSection.vue";
import ContactSection from "@/components/ContactSection/ContactSection.vue";

export default {
  name: "Home",
  components: {
    IntroSection,
    StatisticSection,
    TxtBlock,
    ListSection,
    ServicesSection,
    WWSection,
    WFromSection,
    ContactSection,
  },
  methods: {
    scrollToNextSection() {
      var container = document.querySelector(".intro-section");
      container.scrollTop = container.scrollHeight;
      window.scroll({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
