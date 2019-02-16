import Vue from 'vue'
import eventColor from './eventColor'
import eventName from './eventName'

Vue.filter('eventColor', eventColor)
Vue.filter('eventName', eventName)
