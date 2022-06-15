<template>
  <button
    @click="!btnDisabled && !btnLoading ? onClick : () => {}"
    :type="btnType"
    :class="[
      'br-6',
      btnClass,
      btnDisabled || btnLoading ? 'cursor-pointer-disabled' : '',
    ]"
    :disabled="btnDisabled || btnLoading"
  >
    <slot v-if="!btnLoading" />
    <div v-else class="spinner-border text-primary" role="status"></div>
  </button>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      default: () => {},
    },
    btnType: {
      type: String,
      default: 'button',
    },
    btnLoading: {
      type: Boolean,
      default: false,
    },
    btnDisabled: {
      type: Boolean,
      default: false,
    },
    btnClass: {
      type: String,
      default: 'btn-infinity-primary br-8 ptb-12 w-100',
    },
  },
}
</script>
