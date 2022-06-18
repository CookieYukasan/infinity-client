<template>
  <div>
    <header
      v-if="$device.isDesktop"
      class="desktop-header pt-24 d-flex justify-content-between align-items-center"
    >
      <NuxtLink to="/">
        <Logo width="200px" height="24px" type="white" />
      </NuxtLink>
      <div
        class="d-flex align-items-center justify-content-center position-relative"
      >
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="index"
          :class="{
            'mr-24': index !== navItems.length - 1,
          }"
          :to="item.url || '#'"
          class="font-16 font-bold header-link"
          @mouseenter.native="onMouseEnterServiceDropdown(index)"
        >
          {{ item.text }}
        </NuxtLink>
        <div
          v-show="displayServicesDropdown"
          @mouseleave="disableServiceDropdown"
          class="services-dropdown p-24 br-8 infinity-bg-white position-absolute"
        >
          <p class="font-grey-200 font-16 font-bold mb-24">Serviços</p>
          <div class="services-grid">
            <NuxtLink
              v-for="(service, index) in servicesItems"
              :key="index"
              :to="service.url"
              class="font-grey-200 d-flex align-items-center"
            >
              <span class="material-icons font-grey-100 mr-4">{{
                service.iconName
              }}</span>
              {{ service.text }}
            </NuxtLink>
          </div>
          <p class="font-grey-200 font-16 font-bold mtb-24">Outros serviços</p>
          <div class="services-grid">
            <NuxtLink
              v-for="(service, index) in otherServicesItems"
              :key="index"
              :to="service.url"
              class="font-grey-200 d-flex align-items-center"
            >
              <span class="material-icons font-grey-100 mr-4">{{
                service.iconName
              }}</span>
              {{ service.text }}
            </NuxtLink>
          </div>
        </div>
      </div>
      <Button
        btnClass="btn-infinity-primary br-8 ptb-8 prl-8 pr-16 d-flex align-items-center"
      >
        <i class="material-icons-two-tone mr-4 icon-white">person</i>
        Área do cliente
      </Button>
    </header>
    <header
      v-if="$device.isMobile"
      class="pt-24 d-flex justify-content-between align-items-center"
    >
      <NuxtLink to="/" class="mb-16">
        <Logo type="small-white" />
      </NuxtLink>
      <span class="material-icons-outlined font-white font-32">menu</span>
      <!-- <div
        class="d-flex align-items-center justify-content-center position-relative"
      >
        <NuxtLink
          v-for="(item, index) in navItems"
          :key="index"
          :class="{
            'mr-16': index !== navItems.length - 1,
          }"
          :to="item.url || '#'"
          class="font-16 font-bold"
        >
          {{ item.text }}
        </NuxtLink>
      </div> -->
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayServicesDropdown: false,
      servicesItems: [
        {
          text: 'Elojob',
          url: '/services/elojob',
          iconName: 'trending_up',
        },
        {
          text: 'Duoboost',
          url: '/services/duoboost',
          iconName: 'group',
        },
        {
          text: 'MD10',
          url: '/services/md10',
          iconName: 'help_center',
        },
        {
          text: 'Vitórias',
          url: '/services/wins',
          iconName: 'workspace_premium',
        },
      ],
      otherServicesItems: [
        {
          text: 'Coaching',
          url: '/services/coaching',
          iconName: 'support_agent',
        },
        {
          text: 'Manutenção de elo',
          url: '/services/elo-maintenance',
          iconName: 'engineering',
        },
      ],
      navItems: [
        {
          text: 'Inicio',
          url: '/',
        },
        {
          text: 'Serviços',
        },
        {
          text: 'Contato',
          url: '/contact',
        },
        {
          text: 'Trabalhe conosco',
          url: '/work-with-us',
        },
      ],
    }
  },
  methods: {
    enableServiceDropdown() {
      this.displayServicesDropdown = true
    },
    disableServiceDropdown() {
      this.displayServicesDropdown = false
    },
    onMouseEnterServiceDropdown(itemIndex) {
      if (itemIndex === 1) return this.enableServiceDropdown()
      if (itemIndex !== 1) return this.disableServiceDropdown()
    },
    onScroll() {
      if (this.displayServicesDropdown) this.disableServiceDropdown()
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
}
</script>

<style lang="scss" scoped>
header.desktop-header {
  .services-dropdown {
    left: -35px;
    top: 35px;
    z-index: 99;
    width: 550px;
  }

  .services-dropdown::after {
    content: '';
    background: transparent;
    position: absolute;
    top: -6px;
    left: 120px;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 8px solid var(--white);
  }

  a.header-link:hover,
  a.header-link:active {
    color: var(--grey-300) !important;
  }
}
</style>
