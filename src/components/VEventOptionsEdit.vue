<template>
  <div>
    <v-event-pay ref="eventPay" />
    <v-event-debt ref="eventDebt" />
    <v-confirm-modal
      ref="deleteModal"
      @onAccept="deleteEvent"
    />
    <v-bottom-sheet
      v-model="open"
      inset
      lazy
    >
      <v-list>
        <v-subheader>Opciones:</v-subheader>

        <v-list-tile @click="openEventDialog">
          <v-list-tile-avatar>
            <v-avatar>
              <v-icon color="primary">
                edit
              </v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>Editar</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="showModalDeleteEvent">
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
import VEventPay from './VEventPay'
import VEventDebt from './VEventDebt'
import VConfirmModal from './VConfirmModal'

export default {
  name: 'VEventOptionsEdit',
  components: { VEventPay, VEventDebt, VConfirmModal },
  data: function() {
    return {
      open: false,
      event: {},
    }
  },
  methods: {
    openEventPay() {
      this.closeSheet()
      this.$refs.eventPay.open = true
    },
    openEventDebt() {
      this.closeSheet()
      this.$refs.eventDebt.open = true
    },
    openEventDialog() {
      this.event.salary === 'debtSalary'
        ? this.openEventDebt()
        : this.openEventPay()
    },
    closeSheet() {
      this.open = false
    },
    async agreeClick() {
      this.loading = true
      await this.$emit('onAccept', () => {
        this.loading = false
        this.closeSheet()
      })
    },
    showModalDeleteEvent() {
      this.$refs.deleteModal.open = true
    },
    deleteEvent(callback) {
      this.closeSheet()
      return new Promise(success => {
        setTimeout(() => {
          success(callback())
        }, 4000)
      })
    },
  },
}
</script>
