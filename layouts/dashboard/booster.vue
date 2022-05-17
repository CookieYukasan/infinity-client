<template>
  <div class="row vw-100">
    <div class="col pl-24 infinity-left-menu vh-100">
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
            >{{ isOnline ? `I'm going to start work` : 'Maybe later' }}</span
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
      <hr class="infinity-menu-divider mtb-32" />
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
    <div class="col-8">
      <Nuxt />
    </div>
    <div class="col infinity-right-menu pl-24">
      <div class="text-center">
        <img
          src="https://64.media.tumblr.com/8660bcc310f52cb615225018fd52d7d1/tumblr_pmev92mMlk1vtm1pjo1_400.pnj"
          alt="User Avatar"
          class="rounded-circle mt-40 mb-16"
          width="90px"
          height="90px"
        />
        <div class="d-flex align-items-center justify-content-center">
          <h1 class="font-bold font-20 mr-8">{{ loggedUser.userName }}</h1>
          <span
            @click="handleChangeUserName"
            class="material-icons-two-tone font-24 cursor-pointer"
            >edit</span
          >
        </div>
        <p class="font-primary font-bold font-14 mt-8 mb-16">
          Booster - {{ loggedUser.userName }}
        </p>
        <div>
          <p class="font-16 font-bold font-grey-200">Services Completed</p>
          <p class="font-32 font-bold mt-8">32</p>
        </div>
        <div class="border-grey-300 ptb-16 br-6 prl-32 mb-32 mt-16">
          <p class="font-14 font-bold font-grey-200">Available services</p>
          <p class="font-16 font-bold mt-8">158</p>
          <Button
            btnClass="w-100 btn-infinity-primary br-6 ptb-8 font-bold font-14 mt-8"
            >See List</Button
          >
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h1 class="font-bold font-16">service in progress</h1>
          <NuxtLink to="/see-all" class="font-primary font-bold font-16"
            >See All</NuxtLink
          >
        </div>
        <hr class="infinity-menu-divider mtb-16" />
      </div>
      <div class="d-flex align-items-center">
        <img
          src="https://64.media.tumblr.com/39d26a3e5180a472907bb25908fa151f/e25c65a797af665b-2c/s640x960/58afe6e0c65b9df32600efdf6e6c5b2add2104f6.jpg"
          alt="Customer Avatar"
          class="br-6"
          height="40px"
          width="40px"
        />
        <div class="ml-8">
          <h1 class="font-14 font-bold">cookinho</h1>
          <p class="font-12 font-semibold mt-4">
            <span class="font-red">5 days</span> left to complete.
          </p>
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
  },
  methods: {
    async handleChangeUserName() {
      const userNames = [
        'Jinx',
        'Ahri',
        'Lux',
        'Zed',
        'Katarina',
        'Lissandra',
        'Fizz',
        'Riven',
        'Sona',
        'Soraka',
        'Nami',
        'Janna',
        'Nautilus',
        'Lulu',
        'Kalista',
        'Karthus',
        'Kassadin',
        'Quinn',
        'Leblanc',
        'Ezreal',
        'KaiSa',
      ]
      console.log('handleChangeUserName')
      try {
        await this.$store.dispatch('auth/updateProfileInformation', {
          ...this.$store.state.auth.user,
          userName: userNames[Math.floor(Math.random() * userNames.length)],
        })
      } catch (error) {
        console.log(error)
      }
    },
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
.infinity-left-menu {
  border-right: 1px solid var(--grey-300);
}

.infinity-menu-divider {
  border-top: 1px solid var(--grey-300);
  opacity: 1;
}

.infinity-active-tab:focus p,
.infinity-active-tab:active p {
  color: white;
}

.infinity-right-menu {
  border-left: 1px solid var(--grey-300);
}
</style>
