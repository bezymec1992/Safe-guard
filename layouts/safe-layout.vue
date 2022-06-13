<template>
  <div class="wrapper">
    <Header safe-place="boolean" />
    <main class="main">
      <nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue'

export default {
  components: {
    Header,
    Footer: () => import('@/components/Footer/Footer.vue'),
  },
}
</script>

<style></style>
