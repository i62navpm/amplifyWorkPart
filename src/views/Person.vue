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
        <v-card-person-form
          :person-data="{}"
          @onClose="closeForm"
          @onSubmit="saveForm"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VCardPersonForm from '../components/VCardPersonForm'
import notification from '../mixins/notification'

export default {
  components: {
    VCardPersonForm,
  },
  mixins: [notification],
  methods: {
    closeForm() {
      this.$router.push({ name: 'people' })
    },
    saveForm(callback) {
      return new Promise(success =>
        setTimeout(() => {
          try {
            this.notifySuccess('Empleado guardado correctamente')
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
