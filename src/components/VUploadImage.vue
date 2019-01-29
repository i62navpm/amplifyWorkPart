<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 2}`"
    >
      <v-img
        :src="
          imageUrl"
        :lazy-src="require('../assets/images/businessDefault.png')"
        contain
        class="blue-grey lighten-5 upload-image"
        height="150"
        @click="pickFile"
      />
      <input
        ref="image"
        type="file"
        style="display: none"
        accept="image/*"
        @change="onFilePicked"
      >
    </v-card>
  </v-hover>
</template>

<script>
export default {
  name: 'VUploadImage',
  data: () => ({
    title: 'Image Upload',
    dialog: false,
    imageName: '',
    imageUrl: '',
    imageFile: '',
  }),
  methods: {
    pickFile() {
      this.$refs.image.click()
    },

    onFilePicked(e) {
      const files = e.target.files
      if (files[0] !== undefined) {
        this.imageName = files[0].name
        if (this.imageName.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(files[0])
        fr.addEventListener('load', () => {
          this.imageUrl = fr.result
          this.imageFile = files[0] // this is an image file that can be sent to server...
        })
      } else {
        this.imageName = ''
        this.imageFile = ''
        this.imageUrl = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.upload-image {
  cursor: pointer;
}
</style>

