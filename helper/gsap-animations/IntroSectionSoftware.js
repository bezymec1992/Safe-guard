import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInitIntroSectionSoftware = () => {
  if (document.querySelector('.intro-section .mac-off')) {
    gsap.set('.software .mac-off', {
      opacity: 0,
      scale: 0,
      y: 100,
    })
    ScrollTrigger.batch('.software .mac-off', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, scale: 1, y: 0 }),
      start: 'top 75%',
      end: 'bottom 10%',
    })
    gsap.set('.software .mac-on', {
      opacity: 0,
    })
    ScrollTrigger.batch('.software .mac-on', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, delay: 0.7 }),

    })
    gsap.set('.software .hld-1', {
      opacity: 0,
      y: -100,
    })
    ScrollTrigger.batch('.software .hld-1', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, delay: 1 }),

    })
    gsap.set('.software .hld-2', {
      opacity: 0,
      y: 100,
    })
    ScrollTrigger.batch('.software .hld-2', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, delay: 1 }),

    })
  }
}
