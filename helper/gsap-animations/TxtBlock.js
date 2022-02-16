import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInit = () => {
  // start animation for txt-block-1
  if (document.querySelector('.txt-block-1')) {
    gsap.set('.txt-block-1 .img-holder', { opacity: 0, x: 24 })
    ScrollTrigger.batch('.txt-block-1 .img-holder', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
      start: 'top 75%',
      end: 'bottom 10%',
    })

    gsap.set('.txt-block-1 .h2', {
      opacity: 0,
      y: 24,
    })
    ScrollTrigger.batch('.txt-block-1 .h2', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: 'top 75%',
      end: 'bottom 10%',
    })

    gsap.set('.txt-block-1 .text-holder', {
      opacity: 0,
      y: 24,
    })
    ScrollTrigger.batch('.txt-block-1 .text-holder', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: 'top 75%',
      end: 'bottom 10%',
    })
  }
  // end animation for txt-block-1

  // start animation for txt-block-2
  if (document.querySelector('.txt-block-2')) {
    gsap.set('.txt-block-2 .img-holder', { opacity: 0, x: -24 })
    ScrollTrigger.batch('.txt-block-2 .img-holder', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
      start: 'top 75%',
      end: 'bottom 10%',
    })

    gsap.set('.txt-block-2 .h2', {
      opacity: 0,
      y: 24,
    })
    ScrollTrigger.batch('.txt-block-2 .h2', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: 'top 75%',
      end: 'bottom 10%',
    })

    gsap.set('.txt-block-2 .text-holder', {
      opacity: 0,
      y: 24,
    })
    ScrollTrigger.batch('.txt-block-2 .text-holder', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: 'top 75%',
      end: 'bottom 10%',
    })
  }
  // end animation for txt-block-2
}
