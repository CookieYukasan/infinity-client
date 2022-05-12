<template>
  <div class="container-fluid">
    <!-- <Header pageTitle="Página não encontrada" slotOrientation="left"> </Header> -->
    <div
      class="d-flex flex-column justify-content-center align-items-center"
      :class="{
        'vh-100': $device.isDesktop,
        'text-center mt-80': $device.isMobile,
      }"
    >
      <!-- <IconPageNotFoundIcon
          :height="$device.isMobile ? '124px' : '198px'"
          :width="$device.isMobile ? '187px' : '300px'"
          color="#EE145B"
        /> -->
      <h1 class="font-16 mtb-16">
        A página que você está tentando acessar não existe.
      </h1>
      <p class="font-12">
        Caso ache que isto é um erro, entre em contato conosco sobre este
        problema.
      </p>
      <NuxtLink class="btn-infinity-primary br-6 p-16 ptb-12 mt-16" to="/">
        Ir para página inicial
      </NuxtLink>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  props: ['error'],
  head() {
    return {
      title: `Elo Job Infinity - 404`,
      meta: [
        {
          property: 'og:title',
          content: 'Elo Job Infinity - 404',
        },
      ],
    }
  },
}
</script>

<style scoped>
.vertical-center {
  min-height: 80vh;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
