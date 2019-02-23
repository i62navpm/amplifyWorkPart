<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 2}`"
    >
      <div v-show="!preview">
        <div id="drag-drop-area" />
      </div>
      <div
        v-if="preview"
        class="text-xs-center"
      >
        <v-btn
          icon
          absolute
          right
          class="button--remove-image"
          @click.native="removeImage"
        >
          <v-icon>close</v-icon>
        </v-btn>
        <v-img
          :src="preview"
          :lazy-src="require('../assets/images/businessDefault.png')"
          :height="300"
          contain
          class="grey lighten-5"
        >
          <v-layout
            slot="placeholder"
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
        </v-img>
      </div>
    </v-card>
  </v-hover>
</template>

<script>
import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import Webcam from '@uppy/webcam'
import '@uppy/core/dist/style.css'
import '@uppy/webcam/dist/style.css'
import '@uppy/dashboard/dist/style.css'

export default {
  name: 'VUploadImage',
  data: function() {
    return { image: null, preview: null }
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

    uppy.on('file-added', file => (this.image = file))
    uppy.on('file-removed', file => (this.image = null))
    uppy.on('complete', result => (this.preview = result.successful[0].preview))
    uppy.on('upload', async () => {
      if (this.image) {
        const { name, type: contentType, data } = this.image
        try {
          const { key } = await this.$Amplify.Storage.put(name, data, {
            contentType,
          })
          this.$emit('onUploadImage', key)
          uppy.reset()
        } catch (err) {
          uppy.reset()
          uppy.info(err, 'error')
        }
      }
    })
  },
  methods: {
    removeImage() {
      this.preview = null
      this.$emit('onUploadImage', null)
    },
  },
}
</script>




<style lang="scss" scoped>
.button--remove-image {
  z-index: 10;
}
</style>
