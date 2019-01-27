<template>
  <v-toolbar
    color="amber"
    absolute
    clipped-left
  >
    <v-toolbar-title class="headline">
      <span>Nóminas</span>
    </v-toolbar-title>
    <v-spacer />
    <v-card-user :data="attributes" />
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
