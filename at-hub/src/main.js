import Vue from 'vue'
import App from './App.vue'
import moment from 'moment'

const lang = 'pt-br'
moment.locale(lang)
Vue.use(require('vue-moment'), {moment})


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
