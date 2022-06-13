import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInit = () => {
  if (document.querySelector('.plyr-holder')) {
    gsap.set('.plyr-holder', {
      opacity: 0,
      scale: 0,
    })
    ScrollTrigger.batch('.plyr-holder', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, scale: 1 }),

    })
  }
}
