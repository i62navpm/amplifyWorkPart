import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './modules/auth'
import toolbar from './modules/toolbar'
import notification from './modules/notification'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  plugins: [createPersistedState()],
  modules: {
    auth,
    toolbar,
    notification,
  },
})
