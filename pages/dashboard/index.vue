<template>
  <div>
    <h1 class="font-bold font-24" @click="handleLogout">uepa</h1>
  </div>
</template>

<script>
export default {
  methods: {
    handleLogout() {
      this.$store.dispatch('auth/logout')
    },
  },
  computed: {
    loggedUser() {
      return this.$store.state.auth.user
    },
  },
  middleware: ['authenticateUser'],
}
</script>
