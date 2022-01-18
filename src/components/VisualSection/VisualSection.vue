<template>
	<div class="visual-section">
		<div class="container">
			<slot></slot>
		</div>
	</div>
</template>

<script>
export default {
	name: "TxtBlock",
	props: {},
	data: () => ({
		//
	}),
	methods: {
		//
	}
};
</script>

<style lang="scss">
@import "@/components/VisualSection/VisualSection.scss";
</style>
