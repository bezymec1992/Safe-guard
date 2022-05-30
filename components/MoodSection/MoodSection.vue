<template>
  <div class="mood-section">
    <div class="inner-holder">
      <div class="container">
       
          <h2 class="title-m">Day mood check</h2>
       

        <div class="blocks-holder">
          <div
            v-for="(step, i) of steps"
            :key="i"
            class="block"
            :class="`item-${i + 1}`"
          >
            <div class="img">
              <img
                :data-src="require(`@/assets/images/${step.img}`)"
                alt="image.title"
                class="lazyload"
              />
            </div>
          </div>
        </div>

          <h2 class="h1">Day mood check</h2>
          <p class="txt">
            Mood check will help you and also us to understand how do you feel
            during each period. It will also help to compare info before and
            after team’s improving.
          </p>
      
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {
  name: 'MoodSection',
  data() {
    return {
      steps: [
        {
          img: 'mood-1.png',
          text: 'Select your options',
        },
        {
          img: 'mood-2.png',
          text: 'Choose convenient route ',
        },
        {
          img: 'mood-3.png',
          text: 'Get info and prices',
        },
      ],
    }
  },

  mounted() {
    for (let i = 0; i < this.steps.length; i++) {
      this.setAnimations(i)
      this.playAnimations(i)
    }
  },

  methods: {
    setAnimations(count) {
      gsap.set(`.item-${count + 1} .img`, {
        translateY: '20%',
        scale: 0.7,
        opacity: 0,
        duration: 1,
      })
      gsap.set(`.item-${count + 1} .inner`, {
        opacity: 0,
      })
    },

    playAnimations(count) {
      ScrollTrigger.batch(`.item-${count + 1} .img`, {
        onEnter: (batch) =>
          gsap.to(batch, {
            delay: count + 0.5,
            duration: 1.3,
            opacity: 1,
            translateY: 0,
            scale: 1,
          }),
      })
      ScrollTrigger.batch(`.item-${count + 1} .inner`, {
        onEnter: (batch) =>
          gsap.to(batch, {
            delay: count + 0.5,
            duration: 1.3,
            opacity: 1,
          }),
      })
    },
  },
}
</script>

<style lang="scss">
@import './MoodSection.scss';
</style>
