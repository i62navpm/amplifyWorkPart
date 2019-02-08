<template>
  <v-dialog
    v-model="open"
    max-width="500"
  >
    <v-card>
      <v-card-title class="headline">
        ¿Está seguro que desea eliminarlo?
      </v-card-title>

      <v-card-text>
        El contenido no podrá ser recuperado
      </v-card-text>

      <v-card-actions>
        <v-spacer />

        <v-btn
          color="primary"
          flat
          @click="open = false"
        >
          Cancelar
        </v-btn>

        <v-btn
          color="error"
          :loading="loading"
          @click="agreeClick"
        >
          Borrar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'VConfirmModal',
  data: function() {
    return {
      open: false,
      loading: false,
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
