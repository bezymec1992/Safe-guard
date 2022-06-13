import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const gsapInit = () => {
	// start animation for txt-block-1

	if (document.querySelector('.visual-section')) {
		gsap.set(".visual-section", { opacity: 0, });
		ScrollTrigger.batch(".visual-section", {
			onEnter: (batch) => gsap.to(batch, { opacity: 1, }),
		});
	}

	if (document.querySelector('.visual-section .h1')) {
		gsap.set(".visual-section .h1", {
			opacity: 0,
			y: 24,
		});
		ScrollTrigger.batch(".visual-section .h1", {
			onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, }),

		});
	}


	if (document.querySelector('.visual-section .text-holder')) {
		gsap.set(".visual-section .text-holder", {
			opacity: 0,
			y: 24,
		});
		ScrollTrigger.batch(".visual-section .text-holder", {
			onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, delay: 0.3 }),

		});
	}
	// end animation for txt-block-2
}