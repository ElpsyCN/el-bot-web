<template>
  <v-dialog v-model="dialog" max-width="600" persistent>
    <v-card>
      <v-card-title> 图片上传信息 </v-card-title>
      <v-card-text>
        <v-form ref="form">
          <v-text-field
            v-model="uploadInfo.imageId"
            label="ID"
            disabled
          ></v-text-field>
          <v-text-field
            v-model="uploadInfo.path"
            label="路径"
            disabled
          ></v-text-field>
          <v-text-field
            v-model="uploadInfo.url"
            label="链接"
            disabled
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="dialog = false"> 关闭 </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('messages/image', ['uploadInfo']),
    dialog: {
      get() {
        return this.$store.state.messages.image.dialog
      },
      set(val) {
        this.$store.commit('messages/image/setDialog', val)
      },
    },
  },
}
</script>

<style></style>
