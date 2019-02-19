<template>
  <v-breadcrumbs :items="items">
    <v-icon slot="divider">
      chevron_right
    </v-icon>
    <template
      slot="item"
      slot-scope="props"
    >
      <li>
        <router-link
          :to="{name: props.item.href}"
          class="v-breadcrumbs__item"
          :class="[props.item.disabled && 'v-breadcrumbs__item--disabled']"
        >
          {{ props.item.text }}
        </router-link>
      </li>
    </template>
  </v-breadcrumbs>
</template>

<script>
export default {
  name: 'TheBreadcrums',
  props: {
    breadcrumbs: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      routes: {
        home: {
          text: 'Empresas',
          href: 'home',
        },
        people: {
          text: 'Trabajadores',
          href: 'people',
        },
        worker: {
          text: 'Calendario trabajador',
          href: 'worker',
        },
        workerDetail: {
          text: 'Detalles trabajador',
          href: 'worker',
        },
      },
    }
  },
  computed: {
    items() {
      return [
        ...this.breadcrumbs.map(breadcrumb => this.routes[breadcrumb]),
        { ...this.routes[this.$route.name], disabled: true },
      ]
    },
  },
}
</script>
