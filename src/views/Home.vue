<template>
  <v-container
    grid-list-xl
    fill-height
  >
    <v-layout column>
      <v-flex>
        <v-card-business :company="{}" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VCardBusiness from '../components/VCardBusiness'

export default {
  components: {
    VCardBusiness,
  },
}
</script>
