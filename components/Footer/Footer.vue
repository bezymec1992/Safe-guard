<template>
  <footer class="footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="logo">
            <router-link to="/">
              <img
                data-src="@/assets/images/logo-white.svg"
                class="lazyload"
                alt="SafeGuard"
              />
            </router-link>
          </div>
          <div class="text-holder">
            <p>
              We are specialist protecting your assets and reputation to make sure you operate risk-free and focus on your core business.
            </p>
          </div>
          <ul class="contact-links">
            <li>
              <h3>Address</h3>
              <address>Hobbemakade 29, 1071 XK, Amsterdam, Netherlands</address>
            </li>
            <li>
              <h3>E-mail</h3>
              <a href="mailto:safeguard_help@gmail.com">
                safeguard_help@gmail.com</a
              >
            </li>
            <li>
              <h3>Phone</h3>
              <a href="tel:+31202050455">
                +31202050455</a
              >
            </li>
          </ul>
        </div>
        <div class="col-lg-6 d-flex justify-content-lg-center">
          <div class="footer-group">
            <h3>Main</h3>
            <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About us</router-link></li>
              <li><router-link to="/services">What We Do</router-link></li>
              <li>
                <router-link to="/about/timeline">Our history</router-link>
              </li>
              <li><router-link to="/contact-us">Contact us</router-link></li>
            </ul>
          </div>
          <div class="footer-group">
            <h3>Services</h3>
            <ul>
              <li>
                <router-link to="/services/training"
                  >Training and Implementation</router-link
                >
              </li>
              <li>
                <router-link to="/services/cyber-consultants"
                  >Cyber Consultants</router-link
                >
              </li>
              <li>
                <router-link to="/services/brand-protection"
                  >Consultancy and brand protection</router-link
                >
              </li>
              <li>
                <router-link to="/services/software">Software</router-link>
              </li>
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
        <img
          data-src="@/assets/images/icon-09.svg"
          class="lazyload"
          alt="arrow-top"
        />
      </span>
    </a>
  </footer>
</template>

<script>
import smoothscroll from 'smoothscroll-polyfill'

export default {
  name: 'Footer',
  data: () => ({
    counterHeight: false,
  }),
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    smoothscroll.polyfill()
  },
  methods: {
    scrollByTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    },
    handleScroll() {
      if (pageYOffset >= 500) {
        this.counterHeight = true
      } else {
        this.counterHeight = false
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/components/Footer/Footer.scss';
</style>
