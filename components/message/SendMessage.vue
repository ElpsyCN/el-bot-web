<template>
  <v-form ref="form" class="text-right">
    <v-textarea
      v-model="message"
      outlined
      name="message"
      placeholder="想 BB 些什么？"
      hide-details
      required
    ></v-textarea>
    <v-btn
      class="mt-2"
      :disabled="!message"
      color="primary"
      @keyup.enter="sendMessage"
      @click="sendMessage"
      block
    >
      发送
    </v-btn>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      valid: false
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
