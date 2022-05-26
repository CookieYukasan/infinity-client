<template>
  <div class="circle-mask">
    <div class="landing-page-gradient">
      <div class="container-md">
        <header
          v-if="$device.isDesktop"
          class="pt-24 d-flex justify-content-between align-items-center"
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
              class="services-dropdown p-24 br-6 infinity-bg-white position-absolute"
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
              <p class="font-grey-200 font-16 font-bold mtb-24">
                Outros serviços
              </p>
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
            btnClass="btn-infinity-primary br-6 ptb-8 prl-8 pr-16 d-flex align-items-center"
          >
            <i class="material-icons-two-tone mr-4 icon-white">person</i>
            Área do cliente
          </Button>
        </header>
        <section class="hero mt-75">
          <div class="d-flex align-items-center justify-content-between">
            <p class="font-48 fw-900">
              Na elo infinity tem:<br />
              <span class="font-bold animated-text"
                >- {{ animatedTextOptions.textValue }}</span
              ><br />
              <span class="font-20 fw-normal"
                >Levamos você ao infinito e além ✨</span
              >
            </p>
            <img
              class="poro-hero"
              src="/img/web/landing-page/poro.png"
              width="524px"
              alt="Poro Illustration"
            />
          </div>
        </section>
        <section class="service-cards-wrapper justify-content-center mb-48">
          <div
            v-for="(item, index) in servicesCardItems"
            :key="index"
            class="service-card infinity-bg-grey-400 br-6 p-24 text-center"
          >
            <img
              :src="`/img/web/landing-page/services-card-icons/${
                index + 1
              }.png`"
              :alt="`${item.title} Icon`"
              width="201px"
            />
            <h1 class="font-28 font-bold mtb-24">{{ item.title }}</h1>
            <p class="font-16 mb-24" v-html="item.description"></p>
            <Button
              btnClass="br-6 btn-infinity-primary br-6 ptb-16 w-75 font-bold"
              >Contratar</Button
            >
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAboveServicesDropdown: false,
      displayServicesDropdown: false,
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
      servicesCardItems: [
        {
          title: 'Elo Boost',
          url: '/services/elojob',
          description:
            'Um jogador profissional irá <strong class="font-yellow">garantir o elo desejado</strong> jogando em sua conta.',
        },
        {
          title: 'Duo Boost',
          url: '/services/duoboost',
          description:
            'Você irá <strong class="font-yellow">jogar duo com um jogador profissional</strong>, até chegar no elo desejado.',
        },
        {
          title: 'MD10',
          url: '/services/md10',
          description:
            '<strong class="font-yellow">Iremos garantir o melhor desempenho</strong> possível na sua classificatória.',
        },
      ],
      animatedTextOptions: {
        speedBackspace: 70,
        speedForward: 100,
        speedWait: 50,
        textValue: '',
        textArray: ['Qualidade', 'Inovação', 'Eficiência'],
      },
    }
  },
  methods: {
    delWriter(text, i, cb) {
      const { speedBackspace } = this.animatedTextOptions

      if (i >= 0) {
        this.animatedTextOptions.textValue = text.substring(0, i--)
        setTimeout(() => this.delWriter(text, i, cb), speedBackspace)
      } else if (typeof cb == 'function') {
        setTimeout(cb, 5)
      }
    },
    typeWriter(text, i, cb) {
      const { speedForward, speedWait } = this.animatedTextOptions
      if (i < text.length + 1) {
        this.animatedTextOptions.textValue = text.substring(0, i++)
        setTimeout(() => this.typeWriter(text, i++, cb), speedForward)
      } else if (i === text.length + 1) {
        setTimeout(() => this.delWriter(text, i, cb), speedWait)
      }
    },
    startTypeWriter(i) {
      const { textArray, speedWait } = this.animatedTextOptions
      if (typeof textArray[i] == 'undefined') {
        setTimeout(() => this.startTypeWriter(0), speedWait)
      } else if (i < textArray[i].length + 1) {
        this.typeWriter(textArray[i], 0, () => {
          this.startTypeWriter(i + 1)
        })
      }
    },
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
  },
  mounted() {
    this.startTypeWriter(0)
  },
  head() {
    return {
      title: `Elo Job Infinity`,
      meta: [
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          hid: 'description',
          name: 'description',
          content: `descricao da landing page`,
        },
      ],
    }
  },
}
</script>

<style scoped>
header a.header-link:hover,
header a.header-link:active {
  color: var(--grey-300) !important;
}

.animated-text {
  border-right: 3px solid var(--blue-primary);
}

.fw-900 {
  font-weight: 900;
}

section.hero {
  height: calc(100vh - 24px - 66px);
}

.landing-page-gradient {
  background: radial-gradient(
    99% 99% at 51% 3%,
    #2958ff 0%,
    rgba(10, 16, 23, 0) 72%
  );
}

.circle-mask {
  background-image: url('/img/web/landing-page/bg-hero.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.poro-hero {
  transform: rotateY(180deg);
}

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

.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 16px;
}

.services-grid a:hover,
.services-grid a:hover span {
  color: var(--blue-primary) !important;
  font-weight: bold;
}

.service-cards-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 310px);
  grid-template-rows: 1fr;
  gap: 32px;
  margin-top: -120px;
}

.service-card img {
  margin-top: -120px;
}
</style>
