<template>
  <div class="trusted-section">
    <div class="container">
      <h2 class="h2 text-center trusted">We Safeguarded</h2>
      <picture>
          <source srcset="@/assets/images/partners-logosse.png" media="(max-width: 767px)" />
          <img src="@/assets/images/partners-logoss.png"  alt="MDN" width="100%" />
        </picture>
      <!-- <div class="img-wrapp d-flex align-items-center justify-content-between">
        <picture>
          <source srcset="@/assets/images/suport-1.svg" media="(max-width: 992px)" />
          <img src="@/assets/images/suport-01.svg" alt="MDN" />
        </picture>

        <picture>
          <source srcset="@/assets/images/suport-2.svg" media="(max-width: 992px)" />
          <img src="@/assets/images/suport-02.svg" alt="MDN" />
        </picture>

        <picture>
          <source srcset="@/assets/images/suport-3.svg" media="(max-width: 992px)" />
          <img src="@/assets/images/suport-03.svg" alt="MDN" />
        </picture>

        <picture>
          <source srcset="@/assets/images/suport-4.svg" media="(max-width: 992px)" />
          <img src="@/assets/images/suport-04.svg" alt="MDN" />
        </picture>


        
      </div>

      <div class="img-wrapp d-flex align-items-center justify-content-between">
        <picture>
          <source srcset="@/assets/images/suport-5.svg" media="(max-width: 992px)" />
          <img src="@/assets/images/suport-05.svg" alt="MDN" />
        </picture>

        <picture>
          <source srcset="@/assets/images/suport-6.svg" media="(max-width: 992px)" />
          <img src="@/assets/images/suport-06.svg" alt="MDN" />
        </picture>

        <picture>
          <source srcset="@/assets/images/suport-7.svg" media="(max-width: 992px)" />
          <img src="@/assets/images/suport-07.svg" alt="MDN" />
        </picture>

        <picture>
          <source srcset="@/assets/images/suport-8.svg" media="(max-width: 992px)" />
          <img src="@/assets/images/suport-08.svg" alt="MDN" />
        </picture>
      </div> -->


      <!-- <div class="row justify-content-center align-items-center flex-wrap">
        <div
          v-for="item in trustedItems"
          :key="item.id"
          class="col-4 col-lg-3 col-xl-2 d-flex align-items-center justify-center"
        >
          <div class="img-holder">
            <img
              :data-src="require(`@/assets/images/${item.image}`)"
              class="lazyload"
              :alt="item.title"
            />
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
// import { gsapInit } from '@/helper/gsap-animations/TrustedSection.js'

export default {
  name: 'TrustedSection',
  // data() {
  //   return {
  //     trustedItems: [
  //       {
  //         id: 1,
  //         title: 'Bitburger',
  //         image: 'suport-01.svg',
  //       },
  //       {
  //         id: 2,
  //         title: 'Audi',
  //         image: 'suport-02.svg',
  //       },
  //       {
  //         id: 3,
  //         title: 'Ritter sport',
  //         image: 'suport-03.svg',
  //       },
  //       {
  //         id: 4,
  //         title: 'Samsung',
  //         image: 'suport-04.svg',
  //       },
  //       {
  //         id: 5,
  //         title: 'Koh-I-Noor',
  //         image: 'suport-05.svg',
  //       },
  //       {
  //         id: 6,
  //         title: 'hard Rock',
  //         image: 'suport-06.svg',
  //       },
  //       {
  //         id: 7,
  //         title: 'hard Rock',
  //         image: 'suport-07.svg',
  //       },
  //       {
  //         id: 8,
  //         title: 'hard Rock',
  //         image: 'suport-08.svg',
  //       },
  //     ],
  //   }
  // },
  // mounted() {
  //   gsapInit()
  // },
}
</script>

<style lang="scss">
.trusted-section {
  background: #f9f9f9;
  padding-bottom: 10rem;
}
.trusted {
  margin-bottom: 85px;
  padding-top: 85px;
  text-transform: unset;
  font-weight: 500;
  @include media-breakpoint-down(md) {
    margin-bottom: 50px;
    padding-top: 50px;
  }
}
.img-wrapp {
  flex-wrap: wrap;
  @include media-breakpoint-down(md) {
    justify-content: space-around !important;
  }
  img {
    margin-bottom: 7rem;
  }
  
}
// picture:nth-child(2n) {
//   padding-left: 3rem;
// }
// @import '@/components/TrustedSection/TrustedSection.scss';
</style>
