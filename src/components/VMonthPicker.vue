<template>
  <v-date-picker
    v-model="dateModel"
    class="month-picker"
    locale="es"
    show-current
    full-width
    type="month"
    @input="changeDate"
  />
</template>

<script>
export default {
  name: 'VMonthPicker',
  props: {
    date: {
      type: String,
      required: false,
      default: new Date().toISOString().substr(0, 7),
    },
  },
  data() {
    return {
      dateModel: this.date,
    }
  },
  methods: {
    changeDate(value) {
      this.$emit('onChange', value)
    },
  },
}
</script>

<style lang="scss" scoped>
.month-picker {
  height: 100%;
}
</style>