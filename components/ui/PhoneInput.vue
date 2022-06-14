<template>
  <div class="form-group" :class="{ error: errorShowing }">
    <div class="form-holder">
      <label>
        <span class="label" v-if="label">{{ label }}</span>
        <VuePhoneNumberInput
          :value="value"
          :border-radius="4"
          maxlength="17"
          v-on="listeners"
          @input="onInput"
          @update="results = $event"
        />
      </label>
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
    </div>
  </div>
</template>

<script>
import VuePhoneNumberInput from 'vue-phone-number-input'
import 'vue-phone-number-input/dist/vue-phone-number-input.css'

export default {
  name: 'PhoneInput',
  components: {
    VuePhoneNumberInput,
  },
  model: {
    event: 'input',
    prop: 'value',
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    value: {
      type: [Object, String],
      default: () => ({}),
    },
    errorMessage: {
      type: String,
      default: 'Required field',
    },
    errorShowing: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      results: {},
    }
  },
  computed: {
    listeners() {
      const { input, ...rest } = this.$listeners
      return rest
    },
  },
  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
    errorFormsClick(event) {
      event.target.nextElementSibling.classList.add('show')
    },
  },
}
</script>

<style lang="scss">
.form-group {
  // margin-top: 4rem;
  position: relative;

  .vue-phone-number-input {
    .select-country-container {
      max-width: 100%;
      width: 100%;
    }
  }

  .country-selector {
    min-height: 4.2rem;
    height: 4.2rem;

    input {
      border-color: rgba($black, 0.2) !important;
    }
  }

  .country-selector__toggle {
    pointer-events: none;
  }

  .country-selector__input {
    min-height: 6.5rem !important;
    height: 6.5rem !important;

    @include media-breakpoint-down(md) {
      min-height: 5rem !important;
      height: 5rem !important;
    }
  }

  .input-tel__input {
    min-height: 6.5rem !important;
    height: 6.5rem;

    @include media-breakpoint-down(md) {
      min-height: 5rem !important;
      height: 5rem !important;
    }

    &::placeholder {
      font-size: 1.6rem;
      color: rgba($black, 0.3);

      @include media-breakpoint-down(md) {
        font-size: 1.4rem;
      }
    }
  }

  .input-tel {
    min-height: 6.5rem !important;
    height: 6.5rem !important;

    @include media-breakpoint-down(md) {
      min-height: 4.9rem !important;
      height: 4.9rem !important;
    }

    input {
      border-color: rgba($black, 0.2) !important;
    }
  }

  .country-selector__label {
    display: none !important;
  }

  .country-selector__input {
    padding-top: 0 !important;
    box-shadow: none !important;
  }

  .input-tel {
    input {
      box-shadow: none !important;
    }
  }

  .select-country-container {
    flex: 0 0 10.8rem !important;
    min-width: 10.8rem !important;
  }

  &.error {
    .input-tel {
      input {
        border-color: $red !important;
      }
    }

    .country-selector__input {
      border-color: $red !important;
    }
  }
}
</style>
