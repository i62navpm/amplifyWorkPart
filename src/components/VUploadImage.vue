<template>
  <div>
    <div v-show="!image">
      <div id="drag-drop-area" />
    </div>
    <div
      v-if="image"
      class="text-xs-center"
    >
      <v-btn
        icon
        absolute
        right
        class="button--remove-image"
        @click.native="setImage(null)"
      >
        <v-icon>close</v-icon>
      </v-btn>
      <v-img
        :src="image"
        :lazy-src="defaultImage"
        :height="300"
        contain
        class="grey lighten-5"
      />
    </div>
    <div
      v-if="loading"
      class="image-spinner--loading"
    >
      <v-layout
        fill-height
        align-center
        justify-center
        ma-0
      >
        <v-progress-circular
          indeterminate
          color="primary"
        />
      </v-layout>
    </div>
  </div>
</template>

<script>
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import Webcam from '@uppy/webcam'
import defaultImage from '../assets/images/businessDefault.png'
import '@uppy/core/dist/style.css'
import '@uppy/webcam/dist/style.css'
import '@uppy/dashboard/dist/style.css'

export default {
  name: 'VUploadImage',
  props: {
    image: {
      type: String,
      required: false,
      default: '',
    },
  },
  data() {
    return { defaultImage, loading: false }
  },
  mounted() {
    const uppy = Uppy({
      autoProceed: false,
      restrictions: {
        maxFileSize: 1e7,
        maxNumberOfFiles: 1,
        allowedFileTypes: ['image/*'],
      },
    })
      .use(Dashboard, {
        inline: true,
        proudlyDisplayPoweredByUppy: false,
        height: 300,
        target: '#drag-drop-area',
        replaceTargetContent: true,
        showProgressDetails: true,
        browserBackButtonClose: true,
        locale: {
          strings: {
            dropPasteImport: 'Pega o arrastra aquí la foto',
            myDevice: 'Mis imagenes',
            cancel: 'Cancelar',
            xFilesSelected: {
              0: '%{smart_count} archivo seleccionado',
            },
            uploadXFiles: {
              0: 'Subir %{smart_count} imagen',
            },
          },
        },
      })
      .use(Webcam, {
        target: Dashboard,
        title: 'Cámara',
        modes: ['picture'],
        facingMode: 'user',
      })

    let image
    uppy.on('file-added', file => (image = file))
    uppy.on('file-removed', () => (image = null))
    uppy.on('upload', async () => {
      if (image) {
        this.loading = true
        try {
          const { key } = await this.putImage(image)
          const url = await this.getImage(key)
          this.setImage(url)
          uppy.reset()
        } catch (err) {
          uppy.info(err, 'error')
        } finally {
          this.loading = false
        }
      }
    })
  },
  methods: {
    putImage(image) {
      const { id, type: contentType, data } = image
      return this.$Amplify.Storage.put(id, data, {
        contentType,
      })
    },
    getImage(key) {
      return this.$Amplify.Storage.get(key)
    },
    setImage(image) {
      this.$emit('onUploadImage', image)
    },
  },
}
</script>

<style lang="scss" scoped>
.image-spinner--loading {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background: rgba(255, 255, 255, 0.7);
  z-index: 9999;
}
.button--remove-image {
  z-index: 10;
}
</style>
