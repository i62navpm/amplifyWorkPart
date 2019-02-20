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
              <v-icon color="primary">
                edit
              </v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>Editar</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="open = false">
          <v-list-tile-avatar>
            <v-avatar>
              <v-icon color="error">
                delete
              </v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>Eliminar</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: 'VEventOptionsEdit',
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
