<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      max-width="400"
    >
      <v-img
        src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
        aspect-ratio="2.75"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            Plantilla
          </div>
        </v-expand-transition>
      </v-img>

      <v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">
            Kangaroo Valley Safari
          </h3>
          <div>Located two hours south of Sydney in the Southern Highlands of New South Wales, ...</div>
        </div>
      </v-card-title>

      <v-card-actions>
        <v-spacer />
        <v-btn
          flat
          :to="{name: 'company'}"
          color="primary"
        >
          Share
        </v-btn>
        <v-btn
          flat
          color="primary"
        >
          Explore
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'VCardBusiness',
  props: {
    company: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
}
</script>

<style lang="scss" scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>

