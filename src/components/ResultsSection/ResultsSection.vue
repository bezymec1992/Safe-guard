<template>
	<div class="results-section">
		<div class="container">
			<div class="row">
				<div class="col-md-6">
					<h2 class="h2 text-capitalize anim-item">
						Our Results And <br />
						Experience <br class="d-none d-md-block" />
						During 23 <br class="d-md-none" />
						Years
					</h2>
					<div class="text-holder anim-item">
						<p>We know that timing is key, when to accelerate and when to slow down. Having our clients brand top of mind, we make sure that communication, teamwork and quality reports is a given.</p>
					</div>
					<div class="btns-holder">
						<router-link to="/services" class="btn btn-arrow anim-item">
							See Timeline
							<span class="arrow-wrapper">
								<span class="icon-holder">
									<img src="@/assets/images/icon-02.svg" alt="#" />
								</span>
							</span>
						</router-link>
						<router-link to="/services/software" class="btn btn-dark d-none d-md-inline-flex justify-content-center anim-item">Go To Services</router-link>
					</div>
				</div>
				<div class="col-md-6 d-flex align-items-center">
					<div class="row row-items">
						<div class="col-6">
							<div class="result-item anim-item-2">
								<div class="img-holder">
									<img src="@/assets/images/img-043.svg" alt="#" />
								</div>
								<div class="text">
									<p>Preventive measurements implemented.</p>
								</div>
							</div>
						</div>
						<div class="col-6">
							<div class="result-item anim-item-2">
								<div class="img-holder">
									<img src="@/assets/images/img-044.svg" alt="#" />
								</div>
								<div class="text">
									<p>Preventive measurements implemented.</p>
								</div>
							</div>
						</div>
						<div class="col-6">
							<div class="result-item anim-item-2">
								<div class="img-holder">
									<img src="@/assets/images/img-045.svg" alt="#" />
								</div>
								<div class="text">
									<p>Preventive measurements implemented.</p>
								</div>
							</div>
						</div>
						<div class="col-6">
							<div class="result-item anim-item-2">
								<div class="img-holder">
									<img src="@/assets/images/img-046.svg" alt="#" />
								</div>
								<div class="text">
									<p>Preventive measurements implemented.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-12 d-md-none anim-item-2">
					<router-link to="/services/software" class="btn btn-dark">Go To Services</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ResultsSection"
};
</script>

<style lang="scss">
@import "@/components/ResultsSection/ResultsSection.scss";
</style>
