<template>
  <div class="services-page">
    <div v-if="hideHomeServices">
      <intro-section>
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-md-flex flex-column justify-content-center">
              <h1 class="h1">Services</h1>
              <div class="text-holder">
                <p>We make it so that nothing catches you by surprise.</p>
              </div>
            </div>
            <div
              class="col-md-6 d-flex flex-md-row flex-column align-items-md-center justify-content-center justify-content-md-end"
            >
              <div class="watch-holder">
                <img src="@/assets/images/img-014.png" alt="img description" />
                <div class="msg-holder hld-1">
                  <img
                    src="@/assets/images/img-015.svg"
                    alt="img description"
                  />
                </div>
                <div class="msg-holder hld-2">
                  <img
                    src="@/assets/images/img-016.svg"
                    alt="img description"
                  />
                </div>
              </div>
              <div class="text-holder mobile">
                <p>We make it so that nothing catches you by surprise.</p>
              </div>
            </div>
          </div>
          <div class="scroll-down">
            <a href="#">
              <img src="@/assets/images/icon-01.svg" alt="#" />
            </a>
          </div>
        </div>
      </intro-section>
      <ServicesSection :class="'items-wtext'" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import IntroSection from "@/components/IntroSection/IntroSection.vue";
import ServicesSection from "@/components/ServicesSection/ServicesSection.vue";

export default {
  name: "Services",
  components: {
    IntroSection,
    ServicesSection,
  },
  data: () => ({
    // hideContent: true
  }),
  // watch: {
  // 	$route() {
  // 		if (this.$route.name !== "services") {
  // 			this.hideContent !== this.hideContent;
  // 		}
  // 	}
  // },
  computed: {
    hideHomeServices() {
      return this.$route.name === "Services";
    },
  },
};
</script>

<style lang="scss">
@import "@/views/Services/Services.scss";
</style>
