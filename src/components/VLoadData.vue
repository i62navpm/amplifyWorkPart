<template>
  <transition
    transition
    name="fade"
    mode="out-in"
  >
    <div
      v-if="loading"
      key="loading"
    >
      <div class="title font-weight-light text-xs-center py-5">
        <slot name="loading">
          Cargando...
        </slot>
      </div>
    </div>

    <div
      v-else-if="showNoResults"
      key="noResults"
    >
      <div class="title font-weight-light text-xs-center py-5">
        <slot name="noData">
          Aún no hay nada creado
        </slot>
      </div>
    </div>

    <slot v-else />
  </transition>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
    showNoResults: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
}
</script>
