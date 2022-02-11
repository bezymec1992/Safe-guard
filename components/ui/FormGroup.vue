<template>
  <div class="form-group" :class="{ textarea: inputType == 'textarea' }">
    <label :for="name">{{ label }}</label>
    <div class="form-holder">
      <input
        v-if="inputType == 'input'"
        v-bind="options"
        ref="input"
        class="form-control"
        :class="{ error: error }"
        v-on="listeners"
        @input="onInput"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
      />
      <textarea
        v-if="inputType == 'textarea'"
        v-bind="options"
        ref="textarea"
        class="form-control"
        :class="{ error: error }"
        v-on="listeners"
        @input="onInput"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
      >
      </textarea>
      <span v-if="error" class="error-form"
        ><span class="error-icon" @click="errorFormsClick($event)"></span>
        <span class="error-title">{{ errorMessage }}</span></span
      >
      <span v-if="inputType == 'textarea'" class="textarea-counter">{{
        charactersLeft
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormGroup',
  props: {
    name: {
      type: String,
      default: '',
      require: false,
    },
    charactersLeft: {
      type: Number,
      default: 500,
    },
    inputType: {
      type: String,
      default: 'input',
    },
    errorMessage: {
      type: String,
      default: 'Required field',
    },
    value: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    height: {
      type: String,
      default: '40px',
    },
    width: {
      type: String,
      default: '100%',
    },
    fontSize: {
      type: String,
      default: '14px',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Object,
      default: () => ({}),
    },
    error: {
      type: Boolean,
      default: null,
    },
    settings: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      focus: false,
    }
  },
  computed: {
    classes() {
      return [
        this.options.outline && 'input--outline',
        this.focus && 'input--focus',
        this.value && !this.focus && 'input--value',
        this.isError && 'input--error',
      ]
    },
    options() {
      return {
        outline: true,
        mask: '',
        maxLength: null,
        value: this.value,
        type: this.type,
        disabled: this.disabled,
        placeholder: this.placeholder,
        ...this.settings,
      }
    },
    isError() {
      if (this.errors) {
        return Array.isArray(this.errors) ? this.errors[0] : this.errors.message
      }
      if (!this.rules || !this.rules.$dirty) return

      const keys = Object.keys(this.rules.$params).filter(
        (key) => !this.rules[key]
      )
      return keys.length
        ? this.$t(`errors.${keys[0]}`, {
            value: this.label,
            number: this.rules.$params[keys[0]].min,
          })
        : null
    },
    listeners() {
      const { input, focus, blur, change, ...rest } = this.$listeners
      return rest
    },
  },
  methods: {
    handleFocus() {
      this.$emit('focusEvent')
    },
    errorFormsClick(event) {
      event.target.nextElementSibling.classList.add('show')
    },
    onInput(value) {
      if (this.options.mask) {
        this.$emit('input', value)
        return
      }
      this.$emit('input', value.target.value)
    },
    onFocus(value) {
      this.focus = true
      this.$emit('focus', value)
    },
    onBlur(value) {
      this.focus = false
      this.$emit('blur', value)
    },
    onChange(value) {
      this.$emit('change', value)
    },
  },
}
</script>

<style lang="scss" scoped></style>
