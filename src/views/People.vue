<template>
  <v-layout
    align-center
    justify-center
    column
  >
    <v-card-person :person="{}" />
  </v-layout>
</template>

<script>
import VCardPerson from '../components/VCardPerson'

export default {
  components: {
    VCardPerson,
  },
}
</script>
