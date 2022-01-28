<template>
  <div class="contact-us">
    <visual-section>
      <div class="row">
        <div class="col-12">
          <div class="content-holder">
            <h1 class="h1 text-center">
              Jump in and <br class="d-md-none" />
              Enjoy the ride!
            </h1>
          </div>
        </div>
        <div class="col-12">
          <div class="img-holder">
            <img src="@/assets/images/img-059.png" alt="#" />
          </div>
        </div>
      </div>
      <ContactSection />
    </visual-section>
  </div>
</template>

<script>
import VisualSection from "@/components/VisualSection/VisualSection.vue";
import ContactSection from "@/components/ContactSection/ContactSection.vue";

export default {
  name: "ContactUs",
  components: {
    ContactSection,
    VisualSection,
  },
  created() {
    document.querySelector(".footer").classList.add("contact-us");
  },
  unmounted() {
    document.querySelector(".footer").classList.remove("contact-us");
  },
};
</script>

<style lang="scss">
@import "@/views/ContactUs/ContactUs.scss";
</style>
