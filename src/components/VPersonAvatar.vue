<template>
  <v-avatar
    size="52"
    class="avatar"
  >
    <!-- eslint-disable-next-line vue/no-v-html -->
    <span v-html="avatar" />
  </v-avatar>
</template>

<script>
import avatar from '../plugins/avatar.js'

export default {
  name: 'VPersonAvatar',
  props: {
    name: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    avatar() {
      return avatar(this.name || '')
    },
  },
}
</script>

<style lang="scss" scoped>
.avatar {
  svg {
    width: 100%;
  }
}
</style>

