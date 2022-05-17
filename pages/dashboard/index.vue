<template>
  <h1>hello world, {{ loggedUser.userName }}</h1>
</template>

<script>
export default {
  computed: {
    loggedUser() {
      return this.$store.state.auth.user
    },
  },
  middleware: ['authenticateBooster'],
  layout: 'dashboard/booster',
}
</script>

<style scoped></style>
