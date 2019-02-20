<template>
  <v-card max-height="380">
    <v-card-text>
      <ve-histogram :data="data" />
    </v-card-text>
  </v-card>
</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common'

export default {
  name: 'VCardChartHistogram',
  components: {
    VeHistogram,
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


