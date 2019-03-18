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
    saveForm(callback) {
      return new Promise(success =>
        setTimeout(() => {
          try {
            this.notifySuccess('Empresa guardada correctamente')
            success(callback())
          } catch ({ message = '' }) {
            this.notifyError(message)
          }
        }, 4000)
      )
    },
  },
}
</script>
