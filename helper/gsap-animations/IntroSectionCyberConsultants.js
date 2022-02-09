import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const gsapInitIntroSectionCyberConsultants = () => {
  if (document.querySelector('.cyber-consultants .phone-img')) {
    gsap.set('.cyber-consultants .phone-img', {
      opacity: 0,
      rotation: -10,
      y: 100,
      x: 50,
    })
    ScrollTrigger.batch('.intro-section .phone-img', {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.15,
          delay: 0.5,
          duration: 0.5,
          rotation: 0,
        }),
      start: 'top 75%',
      end: 'bottom 10%',
    })
    gsap.set('.intro-section .msg-holder', {
      opacity: 0,
      scale: 0,
    })
    ScrollTrigger.batch('.intro-section .msg-holder', {
      onEnter: (batch) =>
        gsap.to(batch, {
          scale: 1,
          opacity: 1,
          delay: 1,
          duration: 0.5,
          stagger: 0.35,
        }),
      start: 'top 75%',
      end: 'bottom 10%',
    })
  }
}
