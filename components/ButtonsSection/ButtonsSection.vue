<template>
  <div class="buttons-section">
    <div class="container">
      <router-link to="/services/" class="btn btn-arrow">
        All Services
        <span class="arrow-wrapper">
          <span class="icon-holder">
            <img src="@/assets/images/icon-02.svg" alt="#" />
          </span>
        </span>
      </router-link>
      <router-link to="/services/brand-protection" class="btn btn-arrow">
        Next Service
        <span class="arrow-wrapper">
          <span class="icon-holder">
            <img src="@/assets/images/icon-02.svg" alt="#" />
          </span>
        </span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ButtonsSection',
}
</script>
