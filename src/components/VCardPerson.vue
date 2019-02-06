<template>
  <v-card
    class="mx-auto mt-4 mb-5"
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
        :to="{name: 'people'}"
      >
        <v-icon>calendar_today</v-icon>
      </v-btn>

      <v-layout
        class="mt-3"
        align-center
        justify-space-around
        wrap
      >
        <v-flex xs2>
          <v-avatar>
            <img
              :src="avatar"
              alt="John"
            >
          </v-avatar>
        </v-flex>

        <v-flex xs10>
          <h3 class="headline mb-0">
            Kangaroo Valley Safari
          </h3>
          <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
        </v-flex>
      </v-layout>
    </v-card-title>

    <v-card-actions>
      <v-spacer />
      <v-btn
        flat
        icon
        color="red"
        @click.native="removePerson"
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
</template>

<script>
import Identicon from 'identicon.js'

export default {
  name: 'VCardPerson',
  props: {
    person: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  computed: {
    avatar() {
      const name = this.person.name || ''
      return (
        'data:image/png;base64,' +
        new Identicon(name.padStart(15, '01'), 48).toString()
      )
    },
  },
  methods: {
    removePerson() {
      console.log(this.person)
    },
  },
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

