<template>
  <div class="intro-section">
    <slot></slot>
  </div>
</template>

<script>
import { gsapInitIntroSectionHelm } from '@/helper/gsap-animations/IntroSectionHelm.js'
import { gsapInitDivingSuit } from '@/helper/gsap-animations/DivingSuit.js'
import { gsapInitIntroSectionWatch } from '@/helper/gsap-animations/IntroSectionWatch.js'
import { gsapInitIntroSectionTape } from '@/helper/gsap-animations/IntroSectionTape.js'
import { gsapInitIntroSectionPunchingBug } from '@/helper/gsap-animations/IntroSectionPunchingBug.js'
import { gsapInitIntroSectionCyberConsultants } from '@/helper/gsap-animations/IntroSectionCyberConsultants.js'
import { gsapInitIntroSectionBrandProtection } from '@/helper/gsap-animations/IntroSectionBrandProtection.js'
import { gsapInitIntroSectionSoftware } from '@/helper/gsap-animations/IntroSectionSoftware.js'

export default {
  name: 'IntroSection',
  mounted() {
    gsapInitIntroSectionHelm()
    gsapInitDivingSuit()
    gsapInitIntroSectionWatch()
    gsapInitIntroSectionTape()
    gsapInitIntroSectionPunchingBug()
    gsapInitIntroSectionCyberConsultants()
    gsapInitIntroSectionBrandProtection()
    gsapInitIntroSectionSoftware()
  },
}
</script>

<style lang="scss">
@import '@/components/IntroSection/IntroSection.scss';
</style>
