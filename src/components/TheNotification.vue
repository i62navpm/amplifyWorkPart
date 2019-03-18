<template>
  <v-snackbar
    v-model="notification.show"
    :color="notification.color"
    multi-line
  >
    {{ notification.message }}
    <v-btn
      dark
      flat
      @click="$store.dispatch('closeNotification')"
    >
      Cerrar
    </v-btn>
  </v-snackbar>
</template>

<script>
export default {
  name: 'TheNotification',
  computed: {
    notification() {
      return this.$store.getters.getNotification
    },
  },
}
</script>
