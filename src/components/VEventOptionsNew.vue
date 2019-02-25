<template>
  <div>
    <v-event-pay ref="eventPay" />
    <v-event-debt ref="eventDebt" />
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

export default {
  name: 'VEventOptionsNew',
  components: { VEventPay, VEventDebt },
  data: function() {
    return {
      open: false,
      events: [],
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
  },
}
</script>
