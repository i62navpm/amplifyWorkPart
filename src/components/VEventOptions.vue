<template>
  <div class="text-xs-center">
    <v-bottom-sheet
      v-model="open"
      lazy
    >
      <v-list>
        <v-subheader>Opciones:</v-subheader>
        <v-list-tile
          v-for="tile in tiles"
          :key="tile.title"
          @click="open = false"
        >
          <v-list-tile-avatar>
            <v-avatar>
              <v-icon :color="tile.color">
                {{ tile.icon }}
              </v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>

<script>
export default {
  name: 'VEventOptions',
  data: function() {
    return {
      open: false,
      tiles: [
        { icon: 'attach_money', color: 'success', title: 'Pagar' },
        { icon: 'place', color: 'primary', title: 'Obras' },
        { icon: 'money_off', color: 'warning', title: 'Dar a cuenta' },
        { icon: 'delete', color: 'error', title: 'Eliminar' },
      ],
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
