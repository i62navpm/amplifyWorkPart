<template>
  <v-card class="card--flex-toolbar">
    <v-toolbar
      card
      prominent
    >
      <v-toolbar-title class="body-2 grey--text">
        Empleado
      </v-toolbar-title>

      <v-spacer />

      <v-btn
        icon
        @click.native="$emit('onClose')"
      >
        <v-icon>close</v-icon>
      </v-btn>
    </v-toolbar>

    <v-divider />

    <v-card-text>
      <v-form
        ref="form"
        v-model="valid"
        @submit.prevent
        @keyup.enter.native="save"
      >
        <v-container>
          <v-layout
            align-center
            justify-center
            wrap
          >
            <v-flex
              xs12
              lg11
              xl7
            >
              <v-card class="elevation-2">
                <v-upload-image
                  :image="person.image"
                  @onUploadImage="saveImage"
                />
              </v-card>
            </v-flex>
          </v-layout>
          <v-layout wrap>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.name"
                :rules="[rules.required]"
                label="Nombre"
                append-icon="person"
                required
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.nif"
                :rules="[rules.nif]"
                label="Nif"
                mask="########-A"
                append-icon="credit_card"
                validate-on-blur
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.phone"
                label="Teléfono"
                mask="#########"
                append-icon="phone"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.email"
                label="Email"
                type="email"
                append-icon="email"
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="person.address"
                label="Dirección"
                append-icon="room"
              />
            </v-flex>
            <v-flex xs12>
              <v-textarea
                v-model="person.description"
                auto-grow
                box
                label="Descripción"
                append-icon="description"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.fullSalary"
                :rules="[rules.required]"
                append-outer-icon="euro"
                type="number"
                label="Salario completo"
                append-icon="attach_money"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.halfSalary"
                :rules="[rules.required]"
                append-outer-icon="euro"
                type="number"
                label="Salario reducido"
                append-icon="attach_money"
              />
            </v-flex>
            <v-flex
              xs12
              class="text-xs-right"
            >
              <v-btn
                :loading="loading"
                flat
                color="primary"
                @click.native="submit"
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
</template>

<script>
import VUploadImage from './VUploadImage'
import loadingMixin from '../mixins/loading.js'

export default {
  name: 'VCardPersonForm',
  components: {
    VUploadImage,
  },
  mixins: [loadingMixin],
  props: {
    personData: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data: () => ({
    valid: false,
    loading: false,
    person: {},
    rules: {
      required: value => !!value || 'Este campo es obligatorio.',
      nif: value =>
        !!value &&
        (/\d{8}\D/.test(value) || 'El NIF debe tener un formato correcto.'),
    },
  }),
  mounted() {
    this.person = { ...this.personData }
  },
  methods: {
    submit() {
      if (!this.$refs.form.validate()) {
        return
      }

      this.startLoading()
      this.$emit('onSubmit', this.stopLoading)
    },
    saveImage(image) {
      this.$set(this.person, 'image', image)
    },
  },
}
</script>

<style lang="scss" scoped>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>

