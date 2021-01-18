<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <template #activator="{ on }">
        <v-list-item v-on="on">
          <v-list-item-title>上传图片</v-list-item-title>
        </v-list-item>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">上传图片</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-file-input
                v-model="img"
                accept="image/*"
                show-size
                clearable
                label="来点色图？"
                hide-details
                prepend-icon="$mdiImage"
              ></v-file-input>
            </v-col>
            <v-col cols="12">
              <v-radio-group v-model="type" row>
                <v-radio label="群" value="group"></v-radio>
                <v-radio label="好友" value="friend"></v-radio>
                <v-radio label="临时" value="temp"></v-radio>
              </v-radio-group>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialog = false">关闭</v-btn>
          <v-btn color="blue darken-1" text @click="uploadImage"> 发送 </v-btn>
        </v-card-actions></v-card
      >
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      img: null,
      type: 'group',
    }
  },
  methods: {
    async uploadImage() {
      const form = new FormData()
      form.append('sessionKey', this.$store.state.auth.sessionKey)
      form.append('type', this.type)
      form.append('img', this.img)
      await this.$store.dispatch('messages/image/upload', form)
      this.dialog = false
    },
  },
}
</script>
