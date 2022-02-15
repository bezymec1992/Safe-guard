<template>
  <header class="header">
    <div class="container">
      <strong class="logo">
        <nuxt-link to="/">
          <img
            data-src="@/assets/images/logo.svg"
            class="lazyload"
            alt="safeguard"
          />
        </nuxt-link>
      </strong>
      <nav class="main-nav">
        <ul class="main-menu">
          <li v-for="item in desktopLinks" :key="item.id">
            <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
          </li>
        </ul>
      </nav>
      <nav class="additional-nav" :class="{ open: menuOpen }">
        <div class="container">
          <div class="nav-top">
            <strong class="logo">
              <nuxt-link to="/">
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
          <div class="nav-body">
            <ul class="additional-menu">
              <li v-for="item in mobileLinks" :key="item.id">
                <nuxt-link :to="item.url">{{ item.title }}</nuxt-link>
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
