import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
	gsap.set(".wfrom-section .col-md-6", { opacity: 0, y: 24 });
	ScrollTrigger.batch(".wfrom-section .col-md-6", {
		onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.25, delay: 0.3 }),
		start: "top 85%",
		end: "bottom 10%",
	});

	gsap.set(".wfrom-section .h2", { opacity: 0, y: 24 });
	ScrollTrigger.batch(".wfrom-section .h2", {
		onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
		start: "top 85%",
		end: "bottom 10%",
	});

}