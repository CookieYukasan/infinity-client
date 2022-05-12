<template>
  <img
    :src="logoUrl"
    alt="Elo Infinity Logo"
    :width="width || 'auto'"
    :height="height || 'auto'"
  />
</template>

<script>
export default {
  props: ['width', 'height', 'color'],
  computed: {
    logoUrl() {
      if (!this.color) return '/img/web/logo.png'

      return `/img/web/logo-${this.color}.png`
    },
  },
}
</script>
