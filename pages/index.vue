<template>
  <div>
    <div ref="header" class="container-fluid sticky-top bg-white">
      <header
        class="infinity-desktop-header pt-16 pb-16"
        v-if="$device.isDesktop"
      >
        <div class="container">
          <div class="row">
            <div
              class="col-12 d-flex justify-content-between align-items-center"
            >
              <NuxtLink to="/">
                <img
                  height="45px"
                  class="mr-16"
                  src="/img/web/check-logo.png"
                  alt="Elo Infinity"
                />
              </NuxtLink>
              <div class="d-flex justify-content-center align-items-center">
                <div
                  v-for="(item, index) in headerMenuItems"
                  :key="item.id"
                  class="infinity-link d-flex justify-content-center align-items-center"
                >
                  <a
                    class="position-relative font-16 font-500 cursor-pointer"
                    :class="{
                      'mr-16': index < headerMenuItems.length - 1,
                      'active-tab font-bold font-black':
                        index === activeTabIndex,
                    }"
                    @click="scrollToId(item.id)"
                    >{{ item.label }}</a
                  >
                </div>
              </div>
              <Button :btnLoading="false">Contratar</Button>
            </div>
          </div>
        </div>
      </header>
      <header v-if="$device.isMobile" class="ptb-24 d-flex align-items-center">
        <NuxtLink class="position-relative" to="/">
          <img
            height="45px"
            width="100%"
            src="/img/web/check-logo.png"
            alt="Elo Infinity"
          />
        </NuxtLink>
        <div class="d-block ml-auto">
          <button
            class="btn font-black"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
            <i class="fas fa-bars"></i>
          </button>

          <div
            ref="offcanvasRight"
            class="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
          >
            <div class="offcanvas-header">
              <h5 id="offcanvasRightLabel">Elo Job Infinity</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div class="d-flex flex-column">
                <a
                  v-for="item in headerMenuItems"
                  :key="item.id"
                  class="mt-4 font-bold font-16"
                  @click="scrollToId(item.id)"
                >
                  {{ item.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="offcanvas-outside-zone"></div>
      </header>
    </div>
    <main class="container">
      <section ref="top" class="mt-100">
        <div
          class="d-flex justify-content-around align-items-center"
          :class="{
            'flex-column': $device.isMobile,
          }"
        >
          <div
            class="d-flex justify-content-center align-items-center flex-column"
          >
            <h1
              class="font-bold"
              :class="$device.isMobile ? 'font-36' : 'font-70'"
            >
              Elo Job Infinity
            </h1>
            <p
              class="font-light-gray"
              :class="$device.isMobile ? 'font-14' : 'font-24'"
            >
              Com a Infinity você tem
              <strong class="animated-text position-relative font-purple">
                {{ animatedTextValue }}
              </strong>
            </p>
            <div
              class="d-flex align-items-center justify-content-center"
              :class="{
                'mt-24': $device.isMobile,
                'mt-16': $device.isDesktop,
              }"
            >
              <a
                :href="$config.discordInviteLink"
                target="_blank"
                class="mr-16"
              >
                <Button btnClass="btn-infinity-primary br-10 p-16 ptb-12">
                  <i class="fab fa-discord mr-4"></i>
                  Nosso Discord</Button
                >
              </a>
              <Button>Central do Cliente</Button>
            </div>
          </div>
          <img
            src="/img/web/rocket-illustration.svg"
            :class="{
              'mt-24': $device.isMobile,
            }"
            :width="$device.isMobile ? '300px' : '500px'"
            :height="$device.isMobile ? '300px' : '500px'"
            alt="Rocket Illustration"
          />
        </div>
      </section>
      <section ref="services" class="mt-100">
        <h1 class="text-center font-bold font-36">Conheça nossos serviços</h1>
        <p
          class="text-center font-dark-grey font-16 mb-36 mt-8 mx-auto"
          :class="{
            'w-50': $device.isDesktop,
          }"
        >
          Nós oferecemos vários tipos de boost's, conheça um pouco sobre cada
          uma delas e escolhe qual se encaixa mais no seu perfil:
        </p>
        <div
          class="infinity-service-grid row d-flex justify-content-center"
          :class="{
            'row-cols-4': $device.isDesktop,
            'row-cols-1 mrl-16': $device.isMobile,
          }"
        >
          <div
            v-for="(item, index) in servicesItems"
            :key="item.label"
            class="infinity-service-card p-36 d-flex flex-column align-items-center justify-content-center position-relative col"
          >
            <span class="font-bold font-14 position-absolute"
              >0{{ index + 1 }}</span
            >
            <i class="font-70" :class="item.icon"></i>
            <p class="font-bold font-16 mt-16">{{ item.label }}</p>
            <p class="font-14 mt-4 text-center" v-html="item.description"></p>
          </div>
        </div>
      </section>
      <section ref="evaluations" class="mt-100 text-center">
        <h1 class="font-bold font-36 mt-80">ABA DE AVALIACOES</h1>
        <h1 class="font-bold font-36 mt-80">ABA DE AVALIACOES</h1>
        <h1 class="font-bold font-36 mt-80">ABA DE AVALIACOES</h1>
        <h1 class="font-bold font-36 mt-80">ABA DE AVALIACOES</h1>
        <h1 class="font-bold font-36 mt-80">ABA DE AVALIACOES</h1>
        <h1 class="font-bold font-36 mt-80">ABA DE AVALIACOES</h1>
        <h1 class="font-bold font-36 mt-80">ABA DE AVALIACOES</h1>
        <h1 class="font-bold font-36 mt-80">ABA DE AVALIACOES</h1>
      </section>
    </main>
    <div class="bg-black text-white mt-100">
      <div class="container">
        <section ref="faq">
          <div class="row">
            <div class="col-12">
              <h1 class="font-40 font-bold text-center mtb-36">
                Perguntas frequentes
              </h1>
              <div class="accordion accordion-flush" id="faq">
                <div
                  class="accordion-item bg-unset border-unset"
                  v-for="(item, index) in faqItems"
                  :key="index"
                >
                  <h2 class="accordion-header" id="questionOne">
                    <button
                      aria-label="Abrir pergunta"
                      class="accordion-button bg-black b-0 collapsed font-bold font-white"
                      type="button"
                      data-bs-toggle="collapse"
                      :data-bs-target="`#faq-collapseOne-${index}`"
                      aria-expanded="false"
                      aria-controls="faq-collapseOne"
                    >
                      <i class="font-14 mr-8 fas fa-chevron-right"></i>
                      {{ item.question }}
                    </button>
                  </h2>
                  <div
                    :id="`faq-collapseOne-${index}`"
                    class="accordion-collapse collapse"
                    aria-labelledby="questionOne"
                    data-bs-parent="#faq"
                  >
                    <p class="mb-24" v-html="item.answer"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div class="row mt-32">
            <div
              class="col-lg-6 col-sm-12"
              :class="{ 'text-center': $device.isMobile }"
            >
              <img
                :style="{ height: '75px' }"
                src="/img/web/logo.png"
                alt="Migxs"
              />
              <p class="font-14 mtb-32">
                League of Legends é uma marca registrada da Riot Games, Inc.<br />
                Nós não somos de nenhuma forma afiliados, associados ou
                endossados pela Riot Games, Inc. <br />
                Todos os direitos autoriais, marcas, imagens e marcas de serviço
                pertencem a seus respectivos proprietários.
              </p>
              <div
                class="d-flex"
                :class="{ 'justify-content-center mb-32': $device.isMobile }"
              >
                <a
                  :aria-label="social.name"
                  class="pr-24"
                  v-for="(social, index) of socialNetworks"
                  :key="index"
                  :href="social.link"
                  target="_blank"
                >
                  <i
                    class="font-36 font-white"
                    :class="social.icon"
                    :alt="social.name"
                  ></i>
                </a>
              </div>
            </div>
            <div
              class="col-lg-6 col-sm-12"
              :class="$device.isDesktop ? 'text-end' : 'text-center'"
            >
              <h2 class="migxs-white font-20 font-bold">COMPRA 100% SEGURA</h2>
              <div
                class="d-flex mt-16"
                :class="
                  $device.isDesktop
                    ? 'justify-content-end'
                    : 'justify-content-center'
                "
              >
                <img
                  :class="index < creditCardsBrands.length - 1 ? 'mr-16' : ''"
                  v-for="(brand, index) of creditCardsBrands"
                  :key="index"
                  :src="`/img/web/payment-methods/${brand.icon}.png`"
                  :alt="brand.name"
                />
              </div>
              <img
                class="mt-16"
                src="/img/web/payment-methods/pix.png"
                alt="PIX"
              />
            </div>
          </div>
          <div class="row pb-32">
            <div class="col-12">
              <hr class="font-grey mtb-32" />
              <NuxtLink
                class="font-14 font-white font-bold text-uppercase mr-32"
                to="/"
                alt="Elo Job Infinity"
                >© {{ $dayjs().year() }} Elo Job Infinity</NuxtLink
              >
              <a
                :aria-label="menu.name"
                class="font-14 font-bold text-uppercase font-white"
                :class="index < footerMenuItems.length - 1 ? 'mr-32' : ''"
                v-for="(menu, index) of footerMenuItems"
                :key="index"
                :href="menu.link"
                target="_blank"
                :alt="menu.name"
                >{{ menu.name }}</a
              >
            </div>
          </div>
        </footer>
      </div>
    </div>
    <!-- <footer>
      <div class="row">
        <div
          class="col-lg-6 col-sm-12"
          :class="{ 'text-center': $device.isMobile }"
        >
          <img class="h-74" src="/img/web/white-logo-vector.svg" alt="Migxs" />
          <p class="font-14 mtb-32">
            Nós cuidamos de tudo, 24 horas por dia.<br />
            Venha ser migxs, estamos esperando por você!
          </p>
          <div
            class="d-flex"
            :class="{ 'justify-content-center mb-32': $device.isMobile }"
          >
            <a
              :aria-label="social.name"
              class="pr-24"
              v-for="(social, index) of socialNetworks"
              :key="index"
              :href="social.link"
              target="_blank"
            >
              <i
                class="migxs-fa-medium migxs-white"
                :class="social.icon"
                :alt="social.name"
              ></i>
            </a>
          </div>
        </div>
        <div
          class="col-lg-6 col-sm-12"
          :class="$device.isDesktop ? 'text-end' : 'text-center'"
        >
          <h2 class="font-white font-20 font-bold">COMPRA 100% SEGURA</h2>
          <div
            class="d-flex mt-16"
            :class="
              $device.isDesktop
                ? 'justify-content-end'
                : 'justify-content-center'
            "
          >
            <img
              :class="index < creditCardsBrands.length - 1 ? 'mr-16' : ''"
              v-for="(brand, index) of creditCardsBrands"
              :key="index"
              :src="`/img/web/payment-methods/${brand.icon}.png`"
              :alt="brand.name"
            />
          </div>
          <img class="mt-16" src="/img/web/payment-methods/pix.png" alt="PIX" />
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <hr class="font-black mtb-32" />
          <NuxtLink
            class="font-14 font-bold text-uppercase mr-32"
            to="/"
            alt="Elo Job Infinity"
            >© {{ $dayjs().year() }} Elo Job Infinity</NuxtLink
          >
          <a
            :aria-label="menu.name"
            class="font-14 font-bold text-uppercase"
            :class="index < footerMenuItems.length - 1 ? 'mr-32' : ''"
            v-for="(menu, index) of footerMenuItems"
            :key="index"
            :href="menu.link"
            target="_blank"
            :alt="menu.name"
            >{{ menu.name }}</a
          >
        </div>
      </div>
    </footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqItems: [
        {
          question: 'A Elo Job Infinity é segura/confiável?',
          answer:
            'Com toda certeza. Só possuímos avaliações positivas sobre os nossos serviços, você poderá conferi-las em “feedbacks” no nosso servidor do <a class="font-purple" href="https://discord.com/invite/vg8S6gbMVf" target="_blank">Discord</a>',
        },
        {
          question: 'Qual o diferencial da Elo Job Infinity?',
          answer:
            'Quando os colaboradores são apaixonados pelo que fazem e vestem a camisa do negócio, eles conseguem levar esse diferencial para o trabalho. A Elo Infinity coloca os clientes sempre em primeiro lugar, pois priorizamos tanto a sua <strong>satisfação</strong> quanto a sua <strong>segurança</strong>. Fazemos o melhor para agregar mais qualidade ao serviço com o objetivo de tornar sua experiência de fato INFINITY.',
        },
        {
          question: 'Como sei que minha conta não será roubada?',
          answer:
            'A seletiva de BOOSTERS é rígida; buscamos profissionais confiáveis para garantir não apenas qualidade e agilidade, mas também a privacidade e segurança necessária para execução dos serviços. No entanto, também orientamos que você verifique o e-mail da sua conta no site do jogo e utilize uma senha temporária antes de informar os dados de acesso.',
        },
        {
          question: 'Quando meu serviço irá iniciar?',
          answer:
            'Após você contratar o serviço e o pagamento ser aprovado, daremos início ao serviço em alguns instantes. Você será notificado assim que iniciar e poderá acompanhar todo o progresso.',
        },
      ],
      socialNetworks: [
        {
          name: 'twitter',
          icon: 'fab fa-twitter',
          link: 'https://twitter.com/elojobinfinity',
        },
        {
          name: 'discord',
          icon: 'fab fa-discord',
          link: 'https://discord.com/invite/vg8S6gbMVf',
        },
        {
          name: 'instagram',
          icon: 'fab fa-instagram',
          link: 'https://www.instagram.com/elojobinfinity/',
        },
      ],
      creditCardsBrands: [
        {
          name: 'American Express',
          icon: 'amex',
        },
        {
          name: 'Visa',
          icon: 'visa',
        },
        {
          name: 'Elo',
          icon: 'elo-white',
        },
        {
          name: 'Mastercard',
          icon: 'mastercard',
        },
      ],
      footerMenuItems: [
        {
          name: 'Ajuda',
          link: 'https://discord.com/invite/vg8S6gbMVf',
        },
        {
          name: 'Política de Privacidade',
          link: '/privacy-policy',
        },
        {
          name: 'Termos de Uso',
          link: '/terms-of-use',
        },
      ],
      servicesItems: [
        {
          icon: 'fas fa-rocket',
          label: 'ELO BOOST',
          description:
            'Um <strong>jogador profissional</strong> irá garantir o elo desejado jogando <strong>em sua conta</strong>.',
        },
        {
          icon: 'fas fa-brain',
          label: 'DUO BOOST',
          description:
            'Você irá jogar <strong>duo</strong> com um <strong>jogador profissional</strong>, até chegar no elo desejado',
        },
        {
          icon: 'fas fa-bus',
          label: 'MD10',
          description:
            'Iremos <strong>garantir o melhor desempenho</strong> possível na sua <strong>classificatória</strong>',
        },
        {
          icon: 'fas fa-burn',
          label: 'COACHING',
          description:
            '<strong>Aprenda as melhores técnicas</strong> para subir de elo com <strong>jogadores de alto nível</strong>',
        },
        {
          icon: 'fas fa-bug',
          label: 'Lorem ipsum',
          description:
            'Lorem, <strong>ipsum dolor sit</strong> amet consectetur adipisicing elit. <strong>Quisquam, quidem</strong>',
        },
        {
          icon: 'fas fa-building',
          label: 'Lorem ipsum 2',
          description:
            'Lorem, <strong>ipsum dolor sit</strong> amet consectetur adipisicing elit. <strong>Quisquam, quidem</strong>',
        },
      ],
      headerMenuItems: [
        {
          label: 'Inicio',
          id: 'top',
        },
        {
          label: 'Serviços',
          id: 'services',
        },
        {
          label: 'Avaliações',
          id: 'evaluations',
        },
        {
          label: 'Sobre',
          id: 'about',
        },
        {
          label: 'Contato',
          id: 'contact',
        },
      ],
      animatedTextArr: [
        'rápidez',
        'privacidade',
        'segurança',
        'suporte',
        'qualidade',
      ],
      animatedTextValue: '',
      speedForward: 100,
      speedWait: 10,
      speedBackspace: 100,
      bootstrapInstance: null,
      activeTabIndex: 0,
    }
  },
  methods: {
    delWriter(text, i, cb) {
      if (i >= 0) {
        this.animatedTextValue = text.substring(0, i--)
        setTimeout(() => this.delWriter(text, i, cb), this.speedBackspace)
      } else if (typeof cb == 'function') {
        setTimeout(cb, 100)
      }
    },
    typeWriter(text, i, cb) {
      if (i < text.length + 1) {
        this.animatedTextValue = text.substring(0, i++)
        setTimeout(() => this.typeWriter(text, i++, cb), this.speedForward)
      } else if (i === text.length + 1) {
        setTimeout(() => this.delWriter(text, i, cb), this.speedWait)
      }
    },
    startTypeWriter(i) {
      if (typeof this.animatedTextArr[i] == 'undefined') {
        setTimeout(() => this.startTypeWriter(0), this.speedWait)
      } else if (i < this.animatedTextArr[i].length + 1) {
        this.typeWriter(this.animatedTextArr[i], 0, () => {
          this.startTypeWriter(i + 1)
        })
      }
    },
    closeOffCanvas() {
      this.bootstrapInstance.hide()
    },
    scrollToId(id) {
      if (this.$device.isMobile) this.closeOffCanvas()

      this.activeTabIndex = this.headerMenuItems.findIndex(
        (item) => item.id === id
      )

      if (id === 'top') return window.scrollTo(0, 0)

      const element = this.$refs[id]
      window.scrollTo(0, element.offsetTop - this.$refs.header.clientHeight)
    },
    onScroll() {
      const scrollTop = window.scrollY
      const headerHeight = this.$refs.header.clientHeight

      this.headerMenuItems.forEach((item, index) => {
        const element = this.$refs[item.id]
        if (!element) return // @todo remove this code after all elements are created
        const elementTopHeight = element.offsetTop + element.clientHeight
        const elementTop = elementTopHeight / 2 - headerHeight

        if (scrollTop >= elementTop) {
          this.activeTabIndex = index
        }
      })
    },
  },
  mounted() {
    this.startTypeWriter(0)

    if (this.$device.isMobile)
      this.$nextTick(() => {
        this.bootstrapInstance = new bootstrap.Offcanvas(
          this.$refs.offcanvasRight
        )
      })
    else document.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    if (this.$device.isDesktop)
      document.removeEventListener('scroll', this.onScroll)
  },
  head() {
    return {
      title: `Elo Infinity - A melhor plataforma de negócios para gamers`,
      meta: [
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          hid: 'description',
          name: 'description',
          content: `A melhor plataforma de negócios para gamers.`,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.infinity-desktop-header {
  a {
    &:not(.active-tab) {
      color: #a5a9b0;
    }

    &:not(.active-tab):hover,
    &:not(.active-tab):active {
      color: var(--purple);
    }

    &.active-tab::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 40%;
      width: 8px;
      height: 8px;
      background-color: #595cff;
      border-radius: 50%;
      margin-bottom: -15px;
      animation: bloop 500ms ease-in-out;
    }
  }
}

@keyframes bloop {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.animated-text {
  border-right: 4px solid var(--purple);
}

.infinity-service-grid {
  gap: 25px;
}

.infinity-service-card {
  border: 2px solid var(--purple);
  box-shadow: 0px 3px 52px rgba(90, 92, 102, 0.06);
  border-radius: 8px;

  span {
    left: 15px;
    top: 15px;
  }
}

.accordion-collapse {
  border-bottom: 1px solid rgba(255, 255, 255, 0.125);
}

.accordion-button::after {
  width: 0px;
  height: 0px;
}

.accordion-button {
  padding: 24px 0;
  box-shadow: inset 0 -1px 0 rgba(255, 255, 255, 0.125);
}

.accordion-button:not(.collapsed) {
  background-color: var(--black) !important;
  color: var(--primary);
  box-shadow: none;
}

.accordion-button:not(.collapsed) i {
  transform: rotate(90deg);
}
</style>
