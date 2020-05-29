<template>
  <div>
    <v-row dense>
      <v-col cols="12">
        <!-- <v-btn icon color="primary" title="发送在线图片">
          <v-icon>{{ icons.mdiImageFilterDrama }}</v-icon>
        </v-btn> -->
        <send-image-message></send-image-message>
      </v-col>
    </v-row>
    <v-form ref="form" class="text-right">
      <v-textarea
        v-model="message"
        outlined
        name="message"
        placeholder="想 BB 些什么？"
        counter
        required
      ></v-textarea>
      <v-btn :disabled="!message" color="primary" block @click="sendMessage">
        发送
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import icons from '~/assets/utils/icons'
import SendImageMessage from '~/components/message/SendImageMessage'
export default {
  components: {
    SendImageMessage
  },
  data() {
    return {
      icons,
      valid: false,
      dialog: false
    }
  },
  computed: {
    message: {
      get() {
        return this.$store.state.messages.message
      },
      set(val) {
        this.$store.commit('messages/setMessage', val)
      }
    }
  },
  methods: {
    sendMessage() {
      if (this.message) {
        this.$store.dispatch('messages/send')
      }
    }
  }
}
</script>

<style></style>
