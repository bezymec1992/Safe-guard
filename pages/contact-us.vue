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
            <img
              data-src="@/assets/images/img-059.png"
              class="lazyload"
              alt="#"
            />
          </div>
        </div>
      </div>
    </visual-section>
    <ContactSection />
  </div>
</template>

<script>
import VisualSection from '@/components/VisualSection/VisualSection.vue'
import ContactSection from '@/components/ContactSection/ContactSection.vue'

export default {
  name: 'ContactUs',
  components: {
    ContactSection,
    VisualSection,
  },
}
</script>

<style lang="scss" scoped>
.contact-us {
  background: linear-gradient(265.59deg, #5d90c6 0.16%, #c0cfee 76.73%);

  .visual-section {
    max-width: 100%;
    padding-top: 16rem;
    background: transparent;

    @include media-breakpoint-down(md) {
      overflow: hidden;
    }

    .h1 {
      margin-bottom: 3.2rem;

      @include media-breakpoint-down(md) {
        margin-bottom: 10rem;
      }
    }

    .img-holder {
      max-width: 100%;

      @include media-breakpoint-down(md) {
        max-width: unset;
        margin-left: -4.4rem;
        margin-right: -4.4rem;
      }

      @include media-breakpoint-down(sm) {
        margin-left: -10.4rem;
        margin-right: -10.4rem;
      }
    }
  }

  .contact-section {
    position: relative;
    padding-bottom: 0;
    z-index: 1;
    background: transparent;

    background: linear-gradient(180deg, transparent 50%, $mine-shaft 0);

    // @include media-breakpoint-down(md) {
    //   background: linear-gradient(to bottom, transparent 50%, #262626 50%);
    // }
  }
}
</style>
