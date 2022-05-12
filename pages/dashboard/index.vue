<template>
  <div>
    <h1 class="font-bold font-24">uepa</h1>
  </div>
</template>

<script>
export default {
  computed: {
    loggedUser() {
      return this.$store.state.auth.user
    },
  },
  middleware: ['authenticateUser'],
}
</script>
