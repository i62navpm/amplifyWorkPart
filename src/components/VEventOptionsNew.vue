<template>
  <div class="text-xs-center">
    <v-bottom-sheet
      v-model="open"
      inset
      lazy
    >
      <v-list>
        <v-subheader>Opciones:</v-subheader>

        <v-list-tile @click="open = false">
          <v-list-tile-avatar>
            <v-avatar>
              <v-icon color="success">
                attach_money
              </v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>Pagar</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="open = false">
          <v-list-tile-avatar>
            <v-avatar>
              <v-icon color="error">
                money_off
              </v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>Dar a cuenta</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: 'VEventOptionsNew',
  data: function() {
    return {
      open: false,
      events: [],
    }
  },
  methods: {
    async agreeClick() {
      this.loading = true
      await this.$emit('onAccept', () => {
        this.loading = false
        this.open = false
      })
    },
  },
}
</script>
