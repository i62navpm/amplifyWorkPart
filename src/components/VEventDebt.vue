<template>
  <v-dialog
    v-model="open"
    transition="dialog-bottom-transition"
    :fullscreen="$vuetify.breakpoint.xsOnly"
    lazy
  >
    <v-card>
      <v-toolbar
        card
        dense
      >
        <v-toolbar-title>
          <span class="subheading">
            Dar a cuenta
          </span>
        </v-toolbar-title>
        <v-spacer />
        <v-btn
          icon
          @click.native="closeEvent"
        >
          <v-icon>close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-card-text>
          <v-container
            grid-list-xl
            fluid
          >
            <v-layout wrap>
              <v-subheader>
                <v-icon class="mr-2">
                  calendar_today
                </v-icon>
                {{ eventsRangeDates }}
              </v-subheader>
              <v-flex
                xs12
                text-xs-center
                :class="`${color}--text text--darken-2 text-truncate`"
              >
                <span
                  class="display-4 font-weight-regular"
                  v-text="debt"
                />
                <span class="subheading font-weight-light mr-1">
                  <v-icon x-large>
                    euro_symbol
                  </v-icon>
                </span>
              </v-flex>
              <v-flex xs12>
                <v-text-field
                  v-model="debt"
                  type="number"
                  label="Introduzca un importe para dar a cuenta"
                />
              </v-flex>
              <v-flex xs12>
                <v-textarea
                  v-model="description"
                  auto-grow
                  box
                  label="Descripción"
                />
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn
            :loading="loading"
            :disabled="disableButton"
            flat
            color="primary"
            @click.native="agreeClick"
          >
            <v-icon class="mr-2">
              save
            </v-icon>
            Guardar
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'VEventDebt',
  props: {
    event: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data: function() {
    return {
      open: false,
      valid: false,
      loading: false,
      debt: 60,
      description: '',
    }
  },
  computed: {
    eventsRangeDates() {
      let { start, end } = this.event

      start = new Date(start).toLocaleDateString()
      end = new Date(end).toLocaleDateString()

      return start === end ? `Dia ${start}` : `Del día ${start} al día ${end}`
    },
    color() {
      return 'red'
    },
    disableButton() {
      return !this.debt || this.debt < 0
    },
  },
  methods: {
    agreeClick() {
      this.loading = true
      this.$emit('onAccept', () => {
        this.loading = false
        this.closeEvent()
      })
    },
    closeEvent() {
      this.open = false
    },
  },
}
</script>
