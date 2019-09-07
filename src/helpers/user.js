import gql from 'graphql-tag'
import apolloProvider from '../plugins/appSync'
import { createUser } from '../graphql/mutations'

async function existUserInDb(id) {
  try {
    const { data } = await apolloProvider.defaultClient.query({
      query: gql`
        query GetUser($id: ID!) {
          getUser(id: $id) {
            id
            email
          }
        }
      `,
      variables: {
        id,
      },
    })
    return !!data.getUser
  } catch (e) {
    return false
  }
}

async function createUserInDb({ id, email }) {
  return apolloProvider.defaultClient.mutate({
    mutation: gql(createUser),
    variables: {
      input: {
        id,
        email,
      },
    },
  })
}

export { existUserInDb, createUserInDb }
