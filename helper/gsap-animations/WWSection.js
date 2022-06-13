import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
	gsap.set(".ww-section .h2", { opacity: 0, y: 24 });
	ScrollTrigger.batch(".ww-section .h2", {
		onEnter: (batch) =>
			gsap.to(batch, {
				y: 0,
				opacity: 1,
				stagger: 0.15,
				delay: 0.2,
			}),

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

	});

	gsap.set(".ww-section .col-sm-6", { opacity: 0, y: 24 });
	ScrollTrigger.batch(".ww-section .col-sm-6", {
		onEnter: (batch) =>
			gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, delay: 0.5 }),
		onEnterBack: (batch) =>
			gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),

	});
}