<template>
  <v-card max-height="380">
    <v-card-text>
      <ve-line :data="data" />
    </v-card-text>
  </v-card>
</template>

<script>
import VeLine from 'v-charts/lib/line.common'

export default {
  name: 'VCardChartLine',
  components: {
    VeLine,
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


