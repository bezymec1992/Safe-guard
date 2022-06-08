<template>
  <header class="header">
    <div class="container">
      <!-- <strong  class="logo"> -->
      <div v-if="safePlace" class="logo">
        <nuxt-link to="/services/brand-protection/safeplace">
          <img
            data-src="@/assets/images/logo-2.png"
            class="lazyload"
            alt="safeguard"
          />
        </nuxt-link>
      </div>
      <nuxt-link v-else to="/">
        <img
          data-src="@/assets/images/logo.svg"
          class="lazyload"
          alt="safeguard"
        />
      </nuxt-link>
      <!-- </strong> -->
      <strong class="logo"> </strong>

      <nav class="main-nav">
        <ul v-if="safePlace" class="main-menu">
          <li v-for="item in desktopSafeLinks" :key="item.id">
            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="btn btn-dark safeplace-nav"
              >Safeguard</nuxt-link
            >
          </li>
        </ul>
        <ul v-else class="main-menu">
          <li v-for="item in desktopLinks" :key="item.id">
            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/services/brand-protection/safeplace"
              class="btn btn-dark d-none d-md-inline-flex justify-content-center safeplace-nav"
              >Safeplace</nuxt-link
            >
          </li>
        </ul>
      </nav>
      <nav class="additional-nav" :class="{ open: menuOpen }">
        <div class="container">
          <div class="nav-top">
            <strong v-if="safePlace" class="logo">
              <nuxt-link to="/">
                <img
                  data-src="@/assets/images/logo-2.png"
                  class="lazyload"
                  alt="safeguard"
                />
              </nuxt-link>
            </strong>
            <strong v-else class="logo">
              <nuxt-link v-if="safePlace" to="/">
                <img
                  data-src="@/assets/images/logo-2.png"
                  class="lazyload"
                  alt="safeguard"
                />
              </nuxt-link>

              <nuxt-link v-else to="/">
                <img
                  data-src="@/assets/images/logo.svg"
                  class="lazyload"
                  alt="safeguard"
                />
              </nuxt-link>
            </strong>
            <a
              class="open-menu d-block d-lg-none"
              href="#"
              @click.prevent="openMenu()"
            >
              <span></span>
              <span></span>
              <span class="visually-hidden">Open Mobile Nav</span>
            </a>
          </div>
          <div v-if="safePlace" class="nav-body">
            <ul class="additional-menu">
              <li v-for="item in mobileSafeLinks" :key="item.id">
                <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
              </li>
              <li v-if="safePlace">
                <nuxt-link
                  to="/"
                  class="btn btn-dark d-md-inline-flex justify-content-center"
                  >Safeguard</nuxt-link
                >
              </li>
              <li v-else>
                <nuxt-link
                  to="/services/brand-protection/safeplace"
                  class="btn btn-dark d-md-inline-flex justify-content-center"
                  >Safeplace</nuxt-link
                >
              </li>
            </ul>
            <ul class="additional-menu">
              <li v-for="item in mobileAdditionalLinks" :key="item.id">
                <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div v-else class="nav-body">
            <ul class="additional-menu">
              <li v-for="item in mobileLinks" :key="item.id">
                <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
              </li>
              <li v-if="safePlace">
                <nuxt-link
                  to="/"
                  class="btn btn-dark d-md-inline-flex justify-content-center"
                  >Safeguard</nuxt-link
                >
              </li>
              <li v-else>
                <nuxt-link
                  to="/services/brand-protection/safeplace"
                  class="btn btn-dark d-md-inline-flex justify-content-center"
                  >Safeplace</nuxt-link
                >
              </li>
            </ul>
            <ul class="additional-menu">
              <li v-for="item in mobileAdditionalLinks" :key="item.id">
                <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <a
        class="open-menu d-block d-lg-none"
        href="#"
        :class="{ open: menuOpen }"
        @click.prevent="openMenu()"
      >
        <span></span>
        <span></span>
        <span class="visually-hidden">Open Mobile Nav</span>
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    safePlace: {
      type: Boolean,
      default: false,
    },
    // safePlaceLogo: {
    //   type: Boolean,
    //   default: false,
    // },
  },
  data: () => ({
    menuOpen: false,
    desktopLinks: [
      {
        id: 1,
        title: 'About Us',
        url: '/about',
      },
      {
        id: 2,
        title: 'What We Do',
        url: '/services',
      },
      {
        id: 3,
        title: 'Contact Us',
        url: '/contact-us',
      },
    ],
    desktopSafeLinks: [
      {
        id: 1,
        title: 'About Safeplace',
        url: '/services/brand-protection/safeplace',
      },
      {
        id: 2,
        title: 'Assessment',
        url: '/services/brand-protection/safeplace-services',
      },
      {
        id: 3,
        title: 'Awareness Program',
        url: '/services/brand-protection/awareness-program',
      },
      {
        id: 4,
        title: 'Software',
        url: '/services/brand-protection/safeplace-software',
      },
    ],
    mobileLinks: [
      {
        id: 1,
        title: 'Home',
        url: '/',
      },
      {
        id: 2,
        title: 'About Us',
        url: '/about',
      },
      {
        id: 3,
        title: 'What We Do',
        url: '/services',
      },
      {
        id: 4,
        title: 'Contact Us',
        url: '/contact-us',
      },
    ],
    mobileSafeLinks: [
      {
        id: 1,
        title: 'About Safeplace',
        url: '/services/brand-protection/safeplace',
      },
      {
        id: 2,
        title: 'Assessment',
        url: '/services/brand-protection/safeplace-services',
      },
      {
        id: 3,
        title: 'Awareness Program',
        url: '/services/brand-protection/awareness-program',
      },
      {
        id: 4,
        title: 'Software',
        url: '/services/brand-protection/safeplace-software',
      },
    ],
    mobileAdditionalLinks: [
      {
        id: 1,
        title: 'Terms and conditions',
        url: '/404',
      },
      {
        id: 2,
        title: 'Terms of use',
        url: '/404',
      },
      {
        id: 3,
        title: 'Privacy declaration',
        url: '/404',
      },
    ],
  }),
  watch: {
    $route() {
      if (document.body.classList.contains('menu-opened')) {
        document.body.classList.remove('menu-opened')
        this.menuOpen = !this.menuOpen
      }
    },
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen

      if (this.menuOpen) {
        document.body.classList.add('menu-opened')
      } else {
        document.body.classList.remove('menu-opened')
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/components/Header/Header.scss';
</style>
