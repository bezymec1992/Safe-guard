// if (process.client) {
// 	if ('scrollRestoration' in window.history) {
// 		window.history.scrollRestoration = 'manual'
// 		window.addEventListener('beforeunload', () => {
// 			window.history.scrollRestoration = 'auto'
// 		})
// 		window.addEventListener('load', () => {
// 			window.history.scrollRestoration = 'manual'
// 		})
// 	}
// }
// export default function (to, from, savedPosition) {
// 	let position;
// 	position = savedPosition || { x: 0, y: 0 };
// 	// const nuxt = window.<%=globals.nuxt%>;
// 	const nuxt = this.$nuxt.window;
// 	if (to.path === from.path && to.hash !== from.hash) {
// 		nuxt.$nextTick(() => nuxt.$emit('triggerScroll'))
// 	}
// 	return new Promise((resolve) => {
// 		nuxt.$once('triggerScroll', () => {
// 			if (to.hash) {
// 				let hash = to.hash
// 				if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
// 					hash = '#' + window.CSS.escape(hash.substr(1))
// 				}
// 				try {
// 					if (document.querySelector(hash)) {
// 						position = { selector: hash }
// 					}
// 				} catch (e) {
// 					console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
// 				}
// 			}
// 			resolve(position)
// 		})
// 	})
// }