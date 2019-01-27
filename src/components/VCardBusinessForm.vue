<template>
  <v-card class="card--flex-toolbar">
    <v-toolbar
      card
      prominent
    >
      <v-toolbar-title class="body-2 grey--text">
        Empresa
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon
        @click.native="$emit('onClose')"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-divider />

    <v-card-text style="height: 200px;" />
  </v-card>
</template>

<script>
export default {
  name: 'VCardBusinessForm',
  props: {
    company: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.card--flex-toolbar {
  z-index: 6;
  margin-top: -64px;
}
</style>

