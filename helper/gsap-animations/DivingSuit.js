import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInitDivingSuit = () => {
  if (document.querySelector('.diving-suit')) {
    gsap.set('.diving-suit .diving-suit-img-1', { opacity: 0 })
    ScrollTrigger.batch('.diving-suit .diving-suit-img-1', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
          delay: 0.5,
          duration: 2,
        }),
      // start: 'top 75%',
      // end: 'bottom 10%',
    })

    gsap.set('.diving-suit .diving-suit-img-2', {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      scale: -0.5,
      y: -100,
    })
    ScrollTrigger.batch('.diving-suit .diving-suit-img-2', {
      onEnter: (batch) =>
        gsap.to(batch, {
          delay: 1,
          duration: 1,

          keyframes: [
            { opacity: 1, scale: 1 },
            { y: 0, delay: 0.2 },
          ],
        }),
      // start: 'top 75%',
      // end: 'bottom 10%',
    })
  }
}
