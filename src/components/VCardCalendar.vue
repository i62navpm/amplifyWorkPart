<template>
  <v-card>
    <v-card-text>
      <full-calendar
        :events="data"
        :config="config"
        default-view="month"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import 'fullcalendar/dist/fullcalendar.css'

export default {
  name: 'VCardChartCalendar',
  components: {
    FullCalendar,
  },
  props: {
    data: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      config: {
        locale: 'es',
      },
    }
  },
}
</script>


