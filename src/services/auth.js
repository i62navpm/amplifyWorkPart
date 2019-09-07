import { Hub } from 'aws-amplify'
import { existUserInDb, createUserInDb } from '../helpers/user'
import store from '../store'
import router from '../router'

const authAction = {
  signIn: async user => {
    const { username, attributes } = user
    !(await existUserInDb(username)) &&
      (await createUserInDb({
        id: username,
        email: attributes.email,
      }))
    store.commit('setUser', { username, attributes })
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
