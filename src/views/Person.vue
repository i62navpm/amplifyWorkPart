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
      <v-card-person-form
        :person="{}"
        @onClose="closeForm"
        @onSubmit="saveForm"
      />
    </v-flex>
  </v-layout>
</template>

<script>
import VCardPersonForm from '../components/VCardPersonForm'

export default {
  components: {
    VCardPersonForm,
  },
  methods: {
    closeForm() {
      this.$router.push({ name: 'people' })
    },
    saveForm(data) {
      console.log(data)
    },
  },
}
</script>
