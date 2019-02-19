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
        <the-breadcrums :breadcrumbs="['home', 'people']" />
      </v-flex>
      <v-flex
        xs12
        class="px-4"
      >
        <v-person-avatar
          class="mr-3"
          :name="'Name Test Surname 1'"
        />
        <span class="display-1 font-weight-light">
          Name Test Surname 1
        </span>
      </v-flex>

      <v-flex xs12>
        <router-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheBreadcrums from '../components/TheBreadcrums'
import VPersonAvatar from '../components/VPersonAvatar'

export default {
  components: {
    TheBreadcrums,
    VPersonAvatar,
  },
}
</script>
