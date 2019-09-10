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
              lg11
              xl7
            >
              <v-card class="elevation-2">
                <v-upload-image
                  :image="company.image"
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
                v-model="company.name"
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
                v-model="company.cif"
                :rules="[rules.cif]"
                label="Cif"
                mask="A-########"
                append-icon="credit_card"
                validate-on-blur
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="company.address"
                label="Dirección"
                append-icon="room"
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
                append-icon="phone"
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
                append-icon="email"
              />
            </v-flex>
            <v-flex
              xs12
              md6
            >
              <v-text-field
                v-model="company.web"
                label="Web"
                append-icon="web"
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
  name: 'VCardBusinessForm',
  components: {
    VUploadImage,
  },
  mixins: [loadingMixin],
  props: {
    companyData: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  data: () => ({
    valid: false,
    company: {},
    rules: {
      required: value => !!value || 'Este campo es obligatorio.',
      cif: value =>
        !!value &&
        (/\D\d{8}/.test(value) || 'El CIF debe tener un formato correcto.'),
    },
  }),
  mounted() {
    this.company = { ...this.companyData }
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
      this.$set(this.company, 'image', image)
    },
  },
}
</script>

<style lang="scss" scoped>
.card--flex-toolbar {
  margin-top: -64px;
}
</style>
