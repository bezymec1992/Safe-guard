<template>
  <div class="statistic-section">
    <div class="container">
      <div class="row">
        <div
          v-for="item in statisticItems"
          :key="item.id"
          class="col-lg-4"
          :class="{ 'col-md-6': item.id < 3 }"
        >
          <div class="statistic-item">
            <h3>{{ item.title }}</h3>
            <div class="text-holder">
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { gsapInit } from '@/helper/gsap-animations/StatisticSection.js'

export default {
  name: 'StatisticSection',
  data() {
    return {
      statisticItems: [
        {
          id: 1,
          title: '1000+ companies ',
          description:
            'We have protected more than 1000 companies assets for more than 25years.',
        },
        {
          id: 2,
          title: '25+ Years',
          description:
            'Of minimizing risk and asset protection.',
        },
        {
          id: 3,
          title: '500 MM USD +',
          description:
            'We have guided investors in the best way forward with safeguarding their investment.',
        },
      ],
    }
  },
  // mounted() {
  //   gsapInit()
  // },
}
</script>

<style lang="scss">
@import '@/components/StatisticSection/StatisticSection.scss';
</style>
