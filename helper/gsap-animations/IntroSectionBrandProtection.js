import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInitIntroSectionBrandProtection = () => {
  if (document.querySelector('.intro-section .building')) {
    gsap.set('.intro-section .building', {
      opacity: 0,
      scale: 0,
      y: 100,
    })
    ScrollTrigger.batch('.intro-section .building', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, scale: 1, y: 0 }),
      // start: 'top 75%',
      // end: 'bottom 10%',
    })
    gsap.set('.intro-section .hld-1', {
      opacity: 0,
      scale: 0,
      translateX: 0,
    })
    ScrollTrigger.batch('.intro-section .hld-1', {
      onEnter: (batch) =>
        gsap.to(batch, {
          duration: 1.5,
          delay: 1,
          keyframes: [
            { opacity: 1, scale: 1 },
            { translateX: '150%', delay: 0.5 },
          ],
        }),
      // start: 'top 75%',
      // end: 'bottom 10%',
    })
    gsap.set('.intro-section .hld-2', {
      opacity: 0,
      scale: 0,
      translateX: 0,
    })
    ScrollTrigger.batch('.intro-section .hld-2', {
      onEnter: (batch) =>
        gsap.to(batch, {
          duration: 1.5,
          delay: 1,
          keyframes: [
            { opacity: 1, scale: 1 },
            { translateX: '-100%', delay: 0.5 },
          ],
        }),
      // start: 'top 75%',
      // end: 'bottom 10%',
    })
    gsap.set('.visual-section', {
      opacity: 0,
    })
    ScrollTrigger.batch('.visual-section', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1 }),
      // start: 'top 75%',
      // end: 'bottom 10%',
    })
  }
}
