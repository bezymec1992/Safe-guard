<template>
  <div class="statistic-section">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-4"
          v-for="item in statisticItems"
          :key="item.id"
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
import { gsapInit } from '@/helper/gsap-animations/StatisticSection.js'

export default {
  name: 'StatisticSection',
  data() {
    return {
      statisticItems: [
        {
          id: 1,
          title: '3.5 Billions',
          description:
            'Preventive measurements implemented (cost reduction, loss of investmen).',
        },
        {
          id: 2,
          title: '25+ Years',
          description:
            'Of experience in minimizing risk and protecting assets.',
        },
        {
          id: 3,
          title: '1.5 Billions',
          description:
            'Of experience in minimizing risk and protecting assets.',
        },
      ],
    }
  },
  mounted() {
    gsapInit()
  },
}
</script>

<style lang="scss">
@import '@/components/StatisticSection/StatisticSection.scss';
</style>
