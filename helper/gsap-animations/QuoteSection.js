import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
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

	});
}