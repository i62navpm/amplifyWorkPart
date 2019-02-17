<template>
  <v-card max-height="350">
    <v-card-text>
      <ve-line
        :data="data"
        height="350px"
      />
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


