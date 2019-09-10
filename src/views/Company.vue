<template>
  <v-container>
    <v-layout
      row
      align-start
      justify-center
    >
      <v-flex
        xs12
        sm10
        md8
      >
        <v-card-business-form
          :company-data="{}"
          @onClose="closeForm"
          @onSubmit="saveForm"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'
import { createCompany } from '../graphql/mutations'
import VCardBusinessForm from '../components/VCardBusinessForm'
import notification from '../mixins/notification'

export default {
  components: {
    VCardBusinessForm,
  },
  mixins: [notification],
  methods: {
    closeForm() {
      this.$router.push({ name: 'home' })
    },
    async saveCompany(data) {
      return await this.$apollo.mutate({
        mutation: gql(createCompany),
        variables: {
          input: {
            ...data,
            companyUserId: this.$store.state.auth.user.username,
          },
        },
      })
    },
    async saveForm(data, cb) {
      try {
        await this.saveCompany(data)
        this.notifySuccess('Empresa guardada correctamente')
        this.$router.push({ name: 'home' })
      } catch ({ message = '' }) {
        this.notifyError(message)
      } finally {
        cb()
      }
    },
  },
}
</script>
