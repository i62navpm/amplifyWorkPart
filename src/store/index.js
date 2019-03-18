import Vue from 'vue'
import Vuex from 'vuex'
import auth from './modules/auth'
import toolbar from './modules/toolbar'
import notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    auth,
    toolbar,
    notification,
  },
})
