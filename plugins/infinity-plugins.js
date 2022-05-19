import Vue from 'vue'

if (!Vue.__infinity_mixin__) {
  Vue.mixin({
    methods: {
      capitalize(string) {
        if (!string) return ''
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      getAbsoluteUrl(to) {
        if (!process.browser) return
        const path = this.$nuxt.$router.resolve(to).href
        return window.location.origin + path
      },
      formatCurrency(value) {
        let val = (value / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
      },
    },
  })
}
