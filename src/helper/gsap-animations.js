import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
  // start animation for quote-section
  if (document.querySelector(".quote-section")) {
    console.log("gsap animations");
    gsap.set(".quote-section", {
      opacity: 0,
    });
    ScrollTrigger.batch(".quote-section", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 0.3,
          duration: 0.5,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for quote-section

  // start animation for contact-section
  if (document.querySelector(".contact-section")) {
    gsap.set(".contact-section .container", { opacity: 0 });
    ScrollTrigger.batch(".contact-section .container", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for contact-section

  // start animation for list-section
  if (document.querySelector(".list-section")) {
    gsap.set(".list-section h2", { opacity: 0 });
    ScrollTrigger.batch(".list-section h2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
          // delay: 0.5,
          // duration: 2,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".list-section ul", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".list-section ul", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      // onLeave: (batch) => gsap.to(batch, { opacity: 0, y: 24 }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      // onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 24 }),

      start: "top 85%",
      end: "bottom 10%",
      // markers: true,
    });
  }
  // end animation for list-section

  // start animation for results-section
  if (document.querySelector(".results-section")) {
    gsap.set(".results-section .anim-item", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".results-section .anim-item", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.45,
          y: 0,
          delay: 0.5,
          duration: 2,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".results-section .anim-item-2", { opacity: 0 });
    ScrollTrigger.batch(".results-section .anim-item-2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.45,
          delay: 1,
          duration: 1,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for results-section

  // start animation for services-section
  if (document.querySelector(".services-section")) {
    gsap.set(".services-section .h1", { opacity: 0 });
    ScrollTrigger.batch(".services-section .h1", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".services-section .btn-holder", { opacity: 0 });
    ScrollTrigger.batch(".services-section .btn-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".services-section .gradient-left", { opacity: 0, x: 24 });
    ScrollTrigger.batch(".services-section .gradient-left", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          stagger: 0.15,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".services-section .gradient-right", { opacity: 0, x: -24 });
    ScrollTrigger.batch(".services-section .gradient-right", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          stagger: 0.15,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".services-section .content-holder", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".services-section .content-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          delay: 0.2,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });
  }
  // end animation for services-section

  // start animation for statistic-section
  if (document.querySelector(".statistic-section")) {
    gsap.set(".statistic-section .statistic-item", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".statistic-section .statistic-item", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.35 }),
      start: "top 85%",
      end: "bottom 10%",
    });
  }
  // end animation for statistic-section

  // start animation for trusted-section
  if (document.querySelector(".trusted-section")) {
    gsap.set(".trusted-section .h2", { opacity: 0 });
    ScrollTrigger.batch(".trusted-section .h2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
          delay: 0.2,
          duration: 2,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".trusted-section .img-holder", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".trusted-section .img-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.3,
          delay: 0.7,
          duration: 0.4,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for trusted-section

  // start animation for wfrom-section
  if (document.querySelector(".wfrom-section")) {
    gsap.set(".wfrom-section .col-md-6", { opacity: 0, y: 24 });

    ScrollTrigger.batch(".wfrom-section .col-md-6", {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, delay: 0.3 }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),

      start: "top 85%",
      end: "bottom 10%",
    });

    gsap.set(".wfrom-section .h2", { opacity: 0, y: 24 });

    ScrollTrigger.batch(".wfrom-section .h2", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),

      start: "top 85%",
      end: "bottom 10%",
    });
  }
  // end animation for wfrom-section

  // start animation for ww-section
  if (document.querySelector(".ww-section")) {
    gsap.set(".ww-section .h2", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".ww-section .h2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          delay: 0.2,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".ww-section .text-holder", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".ww-section .text-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          delay: 0.3,
        }),
      start: "top 85%",
      end: "bottom 30%",
    });

    gsap.set(".ww-section .col-sm-6", { opacity: 0, y: 24 });
    ScrollTrigger.batch(".ww-section .col-sm-6", {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, delay: 0.5 }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 85%",
      end: "bottom 10%",
    });
  }
  // end animation for ww-section

  // start animation for diving-suit
  if (document.querySelector(".diving-suit")) {
    gsap.set(".diving-suit .diving-suit-img-1", { opacity: 0 });
    ScrollTrigger.batch(".diving-suit .diving-suit-img-1", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          stagger: 0.15,
          delay: 0.5,
          duration: 2,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".diving-suit .diving-suit-img-2", {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      scale: -0.5,
      y: -100,
    });
    ScrollTrigger.batch(".diving-suit .diving-suit-img-2", {
      onEnter: (batch) =>
        gsap.to(batch, {
          delay: 1,
          duration: 1,

          keyframes: [
            { opacity: 1, scale: 1 },
            { y: 0, delay: 0.2 },
          ],
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for diving-suit

  // start animation for txt-block-1
  if (document.querySelector(".txt-block-1")) {
    gsap.set(".txt-block-1 .img-holder", { opacity: 0, x: 24 });
    ScrollTrigger.batch(".txt-block-1 .img-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-1 .h2", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block-1 .h2", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-1 .text-holder", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block-1 .text-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for txt-block-1

  // start animation for txt-block-2
  if (document.querySelector(".txt-block-2")) {
    gsap.set(".txt-block-2 .img-holder", { opacity: 0, x: -24 });
    ScrollTrigger.batch(".txt-block-2 .img-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, x: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-2 .h2", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block-2 .h2", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".txt-block-2 .text-holder", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".txt-block-2 .text-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for txt-block-2

  // start animation services-project >  visual-section
  if (document.querySelector(".services-project .visual-section")) {
    gsap.set(".visual-section", {
      opacity: 0,
    });
    ScrollTrigger.batch(".visual-section", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 0.5,
          duration: 0.5,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    if (document.querySelector(".visual-section .anim-item")) {
      gsap.set(".visual-section .anim-item", {
        opacity: 0,
        y: 24,
      });
      ScrollTrigger.batch(".visual-section .anim-item", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            y: 0,
            stagger: 0.35,
            delay: 0.7,
            duration: 0.7,
          }),
        start: "top 75%",
        end: "bottom 10%",
      });
    }

    if (document.querySelector(".visual-section .img-holder")) {
      gsap.set(".visual-section .img-holder", {
        opacity: 0,
      });
      ScrollTrigger.batch(".visual-section .img-holder", {
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            delay: 1.5,
            duration: 0.7,
          }),
        start: "top 75%",
        end: "bottom 10%",
      });
    }
  }
  // end animation services-project > visual-section

  // start animation for contact-us > visual-section
  if (document.querySelector(".contact-us .visual-section")) {
    gsap.set(".visual-section .h1", { opacity: 0, y: -24 });
    ScrollTrigger.batch(".visual-section .h1", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".visual-section .img-holder", {
      opacity: 0,
      scaleX: 0,
      scaleY: 0,
      scale: -0.5,
    });
    ScrollTrigger.batch(".visual-section .img-holder", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          scale: 1,
          delay: 0.5,
          duration: 0.9,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for contact-us > visual-section

  // start animation for intro-section > helm
  if (document.querySelector(".intro-section .helm")) {
    gsap.set(".intro-section .helm", {
      opacity: 0,
      x: -224,
      y: 200,
      scale: 0,
      scaleX: 20,
    });
    ScrollTrigger.batch(".intro-section .helm", {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, x: 0, y: 0, stagger: 0.15, scale: 1 }),
      start: "top 100%",
      end: "bottom 100%",
    });

    gsap.set(".intro-section .earth", {
      opacity: 0,
      x: 24,
      y: 20,
      scale: 0,
      scaleX: 20,
    });
    ScrollTrigger.batch(".intro-section .earth", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          x: 0,
          y: 0,
          stagger: 0.15,
          scale: 1,
          delay: 0.5,
        }),
      start: "top 80%",
      end: "bottom 30%",
    });

    gsap.set(".intro-section .info", {
      opacity: 0,
    });
    ScrollTrigger.batch(".intro-section .info", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 1,
        }),
      start: "top 80%",
      end: "bottom 30%",
    });
  }
  // end animation for intro-section > helm

  // end animation for intro-section  > watch
  if (document.querySelector(".intro-section .watch")) {
    gsap.set(".intro-section .watch", {
      opacity: 0,
      rotation: -40,
      y: 100,
    });
    ScrollTrigger.batch(".intro-section .watch", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          delay: 0.3,
          duration: 0.5,
          rotation: 0,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".intro-section .watch-shadow", {
      opacity: 0,
    });
    ScrollTrigger.batch(".intro-section .watch-shadow", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          delay: 1,
          duration: 0.8,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });

    gsap.set(".intro-section .w-msg", {
      opacity: 0,
      scale: 0,
    });
    ScrollTrigger.batch(".intro-section .w-msg", {
      onEnter: (batch) =>
        gsap.to(batch, {
          scale: 1,
          opacity: 1,
          delay: 1.2,
          duration: 0.5,
          stagger: 0.35,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for intro-section  > watch

  // start animation for timeline-page > intro-section  > img-holder
  if (document.querySelector(".timeline-page .intro-section .img-holder")) {
    gsap.set(".intro-section .img-holder", {
      opacity: 0,
      y: 24,
    });
    ScrollTrigger.batch(".intro-section .img-holder", {
      onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, scale: 1 }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for timeline-page > intro-section  > img-holder

  // start animation for intro-section > punching-bag
  if (document.querySelector(".intro-section .punching-bag")) {
    gsap.set(".intro-section .punching-bag", {
      opacity: 0,
      y: -100,
    });
    ScrollTrigger.batch(".intro-section .punching-bag", {
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 0.5,
        }),
      start: "top 75%",
      end: "bottom 10%",
    });
  }
  // end animation for intro-section > punching-bag
};
