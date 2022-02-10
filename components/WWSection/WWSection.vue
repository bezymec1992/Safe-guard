<template>
  <div class="ww-section">
    <div class="container">
      <h2 class="h2">Why We</h2>
      <div class="text-holder">
        <p>
          A team dedicated to protect your assets and reputation. With our
          global footprint and our specialized team members and partners we know
          what it takes to make sure that we can deliver a minimum risk
          environment for our clients.
        </p>
      </div>
      <div class="row">
        <div v-for="item in wwItems" :key="item.id" class="col-sm-6 col-lg-3">
          <div class="ww-item">
            <span class="item-digit">{{ item.digit }}</span>
            <div class="item-text">
              <span class="item-title">{{ item.title }}</span>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsapInit } from '@/helper/gsap-animations/WWSection.js'

export default {
  name: 'WWSection',
  data() {
    return {
      wwItems: [
        {
          id: 1,
          digit: '25+',
          title: 'YEARS OF EXPERIENCE',
          description: 'In handling legal issues.',
        },
        {
          id: 2,
          digit: '230+',
          title: 'SIGNATURE STRATEGIES',
          description: 'Developed for our clients.',
        },
        {
          id: 3,
          digit: '145',
          title: 'CORPORATE CLIENTS',
          description: 'We helped thus far.',
        },
        {
          id: 4,
          digit: '30',
          title: 'employees working',
          description: 'For your legal security.',
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
@import '@/components/WWSection/WWSection.scss';
</style>
