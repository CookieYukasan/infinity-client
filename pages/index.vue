<template>
  <div>
    <h1 v-if="!!!loggedUser">
      Percebi que você não está logado, por favor entre
      <NuxtLink to="/dashboard" class="font-bold font-primary"
        >clicando aqui</NuxtLink
      >
    </h1>
    <h1 v-if="!!loggedUser && (loggedUser.isBooster || loggedUser.isAdmin)">
      Você já está logado, entre no painel
      <NuxtLink to="/dashboard" class="font-bold font-primary"
        >clicando aqui</NuxtLink
      >
    </h1>
    <h1 v-if="!!loggedUser && !loggedUser.isBooster && !loggedUser.isAdmin">
      Você já está logado, mas não tem acesso ao painel de booster :(
    </h1>
  </div>
</template>

<script>
export default {
  computed: {
    loggedUser() {
      return this.$store.state.auth.user
    },
  },
}
</script>
