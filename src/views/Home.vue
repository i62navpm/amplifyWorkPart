<template>
  <div>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">
          MATERIAL DESIGN
        </span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        color="primary"
        @click.native="logout"
      >
        Salir
      </v-btn>
    </v-toolbar>
    <router-view />
  </div>
</template>

<script>
export default {
  components: {},
  methods: {
    async logout() {
      try {
        await this.$Amplify.Auth.signOut()
        this.$store.commit('setUser', {})
        this.$router.push({ name: 'auth' })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
