<template>
  <div>
    <v-menu top offset-y>
      <template #activator="{ on }">
        <v-btn icon color="primary" title="发送图片" v-on="on">
          <v-icon>$vuetify.icons.mdiImage</v-icon>
        </v-btn>
      </template>

      <v-list dense>
        <send-image-by-url></send-image-by-url>
        <upload-image></upload-image>
      </v-list>
    </v-menu>
    <upload-image-info></upload-image-info>
  </div>
</template>

<script>
import SendImageByUrl from '~/components/message/image/SendImageByUrl'
import UploadImage from '~/components/message/image/UploadImage'
import UploadImageInfo from '~/components/message/image/UploadImageInfo'

export default {
  components: {
    SendImageByUrl,
    UploadImage,
    UploadImageInfo,
  },
}
</script>
