<template>
  <div>
    <div ref="header" class="container-fluid sticky-top bg-light-purple">
      <header class="infinity-desktop-header" v-if="$device.isDesktop">
        <div class="container">
          <div class="row">
            <!-- <div class="col-12 position-relative h-106">
              <div class="position-absolute left-0">
                <NuxtLink to="/">
                  <img
                    height="55px"
                    class="mtb-16"
                    width="100%"
                    src="/img/web/logo.png"
                    alt="Elo Infinity"
                  />
                </NuxtLink>
              </div>
              <div
                class="d-flex justify-content-center align-items-center ptb-24 h-100"
              >
                <div v-for="(item, index) of headerMenuItems" :key="index">
                  <a
                    class="font-12 font-bold cursor-pointer font-black"
                    :class="{
                      'mr-16': index < headerMenuItems.length - 1,
                    }"
                    @click="scrollToId(item.id)"
                    >{{ item.label }}</a
                  >
                </div>
              </div>
            </div> -->
            <div
              class="col-12 d-flex justify-content-center align-items-center"
            >
              <div
                v-for="(item, index) in headerMenuItems"
                :key="item.id"
                class="infinity-link d-flex justify-content-center align-items-center"
              >
                <NuxtLink v-if="headerMenuItems.length / 2 === index" to="/">
                  <img
                    height="60px"
                    class="mb-16 mt-8 mr-16"
                    src="/img/web/logo.png"
                    alt="Elo Infinity"
                  />
                </NuxtLink>
                <div class="bloop-animation">
                  <a
                    class="font-14 font-bold cursor-pointer font-white"
                    :class="{
                      'mr-16': index < headerMenuItems.length - 1,
                    }"
                    @click="scrollToId(item.id)"
                    >{{ item.label }}</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header v-if="$device.isMobile" class="ptb-24 d-flex align-items-center">
        <NuxtLink class="position-relative" to="/">
          <img
            height="45px"
            width="100%"
            src="/img/web/logo.png"
            alt="Elo Infinity"
          />
        </NuxtLink>
        <div class="d-block ml-auto">
          <button
            class="btn font-white"
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
              <h5 id="offcanvasRightLabel">Elo Infinity</h5>
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
                  class="mt-2 font-bold font-14"
                >
                  {{ item.label }}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="displayOffCanvas"
          class="offcanvas-outside-zone"
          @click="closeOffCanvas"
        ></div>
      </header>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headerMenuItems: [
        {
          label: 'INÍCIO',
          id: 'top',
        },
        {
          label: 'CONHEÇA A INFINITY',
          id: 'meet-infinity',
        },
        {
          label: 'NOSSOS SERVIÇOS',
          id: 'be-your-boss',
        },
        {
          label: 'CONTATO',
          id: 'be-free',
        },
      ],
      textArray: [
        'dinheiro',
        'alcance',
        'segurança',
        'fãs',
        'mimos',
        'seguidores',
      ],
      animatedTextValue: '',
      speedForward: 100,
      speedWait: 1000,
      speedBackspace: 100,
      remainingTime: 172800,
      displayOffCanvas: false,
      bootstrapInstance: null,
    }
  },
  methods: {
    delWriter(text, i, cb) {
      if (i >= 0) {
        this.animatedTextValue = text.substring(0, i--)
        setTimeout(() => this.delWriter(text, i, cb), this.speedBackspace)
      } else if (typeof cb == 'function') {
        setTimeout(cb, 5)
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
      if (typeof this.textArray[i] == 'undefined') {
        setTimeout(() => this.startTypeWriter(0), this.speedWait)
      } else if (i < this.textArray[i].length + 1) {
        this.typeWriter(this.textArray[i], 0, () => {
          this.startTypeWriter(i + 1)
        })
      }
    },
    closeOffCanvas() {
      this.displayOffCanvas = false
    },
    scrollToId(id) {
      if (this.$device.isMobile) {
        this.closeOffCanvas()
      }

      const element = this.$refs[id]
      window.scrollTo(0, element.offsetTop - this.$refs.header.clientHeight)
    },
  },
  mounted() {
    if (this.$device.isMobile) {
      this.$nextTick(() => {
        this.bootstrapInstance = new bootstrap.Offcanvas(
          this.$refs.offcanvasRight
        )
      })
    }
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
