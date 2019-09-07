import Vue from 'vue'
import Router from 'vue-router'
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

router.beforeResolve(async (to, from, next) => {
  store.commit('setExtended', ['company', 'person'].includes(to.name))
  if (to.matched.some(record => record.meta.requiresAuth)) {
    return !store.getters.getUser.username ? next({ name: 'auth' }) : next()
  } else if (to.name === 'auth') {
    return store.getters.getUser.username ? next({ name: 'home' }) : next()
  }
  return next()
})

export default router
