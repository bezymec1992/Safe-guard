<template>
  <div class="error-page d-flex align-items-center">
    <div class="container text-center">
      <h1 v-if="error.statusCode === 404" class="h1 d-flex flex-column">
        <small>404</small> Page not found
      </h1>
      <h1 v-else class="h1">An error occurred</h1>
      <NuxtLink to="/">Go to Home page</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.error-page {
  min-height: 80vh;
}
</style>
