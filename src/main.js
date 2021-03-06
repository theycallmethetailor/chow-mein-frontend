import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import { VueSpinners } from '@saeris/vue-spinners'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import Vuelidate from 'vuelidate'
import VueSocketIO from 'vue-socket.io'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueSpinners)
Vue.use(Vuetify)
Vue.use(Vuelidate)
Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://127.0.0.1:8000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))
