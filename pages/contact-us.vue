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
            <img v-lazy-load data-src="@/assets/images/img-059.png" alt="#" />
          </div>
        </div>
      </div>
      <ContactSection />
    </visual-section>
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
  beforeMount() {
    // console.log(this.$route.name)
    if (this.$route.name === 'contact-us') {
      document.querySelector('.footer').classList.add('contact-us')
    }
  },
  beforeDestroy() {
    document.querySelector('.footer').classList.remove('contact-us')
  },
  //   created() {
  //     document.querySelector('.footer').classList.add('contact-us')
  //   },
  //   unmounted() {
  //     document.querySelector('.footer').classList.remove('contact-us')
  //   },
}
</script>

<style lang="scss" scoped>
.contact-us {
  .visual-section {
    max-width: 100%;
    padding-top: 16rem;

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
    z-index: 1;
    background: transparent;
    margin-left: -2.4rem;
    margin-right: -2.4rem;
    margin-top: -5%;

    @include media-breakpoint-up(md) {
      margin-bottom: -25%;
    }

    @include media-breakpoint-down(md) {
      background: linear-gradient(to bottom, transparent 50%, #262626 50%);
    }
  }
}
</style>
