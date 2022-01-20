<template>
  <header class="header">
    <div class="container">
      <strong class="logo">
        <router-link to="/">
          <img src="@/assets/images/logo.svg" alt="safeguard" />
        </router-link>
      </strong>
      <nav class="main-nav">
        <ul class="main-menu">
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/services">What We Do</router-link></li>
          <li><router-link to="/contact-us">Contact Us</router-link></li>
        </ul>
      </nav>
      <nav class="additional-nav" :class="{ open: menuOpen }">
        <div class="container">
          <div class="nav-top">
            <strong class="logo">
              <router-link to="/">
                <img src="@/assets/images/logo.svg" alt="safeguard" />
              </router-link>
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
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
              <li><router-link to="/services">What We Do</router-link></li>
              <li><router-link to="/contact-us">Contact Us</router-link></li>
            </ul>
            <ul class="additional-menu">
              <li>
                <a href="#">Terms and conditions</a>
              </li>
              <li><a href="#">Terms of use</a></li>
              <li>
                <a href="#">Privacy declaration</a>
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
  name: "Header",
  props: {
    // msg: String
  },
  data: () => ({
    menuOpen: false,
  }),
  watch: {
    $route() {
      if (document.body.classList.contains("menu-opened")) {
        document.body.classList.remove("menu-opened");
        this.menuOpen = !this.menuOpen;
      }
    },
  },
  methods: {
    openMenu() {
      this.menuOpen = !this.menuOpen;

      if (this.menuOpen) {
        document.body.classList.add("menu-opened");
      } else {
        document.body.classList.remove("menu-opened");
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/components/Header/Header.scss";
</style>
