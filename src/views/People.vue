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
        <the-breadcrums :breadcrumbs="['home']" />
      </v-flex>
      <v-flex xs12>
        <v-layout
          column
          wrap
        >
          <v-flex
            v-for="(person, index) of people"
            :key="person.id"
          >
            <v-card-person
              :class="index && 'mt-4'"
              :person="person"
            />
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheBreadcrums from '../components/TheBreadcrums'
import VCardPerson from '../components/VCardPerson'

export default {
  components: {
    TheBreadcrums,
    VCardPerson,
  },
  data() {
    return {
      people: [
        {
          id: 'aaa-bbb-ccc1',
          description: 'Description mock 1',
          image: null,
          name: 'Name Test Surname 1',
        },
        {
          id: 'aaa-bbb-ccc2',
          description: 'Description mock2',
          image: null,
          name: 'Name Test Surname 2',
        },
      ],
    }
  },
}
</script>
