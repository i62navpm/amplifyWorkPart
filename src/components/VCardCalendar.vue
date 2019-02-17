<template>
  <div>
    <v-event-options
      ref="eventOptions"
      @onAccept="saveEvent"
    />
    <v-card>
      <v-card-text>
        <full-calendar
          :events="events"
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
import Moment from 'moment'
import { extendMoment } from 'moment-range'
import { FullCalendar } from 'vue-full-calendar'
import VEventOptions from './VEventOptions'
import 'fullcalendar/dist/fullcalendar.css'

const moment = extendMoment(Moment)

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
      events: [],
      config: {
        header: { left: 'title', center: '', right: 'today prev,next' },
        buttonText: { today: 'Hoy' },
        editable: false,
        showNonCurrentDates: false,
        locale: 'es',
        longPressDelay: '200',
      },
    }
  },
  beforeMount() {
    this.parseInputEvents([...this.data])
  },
  methods: {
    parseInputEvents(events = []) {
      this.events = events.map(event => {
        return {
          ...event,
          ...this.$options.filters.eventTitle(event.salary),
          ...this.$options.filters.eventColor(event.salary),
        }
      })
    },
    openEventOptions(events = []) {
      setTimeout(() => {
        this.$refs.eventOptions.open = true
        this.$refs.eventOptions.events = events
      }, 100)
    },
    eventSelected(event) {
      this.openEventOptions([event])
    },
    eventCreated(event) {
      const range = this.getRangeDates(
        event.start,
        event.end.subtract(1, 'days')
      )
      let events = this.exludeExistEvents(this.events, range)
      events = this.formatEvents(events)
      events.length && this.openEventOptions(events)
    },
    getRangeDates(start, end) {
      return moment.range(start, end)
    },
    exludeExistEvents(events, range) {
      return [...range.by('days')].filter(
        day => !events.some(({ start }) => start === day.format())
      )
    },
    formatEvents(events) {
      return events.map(event => ({ start: event.format() }))
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


