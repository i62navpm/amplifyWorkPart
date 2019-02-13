<template>
  <v-card max-height="350">
    <ve-pie
      :data="data"
      height="350px"
    />
  </v-card>
</template>

<script>
import VePie from 'v-charts/lib/pie.common'

export default {
  name: 'VCardChartPie',
  components: {
    VePie,
  },
  props: {
    data: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>


