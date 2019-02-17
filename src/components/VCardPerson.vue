<template>
  <div>
    <v-confirm-modal
      ref="deleteModal"
      @onAccept="deletePerson"
    />
    <v-card
      class="mx-auto"
      max-width="400"
    >
      <v-card-title
        primary-title
        style="position: relative;"
        class="pb-0"
      >
        <v-btn
          absolute
          color="primary"
          class="white--text"
          fab
          right
          top
          :to="{name: 'worker', params: {id: person.id}}"
        >
          <v-icon>calendar_today</v-icon>
        </v-btn>

        <v-layout
          class="mt-3"
          align-center
          justify-space-around
          wrap
        >
          <v-flex
            xs12
            sm2
            class="text-xs-center"
          >
            <v-person-avatar :name="person.name" />
          </v-flex>

          <v-flex
            xs12
            sm10
          >
            <h3 class="headline mb-0">
              {{ person.name }}
            </h3>
            <div>{{ person.description }}</div>
          </v-flex>
        </v-layout>
      </v-card-title>

      <v-card-actions>
        <v-spacer />
        <v-btn
          flat
          icon
          color="red"
          @click.native="showModalDeletePerson"
        >
          <v-icon>delete</v-icon>
        </v-btn>
        <v-btn
          flat
          icon
          :to="{name: 'person'}"
          color="green"
        >
          <v-icon>edit</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import VPersonAvatar from './VPersonAvatar'
import VConfirmModal from './VConfirmModal'

export default {
  name: 'VCardPerson',
  components: { VPersonAvatar, VConfirmModal },
  props: {
    person: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    avatar() {
      return avatar(this.person.name || '')
    },
  },
  methods: {
    showModalDeletePerson() {
      this.$refs.deleteModal.open = true
    },
    deletePerson(callback) {
      return new Promise(success => {
        setTimeout(() => {
          success(callback())
        }, 4000)
      })
    },
  },
}
</script>

<style lang="scss">
.avatar {
  svg {
    width: 100%;
  }
}
</style>

