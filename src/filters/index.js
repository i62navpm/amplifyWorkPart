import Vue from 'vue'
import eventColors from './eventColors'
import eventName from './eventName'

Vue.filter('eventColors', eventColors)
Vue.filter('eventName', eventName)
