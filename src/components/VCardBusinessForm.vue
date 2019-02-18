<template>
  <v-card class="card--flex-toolbar">
    <v-toolbar
      card
      prominent
    >
      <v-toolbar-title class="body-2 grey--text">
        Empresa
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
              md11
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
                v-model="company.name"
                :rules="[rules.required]"
                label="Name"
                required
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="company.cif"
                :rules="[rules.required, rules.cif]"
                label="Cif"
                mask="A-########"
                validate-on-blur
                required
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="company.address"
                label="Dirección"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="company.phone"
                label="Teléfono"
                mask="#########"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="company.email"
                label="Email"
                type="email"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="company.web"
                label="Web"
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
  name: 'VCardBusinessForm',
  components: {
    VUploadImage,
  },
  props: {
    company: {
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
      cif: value =>
        /\D\d{8}/.test(value) || 'El CIF debe tener un formato correcto.',
    },
  }),
  methods: {
    save() {
      if (!this.$refs.form.validate()) {
        return
      }
      this.loading = true
      this.$emit('onSubmit', this.company)
      this.loading = false
    },
    saveImage(url) {
      this.company.image = url
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

