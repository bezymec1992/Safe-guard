<template>
  <div class="footer-container">
    <div class="footer-container__wrapper">
      <div class="footer-container__lists footer-text">
        <div class="footer-text__column-left">
          <img
            class="footer-text__logo"
            src="@/assets/icons/footer-logo.png"
            alt="logo.png"
          />

          <div class="footer-text__description animate">
            <p>
              We are specialist protecting your assets and reputation to make
              sure you operate risk-free and focus on your core business.
            </p>
          </div>
          <div class="footer-text__description animate">
            <span class="color-white">Address:</span>
            <p>Hobbemakade 29, 1071 XK, Amsterdam, Netherlands</p>
          </div>
          <div class="footer-text__description animate">
            <span class="color-white">E-mail:</span>
            <p>safeguard_help@gmail.com</p>
          </div>
        </div>
        <div class="footer-text-block">
          <div class="footer-text__column-center footerNav animate">
            <div class="footerNav__item primary-weight">Main</div>
            <router-link class="footerNav__item" to="/">Home</router-link>
            <router-link class="footerNav__item" to="/AboutUs"
              >About Us</router-link
            >
            <router-link class="footerNav__item" to="/History"
              >Our history</router-link
            >
            <router-link class="footerNav__item" to="/ContactUs"
              >Contact Us</router-link
            >
          </div>
          <div class="footer-text__column-right animate">
            <div class="footerNav__item primary-weight">Services</div>
            <router-link class="footerNav__item" to="/Training"
              >Training and Implementation</router-link
            >
            <router-link class="footerNav__item" to="/Cyber"
              >Cyber Consultants</router-link
            >
            <router-link class="footerNav__item" to="/Consultancy"
              >Consultancy and brand protection</router-link
            >
            <router-link class="footerNav__item" to="/Software"
              >Software</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="footer-container__copyright">
      &#169; Safeguard - all rights reserved
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
