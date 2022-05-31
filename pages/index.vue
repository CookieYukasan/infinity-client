<template>
  <div class="circle-mask">
    <div
      class="landing-page-gradient top-0 w-100 vh-100 position-absolute"
    ></div>
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
      <section class="hero mt-100">
        <div
          class="d-flex align-items-center justify-content-between"
          :class="{
            'flex-column': $device.isMobile,
          }"
        >
          <p class="fw-900" :class="$device.isDesktop ? 'font-48' : 'font-28'">
            Na elo infinity tem:<br />
            <span class="font-bold animated-text mx-auto"
              >- {{ animatedTextOptions.textValue }}</span
            ><br />
            <span class="font-20 fw-normal"
              >Levamos você ao infinito e além ✨</span
            >
          </p>
          <img
            class="poro-hero"
            :class="{
              'mt-24 mx-auto': $device.isMobile,
            }"
            src="/img/web/landing-page/poro.png"
            :width="$device.isDesktop ? '524px' : '250px'"
            alt="Poro Illustration"
          />
        </div>
      </section>
      <section
        class="service-cards row mb-48 justify-content-center"
        :class="{
          'flex-column gx-0': $device.isMobile,
        }"
      >
        <div
          v-for="(item, index) in servicesCardItems"
          :key="index"
          class="service-card text-center"
          :class="{
            'col-3': $device.isDesktop,
            'col-12': $device.isMobile,
          }"
        >
          <div class="col-12 infinity-bg-grey-400 br-6 p-24">
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
        </div>
      </section>
      <section class="who-we-are position-relative d-flex mb-100">
        <img
          src="/img/web/landing-page/jinx-illustration.png"
          alt="Jinx Illustration"
          v-if="$device.isDesktop"
        />
        <div class="information position-relative">
          <img
            class="position-absolute boom"
            src="/img/web/landing-page/boom-text.png"
            alt="Boom Text"
          />
          <img
            class="position-absolute monkey"
            src="/img/web/landing-page/monkey-illustration.png"
            alt="Money Illustration"
            v-if="$device.isDesktop"
          />
          <h1
            class="font-40 font-bold fw-900 mb-40"
            :class="$device.isMobile ? 'text-center' : ''"
          >
            Quem somos?
          </h1>
          <p
            class="font-16 text-center"
            :class="$device.isDesktop ? 'w-75' : ''"
          >
            A Elo Infinity tem experiência com inúmeros serviços de Elo Boost,
            Duo Boost e Coach
            <strong class="font-yellow">concluídos de forma rápida</strong> e
            <strong class="font-yellow">efetiva</strong> e sempre com um padrão
            de alta satisfação dos nossos clientes. Além disso, vem se tornando
            <strong class="font-yellow">destaque no mercado</strong> de boosting
            devido ao <strong class="font-yellow">grande diferencial</strong> no
            atendimento e suporte ao cliente, assim como a excelência na entrega
            dos serviços. Nossa premissa é oferecer um
            <strong class="font-yellow">serviço de qualidade</strong>
            pelo
            <strong class="font-yellow">preço mais barato</strong> do mercado.
          </p>
        </div>
      </section>
      <section class="mb-48 position-relative">
        <img
          class="ammunition position-absolute"
          src="/img/web/landing-page/ammunition.png"
          alt="Ammunition Illustration"
        />
        <h1 class="text-center fw-900 font-40">
          Por que escolher a Elo Job Infinity?
        </h1>
        <p
          class="font-16 text-center mx-auto mt-24"
          :class="$device.isDesktop ? 'w-75' : ''"
        >
          A Elo Infinity tem o cliente como prioridade e isso também reflete na
          escolha da nossa equipe;
          <strong class="font-yellow"
            >trabalhamos somente com jogadores de nível Grão Mestre e
            Desafiante</strong
          >
          para que o seu pedido seja entregue com
          <strong class="font-yellow">segurança</strong>,
          <strong class="font-yellow">eficiência</strong> e
          <strong class="font-yellow">maestria</strong>. Além disso,
          <strong class="font-yellow">oferecemos um excelente suporte</strong>
          ao cliente através do WhatsApp e servidor do Discord. Você irá
          contratar um serviço de qualidade por um preço barato e ainda poderá
          <strong class="font-yellow">personaliza-lo do seu jeito</strong>,
          escolhendo a posição do flash, horários de acesso à conta, quais rotas
          e campeões serão usados, chat offline e muito mais!
        </p>
        <div
          class="row text-center mt-32"
          :class="$device.isMobile ? 'flex-column' : ''"
        >
          <div
            v-for="(item, index) in companyValuesItems"
            :key="index"
            class="col-4 value-company-card"
            :class="$device.isMobile ? 'col-12' : ''"
          >
            <img
              :src="`/img/web/landing-page/values-cards-icons/${index + 1}.png`"
              alt="Illustration"
            />
            <h1 class="fw-900 font-28 mt-16">{{ item.title }}</h1>
            <hr class="infinity-divider mtb-16" />
            <p class="font-16" v-html="item.description"></p>
          </div>
        </div>
      </section>
      <section class="feedbacks mt-100">
        <h1 class="fw-900 font-40 text-center">
          O que os clientes dizem sobre a Elo Infinity?
        </h1>
        <p class="font-16 text-center mt-24 mb-32">
          Para nós, a satisfação do
          <strong class="font-bold font-yellow"
            >cliente vem sempre em primeiro lugar.</strong
          >
        </p>
        <div class="d-flex justify-content-center">
          <img
            src="/img/web/landing-page/jinx-illustration-2.png"
            alt="Jinx Illustration"
            class="jinx col-3"
            v-if="$device.isDesktop"
          />
          <div :class="$device.isMobile ? 'col-12' : 'col-9'">
            <div class="row" :class="$device.isDesktop ? 'gx-4' : 'gx-0'">
              <div
                v-for="(item, index) in feedbackItems"
                :key="index"
                class="feedback-card"
                :class="$device.isDesktop ? 'col-6 mb-16' : 'col-12'"
              >
                <div
                  class="infinity-bg-grey-400 w-100 h-100 p-16 br-6 d-flex flex-column align-items-center position-relative"
                >
                  <p
                    class="service-label font-14 position-absolute font-yellow"
                  >
                    <strong class="font-white">Serviço:</strong>
                    {{ item.serviceName }}
                  </p>
                  <p class="date-label font-bold font-14 position-absolute">
                    {{ item.date }}
                  </p>
                  <img
                    :src="item.userImage"
                    alt="User Avatar"
                    width="96px"
                    height="96px"
                    class="user-avatar rounded-circle"
                  />
                  <h1 class="fw-900 font-20 mt-16 mb-8">{{ item.userName }}</h1>
                  <p class="font-14 text-center">{{ item.text }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="faq mt-60">
        <h1 class="fw-900 text-center font-40">Perguntas frequentes</h1>
        <p class="font-16 text-center mt-24 mb-32">
          Abaixo
          <strong class="font-yellow">respondemos algumas das perguntas</strong>
          mais frequentes:
        </p>
        <div class="accordion accordion-flush" id="faq">
          <div
            class="accordion-item border-0 mb-24 infinity-bg-grey-400"
            v-for="(item, index) in faqItems"
            :key="index"
          >
            <h2 class="accordion-header" :id="`question` + item.key">
              <button
                class="accordion-button collapsed infinity-bg-grey-400 font-white font-bold"
                type="button"
                data-bs-toggle="collapse"
                :data-bs-target="`#heading` + item.key"
                aria-expanded="false"
                :aria-controls="`heading` + item.key"
              >
                {{ item.ask }}
              </button>
            </h2>
            <div
              :id="`heading` + item.key"
              class="accordion-collapse collapse"
              :aria-labelledby="`question` + item.key"
              data-bs-parent="#faq"
            >
              <div class="accordion-body" v-html="item.answer"></div>
            </div>
          </div>
        </div>
      </section>
      <footer class="mtb-40 d-flex flex-column align-items-center">
        <Logo />
        <p class="font-16 mt-32 mb-24 text-center">
          League of Legends é uma marca registrada da Riot Games, Inc. Nós não
          somos de nenhuma forma afiliados, associados ou endossados pela Riot
          Games, Inc. Todos os direitos autoriais, marcas, imagens e marcas de
          serviço pertencem a seus respectivos proprietários.
        </p>
        <p class="font-bold font-16 mb-16">Formas de pagamento</p>
        <div class="d-flex align-items-center p-16 br-6">
          <img
            src="/img/web/payment-methods/mercado-pago.png"
            alt="Mercado Pago"
            width="99px"
            height="26px"
            class="mr-24"
          />
          <img
            src="/img/web/payment-methods/pix.png"
            alt="Pix"
            width="99px"
            height="35px"
            class="mr-24"
          />
          <img
            src="/img/web/payment-methods/picpay.png"
            alt="PicPay"
            width="99px"
            height="35px"
          />
        </div>
        <p class="font-14 mt-24">
          Copyright <strong class="font-yellow">© Elo Job Infinity</strong>
          {{ $dayjs().format('YYYY') }} –
          <NuxtLink class="font-yellow font-bold" to="/privacy"
            >Privacidade</NuxtLink
          >
          –
          <NuxtLink class="font-yellow font-bold" to="/privacy"
            >Termos de Uso</NuxtLink
          >
        </p>
        <p class="font-14">
          Designed by:
          <a
            class="font-yellow font-bold"
            target="_blank"
            href="https://www.linkedin.com/in/vitor-c-01b881223/"
            >Vitor C.</a
          >
          & Developed by:
          <a
            class="font-yellow font-bold"
            target="_blank"
            href="https://www.linkedin.com/in/adson-martins-743ab01b5/"
            >Adson M.</a
          >
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayServicesDropdown: false,
      faqItems: [
        {
          ask: 'A Elo Job Infinity é segura/confiável?',
          answer:
            'Sem dúvidas. Somos destaque em boosting no Brasil, com inúmeros serviços finalizados e vasta experiência em Elo Boost, Duo Boost e Coaching para League of Legends. Por sermos extremamente rígidos, trabalhamos com uma equipe de alto nível para proporcionar maior satisfação ao cliente, que é a nossa maior preocupação. A ELO INFINITY é uma empresa completa e estruturada, você encontra agilidade, qualidade, valor acessível e suporte em um só lugar.',
          key: 'One',
        },
        {
          ask: 'Qual o diferencial da Elo Job Infinity?',
          answer:
            'Quando os colaboradores são apaixonados pelo que fazem e vestem a camisa do negócio, eles conseguem levar esse diferencial para o trabalho. A ELO INFINITY coloca os clientes sempre em primeiro lugar, pois priorizamos tanto a sua satisfação quanto a sua segurança. Fazemos o melhor para agregar mais qualidade ao serviço com o objetivo de tornar sua experiência de fato INFINITY.',
          key: 'Two',
        },
        {
          ask: 'Como sei que minha conta não será roubada?',
          answer:
            'Sabemos a importância e valor emocional que as contas representam para nossos clientes, por isso a seletiva de boosters é rígida; buscamos profissionais confiáveis para garantir não apenas qualidade e agilidade, mas também a privacidade necessária para execução do serviço. No entanto, para maior segurança, também orientamos que você verifique o e-mail da sua conta no site do jogo e utilize uma senha temporária antes de informar os dados de acesso.',
          key: 'Three',
        },
        {
          ask: 'Há risco de ser banido?',
          answer:
            'Existe sim chance de suspensão da conta para o serviço de Elo Boost, já o Coaching e Duo Boost não são contra as regras da empresa responsável pelo jogo. Porém, fique tranquilo(a), nós da ELO INFINITY seguimos um rígido protocolo para que o risco de suspensão da sua conta seja quase ZERO. O máximo que pode acontecer é "block", o que pode ser resolvido com um simples ticket informando os dados corretos da conta.',
          key: 'Four',
        },
        {
          ask: 'Quando meu serviço irá iniciar?',
          answer:
            'Após você contratar o serviço e o pagamento ser aprovado, daremos início ao serviço em alguns instantes. Você será notificado assim que iniciar e poderá acompanhar todo o progresso.',
          key: 'Five',
        },
        {
          ask: 'Como funciona o pagamento?',
          answer:
            'O pagamento deve ser realizado antes de disponibilizarmos seu pedido a algum jogador da nossa equipe. Aceitamos: Boleto bancário, Cartões de crédito, Depósito Bancário, Transferência Online (PIX) e DOC/TED Eletrônico.',
          key: 'Six',
        },
        {
          ask: 'Quem ficará sabendo que eu comprei o serviço?',
          answer:
            'O sistema da ELO INFINITY foi desenvolvido para proporcionar o máximo de segurança ao cliente. Somente o jogador que selecionar seu pedido terá acesso às informações da conta.',
          key: 'Seven',
        },
      ],
      feedbackItems: [
        {
          serviceName: 'Elo Boost',
          userName: 'Vitória',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'Karma é um ótimo booster, realizou o serviço em apenas 2 dias, serviço top, job incomparável com qualquer outra empresa, agradeço a Yuumi também pelo apoio, amo você amor.',
          date: '05/31/2022',
        },
        {
          serviceName: 'Duo Boost',
          userName: 'Lufa',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'Elo Boost',
          userName: 'Lufa',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Lufa',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
      ],
      companyValuesItems: [
        {
          title: 'Valores mais acessíveis',
          description:
            'A Elo Infinity possui os <strong class="font-yellow">melhores valores do mercado</strong>.',
        },
        {
          title: 'Jogadores qualificados',
          description:
            '<strong class="font-yellow">Possuimos os melhores jogadores!</strong> Nossa equipe é composta somente por jogadores de alto nível (Mestre, Grão-Mestre e Challenger).',
        },
        {
          title: 'Privacidade e segurança',
          description:
            '<strong class="font-yellow">Garantimos a segurança pelos meios de pagamento.</strong> Os boosters são treinados para fazer o serviço sem levantar suspeitas.',
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
    onScroll() {
      if (this.displayServicesDropdown) this.disableServiceDropdown()
    },
  },
  mounted() {
    this.startTypeWriter(0)

    window.addEventListener('scroll', this.onScroll)
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

.landing-page-gradient {
  z-index: -1;
  background: radial-gradient(
    140% 140% at 50% 8%,
    #2958ff 0%,
    rgba(10, 16, 23, 0) 52%
  );
}

.circle-mask {
  background-image: url('/img/web/landing-page/bg-hero.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

.poro-hero {
  animation: gravity-animation 2s ease-in-out infinite;
}

@keyframes gravity-animation {
  0% {
    transform: translateY(-10px);
  }
  50% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-10px);
  }
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

section.service-cards {
  margin-top: 140px;
}

.service-card img {
  margin-top: -120px;
}

section.who-we-are .information {
  margin-top: 100px;
}

@media only screen and (min-width: 768px) {
  section.who-we-are .information img.monkey {
    bottom: 120px;
    right: 180px;
    width: 350px;
    z-index: -1;
  }

  section.who-we-are h1 {
    margin-left: -100px;
  }

  section.who-we-are p {
    margin-left: -150px;
  }

  section.who-we-are .information img.boom {
    top: -25px;
    left: -150px;
    width: 400px;
    z-index: -1;
  }

  .value-company-card:nth-child(2) {
    margin-top: 80px;
  }

  .feedback-card {
    z-index: -1;
    width: 50%;
  }
}

@media only screen and (max-width: 768px) {
  .circle-mask {
    background-size: contain;
  }

  section.service-cards .service-card:not(:nth-child(1)) {
    margin-top: 130px;
  }

  section.who-we-are .information img.boom {
    left: 35px;
    top: -10px;
    width: 300px;
    z-index: -1;
  }
}

img.ammunition {
  top: -128px;
  left: 176px;
  z-index: -1;
}

.infinity-divider {
  background-color: var(--grey-400);
  height: 1px;
  border: 0;
}

section.feedbacks img.jinx {
  align-self: baseline;
  width: 500px;
  height: 500px;
  margin-top: 60px;
  margin-right: -110px;
}

.feedback-card img.user-avatar {
  margin-top: -60px;
}

.feedback-card:nth-child(1),
.feedback-card:nth-child(2) {
  margin-top: 40px;
}

.feedback-card {
  margin-top: 80px;
  margin-bottom: 30px;
}

.feedback-card .service-label {
  top: 16px;
  left: 22px;
}

.feedback-card .date-label {
  top: 16px;
  right: 22px;
}

.accordion-button::after {
  font-family: 'Material Icons Two Tone';
  content: 'add';
  -webkit-font-feature-settings: 'liga';
  background-image: none;
}

.accordion-button:not(.collapsed)::after {
  content: 'remove';
}

.accordion-button:not(.collapsed) {
  color: var(--white);
  background-color: var(--grey-400);
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 13%);
}

.payment-methods {
  border: 4px solid var(--grey-400);
}

.payment-methods img ~ img {
  margin-top: 16px;
}
</style>
