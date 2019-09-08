<template>
  <v-app>
    <the-toolbar v-if="user" />
    <the-notification />
    <v-content class="main-content">
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
      return this.$store.getters.getUser.username
    },
  },
}
</script>

<style lang="scss" scoped>
.main-content {
  z-index: 5;
}
</style>