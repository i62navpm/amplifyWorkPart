<template>
  <v-container
    grid-list-xl
    fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <the-breadcrums :breadcrumbs="['home']" />
      </v-flex>
      <v-flex xs12>
        <v-layout
          column
          wrap
        >
          <v-flex>
            <v-card-person :person="{}" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheBreadcrums from '../components/TheBreadcrums'
import VCardPerson from '../components/VCardPerson'

export default {
  components: {
    TheBreadcrums,
    VCardPerson,
  },
}
</script>
