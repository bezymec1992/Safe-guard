import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInitIntroSectionHelm = () => {
  if (document.querySelector('.intro-section .helm')) {
    gsap.set('.intro-section .helm', {
      opacity: 0,
      x: -224,
      y: 200,
      scale: 0,
      scaleX: 20,

    })
    ScrollTrigger.batch('.intro-section .helm', {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, x: 0, y: 0, stagger: 0.15, scale: 1 }),
      start: "center 100%",

    })

    gsap.set('.intro-section .earth', {
      opacity: 0,
      x: 24,
      y: 20,
      scale: 0,
      scaleX: 20,
    })
    ScrollTrigger.batch('.intro-section .earth', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.15,
          scale: 1,
          delay: 0.5,
          start: "center 100%",
        }),

    })

    gsap.set('.intro-section .info', {
      opacity: 0,
    })
    ScrollTrigger.batch('.intro-section .info', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 1,
          start: "center 100%",
        }),

    })
  }
}
