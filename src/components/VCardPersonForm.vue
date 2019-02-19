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
              <v-upload-image @onUploadImage="saveImage" />
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
                required
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.nif"
                :rules="[rules.required, rules.nif]"
                label="Nif"
                mask="########-A"
                validate-on-blur
                required
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
              />
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="person.address"
                label="Dirección"
              />
            </v-flex>
            <v-flex xs12>
              <v-textarea
                v-model="person.description"
                auto-grow
                box
                label="Descripción"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.fullSalary"
                append-outer-icon="euro"
                type="number"
                label="Salario completo"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="person.halfSalary"
                append-outer-icon="euro"
                type="number"
                label="Salario reducido"
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
                @click="save"
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

export default {
  name: 'VCardPersonForm',
  components: {
    VUploadImage,
  },
  props: {
    person: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data: () => ({
    valid: false,
    loading: false,
    rules: {
      required: value => !!value || 'Este campo es obligatorio.',
      nif: value =>
        /\d{8}\D/.test(value) || 'El NIF debe tener un formato correcto.',
    },
  }),
  methods: {
    save() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.loading = true
      this.$emit('onSubmit', this.person)
      this.loading = false
    },
    saveImage(url) {
      this.person.image = url
    },
  },
}
</script>

<style lang="scss" scoped>
.card--flex-toolbar {
  z-index: 6;
  margin-top: -64px;
}
</style>

