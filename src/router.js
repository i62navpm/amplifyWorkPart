import Vue from 'vue'
import Router from 'vue-router'
import { AmplifyEventBus } from 'aws-amplify-vue'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true },
    },
    {
      path: '/company/:id?',
      name: 'company',
      component: () =>
        import(/* webpackChunkName: "company" */ './views/Company.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/people/:id?',
      name: 'people',
      component: () =>
        import(/* webpackChunkName: "people" */ './views/People.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/person/:id?',
      name: 'person',
      component: () =>
        import(/* webpackChunkName: "person" */ './views/Person.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/worker/:id',
      component: () =>
        import(/* webpackChunkName: "worker" */ './views/Worker.vue'),
      children: [
        {
          path: '',
          name: 'worker',
          component: () =>
            import(/* webpackChunkName: "workerCalendar" */ './views/WorkerCalendar.vue'),
        },
        {
          path: 'detail',
          name: 'workerDetail',
          component: () =>
            import(/* webpackChunkName: "workerDetail" */ './views/WorkerDetail.vue'),
        },
      ],
      meta: { requiresAuth: true },
    },
    {
      path: '/auth',
      name: 'auth',
      component: () =>
        import(/* webpackChunkName: "auth" */ './views/Auth.vue'),
    },
  ],
})

AmplifyEventBus.$on('authState', async state => {
  if (state === 'signedOut') {
    store.commit('setUser', {})
    router.push({ name: 'auth' })
  } else if (state === 'signedIn') {
    const user = await getUser()
    store.commit('setUser', user)
    router.push({ name: 'home' })
  }
})

async function getUser() {
  try {
    const data = await Vue.prototype.$Amplify.Auth.currentAuthenticatedUser()
    if (data && data.signInUserSession) {
      store.commit('setUser', data)
      return data
    }
  } catch (e) {
    store.commit('setUser', {})
    return {}
  }
}

router.beforeResolve(async (to, from, next) => {
  store.commit('setExtended', ['company', 'person'].includes(to.name))
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const user = await getUser()
    if (!user.username) {
      return next({ name: 'auth' })
    }
    return next()
  } else if (to.name === 'auth') {
    const user = await getUser()
    if (user.username) {
      return next({ name: 'home' })
    }
    return next()
  }
  return next()
})

export default router
