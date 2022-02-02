import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
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