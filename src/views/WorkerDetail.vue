<template>
  <v-layout
    row
    wrap
  >
    <v-flex xs12>
      <v-layout
        row
        :column="$vuetify.breakpoint.xsOnly"
        spacer
      >
        <v-flex
          xs12
          sm4
          lg3
        >
          <v-month-picker />
        </v-flex>
        <v-flex
          xs12
          sm8
          lg9
        >
          <v-card-chart-histogram :data="chartData" />
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-card-pdf />
    </v-flex>
  </v-layout>
</template>

<script>
import VCardChartHistogram from '../components/VCardChartHistogram'
import VCardPdf from '../components/VCardPdf'
import VMonthPicker from '../components/VMonthPicker'

export default {
  components: {
    VCardChartHistogram,
    VCardPdf,
    VMonthPicker,
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
