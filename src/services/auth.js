import { Hub } from 'aws-amplify'
import { existUserInDb, createUserInDb } from '../helpers/user'
import store from '../store'
import router from '../router'

const authAction = {
  signUp: async ({ userSub, user: { username = '' } = {} }) => {
    await createUserInDb({
      id: userSub,
      email: username,
    })
  },
  signIn: async user => {
    !(await existUserInDb(user.username)) &&
      (await createUserInDb({
        id: user.username,
        email: user.attributes.email,
      }))
    store.commit('setUser', user)
    router.push({ name: 'home' })
  },
  signOut: () => {
    store.commit('setUser', {})
    router.push({ name: 'auth' })
  },
}

Hub.listen('auth', async ({ payload: { event, data } }) => {
  event in authAction && authAction[event](data)
})
