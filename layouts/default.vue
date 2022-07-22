<template>
  <transition>
    <div class="wrapper">
      <Header />
      <main class="main">
        <nuxt />
      </main>
      <Footer />
    </div>
  </transition>
</template>

<script>
import Header from '@/components/Header/Header.vue'
// import Footer from '@/components/Footer/Footer.vue'

export default {
  components: {
    Header,
    Footer: () => import('@/components/Footer/Footer.vue'),
  },
  // components: {
  // Header,
  // Footer,
  // },
}
</script>

<style scoped></style>
