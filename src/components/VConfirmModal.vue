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
import loadingMixin from '../mixins/loading.js'

export default {
  name: 'VConfirmModal',
  mixins: [loadingMixin],
  data: function() {
    return {
      open: false,
    }
  },
  methods: {
    agreeClick() {
      this.startLoading()
      this.$emit('onAccept', this.stopLoadingAndClose)
    },
    stopLoadingAndClose() {
      this.stopLoading()
      this.closeDialog()
    },
    closeDialog() {
      this.open = false
    },
  },
}
</script>
