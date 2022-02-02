import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
	gsap.set(".list-section h2", { opacity: 0 });
	ScrollTrigger.batch(".list-section h2", {
		onEnter: (batch) =>
			gsap.to(batch, {
				opacity: 1,
				stagger: 0.15,
			}),
		start: "top 85%",
		end: "bottom 30%",
	});

	gsap.set(".list-section ul", { opacity: 0, y: 24 });
	ScrollTrigger.batch(".list-section ul", {
		onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.25 }),
		onEnterBack: (batch) =>
			gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15 }),
		start: "top 85%",
		end: "bottom 10%",
	});
}