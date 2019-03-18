<template>
  <v-app>
    <the-toolbar v-if="user" />
    <the-notification />
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
import TheNotification from './components/TheNotification'

export default {
  name: 'App',
  components: {
    TheToolbar,
    TheNotification,
  },
  computed: {
    user() {
      const { username = '' } = this.$store.getters.getUser
      return username
    },
  },
}
</script>
