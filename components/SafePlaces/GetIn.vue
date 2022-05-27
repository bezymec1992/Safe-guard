<template>
  <div class="get-in">
    <div class="container">
      <div class="row">
        <slot name="title">
          <h2 class="h2">
            Let’s protect your place and make it <br />
            safe for everyone now
          </h2>
        </slot>
        <router-link :to="link" class="btn btn-dark"
          >Need our help?</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GetIn',
  props: {
    title: {
      type: String,
      default: 'title',
    },
    link: {
      type: String,
      default: '/',
    },
  },
}
</script>

<style lang="scss" scope>
.get-in {
  padding-bottom: 24rem;

  @include media-breakpoint-down(md) {
    padding-bottom: 12rem;
  }

  .h2 {
    text-align: center;
    margin-bottom: 4rem;
  }

  .btn {
    margin: auto;
    justify-content: center;
    max-width: 30rem;
  }
}
</style>
