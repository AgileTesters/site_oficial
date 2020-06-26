import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, LayoutPlugin, CardPlugin, TableLitePlugin} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(CardPlugin)
Vue.use(LayoutPlugin)
Vue.use(TableLitePlugin)
Vue.use(require('vue-moment'));

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
