<template>
  <div class="mood-section">
    <div class="container">
      <h2>Discover our app</h2>
      <div class="blocks-holder d-none d-lg-flex">
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

      <div class="blocks-holder d-lg-none">
        <div class="img">
          <img
            :data-src="require(`@/assets/images/img-106.png`)"
            alt="image.title"
            class="lazyload"
          />
        </div>
      </div>

      <h3 class="h1">DAILY MOOD CHECK</h3>
      <p class="txt">
        Our daily mood check will help you and us to understand how your team is feeling during each period so we can isolate and target any problems that may be affecting the culture, and atmosphere of your team and environment. It will also help us to compare statistics before and after measures have been implemented towards improving your workplaces safety.
      </p>
    </div>
  </div>
</template>

<script>
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'

// gsap.registerPlugin(ScrollTrigger)

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

  // mounted() {
  //   gsap.set('.blocks-holder .img', {
  //     opacity: 0,
  //     translateY: '20%',
  //     duration: 0.5,
  //     scale: 0.7,
  //   })
  //   ScrollTrigger.batch('.blocks-holder .img', {
  //     onEnter: (batch) =>
  //       gsap.to(batch, { opacity: 1, y: 0, stagger: 0.5, scale: 1 }),
  //   })
  // },

  // mounted() {
  //   for (let i = 0; i < this.steps.length; i++) {
  //     this.setAnimations(i)
  //     this.playAnimations(i)
  //   }
  // },

  // methods: {
  //   setAnimations(count) {
  //     gsap.set(`.item-${count + 1} .img`, {
  //       translateY: '20%',
  //       scale: 0.7,
  //       opacity: 0,
  //       duration: 0.5,
  //     })
  //     gsap.set(`.item-${count + 1} .inner`, {
  //       opacity: 0,
  //     })
  //   },

  //   playAnimations(count) {
  //     ScrollTrigger.batch(`.item-${count + 1} .img`, {
  //       onEnter: (batch) =>
  //         gsap.to(batch, {
  //           delay: count + 0.1,
  //           duration: 0.5,
  //           opacity: 1,
  //           translateY: 0,
  //           scale: 1,
  //         }),
  //     })
  //     ScrollTrigger.batch(`.item-${count + 1} .inner`, {
  //       onEnter: (batch) =>
  //         gsap.to(batch, {
  //           delay: count + 0.1,
  //           duration: 0.5,
  //           opacity: 1,
  //         }),
  //     })
  //   },
  // },
}
</script>

<style lang="scss">
@import './MoodSection.scss';
</style>
