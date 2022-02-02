import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
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