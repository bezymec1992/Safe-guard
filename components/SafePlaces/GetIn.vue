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
        <nuxt-link :to="to" class="btn btn-dark">Need our help?</nuxt-link>
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
    to: {
      type: [String, Object],
      default: '',
    },
  },
}
</script>
<style lang="scss">
.get-in {
  .h2 {
    text-align: center;
    margin-bottom: 4rem;
    text-transform: inherit;
  }
}
</style>
<style lang="scss" scope>
.get-in {
  padding-bottom: 24rem;

  @include media-breakpoint-down(md) {
    padding-bottom: 12rem;
  }

  .h2 {
    text-align: center;
    margin-bottom: 4rem;
    text-transform: inherit;
  }

  .btn {
    margin: auto;
    justify-content: center;
    max-width: 30rem;
  }
}
</style>
