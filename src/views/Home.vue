<template>
  <v-layout
    align-start
    justify-center
    row
    fill-height
  >
    <v-card-business
      class="mx-1"
      :company="{}"
    />
  </v-layout>
</template>

<script>
import VCardBusiness from '../components/VCardBusiness'

export default {
  components: {
    VCardBusiness,
  },
}
</script>
