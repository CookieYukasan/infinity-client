<template>
  <footer class="mb-16">
    <Logo type="full" />
    <p class="font-16 font-grey-500 mt-24 mb-32">
      League of Legends é uma marca registrada da Riot Games, Inc. Nós não somos
      de nenhuma forma afiliados, associados ou endossados pela Riot Games, Inc.
      Todos os direitos autoriais, marcas, imagens e marcas de serviço pertencem
      a seus respectivos proprietários.
    </p>
    <p class="font-16 font-semibold font-blue-200">Formas de pagamento</p>
    <div class="mt-16 mb-32">
      <img
        class="mr-16"
        v-for="item in paymentsBrands"
        :key="item.name"
        :src="`/img/web/payments-brands/${item.fileName}.png`"
        :alt="item.name"
      />
    </div>
    <span class="font-grey-500 font-medium font-16">
      Copyright © <strong class="font-blue-200">Elo Job Infinity</strong> –
      {{ $dayjs().format('YYYY') }} –
    </span>
    <span v-for="(item, index) in footerItems" :key="item.name">
      <NuxtLink class="font-blue-primary font-bold" :to="item.url">{{
        item.name
      }}</NuxtLink>
      <span v-if="index + 1 !== footerItems.length">– </span>
    </span>
    <p class="font-grey-500 font-medium mt-8">
      Designed by: <strong class="font-blue-primary">Vitor C.</strong> &
      Developed by: <strong class="font-blue-primary">Adson M.</strong>
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerItems: [
        {
          name: 'Privacidade',
          url: '/privacy',
        },
        {
          name: 'Termos de Uso',
          url: '/terms-of-use',
        },
      ],
      paymentsBrands: [
        {
          name: 'Pix',
          fileName: 'pix',
        },
        {
          name: 'Mercado Pago',
          fileName: 'mercado-pago',
        },
      ],
    }
  },
}
</script>
