<template>
  <v-container
    grid-list-xl
    fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex xs12>
        <the-breadcrums :breadcrumbs="[]" />
      </v-flex>
      <v-flex xs12>
        <v-layout
          column
          wrap
        >
          <v-flex>
            <v-card-business :company="{}" />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheBreadcrums from '../components/TheBreadcrums'
import VCardBusiness from '../components/VCardBusiness'

export default {
  components: {
    TheBreadcrums,
    VCardBusiness,
  },
}
</script>
