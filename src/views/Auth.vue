<template>
  <v-container
    fluid
    fill-height
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm8
        md6
      >
        <amplify-authenticator :auth-config="{signUpConfig}" />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { components } from 'aws-amplify-vue'

export default {
  components: {
    ...components,
  },
  data: () => ({
    signUpConfig: {
      hiddenDefaults: ['phone_number', 'email'],
    },
  }),
}
</script>

<style lang="scss">
.Form__formSection___3tqxz {
  display: block;
  min-width: inherit;
  .error {
    margin-top: 1.5em;
    color: red !important;
    background-color: inherit !important;
    border-color: inherit !important;
  }
}
</style>
