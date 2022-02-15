<template>
  <div class="buttons-section">
    <div class="container">
      <nuxt-link to="/services/" class="btn btn-arrow">
        All Services
        <span class="arrow-wrapper">
          <span class="icon-holder">
            <img
              data-src="@/assets/images/icon-02.svg"
              class="lazyload"
              alt="#"
            />
          </span>
        </span>
      </nuxt-link>
      <nuxt-link :to="'/services/' + nextLink" class="btn btn-arrow">
        Next Service
        <span class="arrow-wrapper">
          <span class="icon-holder">
            <img
              data-src="@/assets/images/icon-02.svg"
              class="lazyload"
              alt="#"
            />
          </span>
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonsSection',
  props: {
    nextLink: {
      type: String,
      require: false,
      default: '',
    },
  },
}
</script>
