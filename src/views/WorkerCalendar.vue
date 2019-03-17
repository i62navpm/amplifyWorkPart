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
      </v-layout>
    </v-flex>
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
          <v-layout
            column
            spacer
          >
            <v-flex>
              <v-month-picker />
            </v-flex>
            <v-flex>
              <v-card-debt-detail :debt="4400" />
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex
          xs12
          sm8
          lg9
        >
          <the-card-calendar :data="calendarData" />
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import VCardChartLine from '../components/VCardChartLine'
import VCardChartPie from '../components/VCardChartPie'
import TheCardCalendar from '../components/TheCardCalendar'
import VMonthPicker from '../components/VMonthPicker'
import VCardDebtDetail from '../components/VCardDebtDetail'

export default {
  components: {
    VCardChartLine,
    VCardChartPie,
    TheCardCalendar,
    VCardDebtDetail,
    VMonthPicker,
  },
  data() {
    return {
      calendarData: [
        {
          money: 55,
          salary: 'fullSalary',
          start: '2019-02-01',
        },
        {
          money: 25,
          salary: 'halfSalary',
          start: '2019-02-01',
        },
        {
          money: 10,
          salary: 'customSalary',
          start: '2019-02-01',
        },
        {
          money: 100,
          salary: 'debtSalary',
          start: '2019-02-01',
        },
      ],
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
