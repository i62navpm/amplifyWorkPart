<template>
  <v-hover>
    <v-card
      slot-scope="{ hover }"
      :class="`elevation-${hover ? 6 : 2}`"
    >
      <div id="drag-drop-area" />
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
            myDevice: 'Mi ordenador',
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

    uppy.on('complete', result => {
      console.log(
        'Upload complete! We’ve uploaded these files:',
        result.successful
      )
    })
  },
}
</script>



