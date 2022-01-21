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
              <a href="mailto:safeguard_help@gmail.com"
                >safeguard_help@gmail.com</a
              >
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
                    <div class="form-holder">
                      <input
                        type="text"
                        placeholder="Name"
                        class="form-control"
                        id="lbl-01"
                        :class="{ error: v$.name.$error }"
                        v-model="name"
                        @blur="v$.name.$touch"
                      />
                      <span v-if="v$.name.$error" class="error-form"
                        ><span
                          class="error-icon"
                          @click="errorFormsClick($event)"
                        ></span>
                        <span class="error-title">Required field</span></span
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="lbl-02">Email</label>
                    <div class="form-holder">
                      <input
                        type="email"
                        placeholder="Email"
                        class="form-control"
                        id="lbl-02"
                        :class="{ error: v$.email.$error }"
                        v-model="email"
                        @blur="v$.email.$touch"
                      />
                      <span v-if="v$.email.$error" class="error-form"
                        ><span
                          class="error-icon"
                          @click="errorFormsClick($event)"
                        ></span>
                        <span class="error-title">Required field</span></span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="lbl-03">Phone Number</label>
                    <div class="form-holder">
                      <input
                        type="text"
                        placeholder="Phone Number"
                        class="form-control"
                        id="lbl-03"
                        :class="{ error: v$.phone.$error }"
                        v-model="phone"
                        @blur="v$.phone.$touch"
                      />
                      <span v-if="v$.phone.$error" class="error-form"
                        ><span
                          class="error-icon"
                          @click="errorFormsClick($event)"
                        ></span>
                        <span class="error-title">Required field</span></span
                      >
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="lbl-04">Company Name</label>
                    <div class="form-holder">
                      <input
                        type="text"
                        placeholder="Company Name"
                        class="form-control"
                        id="lbl-04"
                        :class="{ error: v$.companyName.$error }"
                        v-model="companyName"
                        @blur="v$.companyName.$touch"
                      />
                      <span v-if="v$.companyName.$error" class="error-form"
                        ><span
                          class="error-icon"
                          @click="errorFormsClick($event)"
                        ></span>
                        <span class="error-title">Required field</span></span
                      >
                    </div>
                  </div>
                </div>
                <div class="col-12">
                  <div class="form-group textarea">
                    <label for="lbl-05">Write Us Messages</label>
                    <div class="form-holder">
                      <textarea
                        placeholder="Write a message"
                        ref="textarea"
                        id="lbl-06"
                        class="form-control"
                        v-model="textArea"
                        @input="assertMaxChars()"
                        @blur="v$.textArea.$touch"
                        :class="{ error: v$.textArea.$error }"
                      ></textarea>
                      <span v-if="v$.textArea.$error" class="error-form"
                        ><span
                          class="error-icon"
                          @click="errorFormsClick($event)"
                        ></span>
                        <span class="error-title">Required field</span>
                      </span>
                      <span class="textarea-counter">{{ charactersLeft }}</span>
                    </div>
                  </div>
                </div>
                <div
                  class="col-12 d-flex justify-content-center justify-content-md-start"
                >
                  <a href="#" class="btn btn-dark" @click.prevent="sendForm()"
                    >Send Message</a
                  >
                </div>
              </div>
            </form>
          </div>
          <div class="mini-popup-wrapper">
            <div class="mini-popup" :class="{ visible: popupVisible }">
              <div class="inner-holder">
                <div class="icon-holder">
                  <img src="@/assets/images/icon-07.svg" alt="#" />
                </div>
                <div class="text">
                  <h3>Success</h3>
                  <p>Your message has been sent successfully!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

export default {
  name: "ContactSection",
  setup: () => ({ v$: useVuelidate() }),
  data: () => ({
    textArea: "",
    name: "",
    email: "",
    phone: "",
    companyName: "",
    popupVisible: false,
  }),
  validations() {
    return {
      email: { required, email },
      phone: { required },
      name: { required, minLength: minLength(2) },
      textArea: { required },
      companyName: { required },
    };
  },
  methods: {
    errorFormsClick: function (event) {
      event.target.nextSibling.classList.add("show");
    },
    assertMaxChars: function () {
      const { textarea } = this.$refs;

      if (this.textArea.length >= 500 || this.textArea.length <= 500) {
        this.textArea = this.textArea.substring(0, 500);
        textarea.style.height = textarea.scrollHeight - 4 + "px";
      }
    },
    async sendForm() {
      const result = await this.v$.$validate();
      if (!result) {
        return;
      }
      this.submitStatus = "PENDING";
      this.v$.$reset();
      this.name = "";
      this.email = "";
      this.phone = "";
      this.companyName = "";
      this.textArea = "";
      this.popupShowing();
    },
    popupShowing: function () {
      this.popupVisible = true;
      setTimeout(() => {
        this.popupVisible = false;
      }, 3000);
    },
  },
  computed: {
    charactersLeft() {
      var lengthArea = this.textArea.length,
        limit = 500;

      return lengthArea < 500 ? limit - lengthArea : "max";
    },
  },
  mounted() {
    this.assertMaxChars();
  },
};
</script>

<style lang="scss">
@import "@/components/ContactSection/ContactSection.scss";
</style>
