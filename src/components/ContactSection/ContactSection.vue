<template>
	<div class="contact-section">
		<div class="container">
			<div class="row">
				<div class="col-md-5">
					<h2 class="h2">Contact Us</h2>
					<ul>
						<li>
							<h3>Address</h3>
							<address>
								Hobbemakade 29, 1071 XK, <br />
								Amsterdam, Netherlands
							</address>
						</li>
						<li>
							<h3>E-mail</h3>
							<a href="mailtp:safeguard_help@gmail.com">safeguard_help@gmail.com</a>
						</li>
						<li>
							<h3>Phone</h3>
							<a href="tel:+330123456789">+330123456789</a>
						</li>
					</ul>
				</div>
				<div class="col-md-7">
					<div class="form-holder">
						<form action="#">
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<label for="lbl-01">Full Name</label>
										<input type="text" placeholder="Name" class="form-control" id="lbl-01" />
									</div>
									<div class="form-group">
										<label for="lbl-02">Email</label>
										<input type="email" placeholder="Email" class="form-control" id="lbl-02" />
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<label for="lbl-03">Phone Number</label>
										<input type="text" placeholder="Name" class="form-control" id="lbl-03" />
									</div>
									<div class="form-group">
										<label for="lbl-04">Company Name</label>
										<input type="text" placeholder="Email" class="form-control" id="lbl-04" />
									</div>
								</div>
								<div class="col-12">
									<div class="form-group textarea">
										<label for="lbl-05">Company Name</label>
										<textarea placeholder="Write a message" ref="textarea" id="lbl-06" class="form-control" v-model="textArea" @input="assertMaxChars()"></textarea>
										<span class="textarea-counter">{{ charactersLeft }}</span>
									</div>
								</div>
								<div class="col-12 d-flex justify-content-center justify-content-md-start">
									<a href="#" class="btn btn-dark">Send Message</a>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "ContactSection",
	props: {
		//
	},
	data: () => ({
		textArea: ""
	}),
	methods: {
		assertMaxChars: function () {
			const { textarea } = this.$refs;

			if (this.textArea.length >= 500 || this.textArea.length <= 500) {
				this.textArea = this.textArea.substring(0, 500);
				textarea.style.height = textarea.scrollHeight - 4 + "px";
			}
		}
	},
	computed: {
		charactersLeft() {
			var lengthArea = this.textArea.length,
				limit = 500;

			return lengthArea < 500 ? limit - lengthArea : "max";
		}
	},
	mounted() {
		this.assertMaxChars();
	}
};
</script>

<style lang="scss">
@import "@/components/ContactSection/ContactSection.scss";
</style>
