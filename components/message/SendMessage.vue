<template>
  <v-form ref="form" v-model="valid" class="text-right">
    <v-textarea
      v-model="message"
      outlined
      name="message"
      placeholder="想 BB 些什么？"
      required
      :rules="messageRules"
    ></v-textarea>
    <v-btn :disabled="!valid" color="primary" @click="sendMessage">
      发送
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false,
      messageRules: [(v) => !!v || '发空消息有啥用？']
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
      this.$store.dispatch('messages/send')
    }
  }
}
</script>

<style></style>
