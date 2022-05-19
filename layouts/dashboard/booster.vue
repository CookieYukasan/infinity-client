<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 px-0">
        <div class="position-fixed vh-100 infinity-left-menu prl-16">
          <NuxtLink to="/" class="font-bold text-white">
            <Logo
              height="18px"
              width="148px"
              type="full"
              imgClass="mt-32 mb-40"
              wrapperClass="d-flex align-items-center justify-content-center"
            />
          </NuxtLink>
          <div class="d-flex align-items-center">
            <img src="/img/web/lol/poro.png" alt="Poro Image" />
            <div class="ml-8">
              <h1 class="font-bold font-16">Want to go online?</h1>
              <span
                class="font-bold font-14"
                :class="{
                  'font-green': isOnline,
                  'font-red': !isOnline,
                }"
                >{{
                  isOnline ? `I'm going to start work` : 'Maybe later'
                }}</span
              >
            </div>
          </div>
          <Select
            name="status"
            id="status"
            :options="statusOptions"
            selectClass="font-bold prl-16 ptb-8 mt-16 br-6 border-grey-300 w-100"
            :defaultValue="isOnline ? 'online' : 'offline'"
            @onChange="handleChangeStatus"
          />
          <hr class="infinity-divider mtb-32" />
          <h1 class="font-16 font-bold mb-16">Menu</h1>
          <NuxtLink
            v-for="(item, index) in sidebarItems"
            :key="index"
            class="d-flex align-items-center mt-8 p-16 br-6"
            :class="{
              'infinity-bg-primary font-white infinity-active-tab': checkActive(
                item.href
              ),
            }"
            :to="item.href"
          >
            <span
              class="font-24"
              :class="{
                [item.iconType]: item.iconType,
                'font-white': checkActive(item.href),
              }"
              >{{ item.iconName }}</span
            >
            <p
              class="ml-8 font-16 font-bold"
              :class="{
                'font-white': checkActive(item.href),
              }"
            >
              {{ item.label }}
            </p>
          </NuxtLink>
        </div>
      </div>
      <div class="col-8 px-0">
        <Nuxt />
      </div>
      <div class="col-2 px-0">
        <div
          class="position-fixed prl-16 text-center infinity-right-menu vh-100"
        >
          <div
            class="booster-avatar mx-auto mt-40 mb-16"
            :style="{ width: '90px', height: '90px' }"
          >
            <div class="spin-gradient rounded-circle spin"></div>
            <img
              :src="getUserAvatar"
              :alt="`${capitalize(loggedUser.userName)}'s Avatar`"
              class="rounded-circle w-100 h-100"
            />
          </div>
          <h1 class="font-bold font-20 mr-8">
            {{ capitalize(loggedUser.userName) }}
          </h1>
          <p class="font-primary font-bold font-14 mt-8 mb-16">
            Booster - {{ capitalize(loggedUser.userName) }}
          </p>
          <div>
            <p class="font-16 font-bold font-grey-200">Services Completed</p>
            <p class="font-32 font-bold mt-8">32</p>
          </div>
          <div class="border-grey-300 ptb-16 br-6 prl-32 mtb-16">
            <p class="font-14 font-bold font-grey-200">Available services</p>
            <p class="font-16 font-bold mt-8">158</p>
            <Button
              btnClass="w-100 btn-infinity-primary br-6 ptb-8 font-bold font-14 mt-8"
              >See List</Button
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOnline: true,
      statusOptions: [
        {
          icon: 'work',
          iconType: 'material-icons-two-tone',
          value: 'online',
          text: 'Yes',
        },
        {
          icon: 'bedtime',
          iconType: 'material-icons-two-tone',
          value: 'offline',
          text: 'No',
        },
      ],
      sidebarItems: [
        {
          iconName: 'widgets',
          iconType: 'material-icons-outlined',
          label: 'Home',
          href: '/dashboard',
        },
        {
          iconName: 'widgets',
          iconType: 'material-icons-outlined',
          label: 'Settings',
          href: '/settings',
        },
      ],
    }
  },
  computed: {
    loggedUser() {
      return this.$store.state.auth.user
    },
    getUserAvatar() {
      const userName = this.capitalize(this.loggedUser.userName)
      return `http://ddragon.leagueoflegends.com/cdn/12.9.1/img/champion/${userName}.png`
    },
  },
  methods: {
    checkActive(href) {
      return this.$route.path === href
    },
    handleLogout() {
      this.$store.dispatch('auth/logout')
    },
    handleChangeStatus(optionValue) {
      this.isOnline = optionValue === 'online' ? true : false
    },
  },
}
</script>

<style scoped>
.infinity-left-menu,
.infinity-right-menu {
  width: inherit;
}

.infinity-left-menu {
  border-right: 1px solid var(--grey-300);
}

.infinity-active-tab:focus p,
.infinity-active-tab:active p {
  color: white;
}

.infinity-right-menu {
  border-left: 1px solid var(--grey-300);
}

.booster-avatar {
  display: flex;
  align-items: center;
  justify-content: center;
}

.spin-gradient {
  height: 98px;
  width: 98px;
  background: linear-gradient(180deg, var(--purple-300) 80%, var(--primary));
  position: absolute;
  z-index: -1;
}

.spin {
  animation-duration: 1s;
  animation-name: spin;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
