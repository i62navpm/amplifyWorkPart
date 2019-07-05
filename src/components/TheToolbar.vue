<template>
  <v-toolbar
    color="amber"
    absolute
    :extended="extendToolbar"
    app
  >
    <v-toolbar-title class="headline">
      <router-link
        class="toolbar__title"
        to="/"
      >
        <span>Nóminas</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer />
    <span v-if="$store.getters.getLoading">
      <v-fade-transition leave-absolute>
        <v-progress-circular
          indeterminate
          leave-absolute
          color="primary"
        />
      </v-fade-transition>
    </span>
    <v-card-user
      v-else
      :data="attributes"
    />
  </v-toolbar>
</template>

<script>
import VCardUser from './VCardUser'
export default {
  name: 'TheToolbar',
  components: {
    VCardUser,
  },
  computed: {
    attributes() {
      const { attributes = {} } = this.$store.getters.getUser
      return attributes
    },
    extendToolbar() {
      return this.$store.getters.getExtended
    },
  },
  methods: {
    async logout() {
      try {
        await this.$Amplify.Auth.signOut()
        this.$router.push({ name: 'auth' })
        this.$store.commit('setUser', {})
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.toolbar__title {
  color: inherit;
  text-decoration: none;
}
</style>

