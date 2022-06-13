import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInitIntroSectionPunchingBug = () => {
  if (document.querySelector('.intro-section .punching-bag')) {
    gsap.set('.intro-section .punching-bag', {
      opacity: 0,
      y: -100,
    })
    ScrollTrigger.batch('.intro-section .punching-bag', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 0.5,
        }),

    })
  }
}
