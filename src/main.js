import Vue from 'vue'
import './plugins/vuetify'
import './plugins/amplify'
import './services/auth'
import './filters'
import apolloProvider from './plugins/appSync'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/styles/main.scss'
import './registerServiceWorker'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apolloProvider,
  render: h => h(App),
}).$mount('#app')
