<template>
  <v-menu
    :close-on-content-click="false"
    fixed
    offset-y
    bottom
    left
    light
  >
    <v-progress-circular
      v-if="loading"
      slot="activator"
      :width="2"
      indeterminate
      size="26"
      color="white"
    />
    <v-avatar
      v-else
      slot="activator"
      color="red darken-4"
      class="ma-1"
      size="32"
    >
      <span class="white--text">
        {{ data.email.charAt(0).toUpperCase() }}
      </span>
    </v-avatar>

    <v-card>
      <v-list>
        <v-list-tile avatar>
          <v-list-tile-avatar color="red darken-4">
            <span class="white--text">
              {{ data.email.charAt(0).toUpperCase() }}
            </span>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>Hola!</v-list-tile-title>
            <v-list-tile-sub-title>{{ data.email }}</v-list-tile-sub-title>
          </v-list-tile-content>

          <v-list-tile-action>
            <v-btn
              class="grey--text"
              icon
              @click.native="logout"
            >
              <v-icon>logout</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-menu>
</template>

<script>
export default {
  name: 'VCardUser',
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({ email: '' }),
    },
  },
  data: () => ({
    loading: false,
  }),
  methods: {
    async logout() {
      try {
        await this.$Amplify.Auth.signOut()
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
