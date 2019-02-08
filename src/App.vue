<template>
  <v-app>
    <the-toolbar v-if="user" />
    <v-content>
      <transition
        name="fade"
        mode="out-in"
      >
        <router-view />
      </transition>
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
