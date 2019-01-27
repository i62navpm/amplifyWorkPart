<template>
  <v-app>
    <the-toolbar v-if="user" />
    <v-content>
      <v-container
        fluid
        fill-height
        class="grey lighten-4"
      >
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheToolbar from './components/TheToolbar'

export default {
  name: 'App',
  components: {
    TheToolbar,
  },
  computed: {
    user() {
      const { username = '' } = this.$store.getters.getUser
      return username
    },
  },
}
</script>
