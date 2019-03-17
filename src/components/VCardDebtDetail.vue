<template>
  <v-card>
    <v-toolbar
      color="red"
      dark
    >
      <v-toolbar-title>
        Deuda
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon>
        <v-icon>euro_symbol</v-icon>
      </v-btn>
    </v-toolbar>

    <v-card-text>
      <div class="display-1 font-weight-light text-xs-center pa-2">
        <strong class="red--text text--darken-2">
          {{ debt }} €
        </strong>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'VCardDebtDetail',
  props: {
    debt: {
      type: Number,
      required: false,
      default: 0,
    },
  },
}
</script>


