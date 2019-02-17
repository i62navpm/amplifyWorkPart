<template>
  <v-card max-height="350">
    <v-card-text>
      <ve-pie
        :data="data"
        height="350px"
      />
    </v-card-text>
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


