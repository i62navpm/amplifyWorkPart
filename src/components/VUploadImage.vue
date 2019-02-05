<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 2}`"
    >
      <v-btn
        v-if="imageUrl"
        icon
        class="close-button"
        @click.native="removeFile"
      >
        <v-icon>
          close
        </v-icon>
      </v-btn>
      <v-img
        :src="imageUrl || defaultImage"
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
    defaultImage: require('../assets/images/businessDefault.png'),
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
          this.imageFile = files[0]
          this.$emit('onUploadImage', this.imageUrl)
        })
      } else {
        this.removeFile()
      }
    },
    removeFile() {
      this.imageName = ''
      this.imageFile = ''
      this.imageUrl = ''
      this.$emit('onUploadImage', this.imageUrl)
    },
  },
}
</script>

<style lang="scss" scoped>
.close-button {
  position: absolute;
  z-index: 10;
  right: 0;
}
.upload-image {
  cursor: pointer;
}
</style>

