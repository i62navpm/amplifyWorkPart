import Vue from 'vue'
import eventColor from './eventColor'
import eventTitle from './eventTitle'

Vue.filter('eventColor', eventColor)
Vue.filter('eventTitle', eventTitle)
