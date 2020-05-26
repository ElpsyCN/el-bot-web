<template>
  <div>
    <v-row>
      <v-col cols="12" sm="3">
        <message-list></message-list>
      </v-col>
      <v-col cols="12" sm="9">
        <v-col cols="12">
          <send-message></send-message>
        </v-col>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MessageList from '~/components/MessageList'
import SendMessage from '~/components/message/SendMessage'
export default {
  middleware: 'auth',
  components: {
    MessageList,
    SendMessage
  },

  head: {
    title: '控制台'
  }
}
</script>
