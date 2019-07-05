import Vue from 'vue'

import AWSAppSyncClient from 'aws-appsync'
import VueApollo from 'vue-apollo'
import { Auth } from 'aws-amplify'
import aws_exports from '../aws-exports'
import notification from '../mixins/notification'

const config = {
  url: aws_exports.aws_appsync_graphqlEndpoint,
  region: aws_exports.aws_appsync_region,
  auth: {
    type: aws_exports.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
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
  },
})

Vue.use(VueApollo)

export default apolloProvider
