import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
	gsap.set(".services-section .h1", { opacity: 0 });
	ScrollTrigger.batch(".services-section .h1", {
		start: "center 88%",
		onEnter: (batch) =>
			gsap.to(batch, {
				opacity: 1,
				stagger: 0.15,

			}),

	});

	gsap.set(".services-section .btn-holder", { opacity: 0 });
	ScrollTrigger.batch(".services-section .btn-holder", {
		start: "center 88%",
		onEnter: (batch) =>
			gsap.to(batch, {
				opacity: 1,
				stagger: 0.15,

			}),

	});

	gsap.set(".services-section .gradient-left", { opacity: 0, x: 24 });
	ScrollTrigger.batch(".services-section .gradient-left", {
		start: "center 88%",
		onEnter: (batch) =>
			gsap.to(batch, {
				opacity: 1,
				x: 0,
				stagger: 0.15,

			}),

	});

	gsap.set(".services-section .gradient-right", { opacity: 0, x: -24 });
	ScrollTrigger.batch(".services-section .gradient-right", {
		start: "center 88%",
		onEnter: (batch) =>
			gsap.to(batch, {
				opacity: 1,
				x: 0,
				stagger: 0.15,

			}),

	});

	gsap.set(".services-section .content-holder", { opacity: 0, y: 24 });
	ScrollTrigger.batch(".services-section .content-holder", {
		start: "center 88%",
		onEnter: (batch) =>
			gsap.to(batch, {
				opacity: 1,
				y: 0,
				stagger: 0.15,
				delay: 0.2,

			}),

	});

}



