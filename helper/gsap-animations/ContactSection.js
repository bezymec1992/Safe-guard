import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
	gsap.set(".contact-section .container", { opacity: 0 });
	ScrollTrigger.batch(".contact-section .container", {
		onEnter: (batch) => gsap.to(batch, { opacity: 1, stagger: 0.15 }),

	});
}