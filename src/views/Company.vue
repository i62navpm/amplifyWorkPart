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

export default {
  components: {
    VCardBusinessForm,
  },
  methods: {
    closeForm() {
      this.$router.push({ name: 'home' })
    },
    saveForm(data) {
      console.log(data)
    },
  },
}
</script>
