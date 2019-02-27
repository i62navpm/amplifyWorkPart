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
  name: 'VEventPay',
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
    decrement() {
      this.rangeSalary = this.minSalary
    },
    increment() {
      this.rangeSalary = this.maxSalary
    },
  },
}
</script>
