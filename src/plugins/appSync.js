import Vue from 'vue'

import AWSAppSyncClient from 'aws-appsync'
import VueApollo from 'vue-apollo'
import { Auth } from 'aws-amplify'
import aws_exports from '../aws-exports'
import notification from '../mixins/notification'
import router from '../router'
import store from '../store'

const config = {
  url: aws_exports.aws_appsync_graphqlEndpoint,
  region: aws_exports.aws_appsync_region,
  auth: {
    type: aws_exports.aws_appsync_authenticationType,
    jwtToken: async () => {
      try {
        return (await Auth.currentSession()).getIdToken().getJwtToken()
      } catch (err) {
        return err
      }
    },
  },
}

const options = {
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
}

const client = new AWSAppSyncClient(config, options)

const apolloProvider = new VueApollo({
  defaultClient: client,
  watchLoading(isLoading) {
    this.$store.dispatch(isLoading ? 'startLoading' : 'stopLoading')
  },
  errorHandler(error) {
    notification.methods.notifyError.apply(this, [error])
    const { networkError = {} } = error
    if (networkError.statusCode === 401) {
      store.commit('setUser', {})
      router.push({ name: 'auth' })
    }
  },
})

Vue.use(VueApollo)

export default apolloProvider
