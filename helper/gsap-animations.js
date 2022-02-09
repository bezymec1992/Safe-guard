import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInit = () => {
  // start animation services-project >  visual-section
  if (document.querySelector('.services-project .visual-section')) {
    gsap.set('.visual-section', {
      opacity: 0,
    })
    ScrollTrigger.batch('.visual-section', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 0.5,
          duration: 0.5,
        }),
      start: 'top 75%',
      end: 'bottom 10%',
    })

    if (document.querySelector('.visual-section .anim-item')) {
      gsap.set('.visual-section .anim-item', {
        opacity: 0,
        y: 24,
      })
      ScrollTrigger.batch('.visual-section .anim-item', {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.35,
            delay: 0.7,
            duration: 0.7,
          }),
        start: 'top 75%',
        end: 'bottom 10%',
      })
    }

    if (document.querySelector('.visual-section .img-holder')) {
      gsap.set('.visual-section .img-holder', {
        opacity: 0,
      })
      ScrollTrigger.batch('.visual-section .img-holder', {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            delay: 1.5,
            duration: 0.7,
          }),
        start: 'top 75%',
        end: 'bottom 10%',
      })
    }
  }
  // end animation services-project > visual-section

  // start animation for contact-us > visual-section
  if (document.querySelector('.contact-us .visual-section')) {
    gsap.set('.visual-section .h1', { opacity: 0, y: -24 })
    ScrollTrigger.batch('.visual-section .h1', {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: 'top 75%',
      end: 'bottom 10%',
    })

    gsap.set('.visual-section .img-holder', {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      scale: -0.5,
    })
    ScrollTrigger.batch('.visual-section .img-holder', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          delay: 0.5,
          duration: 0.9,
        }),
      start: 'top 75%',
      end: 'bottom 10%',
    })
  }
  // end animation for contact-us > visual-section

  // start animation for intro-section > punching-bag

  // end animation for intro-section > punching-bag
}
