<template>
  <div>
    <v-event-pay
      ref="eventPay"
      :event="eventDateRange"
      @onSubmit="saveForm"
    />
    <v-event-debt
      ref="eventDebt"
      :event="eventDateRange"
      @onSubmit="saveForm"
    />
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
import notification from '../mixins/notification'

export default {
  name: 'VEventOptionsEdit',
  components: { VEventPay, VEventDebt, VConfirmModal },
  mixins: [notification],
  data: function() {
    return {
      open: false,
      event: {},
    }
  },
  computed: {
    eventDateRange() {
      const { start } = this.event
      return { start, end: start }
    },
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
    showModalDeleteEvent() {
      this.$refs.deleteModal.open = true
    },
    deleteEvent(callback) {
      this.closeSheet()
      return new Promise(success =>
        setTimeout(() => {
          try {
            this.notifySuccess('Evento eliminado correctamente')
            success(callback())
          } catch ({ message = '' }) {
            this.notifyError(message)
          }
        }, 4000)
      )
    },
    saveForm(callback) {
      return new Promise(success =>
        setTimeout(() => {
          try {
            this.notifySuccess('Evento editado correctamente')
            success(callback())
          } catch ({ message = '' }) {
            this.notifyError(message)
          }
        }, 4000)
      )
    },
  },
}
</script>
