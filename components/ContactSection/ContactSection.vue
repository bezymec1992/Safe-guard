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
                  <FormGroup
                    v-model="form.fullName"
                    type="text"
                    :placeholder="'Full Name'"
                    :label="'Full Name'"
                    :name="'fullName'"
                    :error="$v.form.fullName.$error"
                  />
                  <FormGroup
                    v-model="form.email"
                    type="email"
                    :placeholder="'Email'"
                    :label="'Email'"
                    :name="'email'"
                    :error="$v.form.email.$error"
                    :error-message="'Invalid email'"
                  />
                </div>
                <div class="col-md-6">
                  <FormGroup
                    v-model="form.phone"
                    type="text"
                    :placeholder="'Phone Number'"
                    :label="'Phone Number'"
                    :name="'phone'"
                    :error="$v.form.phone.$error"
                    :error-message="'Incorrect number'"
                    @input="acceptNumber"
                  />
                  <FormGroup
                    v-model="form.companyName"
                    type="text"
                    :placeholder="'Company Name'"
                    :label="'Company Name'"
                    :name="'companyName'"
                    :error="$v.form.companyName.$error"
                  />
                </div>
                <div class="col-12">
                  <FormGroup
                    ref="textarea"
                    v-model="form.textArea"
                    :input-type="'textarea'"
                    type="text"
                    :placeholder="'Write Us Messages'"
                    :label="'Write Us Messages'"
                    :name="'message'"
                    :error="$v.form.textArea.$error"
                    :characters-left="charactersLeft"
                    @input="assertMaxChars"
                  />
                </div>
                <div
                  class="col-12 d-flex justify-content-center justify-content-md-start"
                >
                  <a href="#" class="btn btn-dark" @click.prevent="sendForm"
                    >Send Message</a
                  >
                </div>
              </div>
            </form>
          </div>
          <div class="mini-popup-wrapper">
            <div class="mini-popup" :class="{ visible: popupSuccess }">
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
            <div class="mini-popup error" :class="{ visible: popupError }">
              <div class="inner-holder">
                <div class="icon-holder">
                  <img src="@/assets/images/icon-08.svg" alt="#" />
                </div>
                <div class="text">
                  <h3>The form incorrectly filled in</h3>
                  <p>Please check the fields</p>
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
import { validationMixin } from 'vuelidate'
import { required, email, minLength } from 'vuelidate/lib/validators'
import FormGroup from '@/components/ui/FormGroup'

export default {
  components: {
    FormGroup,
  },
  mixins: [validationMixin],
  data() {
    return {
      form: {
        fullName: '',
        email: '',
        phone: '',
        companyName: '',
        textArea: '',
      },
      popupSuccess: false,
      popupError: false,
    }
  },
  validations() {
    return {
      form: {
        fullName: { required },
        email: { required, email },
        phone: { required, minLength: minLength(5) },
        companyName: { required },
        textArea: { required },
      },
    }
  },
  computed: {
    charactersLeft() {
      const lengthArea = this.form.textArea.length
      const limit = 500

      return lengthArea < 500 ? limit - lengthArea : 0
    },
  },
  mounted() {
    this.assertMaxChars()
  },
  methods: {
    async sendForm() {
      await this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        return this.popupShowing('error')
      } else {
        this.$v.$reset()
        this.form.fullName = ''
        this.form.email = ''
        this.form.phone = ''
        this.form.companyName = ''
        this.form.textArea = ''
        this.popupShowing('success')
      }
    },
    popupShowing(status) {
      if (status === 'success') {
        this.popupSuccess = true
        setTimeout(() => {
          this.popupSuccess = false
        }, 3000)
      }
      if (status === 'error') {
        this.popupError = true
        setTimeout(() => {
          this.popupError = false
        }, 3000)
      }
    },
    acceptNumber() {
      const x = this.form.phone
        .replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
      this.form.phone = !x[2]
        ? x[1]
        : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    },
    assertMaxChars() {
      const textarea = this.$refs.textarea.$refs.textarea
      if (
        this.form.textArea.length >= 500 ||
        this.form.textArea.length <= 500
      ) {
        this.form.textArea = this.form.textArea.substring(0, 500)
        if (textarea.scrollHeight < 300) {
          textarea.style.height = textarea.scrollHeight - 4 + 'px'
        }
      }
    },
  },
}
</script>

<style lang="scss">
@import '@/components/ContactSection/ContactSection.scss';
</style>
