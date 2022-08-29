<template>
  <div class="form-group" :class="{ textarea: inputType == 'textarea' }">
    <div class="form-holder">
      <label v-if="inputType === 'input'">
        <span v-if="label" class="label">{{ label }}</span>
        <input
          class="form-control"
          :class="{ error: errorShowing }"
          :type="type"
          :placeholder="placeholder"
          :value="value"
          v-on="listeners"
          @input="onInput"
          :maxlength="maxlength"
        />
        <span v-if="errorShowing" class="error-form"
          ><span class="error-icon" @click="errorFormsClick($event)"></span>
          <span class="error-title"
            ><slot name="error">
              <span v-if="errorShowing" class="error-message"
                ><span>{{ errorMessage }}</span></span
              >
            </slot></span
          ></span
        >
      </label>
      <label v-if="inputType === 'textarea'">
        <span v-if="label" class="label">{{ label }}</span>
        <div class="textarea-holder">
          <textarea
            ref="textarea"
            class="form-control"
            :class="{ error: errorShowing }"
            :maxlength="maxlength"
            :placeholder="placeholder"
            :value="value"
            v-on="listeners"
            @input="onInput"
          ></textarea>
          <span class="textarea-counter">
            {{ maxLength }}
          </span>
        </div>
        <span v-if="errorShowing" class="error-form"
          ><span class="error-icon" @click="errorFormsClick($event)"></span>
          <span class="error-title"
            ><slot name="error">
              <span v-if="errorShowing" class="error-message"
                ><span>{{ errorMessage }}</span></span
              >
            </slot></span
          ></span
        >
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    inputType: {
      type: String,
      default: 'input',
    },
    type: {
      type: String,
      default: 'text',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    errorMessage: {
      type: String,
      default: 'Required field',
    },
    errorShowing: {
      type: Boolean,
      default: false,
    },
    maxlength: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    listeners() {
      const { input, ...rest } = this.$listeners
      return rest
    },

    maxLength() {
      return this.maxlength - this.value.length
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value.target.value)
    },
    onChange(value) {
      this.$emit('change', value.target.value)
    },
    errorFormsClick(event) {
      event.target.nextElementSibling.classList.add('show')
    },
  },
}
</script>
