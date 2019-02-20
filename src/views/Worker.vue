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
        <the-breadcrums :breadcrumbs="['home', 'people']" />
      </v-flex>
      <v-flex
        xs12
        class="px-4"
      >
        <v-layout
          align-center
          row
          spacer
        >
          <v-flex shrink>
            <v-person-avatar :name="'Name Test Surname 1'" />
          </v-flex>
          <v-flex xs12>
            <span class="display-1 font-weight-light">
              Name Test Surname 1
            </span>
          </v-flex>
          <v-flex shrink>
            <v-icon
              class="pointer"
              x-large
              @click.native="$router.push(dynamicRoute.to)"
            >
              {{ dynamicRoute.icon }}
            </v-icon>
          </v-flex>
        </v-layout>
      </v-flex>

      <v-flex xs12>
        <router-view />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import TheBreadcrums from '../components/TheBreadcrums'
import VPersonAvatar from '../components/VPersonAvatar'

export default {
  components: {
    TheBreadcrums,
    VPersonAvatar,
  },
  data: function() {
    return {
      workerRoutes: {
        worker: {
          icon: 'local_printshop',
          to: 'detail',
        },
        workerDetail: {
          icon: 'calendar_today',
          to: { name: 'worker' },
        },
      },
    }
  },
  computed: {
    dynamicRoute() {
      return this.workerRoutes[this.$route.name]
    },
  },
}
</script>

<style lang="scss">
.v-icon {
  &.pointer {
    cursor: pointer;
  }
}
</style>

