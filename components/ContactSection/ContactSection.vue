<template>
  <div class="contact-section">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <h2 class="h2">Contact Us</h2>
           <p class="text-holder">
             We're here to help and answer any question you might have. We
             look forward to hearing from you.
           </p>
        </div>
        <div class="col-md-7">
          <div class="form-holder">
            <form action="#">
              <div class="row">
                <div class="col-md-6">
                  <FormGroup
                    v-model="form.name"
                    :error-showing="$v.form.name.$error"
                    placeholder="Full Name"
                    label="Full Name"
                    @input="formatInput('name')"
                  />

                  <FormGroup
                    v-model="form.email"
                    :error-showing="$v.form.email.$error"
                    label="Email"
                    placeholder="Email"
                    @input="formatInput('email')"
                  >
                    <template #error>
                      <span
                        v-if="$v.form.email.$dirty && $v.form.email.$invalid"
                        class="error-message"
                      >
                        <span v-if="!$v.form.email.email">Incorrect email</span>
                        <span v-if="!$v.form.email.required"
                          >Requred filed</span
                        >
                      </span>
                    </template>
                  </FormGroup>
                </div>
                <div class="col-md-6">
                  <PhoneInput
                    ref="telInput"
                    v-model="form.phone"
                    :error-showing="
                      $v.form.phone.$error || $v.form.phoneIsValid.$error
                    "
                    label="Phone"
                    @update="onPhoneInput"
                  >
                    <template #error>
                      <span
                        v-if="
                          $v.form.phoneIsValid.$dirty &&
                          $v.form.phoneIsValid.$invalid &&
                          !$v.form.phone.$error
                        "
                        class="error-message"
                      >
                        <span v-if="$v.form.phoneIsValid.$error"
                          >Incorrect number</span
                        >
                      </span>
                      <span
                        v-if="$v.form.phone.$dirty && $v.form.phone.$invalid"
                        class="error-message"
                      >
                        <span v-if="$v.form.phone.$error">Requred filed</span>
                      </span>
                    </template>
                  </PhoneInput>

                  <FormGroup
                    v-model="form.companyName"
                    :error-showing="$v.form.companyName.$error"
                    placeholder="Company Name"
                    label="Company Name"
                  />
                </div>
                <div class="col-12">
                  <FormGroup
                    v-model="form.textArea"
                    label="Write Us Messages"
                    placeholder="Write us about your project in general..."
                    input-type="textarea"
                    :error-showing="$v.form.textArea.$error"
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
                  <img
                    data-src="@/assets/images/icon-07.svg"
                    class="lazyload"
                    alt="#"
                  />
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
                  <img
                    data-src="@/assets/images/icon-08.svg"
                    class="lazyload"
                    alt="#"
                  />
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
import { required, email, sameAs } from 'vuelidate/lib/validators'
import FormGroup from '@/components/ui/FormGroup'
import PhoneInput from '@/components/ui/PhoneInput'

export default {
  components: {
    FormGroup,
    PhoneInput,
  },
  mixins: [validationMixin],
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        companyName: '',
        textArea: '',
        phoneIsValid: false,
      },
      popupSuccess: false,
      popupError: false,
    }
  },
  validations() {
    return {
      form: {
        name: { required },
        email: { required, email },
        phone: { required },
        companyName: { required },
        textArea: { required },
        phoneIsValid: {
          sameAs: sameAs(() => true),
        },
      },
    }
  },

  methods: {
    async sendForm() {
      await this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        return this.popupShowing('error')
      } else {
        this.$v.$reset()
        this.form.name = ''
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
    formatInput(Vmodel) {
      if (Vmodel === 'name') {
        const x = this.form[Vmodel].replace(
          /[&/\\#,+()$~%@!'":*?+=<>{}0-9]/g,
          ''
        )
        this.form[Vmodel] = x.substring(0, 50)
      } else if (Vmodel === 'email') {
        const x = this.form[Vmodel].replace(/[&/\\#,+()$~%^'":*?<>{ }]/g, '')
        this.form[Vmodel] = x.substring(0, 100)
      }
    },
    onPhoneInput() {
 
      // console.log(this.$refs.telInput.results)

      this.form.phoneIsValid = this.$refs.telInput.results.isValid
    },
  },
}
</script>

<style lang="scss">
@import '@/components/ContactSection/ContactSection.scss';
</style>
