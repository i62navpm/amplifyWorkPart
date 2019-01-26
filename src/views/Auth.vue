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
        md4
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
