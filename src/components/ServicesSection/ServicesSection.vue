<template>
	<div class="services-section">
		<div class="container">
			<h2 class="h1">What We Do</h2>
			<div class="rows">
				<div class="row g-0">
					<div class="col-lg-6">
						<div class="gradient-block d-md-flex justify-content-md-center">
							<div class="punching-bag">
								<img src="@/assets/images/img-03.png" alt="#" />
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-txt">
						<div class="content-holder">
							<span class="item-number">/01</span>
							<h3 class="h2">
								Training and <br />
								Implementation
							</h3>
							<div class="text-holder">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere</p>
							</div>
							<a href="#" class="btn btn-dark">Read More</a>
						</div>
					</div>
				</div>
				<div class="row g-0">
					<div class="col-lg-6">
						<div class="gradient-block d-md-flex justify-content-md-center">
							<div class="phone-wrapper">
								<div class="phone-holder">
									<img src="@/assets/images/img-04.png" class="desktop" alt="#" />
									<img src="@/assets/images/img-013.png" class="mobile" alt="#" />
									<div class="msg-holder msg-1">
										<img src="@/assets/images/img-05.svg" alt="#" />
									</div>
									<div class="msg-holder msg-2">
										<img src="@/assets/images/img-06.svg" alt="#" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-txt">
						<div class="content-holder">
							<span class="item-number">/02</span>
							<h3 class="h2">
								Cyber <br />
								Consultants
							</h3>
							<div class="text-holder">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere</p>
							</div>
							<a href="#" class="btn btn-dark">Read More</a>
						</div>
					</div>
				</div>
				<div class="row g-0">
					<div class="col-lg-6">
						<div class="gradient-block d-md-flex justify-content-md-center">
							<div class="building-wrapper">
								<div class="building-holder">
									<img src="@/assets/images/img-07.png" alt="#" />
									<div class="cloud-holder hld-1">
										<img src="@/assets/images/img-08.png" alt="#" />
									</div>
									<div class="cloud-holder hld-2">
										<img src="@/assets/images/img-09.png" alt="#" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-txt">
						<div class="content-holder">
							<span class="item-number">/03</span>
							<h3 class="h2">
								Consultancy and <br />
								Brand Protection
							</h3>
							<div class="text-holder">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere</p>
							</div>
							<a href="#" class="btn btn-dark">Read More</a>
						</div>
					</div>
				</div>
				<div class="row g-0">
					<div class="col-lg-6">
						<div class="gradient-block d-md-flex justify-content-md-end">
							<div class="imac-wrapper">
								<div class="imac-holder">
									<img src="@/assets/images/img-010.png" alt="#" />
									<div class="iphone-holder hld-1">
										<img src="@/assets/images/img-011.png" alt="#" />
									</div>
									<div class="iphone-holder hld-2">
										<img src="@/assets/images/img-012.png" alt="#" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-txt">
						<div class="content-holder">
							<span class="item-number">/04</span>
							<h3 class="h2">Software</h3>
							<div class="text-holder">
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae imperdiet nibh. Phasellus vestibulum ac nisi nec viverra. In posuere</p>
							</div>
							<a href="#" class="btn btn-dark">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<div class="btn-holder">
				<router-link to="/services" class="btn btn-arrow">
					All Services
					<span class="arrow-wrapper">
						<span class="icon-holder">
							<img src="@/assets/images/icon-02.svg" alt="#" />
						</span>
					</span>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ServicesSection",
	props: {
		// msg: String
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
@import "@/components/ServicesSection/ServicesSection.scss";
</style>
