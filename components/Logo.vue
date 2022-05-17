<template>
  <div :class="wrapperClass">
    <img
      :class="imgClass"
      :src="logoUrl"
      alt="Elo Infinity Logo"
      :width="width || 'auto'"
      :height="height || 'auto'"
    />
  </div>
</template>

<script>
export default {
  props: ['width', 'height', 'type', 'imgClass', 'wrapperClass'],
  computed: {
    logoUrl() {
      if (!this.type) return '/img/web/logo.svg'

      return `/img/web/logo-${this.type}.svg`
    },
  },
}
</script>
