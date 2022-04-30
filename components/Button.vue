<template>
  <div>
    <button :type="btnType" :class="btnClass">
      <slot v-if="!btnLoading" />
      <div v-else class="spinner-border text-primary" role="status"></div>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    btnType: {
      type: String,
      default: 'button',
    },
    btnLoading: {
      type: Boolean,
      default: false,
    },
    btnClass: {
      type: String,
      default: 'btn-infinity-primary br-10 p-16 ptb-12',
    },
  },
}
</script>
