<template>
  <div>
    <main
      class="d-flex justify-content-evenly align-items-center vh-100"
      :class="{
        'flex-column': $device.isMobile,
      }"
    >
      <div>
        <NuxtLink to="/">
          <Logo :width="$device.isDesktop ? '450px' : '300px'" type="black" />
        </NuxtLink>
        <p class="font-16 text-center mt-32">
          Levamos você ao <strong class="font-purple">infinito</strong> e
          <strong class="font-purple">além</strong>!
        </p>
      </div>
      <form :style="{ width: '350px' }" @submit.prevent="handleLogin">
        <Button
          :btnDisabled="true"
          btnClass="btn-infinity-primary br-6 p-16 ptb-12 mtb-32 w-100"
          :onClick="handleLoginWithDiscord"
        >
          <i class="fab fa-discord mr-4"></i>
          Entrar com Discord
        </Button>
        <Input
          inputClass="br-6 pl-16 pr-16 ptb-12 mb-32"
          inputName="email"
          inputType="email"
          inputLabel="E-mail"
          @onUpdate="(value) => (user.email = value)"
        ></Input>
        <Input
          inputClass="br-6 pl-16 pr-16 ptb-12"
          inputName="password"
          inputLabel="Password"
          inputType="password"
          @onUpdate="(value) => (user.password = value)"
        ></Input>
        <HcaptchaWrapper
          v-if="!!!$config.hcaptcha.disabled"
          :onVerify="onVerifyCaptcha"
          :onExpire="onExpireCaptcha"
          :onError="onErrorCaptcha"
          ref="loginHcaptcha"
        />
        <Button
          btnClass="btn-infinity-primary br-6 p-16 ptb-12 mtb-32 w-100"
          :onClick="handleLogin"
          btnType="submit"
          :btnDisabled="
            (!!$config.hcaptcha.disabled ? false : !captcha.isFilled) ||
            $v.user.email.$invalid ||
            $v.user.password.$invalid
          "
        >
          Cadastrar
        </Button>
        <span
          >Já tem uma conta?
          <NuxtLink to="/login" class="font-purple font-bold"
            >Entre agora</NuxtLink
          ></span
        >
      </form>
    </main>
  </div>
</template>

<script>
import { required, minLength, email } from 'vuelidate/lib/validators'
import Bowser from 'bowser'

export default {
  data() {
    return {
      loading: {
        login: false,
      },
      captcha: {
        isFilled: false,
        token: null,
      },
      user: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    onVerifyCaptcha(token) {
      this.captcha.token = token
      this.captcha.isFilled = true
    },
    onExpireCaptcha() {
      console.log('Expired Captcha')
    },
    onErrorCaptcha(error) {
      this.$sentryCaptureException(error)
    },
    handleLoginWithDiscord() {
      console.log('login with discord')
    },
    async handleLogin() {
      this.loading.login = true

      try {
        await this.$store.dispatch('auth/register', {
          ...this.user,
          token: this.captcha.token,
          device: Bowser.parse(window.navigator.userAgent),
        })
      } catch (error) {
        if (this.$refs.loginHcaptcha) {
          this.$refs.loginHcaptcha.resetCaptcha()
          this.captcha.isFilled = false
          this.captcha.token = null
        }

        this.error = true
        this.$sentryCaptureException(error)
      }

      this.loading.login = false
    },
  },
  head() {
    return {
      title: `Elo Job Infinity - Cadastro`,
      meta: [
        { hid: 'robots', name: 'robots', content: 'index, follow' },
        {
          name: 'description',
          content: `cookinho cookie cuq cukie.`,
        },
        {
          property: 'og:title',
          content: 'Elo Job Infinity - Cadastro',
        },
        {
          property: 'og:description',
          content: `cookinho cookie cuq cukie.`,
        },
      ],
    }
  },
  validations: {
    user: {
      email: {
        required,
        email,
      },
      password: {
        minLength: minLength(6),
        required,
      },
    },
  },
  middleware: ['authenticateGuest'],
}
</script>

<style scoped></style>
