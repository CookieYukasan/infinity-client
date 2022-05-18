<template>
  <div>
    <button
      @click="!btnDisabled && !btnLoading ? onClick : () => {}"
      :type="btnType"
      :class="btnClass"
      :disabled="btnDisabled"
    >
      <slot v-if="!btnLoading" />
      <div v-else class="spinner-border text-primary" role="status"></div>
    </button>
  </div>
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
      default: 'btn-infinity-primary br-6 ptb-8 w-100',
    },
  },
}
</script>
