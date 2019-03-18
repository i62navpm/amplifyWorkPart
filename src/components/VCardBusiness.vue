<template>
  <div>
    <v-confirm-modal
      ref="deleteModal"
      @onAccept="deleteBusiness"
    />
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        aspect-ratio="2.75"
      />
      <v-card-title
        class="pb-0"
        primary-title
        style="position: relative;"
      >
        <v-btn
          absolute
          color="primary"
          class="white--text"
          fab
          right
          top
          :to="{name: 'people'}"
        >
          <v-icon>people</v-icon>
        </v-btn>

        <div>
          <h3 class="headline mb-0">
            Kangaroo Valley Safari
          </h3>
          <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-spacer />
        <v-btn
          flat
          icon
          color="red"
          @click.native="showModalDeleteBusiness"
        >
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn
          flat
          icon
          :to="{name: 'company'}"
          color="green"
        >
          <v-icon>edit</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import VConfirmModal from './VConfirmModal'
import notification from '../mixins/notification'

export default {
  name: 'VCardBusiness',
  components: { VConfirmModal },
  mixins: [notification],
  props: {
    company: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    showModalDeleteBusiness() {
      this.$refs.deleteModal.open = true
    },
    deleteBusiness(callback) {
      return new Promise(success =>
        setTimeout(() => {
          try {
            this.notifySuccess('Empresa eliminada correctamente')
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


