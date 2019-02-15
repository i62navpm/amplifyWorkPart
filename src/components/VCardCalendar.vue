<template>
  <div>
    <v-event-options
      ref="eventOptions"
      @onAccept="saveEvent"
    />
    <v-card>
      <v-card-text>
        <full-calendar
          :events="data"
          :config="config"
          default-view="month"
          @event-selected="eventSelected"
          @event-created="eventCreated"
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import { FullCalendar } from 'vue-full-calendar'
import VEventOptions from './VEventOptions'
import 'fullcalendar/dist/fullcalendar.css'

export default {
  name: 'VCardChartCalendar',
  components: {
    FullCalendar,
    VEventOptions,
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
        header: { left: 'title', center: '', right: 'today prev,next' },
        buttonText: { today: 'Hoy' },
        editable: false,
        locale: 'es',
      },
    }
  },
  methods: {
    eventSelected(event, element) {
      this.$refs.eventOptions.open = true
      console.log('eventSelected')
    },
    eventCreated() {
      console.log('eventCreated')
    },
    saveEvent(callback) {
      return new Promise(success => {
        setTimeout(() => {
          success(callback())
        }, 4000)
      })
    },
  },
}
</script>


