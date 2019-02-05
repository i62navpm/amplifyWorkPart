<template>
  <v-layout
    align-start
    justify-center
    row
    fill-height
  >
    <v-card-person
      class="mx-1"
      :person="{}"
    />
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
