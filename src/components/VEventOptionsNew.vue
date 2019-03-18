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
    <v-bottom-sheet
      v-model="open"
      inset
      lazy
    >
      <v-list>
        <v-subheader>Opciones:</v-subheader>

        <v-list-tile @click="openEventPay">
          <v-list-tile-avatar>
            <v-avatar>
              <v-icon color="success">
                attach_money
              </v-icon>
            </v-avatar>
          </v-list-tile-avatar>
          <v-list-tile-title>Pagar</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="openEventDebt">
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
import VEventPay from './VEventPay'
import VEventDebt from './VEventDebt'
import notification from '../mixins/notification'

export default {
  name: 'VEventOptionsNew',
  components: { VEventPay, VEventDebt },
  mixins: [notification],
  data: function() {
    return {
      open: false,
      events: [],
    }
  },
  computed: {
    eventDateRange() {
      const [{ start } = {}] = this.events
      const [{ start: end } = {}] = this.events.slice(-1)

      return { start, end }
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
    closeSheet() {
      this.open = false
    },
    saveForm(callback) {
      return new Promise(success =>
        setTimeout(() => {
          try {
            this.notifySuccess('Evento creado correctamente')
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
