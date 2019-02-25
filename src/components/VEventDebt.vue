<template>
  <div class="text-xs-center">
    <v-bottom-sheet
      v-model="open"
      inset
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
        <v-card-text>
          <v-form
            ref="form"
            v-model="valid"
          >
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
                <v-flex
                  xs12
                  class="text-xs-right"
                >
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
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card-text>
      </v-card>
    </v-bottom-sheet>
  </div>
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
