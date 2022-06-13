import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInitIntroSectionWatch = () => {
  if (document.querySelector('.intro-section .watch')) {
    gsap.set('.intro-section .watch', {
      opacity: 0,
      rotation: -40,
      y: 100,
    })
    ScrollTrigger.batch('.intro-section .watch', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          delay: 0.3,
          duration: 0.5,
          rotation: 0,
        }),

    })

    gsap.set('.intro-section .watch-shadow', {
      opacity: 0,
    })
    ScrollTrigger.batch('.intro-section .watch-shadow', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 1,
          duration: 0.8,
        }),

    })

    gsap.set('.intro-section .w-msg', {
      opacity: 0,
      scale: 0,
    })
    ScrollTrigger.batch('.intro-section .w-msg', {
      onEnter: (batch) =>
        gsap.to(batch, {
          scale: 1,
          opacity: 1,
          delay: 1.2,
          duration: 0.5,
          stagger: 0.35,
        }),

    })
  }
}
