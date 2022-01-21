<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <strong class="logo">
            <router-link to="/">
              <img src="@/assets/images/logo-white.svg" alt="SafeGuard" />
            </router-link>
          </strong>
          <div class="text-holder">
            <p>
              We are specialist protecting your assets and reputation to make
              sure you operate risk-free and focus on your core business.
            </p>
          </div>
          <ul class="contact-links">
            <li>
              <h3>Address</h3>
              <address>Hobbemakade 29, 1071 XK, Amsterdam, Netherlands</address>
            </li>
            <li>
              <h3>E-mail:</h3>
              <a href="mailto:safeguard_help@gmail.com">
                safeguard_help@gmail.com</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-6 d-flex justify-content-lg-center">
          <div class="footer-group">
            <h3>Main</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">What We Do</a></li>
              <li><a href="#">Our history</a></li>
              <li><a href="#">Contact us</a></li>
            </ul>
          </div>
          <div class="footer-group">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Training and Implementation</a></li>
              <li><a href="#">Cyber Consultants</a></li>
              <li><a href="#">Consultancy and brand protection</a></li>
              <li><a href="#">Software</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; Safeguard - all rights reserved</p>
    </div>
    <a
      href="#"
      class="go-to-top"
      :class="{ show: counterHeight }"
      @click.prevent="scrollByTop()"
    >
      <span class="icon-holder">
        <img src="@/assets/images/icon-09.svg" alt="arrow-top" />
      </span>
    </a>
  </footer>
</template>

<script>
import smoothscroll from "smoothscroll-polyfill";

export default {
  name: "Footer",
  props: {
    //
  },
  data: () => ({
    counterHeight: false,
  }),
  methods: {
    scrollByTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    handleScroll() {
      if (pageYOffset >= 500) {
        this.counterHeight = true;
      } else {
        this.counterHeight = false;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    smoothscroll.polyfill();
  },
};
</script>

<style lang="scss">
@import "@/components/Footer/Footer.scss";
</style>
