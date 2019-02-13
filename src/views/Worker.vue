<template>
  <v-container
    grid-list-xl
    text-xs-center
    fluid
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        xs12
        sm6
      >
        <v-card-chart-line :data="chartData" />
      </v-flex>
      <v-flex
        xs12
        sm6
      >
        <v-card-chart-pie :data="chartData" />
      </v-flex>

      <v-flex xs12>
        <v-card
          dark
          color="primary"
        >
          <v-card-text class="px-0">
            12
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import VCardChartLine from '../components/VCardChartLine'
import VCardChartPie from '../components/VCardChartPie'

export default {
  components: {
    VCardChartLine,
    VCardChartPie,
  },
  data() {
    return {
      chartData: {
        columns: ['date', 'cost', 'profit', 'growthRate', 'people'],
        rows: [
          {
            cost: 1523,
            date: '01/01',
            profit: 1523,
            growthRate: 0.12,
            people: 100,
          },
          {
            cost: 1223,
            date: '01/02',
            profit: 1523,
            growthRate: 0.345,
            people: 100,
          },
          {
            cost: 2123,
            date: '01/03',
            profit: 1523,
            growthRate: 0.7,
            people: 100,
          },
          {
            cost: 4123,
            date: '01/04',
            profit: 1523,
            growthRate: 0.31,
            people: 100,
          },
          {
            cost: 3123,
            date: '01/05',
            profit: 1523,
            growthRate: 0.12,
            people: 100,
          },
          {
            cost: 7123,
            date: '01/06',
            profit: 1523,
            growthRate: 0.65,
            people: 100,
          },
        ],
      },
    }
  },
}
</script>
