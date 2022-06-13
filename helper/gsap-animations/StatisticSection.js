
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
	gsap.set(".statistic-section .statistic-item", { opacity: 0, y: 24 });
	ScrollTrigger.batch(".statistic-section .statistic-item", {
		onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.35 }),

	});
}


