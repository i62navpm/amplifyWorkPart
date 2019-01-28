<template>
  <v-flex
    xs12
    class="text-xs-center text-sm-center text-md-center text-lg-center"
  >
    <img
      v-if="imageUrl"
      :src="imageUrl"
      height="150"
    >
    <v-text-field
      v-model="imageName"
      readonly=""
      label="Selecciona una imagen"
      prepend-icon="image"
      @click="pickFile"
    />
    <input
      ref="image"
      type="file"
      style="display: none"
      accept="image/*"
      @change="onFilePicked"
    >
  </v-flex>
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
.card--flex-toolbar {
  z-index: 6;
  margin-top: -64px;
}
</style>

