<template>
  <v-card>
    <v-card-text>
      Pdf
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'VCardPdf',
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
    }
  },
}
</script>


