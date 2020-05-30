<template>
  <v-dialog v-model="dialog" max-width="600px">
    <template v-slot:activator="{ on }">
      <v-list-item v-on="on">
        <v-list-item-title>发送图片消息（通过链接）</v-list-item-title>
      </v-list-item>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">图片链接</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="url"
              label="链接"
              hide-details
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="dialog = false">关闭</v-btn>
        <v-btn color="blue darken-1" text @click="sendImageMessageByUrl">
          发送
        </v-btn>
      </v-card-actions></v-card
    >
  </v-dialog>
</template>

<script>
import icons from '~/assets/utils/icons'
export default {
  data() {
    return {
      icons,
      dialog: false,
      url: ''
    }
  },
  methods: {
    sendImageMessageByUrl() {
      if (this.$store.state.messages.target) {
        this.$store.dispatch('messages/image/send', [this.url])
        this.dialog = false
      } else {
        this.$toast.error('您这图要发给谁？')
      }
    }
  }
}
</script>
