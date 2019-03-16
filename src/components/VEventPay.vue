<template>
  <v-dialog
    v-model="open"
    max-width="800"
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
            Pagar salario
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
                  v-text="salary"
                />
                <span class="subheading font-weight-light mr-1">
                  <v-icon x-large>
                    euro_symbol
                  </v-icon>
                </span>
              </v-flex>
              <v-flex
                xs12
                md6
              >
                <v-slider
                  v-model="rangeSalary"
                  :disabled="enableCustomSalary"
                  :step="maxSalary - minSalary"
                  :tick-labels="ticksLabels"
                  tick-size="2"
                  :color="color"
                  :min="minSalary"
                  :max="maxSalary"
                  ticks="always"
                  always-dirty
                >
                  <v-icon
                    slot="prepend"
                    :color="color"
                    :disabled="enableCustomSalary"
                    @click="decrement"
                  >
                    remove
                  </v-icon>

                  <v-icon
                    slot="append"
                    :color="color"
                    :disabled="enableCustomSalary"
                    @click="increment"
                  >
                    add
                  </v-icon>
                </v-slider>
                <v-layout align-center>
                  <v-checkbox
                    v-model="enableCustomSalary"
                    hide-details
                    class="shrink mr-2"
                  />
                  <v-text-field
                    v-model="customSalary"
                    :disabled="!enableCustomSalary"
                    type="number"
                    label="Introduzca un salario personalizado"
                  />
                </v-layout>
              </v-flex>
              <v-flex
                xs12
                md6
              >
                <v-combobox
                  v-model="works"
                  prepend-inner-icon="place"
                  :items="items"
                  :search-input.sync="search"
                  hide-selected
                  label="Añade obras"
                  multiple
                  persistent-hint
                  small-chips
                  deletable-chips
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
            @click.native="subtmi"
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
import loadingMixin from '../mixins/loading.js'

export default {
  name: 'VEventPay',
  mixins: [loadingMixin],
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
      rangeSalary: 60,
      customSalary: 60,
      ticksLabels: ['Salario mínimo', 'Salario máximo'],
      enableCustomSalary: false,
      maxSalary: 60,
      minSalary: 30,
      works: [],
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      search: null,
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
      if (this.salary >= this.maxSalary) return 'green'
      if (this.salary > this.minSalary) return 'orange'
      return 'red'
    },
    salary() {
      return (
        (this.enableCustomSalary ? this.customSalary : this.rangeSalary) || 0
      )
    },
    disableButton() {
      return !this.salary || this.salary < 0
    },
  },
  methods: {
    subtmi() {
      if (!this.$refs.form.validate()) {
        return
      }

      this.startLoading()
      this.$emit('onSubmit', this.stopLoadingAndClose)
    },
    stopLoadingAndClose() {
      this.stopLoading()
      this.closeEvent()
    },
    closeEvent() {
      this.open = false
    },
    decrement() {
      this.rangeSalary = this.minSalary
    },
    increment() {
      this.rangeSalary = this.maxSalary
    },
  },
}
</script>
