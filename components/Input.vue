<template>
  <div class="position-relative">
    <input
      class="form-control"
      :id="inputName"
      :name="inputName"
      :placeholder="placeholderValue"
      :class="inputClass"
      :type="inputType"
      :disabled="isDisabled"
      :required="isRequired"
      :autocomplete="autoComplete ? 'on' : 'off'"
      v-model="dynamicValue"
    />
    <label class="input-float-label" v-if="inputLabel" :for="inputName">{{
      inputLabel
    }}</label>
  </div>
</template>

<script>
export default {
  props: {
    inputClass: {
      type: String,
      default: 'br-6 pl-16 pr-16 ptb-12 form-control',
    },
    inputType: {
      type: String,
      required: true,
    },
    autoComplete: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    placeholderValue: String,
    inputName: String,
    inputLabel: String,
  },
  data() {
    return {
      dynamicValue: '',
    }
  },
  watch: {
    dynamicValue(newDynamicValue) {
      this.$emit('onUpdate', newDynamicValue)
    },
  },
}
</script>
