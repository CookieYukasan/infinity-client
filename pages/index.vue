<template>
  <div class="circle-mask">
    <div class="landing-page-gradient top-0 w-100 position-absolute"></div>
    <div class="container-md">
      <Header />
      <section class="hero mt-16 font-white">
        <div
          class="d-flex align-items-center justify-content-between"
          :class="{
            'flex-column': $device.isMobile,
          }"
        >
          <p class="fw-bold" :class="$device.isDesktop ? 'font-48' : 'font-28'">
            Na elo infinity tem:<br />
            <span class="fw-500 animated-text mx-auto"
              >- {{ animatedTextOptions.textValue }}</span
            ><br />
            <span class="font-20 fw-regular"
              >Levamos você ao infinito e além ✨</span
            >
          </p>
          <img
            class="gravity-animation"
            :class="{
              'mt-32 mx-auto': $device.isMobile,
            }"
            src="/img/web/landing-page/poro.png"
            :width="$device.isDesktop ? '424px' : '250px'"
            alt="Poro Illustration"
          />
        </div>
      </section>
      <section
        class="row mt-80 justify-content-center"
        :class="$device.isMobile ? 'flex-column mrl-16' : ''"
      >
        <div
          v-for="(item, index) in servicesCardItems"
          :key="index"
          class="services-item position-relative d-flex flex-column align-items-center col infinity-bg-dark-white p-24 br-8"
          :class="{
            'mr-16': index !== servicesCardItems.length - 1,
          }"
        >
          <img
            :src="`/img/web/landing-page/services-cards-icons/${index}.svg`"
            alt="Icon"
          />
          <h1 class="font-16 mt-16 mb-8 font-bold align-self-start">
            {{ item.title }}
          </h1>
          <p class="font-14 font-grey-500" v-html="item.description"></p>
          <NuxtLink
            :to="item.url"
            :class="$device.isMobile ? 'mt-32' : ''"
            class="btn-infinity-primary br-8 ptb-12 w-100 text-center font-white"
            >Contratar</NuxtLink
          >
        </div>
      </section>
      <section class="mtb-80">
        <p
          class="font-16 font-blue-primary font-medium"
          :class="$device.isMobile ? 'text-center' : ''"
        >
          Um pouquinho sobre a Elo Infinity
        </p>
        <h1
          class="mt-8 mb-16 font-blue-200 font-bold"
          :class="$device.isMobile ? 'text-center font-40' : 'font-48'"
        >
          Quem somos?
        </h1>
        <p
          class="font-16 font-grey-500"
          :class="$device.isMobile ? 'text-center' : ''"
        >
          A Elo Infinity tem experiência com inúmeros serviços de
          <strong class="font-blue-200"
            >Elo Boost, Duo Boost e Coach concluídos de forma rápida e
            efetiva</strong
          >, sempre com um padrão de alta satisfação dos nossos clientes. Além
          disso,
          <strong class="font-blue-200"
            >vem se tornando destaque no mercado de boosting</strong
          >
          devido ao grande diferencial no atendimento e suporte ao cliente,
          assim como na excelência da entrega dos serviços. Nossa premissa é
          oferecer um serviço de qualidade
          <strong class="font-blue-200"
            >pelo preço mais barato do mercado</strong
          >.
        </p>
        <div class="about-cards-grid mt-32 d-flex justify-content-center">
          <div class="about-img-card position-relative">
            <img
              class="object-fit-cover br-8"
              src="/img/web/landing-page/about-card-1.png"
              alt="Card Image"
              :width="$device.isMobile ? '100px' : '280px'"
              :height="$device.isMobile ? '100px' : '280px'"
            />
          </div>
          <div class="about-img-card position-relative">
            <img
              class="object-fit-cover br-8"
              :class="$device.isMobile ? 'mrl-16' : 'mrl-48'"
              src="/img/web/landing-page/about-card-2.png"
              alt="Card Image"
              :width="$device.isMobile ? '100px' : '280px'"
              :height="$device.isMobile ? '100px' : '280px'"
            />
          </div>

          <div class="about-img-card position-relative">
            <img
              class="object-fit-cover br-8"
              src="/img/web/landing-page/about-card-3.png"
              alt="Card Image"
              :width="$device.isMobile ? '100px' : '280px'"
              :height="$device.isMobile ? '100px' : '280px'"
            />
          </div>
        </div>
      </section>
      <section class="d-flex mb-80">
        <div :class="$device.isMobile ? 'text-center' : ''">
          <p class="font-16 font-blue-primary font-medium">
            Elo Infinity é a sua melhor escolha!
          </p>
          <h1
            class="mt-8 mb-16 font-blue-200 font-bold"
            :class="$device.isMobile ? 'font-40' : 'font-48'"
          >
            Por que escolher a<br v-if="$device.isDesktop" />
            Elo Job Infinity?
          </h1>
          <p class="font-16 font-grey-500">
            A Elo Infinity tem o cliente como prioridade e isso também reflete
            na seleção da nossa equipe;
            <strong class="font-blue-200"
              >trabalhamos somente com jogadores de nível Grão Mestre e
              Desafiante para que o seu pedido seja entregue com segurança,
              eficiência e maestria</strong
            >. Além disso, oferecemos um
            <strong class="font-blue-200">excelente suporte</strong> ao cliente
            através do <strong class="font-blue-200">WhatsApp</strong> e
            servidor do <strong class="font-blue-200">Discord</strong>. Você irá
            contratar um serviço de qualidade por um preço barato e ainda poderá
            personaliza-lo do seu jeito escolhendo a posição do flash, horários
            de acesso à conta, quais rotas e campeões serão usados, chat offline
            e muito mais!
          </p>
          <div class="mt-32">
            <div
              v-for="(item, index) in whyChooseUsItems"
              :key="index"
              class="d-flex mb-32"
              :class="{
                'flex-column justify-content-center': $device.isMobile,
              }"
            >
              <span
                class="material-icons infinity-bg-blue-200 font-white p-12 font-32 rounded-circle align-self-baseline"
                :class="$device.isMobile ? 'mx-auto mb-16' : ''"
                >{{ item.icon }}</span
              >
              <div class="ml-16">
                <p class="font-20 font-bold font-blue-200">
                  {{ item.title }}
                </p>
                <p
                  class="font-16 font-grey-500"
                  :class="$device.isMobile ? 'mt-16' : ''"
                >
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <img
          class="align-self-center"
          src="/img/web/landing-page/agent-illustration.png"
          alt="Agent"
          v-if="$device.isDesktop"
        />
      </section>
      <section class="mb-80">
        <div class="d-flex justify-content-between">
          <div :class="$device.isMobile ? 'text-center' : ''">
            <p class="font-16 font-blue-primary font-medium">
              Veja os Feedback do nossos clientes:
            </p>
            <h1
              class="mt-8 mb-16 font-blue-200 font-bold"
              :class="$device.isMobile ? 'font-40' : 'font-48'"
            >
              O que os clientes dizem<br v-if="$device.isDesktop" />
              sobre a Elo Infinity?
            </h1>
            <p class="font-16 font-grey-500 font-medium">
              Para nós, a satisfação do cliente vem sempre em primeiro lugar.
            </p>
          </div>
          <img
            src="/img/web/landing-page/astronaut-icon.svg"
            alt="Autronaut Illustration"
            width="220px"
            height="220px"
            v-if="$device.isDesktop"
          />
        </div>
        <div class="mt-80">
          <div class="mb-32 feedback-grid">
            <div
              v-for="(item, index) in activeFeedbackItems"
              :key="index"
              class="d-flex position-relative flex-column align-items-center infinity-bg-white feedback-item br-8 p-16"
            >
              <div class="position-absolute top-0 start-0 ml-16 mt-16">
                <span class="font-14 font-blue-200 font-medium">Serviço:</span>
                <span class="font-14 font-blue-primary">{{
                  item.serviceName
                }}</span>
              </div>
              <div class="position-absolute top-0 end-0 mr-16 mt-16">
                <span class="font-14 font-blue-200 font-medium">{{
                  item.date
                }}</span>
              </div>
              <img
                class="rounded-circle"
                :src="item.userImage"
                alt="User Image"
                width="96px"
                height="96px"
              />
              <p class="font-bold font-blue-200 font-20 mt-16 mb-8">
                {{ item.userName }}
              </p>
              <p class="font-14 font-grey-500 text-center">
                {{ item.text }}
              </p>
            </div>
          </div>
          <div class="d-flex justify-content-center align-items-center">
            <Button
              :onClick="() => (feedbackPage = feedbackPage - 1)"
              btnClass="d-flex align-items-center justify-content-center btn-infinity-primary br-8 ptb-12 mr-16 w-200"
              :btnDisabled="feedbackPage <= 0"
            >
              <span class="material-icons-two-tone font-white mr-8"
                >arrow_back</span
              >
              Voltar</Button
            >
            <Button
              :onClick="() => (feedbackPage = feedbackPage + 1)"
              :btnDisabled="(feedbackPage + 1) * 4 >= feedbackItems.length"
              btnClass="d-flex align-items-center justify-content-center btn-infinity-primary br-8 ptb-12 w-200"
            >
              Avançar
              <span class="material-icons-two-tone font-white ml-8"
                >arrow_forward</span
              >
            </Button>
          </div>
        </div>
      </section>
      <section class="mb-80">
        <div :class="$device.isMobile ? 'text-center' : ''">
          <p class="font-16 font-blue-primary font-medium">
            Tire suas duvidas!
          </p>
          <h1
            class="mt-8 mb-16 font-blue-200 font-bold"
            :class="$device.isMobile ? 'font-40' : 'font-48'"
          >
            Perguntas frequentes
          </h1>
          <p class="font-16 font-grey-500 font-medium">
            Abaixo respondemos algumas das perguntas mais frequentes:
          </p>
        </div>
        <div class="accordion accordion-flush mt-32" id="faq">
          <div
            class="accordion-item border-0 mb-24 infinity-bg-white"
            v-for="(item, index) in faqItems"
            :key="index"
          >
            <h2 class="accordion-header" :id="`question` + item.key">
              <button
                class="accordion-button collapsed infinity-bg-white font-blue-200 font-bold"
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
              <div
                class="accordion-body infinity-bg-white font-grey-500"
                v-html="item.answer"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedbackPage: null,
      whyChooseUsItems: [
        {
          title: 'Valores mais acessíveis',
          description: 'A Elo Infinity possui os melhores valores do mercado.',
          icon: 'sell',
        },
        {
          title: 'Jogadores qualificados',
          description:
            'Possuimos os melhores jogadores! Nossa equipe é composta somente por jogadores de alto nível (Grão-Mestre e Challenger).',
          icon: 'videogame_asset',
        },
        {
          title: 'Privacidade e segurança',
          description:
            'Garantimos a segurança pelos meios de pagamento. Os boosters são treinados para fazer o serviço sem levantar suspeitas.',
          icon: 'lock',
        },
      ],
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
          userName: 'Feedback 1',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'Karma é um ótimo booster, realizou o serviço em apenas 2 dias, serviço top, job incomparável com qualquer outra empresa, agradeço a Yuumi também pelo apoio, amo você amor.',
          date: '05/31/2022',
        },
        {
          serviceName: 'Duo Boost',
          userName: 'Feedback 2',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'Elo Boost',
          userName: 'Feedback 3',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 4',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 5',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 6',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 7',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 8',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 9',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 10',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 11',
          userImage:
            'https://i.pinimg.com/originals/36/6e/ee/366eee2a30d455de1bc0af52f3cc4415.jpg',
          text: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi',
          date: '05/31/2022',
        },
        {
          serviceName: 'MD10',
          userName: 'Feedback 12',
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
      servicesCardItems: [
        {
          title: 'Elo Boost',
          url: '/services/elojob',
          description:
            'Um jogador profissional irá <strong class="font-blue-200">garantir o elo desejado</strong> jogando em sua conta.',
        },
        {
          title: 'Duo Boost',
          url: '/services/duoboost',
          description:
            'Você irá <strong class="font-blue-200">jogar duo com um jogador profissional</strong>, até chegar no elo desejado.',
        },
        {
          title: 'MD10',
          url: '/services/md10',
          description:
            '<strong class="font-blue-200">Iremos garantir o melhor desempenho</strong> possível na sua classificatória.',
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
  },
  computed: {
    activeFeedbackItems() {
      return this.feedbackItems.slice(
        this.feedbackPage * 3,
        (this.feedbackPage + 1) * 3
      )
    },
  },
  mounted() {
    this.startTypeWriter(0)

    this.feedbackPage = 0
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

<style lang="scss" scoped>
.services-item {
  margin-top: 120px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
  height: 295px;

  img {
    margin-top: -120px;
  }

  &:nth-child(3) img {
    margin-top: -150px;
  }

  a {
    margin-top: auto;
  }
}

.animated-text {
  border-right: 3px solid var(--blue-primary);
}

.landing-page-gradient {
  z-index: -1;
  height: 800px;
  margin-top: -140px;
  background: linear-gradient(
    202.35deg,
    #0d6fca 17.46%,
    #26006f 54.57%,
    #4b0384 89.07%
  );
  transform: skewY(-10deg);
}

.circle-mask {
  background-image: url('/img/web/landing-page/stars-bg.svg');
  background-repeat: no-repeat;
  background-size: contain;
}

@media screen and (max-width: 576px) {
  .circle-mask {
    background-image: url('/img/web/landing-page/stars-bg-mobile.svg');
  }
}

.gravity-animation {
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

.about-cards-grid {
  .about-img-card:nth-child(1) {
    transform: rotate(-3.5deg);
    margin-top: 8px;

    &::before {
      margin-left: -15px;
      left: 0;
    }
  }

  .about-img-card:nth-child(3) {
    transform: rotate(3.5deg);
    margin-top: 8px;

    &::before {
      margin-right: -15px;
      right: 0;
    }
  }

  .about-img-card:nth-child(2)::before {
    width: 318px !important;
    left: 30px;
  }

  .about-img-card:nth-child(1)::before,
  .about-img-card:nth-child(2)::before,
  .about-img-card:nth-child(3)::before {
    content: '';
    position: absolute;
    top: 0;
    border-radius: 8px;
    width: 280px;
    height: 280px;
    z-index: -1;
    background: linear-gradient(
      180deg,
      #0d6fca 0%,
      #26006f 51.82%,
      #4b0384 100%
    );
  }

  @media screen and (max-width: 576px) {
    .about-img-card:nth-child(1)::before,
    .about-img-card:nth-child(2)::before,
    .about-img-card:nth-child(3)::before {
      width: 100px;
      height: 100px;
    }

    .about-img-card:nth-child(2)::before {
      width: 120px !important;
      left: 5px;
    }

    .about-img-card:nth-child(1),
    .about-img-card:nth-child(3) {
      margin-top: 4px;
    }
  }
}

.feedback-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  grid-gap: 16px;
  row-gap: 90px;

  .feedback-item {
    box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);

    img {
      margin-top: -64px;
    }
  }
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
  color: var(--blue-200);
  background-color: var(--white);
}

.accordion-button,
.accordion-body,
.accordion-button:not(.collapsed) {
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
}
</style>
