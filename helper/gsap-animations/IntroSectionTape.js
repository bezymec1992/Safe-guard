import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInitIntroSectionTape = () => {
  if (document.querySelector('.timeline-page .intro-section .tape')) {
    gsap.set('.intro-section .img-holder', {
      opacity: 0,
      y: 24,
      duration: 1,
    })
    ScrollTrigger.batch('.intro-section .tape', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, scale: 1 }),

    })
  }
}
