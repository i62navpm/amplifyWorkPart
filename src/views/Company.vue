<template>
  <v-layout
    align-start
    justify-center
    row
    fill-height
  >
    <v-flex
      xs12
      sm8
    >
      <v-card-business-form
        :company="{}"
        @onClose="closeForm"
        @onSubmit="saveForm"
      />
    </v-flex>
  </v-layout>
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
