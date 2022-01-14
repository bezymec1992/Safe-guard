<template>
	<div class="txt-block">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<div class="img-holder">
						<img src="@/assets/images/img-02.jpg" alt="#" />
					</div>
				</div>
				<div class="col-md-6 d-flex flex-column justify-content-center">
					<h3 class="h2">Who We Are</h3>
					<div class="text-holder">
						<p>With our global footprint and our specialized team members and partners we know what it takes to make sure that we can deliver a minimum risk environment for our clients.</p>
						<p>We know that timing is key, when to accelerate and when to slow down. Having our clients brand top of mind, we make sure that communication, teamwork and quality reports is a given.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TxtBlock",
	props: {
		title: String,
		textDesctop: String,
		textMobile: String,
		textAdditionalMobile: String
	},
	data: () => ({
		//
	}),
	methods: {
		//
	}
};
</script>

<style lang="scss">
@import "@/components/TxtBlock/TxtBlock.scss";
</style>
