<template>
  <v-container
    grid-list-xl
    fill-height
  >
    <v-layout column>
      <v-flex>
        <v-card-person :person="{}" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VCardPerson from '../components/VCardPerson'

export default {
  components: {
    VCardPerson,
  },
}
</script>
