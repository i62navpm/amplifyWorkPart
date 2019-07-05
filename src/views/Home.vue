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
          <v-load-data
            :loading="$apollo.queries.listCompanys.loading"
            :show-no-results="!listCompanys.items.length"
          >
            <template v-slot:noData>
              Aún no se ha creado ninguna empresa
            </template>

            <v-flex
              v-for="company in listCompanys.items"
              :key="company.id"
            >
              <v-card-business :company="company" />
            </v-flex>
          </v-load-data>
        </v-layout>
      </v-flex>
      <v-btn
        fixed
        dark
        fab
        bottom
        right
        color="pink"
        :to="{name: 'company'}"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-layout>
  </v-container>
</template>

<script>
import gql from 'graphql-tag'
import TheBreadcrums from '../components/TheBreadcrums'
import VCardBusiness from '../components/VCardBusiness'
import VLoadData from '../components/VLoadData'
import { listCompanys } from '../graphql/queries'

export default {
  components: {
    TheBreadcrums,
    VCardBusiness,
    VLoadData,
  },
  data() {
    return { listCompanys: { items: [] } }
  },
  apollo: {
    listCompanys: gql(listCompanys),
  },
}
</script>
