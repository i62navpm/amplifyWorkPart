<template>
  <div>
    <v-event-options-new ref="eventOptionsNew" />
    <v-event-options-edit ref="eventOptionsEdit" />
    <v-card>
      <v-card-text>
        <full-calendar
          ref="fullCalendar"
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
import VEventOptionsNew from './VEventOptionsNew'
import VEventOptionsEdit from './VEventOptionsEdit'
import notification from '../mixins/notification'
import 'fullcalendar/dist/fullcalendar.css'

const moment = extendMoment(Moment)

export default {
  name: 'VCardChartCalendar',
  components: {
    FullCalendar,
    VEventOptionsNew,
    VEventOptionsEdit,
  },
  mixins: [notification],
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
        height: 650,
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
    openEventOptionsNew(events = []) {
      setTimeout(() => {
        this.$refs.eventOptionsNew.open = true
        this.$refs.eventOptionsNew.events = events
      }, 100)
    },
    openEventOptionsEdit(event) {
      setTimeout(() => {
        this.$refs.eventOptionsEdit.open = true
        this.$refs.eventOptionsEdit.event = event
      }, 100)
    },
    eventSelected(event) {
      this.openEventOptionsEdit(event)
    },
    eventCreated(event) {
      const range = this.getRangeDates(
        event.start,
        event.end.subtract(1, 'days')
      )
      let events = this.exludeExistEvents(this.events, range)
      events = this.formatEvents(events)
      events.length && this.openEventOptionsNew(events)
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
  },
}
</script>


